# Autorización

Eleva CRM utiliza el flujo Authorization Code Grant con las APIs v2. Sigue estos pasos para usar OAuth 2.0.

Puedes ver este [vídeo en Loom](https://www.loom.com/share/f32384758de74a4dbb647e0b7962c4ea?sid=0907a66d-a160-4b51-bcd4-c47ebae37fca) para el proceso completo.

### 1. Registrar una app OAuth

1. Ve al [Marketplace](https://app.elevabuilds.com).
2. Regístrate como desarrollador.
3. Entra en "Mis apps" y haz clic en "Crear app".
4. Completa los datos requeridos; se creará tu app.
5. Entra en la app y configura scopes, genera claves, etc.

### 2. Añadir la app a tu subcuenta

1. Abre la URL de autorización de la app (como administrador de la subcuenta o usuario con permiso para instalar).
2. Selecciona la subcuenta que quieres conectar.
3. Serás redirigido a la URL de redirección con el código de autorización.
4. Usa el código para obtener el access token con la API Get Access Token (OAuth 2.0).
5. Usa el access token para llamar a las APIs.

### 3. Obtener la URL de autorización de la app

Sustituye `client_id`, `redirect_uri` y `scope` en la plantilla y abre esa URL para autorizar la app en tu subcuenta.

**Flujo estándar:**

```
https://app.elevabuilds.com/oauth/chooselocation?
response_type=code&
redirect_uri=https://myapp.com/oauth/callback&
client_id=CLIENT_ID&
scope=conversations/message.readonly conversations/message.write
```

**Nota:** Si el usuario no ha iniciado sesión al dar consentimiento, puedes añadir `&loginWindowOpenMode=self` a la URL para abrir el login en la misma pestaña. Por defecto se abre en una pestaña nueva.

Tras autorizar, el navegador redirige a tu `redirect_uri` con el código en el parámetro `code`:

```
https://myapp.com/oauth/callback?code=7676cjcbdc6t76cdcbkjcd09821jknnkj
```

## Preguntas frecuentes OAuth

### ¿Cuánto tiempo son válidos los access tokens?

Un día. Después puedes usar el refresh token para obtener uno nuevo.

### ¿Cuánto tiempo son válidos los refresh tokens?

Un año. Si los usas, el nuevo refresh token también es válido un año.

### ¿Cómo manejar la caducidad del token?

1. Haz la petición con el accessToken.
2. Si la respuesta indica que el token ha caducado, usa la API de refresh, guarda el nuevo access token y refresh token y vuelve a intentar la petición.

### Límites de tasa (API 2.0)

- **Ráfaga:** 100 peticiones por 10 segundos por app por subcuenta o compañía.
- **Diario:** 200.000 peticiones por día por app por subcuenta o compañía.

Puedes revisar el uso en las cabeceras de respuesta: `X-RateLimit-Limit-Daily`, `X-RateLimit-Daily-Remaining`, `X-RateLimit-Remaining`, etc.
