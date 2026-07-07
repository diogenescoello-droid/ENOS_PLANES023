# Reporte de avance — v0.7.5

Proyecto: Plataforma ENOS CZ5
Fecha: 2026-07-06
Versión: v0.7.5 · Restricción real de vista por alcance F01
Estado: Ajuste funcional de control visual por jerarquía territorial

## Motivo del ajuste

Durante la prueba con credencial de GAD municipal, el usuario autenticado seguía viendo la misma lectura zonal que la Coordinación Zonal. Esto no cumple la lógica de jerarquía solicitada: un GAD cantonal debe ver únicamente su cantón autorizado; un perfil provincial debe ver su provincia; y solo Coordinación Zonal/administración debe ver toda la Zona 5.

## Cambios realizados

1. Se implementó una capa de alcance activo por sesión F01 dentro del módulo Riesgo Zonal.
2. Si el perfil es `GAD_CANTONAL`, la plataforma bloquea la vista al cantón autorizado por F01.
3. Si el perfil es `AME_PROVINCIAL`, la plataforma bloquea la vista a la provincia autorizada por F01.
4. Se filtran las capas cartográficas visibles según el alcance: provincias, cantones y elementos F03.
5. Se evita que el usuario cantonal limpie la selección para volver a CZ5 completa.
6. Se evita que el usuario cantonal cambie a vista provincial completa.
7. El panel derecho y los KPI se recalculan con base en el alcance autorizado.
8. El Dashboard incorpora una advertencia de vista restringida cuando entra un GAD cantonal.
9. Se mantiene acceso libre a Formularios, Generar prompt, Chat institucional y Bibliografía.
10. Dashboard y Riesgo Zonal continúan protegidos con correo + `_ID` F01.

## Resultado esperado

- Un GAD cantonal no debe ver la Zona 5 completa como alcance operativo.
- Al ingresar con credencial cantonal, Riesgo Zonal debe abrir filtrado al cantón autorizado.
- Las tarjetas provinciales se reducen al territorio correspondiente.
- La cartografía cantonal muestra solo el territorio permitido.
- Los elementos F03 se filtran por cantón/provincia autorizada.

## Limitación de seguridad

Esta versión mantiene control visual en GitHub Pages. Aunque aplica hash para `_ID`, GitHub Pages sigue siendo un entorno estático. Para producción, la validación real debe hacerse en backend: Apps Script, Firebase, Supabase o servidor institucional.

## Próximo paso recomendado

v0.7.6 · Optimización de interfaz por perfil: reducir botones visibles según perfil y mostrar solo acciones disponibles para GAD, AME, Análisis, Respuesta, Fortalecimiento, Monitoreo y Administración CZ5.
