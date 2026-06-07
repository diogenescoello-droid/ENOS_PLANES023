/************************************************************
 * CZ5 - ECOSISTEMA DIGITAL ENOS GUAYAS 2026
 * KoboToolbox -> Google Sheets -> Dashboard -> GPT
 * F01 a F07
 ************************************************************/

const SHEETS = {
  BASE_CASOS: 'BASE_CASOS',
  PAQUETE_GPT: 'PAQUETE_GPT',
  LOG: 'LOG_SINCRONIZACION',

  BASE_PUNTOS: 'BASE_PUNTOS_RIESGO',
  BASE_INFRA: 'BASE_INFRAESTRUCTURA',
  BASE_CARTOGRAFIA: 'BASE_CARTOGRAFIA',
  BASE_ACCIONES: 'BASE_ACCIONES',
  BASE_PREPARACION: 'BASE_PREPARACION',
  BASE_CAPACIDADES: 'BASE_CAPACIDADES',
  BASE_SEGUIMIENTO: 'BASE_SEGUIMIENTO',
  RESPALDOS_DRIVE: 'RESPALDOS_DRIVE'
};

const FORM_CONFIGS = {
  F01: {
    codigo: 'F01',
    nombre: 'Ficha de punto crítico territorial',
    assetProp: 'F01_ASSET_UID',
    repeatName: 'puntos_riesgo',
    rawMain: 'RAW_F01_PLAN',
    rawRepeat: 'RAW_F01_PUNTOS_RIESGO',
    baseRepeat: 'BASE_PUNTOS_RIESGO',
    tipoBase: 'puntos'
  },
  F02: {
    codigo: 'F02',
    nombre: 'Infraestructura esencial expuesta',
    assetProp: 'F02_ASSET_UID',
    repeatName: 'infraestructura_esencial',
    rawMain: 'RAW_F02_PLAN',
    rawRepeat: 'RAW_F02_INFRAESTRUCTURA',
    baseRepeat: 'BASE_INFRAESTRUCTURA',
    tipoBase: 'infraestructura'
  },
  F03: {
    codigo: 'F03',
    nombre: 'Aporte cartográfico institucional',
    assetProp: 'F03_ASSET_UID',
    repeatName: 'aportes_cartograficos',
    rawMain: 'RAW_F03_CARTOGRAFIA_PLAN',
    rawRepeat: 'RAW_F03_APORTE_CARTOGRAFICO',
    baseRepeat: 'BASE_CARTOGRAFIA',
    tipoBase: 'cartografia'
  },
  F04: {
    codigo: 'F04',
    nombre: 'Acciones preventivas y mitigación',
    assetProp: 'F04_ASSET_UID',
    repeatName: 'acciones_preventivas_mitigacion',
    rawMain: 'RAW_F04_ACCIONES_PLAN',
    rawRepeat: 'RAW_F04_ACCIONES_PREV_MIT',
    baseRepeat: 'BASE_ACCIONES',
    tipoBase: 'acciones'
  },
  F05: {
    codigo: 'F05',
    nombre: 'Alojamientos, rutas y puntos seguros',
    assetProp: 'F05_ASSET_UID',
    repeatName: 'alojamientos_rutas_puntos',
    rawMain: 'RAW_F05_PREPARACION_PLAN',
    rawRepeat: 'RAW_F05_ALOJAMIENTOS_RUTAS',
    baseRepeat: 'BASE_PREPARACION',
    tipoBase: 'preparacion'
  },
  F06: {
    codigo: 'F06',
    nombre: 'Capacidades y recursos',
    assetProp: 'F06_ASSET_UID',
    repeatName: 'capacidades_recursos',
    rawMain: 'RAW_F06_CAPACIDADES_PLAN',
    rawRepeat: 'RAW_F06_CAPACIDADES_RECURSOS',
    baseRepeat: 'BASE_CAPACIDADES',
    tipoBase: 'capacidades'
  },
  F07: {
    codigo: 'F07',
    nombre: 'Seguimiento mensual del plan de acción',
    assetProp: 'F07_ASSET_UID',
    repeatName: 'seguimientos_mensuales',
    rawMain: 'RAW_F07_SEGUIMIENTO_PLAN',
    rawRepeat: 'RAW_F07_SEGUIMIENTO_MENSUAL',
    baseRepeat: 'BASE_SEGUIMIENTO',
    tipoBase: 'seguimiento'
  }
};

/************************************************************
 * MENÚ
 ************************************************************/

function onOpen() {
  try {
    SpreadsheetApp.getUi()
      .createMenu('CZ5 Ecosistema')
      .addItem('1. Probar conexión F01', 'probarConexionKobo')
      .addItem('2. Sincronizar F01', 'sincronizarF01DesdeKobo')
      .addItem('3. Sincronizar TODOS F01-F07', 'sincronizarTodosLosFormularios')
      .addItem('4. Generar paquete GPT por código de caso', 'generarPaqueteGPTDelCasoActivo')
      .addSeparator()
      .addItem('5. Limpiar PAQUETE_GPT', 'limpiarPaquetesGPT')
      .addToUi();
  } catch (error) {
    Logger.log('onOpen no ejecutado desde interfaz de Sheets: ' + error.message);
  }
}

/************************************************************
 * CONFIGURACIÓN
 ************************************************************/

function configurarPropiedadesBase() {
  PropertiesService.getScriptProperties().setProperties({
    KOBO_BASE_URL: 'https://kf.kobotoolbox.org',
    F01_ASSET_UID: 'aDp2JK7VCK26q2QAKiVChQ',
    F02_ASSET_UID: 'abcnTWDp9vCeQCeCjnubAe',
    F03_ASSET_UID: 'a86WYnMJZA3XCNJ8tcjQb2',
    F04_ASSET_UID: 'aZcJKkSCYBciexEAZP2PfA',
    F05_ASSET_UID: 'am4xGEpRP85bXDuEbucPod',
    F06_ASSET_UID: 'aJoE9gh8JgNAfY9froZ4gQ',
    F07_ASSET_UID: 'aGBMqM63bGK9fLADxYfe4w',
    WEBAPP_KEY: 'CZ5_ENOS_2026'
  });

  Logger.log('Propiedades base configuradas. Agregue KOBO_TOKEN manualmente.');
}

/************************************************************
 * CONEXIÓN Y SINCRONIZACIÓN
 ************************************************************/

function probarConexionKobo() {
  return probarConexionFormulario_('F01');
}

function probarConexionFormulario_(formKey) {
  const cfg = FORM_CONFIGS[formKey];
  const uid = getProp_(cfg.assetProp, true);
  const data = koboFetch_(`/api/v2/assets/${uid}/?format=json`);
  const mensaje = `Conexión correcta con Kobo ${formKey}. Formulario: ${data.name || uid}`;
  registrarLog_('OK', 'probarConexionFormulario', mensaje);
  notificar_('Conexión Kobo', mensaje);

  return {
    ok: true,
    formulario: data.name || uid,
    asset_uid: uid,
    formKey: formKey,
    fecha: new Date().toISOString()
  };
}

function sincronizarF01DesdeKobo() {
  const resultado = sincronizarFormularioApi_('F01');
  notificar_('Sincronización F01', resumenSync_(resultado));
  return resultado;
}

function sincronizarTodosLosFormularios() {
  const resultado = sincronizarTodosLosFormulariosApi_();
  notificar_('Sincronización completa', `Procesados: ${resultado.procesados}. Omitidos: ${resultado.omitidos}. Errores: ${resultado.errores}.`);
  return resultado;
}

function sincronizarTodosLosFormulariosApi_() {
  const detalles = [];
  let procesados = 0;
  let omitidos = 0;
  let errores = 0;

  Object.keys(FORM_CONFIGS).forEach(formKey => {
    const cfg = FORM_CONFIGS[formKey];
    const uid = PropertiesService.getScriptProperties().getProperty(cfg.assetProp);

    if (!uid) {
      omitidos += 1;
      detalles.push({
        formKey,
        estado: 'OMITIDO',
        mensaje: `No está configurada la propiedad ${cfg.assetProp}`
      });
      return;
    }

    try {
      const result = sincronizarFormularioApi_(formKey, true);
      procesados += 1;
      detalles.push(result);
    } catch (error) {
      errores += 1;
      detalles.push({
        formKey,
        estado: 'ERROR',
        mensaje: error.message
      });
      registrarLog_('ERROR', 'sincronizarTodosLosFormulariosApi', `${formKey}: ${error.message}`);
    }
  });

  regenerarBasesConsolidadas_();

  return {
    ok: true,
    procesados,
    omitidos,
    errores,
    detalles,
    fecha_sincronizacion: new Date().toISOString()
  };
}

function sincronizarFormularioApi_(formKey, skipRegenerate) {
  const cfg = FORM_CONFIGS[formKey];
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const uid = getProp_(cfg.assetProp, true);
    const data = koboFetch_(`/api/v2/assets/${uid}/data/?format=json`);
    const registros = data.results || [];
    const mainRows = [];
    const repeatRows = [];

    registros.forEach((record, index) => {
      const flatMain = flattenObject_(record, '', true);

      flatMain._formulario = cfg.codigo;
      flatMain._formulario_nombre = cfg.nombre;
      flatMain._sync_index = index + 1;
      flatMain._sync_timestamp = new Date().toISOString();

      mainRows.push(flatMain);

      const repeats = extractRepeatRows_(record, cfg.repeatName);

      repeats.forEach((repeatItem, repeatIndex) => {
        const flatRepeat = flattenObject_(repeatItem, '', true);

        flatRepeat._formulario = cfg.codigo;
        flatRepeat._formulario_nombre = cfg.nombre;
        flatRepeat._parent_index = index + 1;
        flatRepeat._repeat_index = repeatIndex + 1;
        flatRepeat._submission__id = record._id || '';
        flatRepeat._submission__uuid = record._uuid || record._submission__uuid || '';

        flatRepeat._parent_codigo_caso = getVal_(flatMain, 'codigo_caso');
        flatRepeat._parent_tipo_usuario = getVal_(flatMain, 'tipo_usuario');
        flatRepeat._parent_institucion_tipo = getVal_(flatMain, 'institucion_tipo');
        flatRepeat._parent_institucion_reporta = getVal_(flatMain, 'institucion_reporta') || getVal_(flatMain, 'nombre_institucion');
        flatRepeat._parent_correo_institucional = getVal_(flatMain, 'correo_institucional');
        flatRepeat._parent_canton = getVal_(flatMain, 'canton');
        flatRepeat._parent_provincia = getVal_(flatMain, 'provincia');
        flatRepeat._parent_clave_usuario_caso = getVal_(flatMain, 'clave_usuario_caso');

        flatRepeat._declarante_nombre = getVal_(flatMain, 'nombre_declarante');
        flatRepeat._declarante_cargo = getVal_(flatMain, 'cargo_declarante');
        flatRepeat._declarante_institucion = getVal_(flatMain, 'institucion_declarante');
        flatRepeat._acepta_uso_informacion = getVal_(flatMain, 'acepta_uso_informacion');
        flatRepeat._declaracion_codigo = getVal_(flatMain, 'declaracion_codigo');
        flatRepeat._sync_timestamp = new Date().toISOString();

        repeatRows.push(flatRepeat);
      });
    });

    writeObjectsToSheet_(cfg.rawMain, mainRows);
    writeObjectsToSheet_(cfg.rawRepeat, repeatRows);

    if (!skipRegenerate) regenerarBasesConsolidadas_();

    const mensaje = `${formKey} sincronizado. Principales: ${mainRows.length}. Repeat: ${repeatRows.length}.`;
    registrarLog_('OK', 'sincronizarFormularioApi', mensaje);

    return {
      ok: true,
      formKey,
      nombre: cfg.nombre,
      registros_principales: mainRows.length,
      registros_repeat: repeatRows.length,
      fecha_sincronizacion: new Date().toISOString()
    };

  } finally {
    lock.releaseLock();
  }
}

function resumenSync_(resultado) {
  return `Formulario: ${resultado.formKey}\nRegistros principales: ${resultado.registros_principales}\nRegistros repeat: ${resultado.registros_repeat}`;
}

/************************************************************
 * BASES CONSOLIDADAS
 ************************************************************/

function regenerarBasesConsolidadas_() {
  const casos = [];
  const bases = {
    puntos: [],
    infraestructura: [],
    cartografia: [],
    acciones: [],
    preparacion: [],
    capacidades: [],
    seguimiento: []
  };
  const conteoPorCaso = {};

  Object.keys(FORM_CONFIGS).forEach(formKey => {
    const cfg = FORM_CONFIGS[formKey];
    const mainRows = getSheetObjects_(cfg.rawMain);
    const repeatRows = getSheetObjects_(cfg.rawRepeat);

    mainRows.forEach(r => {
      const codigoCaso = getVal_(r, 'codigo_caso');
      if (!codigoCaso) return;

      casos.push(normalizarCaso_(r, cfg));
    });

    repeatRows.forEach(p => {
      const codigoCaso = getVal_(p, '_parent_codigo_caso') || getVal_(p, 'codigo_caso');
      if (!codigoCaso) return;

      conteoPorCaso[codigoCaso] = (conteoPorCaso[codigoCaso] || 0) + 1;

      const base = normalizarBaseComun_(p, cfg);

      if (cfg.tipoBase === 'puntos') bases.puntos.push(Object.assign(base, normalizarPunto_(p)));
      if (cfg.tipoBase === 'infraestructura') bases.infraestructura.push(Object.assign(base, normalizarInfraestructura_(p)));
      if (cfg.tipoBase === 'cartografia') bases.cartografia.push(Object.assign(base, normalizarCartografia_(p)));
      if (cfg.tipoBase === 'acciones') bases.acciones.push(Object.assign(base, normalizarAccion_(p)));
      if (cfg.tipoBase === 'preparacion') bases.preparacion.push(Object.assign(base, normalizarPreparacion_(p)));
      if (cfg.tipoBase === 'capacidades') bases.capacidades.push(Object.assign(base, normalizarCapacidad_(p)));
      if (cfg.tipoBase === 'seguimiento') bases.seguimiento.push(Object.assign(base, normalizarSeguimiento_(p)));
    });
  });

  const casosAgrupados = agruparCasos_(casos, conteoPorCaso);

  writeObjectsToSheet_(SHEETS.BASE_CASOS, casosAgrupados);
  writeObjectsToSheet_(SHEETS.BASE_PUNTOS, bases.puntos);
  writeObjectsToSheet_(SHEETS.BASE_INFRA, bases.infraestructura);
  writeObjectsToSheet_(SHEETS.BASE_CARTOGRAFIA, bases.cartografia);
  writeObjectsToSheet_(SHEETS.BASE_ACCIONES, bases.acciones);
  writeObjectsToSheet_(SHEETS.BASE_PREPARACION, bases.preparacion);
  writeObjectsToSheet_(SHEETS.BASE_CAPACIDADES, bases.capacidades);
  writeObjectsToSheet_(SHEETS.BASE_SEGUIMIENTO, bases.seguimiento);

  registrarLog_('OK', 'regenerarBasesConsolidadas', `Casos: ${casosAgrupados.length}; puntos: ${bases.puntos.length}; infra: ${bases.infraestructura.length}; carto: ${bases.cartografia.length}; acciones: ${bases.acciones.length}; prep: ${bases.preparacion.length}; cap: ${bases.capacidades.length}; seg: ${bases.seguimiento.length}.`);
}

function normalizarCaso_(r, cfg) {
  return {
    fecha_actualizacion: new Date().toISOString(),
    formulario: cfg.codigo,
    formulario_nombre: cfg.nombre,
    submission_id: getVal_(r, '_id'),
    submission_uuid: getVal_(r, '_uuid') || getVal_(r, '_submission__uuid'),
    codigo_caso: getVal_(r, 'codigo_caso'),
    tipo_usuario: getVal_(r, 'tipo_usuario'),
    institucion_tipo: getVal_(r, 'institucion_tipo'),
    institucion_reporta: getVal_(r, 'institucion_reporta') || getVal_(r, 'nombre_institucion'),
    correo_institucional: getVal_(r, 'correo_institucional'),
    provincia: getVal_(r, 'provincia'),
    canton: getVal_(r, 'canton'),
    fecha_levantamiento: getVal_(r, 'fecha_levantamiento'),
    codigo_tramite: getVal_(r, 'codigo_tramite'),
    estado_registro: getVal_(r, 'estado_registro'),
    visible_para_gpt: getVal_(r, 'visible_para_gpt'),
    requiere_respaldo_firmado: getVal_(r, 'requiere_respaldo_firmado'),
    clave_usuario_caso: getVal_(r, 'clave_usuario_caso'),
    codigo_paquete_gpt: getVal_(r, 'codigo_paquete_gpt'),
    acepta_uso_informacion: getVal_(r, 'acepta_uso_informacion'),
    nombre_declarante: getVal_(r, 'nombre_declarante'),
    cargo_declarante: getVal_(r, 'cargo_declarante'),
    institucion_declarante: getVal_(r, 'institucion_declarante'),
    declaracion_codigo: getVal_(r, 'declaracion_codigo')
  };
}

function normalizarBaseComun_(p, cfg) {
  return {
    fecha_actualizacion: new Date().toISOString(),
    formulario: cfg.codigo,
    formulario_nombre: cfg.nombre,
    codigo_caso: getVal_(p, '_parent_codigo_caso') || getVal_(p, 'codigo_caso'),
    submission_uuid: getVal_(p, '_submission__uuid'),
    parent_index: getVal_(p, '_parent_index'),
    repeat_index: getVal_(p, '_repeat_index'),
    tipo_usuario: getVal_(p, '_parent_tipo_usuario'),
    institucion_tipo: getVal_(p, '_parent_institucion_tipo'),
    institucion_reporta: getVal_(p, '_parent_institucion_reporta'),
    correo_institucional: getVal_(p, '_parent_correo_institucional'),
    canton: getVal_(p, '_parent_canton') || getVal_(p, 'canton'),
    provincia: getVal_(p, '_parent_provincia') || getVal_(p, 'provincia'),
    clave_usuario_caso: getVal_(p, '_parent_clave_usuario_caso'),
    declarante_nombre: getVal_(p, '_declarante_nombre'),
    declarante_cargo: getVal_(p, '_declarante_cargo'),
    declarante_institucion: getVal_(p, '_declarante_institucion'),
    acepta_uso_informacion: getVal_(p, '_acepta_uso_informacion'),
    declaracion_codigo: getVal_(p, '_declaracion_codigo')
  };
}

function agruparCasos_(casos, conteoPorCaso) {
  const map = {};

  casos.forEach(c => {
    const codigo = c.codigo_caso;
    if (!codigo) return;

    if (!map[codigo]) {
      map[codigo] = Object.assign({}, c, {
        formularios_origen: c.formulario,
        total_registros_principales: 1
      });
    } else {
      const actual = map[codigo];
      actual.formularios_origen = valoresUnicos_([actual.formularios_origen, c.formulario].join('|').split('|')).join('|');
      actual.total_registros_principales += 1;
      actual.institucion_reporta = actual.institucion_reporta || c.institucion_reporta;
      actual.correo_institucional = actual.correo_institucional || c.correo_institucional;
      actual.canton = actual.canton || c.canton;
    }
  });

  return Object.values(map).map(c => {
    c.total_registros_repeat = conteoPorCaso[c.codigo_caso] || 0;
    c.estado_paquete = c.visible_para_gpt === 'yes' ? 'DISPONIBLE_PARA_GPT' : 'NO_VISIBLE_PARA_GPT';
    return c;
  });
}

/************************************************************
 * NORMALIZADORES POR TIPO
 ************************************************************/

function normalizarPunto_(p) {
  return {
    tipo_registro: getVal_(p, 'tipo_registro'),
    nombre_punto_critico: getVal_(p, 'nombre_punto_critico'),
    id_punto_registro: getVal_(p, 'id_punto_registro'),
    parroquia_sector: getVal_(p, 'parroquia_sector'),
    coordenada_punto: getVal_(p, 'coordenada_punto') || getVal_(p, 'coordenada_referencia') || getVal_(p, 'geopoint'),
    amenaza_observada: getVal_(p, 'amenaza_observada'),
    descripcion_amenaza: getVal_(p, 'descripcion_amenaza'),
    elemento_expuesto: getVal_(p, 'elemento_expuesto'),
    descripcion_elemento_expuesto: getVal_(p, 'descripcion_elemento_expuesto'),
    brecha_identificada: getVal_(p, 'brecha_identificada'),
    accion_requerida: getVal_(p, 'accion_requerida'),
    actor_competente: getVal_(p, 'actor_competente'),
    prioridad: getVal_(p, 'prioridad'),
    evidencia: getVal_(p, 'evidencia'),
    observaciones: getVal_(p, 'observaciones') || getVal_(p, 'observacion')
  };
}

function normalizarInfraestructura_(p) {
  return {
    tipo_registro: getVal_(p, 'tipo_registro'),
    tipo_infraestructura: getVal_(p, 'tipo_infraestructura'),
    nombre_infraestructura: getVal_(p, 'nombre_infraestructura'),
    codigo_interno_infraestructura: getVal_(p, 'codigo_interno_infraestructura'),
    entidad_responsable: getVal_(p, 'entidad_responsable'),
    sector_servicio: getVal_(p, 'sector_servicio'),
    nivel_servicio: getVal_(p, 'nivel_servicio'),
    coordenada_infraestructura: getVal_(p, 'coordenada_infraestructura'),
    ubicacion_referencial: getVal_(p, 'ubicacion_referencial'),
    amenazas_asociadas: getVal_(p, 'amenazas_asociadas'),
    estado_servicio: getVal_(p, 'estado_servicio'),
    nivel_exposicion: getVal_(p, 'nivel_exposicion'),
    criticidad: getVal_(p, 'criticidad'),
    prioridad: getVal_(p, 'prioridad'),
    elementos_expuestos_asociados: getVal_(p, 'elementos_expuestos_asociados'),
    vulnerabilidad_observada: getVal_(p, 'vulnerabilidad_observada'),
    brecha_identificada: getVal_(p, 'brecha_identificada'),
    afectacion_potencial: getVal_(p, 'afectacion_potencial'),
    accion_requerida: getVal_(p, 'accion_requerida'),
    actor_competente: getVal_(p, 'actor_competente'),
    plazo_sugerido: getVal_(p, 'plazo_sugerido'),
    fotografia_infraestructura: getVal_(p, 'fotografia_infraestructura'),
    fotografia_detalle: getVal_(p, 'fotografia_detalle'),
    observaciones: getVal_(p, 'observaciones'),
    id_infraestructura_registro: getVal_(p, 'id_infraestructura_registro')
  };
}

function normalizarCartografia_(p) {
  return {
    tipo_registro: getVal_(p, 'tipo_registro'),
    tipo_aporte_cartografico: getVal_(p, 'tipo_aporte_cartografico'),
    nombre_insumo_cartografico: getVal_(p, 'nombre_insumo_cartografico'),
    formato_cartografico: getVal_(p, 'formato_cartografico'),
    fuente_institucional: getVal_(p, 'fuente_institucional'),
    fecha_actualizacion_insumo: getVal_(p, 'fecha_actualizacion_insumo'),
    escala_resolucion: getVal_(p, 'escala_resolucion'),
    categoria_informacion: getVal_(p, 'categoria_informacion'),
    cobertura_territorial: getVal_(p, 'cobertura_territorial'),
    coordenada_referencia: getVal_(p, 'coordenada_referencia'),
    archivo_cartografico: getVal_(p, 'archivo_cartografico'),
    enlace_cartografia: getVal_(p, 'enlace_cartografia'),
    licencia_uso: getVal_(p, 'licencia_uso'),
    confiabilidad_insumo: getVal_(p, 'confiabilidad_insumo'),
    limitaciones_insumo: getVal_(p, 'limitaciones_insumo'),
    usar_en_plan: getVal_(p, 'usar_en_plan'),
    observaciones: getVal_(p, 'observaciones'),
    id_cartografia_registro: getVal_(p, 'id_cartografia_registro')
  };
}

function normalizarAccion_(p) {
  return {
    tipo_registro: getVal_(p, 'tipo_registro'),
    hallazgo_brecha: getVal_(p, 'hallazgo_brecha'),
    referencia_punto_infraestructura: getVal_(p, 'referencia_punto_infraestructura'),
    linea_accion: getVal_(p, 'linea_accion'),
    enfoque_accion: getVal_(p, 'enfoque_accion'),
    justificacion_tecnica: getVal_(p, 'justificacion_tecnica'),
    accion_propuesta: getVal_(p, 'accion_propuesta'),
    resultado_esperado: getVal_(p, 'resultado_esperado'),
    actor_responsable: getVal_(p, 'actor_responsable'),
    actores_apoyo: getVal_(p, 'actores_apoyo'),
    prioridad: getVal_(p, 'prioridad'),
    plazo_sugerido: getVal_(p, 'plazo_sugerido'),
    indicador: getVal_(p, 'indicador'),
    meta: getVal_(p, 'meta'),
    medio_verificacion: getVal_(p, 'medio_verificacion'),
    estado_accion: getVal_(p, 'estado_accion'),
    avance_porcentaje: getVal_(p, 'avance_porcentaje'),
    fuente_recursos: getVal_(p, 'fuente_recursos'),
    evidencia_accion: getVal_(p, 'evidencia_accion'),
    observaciones: getVal_(p, 'observaciones'),
    id_accion_registro: getVal_(p, 'id_accion_registro')
  };
}

function normalizarPreparacion_(p) {
  return {
    tipo_registro: getVal_(p, 'tipo_registro'),
    tipo_elemento_preparacion: getVal_(p, 'tipo_elemento_preparacion'),
    nombre_elemento: getVal_(p, 'nombre_elemento'),
    coordenada_elemento: getVal_(p, 'coordenada_elemento'),
    ubicacion_referencial: getVal_(p, 'ubicacion_referencial'),
    amenaza_asociada: getVal_(p, 'amenaza_asociada'),
    capacidad_personas: getVal_(p, 'capacidad_personas'),
    estado_operativo: getVal_(p, 'estado_operativo'),
    accesibilidad: getVal_(p, 'accesibilidad'),
    servicios_disponibles: getVal_(p, 'servicios_disponibles'),
    responsable_administracion: getVal_(p, 'responsable_administracion'),
    brecha_preparacion: getVal_(p, 'brecha_preparacion'),
    accion_requerida: getVal_(p, 'accion_requerida'),
    prioridad: getVal_(p, 'prioridad'),
    fotografia_elemento: getVal_(p, 'fotografia_elemento'),
    observaciones: getVal_(p, 'observaciones'),
    id_preparacion_registro: getVal_(p, 'id_preparacion_registro')
  };
}

function normalizarCapacidad_(p) {
  return {
    tipo_registro: getVal_(p, 'tipo_registro'),
    tipo_capacidad_recurso: getVal_(p, 'tipo_capacidad_recurso'),
    nombre_recurso_capacidad: getVal_(p, 'nombre_recurso_capacidad'),
    institucion_responsable_recurso: getVal_(p, 'institucion_responsable_recurso'),
    cantidad_disponible: getVal_(p, 'cantidad_disponible'),
    estado_disponibilidad: getVal_(p, 'estado_disponibilidad'),
    condicion_operativa: getVal_(p, 'condicion_operativa'),
    ubicacion_recurso: getVal_(p, 'ubicacion_recurso'),
    coordenada_recurso: getVal_(p, 'coordenada_recurso'),
    uso_previsto: getVal_(p, 'uso_previsto'),
    limitaciones_recurso: getVal_(p, 'limitaciones_recurso'),
    brecha_capacidad: getVal_(p, 'brecha_capacidad'),
    accion_fortalecimiento: getVal_(p, 'accion_fortalecimiento'),
    prioridad: getVal_(p, 'prioridad'),
    contacto_referencia: getVal_(p, 'contacto_referencia'),
    fotografia_recurso: getVal_(p, 'fotografia_recurso'),
    observaciones: getVal_(p, 'observaciones'),
    id_capacidad_recurso: getVal_(p, 'id_capacidad_recurso')
  };
}

function normalizarSeguimiento_(p) {
  return {
    tipo_registro: getVal_(p, 'tipo_registro'),
    accion_o_compromiso: getVal_(p, 'accion_o_compromiso'),
    codigo_accion_referencia: getVal_(p, 'codigo_accion_referencia'),
    mes_seguimiento: getVal_(p, 'mes_seguimiento'),
    anio_seguimiento: getVal_(p, 'anio_seguimiento'),
    estado_actual: getVal_(p, 'estado_actual'),
    avance_porcentaje: getVal_(p, 'avance_porcentaje'),
    avance_descriptivo: getVal_(p, 'avance_descriptivo'),
    nudos_criticos: getVal_(p, 'nudos_criticos'),
    accion_correctiva: getVal_(p, 'accion_correctiva'),
    responsable_seguimiento: getVal_(p, 'responsable_seguimiento'),
    fecha_proximo_reporte: getVal_(p, 'fecha_proximo_reporte'),
    medio_verificacion: getVal_(p, 'medio_verificacion'),
    archivo_evidencia: getVal_(p, 'archivo_evidencia'),
    enlace_evidencia: getVal_(p, 'enlace_evidencia'),
    requiere_escalamiento: getVal_(p, 'requiere_escalamiento'),
    observaciones: getVal_(p, 'observaciones'),
    id_seguimiento_registro: getVal_(p, 'id_seguimiento_registro')
  };
}

/************************************************************
 * PAQUETE GPT
 ************************************************************/

function generarPaqueteGPTDelCasoActivo() {
  let codigoCaso = '';

  try {
    const ui = SpreadsheetApp.getUi();
    const response = ui.prompt('Generar paquete GPT', 'Ingrese el código del caso / plan / expediente.', ui.ButtonSet.OK_CANCEL);
    if (response.getSelectedButton() !== ui.Button.OK) return;
    codigoCaso = response.getResponseText().trim();
  } catch (error) {
    codigoCaso = PropertiesService.getScriptProperties().getProperty('CASO_PRUEBA') || 'playas_plan_001';
  }

  if (!codigoCaso) {
    notificar_('Error', 'Debe ingresar un código de caso.');
    return;
  }

  const paquete = generarPaqueteGPT_(codigoCaso);
  notificar_('Paquete GPT', `Código: ${codigoCaso}\nSuficiencia: ${paquete.criterio_suficiencia.clasificacion}`);
  return paquete;
}

function generarPaqueteGPT_(codigoCaso) {
  const casos = filtrarPorCaso_(SHEETS.BASE_CASOS, codigoCaso);
  const puntos = filtrarPorCaso_(SHEETS.BASE_PUNTOS, codigoCaso);
  const infraestructura = filtrarPorCaso_(SHEETS.BASE_INFRA, codigoCaso);
  const cartografia = filtrarPorCaso_(SHEETS.BASE_CARTOGRAFIA, codigoCaso);
  const acciones = filtrarPorCaso_(SHEETS.BASE_ACCIONES, codigoCaso);
  const preparacion = filtrarPorCaso_(SHEETS.BASE_PREPARACION, codigoCaso);
  const capacidades = filtrarPorCaso_(SHEETS.BASE_CAPACIDADES, codigoCaso);
  const seguimiento = filtrarPorCaso_(SHEETS.BASE_SEGUIMIENTO, codigoCaso);
  const respaldosDrive = obtenerRespaldosDriveDelCaso_(codigoCaso);

  const actores = identificarActoresDelCaso_(casos, puntos, infraestructura, acciones, preparacion, capacidades, seguimiento);
  const suficiencia = evaluarSuficienciaDelCaso_(casos, puntos, infraestructura, cartografia, acciones, preparacion, capacidades, seguimiento, respaldosDrive);

  const paquete = {
    tipo_paquete: 'PAQUETE_GPT_CZ5_ENOS_PLAN_ACCION',
    fecha_generacion: new Date().toISOString(),
    unidad_responsable: 'Coordinación Zonal 5 de Gestión de Riesgos',
    codigo_caso: codigoCaso,
    nombre_proceso: inferirNombreProceso_(codigoCaso, casos),
    regla_acceso: 'Incluye todos los datos del usuario/institución/caso activo. No incluye registros de otros GAD, instituciones, usuarios o casos.',
    regla_uso_gpt: 'Usar todos los datos disponibles y preguntar únicamente por faltantes críticos no resueltos.',
    casos: casos,
    puntos_riesgo: puntos,
    infraestructura_esencial: infraestructura,
    cartografia_institucional: cartografia,
    acciones_preventivas_mitigacion: acciones,
    alojamientos_rutas_puntos_seguros: preparacion,
    capacidades_recursos: capacidades,
    seguimiento_mensual: seguimiento,
    respaldos_drive: respaldosDrive,
    resumen_operativo: {
      total_registros_principales: casos.length,
      total_puntos_riesgo: puntos.length,
      total_infraestructura: infraestructura.length,
      total_cartografia: cartografia.length,
      total_acciones: acciones.length,
      total_preparacion: preparacion.length,
      total_capacidades: capacidades.length,
      total_seguimiento: seguimiento.length,
      total_respaldos_drive: respaldosDrive.length,
      instituciones_reportantes: valoresUnicos_(casos.map(r => r.institucion_reporta)),
      formularios_origen: valoresUnicos_(casos.map(r => r.formularios_origen || r.formulario))
    },
    actores_identificados: actores,
    criterio_suficiencia: suficiencia,
    instrucciones_para_gpt: [
      'Usar todos los datos recibidos del caso activo.',
      'No repetir preguntas ya respondidas en Kobo, Sheets o Drive.',
      'Solicitar únicamente insumos faltantes críticos.',
      'Validar suficiencia de información antes de generar el plan.',
      'Diferenciar amenaza, exposición, vulnerabilidad, brecha, capacidad, acción, actor competente y medio de verificación.',
      'No atribuir responsabilidades legales ni técnicas no respaldadas.',
      'No mezclar información de otros GAD, instituciones, usuarios o casos.',
      'Generar plan de acción en Word institucional cuando la información sea suficiente o cuando el usuario autorice un borrador con limitaciones.'
    ],
    estructura_word: [
      'Portada institucional',
      'Control documental',
      'Antecedentes',
      'Objetivo general y objetivos específicos',
      'Alcance y limitaciones',
      'Base conceptual breve',
      'Metodología',
      'Insumos utilizados',
      'Caracterización territorial',
      'Análisis de amenazas, exposición, vulnerabilidad, infraestructura y capacidades',
      'Matriz de hallazgos',
      'Plan de acción',
      'Ruta de seguimiento y cierre',
      'Conclusiones',
      'Recomendaciones',
      'Anexos',
      'Bibliografía'
    ]
  };

  const promptGPT =
`INSTRUCCIÓN PARA GPT:
A partir del siguiente PAQUETE GPT CZ5, construye una entrevista técnica progresiva y luego un plan de acción en formato Word institucional.

Primero revisa los datos ya disponibles. No repitas preguntas respondidas en Kobo, Google Sheets o Drive. Pregunta solo por insumos faltantes críticos.

PAQUETE:
${JSON.stringify(paquete, null, 2)}

PRODUCTO ESPERADO:
Primero, clasifica la información como SUFICIENTE, PARCIAL o INSUFICIENTE.

Luego:
- Si es SUFICIENTE, genera directamente el plan de acción institucional en archivo .docx.
- Si es PARCIAL, pregunta si se desea generar un borrador con limitaciones o completar los insumos faltantes.
- Si es INSUFICIENTE, solicita únicamente los datos o archivos críticos faltantes.

El plan debe tener formato institucional sobrio, tablas limpias, conclusiones, recomendaciones, responsables, plazos, indicadores, medios de verificación y anexos.`;

  const sheet = ensureSheet_(SHEETS.PAQUETE_GPT);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'fecha_generacion',
      'codigo_caso',
      'total_registros_principales',
      'total_puntos_riesgo',
      'total_infraestructura',
      'total_cartografia',
      'total_acciones',
      'total_preparacion',
      'total_capacidades',
      'total_seguimiento',
      'clasificacion_suficiencia',
      'faltantes_criticos',
      'advertencias',
      'paquete_json',
      'prompt_gpt'
    ]);
  }

  sheet.appendRow([
    new Date(),
    codigoCaso,
    casos.length,
    puntos.length,
    infraestructura.length,
    cartografia.length,
    acciones.length,
    preparacion.length,
    capacidades.length,
    seguimiento.length,
    suficiencia.clasificacion,
    suficiencia.faltantes_criticos.join(' | '),
    suficiencia.advertencias.join(' | '),
    JSON.stringify(paquete),
    promptGPT
  ]);

  registrarLog_('OK', 'generarPaqueteGPT', `Paquete GPT generado para ${codigoCaso}. Suficiencia: ${suficiencia.clasificacion}.`);
  return paquete;
}

function filtrarPorCaso_(sheetName, codigoCaso) {
  return getSheetObjects_(sheetName).filter(r => String(r.codigo_caso || '').trim() === String(codigoCaso).trim());
}

function evaluarSuficienciaDelCaso_(casos, puntos, infraestructura, cartografia, acciones, preparacion, capacidades, seguimiento, respaldosDrive) {
  const faltantes = [];
  const advertencias = [];

  if (!casos.length) faltantes.push('No existe registro principal del caso en BASE_CASOS.');
  if (!puntos.length) faltantes.push('No existen puntos críticos asociados al caso.');
  if (!infraestructura.length) advertencias.push('No existe infraestructura esencial registrada en F02.');
  if (!cartografia.length) advertencias.push('No existe aporte cartográfico registrado en F03.');
  if (!acciones.length) faltantes.push('No existen acciones preventivas o de mitigación registradas en F04.');
  if (!preparacion.length) advertencias.push('No existen alojamientos, rutas o puntos seguros registrados en F05.');
  if (!capacidades.length) advertencias.push('No existen capacidades o recursos registrados en F06.');
  if (!seguimiento.length) advertencias.push('No existe seguimiento mensual registrado en F07.');
  if (!respaldosDrive.length) advertencias.push('No existen respaldos manuales registrados en RESPALDOS_DRIVE.');

  if (puntos.length && !puntos.some(p => limpiarTexto_(p.amenaza_observada))) faltantes.push('Falta amenaza observada en F01.');
  if (puntos.length && !puntos.some(p => limpiarTexto_(p.brecha_identificada))) faltantes.push('Falta brecha identificada en F01.');
  if (acciones.length && !acciones.some(a => limpiarTexto_(a.indicador))) faltantes.push('Falta indicador en F04.');
  if (acciones.length && !acciones.some(a => limpiarTexto_(a.medio_verificacion))) faltantes.push('Falta medio de verificación en F04.');

  let clasificacion = 'SUFICIENTE';
  if (faltantes.length) clasificacion = 'INSUFICIENTE';
  else if (advertencias.length) clasificacion = 'PARCIAL';

  return {
    clasificacion,
    faltantes_criticos: faltantes,
    advertencias,
    recomendacion_para_gpt: clasificacion === 'SUFICIENTE'
      ? 'Puede generar el plan de acción institucional.'
      : clasificacion === 'PARCIAL'
        ? 'Puede generar borrador con limitaciones si el usuario lo autoriza, o solicitar insumos complementarios.'
        : 'Debe solicitar datos críticos faltantes antes de generar el plan.'
  };
}

function identificarActoresDelCaso_(casos, puntos, infraestructura, acciones, preparacion, capacidades, seguimiento) {
  const actores = {};
  const fuentes = []
    .concat(casos.map(c => c.institucion_reporta))
    .concat(puntos.map(p => p.actor_competente))
    .concat(infraestructura.map(i => i.actor_competente || i.entidad_responsable))
    .concat(acciones.map(a => `${a.actor_responsable || ''};${a.actores_apoyo || ''}`))
    .concat(preparacion.map(p => p.responsable_administracion))
    .concat(capacidades.map(c => c.institucion_responsable_recurso))
    .concat(seguimiento.map(s => s.responsable_seguimiento));

  fuentes.forEach(campo => {
    String(campo || '').split(/;|,/).forEach(a => {
      const actor = limpiarTexto_(a);
      if (!actor) return;
      actores[actor] = {
        actor,
        competencia_referencial: inferirCompetenciaActor_(actor),
        rol_en_plan: inferirRolActor_(actor)
      };
    });
  });

  return Object.values(actores);
}

function inferirCompetenciaActor_(actor) {
  const a = String(actor || '').toLowerCase();
  if (a.includes('gad') || a.includes('municipal') || a.includes('municipio')) return 'Gestión local del riesgo, planificación territorial, mantenimiento de infraestructura municipal, drenaje urbano y coordinación cantonal.';
  if (a.includes('prefectura') || a.includes('provincial')) return 'Vialidad rural provincial, infraestructura de competencia provincial y apoyo territorial según atribuciones.';
  if (a.includes('cnel') || a.includes('eléctrica') || a.includes('electrica')) return 'Operación, mantenimiento y continuidad del servicio eléctrico bajo su responsabilidad.';
  if (a.includes('bombero')) return 'Primera respuesta, prevención, preparación y apoyo operativo ante emergencias.';
  if (a.includes('educación') || a.includes('educacion')) return 'Gestión del sistema educativo y medidas preventivas en instituciones educativas.';
  if (a.includes('salud')) return 'Gestión de servicios de salud y continuidad operativa sanitaria.';
  if (a.includes('sngr') || a.includes('gestión de riesgos') || a.includes('gestion de riesgos')) return 'Rectoría, coordinación, asistencia técnica, transferencia metodológica y seguimiento en gestión integral del riesgo.';
  return 'Competencia por confirmar según marco institucional aplicable y documentación del caso.';
}

function inferirRolActor_(actor) {
  const a = String(actor || '').toLowerCase();
  if (a.includes('sngr')) return 'Brindar asistencia técnica, orientación metodológica y seguimiento.';
  if (a.includes('gad') || a.includes('municipal')) return 'Liderar acciones locales y ejecutar medidas dentro de su competencia.';
  if (a.includes('prefectura')) return 'Evaluar y ejecutar acciones sobre infraestructura o vialidad provincial si corresponde.';
  if (a.includes('cnel')) return 'Evaluar y ejecutar acciones sobre infraestructura eléctrica bajo su responsabilidad.';
  if (a.includes('bombero')) return 'Apoyar preparación, respuesta, evacuación y acciones operativas.';
  return 'Participar según competencia, capacidad institucional y acuerdos del plan.';
}

function obtenerRespaldosDriveDelCaso_(codigoCaso) {
  return getSheetObjects_(SHEETS.RESPALDOS_DRIVE)
    .filter(r => String(r.codigo_caso || r.caso || '').trim() === codigoCaso)
    .map(r => ({
      origen: 'Drive/hoja manual',
      tipo: r.tipo || r.tipo_documento || 'respaldo_documental',
      nombre: r.nombre || r.nombre_archivo || r.documento || 'Documento de respaldo',
      estado: r.estado || 'registrado',
      enlace: r.enlace || r.url || r.link || '',
      institucion: r.institucion || r.institucion_reporta || '',
      responsable: r.responsable || '',
      fecha: r.fecha || r.fecha_carga || '',
      observacion: r.observacion || r.descripcion || ''
    }));
}

function inferirNombreProceso_(codigoCaso, casos) {
  if (!casos || !casos.length) return `Plan de acción asociado al caso ${codigoCaso}`;
  const caso = casos[0];
  const institucion = caso.institucion_reporta || 'institución reportante';
  const canton = caso.canton || '';
  const provincia = caso.provincia || '';
  return `Plan de acción para puntos críticos reportados por ${institucion}${canton ? ' en ' + canton : ''}${provincia ? ', ' + provincia : ''}`;
}

function limpiarPaquetesGPT() {
  ensureSheet_(SHEETS.PAQUETE_GPT).clearContents();
  registrarLog_('OK', 'limpiarPaquetesGPT', 'Hoja PAQUETE_GPT limpiada.');
  notificar_('PAQUETE_GPT', 'Hoja PAQUETE_GPT limpiada correctamente.');
}

/************************************************************
 * WEB APP
 ************************************************************/

function doGet(e) { return handleWebRequest_(e); }
function doPost(e) { return handleWebRequest_(e); }

function handleWebRequest_(e) {
  try {
    validarWebAppKey_(e);
    const params = getRequestParams_(e);
    const action = String(params.action || '').trim();

    if (action === 'ping') {
      return jsonResponse_({
        ok: true,
        message: 'Web App CZ5 F01-F07 activo',
        timestamp: new Date().toISOString(),
        spreadsheet_id: SpreadsheetApp.getActiveSpreadsheet().getId(),
        spreadsheet_name: SpreadsheetApp.getActiveSpreadsheet().getName()
      });
    }

    if (action === 'syncAll') return jsonResponse_({ ok: true, action, data: sincronizarTodosLosFormulariosApi_() });

    const syncMap = {
      syncF01: 'F01',
      syncF02: 'F02',
      syncF03: 'F03',
      syncF04: 'F04',
      syncF05: 'F05',
      syncF06: 'F06',
      syncF07: 'F07'
    };

    if (syncMap[action]) {
      return jsonResponse_({ ok: true, action, data: sincronizarFormularioApi_(syncMap[action]) });
    }

    if (action === 'listCases') {
      const casos = listarCasosDisponiblesApi_();
      return jsonResponse_({ ok: true, action, total: casos.length, casos });
    }

    if (action === 'generatePackage') {
      const codigoCaso = String(params.codigo_caso || '').trim();
      if (!codigoCaso) return jsonResponse_({ ok: false, action, message: 'Debe enviar codigo_caso.' });
      const paquete = generarPaqueteGPT_(codigoCaso);
      return jsonResponse_({
        ok: true,
        action,
        codigo_caso: codigoCaso,
        total_registros_principales: paquete.casos.length,
        total_puntos_riesgo: paquete.puntos_riesgo.length,
        total_infraestructura: paquete.infraestructura_esencial.length,
        total_cartografia: paquete.cartografia_institucional.length,
        total_acciones: paquete.acciones_preventivas_mitigacion.length,
        total_preparacion: paquete.alojamientos_rutas_puntos_seguros.length,
        total_capacidades: paquete.capacidades_recursos.length,
        total_seguimiento: paquete.seguimiento_mensual.length,
        clasificacion_suficiencia: paquete.criterio_suficiencia.clasificacion,
        faltantes_criticos: paquete.criterio_suficiencia.faltantes_criticos,
        advertencias: paquete.criterio_suficiencia.advertencias,
        paquete
      });
    }

    if (action === 'getLastPrompt') {
      const codigoCaso = String(params.codigo_caso || '').trim();
      if (!codigoCaso) return jsonResponse_({ ok: false, action, message: 'Debe enviar codigo_caso.' });
      const prompt = obtenerUltimoPromptGPTApi_(codigoCaso);
      return jsonResponse_({ ok: true, action, codigo_caso: codigoCaso, ...prompt });
    }

    return jsonResponse_({ ok: false, action, message: 'Acción no reconocida.' });

  } catch (error) {
    registrarLog_('ERROR', 'handleWebRequest', error.message);
    return jsonResponse_({ ok: false, message: error.message, timestamp: new Date().toISOString() });
  }
}

function listarCasosDisponiblesApi_() {
  return getSheetObjects_(SHEETS.BASE_CASOS)
    .map(c => ({
      codigo_caso: c.codigo_caso || '',
      institucion_reporta: c.institucion_reporta || '',
      tipo_usuario: c.tipo_usuario || '',
      correo_institucional: c.correo_institucional || '',
      provincia: c.provincia || '',
      canton: c.canton || '',
      formularios_origen: c.formularios_origen || c.formulario || '',
      total_registros_repeat: c.total_registros_repeat || 0,
      estado_paquete: c.estado_paquete || '',
      declarante: c.nombre_declarante || ''
    }))
    .filter(c => c.codigo_caso);
}

function obtenerUltimoPromptGPTApi_(codigoCaso) {
  const data = getSheetObjects_(SHEETS.PAQUETE_GPT).filter(r => String(r.codigo_caso || '').trim() === codigoCaso);
  if (!data.length) throw new Error(`No existe paquete GPT generado para el caso: ${codigoCaso}`);
  const ultimo = data[data.length - 1];
  return {
    fecha_generacion: ultimo.fecha_generacion || '',
    total_registros_principales: ultimo.total_registros_principales || '',
    total_puntos_riesgo: ultimo.total_puntos_riesgo || '',
    total_infraestructura: ultimo.total_infraestructura || '',
    total_cartografia: ultimo.total_cartografia || '',
    total_acciones: ultimo.total_acciones || '',
    total_preparacion: ultimo.total_preparacion || '',
    total_capacidades: ultimo.total_capacidades || '',
    total_seguimiento: ultimo.total_seguimiento || '',
    clasificacion_suficiencia: ultimo.clasificacion_suficiencia || '',
    faltantes_criticos: ultimo.faltantes_criticos || '',
    advertencias: ultimo.advertencias || '',
    prompt_gpt: ultimo.prompt_gpt || ''
  };
}

/************************************************************
 * PRUEBAS LOCALES
 ************************************************************/

function testPingWebAppLocal() {
  const response = handleWebRequest_({ parameter: { action: 'ping', webapp_key: 'CZ5_ENOS_2026' } });
  Logger.log(response.getContent());
  return response.getContent();
}

function testSyncAllLocal() {
  const response = handleWebRequest_({ parameter: { action: 'syncAll', webapp_key: 'CZ5_ENOS_2026' } });
  Logger.log(response.getContent());
  return response.getContent();
}

function testListCasesLocal() {
  const response = handleWebRequest_({ parameter: { action: 'listCases', webapp_key: 'CZ5_ENOS_2026' } });
  Logger.log(response.getContent());
  return response.getContent();
}

function testGeneratePackageLocal() {
  const codigo = PropertiesService.getScriptProperties().getProperty('CASO_PRUEBA') || 'playas_plan_001';
  const response = handleWebRequest_({ parameter: { action: 'generatePackage', codigo_caso: codigo, webapp_key: 'CZ5_ENOS_2026' } });
  Logger.log(response.getContent());
  return response.getContent();
}

/************************************************************
 * SEGURIDAD, KOBO, SHEETS Y UTILIDADES
 ************************************************************/

function validarWebAppKey_(e) {
  const expectedKey = String(PropertiesService.getScriptProperties().getProperty('WEBAPP_KEY') || '').trim();
  if (!expectedKey) return true;

  const params = getRequestParams_(e);
  const receivedKey = String(params.webapp_key || params.WEBAPP_KEY || params.key || params.app_key || '').trim();

  if (receivedKey !== expectedKey) {
    throw new Error('Acceso no autorizado: WEBAPP_KEY inválida o ausente. Parámetros recibidos: ' + JSON.stringify(Object.keys(params)));
  }

  return true;
}

function koboFetch_(path) {
  const baseUrl = getProp_('KOBO_BASE_URL', true).replace(/\/$/, '');
  const token = getProp_('KOBO_TOKEN', true);
  const url = `${baseUrl}${path}`;

  const response = UrlFetchApp.fetch(url, {
    method: 'get',
    headers: { Authorization: `Token ${token}` },
    muteHttpExceptions: true
  });

  const code = response.getResponseCode();
  const text = response.getContentText();

  if (code < 200 || code >= 300) throw new Error(`Error Kobo API ${code}: ${text}`);
  return JSON.parse(text);
}

function getProp_(key, required) {
  const value = PropertiesService.getScriptProperties().getProperty(key);
  if (required && !value) throw new Error(`Falta configurar la propiedad del script: ${key}`);
  return value;
}

function ensureSheet_(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  return sheet;
}

function writeObjectsToSheet_(sheetName, objects) {
  const sheet = ensureSheet_(sheetName);
  sheet.clearContents();

  if (!objects || objects.length === 0) {
    sheet.getRange(1, 1).setValue('sin_registros');
    return;
  }

  const headers = Array.from(objects.reduce((set, obj) => {
    Object.keys(obj).forEach(k => set.add(k));
    return set;
  }, new Set()));

  const values = objects.map(obj => headers.map(h => obj[h] !== undefined ? obj[h] : ''));

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, Math.min(headers.length, 20));
}

function getSheetObjects_(sheetName) {
  const sheet = ensureSheet_(sheetName);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0];
  if (headers.length === 1 && headers[0] === 'sin_registros') return [];

  return values.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });
    return obj;
  });
}

function flattenObject_(obj, prefix, skipArrays) {
  const out = {};
  Object.keys(obj || {}).forEach(key => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}/${key}` : key;

    if (Array.isArray(value)) {
      if (!skipArrays) out[newKey] = JSON.stringify(value);
      return;
    }

    if (value && typeof value === 'object') {
      Object.assign(out, flattenObject_(value, newKey, skipArrays));
      return;
    }

    out[newKey] = value;
  });
  return out;
}

function extractRepeatRows_(record, repeatName) {
  const rows = [];
  Object.keys(record || {}).forEach(key => {
    const value = record[key];
    if (Array.isArray(value) && key.indexOf(repeatName) !== -1) value.forEach(item => rows.push(item));
  });
  return rows;
}

function getVal_(obj, fieldName) {
  if (!obj) return '';
  if (Object.prototype.hasOwnProperty.call(obj, fieldName)) return obj[fieldName];

  const keys = Object.keys(obj);
  const slash = `/${fieldName}`;

  for (const key of keys) if (key.endsWith(slash)) return obj[key];
  for (const key of keys) if (key.endsWith(`_${fieldName}`)) return obj[key];
  return '';
}

function valoresUnicos_(arr) {
  return Array.from(new Set((arr || []).map(v => limpiarTexto_(v)).filter(v => v)));
}

function limpiarTexto_(valor) {
  return String(valor || '').trim();
}

function notificar_(titulo, mensaje) {
  Logger.log(`${titulo}: ${mensaje}`);

  try {
    SpreadsheetApp.getActiveSpreadsheet().toast(mensaje, titulo, 8);
  } catch (error) {
    Logger.log('No se pudo mostrar toast: ' + error.message);
  }

  try {
    SpreadsheetApp.getUi().alert(titulo, mensaje, SpreadsheetApp.getUi().ButtonSet.OK);
  } catch (error) {
    Logger.log('No se pudo mostrar alert: ' + error.message);
  }
}

function registrarLog_(estado, proceso, mensaje) {
  const sheet = ensureSheet_(SHEETS.LOG);
  if (sheet.getLastRow() === 0) sheet.appendRow(['fecha', 'estado', 'proceso', 'mensaje']);
  sheet.appendRow([new Date(), estado, proceso, mensaje]);
}

function getRequestParams_(e) {
  let params = {};
  if (e && e.parameter) params = Object.assign(params, e.parameter);
  if (e && e.postData && e.postData.contents) {
    try {
      const body = JSON.parse(e.postData.contents);
      params = Object.assign(params, body);
    } catch (err) {}
  }
  return params;
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj, null, 2)).setMimeType(ContentService.MimeType.JSON);
}