# Reporte de avance · v0.8.2

## Versión
SNGR-CZ5-ENOS v0.8.2

## Enfoque del ajuste
Simplificación de interfaz del módulo Riesgo Zonal para bajar densidad textual y mejorar interpretación intuitiva por perfiles institucionales, especialmente usuarios GAD.

## Cambios realizados

- Se reemplazó la introducción extensa de Riesgo Zonal por una tarjeta compacta.
- Se incorporó navegación guiada por preguntas:
  - ¿Qué acceso tengo?
  - ¿Qué quieres hacer ahora?
  - ¿De dónde salen los datos?
  - ¿Cómo usar esta vista?
- Se agregaron tarjetas de ayuda breve para los botones: Mi cantón, Brechas, Qué debo hacer, Formularios y Generar prompt.
- Se colapsó la trazabilidad técnica en un detalle desplegable para no sobrecargar la vista inicial.
- En vista GAD se redujo ruido visual ocultando descripciones secundarias y barra temática no esencial.
- Se mantuvo intacta la lógica de acceso F01, usuarios aprobados, Dashboard/Riesgo Zonal protegidos, cartografía F03 y generación de prompt desde ficha.

## Resultado esperado
La vista inicial de Riesgo Zonal debe ser más clara para actores municipales y provinciales. El usuario puede identificar rápido su alcance, escoger una acción y comprender la fuente del dato sin leer bloques largos.

## Validación técnica
Se validó sintaxis JavaScript con extracción de scripts del HTML. No se detectaron errores de sintaxis.

## Limitación vigente
El control de acceso sigue siendo funcional para piloto en entorno estático. La protección robusta de datos debe implementarse con Apps Script, Firebase, Supabase o backend institucional.
