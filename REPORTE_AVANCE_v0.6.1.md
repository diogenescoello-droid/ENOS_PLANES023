# Reporte de avance · v0.6.1

Proyecto: Plataforma CZ5 ENOS 2026-2027  
Versión: v0.6.1  
Tipo de cambio: C - módulo funcional dentro de arquitectura existente  
Estado: En revisión

## Cambio aplicado
Se integró el bloque **Fortalecimiento / Sensibilización comunitaria ENOS** dentro de la ficha cantonal dinámica del módulo **6. Riesgo zonal**.

## Fuente utilizada
Formulario PDF: `Seguimiento de las Estrategias de Sensibilización a la población por el Evento el Niño 2026-2027.pdf`.

## Qué verá Fortalecimiento al seleccionar un cantón
- Estado del registro de sensibilización.
- Si existen acciones mínimas de sensibilización.
- Temáticas de campaña.
- Público objetivo priorizado.
- Sectores, comunidades o recintos sensibilizados.
- Ubicaciones georreferenciadas.
- Conformación de Comité Comunitario de Gestión de Riesgos.
- Representante y teléfono.
- Canales utilizados.
- Estado de ejecución.
- Siguiente acción requerida por CZ5.
- Botón para abrir Kobo de sensibilización.
- Botón/enlace relativo al plan cantonal.

## Archivos modificados
- `index.html`
- `data/riesgo_zonal_arquitectura_v0.6.1.json`
- `data/fortalecimiento_sensibilizacion_schema_v0.6.1.json`
- `data/seguimiento_fortalecimiento_sensibilizacion_v0.6.1.csv`
- `docs/DICCIONARIO_FORTALECIMIENTO_SENSIBILIZACION_v0.6.1.md`

## Advertencia técnica
Los datos reales de sensibilización por cantón aún no están conectados. En v0.6.1 se integró la estructura y los campos requeridos. Para que los valores cambien de “Pendiente”, se debe conectar la exportación de Kobo o cargar el CSV consolidado.

## Enlace al plan
Cada ficha cantonal incluye `enlace_plan_relativo`, construido desde `archivo_plan_principal`. Para publicación web estable debe reemplazarse por `enlace_plan_publico` con URL de Drive, servidor institucional o repositorio documental.
