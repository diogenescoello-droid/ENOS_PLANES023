# Requerimiento GeoJSON cantonal · v0.5.4

Para activar la capa **Cantones** se requiere un GeoJSON real de cantones de la Zona 5, no una capa provincial renombrada.

## Formato requerido

- Tipo: `FeatureCollection`
- Sistema de referencia: WGS84 / EPSG:4326
- Geometría esperada: `Polygon` o `MultiPolygon`
- Cobertura: cantones de Bolívar, Guayas, Los Ríos, Santa Elena y Galápagos.

## Propiedades mínimas por feature

```json
{
  "provincia": "Guayas",
  "canton": "Milagro",
  "codigo_dpa": "0910",
  "zona": "CZ5"
}
```

## Estado actual

El archivo cargado como `cantonesZonal5gr.geojson` contiene 5 polígonos provinciales: Santa Elena, Bolívar, Los Ríos, Galápagos y Guayas. Por esa razón la plataforma mantiene activa la capa provincial y marca la capa cantonal como pendiente.
