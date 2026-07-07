# Reporte de avance — v0.7.0

**Proyecto:** Plataforma ENOS CZ5

**Hito:** Inicio de Fase 2 — gestión de información, acceso por jerarquía y asesoría técnica territorial.

## Cambios realizados

- Se incorporó una pantalla de acceso institucional en modo demostrativo.
- Se definieron perfiles por jerarquía: Administrador CZ5, Dirección, Análisis, Respuesta, Fortalecimiento, Monitoreo, AME provincial, GAD cantonal y Consulta restringida.
- Se agregó una barra de sesión que muestra perfil, nivel, alcance territorial y finalidad de uso.
- Se aplicó control visual de componentes visibles dentro del módulo Riesgo Zonal según el perfil seleccionado.
- Se incorporó una matriz de roles y permisos como documento de trazabilidad.
- Se mantuvo la cartografía F03, KPI por enfoque y trazabilidad documental de v0.6.12.

## Límite técnico

Esta versión no implementa seguridad real. El control de acceso es visual y sirve para validar el flujo institucional. Para producción, los datos sensibles deben estar en un backend con autenticación y autorización real.

## Próximo paso recomendado

**v0.7.1:** optimización UX del módulo Riesgo Zonal, reduciendo botones visibles y activando flujo guiado por perfil → territorio → evidencia.

**v0.8.0:** autenticación real con Apps Script, Firebase, Supabase o backend institucional.
