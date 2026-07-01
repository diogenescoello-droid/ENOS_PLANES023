# SNGR-CZ5-ENOS v0.5.5

Actualización cartográfica sobre la arquitectura base de la plataforma.

## Cambio principal

Se integró el GeoJSON cantonal real `cantones_zonal5_1.geojson`, reproyectado desde EPSG:3857 a WGS84/EPSG:4326 y simplificado para visualización web.

## Estado de capas

- Provincias CZ5: activa.
- Cantones CZ5: activa, 51 polígonos.
- Elementos operativos: estructura lista, pendiente de extracción desde PDF firmados.

## Archivos clave

- `index.html`
- `assets/data/cantones_zonal5_wgs84_v0.5.5.geojson`
- `data/riesgo_zonal_arquitectura_v0.5.5.json`
- `REPORTE_AVANCE_v0.5.5.md`

## Nota

El mapa no usa token/API. La capa cantonal sirve como selector territorial. Los semáforos siguen pendientes hasta cargar datos técnicos extraídos de planes firmados.
