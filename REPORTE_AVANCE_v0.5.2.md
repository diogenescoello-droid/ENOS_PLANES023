# Reporte de avance — v0.5.2

Proyecto: Plataforma CZ5 ENOS 2026-2027  
Módulo: 6. Riesgo zonal  
Tipo de cambio: C — ajuste de módulo sin cambio de arquitectura base  
Estado: En revisión

## Problema corregido

En la vista observada aparecía el mensaje “Falta configurar RIESGO_API_TOKEN”, lo que indica que se estaba ejecutando la lógica anterior basada en API/token. Para esta fase cartográfica no conviene depender de esa API porque todavía no existe la base cantonal normalizada desde los PDF firmados.

También se detectó que los GeoJSON entregados no estaban en coordenadas geográficas WGS84/EPSG:4326. Sus coordenadas estaban en valores métricos compatibles con Web Mercator/EPSG:3857. Leaflet espera GeoJSON en WGS84; por eso el mapa no se centraba correctamente ni permitía una lectura confiable de las provincias.

## Cambios realizados

1. Se eliminó la dependencia temporal de token/API dentro del módulo de riesgo zonal.
2. Se reproyectó la capa provincial CZ5 desde EPSG:3857 hacia WGS84/EPSG:4326.
3. Se generó la capa `assets/data/provincias_zonal5_wgs84_v0.5.2.geojson`.
4. Se actualizó el archivo de configuración `data/riesgo_zonal_arquitectura_v0.5.2.json`.
5. Se mantuvo la arquitectura base del `index.html`: roles, formularios, GPT, bibliografía, dashboard documental y pestaña 6.
6. Se mantuvo el mapa como selector territorial provincial.
7. Se agregó control de vista continental y acceso rápido a Galápagos para evitar que la extensión insular disperse la lectura del mapa.
8. Se dejó la capa cantonal como pendiente real, sin inventar geometrías cantonales.

## Archivos modificados

- `index.html`
- `data/riesgo_zonal_arquitectura_v0.5.2.json`
- `assets/data/provincias_zonal5_wgs84_v0.5.2.geojson`
- `assets/data/cantones_zonal5_pendiente_v0.5.2.geojson`
- `assets/data/elementos_operativos_enos_v0.5.2.geojson`

## Archivos no modificados estructuralmente

- Flujo de actores.
- Formularios Kobo.
- Módulo GPT.
- Bibliografía.
- Dashboard documental estratégico.
- Arquitectura general de navegación.

## Limitaciones

El archivo `cantonesZonal5gr.geojson` cargado contiene 5 polígonos provinciales, no polígonos cantonales. Por tanto, la capa cantonal se mantiene como pendiente hasta recibir un GeoJSON cantonal real.

Los puntos, líneas y polígonos operativos quedan preparados, pero todavía no tienen datos reales porque deben extraerse de los planes firmados.

## Próximo paso recomendado

Versión v0.6.0: cargar la primera base estructurada derivada de PDF firmados, aunque sea con 5 a 10 cantones piloto, para probar semáforos, brechas, acciones de respuesta, fortalecimiento y monitoreo.
