# Reporte de avance — Versión v0.5.4

Proyecto: Plataforma CZ5 ENOS 2026-2027
Archivo entregado: `SNGR-CZ5-ENOS_v0.5.4.zip`
Estado: Corrección cartográfica de estado de capas
Tipo de cambio: B/C — ajuste visual y funcional sin cambio de arquitectura base

## Cambios realizados

- Se mantuvo la arquitectura original del `index.html` base.
- Se conserva activa la capa provincial WGS84 como capa principal del mapa estratégico.
- Se corrigió la comunicación del botón **Cantones**: queda explícitamente como capa pendiente, no como capa fallida.
- Se corrigió la comunicación del botón **Elementos**: queda explícitamente como estructura preparada para puntos, líneas y polígonos derivados de los PDF firmados.
- Se agregó plantilla CSV para normalizar elementos operativos.
- Se agregó documento de requerimiento para GeoJSON cantonal real.

## Decisión técnica

No se activan cantones porque el archivo recibido como `cantonesZonal5gr.geojson` contiene 5 polígonos provinciales y no geometría cantonal. No se simulan cantones ni se inventan límites.

## Pendientes

1. Cargar GeoJSON cantonal real en EPSG:4326.
2. Extraer elementos operativos desde planes firmados: puntos críticos, rutas, alojamientos, infraestructura, tramos y polígonos de afectación.
3. Definir URL del visor ArcGIS Online cuando exista mapa técnico oficial.
4. Alimentar semáforos con fichas estructuradas de los PDF firmados.

## Prueba esperada

Al abrir el módulo Riesgo zonal:

- `Provincias` muestra los 5 polígonos provinciales.
- `Cantones` muestra aviso técnico de capa pendiente.
- `Elementos` muestra aviso técnico de estructura preparada sin datos operativos.
- El mapa no muestra mensajes de token/API.
