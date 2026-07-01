# Diccionario base PDF v0.6.0

## Campos principales
- `codigo_dpa`: código DPA del cantón usado para enlazar con la capa cantonal.
- `provincia`, `canton`: territorio normalizado contra cartografía CZ5.
- `archivo_plan_principal`: archivo PDF/DOCX priorizado por heurística como plan o documento base.
- `estado_extraccion`: resultado de lectura automática de texto.
- `estado_documental`: estado recuperado de informe de valoración o inferido por presencia de plan.
- `porcentaje_concordancia`: porcentaje recuperado de informe de valoración cuando existe.
- `semaforo_preliminar_acompanamiento`: rojo, amarillo, verde o pendiente según madurez documental y necesidad de acompañamiento.
- `amenazas_detectadas`: amenazas encontradas por diccionario de palabras clave.
- `brechas_detectadas`: brechas técnicas/operativas encontradas por diccionario.
- `respuesta_detectada`: acciones o componentes de respuesta detectados.
- `fortalecimiento_detectado`: necesidades de capacitación, protocolos, simulacros o fortalecimiento institucional.
- `monitoreo_detectado`: seguimiento, alertas, evidencias o reportes.

## Uso correcto
Esta base alimenta la ficha cantonal del módulo Riesgo zonal. El semáforo es preliminar y debe validarse por revisión técnica. No debe confundirse con el nivel oficial de amenaza, vulnerabilidad o riesgo físico del territorio.

## Cartografía operativa
La capa `elementos_operativos_enos_v0.6.0.geojson` queda vacía de forma intencional porque los PDF no entregan geometrías normalizadas. Para activar puntos, líneas y polígonos reales se requiere exportación Kobo geopoint/geotrace/geoshape, ArcGIS Online o carga CSV/GeoJSON con coordenadas.
