# Especificación técnica API ENOS CZ5

## URL base

```text
https://script.google.com/macros/s/AKfycbw9pDFZv6HBseCNILV90w8XfZL043inXnG0kvXDdgXl35N2vdKYIrYGh5HgAsXjfRbxEA/exec
```

## Método

```text
GET
```

## Parámetros generales

```text
token=CLAVE_PRIVADA
vista=resumen | provincias | detalle | todo | riesgo_resumen | riesgo_provincias | riesgo_cantones | riesgo_detalle | riesgo_tema
```

## Módulo documental

```text
?token=CLAVE_PRIVADA&vista=resumen
?token=CLAVE_PRIVADA&vista=provincias
?token=CLAVE_PRIVADA&vista=detalle
?token=CLAVE_PRIVADA&vista=detalle&estado=DEVUELTO
?token=CLAVE_PRIVADA&vista=detalle&provincia=GUAYAS
```

## Módulo riesgo

```text
?token=CLAVE_PRIVADA&vista=riesgo_resumen
?token=CLAVE_PRIVADA&vista=riesgo_provincias
?token=CLAVE_PRIVADA&vista=riesgo_cantones
?token=CLAVE_PRIVADA&vista=riesgo_detalle&id_canton=GUAYAS_DAULE
?token=CLAVE_PRIVADA&vista=riesgo_tema&tema=BRECHAS
?token=CLAVE_PRIVADA&vista=riesgo_tema&tema=AMENAZAS
?token=CLAVE_PRIVADA&vista=riesgo_tema&tema=VULNERABILIDAD
?token=CLAVE_PRIVADA&vista=riesgo_tema&tema=CAPACIDAD
?token=CLAVE_PRIVADA&vista=riesgo_tema&tema=ELEMENTOS_EXPOSTOS
```

## Recomendación de producción

Para producción, el backend de la plataforma ENOS debería consultar esta API y entregar al frontend datos ya autorizados. No se recomienda exponer el token en frontend público.
