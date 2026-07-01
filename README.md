# SNGR-CZ5-ENOS v0.5.1

Versión de integración cartográfica provincial para el módulo 6. Riesgo zonal.

Esta entrega mantiene la arquitectura de la plataforma y reemplaza el mapa simulado por un mapa Leaflet conectado a GeoJSON provincial CZ5. La capa cantonal queda preparada, pero no activada, porque el archivo cargado como cantonal contiene polígonos provinciales.

## Archivos principales

- `index.html`: plataforma actualizada.
- `data/riesgo_zonal_arquitectura_v0.5.1.json`: contrato de datos y configuración cartográfica.
- `assets/data/provincias_zonal5_simplificado.geojson`: capa provincial conectada.
- `assets/data/cantones_zonal5.geojson`: capa cantonal pendiente.
- `assets/data/elementos_operativos_enos_v0.5.1.geojson`: estructura para puntos, líneas y polígonos.
- `docs/DICCIONARIO_CARTOGRAFICO_v0.5.1.md`: campos y uso esperado.
- `REPORTE_AVANCE_v0.5.1.md`: reporte técnico de avance.

## Nota de publicación

Para que `fetch()` lea correctamente los archivos JSON/GeoJSON, publicar la carpeta completa en un servidor web, GitHub Pages, intranet o alojamiento equivalente. Abrir el HTML directamente como archivo local puede bloquear lecturas por seguridad del navegador.
