# REPORTE DE AVANCE · v0.8.1

## Nombre de versión
SNGR-CZ5-ENOS v0.8.1 · Corrección funcional y simplificación operativa.

## Base utilizada
v0.8.0 · Fase institucional de acceso y gobernanza de información.

## Cambios aplicados

1. Se corrigieron los botones sin acción en Bibliografía:
   - “Abrir normativa y lineamientos” abre biblioteca técnica local.
   - “Abrir carpeta Drive” muestra advertencia si no hay URL oficial configurada.

2. Se agregó monitor de conexión:
   - Índice F01-F07 / Apps Script.
   - Backend de acceso institucional.
   - Base F01 hash local.

3. Se fortaleció el módulo Generar prompt:
   - Si Apps Script falla, genera prompt degradado local.
   - El prompt declara limitaciones y usa datos de sesión/ficha si están disponibles.

4. Se simplificó Riesgo Zonal por perfil:
   - Vista GAD: flujo guiado “Mi cantón → Brechas → Qué debo hacer → Formularios → Generar prompt”.
   - Vista AME/provincial: lectura provincial y brechas agregadas.
   - Vista CZ5: mantiene control zonal completo.

5. Se agregó botón “Generar prompt desde esta ficha” dentro de la ficha cantonal.

## Limitaciones

La seguridad real aún depende de conectar backend institucional. GitHub Pages solo permite control visual/local y no debe almacenar datos sensibles ni credenciales en texto plano.

## Recomendación siguiente

Probar v0.8.1 con tres perfiles: GAD cantonal, AME provincial y CZ5. Luego pasar a v0.8.2 para conectar URL oficial de Drive y backend Apps Script si ya está disponible.
