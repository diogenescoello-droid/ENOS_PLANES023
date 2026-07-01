# Reporte de avance — v0.5.7

**Proyecto:** Plataforma CZ5 ENOS 2026-2027  
**Versión:** v0.5.7  
**Tipo de cambio:** C — módulo dentro de arquitectura existente  
**Estado:** En revisión técnica

## Objetivo de la versión

Activar el botón **Elementos operativos** dentro del módulo **6. Riesgo zonal**, manteniendo la arquitectura base de la plataforma y validando que el mapa pueda graficar puntos, líneas y polígonos con ficha técnica, semáforo y selección interactiva.

## Cambios realizados

- Se mantiene la vista cantonal activa por defecto con 51 cantones.
- Se activa el botón **Elementos operativos**.
- Se agrega una capa demostrativa en GeoJSON con 7 elementos:
  - 3 puntos.
  - 2 líneas.
  - 2 polígonos.
- Se agregan filtros de elementos:
  - Todos.
  - Sitios críticos.
  - Infraestructura.
  - Respuesta.
  - Acciones.
  - Monitoreo.
- Cada elemento abre ficha técnica lateral con:
  - Provincia.
  - Cantón.
  - Categoría.
  - Componente.
  - Amenaza.
  - Semáforo.
  - Prioridad.
  - Descripción.
  - Acción requerida.
  - Responsable.
  - Estado.
  - Fuente.
- Se conserva el botón **Abrir ArcGIS Online** como salida futura.

## Archivos modificados

- `index.html`
- `data/riesgo_zonal_arquitectura_v0.5.7.json`
- `assets/data/elementos_operativos_enos_v0.5.7.geojson`
- `data/plantilla_elementos_operativos_v0.5.7.csv`
- `docs/DICCIONARIO_ELEMENTOS_OPERATIVOS_v0.5.7.md`

## Archivos de apoyo

- `assets/data/provincias_zonal5_wgs84_v0.5.7.geojson`
- `assets/data/cantones_zonal5_wgs84_v0.5.7.geojson`

## Observación crítica

Los elementos incluidos en esta versión son **muestra técnica no oficial**. Sirven para validar funcionamiento de puntos, líneas, polígonos, semáforos, filtros y ficha. Deben reemplazarse por datos reales provenientes de Kobo, PDF firmados, fichas técnicas o ArcGIS Online.

## Próximo paso recomendado

La versión **v0.6.0** debería conectar los elementos reales desde Kobo o desde una base estructurada construida a partir de los planes firmados. La estructura ya está lista para recibir geometrías tipo `Point`, `LineString`, `Polygon`, `MultiPoint`, `MultiLineString` y `MultiPolygon`.

## Referencias técnicas

- GeoJSON RFC 7946.
- Leaflet 1.9.
- OGC Simple Feature Access.
- ISO 19115-1:2014, metadatos geográficos.
- ISO 31000:2018, gestión del riesgo.
- ISO 22320:2018, gestión de emergencias.
