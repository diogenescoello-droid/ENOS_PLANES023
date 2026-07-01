# SNGR-CZ5-ENOS v0.5.3

Entrega correctiva cartográfica.

## Corrección principal

Esta versión fuerza el módulo **6. Riesgo zonal** a trabajar con cartografía local y respaldo interno. Ya no depende de `RIESGO_API_TOKEN`, ni debe mostrar el mensaje de token pendiente.

## Verificación visual

Al abrir el tab **6. Riesgo zonal**, debe verse el texto: **v0.5.3 · Mapa local sin API** o **v0.5.3 · GeoJSON provincial interno activo sin API**.

## Archivos clave

- `index.html`
- `data/riesgo_zonal_arquitectura_v0.5.3.json`
- `assets/data/provincias_zonal5_wgs84_v0.5.3.geojson`
- `assets/data/cantones_zonal5_pendiente_v0.5.3.geojson`
- `assets/data/elementos_operativos_enos_v0.5.3.geojson`

## Nota operativa

Si todavía aparece `Falta configurar RIESGO_API_TOKEN`, se está abriendo una versión anterior o una copia cacheada del `index.html`. Extraer esta carpeta completa y abrir el `index.html` ubicado dentro de `SNGR-CZ5-ENOS_v0.5.3`.
