# ENOS_PLANES023 · Dashboard consolidado + riesgo zonal

Versión ajustada para que la pestaña **5. Dashboard** muestre el consolidado documental de planes ENOS CZ5 desde la API de la matriz maestra, y la pestaña **6. Riesgo zonal** mantenga el análisis territorial por semáforo.

## Cambios principales

- La pestaña **Dashboard** ahora muestra: Total GAD CZ5, planes gestionados, planes validados y planes faltantes.
- Se agregó tabla de resumen provincial consolidado.
- Se agregó lectura por estado: validado, en revisión, devuelto, faltante y observado por calidad de dato.
- Se conserva el módulo F01-F07 original para prompt, información ampliada y sincronización.
- Se conserva el módulo de riesgo zonal.

## Archivo principal

Subir/reemplazar en GitHub:

```text
index.html
```

## Token

Esta versión deja configurado el token de prueba en `RIESGO_API_TOKEN`. Para producción, reemplazarlo por un token nuevo o mover la consulta a backend/proxy.
