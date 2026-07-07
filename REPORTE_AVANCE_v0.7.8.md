# REPORTE DE AVANCE v0.7.8

## Cambio principal
Se incorporó la opción pública **Crear solicitud de usuario institucional** sin bloquear la entrada general a la plataforma.

## Flujo implementado
1. La plataforma sigue abierta para Formularios, Generar prompt, Chat institucional y Bibliografía.
2. Dashboard y Riesgo Zonal siguen protegidos con correo + _ID/credencial F01.
3. Si un actor no tiene usuario, puede registrar una solicitud con datos personales, institución, cargo, territorio, módulo solicitado y justificación.
4. El sistema genera un **código de solicitud** tipo `CZ5-SOL-AAAAMMDD-XXXXXX`.
5. La solicitud queda con estado **pendiente de validación manual**.
6. En bandeja local se puede revisar, aprobar/rechazar y generar plantilla de correo de confirmación.
7. El código institucional de acceso se asigna manualmente por instrucción/validación institucional.

## Limitación crítica
En GitHub Pages no existe envío automático de correo ni validación segura de usuarios. La versión genera plantillas `mailto` y guarda solicitudes en `localStorage` del navegador. Para producción se debe conectar este flujo con Apps Script, Firebase, Supabase o backend institucional.

## Archivos modificados
- `index.html`
- `docs/GUIA_SOLICITUD_USUARIO_v0.7.8.md`
- `data/esquema_solicitudes_usuario_v0.7.8.json`

## Estado
Funcional como maqueta operativa interna y flujo de validación manual.
