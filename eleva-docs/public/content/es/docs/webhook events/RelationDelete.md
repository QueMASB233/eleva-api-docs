---
tags: [Webhook Response]
---

# Eliminar relación

## Resumen

Este webhook se dispara cuando se elimina una relación entre objetos.

## Schema

El payload del webhook sigue el siguiente esquema JSON:

```json json_schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstObjectKey": {
      "type": "string"
    },
    "firstRecordId": {
      "type": "string"
    },
    "secondObjectKey": {
      "type": "string"
    },
    "secondRecordId": {
      "type": "string"
    },
    "associationId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },

  }
}
```

## Field Descriptions

### `id`
- Type: `string`
- Unique identifier for the deleted association.

### `firstObjectKey`
- Type: `string`
- Key representing the first object in the association.

### `firstRecordId`
- Type: `string`
- Identifier of the first object’s specific record.

### `secondObjectKey`
- Type: `string`
- Key representing the second object in the association.

### `secondRecordId`
- Type: `string`
- Identifier of the second object’s specific record.

### `associationId`
- Type: `string`
- Unique identifier for the association that was deleted.

### `locationId`
- Type: `string`
- Identifies the location associated with the deleted association.


## Example Response

```json
{
  "id": "67ae0d741119d218c9d0c477",
  "firstObjectKey": "custom_objects.mad",
  "firstRecordId": "67a349a79b28947ec1f65bb5",
  "secondObjectKey": "contact",
  "secondRecordId": "emqfhnG3g9D9chy9inTz",
  "associationId": "669e5795add2094075906c65",
  "locationId": "eHy2cOSZxMQzQ6Yyvl8P"
}
```

## Additional Notes

- The `firstObjectKey` and `secondObjectKey` define the relationship between the deleted entities.

