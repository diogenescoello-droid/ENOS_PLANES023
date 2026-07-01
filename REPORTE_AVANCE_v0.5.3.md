# Reporte de avance — v0.5.3

## Proyecto
Plataforma CZ5 ENOS 2026-2027

## Tipo de cambio
Cambio tipo B/C: ajuste visual-funcional del módulo de riesgo zonal, sin alterar arquitectura base.

## Problema observado
En la captura enviada todavía aparece el mensaje **“Falta configurar RIESGO_API_TOKEN dentro del index.html”**. Ese mensaje pertenece a la lógica anterior basada en API/token. En la versión cartográfica actual no debe aparecer.

## Corrección aplicada
1. Se generó versión visible **v0.5.3**.
2. Se eliminó la dependencia funcional de API/token en la vista de riesgo zonal.
3. Se agregó respaldo interno del JSON de arquitectura y del GeoJSON provincial, para que el mapa pueda cargar incluso si el navegador bloquea `fetch()` sobre archivos locales.
4. Se reforzó el texto visible del módulo: “cartografía local sin API/token”.
5. Se mantiene la arquitectura base del `index.html` original.

## Resultado esperado
Al ingresar a **6. Riesgo zonal**, la cabecera debe mostrar **v0.5.3 · Mapa local sin API**. El mapa debe cargar provincias CZ5 y permitir selección provincial.

## Pendiente real
La capa cantonal sigue pendiente porque el GeoJSON cargado como cantonal contiene polígonos provinciales. Para pasar a análisis cantonal real se necesita GeoJSON cantonal o una fuente ArcGIS/GeoJSON equivalente.

## Verificación rápida
Si vuelve a aparecer el mensaje de token, no es esta versión; se está abriendo un `index.html` viejo o cacheado.
