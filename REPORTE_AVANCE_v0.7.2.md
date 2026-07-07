# Reporte de avance — v0.7.2

**Proyecto:** Plataforma ENOS CZ5 2026–2027  
**Versión:** v0.7.2  
**Cambio:** Control de acceso simplificado para área de Análisis de Riesgos.

## Cambios realizados

1. Se reemplazó la lógica visible de usuario/clave por **correo institucional + _ID F01**.
2. Se agregó una opción de **cambio de contraseña** para validar el flujo institucional.
3. Se ajustó el texto de acceso para indicar que el control se aplica al **área de Análisis de Riesgos / Riesgo Zonal**.
4. Se mantiene la asignación automática de perfil, organización, provincia y cantón desde F01.
5. Se actualizó la base demo a `usuarios_f01_acceso_v0.7.2.json`.

## Alcance

Esta versión valida flujo de acceso y permisos de visualización. No constituye seguridad real porque GitHub Pages es un entorno estático.

## Recomendación

La v0.8.0 debe conectar autenticación real con Apps Script, Firebase, Supabase o backend institucional, usando el _ID únicamente como identificador inicial y contraseña cifrada/gestionada fuera del HTML.
