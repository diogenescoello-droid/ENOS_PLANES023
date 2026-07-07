# Reporte de avance — v0.7.1

Proyecto: Plataforma ENOS CZ5
Versión: v0.7.1
Estado: ajuste funcional de acceso F01

## Cambios aplicados

- Se simplificó la pantalla de acceso institucional.
- Se eliminaron los selectores visibles de organización, perfil, provincia y cantón.
- El acceso ahora solicita únicamente correo institucional y cédula/clave F01.
- El perfil, organización y alcance territorial se asignan automáticamente desde la estructura F01.
- Se mantiene modo demo para pruebas de Admin, Análisis, Respuesta y Fortalecimiento.
- Se agregó base de usuarios F01 de demostración sin cédulas reales.

## Límite importante

Esta versión no implementa seguridad real. GitHub Pages es estático y no debe contener cédulas reales ni datos sensibles. La producción debe validar credenciales en backend.

## Próximo paso

Conectar F01 real mediante Apps Script/Firebase/Supabase y devolver al navegador únicamente la sesión autorizada.
