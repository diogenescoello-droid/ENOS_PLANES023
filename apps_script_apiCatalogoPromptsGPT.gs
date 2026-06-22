/**
 * Apps Script complementario para publicar CATALOGO_PROMPTS_GPT como JSONP.
 * Pegar en el proyecto Apps Script de la base y desplegar como Web App.
 * Deploy: Ejecutar como usuario propietario; acceso: cualquier usuario con el enlace.
 */
const SHEET_CATALOGO_PROMPTS_GPT = 'CATALOGO_PROMPTS_GPT';

function apiCatalogoPromptsGPT() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName(SHEET_CATALOGO_PROMPTS_GPT);
  if (!sh) return [];
  const values = sh.getDataRange().getDisplayValues();
  if (values.length < 2) return [];
  const headers = values[0].map(h => String(h).trim());
  return values.slice(1).filter(r => r.some(c => String(c).trim() !== '')).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i] || '');
    return obj;
  });
}

function doGet(e) {
  const callback = e && e.parameter && e.parameter.callback;
  const payload = {
    ok: true,
    generated_at: new Date().toISOString(),
    data: apiCatalogoPromptsGPT()
  };
  const body = callback
    ? `${callback}(${JSON.stringify(payload)});`
    : JSON.stringify(payload);
  return ContentService
    .createTextOutput(body)
    .setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
}
