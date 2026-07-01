# Reporte de avance — v0.5.8

Proyecto: Plataforma CZ5 ENOS 2026-2027  
Versión: v0.5.8  
Tipo de cambio: B/C — ajuste visual y funcional del botón Elementos Operativos sin cambio de arquitectura base.

## Objetivo

Corregir la lectura visual del botón Elementos, que podía seguir apareciendo como “pendiente” en pruebas, aunque la capa demostrativa de puntos, líneas y polígonos ya estaba preparada.

## Cambios aplicados

- Se mantiene la vista cantonal activa por defecto.
- Se conserva la capa provincial como apoyo territorial.
- El botón pasa a mostrarse como **Elementos operativos · demo**.
- Se retira la etiqueta “pendiente” del botón para no confundir al usuario.
- La capa demostrativa queda documentada como muestra técnica no oficial.
- Se mantienen 7 elementos de prueba: puntos, líneas y polígonos.
- Cada elemento conserva ficha con semáforo, amenaza, prioridad, acción requerida, responsable, estado y fuente.
- Se actualizan rutas internas a v0.5.8.

## Archivos principales

- `index.html`
- `assets/data/elementos_operativos_enos_v0.5.8.geojson`
- `assets/data/cantones_zonal5_wgs84_v0.5.8.geojson`
- `assets/data/provincias_zonal5_wgs84_v0.5.8.geojson`
- `data/riesgo_zonal_arquitectura_v0.5.8.json`
- `data/plantilla_elementos_operativos_v0.5.8.csv`

## Estado

Aprobable para prueba visual. Pendiente reemplazar elementos demo con datos reales de Kobo, PDF firmados o ArcGIS Online.

## Observación crítica

Si el botón aparece como “Elementos · pendiente”, se está abriendo una versión anterior o una copia cacheada. En v0.5.8 debe verse como **Elementos operativos · demo**.
