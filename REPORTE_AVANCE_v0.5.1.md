# Reporte de avance — Versión v0.5.1

Proyecto: Plataforma CZ5 ENOS 2026-2027  
Fecha: 2026-07-01  
Archivo entregado: `SNGR-CZ5-ENOS_v0.5.1.zip`  
Estado: En revisión técnica

## Cambio aplicado

Tipo C — módulo dentro de arquitectura existente, sin cambio de arquitectura base.

## Objetivo de la versión

Conectar la parte cartográfica del módulo **6. Riesgo zonal** usando los GeoJSON cargados por el usuario, manteniendo el enfoque ejecutivo de la plataforma y preparando la integración posterior con datos extraídos desde los planes firmados.

## Cambios realizados

- Se mantuvo la arquitectura general del `index.html` base.
- Se conectó el mapa interno de riesgo zonal con Leaflet y GeoJSON provincial CZ5.
- Se reemplazó el mapa simulado por un mapa real como selector territorial provincial.
- Se agregó control de capas: provincias, cantones, elementos y vista completa CZ5.
- Se agregó botón preparado para ArcGIS Online.
- Se creó estructura para puntos, líneas y polígonos operativos.
- Se mantiene el panel derecho dinámico por componente, tema y provincia.

## Archivos incorporados

- `assets/data/provincias_zonal5_simplificado.geojson`
- `assets/data/cantones_zonal5.geojson`
- `assets/data/elementos_operativos_enos_v0.5.1.geojson`
- `data/riesgo_zonal_arquitectura_v0.5.1.json`
- `docs/DICCIONARIO_CARTOGRAFICO_v0.5.1.md`

## Revisión de archivos GeoJSON cargados

### `provicniasZonal5gr.geojson`

- Features detectadas: 5
- Geometría: {'MultiPolygon': 5}
- Campos principales: AREA_KM2, DPA_ANIO, DPA_DESPRO, DPA_PROVIN, DPA_VALOR, OBJECTID, REN_CODIGO, REN_REGION, Shape__Area, Shape__Length, TOTPOP
- Lectura: contiene provincias CZ5 y sirve para el mapa provincial.

### `cantonesZonal5gr.geojson`

- Features detectadas: 5
- Geometría: {'MultiPolygon': 5}
- Campos principales: AREA_KM2, DPA_ANIO, DPA_DESPRO, DPA_PROVIN, DPA_VALOR, OBJECTID, REN_CODIGO, REN_REGION, Shape__Area, Shape__Length, TOTPOP
- Lectura crítica: el archivo cargado como cantonal contiene 5 polígonos provinciales y no presenta campos cantonales identificables. Por eso la capa cantonal queda preparada pero pendiente de GeoJSON cantonal real.

## Lo que ya puede aportar el mapa

- Selector territorial provincial.
- Lectura por componente: resumen, análisis, respuesta, fortalecimiento y monitoreo.
- Lectura por tema: riesgo, brechas, amenazas, vulnerabilidad, respuesta, fortalecimiento y monitoreo.
- Preparación técnica para capas futuras de puntos, líneas y polígonos.

## Pendientes para v0.6.0

- Cargar GeoJSON cantonal real CZ5.
- Configurar URL de ArcGIS Online en `data/riesgo_zonal_arquitectura_v0.5.1.json`.
- Alimentar `elementos_operativos_enos_v0.5.1.geojson` con datos extraídos desde PDF firmados.
- Definir regla de semaforización por riesgo, brechas, respuesta, fortalecimiento y monitoreo.

## Decisión recomendada

Aprobar v0.5.1 como base cartográfica provincial y continuar con v0.6.0 para capa cantonal y extracción de información desde planes firmados.
