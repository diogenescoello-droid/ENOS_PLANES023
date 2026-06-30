# Mapeo de campos · Matriz de seguimiento CZ5

| Campo original en Excel | Campo normalizado JSON | Uso en plataforma |
|---|---|---|
| COORDINACIÓN ZONAL | coordinacion_zonal | Filtro institucional |
| BAJO ALERTA AMARILLA | bajo_alerta_amarilla | Condición de exposición/alerta |
| PROVINCIA | provincia | Filtro territorial principal |
| CANTÓN | canton | Entidad territorial |
| TIPO DE GAD | tipo_gad | CANTONAL / PROVINCIAL |
| REMITIDO POR OFICIO NRO. | remitido_por_oficio_nro | Trazabilidad documental |
| SOCIALIZACIÓN PERSONALIZADA | socializacion_personalizada / socializacion | KPI de socialización |
| VALOR CUMPLIMIENTO | valor_cumplimiento | Apoyo para cálculo de cumplimiento |
| FECHA | fecha | Fecha de socialización |
| MODALIDAD | modalidad | Presencial / virtual |
| OBSERVACIÓN DE LA SOCIALIZACIÓN | observacion_socializacion | Participó / no participó |
| ENTREGA DEL PLAN DE ACCION | entrega_plan | KPI de entrega |
| VALORACIÓN DEL PLAN | valoracion_plan_num | Valoración técnica |
| FECHA DE ENTREGA DEL PLAN | fecha_de_entrega_del_plan | Control de tiempos |
| ESTADO DE LA REVISIÓN DEL PLAN (CZ SNGR) | estado_revision | Validado / devuelto / en revisión / falta |
| ENLACE PLAN_FINAL | enlace_plan_final | Acceso a documento final |
| PARTICULARIDADES | particularidades | Observaciones del caso |
| PF QUE REPORTA LA INFORMACIÓN | pf_que_reporta_la_informacion | Responsable del reporte |
| ENLACE PLAN_BORRADOR | enlace_plan_borrador | Acceso a borrador |

## Reglas aplicadas

- Las fechas seriales de Excel se convirtieron a formato ISO `YYYY-MM-DD`.
- Los registros provinciales sin cantón se muestran con la provincia como entidad operativa.
- Los estados se estandarizan en mayúsculas.
- Los enlaces se conservan como URL original de la matriz.
