# Reporte de avance — Versión v0.5.5

**Proyecto:** Plataforma CZ5 ENOS 2026-2027  
**Versión:** v0.5.5  
**Tipo de cambio:** C — Módulo cartográfico sin cambio de arquitectura base  
**Estado:** Entregable para revisión

## Cambios realizados

Se integró el nuevo archivo `cantones_zonal5_1.geojson` como capa cantonal real de Zona 5.

El archivo original venía en **EPSG:3857 / Web Mercator**. Fue reproyectado a **WGS84 / EPSG:4326**, formato requerido por Leaflet y GeoJSON web.

Se generó la capa:

`assets/data/cantones_zonal5_wgs84_v0.5.5.geojson`

## Resultado cartográfico

- Provincias activas: 5.
- Cantones activos: 51.
- Bolívar: 7 cantones.
- Guayas: 25 cantones.
- Los Ríos: 13 cantones.
- Santa Elena: 3 cantones.
- Galápagos: 3 cantones.

## Cambios en interfaz

El botón **Cantones** ahora activa polígonos cantonales reales.

El botón **Elementos** continúa pendiente, porque esos datos deben salir de la extracción de puntos, líneas y polígonos desde los planes firmados.

El panel derecho reconoce selección territorial cantonal y mantiene lectura ejecutiva por componente: resumen, análisis, respuesta, fortalecimiento y monitoreo.

## Archivos modificados

- `index.html`
- `data/riesgo_zonal_arquitectura_v0.5.5.json`
- `assets/data/cantones_zonal5_wgs84_v0.5.5.geojson`
- `README.md`

## Archivos no modificados

- Arquitectura principal de la plataforma.
- Roles.
- Formularios Kobo.
- GPT y descarga.
- Bibliografía.
- Dashboard documental.

## Observación crítica

La capa cantonal ya permite interacción territorial real. Aún no debe interpretarse como semáforo de riesgo; por ahora todos los cantones quedan en estado **pendiente** hasta que los PDF firmados alimenten amenaza, exposición, vulnerabilidad, brechas, respuesta, fortalecimiento y monitoreo.
