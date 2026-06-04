PARCHE DE CONFIGURACIÓN GPT ENOS GUAYAS 2.1

Objetivo:
Actualizar el GPT Técnico ENOS para que, al iniciar una solicitud de plan, aporte, informe o matriz basada en respuestas de Kobo/Excel/CSV, solicite activamente los datos mínimos de control antes de elaborar el producto.

Archivos incluidos:
1. gpt.html
   - Página actualizada para la plataforma.
   - Incluye advertencia de filtrado obligatorio.
   - Incluye botones de descarga para la configuración del GPT y prompt inicial obligatorio.

2. docs/configuracion/INSTRUCCIONES_GPT_ENOS_2_1_ACTUALIZADAS.txt
   - Copiar en el campo Instructions del editor del GPT.

3. docs/configuracion/PROMPT_INICIAL_OBLIGATORIO_ENOS_2_1.txt
   - Prompt de uso operativo para técnicos y GAD.

4. docs/configuracion/CONVERSATION_STARTERS_GPT_ENOS_2_1.txt
   - Frases sugeridas para colocar como Conversation starters.

Cómo subir a GitHub:
1. Subir gpt.html a la raíz del repositorio, reemplazando el actual.
2. Crear o subir la carpeta docs/configuracion/ completa.
3. Confirmar commit.
4. Probar en la plataforma el botón GPT y los botones de descarga.

Cómo actualizar el GPT:
1. Abrir el GPT Técnico ENOS desde ChatGPT web.
2. Ingresar a Editar GPT.
3. Ir a Configure.
4. Reemplazar o complementar Instructions con el contenido de INSTRUCCIONES_GPT_ENOS_2_1_ACTUALIZADAS.txt.
5. Actualizar Conversation starters usando el archivo correspondiente.
6. Guardar cambios.
7. Probar con una frase incompleta como: "Hazme el plan con esta matriz". El GPT debe responder pidiendo solicitante, territorio, producto, archivo y filtros antes de generar el plan.

Nota técnica:
No se recomienda cargar la base madre completa de respuestas Kobo como Knowledge permanente del GPT si contiene datos sensibles o registros dinámicos. Para análisis por caso, el usuario debe cargar el Excel/CSV filtrado o indicar claramente qué registros usar.
