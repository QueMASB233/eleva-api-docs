---
stoplight-id: vyc3gbbez52ip
---

# Guía de autenticación de webhooks

## Cómo funciona

### 1. Recibir el webhook

Cuando tu endpoint recibe una petición de webhook, incluirá lo siguiente:

- **Cabeceras**:
  - `x-wh-signature`: La firma digital del payload.

- **Cuerpo**: El payload con el timestamp, el ID del webhook y los datos.

Ejemplo de payload:

    {
      "timestamp": "2025-01-28T14:35:00Z",
      "webhookId": "abc123xyz",
      ...<add_other_webhook_data>
    }

### 2. Verificar la firma

Para comprobar que el webhook es auténtico:

1. Obtén la cabecera `x-wh-signature` de la petición.
2. Usa la clave pública indicada más abajo para verificar la firma.
3. Calcula la firma en tu lado con el payload y la clave pública.
4. Compara la firma calculada con la cabecera `x-wh-signature`.

```
-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAokvo/r9tVgcfZ5DysOSC
Frm602qYV0MaAiNnX9O8KxMbiyRKWeL9JpCpVpt4XHIcBOK4u3cLSqJGOLaPuXw6
dO0t6Q/ZVdAV5Phz+ZtzPL16iCGeK9po6D6JHBpbi989mmzMryUnQJezlYJ3DVfB
csedpinheNnyYeFXolrJvcsjDtfAeRx5ByHQmTnSdFUzuAnC9/GepgLT9SM4nCpv
uxmZMxrJt5Rw+VUaQ9B8JSvbMPpez4peKaJPZHBbU3OdeCVx5klVXXZQGNHOs8gF
3kvoV5rTnXV0IknLBXlcKKAQLZcY/Q9rG6Ifi9c+5vqlvHPCUJFT5XUGG5RKgOKU
J062fRtN+rLYZUV+BjafxQauvC8wSWeYja63VSUruvmNj8xkx2zE/Juc+yjLjTXp
IocmaiFeAO6fUtNjDeFVkhf5LNb59vECyrHD2SQIrhgXpO4Q3dVNA5rw576PwTzN
h/AMfHKIjE4xQA1SZuYJmNnmVZLIZBlQAF9Ntd03rfadZ+yDiOXCCs9FkHibELhC
HULgCsnuDJHcrGNd5/Ddm5hxGQ0ASitgHeMZ0kcIOwKDOzOU53lDza6/Y09T7sYJ
PQe7z0cvj7aE4B+Ax1ZoZGPzpJlZtGXCsu9aTEGEnKzmsFqwcSsnw3JB31IGKAyk
T1hhTiaCeIY/OwwwNUY2yvcCAwEAAQ==
-----END PUBLIC KEY-----
```

Si coinciden, el payload es válido y proviene de una fuente de confianza.

### 3. Protección frente a ataques de replay

- Comprueba que el `timestamp` del payload esté dentro de una ventana aceptable (por ejemplo, 5 minutos).
- Rechaza peticiones con un `webhookId` duplicado.

### 4. Rotación de la clave pública

Consulta tu correo y [nuestros canales](https://elevabuilds.com/support) para avisos sobre la rotación de la clave pública. La clave pública de este documento es la que debes usar para validar el payload del webhook.

***

## Código de ejemplo

Ejemplo de verificación de la firma en Node.js:

    const crypto = require('crypto');

    const publicKey = `<use_the_above_key>`;

    function verifySignature(payload, signature) {
        const verifier = crypto.createVerify('SHA256');
        verifier.update(payload);
        verifier.end();

        return verifier.verify(publicKey, signature, 'base64');
    }

    // Example usage
    const payload = JSON.stringify({
      "timestamp": "2025-01-28T14:35:00Z",
      "webhookId": "abc123xyz",
      ...<add_other_webhook_data>
    });

    const signature = "<received-x-wh-signature>";
    const isValid = verifySignature(payload, signature);

    return isValid;

## Resumen

Estas mejoras aumentan la seguridad de las integraciones por webhook. Con timestamp, ID de webhook y payload firmado digitalmente, tus datos se mantienen seguros. Implementa estos cambios para que tus integraciones sigan siendo robustas.
