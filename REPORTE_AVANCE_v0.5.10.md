# Reporte de avance — Versión v0.5.10

**Proyecto:** Plataforma CZ5 ENOS 2026-2027  
**Módulo:** 6. Riesgo zonal  
**Tipo de cambio:** Ajuste visual-funcional sin cambio de arquitectura base  
**Estado:** En revisión

## Objetivo de la versión

Ajustar la interacción del mapa estratégico para que la selección de provincia/cantón sea clara y no se confunda con semaforización de riesgo.

## Cambios realizados

1. Se mantiene la arquitectura base de la plataforma.
2. Se conserva la lógica de capas conmutables: Provincias, Cantones y Elementos operativos.
3. Se mantiene la selección/deselección por clic territorial.
4. Se ajusta el primer KPI para cambiar dinámicamente su etiqueta:
   - Vista CZ5 completa: **Total GAD CZ5**.
   - Provincia seleccionada: **GAD en provincia**.
   - Cantón seleccionado: **Territorio seleccionado**.
5. Se cambia el estilo de selección territorial a borde azul/celeste.
6. Se reserva el color rojo exclusivamente para semáforo de riesgo alto cuando existan datos reales.
7. Se actualiza la nota inferior del mapa para aclarar que el borde azul indica selección y no riesgo alto.
8. Se actualizan referencias internas a v0.5.10.

## Archivos modificados

- `index.html`
- `VERSION.json`
- `data/riesgo_zonal_arquitectura_v0.5.10.json`
- `assets/data/provincias_zonal5_wgs84_v0.5.10.geojson`
- `assets/data/cantones_zonal5_wgs84_v0.5.10.geojson`
- `assets/data/elementos_operativos_enos_v0.5.10.geojson`

## Archivos no modificados estructuralmente

- Encabezado general.
- Selección de actor.
- Formularios Kobo.
- Módulo GPT.
- Bibliografía.
- Dashboard documental.
- Arquitectura principal de pestañas.

## Observación técnica

Los indicadores de riesgo alto, medio, bajo, brechas críticas y amenazas prioritarias siguen como **Pend.** porque todavía no se ha conectado la base real extraída de PDF firmados, Kobo o ArcGIS Online.

## Próximo paso sugerido

La v0.6.0 debería iniciar la carga de datos reales por cantón: amenaza principal, sitios críticos, elementos expuestos, brechas, acciones, responsables, estado de avance y semáforo territorial.
