---
tags: [Webhook Response]
---

# Asociación creada

## Resumen

Este webhook se dispara cuando se crea una nueva asociación entre objetos (por ejemplo, vincular contactos con objetos personalizados). Actualmente solo se admiten asociaciones contacto-contacto, contacto-objeto personalizado y objeto personalizado-objeto personalizado.

Ejemplo: en un sistema inmobiliario se pueden asociar compradores potenciales con propiedades. El **primer objeto** sería el comprador, el **segundo** la propiedad y la **etiqueta de asociación** podría ser "Comprador interesado".

## Schema

El payload del webhook sigue el siguiente esquema JSON:

```json json_schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "associationType": {
      "type": "string"
    },
    "firstObjectKey": {
      "type": "string"
    },
    "firstObjectLabel": {
      "type": "string"
    },
    "secondObjectKey": {
      "type": "string"
    },
    "secondObjectLabel": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    }
  }
}
```

## Field Descriptions

### `id`
- Type: `string`
- Unique identifier for the association.

### `associationType`
- Type: `string`
- Specifies the type of association (e.g., `USER_DEFINED` or `SYSTEM_DEFINED`).

### `firstObjectKey`
- Type: `string`
- Key representing the first object in the association.

### `firstObjectLabel`
- Type: `string`
- Readable label for the first object.

### `secondObjectKey`
- Type: `string`
- Key representing the second object in the association.

### `secondObjectLabel`
- Type: `string`
- Readable label for the second object.

### `key`
- Type: `string`
- Unique key assigned to the association.

### `locationId`
- Type: `string`
- Identifies the location associated with the created association.

## Example Response

```json
{
  "id": "67ade73d1119d2ac7ad0c475",
  "associationType": "USER_DEFINED",
  "firstObjectKey": "custom_objects.real_estate_buyer",
  "firstObjectLabel": "Interested Buyer",
  "secondObjectKey": "custom_objects.property",
  "secondObjectLabel": "Property",
  "key": "buyer_property_interest",
  "locationId": "eHy2cOSZxMQzQ6Yyvl8P"
}
```

## Additional Notes

- Ensure that your webhook listener is capable of processing `POST` requests.
- The `firstObjectKey` and `secondObjectKey` help define relationships between entities.
- The `traceId` is useful for debugging and logging purposes.
