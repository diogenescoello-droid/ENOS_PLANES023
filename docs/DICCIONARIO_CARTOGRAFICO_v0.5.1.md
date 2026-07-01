# Diccionario cartográfico — v0.5.1

## Capas internas

### Provincias CZ5

Archivo: `assets/data/provincias_zonal5_simplificado.geojson`  
Estado: conectado.  
Uso: selector ejecutivo por provincia.

Campos esperados:

- `provincia_id`: identificador normalizado para la plataforma.
- `provincia`: nombre legible.
- `DPA_PROVIN`: código provincial DPA, si existe.
- `DPA_DESPRO`: nombre original de provincia.
- `zona`: CZ5.

### Cantones CZ5

Archivo: `assets/data/cantones_zonal5.geojson`  
Estado: pendiente.  
Uso futuro: selector cantonal y ficha técnica por GAD.

Campos requeridos para activar:

- `provincia`
- `canton`
- `codigo_dpa` o `id_canton`
- `zona`

### Elementos operativos ENOS

Archivo: `assets/data/elementos_operativos_enos_v0.5.1.geojson`  
Estado: estructura preparada sin registros.

Geometrías soportadas:

- Punto: sitios críticos, alojamientos, puntos seguros, infraestructura esencial.
- Línea: rutas, drenajes, tramos de erosión, vías críticas, cauces o canales.
- Polígono: zonas inundables, áreas críticas, sectores expuestos, áreas de aislamiento.

Campos requeridos:

- `id`
- `tipo_elemento`
- `componente`
- `tema`
- `provincia`
- `canton`
- `nombre`
- `descripcion`
- `fuente_pdf`
- `semaforo`
- `responsable`
- `plazo`
- `estado`

## Recomendación de arquitectura

La plataforma debe mostrar cartografía ejecutiva: semáforos, selección territorial y fichas. ArcGIS Online debe alojar la cartografía pesada, edición, capas institucionales y evidencias espaciales.
