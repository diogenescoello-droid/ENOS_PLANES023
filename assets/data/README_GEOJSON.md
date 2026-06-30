# GeoJSON cantonal CZ5

Reemplace `zonas_cantones.geojson` con los polígonos reales de cantones CZ5.

Campo obligatorio para enlace con la API:

```text
ID_CANTON
```

Ejemplos:

```text
GUAYAS_DAULE
LOS_RIOS_BABA
BOLIVAR_CALUMA
```

Si este archivo queda vacío, el módulo seguirá funcionando con los centroides `LAT_CENTRO` y `LON_CENTRO` de la API.
