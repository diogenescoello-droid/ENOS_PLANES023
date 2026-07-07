# Reporte de avance — v0.7.3

## Proyecto
Plataforma ENOS CZ5 — Fase 2: gestión de información por jerarquía y acceso controlado.

## Estado
Versión en revisión técnica.

## Cambio principal
Se ajustó el flujo de acceso para que la plataforma abra primero en vista general, sin solicitar credenciales de entrada.

## Acceso libre
Quedan disponibles sin credenciales:

1. Formularios.
2. Generar prompt.
3. Chat institucional.
4. Bibliografía.

Estos módulos pueden ser usados como apoyo operativo, generación de insumos y orientación metodológica sin mostrar información sensible.

## Acceso protegido visualmente
Requieren credenciales:

5. Dashboard.
6. Riesgo zonal.

La validación usa correo institucional + _ID F01 / contraseña. El usuario puede cambiar contraseña en modo demostrativo local.

## Regla aplicada
La pantalla de login ya no aparece al cargar la plataforma. Solo aparece cuando el usuario intenta ingresar a Dashboard o Riesgo Zonal sin sesión activa.

## Credenciales
La lógica considera que F01 contiene correo, _ID, nombre, organización, perfil, provincia, cantón y estado del usuario.

## Seguridad
Esta versión sigue siendo control visual en HTML/JavaScript. No protege datos sensibles en producción. Para seguridad real debe usarse Apps Script, Firebase, Supabase o backend institucional.

## Archivos modificados
- index.html
- data/usuarios_f01_acceso_v0.7.3.json
- docs/GUIA_ACCESO_MODULOS_v0.7.3.md

## Decisión técnica
Aprobada como maqueta funcional de flujo: plataforma abierta + módulos sensibles protegidos.
