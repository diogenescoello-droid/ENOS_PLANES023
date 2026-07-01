# SNGR-CZ5-ENOS v0.5.2

Actualización cartográfica del módulo 6: Riesgo zonal.

Esta versión corrige la proyección de la capa provincial CZ5, elimina la dependencia temporal de API/token y mantiene la plataforma funcionando como tablero ejecutivo sobre la arquitectura base.

## Uso

Abrir `index.html` desde servidor local, GitHub Pages, intranet o entorno que permita cargar archivos JSON/GeoJSON. Si se abre como archivo local (`file://`), algunos navegadores pueden bloquear `fetch()`.

## Estado de capas

- Provincias CZ5: conectado en WGS84/EPSG:4326.
- Cantones CZ5: pendiente de GeoJSON cantonal real.
- Elementos operativos: estructura preparada para puntos, líneas y polígonos.
- ArcGIS Online: botón preparado, URL pendiente.

## Nota técnica

Los GeoJSON originales entregados estaban en coordenadas métricas compatibles con EPSG:3857. Fueron reproyectados a WGS84/EPSG:4326 para funcionar correctamente con Leaflet.
