# SNGR-CZ5-ENOS v0.5.6

Versión de corrección cartográfica puntual para el módulo **6. Riesgo zonal**.

Esta entrega mantiene la arquitectura base de la plataforma y corrige el comportamiento de la capa cantonal. La vista inicial del mapa ahora abre directamente en modo **Cantones**, con 51 polígonos cantonales de la Zona 5 visibles y las provincias como contorno de apoyo.

## Cómo probar

1. Descomprimir `SNGR-CZ5-ENOS_v0.5.6.zip`.
2. Abrir `index.html`.
3. Ir a **6. Riesgo zonal**.
4. La capa **Cantones** debe aparecer activa por defecto.
5. Al seleccionar un cantón, el panel derecho debe mostrar la selección territorial.
6. El botón **Provincias** debe volver a la vista provincial.

## Estado de datos

- Provincias: conectado.
- Cantones: conectado y visible por defecto.
- Elementos operativos: pendiente de extracción desde PDF firmados.
- Semáforos de riesgo: pendientes de matriz analítica.

## Nota

Si no se visualiza la capa cantonal, abrir desde una carpeta limpia y verificar que se esté usando exactamente `SNGR-CZ5-ENOS_v0.5.6/index.html`, no una versión cacheada anterior.
