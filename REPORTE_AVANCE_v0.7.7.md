# REPORTE DE AVANCE · v0.7.7

Proyecto: Plataforma ENOS CZ5 · Gestión de información para análisis de riesgo zonal
Versión: v0.7.7
Tipo de cambio: Acceso interno con credenciales reales F01 en hash
Estado: listo para prueba interna controlada

## Cambios realizados

1. Se integró la base F01 interna como mecanismo de validación para Dashboard y Riesgo Zonal.
2. El acceso protegido se realiza con:
   - Usuario: correo registrado en F01.
   - Clave inicial: `_ID` del registro F01.
3. Se mantiene acceso libre a:
   - Formularios.
   - Generar prompt.
   - Chat institucional.
   - Bibliografía.
4. Se restringe el acceso a:
   - Dashboard.
   - Riesgo Zonal.
5. Se conserva la restricción territorial por perfil:
   - GAD cantonal: solo su cantón.
   - AME/provincial: solo su provincia.
   - CZ5/administrador/análisis institucional: alcance zonal según rol.
6. Se retiraron los botones de credenciales demo visibles de la pantalla de acceso.

## Base incorporada

- Usuarios F01 únicos: 51.
- Correos y `_ID` no están publicados en texto plano.
- La validación local usa SHA-256 para prueba interna.
- El Excel de credenciales queda fuera del paquete web y debe mantenerse solo para uso interno.

## Advertencia técnica

Esta versión mejora la gobernanza de acceso en modo estático, pero GitHub Pages no es una capa de seguridad real. Para producción, el correo y `_ID` deben validarse en Apps Script, Firebase, Supabase o backend institucional.

## Archivos modificados

- `index.html`
- `data/usuarios_f01_acceso_v0.7.7.json`
- `docs/GUIA_ACCESO_F01_INTERNO_v0.7.7.md`

## Prueba esperada

1. Abrir la plataforma.
2. Entrar libremente a Formularios, Generar prompt, Chat institucional o Bibliografía.
3. Intentar abrir Dashboard o Riesgo Zonal.
4. Ingresar correo + `_ID` del Excel interno.
5. Verificar que el alcance territorial cambie según el perfil F01.
