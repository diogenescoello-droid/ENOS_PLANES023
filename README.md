# ENOS_PLANES023 · Ecosistema Digital CZ5 ENOS Guayas

Repositorio operativo ENOS_PLANES023 para el ecosistema digital de levantamiento, consolidación, análisis y seguimiento de información territorial ENOS Guayas desde la Coordinación Zonal 5.

## Flujo operativo

1. Levantamiento de información en KoboToolbox mediante formularios F01 a F07.
2. Sincronización de datos hacia Google Sheets mediante Apps Script.
3. Consolidación en bases temáticas por código de caso.
4. Generación de paquete técnico para GPT.
5. Elaboración de plan de acción institucional.
6. Firma, respaldo y cierre de ciclo.
7. Seguimiento mediante dashboard.

## Formularios

- F01: Punto crítico territorial.
- F02: Infraestructura esencial expuesta.
- F03: Aporte cartográfico institucional.
- F04: Acciones preventivas y mitigación.
- F05: Alojamientos, rutas y puntos seguros.
- F06: Capacidades y recursos.
- F07: Seguimiento mensual del plan de acción.

## Archivos principales

- `index.html`: página base del ecosistema F01-F07.
- `apps-script/AppsScript_CZ5_ENOS_F01_F07_COMPLETO.gs`: código Apps Script para sincronización, consolidación y Web App.
- `docs/CONFIGURACION_COMPLETA_F01_F07_APPS_SCRIPT.txt`: propiedades y enlaces requeridos.
- `formularios/`: XLSForms ajustados con rigor F01.

## Seguridad

Este repositorio debe mantenerse preferentemente **privado**, porque contiene estructura operativa institucional, enlaces a formularios y URL de Web App. No incluya tokens, claves API, contraseñas, cédulas, datos personales sensibles ni información reservada.

El `KOBO_TOKEN` no debe cargarse al repositorio. Debe mantenerse únicamente en las Propiedades del script de Apps Script.

## Configuración Apps Script

En Apps Script se requieren las siguientes propiedades:

```text
KOBO_BASE_URL = https://kf.kobotoolbox.org
KOBO_TOKEN = [NO SUBIR A GITHUB]
WEBAPP_KEY = CZ5_ENOS_2026
F01_ASSET_UID = aDp2JK7VCK26q2QAKiVChQ
F02_ASSET_UID = abcnTWDp9vCeQCeCjnubAe
F03_ASSET_UID = a86WYnMJZA3XCNJ8tcjQb2
F04_ASSET_UID = aZcJKkSCYBciexEAZP2PfA
F05_ASSET_UID = am4xGEpRP85bXDuEbucPod
F06_ASSET_UID = aJoE9gh8JgNAfY9froZ4gQ
F07_ASSET_UID = aGBMqM63bGK9fLADxYfe4w
```

## Prueba rápida

Después de implementar nueva versión del Web App, verificar:

```text
?action=ping&webapp_key=CZ5_ENOS_2026
?action=syncAll&webapp_key=CZ5_ENOS_2026
?action=listCases&webapp_key=CZ5_ENOS_2026
```

## Estado

Base 01 aprobada como primer borrador operativo.


## Publicación

Este paquete está preparado para actualizar el repositorio existente `ENOS_PLANES023` sin cambiar el enlace de GitHub Pages.

Para conservar el mismo enlace:
- No crear repositorio nuevo.
- No cambiar el nombre del repositorio.
- No cambiar la rama publicada.
- Reemplazar/actualizar `index.html` en la raíz del repositorio.
