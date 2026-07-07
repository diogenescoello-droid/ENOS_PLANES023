# REPORTE DE AVANCE · v0.8.0

## Hito

Se consolida la primera versión de fase institucional de la plataforma ENOS CZ5: acceso público inicial, protección de Dashboard/Riesgo Zonal, credenciales F01 y flujo de creación de usuarios con validación manual.

## Cambios principales

1. La plataforma abre primero en modo público.
2. Se mantienen libres: Formularios, Generar prompt, Chat institucional y Bibliografía.
3. Se mantienen protegidos: Dashboard y Riesgo Zonal.
4. El login acepta correo institucional + _ID F01, contraseña cambiada o código institucional aprobado manualmente.
5. La solicitud de usuario ahora no solo genera código de solicitud: si se aprueba desde la bandeja local, el código institucional queda habilitado para ingreso local de prueba.
6. Se incorporó banner de gobernanza v0.8.0 en la interfaz inicial.
7. Se agregó configuración de backend preparada para Apps Script / Firebase / Supabase.
8. Se agregó script base de Apps Script para migrar validación, solicitudes, aprobaciones, cambio de contraseña, correo y auditoría.

## Control territorial

Los usuarios GAD cantonal mantienen vista restringida a su cantón autorizado. Los perfiles provinciales mantienen vista restringida a provincia. Coordinación Zonal, Dirección y perfiles CZ5 mantienen vista zonal según rol.

## Estado técnico

- Control local funcional para prueba interna.
- Base F01 incorporada con hashes, sin correos ni _ID en texto plano dentro del paquete web.
- Solicitudes aprobadas localmente pueden iniciar sesión con código institucional.
- Backend real pendiente de despliegue.

## Limitación crítica

GitHub Pages no debe operar como repositorio de credenciales reales ni como capa de seguridad. Para producción, el navegador debe enviar correo + credencial a un backend y recibir solo la sesión autorizada.

## Próximo paso recomendado

Desplegar Apps Script con hojas: USUARIOS, SOLICITUDES, APROBACIONES y AUDITORIA. Luego colocar la URL del Web App en `ENOS_CZ5_BACKEND_CONFIG.apps_script_url` dentro del index.
