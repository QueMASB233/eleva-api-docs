# FAQs

Here you will find answers to commonly encountered questions.

> If you are having trouble and cannot find a suitable answer, please reach out to support.

### How do I listen to webhook events?

1. Register for an app.
2. Go to the app settings and set the webhook URL (where you want to receive events).
3. In settings, add the scope required for the webhook event in the scopes section.
4. Go to the app page and click **Add App** (or have your sub-account admin do so).
5. Select the sub-account; you will be redirected to the redirect URI with the authorization code.
6. Use the authorization code to get the access token via the OAuth 2.0 API.
7. You will then receive webhook events for that sub-account.