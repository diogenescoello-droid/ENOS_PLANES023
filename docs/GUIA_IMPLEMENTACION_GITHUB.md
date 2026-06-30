# Implementación en GitHub · ENOS_PLANES023

Este paquete está preparado para integrar el módulo **6. Riesgo zonal** dentro del `index.html` existente.

## Archivos incluidos

- `index.html`: versión integrada lista para reemplazar el `index.html` actual.
- `backup/index_original_antes_modulo_riesgo.html`: respaldo exacto del archivo original recibido.
- `assets/data/zonas_cantones.geojson`: GeoJSON vacío de respaldo. Puede reemplazarse con polígonos reales.
- `assets/data/README_GEOJSON.md`: guía del campo requerido `ID_CANTON`.

## Cambios hechos al index

1. Se agregó una sexta pestaña: `6. Riesgo zonal`.
2. Se agregó el bloque visual del módulo de análisis de riesgo.
3. Se agregó conexión a la API de riesgo cantonal.
4. Se mantiene intacta la lógica previa de formularios, prompt, GPT, dashboard operativo e información ampliada.

## Configuración obligatoria

Dentro de `index.html`, buscar:

```javascript
let RIESGO_API_TOKEN = 'CAMBIAR_TOKEN_AQUI';
```

Cambiar por el token vigente.

## Endpoints usados

- `vista=riesgo_resumen`
- `vista=riesgo_cantones`
- `vista=riesgo_detalle&id_canton=...`
- `vista=riesgo_tema&tema=BRECHAS`
- `vista=riesgo_tema&tema=AMENAZAS`
- `vista=riesgo_tema&tema=VULNERABILIDAD`
- `vista=riesgo_tema&tema=CAPACIDAD`
- `vista=riesgo_tema&tema=ELEMENTOS_EXPOSTOS`
