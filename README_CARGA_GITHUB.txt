ENOS_PLANES023 · Paquete GitHub prompt guiado real + código existente

Objetivo:
- Conservar la arquitectura de la página.
- Corregir el módulo "Actualizar base y generar prompt GPT".
- Eliminar opciones de prueba quemadas.
- Permitir dos formas de búsqueda:
  1) Buscar por datos del caso: nivel -> territorio/actor -> caso visible.
  2) Buscar por código existente: código ENOS, folio, ID preliminar, id_sitio, id_infraestructura, id_georreferencia, id_accion o texto del caso.

Carga en GitHub:
1. Suba index.html y config.js a la raíz del repositorio ENOS_PLANES023.
2. Confirme que GitHub Pages actualice el sitio.
3. Si aún ve opciones antiguas, fuerce recarga con Ctrl+F5 o agregue ?v=2 al final de la URL.

Conexión con la base:
1. Pegue apps_script_apiCatalogoPromptsGPT.gs en el Apps Script de la base ENOS.
2. Despliegue como Web App.
3. Copie la URL del Web App.
4. Pegue la URL en config.js en ENOS_PROMPTS_API_URL.
5. Vuelva a subir config.js a GitHub.

Nota crítica:
- Esta versión NO muestra datos demo si la API no responde.
- Si solo aparecen pocos registros, entonces la base tiene pocos registros en las hojas fuente o falta CATALOGO_PROMPTS_GPT.
- El Apps Script intenta leer CATALOGO_PROMPTS_GPT; si no existe, arma catálogo desde CASOS_MAESTRO_V2, SITIOS_CRITICOS, SITIOS_CRITICOS_V52_IMPORT, INFRAESTRUCTURA_EXPUESTA, GEOREFERENCIAS, ACCIONES y TAREAS_SEGUIMIENTO.
