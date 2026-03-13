---
tags: [Webhook Events]
---

# Cambio de plan

Se dispara cuando el usuario cambia el plan de una app de pago.

#### Schema

```json json_schema
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "example": "PLAN_CHANGE"
    },
    "appId": {
      "type": "string",
      "example": "ve9EPM428h8vShlRW1KT"
    },
    "locationId": {
      "type": "string",
      "example": "otg8dTQqGLh3Q6iQI55w"
    },
    "companyId": {
      "type": "string",
      "example": "otg8dTQqGLh3Q6iQI55w"
    },
    "userId": {
      "type": "string",
      "example": "otg8dTQqGLh3Q6iQI55w"
    },
    "currentPlanId": {
      "type": "string",
      "example": "66a0419a0dffa47fb5f8b22f"
    },
    "newPlanId": {
      "type": "string",
      "example": "66a0419a0dffa47fb5f8b22f"
    }
  }
}
```

#### Ejemplo

```json
{
  "type": "PLAN_CHANGE",
  "appId": "ve9EPM428h8vShlRW1KT",
  "locationId": "otg8dTQqGLh3Q6iQI55w",
  "companyId": "otg8dTQqGLh3Q6iQI55w",
  "userId": "otg8dTQqGLh3Q6iQI55w",
  "currentPlanId": "66a0419a0dffa47fb5f8b22f",
  "newPlanId": "66a0419a0dffa47fb5f8b22f"
}
```
