/**
 * ENOS_PLANES023 · API catálogo prompts GPT
 * Pegar este bloque en Apps Script asociado a la base ENOS.
 * Publicar como Web App: Ejecutar como usuario propietario / Acceso: cualquiera con el enlace.
 * El HTML consulta esta API por JSONP para evitar problemas CORS en GitHub Pages.
 */
function doGet(e) {
  e = e || { parameter: {} };
  var callback = e.parameter.callback || '';
  var data = apiCatalogoPromptsGPT();
  var payload = {
    ok: true,
    generated_at: new Date().toISOString(),
    total: data.length,
    data: data
  };
  var txt = JSON.stringify(payload);
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + txt + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(txt).setMimeType(ContentService.MimeType.JSON);
}

function apiCatalogoPromptsGPT() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var directo = leerHojaComoObjetos_(ss, 'CATALOGO_PROMPTS_GPT');
  if (directo.length) return normalizarCatalogo_(directo, 'CATALOGO_PROMPTS_GPT');

  var salida = [];
  salida = salida.concat(desdeCasosMaestro_(ss));
  salida = salida.concat(desdeSitiosCriticos_(ss));
  salida = salida.concat(desdeInfraestructura_(ss));
  salida = salida.concat(desdeGeorreferencias_(ss));
  salida = salida.concat(desdeAcciones_(ss));
  salida = salida.concat(desdeTareas_(ss));

  return deduplicarCatalogo_(normalizarCatalogo_(salida, 'AUTO'));
}

function leerHojaComoObjetos_(ss, nombre) {
  var sh = ss.getSheetByName(nombre);
  if (!sh) return [];
  var values = sh.getDataRange().getValues();
  if (values.length < 2) return [];
  var headers = values[0].map(function(h){ return String(h || '').trim(); });
  var out = [];
  for (var r = 1; r < values.length; r++) {
    var obj = {};
    var empty = true;
    for (var c = 0; c < headers.length; c++) {
      if (!headers[c]) continue;
      obj[headers[c]] = values[r][c];
      if (values[r][c] !== '' && values[r][c] !== null) empty = false;
    }
    if (!empty) out.push(obj);
  }
  return out;
}

function pick_(obj, keys) {
  for (var i=0;i<keys.length;i++) {
    var k = keys[i];
    if (obj.hasOwnProperty(k) && String(obj[k] || '').trim() !== '') return String(obj[k]).trim();
  }
  return '';
}
function nivel_(v) {
  v = String(v || '').toLowerCase();
  if (v.indexOf('canton') >= 0) return 'cantonal';
  if (v.indexOf('prov') >= 0) return 'provincial';
  if (v.indexOf('zona') >= 0 || v.indexOf('cz') >= 0) return 'zonal';
  return v || 'cantonal';
}
function territorio_(nivel, provincia, canton, actor) {
  if (nivel === 'cantonal') return (provincia || 'SIN_PROVINCIA') + ' / ' + (canton || 'SIN_CANTON');
  if (nivel === 'provincial') return (provincia || 'SIN_PROVINCIA') + ' / ' + (actor || 'ACTOR PROVINCIAL');
  return actor || 'CZ5 SNGR';
}
function prompt_(nombre, codigo, formulario, actor, territorio) {
  return 'Genera el análisis técnico ENOS 2026 para ' + nombre + '. Usa el código técnico interno ' + codigo + '. Formulario/origen: ' + formulario + '. Actor: ' + actor + '. Territorio: ' + territorio + '. Integra datos F01-F07 disponibles, amenaza, exposición, infraestructura, cartografía, acciones, capacidades, seguimiento, brechas, criterios SNGR y recomendaciones. Si falta información, declara limitaciones y datos requeridos.';
}
function normalizarCatalogo_(rows, fuente) {
  return rows.map(function(r, i){
    var nivel = nivel_(pick_(r, ['nivel','nivel_cobertura','cobertura','tipo_cobertura','tipo_actor']));
    var provincia = pick_(r, ['provincia','provincia_codigo']);
    var canton = pick_(r, ['canton','cantón','canton_codigo']);
    var actor = pick_(r, ['actor','institucion','institución','tipo_actor','responsable','entidad_responsable']);
    var territorio = pick_(r, ['territorio','territorio_actor','territorio_visible']) || territorio_(nivel, provincia, canton, actor);
    var codigo = pick_(r, ['codigo_tecnico','codigo','codigo_enos_2026','id_sitio_critico','id_infraestructura','id_accion','id_georreferencia','id_alojamiento','id_capacidad','id_seguimiento']);
    var folio = pick_(r, ['folio_operativo','folio','codigo_corto','id_visible','id_preliminar']) || codigo || ('CASO-' + (i+1));
    var nombre = pick_(r, ['nombre_visible','etiqueta_visible','etiqueta_sitio','nombre_sitio','nombre_infraestructura','nombre_accion','nombre_elemento','tarea','accion','acción','descripcion_corta']) || folio;
    var formulario = pick_(r, ['formulario','formulario_origen','tipo_formulario','origen_formulario','fuente']) || fuente || 'CASO';
    var estado = pick_(r, ['estado','estado_calidad','estado_catalogo','estado_documental','estado_importacion']) || 'DISPONIBLE';
    var url = pick_(r, ['url_drive','url_carpeta_drive','url_verificable','url_capa_mapa','foto_url']);
    var prompt = pick_(r, ['prompt_base_gpt','prompt','prompt_gpt']) || prompt_(nombre, codigo, formulario, actor, territorio);
    return {
      folio_operativo: folio,
      nivel: nivel,
      territorio: territorio,
      provincia: provincia,
      canton: canton,
      actor: actor,
      formulario: formulario,
      nombre_visible: nombre,
      etiqueta_visible: nombre,
      codigo_tecnico: codigo,
      codigo_enos_2026: pick_(r, ['codigo_enos_2026']),
      id_sitio_critico: pick_(r, ['id_sitio_critico']),
      id_infraestructura: pick_(r, ['id_infraestructura']),
      id_georreferencia: pick_(r, ['id_georreferencia']),
      id_accion: pick_(r, ['id_accion']),
      id_preliminar: pick_(r, ['id_preliminar','id_sitio_critico_preliminar']),
      uuid_registro: pick_(r, ['uuid_registro','_uuid']),
      estado: estado,
      url_drive: url,
      prompt_base_gpt: prompt
    };
  }).filter(function(x){ return x.codigo_tecnico && x.nombre_visible; });
}
function deduplicarCatalogo_(rows) {
  var seen = {};
  var out = [];
  rows.forEach(function(r){
    var key = [r.codigo_tecnico, r.folio_operativo, r.nombre_visible].join('|');
    if (!seen[key]) { seen[key] = true; out.push(r); }
  });
  return out;
}

function desdeCasosMaestro_(ss) {
  return leerHojaComoObjetos_(ss, 'CASOS_MAESTRO_V2').map(function(r){
    r.formulario = 'MAESTRO';
    r.nombre_visible = pick_(r,['institucion']) + ' · ' + pick_(r,['canton','provincia']) + ' · ' + pick_(r,['estado_documental']);
    r.codigo_tecnico = pick_(r,['codigo_enos_2026']);
    return r;
  });
}
function desdeSitiosCriticos_(ss) {
  var nombres = ['SITIOS_CRITICOS','SITIOS_CRITICOS_V52_IMPORT','sitios_criticos'];
  var out = [];
  nombres.forEach(function(n){
    leerHojaComoObjetos_(ss,n).forEach(function(r){
      r.formulario = pick_(r,['origen_formulario']) || 'F01';
      r.nombre_visible = pick_(r,['etiqueta_sitio']) || (pick_(r,['nombre_sitio']) + ' · ' + pick_(r,['sector_referencia']) + ' · prioridad ' + pick_(r,['prioridad_sitio']));
      r.codigo_tecnico = pick_(r,['id_sitio_critico','codigo_enos_2026']);
      out.push(r);
    });
  });
  return out;
}
function desdeInfraestructura_(ss) {
  return leerHojaComoObjetos_(ss, 'INFRAESTRUCTURA_EXPUESTA').map(function(r){
    r.formulario = pick_(r,['origen_formulario']) || 'F02';
    r.nombre_visible = pick_(r,['nombre_infraestructura']) + ' · ' + pick_(r,['tipo_infraestructura']) + ' · ' + pick_(r,['criticidad']);
    r.codigo_tecnico = pick_(r,['id_infraestructura','id_sitio_critico','codigo_enos_2026']);
    return r;
  });
}
function desdeGeorreferencias_(ss) {
  return leerHojaComoObjetos_(ss, 'GEOREFERENCIAS').map(function(r){
    r.formulario = pick_(r,['origen_formulario']) || 'F03/GEO';
    r.nombre_visible = pick_(r,['nombre_elemento']) + ' · ' + pick_(r,['tipo_geometria']);
    r.codigo_tecnico = pick_(r,['id_georreferencia','id_infraestructura','id_sitio_critico','codigo_enos_2026']);
    return r;
  });
}
function desdeAcciones_(ss) {
  var nombres = ['ACCIONES_ENOS','ACCIONES','ACCIONES_PREVENTIVAS','acciones_enos'];
  var out = [];
  nombres.forEach(function(n){
    leerHojaComoObjetos_(ss,n).forEach(function(r){
      r.formulario = pick_(r,['origen_formulario']) || 'F04';
      r.nombre_visible = pick_(r,['nombre_accion','accion','acción','tarea','descripcion_accion']) + ' · ' + pick_(r,['responsable','estado']);
      r.codigo_tecnico = pick_(r,['id_accion','codigo_accion','id_sitio_critico','codigo_enos_2026']);
      out.push(r);
    });
  });
  return out;
}
function desdeTareas_(ss) {
  return leerHojaComoObjetos_(ss, 'TAREAS_SEGUIMIENTO').map(function(r){
    r.formulario = 'TAREA/F07';
    r.nombre_visible = pick_(r,['tarea']) + ' · ' + pick_(r,['institucion']) + ' · ' + pick_(r,['estado']);
    r.codigo_tecnico = pick_(r,['tarea_id','codigo_enos_2026']);
    return r;
  });
}
