# REPORTE DE AVANCE - Versión v0.6.0

Proyecto: Plataforma CZ5 ENOS 2026-2027  
Versión: v0.6.0 - Base PDF digitalizada inicial  
Fecha de corte: 2026-07-01  
Fuente procesada: `PAQUETE_ENOS_ZONA5_2026_2027-20260701T183744Z-3-001.zip`  
Estado: En revisión técnica

## 1. Alcance de esta versión
Se incorporó una primera base real de información a partir del paquete documental cargado por la Coordinación Zonal 5. La plataforma conserva la arquitectura cartográfica y de fichas de la v0.5.11, pero reemplaza la ficha demostrativa por una ficha preliminar derivada de PDF/DOCX, informes de valoración y referencias documentales.

## 2. Resultados del procesamiento
- Carpetas territoriales procesadas: 55.
- Fichas cantonales normalizadas contra cartografía CZ5: 51.
- Registros cantonales con archivo principal localizado: 50.
- Registros con texto extraíble suficiente en PDF/DOCX principal: 49.
- Registros con porcentaje de valoración recuperado desde informe MD: 15.
- Semáforo preliminar de acompañamiento: rojo 5, amarillo 6, verde 4, pendiente 36.

## 3. Criterio aplicado
El semáforo incluido en esta versión es preliminar y se interpreta como prioridad de acompañamiento/documentación, no como diagnóstico definitivo de riesgo físico. Se calculó principalmente desde porcentaje de concordancia cuando existía informe de valoración y desde extracción textual de amenazas, brechas, respuesta, fortalecimiento y monitoreo.

## 4. Archivos generados
- `data/riesgo_zonal_arquitectura_v0.6.0.json`
- `data/fichas_cantonales_pdf_v0.6.0.json`
- `data/fichas_cantonales_pdf_v0.6.0.csv`
- `data/inventario_documental_pdf_v0.6.0.json`
- `data/inventario_documental_pdf_v0.6.0.csv`
- `assets/data/elementos_operativos_enos_v0.6.0.geojson`
- `docs/DICCIONARIO_BASE_PDF_v0.6.0.md`

## 5. Limitaciones críticas
- No se ejecutó OCR masivo; los PDF escaneados con poco texto quedan marcados como `texto_bajo_posible_escaneo` o `sin_texto_posible_escaneo`.
- Las geometrías operativas reales no se extraen de los PDF si no están estructuradas como coordenadas o GeoJSON; deberán provenir de Kobo, ArcGIS Online o plantilla CSV/GeoJSON.
- Los campos de amenazas, brechas y acciones requieren validación manual por CZ5 antes de usarse como dato oficial.

## 6. Próximo paso sugerido
v0.6.1 debe seleccionar 5 cantones piloto para validación manual: uno por provincia o por nivel de criticidad, contrastando la ficha automática con el PDF firmado y corrigiendo el diccionario de extracción.
