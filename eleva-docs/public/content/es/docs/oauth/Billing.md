# Webhook de facturación

Este webhook es necesario para apps con facturación externa. Se utiliza para autorizar la instalación de la app tras procesar el pago.

Su objetivo es enviar y actualizar la información de pago de apps con modelo de negocio de pago que no usan la facturación interna de Eleva CRM.

## 1. Requisitos previos

Antes de usar este webhook, en el [Marketplace](https://app.elevabuilds.com) debes:

1. Tener una app con modelo de negocio marcado como de pago.
2. Tener activada la facturación externa para tu app.
3. Haber configurado la URL de facturación.

## 2. Parámetros en la URL de facturación

Cuando se instala tu app (por subcuenta o compañía), el usuario es redirigido a la URL de facturación configurada. En la URL recibirás estos parámetros:

| Parámetro   | Valores posibles     | Notas                                                                 |
| ----------- | -------------------- | --------------------------------------------------------------------- |
| clientId    | `<client_id>`        | Para validación.                                                      |
| installType | `location`, `agency` | Recibirás `agency,location` si aplican ambos.                         |
| locationId  | `<location_id>`      | Cuando installType es `location` o `agency,location`.                 |
| companyId   | `<agency_id>`        | Cuando installType es `agency` o `agency,location`.                  |

## 3. Uso del webhook

Después de procesar el pago correctamente, debes llamar al endpoint del webhook de facturación:

```
https://services.leadconnectorhq.com/oauth/billing/webhook
```

**Método:** POST

**Cabeceras:**

| Nombre                | Valor              | Notas                                                                 |
| --------------------- | ------------------ | --------------------------------------------------------------------- |
| x-ghl-client-key      | Tu client key      | Debe ser del mismo client para el que autorizas el pago.              |
| x-ghl-client-secret   | Tu Client Secret   | El secret correspondiente al client key usado.                        |
| Content-Type          | application/json   |                                                                       |

**Cuerpo de la petición:**

| Nombre           | Valor                | Notas                                                                 |
| ---------------- | -------------------- | --------------------------------------------------------------------- |
| clientId         | Tu client ID         |                                                                       |
| authType         | Enum                 | Valores: `company` y `location`.                                     |
| locationId       | `<location_id>`      | Obligatorio si authType es `location`.                                |
| companyId        | `<company_id>`       | Obligatorio si authType es `company`.                                 |
| subscriptionId   | Tu subscription ID   | Opcional si usas modelo por suscripción.                              |
| paymentId        | Tu Payment ID        | Opcional para pagos únicos.                                           |
| amount           | Importe facturado    | Obligatorio.                                                          |
| status           | Enum                 | Valores: `COMPLETED` y `FAILED`.                                      |
| paymentType      | Enum                 | Valores: `one_time` y `recurring`.                                    |

### Ejemplo

Ejemplo de cURL para el webhook:

```shell
curl --location 'https://services.leadconnectorhq.com/oauth/billing/webhook' \
--header 'x-ghl-client-key: <client_key>' \
--header 'x-ghl-client-secret: <client_secret>' \
--header 'Content-Type: application/json' \
--data '{
    "clientId": "<client_id>",
    "authType": "location",
    "locationId": "<location_id>",
    "subscriptionId": "<subscription_id>",
    "paymentId": "<payment_id>",
    "amount": 12,
    "status": "COMPLETED",
    "paymentType": "recurring"
}'
```

## Preguntas frecuentes

### ¿Puedo recibir varios locationId en la URL de facturación?

Sí. En instalaciones múltiples recibirás una lista de locationIds separados por comas en la URL.

### ¿Puedo actualizar varias subcuentas en una sola llamada?

No. Debes disparar el webhook por separado para cada subcuenta y cada compañía.
