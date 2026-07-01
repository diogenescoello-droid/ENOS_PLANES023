# Reporte de avance — Versión v0.5.0

**Proyecto:** Plataforma CZ5 ENOS 2026-2027  
**Fecha:** 2026-07-01  
**Archivo entregado:** `SNGR-CZ5-ENOS_v0.5.0.zip`  
**Estado:** En revisión  
**Tipo de cambio:** C — Módulo dentro de arquitectura base

## Alcance aplicado
Se actualizó el módulo **6. Riesgo zonal** sin modificar la arquitectura principal de la plataforma. La actualización responde a la necesidad de organizar el entramado de datos que saldrá de los Planes de Acción Territorial ENOS firmados por alcaldes/GAD.

## Cambios realizados
- Se mantuvo la navegación principal de seis pestañas.
- Se conservaron los módulos previos hasta bibliografía y dashboard documental.
- Se reemplazó la lectura vacía del módulo de riesgo por una estructura funcional de datos.
- Se agregaron botones por componente de gestión: resumen ejecutivo, análisis, respuesta, fortalecimiento y monitoreo.
- Se agregaron botones temáticos: riesgo general, brechas, amenazas, vulnerabilidad, respuesta, fortalecimiento y monitoreo.
- Se configuró un mapa estratégico como selector de provincia, preparado para futura conexión GeoJSON/API.
- Se agregó panel derecho con lectura técnica dinámica según componente, tema y provincia.
- Se creó el archivo `data/riesgo_zonal_arquitectura_v0.5.0.json` como contrato inicial de datos.

## Archivos modificados
- `index.html`
- `README.md`
- `VERSION.json`
- `REPORTE_AVANCE_v0.5.0.md`
- `data/riesgo_zonal_arquitectura_v0.5.0.json`

## Archivos no modificados estructuralmente
- Arquitectura base de la página.
- Flujo operativo de roles.
- Formularios Kobo.
- Módulo GPT.
- Bibliografía.
- Dashboard documental v0.4.0.

## Pendientes de datos
Para activar valores reales se requiere construir una base normalizada desde los PDF firmados. Campos mínimos: provincia, cantón, GAD, fecha de firma, amenaza principal, sitios críticos, elementos expuestos, brechas, acciones de corto/mediano/largo plazo, responsables, plazos, recursos, alojamientos, rutas, puntos seguros, capacidades, monitoreo, puntajes y semáforos.

## Observación crítica
La API de riesgo no debe conectarse directamente a documentos PDF sin una capa intermedia. Primero debe existir una tabla maestra o JSON normalizado por cantón/GAD; luego esa base alimenta mapa, fichas, semáforos y resúmenes ejecutivos.
