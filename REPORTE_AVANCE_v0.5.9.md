# REPORTE DE AVANCE — v0.5.9

Proyecto: Plataforma CZ5 ENOS 2026-2027  
Módulo: 6. Riesgo zonal  
Tipo de cambio: C — módulo funcional sin cambio de arquitectura base  
Estado: En revisión

## Cambios realizados

1. Se mantiene la arquitectura base de la plataforma y se ajusta únicamente el módulo de riesgo zonal.
2. Las capas del mapa ahora funcionan como interruptores independientes: Provincias, Cantones y Elementos operativos pueden prenderse o apagarse sin reemplazarse entre sí.
3. La vista inicial mantiene provincias + cantones activos, con cantones como capa principal.
4. Al seleccionar una provincia o cantón, la selección queda activa, se resalta en el mapa y el panel derecho cambia a la lectura territorial correspondiente.
5. Al tocar nuevamente el mismo cantón o provincia, la selección se apaga y vuelve a la vista CZ5 completa.
6. Los KPI superiores se recalculan según el alcance seleccionado: CZ5 completa, provincia o cantón.
7. Como todavía no existe base de riesgo extraída de PDF/Kobo, los indicadores de riesgo alto/medio/bajo, brechas y amenazas se mantienen como Pendiente cuando no hay semáforo técnico real. No se inventan datos.
8. El panel derecho muestra el ámbito de cálculo, capas visibles y botón para limpiar selección.

## Botones funcionales en el mapa

- Provincias: prende/apaga la capa provincial.
- Cantones: prende/apaga la capa cantonal.
- Elementos operativos · demo: prende/apaga puntos, líneas y polígonos demostrativos.
- Ver toda CZ5: reencuadra el mapa con las capas visibles.
- Continental: enfoca la zona continental.
- Galápagos: selecciona/enfoca Galápagos.
- Abrir ArcGIS Online: preparado para enlace externo cuando exista URL oficial.

## Pendiente para v0.6.0

- Cargar base real de riesgo desde PDF firmados.
- Conectar elementos reales de Kobo: geopoint, geotrace y geoshape.
- Definir regla de semaforización por cantón: riesgo, brechas, respuesta, fortalecimiento y monitoreo.
- Conectar enlace oficial de ArcGIS Online.
