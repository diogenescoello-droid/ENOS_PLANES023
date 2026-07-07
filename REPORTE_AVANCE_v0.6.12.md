# Reporte de avance — v0.6.12

**Proyecto:** Plataforma CZ5 ENOS 2026-2027  
**Versión:** v0.6.12  
**Tipo de cambio:** C — ajuste funcional de módulo sin cambio de arquitectura base  
**Módulo intervenido:** 6. Riesgo zonal

## Cambios realizados

1. Se ajustaron los KPI superiores para que cambien según el enfoque activo:
   - Resumen ejecutivo: total GAD, riesgo alto, riesgo medio, riesgo bajo, brechas críticas y amenazas prioritarias.
   - Análisis: riesgo preliminar, amenazas, F03 visibles, geometrías F03 y confianza del dato.
   - Respuesta: COE cantonal, Brigada EVIN, gestores de alojamientos temporales, brechas operativas y Kobo Respuesta.
   - Fortalecimiento: prioridad de acompañamiento, líneas del plan, brechas CZ5, Kobo sensibilización y estado del plan.
   - Monitoreo: acciones en seguimiento, evidencias, alertas, pendientes críticos y último corte.

2. Se incorporó un bloque fijo de **Trazabilidad del dato** en la ficha cantonal:
   - Fuente principal.
   - Archivo del plan.
   - Estado de extracción.
   - Estado de validación CZ5.
   - Concordancia documental.
   - Calidad/confianza del dato.
   - Condición técnica.
   - Fecha de corte.

3. Se ajustaron las tarjetas provinciales para que el semáforo sea leído como **validación cartográfica**, no como riesgo físico oficial.

4. Se mantiene la cartografía F03 real inicial:
   - 2.321 elementos cartográficos registrados.
   - 13 puntos.
   - 1.863 líneas.
   - 445 polígonos.

## Estado de concordancia

La plataforma mantiene concordancia estructural con las bases generadas y con la cartografía importada. La concordancia documental con los planes oficiales sigue marcada como preliminar hasta validación técnica manual CZ5 contra cada plan legalizado.

## Archivos modificados o agregados

- `index.html`
- `data/riesgo_zonal_arquitectura_v0.6.12.json`
- `assets/data/elementos_operativos_enos_v0.6.12.geojson`
- `data/resumen_cartografia_f03_v0.6.12.json`
- `data/inventario_fuentes_cartograficas_v0.6.12.csv`
- `docs/DICCIONARIO_CONCORDANCIA_KPI_v0.6.12.md`

## Pendientes

- Validación manual de datos extraídos de planes legalizados.
- Conexión directa con exportaciones reales de Kobo por enfoque.
- Control de acceso por usuario/unidad para producción.
