# ENOS CZ5 Dashboard Frontend

Paquete estático para cargar en GitHub o integrar dentro de la plataforma ENOS 2026.

## Módulos incluidos

1. Análisis de riesgo zonal.
2. Seguimiento documental.

## Configuración

Abra:

```text
assets/js/config.js
```

Cambie:

```javascript
API_TOKEN: "CAMBIAR_TOKEN_AQUI"
```

Use el token solo en repositorio privado o ambiente controlado.

## Carga en GitHub

1. Cree un repositorio privado.
2. Suba todos los archivos de esta carpeta.
3. Edite `assets/js/config.js`.
4. Active GitHub Pages desde `Settings -> Pages`.
5. Seleccione branch `main` y carpeta `/root`.

## GIS

Reemplace `assets/data/zonas_cantones.geojson` con polígonos reales. Cada feature debe tener `ID_CANTON`.

## URL base API

```text
https://script.google.com/macros/s/AKfycbw9pDFZv6HBseCNILV90w8XfZL043inXnG0kvXDdgXl35N2vdKYIrYGh5HgAsXjfRbxEA/exec
```
