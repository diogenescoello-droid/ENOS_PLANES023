# GeoJSON cantonal

Reemplace `zonas_cantones.geojson` por la capa real de polígonos cantonales/provinciales de la Zona 5.

Requisito mínimo de cada feature:

```json
{
  "type": "Feature",
  "properties": {
    "ID_CANTON": "GUAYAS_DAULE",
    "PROVINCIA": "GUAYAS",
    "CANTON": "DAULE"
  },
  "geometry": {}
}
```

La clave `ID_CANTON` debe coincidir con la columna `ID_CANTON` de la hoja `RIESGO_CANTONAL`.

Sin GeoJSON, el sistema muestra un acceso esquemático por provincia y marcadores si existen `LAT_CENTRO` y `LON_CENTRO`.
