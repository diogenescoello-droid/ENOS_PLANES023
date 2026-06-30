# Reporte de avance — Versión v0.4.0

**Proyecto:** Plataforma CZ5 ENOS 2026-2027  
**Fecha:** 30 de junio de 2026  
**Archivo base recibido:** `index.html`  
**Archivo entregado:** `SNGR-CZ5-ENOS_v0.4.0.zip`  
**Estado:** Entregado para revisión

## Decisión aplicada
Se usó el `index.html` cargado por el usuario como base real de trabajo. No se utilizó el prototipo previo como arquitectura principal.

## Cambios realizados
- Se mantuvo la arquitectura base: encabezado, selección de actor, flujo operativo y pestañas existentes.
- Se reemplazó únicamente el contenido del tab `Dashboard` por un bloque estratégico de seguimiento documental.
- Se eliminaron de la vista documental los elementos no solicitados: tabla cantonal larga, buscador de cantones, filtros operativos, exportación y mapa nuevo.
- Se incorporaron indicadores ejecutivos: universo CZ5, socialización, entrega documental, validación técnica, gestión técnica pendiente y faltantes críticos.
- Se agregó avance agregado por provincia mediante tarjetas simples y barras de progreso, sin detalle cantonal.
- Se dejó el módulo de riesgo zonal y el resto de la plataforma sin rediseño estructural.

## Archivos modificados
- `index.html`

## Archivos agregados
- `data/seguimiento_documental_estrategico_v0.4.0.json`
- `docs/index_base_recibido_20260630.html`
- `VERSION.json`
- `REPORTE_AVANCE_v0.4.0.md`

## Archivos no modificados conceptualmente
- Arquitectura general de la página.
- Flujo de actores.
- Pestañas base.
- Módulo de riesgo zonal.
- Funciones existentes de Kobo, GPT, bibliografía y conexión.

## Indicadores del corte usado
- Universo registrado: 56.
- Socialización: 100%.
- Planes entregados: 35 / 56 = 62,5%.
- Planes validados: 37 / 56 = 66,1%.
- Devueltos: 10.
- En revisión: 7.
- Faltantes críticos: 2.

## Observación técnica
Santa Elena registra 0% de entrega documental y 25% de validación en la base agregada; esto puede indicar una inconsistencia de captura o clasificación en la matriz fuente y conviene revisarlo antes de usar el dato como corte oficial.

## Pendiente recomendado
Validar visualmente el `index.html` en navegador y confirmar si el tab debe seguir llamándose `Dashboard` o cambiar a `Dashboard documental`, sin agregar una nueva pestaña.

## Referencia de control
Se continúa usando versionado semántico y control de cambios por tipo: A datos, B visual, C módulo, D arquitectura.
