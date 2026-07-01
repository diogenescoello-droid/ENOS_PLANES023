# Reporte de avance — Versión v0.5.6

**Proyecto:** Plataforma CZ5 ENOS 2026-2027  
**Fecha:** 2026-07-01  
**Archivo entregado:** `SNGR-CZ5-ENOS_v0.5.6.zip`  
**Estado:** Corrección cartográfica puntual

## Problema reportado

La capa provincial funcionaba correctamente, pero la opción **Cantones** no quedaba visible/operativa para el usuario. En la captura se observaba que la vista seguía funcionando principalmente como provincia.

## Corrección aplicada

Se ajustó el módulo **6. Riesgo zonal** para que la capa cantonal quede **visible por defecto** al abrir el módulo.

Cambios principales:

- La vista inicial del mapa pasa de `PROVINCIAS` a `CANTONES`.
- La capa provincial se conserva como contorno de referencia en modo cantonal.
- La capa cantonal queda encima de la provincial.
- Se mejora el estilo de polígonos cantonales para que los límites sean visibles.
- Se cambia el control activo por atributo `data-layer`, evitando depender del texto del botón.
- El estado visible del módulo indica: `v0.5.6 · Vista cantonal activa · 51 cantones cargados`.
- Se mantiene el botón **Provincias** para volver a vista agregada provincial.
- No se altera la arquitectura base del `index.html`.

## Archivos modificados

- `index.html`
- `data/riesgo_zonal_arquitectura_v0.5.6.json`
- `assets/data/cantones_zonal5_wgs84_v0.5.6.geojson`
- `assets/data/provincias_zonal5_wgs84_v0.5.6.geojson`
- `assets/data/elementos_operativos_enos_v0.5.6.geojson`
- `data/plantilla_elementos_operativos_v0.5.6.csv`

## Archivos no modificados conceptualmente

- Estructura general de navegación.
- Roles de usuario.
- Formularios Kobo.
- Módulo GPT.
- Bibliografía.
- Dashboard documental.
- Lógica general de arquitectura.

## Estado de capas

- Provincias: activa.
- Cantones: activa por defecto, 51 polígonos.
- Elementos operativos: pendiente de extracción desde PDF firmados.
- Semáforos cantonales: pendientes de base analítica.
- ArcGIS Online: botón preparado, URL pendiente.

## Observación técnica

La capa cantonal no debe interpretarse todavía como análisis de riesgo. Actualmente es un selector territorial. La lectura de riesgo, brechas, respuesta, fortalecimiento y monitoreo se activará cuando se cargue la ficha estructurada por cantón, derivada de los planes firmados.
