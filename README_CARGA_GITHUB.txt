PAQUETE GITHUB · ENOS_PLANES023 · PROMPT GUIADO DINÁMICO

Archivos para subir al repositorio GitHub Pages:

1. index.html
   Página completa conservando la arquitectura de módulos existente.
   Solo se ajustó el bloque “Actualizar base y generar prompt GPT”.

2. config.js
   Archivo de configuración para conectar la página con Apps Script.
   Cuando tengas la URL del Web App, reemplaza:
   PEGAR_AQUI_URL_WEB_APP_APPS_SCRIPT_EXEC
   por la URL terminada en /exec.

Cómo cargar en GitHub:

1. Descomprime este ZIP.
2. Sube index.html y config.js a la raíz del repositorio ENOS_PLANES023.
3. En GitHub Pages, espera 1 a 3 minutos y actualiza la página.
4. Si config.js todavía no tiene URL del Apps Script, la página mostrará datos de prueba.
5. Cuando config.js tenga la URL del Apps Script y la hoja CATALOGO_PROMPTS_GPT esté alimentada, los selectores se cargarán desde la base.

Estructura esperada de la hoja CATALOGO_PROMPTS_GPT:

folio_operativo
nivel_cobertura
provincia
canton
actor
formulario_origen
nombre_visible
etiqueta_visible
codigo_tecnico
codigo_enos_2026
id_sitio_critico
id_infraestructura
id_georreferencia
id_accion
estado_calidad
url_drive
prompt_base_gpt

Nota operativa:
El técnico no copia códigos largos. Selecciona Nivel → Territorio/actor → Caso visible, y la página usa el código oculto para generar el prompt.
