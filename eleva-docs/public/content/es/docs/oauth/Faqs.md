# Preguntas frecuentes

Aquí encontrarás respuestas a las preguntas más habituales.

> Si tienes problemas y no encuentras una respuesta adecuada, contacta con soporte.

### ¿Cómo escuchar eventos de webhook?

Para escuchar eventos de webhook:

1. Regístrate en una app.
2. Ve a la configuración de la app y actualiza la URL del webhook (donde quieres recibir los eventos).
3. En la configuración, añade también el alcance (scope) necesario para el evento bajo la sección de scopes.
4. Ve a la página de la app y haz clic en "Añadir app" (o que el administrador de la subcuenta lo haga).
5. Selecciona la subcuenta; serás redirigido a la URI de redirección con el código de autorización.
6. Usa el código de autorización para obtener el token de acceso mediante la API Get Access Token en OAuth 2.0.
7. Recibirás los eventos de webhook para esa subcuenta.
