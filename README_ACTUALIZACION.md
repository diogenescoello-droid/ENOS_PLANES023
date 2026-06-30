# Actualización de plataforma CZ5 · ENOS 2026-2027

Fecha de generación: 2026-06-30  
Fuente cargada: `MATRIZSEGUIM-EL NIÑO(2)(8).xlsx`  
Hoja principal usada: `Consolidado`

## Qué se actualizó

Se preparó un módulo web autónomo para seguimiento documental de planes de acción ante ENOS 2026-2027. El archivo principal es:

- `index.html`: tablero interactivo listo para abrir o subir a hosting.
- `data/seguimiento_cz5_enos.json`: base limpia para conexión con otros módulos.
- `docs/MAPEO_CAMPOS.md`: diccionario de campos y equivalencias desde la matriz.

## Indicadores consolidados

- Total de registros operativos: 56
- GAD cantonales: 51
- GAD provinciales: 5
- Socializados: 56
- Planes entregados: 35 (62.5%)
- Planes no entregados: 21
- Planes validados: 37 (66.1%)
- Devueltos: 10
- En revisión: 7
- Faltantes: 2

## Integración recomendada

1. Subir `index.html` al repositorio o carpeta pública de la plataforma.
2. Conservar `data/seguimiento_cz5_enos.json` como fuente oficial del módulo de seguimiento.
3. Si la plataforma ya usa Google Sheets, reemplazar el JSON por la salida de la hoja `Consolidado`, manteniendo los nombres normalizados del diccionario.
4. Mantener separado este módulo documental del módulo `RIESGO_CANTONAL`, para no mezclar avance administrativo con exposición/escenarios de riesgo.
5. En el `index.html` principal de la plataforma, agregar un botón o pestaña: `Seguimiento documental ENOS`.

## Observación técnica

El mapa incluido es esquemático y funciona como filtro operativo por provincia. Para mapa cartográfico real se debe cargar un GeoJSON oficial de provincias/cantones.
