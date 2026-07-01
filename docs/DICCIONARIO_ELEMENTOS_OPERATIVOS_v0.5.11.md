# Diccionario de elementos operativos — v0.5.8

Este diccionario define la estructura para cargar elementos geográficos en el módulo **Riesgo zonal** de la plataforma CZ5 ENOS.

## Geometrías soportadas

| Tipo | Uso operativo |
|---|---|
| `Point` | Sitios críticos, alojamientos temporales, infraestructura expuesta, puntos seguros, puntos de monitoreo. |
| `LineString` | Rutas de evacuación, vías críticas, tramos de erosión, cauces, canales, drenajes, escarpes o socavación lineal. |
| `Polygon` | Zonas inundables, sectores expuestos, áreas de intervención, barrios críticos, zonas de aislamiento. |
| `MultiPoint`, `MultiLineString`, `MultiPolygon` | Conjuntos de elementos similares levantados como una sola entidad. |

## Campos mínimos recomendados

| Campo | Descripción |
|---|---|
| `id_elemento` | Identificador único del elemento. |
| `provincia` | Provincia CZ5. |
| `canton` | Cantón CZ5. |
| `categoria_id` | Código de categoría para filtros: `SITIO_CRITICO`, `INFRAESTRUCTURA`, `RESPUESTA`, `ACCION_PRIORIZADA`, `MONITOREO`. |
| `categoria` | Nombre legible de la categoría. |
| `subcategoria` | Tipo específico del elemento. |
| `componente` | Análisis, Respuesta, Fortalecimiento o Monitoreo. |
| `amenaza` | Amenaza asociada. |
| `semaforo` | `ROJO`, `AMARILLO`, `VERDE` o `PENDIENTE`. |
| `prioridad` | Alta, Media, Baja, Operativa, Seguimiento, etc. |
| `nombre` | Nombre del elemento. |
| `descripcion` | Descripción técnica breve. |
| `accion_requerida` | Acción necesaria o recomendada. |
| `responsable` | Actor responsable o corresponsable. |
| `estado` | Estado de verificación, avance o atención. |
| `fuente` | Kobo, plan firmado, inspección técnica, ArcGIS Online, etc. |

## Relación con Kobo

Kobo puede aportar directamente:

- `geopoint` → `Point`.
- `geotrace` → `LineString`.
- `geoshape` → `Polygon`.

La recomendación es transformar esas respuestas en un GeoJSON único de elementos operativos y publicarlo como:

`assets/data/elementos_operativos_enos_vX.X.X.geojson`

## Nota de uso

La capa incluida en v0.5.8 es demostrativa. No representa datos oficiales. Su propósito es validar comportamiento de mapa, filtros, semáforos y fichas.
