---
tags: [OAuth 2.0]
stoplight-id: vcctp9t1w8hja
---

# Alcances (Scopes)

Lista de alcances necesarios para acceder a los endpoints de la API y a los eventos webhook.

| Scope                           | API Endpoints                                                                      | Webhook Events                      | Tipo de acceso      |
| ------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------- | ------------------- |
| businesses.readonly             | GET /businesses                                                                    |                                     | Subcuenta           |
| &nbsp;                          | GET /businesses/:businessId                                                        |                                     | Subcuenta           |
| businesses.write                | POST /businesses                                                                   |                                     | Subcuenta           |
| &nbsp;                          | PUT /businesses/:businessId                                                        |                                     | Subcuenta           |
| &nbsp;                          | DELETE /businesses/:businessId                                                     |                                     | Subcuenta           |
| calendars.write                 | POST /calendars/                                                                   |                                     | Subcuenta           |
| &nbsp;                          | PUT /calendars/:calendarId                                                         |                                     | Subcuenta           |
| &nbsp;                          | DELETE /calendars/:calendarId                                                      |                                     | Subcuenta           |
| calendars.readonly              | GET /calendars/                                                                    |                                     | Subcuenta           |
| &nbsp;                          | GET /calendars/:calendarId                                                         |                                     | Subcuenta           |
| &nbsp;                          | GET /calendars/:calendarId/free-slots                                              |                                     | Subcuenta           |
| calendars/groups.readonly       | GET /calendars/groups                                                              |                                     | Subcuenta           |
| calendars/groups.write          | POST /calendars/groups                                                             |                                     | Subcuenta           |
| &nbsp;                          | POST /calendars/groups/validate-slug                                               |                                     | Subcuenta           |
| &nbsp;                          | DELETE /calendars/groups/:groupId                                                  |                                     | Subcuenta           |
| &nbsp;                          | PUT /calendars/groups/:groupId                                                     |                                     | Subcuenta           |
| &nbsp;                          | PUT /calendars/groups/:groupId/status                                              |                                     | Subcuenta           |
| calendars/resources.readonly    | GET /calendars/resources/:resourceType                                             |                                     | Subcuenta           |
| &nbsp;                          | GET /calendars/resources/:resourceType/:id                                         |                                     | Subcuenta           |
| calendars/resources.write       | POST /calendars/resources                                                          |                                     | Subcuenta           |
| &nbsp;                          | PUT /calendars/resources/:resourceType/:id                                         |                                     | Subcuenta           |
| &nbsp;                          | DELETE /calendars/resources/:resourceType/:id                                      |                                     | Subcuenta           |
| calendars/events.readonly       | GET /calendars/events/appointments/:eventId                                        |                                     | Subcuenta           |
| &nbsp;                          | GET /calendars/events                                                              |                                     | Subcuenta           |
| &nbsp;                          | GET /calendars/blocked-slots                                                       |                                     | Subcuenta           |
| &nbsp;                          | GET /calendars/appointments/:appointmentId/notes                                   |                                     | Subcuenta           |
| &nbsp;                          | GET /calendars/:calendarId/notifications/:notificationId                           |                                     | Subcuenta           |
| &nbsp;                          | GET /calendars/:calendarId/notifications                                           |                                     | Subcuenta           |
| calendars/events.write          | DELETE /calendars/events/:eventId                                                  |                                     | Subcuenta           |
| &nbsp;                          | POST /calendars/events/block-slots                                                 |                                     | Subcuenta           |
| &nbsp;                          | PUT /calendars/events/block-slots/:eventId                                         |                                     | Subcuenta           |
| &nbsp;                          | POST /calendars/events/appointments                                                |                                     | Subcuenta           |
| &nbsp;                          | PUT /calendars/events/appointments/:eventId                                        |                                     | Subcuenta           |
| &nbsp;                          | POST /calendars/appointments/:appointmentId/notes                                  |                                     | Subcuenta           |
| &nbsp;                          | PUT /calendars/appointments/:appointmentId/notes/:noteId                           |                                     | Subcuenta           |
| &nbsp;                          | DELETE /calendars/appointments/:appointmentId/notes/:noteId                        |                                     | Subcuenta           |
| &nbsp;                          | POST /calendars/:calendarId/notifications                                          |                                     | Subcuenta           |
| &nbsp;                          | PUT /calendars/:calendarId/notifications/:notificationId                           |                                     | Subcuenta           |
| &nbsp;                          | DELETE /calendars/:calendarId/notifications/:notificationId                        |                                     | Subcuenta           |
| campaigns.readonly              | GET /campaigns/                                                                    | CampaignStatusUpdate                | Subcuenta           |
| contacts.readonly               | GET /contacts/:contactId                                                           | ContactCreate                       | Subcuenta           |
| &nbsp;                          | GET /contacts/:contactId/tasks                                                     | ContactDelete                       | Subcuenta           |
| &nbsp;                          | GET /contacts/:contactId/tasks/:taskId                                             | ContactDndUpdate                    | Subcuenta           |
| &nbsp;                          | GET /contacts/:contactId/notes                                                     | ContactTagUpdate                    | Subcuenta           |
| &nbsp;                          | GET /contacts/:contactId/notes/:id                                                 | NoteCreate                          | Subcuenta           |
| &nbsp;                          | GET /contacts/:contactId/appointments                                              | NoteDelete                          | Subcuenta           |
| &nbsp;                          | GET /contacts/                                                                     | TaskCreate                          | Subcuenta           |
| &nbsp;                          | GET /contacts/business/:businessId                                                 | TaskDelete                          | Subcuenta           |
| contacts.write                  | POST /contacts/                                                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /contacts/:contactId                                                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /contacts/:contactId                                                        | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /contacts/:contactId/tasks                                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /contacts/:contactId/tasks/:taskId                                             | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /contacts/:contactId/tasks/:taskId/completed                                   | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /contacts/:contactId/tasks/:taskId                                          | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /contacts/:contactId/tags                                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /contacts/:contactId/tags                                                   | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /contacts/:contactId/notes                                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /contacts/:contactId/notes/:id                                                 | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /contacts/:contactId/notes/:id                                              | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /contacts/:contactId/campaigns/:campaignId                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /contacts/:contactId/campaigns/removeAll                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /contacts/:contactId/campaigns/:campaignId                                  | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /contacts/:contactId/workflow/:workflowId                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /contacts/:contactId/workflow/:workflowId                                   | &nbsp;                              | Subcuenta           |
| objects/schema.readonly         | GET /objects/:key                                                                  | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /objects                                                                       | &nbsp;                              | Subcuenta           |
| objects/schema.write            |                                                                                    | &nbsp;                              | Subcuenta           |
| objects/record.readonly         | GET /objects/:schemaKey/records/:id                                                | &nbsp;                              | Subcuenta           |
| objects/record.write            | POST /objects/:schemaKey/records                                                   | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /objects/:schemaKey/records/:id                                                | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /objects/:schemaKey/records/:id                                             | &nbsp;                              | Subcuenta           |
| conversations.readonly          | GET /conversations/:conversationsId                                                | ConversationUnreadWebhook           | Subcuenta           |
| &nbsp;                          | GET /conversations/search                                                          | &nbsp;                              | Subcuenta           |
| conversations.write             | POST /conversations/                                                               | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /conversations/:conversationsId                                                | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /conversations/:conversationsId                                             | &nbsp;                              | Subcuenta           |
| conversations/message.readonly  | GET conversations/messages/:messageId/locations/:locationId/recording              | InboundMessage                      | Subcuenta           |
| &nbsp;                          |                                                                                    | OutboundMessage                     | Subcuenta           |
| &nbsp;                          | GET conversations/locations/:locationId/messages/:messageId/transcription          | InboundMessage                      | Subcuenta           |
| &nbsp;                          |                                                                                    | OutboundMessage                     | Subcuenta           |
| &nbsp;                          | GET conversations/locations/:locationId/messages/:messageId/transcription/download | InboundMessage                      | Subcuenta           |
| &nbsp;                          |                                                                                    | OutboundMessage                     |
| conversations/message.write     | POST /conversations/messages                                                       | ConversationProviderOutboundMessage | Subcuenta           |
| &nbsp;                          | POST /conversations/messages/inbound                                               | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /conversations/messages/upload                                                | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /conversations/messages/:messageId/status                                      | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /conversations/messages/:messageId/schedule                                 | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /conversations/messages/email/:emailMessageId/schedule                      | &nbsp;                              | Subcuenta           |
| conversations/livechat.write    | POST /conversations/providers/live-chat/typing                                     | &nbsp;                              | Subcuenta           |
| forms.readonly                  | GET /forms/                                                                        | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /forms/submissions                                                             | &nbsp;                              | Subcuenta           |
| invoices.readonly               | GET /invoices/                                                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /invoices/:invoiceId                                                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /invoices/generate-invoice-number                                              | &nbsp;                              | Subcuenta           |
| invoices.write                  | POST /invoices                                                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /invoices/:invoiceId                                                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /invoices/:invoiceId                                                        | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /invoices/:invoiceId/send                                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /invoices/:invoiceId/void                                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /invoices/:invoiceId/record-payment                                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /invoices/text2pay                                                            | &nbsp;                              | Subcuenta           |
| invoices/schedule.readonly      | GET /invoices/schedule/                                                            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /invoices/schedule/:scheduleId                                                 | &nbsp;                              | Subcuenta           |
| invoices/schedule.write         | POST /invoices/schedule                                                            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /invoices/schedule/:scheduleId                                                 | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /invoices/schedule/:scheduleId                                              | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /invoices/schedule/:scheduleId/schedule                                       | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /invoices/schedule/:scheduleId/auto-payment                                   | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /invoices/schedule/:scheduleId/cancel                                         | &nbsp;                              | Subcuenta           |
| invoices/template.readonly      | GET /invoices/template/                                                            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /invoices/template/:templateId                                                 | &nbsp;                              | Subcuenta           |
| invoices/template.write         | POST /invoices/template/                                                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /invoices/template/:templateId                                                 | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /invoices/template/:templateId                                              | &nbsp;                              | Subcuenta           |
| links.readonly                  | GET /links/                                                                        | &nbsp;                              | Subcuenta           |
| links.write                     | POST /links/                                                                       | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /links/:linkId                                                                 | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /links/:linkId                                                              | &nbsp;                              | Subcuenta           |
| locations.readonly              | GET /locations/:locationId                                                         | LocationCreate                      | Subcuenta, Agencia  |
|                                 |                                                                                    | LocationUpdate                      | Subcuenta, Agencia  |
|                                 | GET /locations/search                                                              | &nbsp;                              | Subcuenta, Agencia  |
|                                 | GET /locations/timeZones                                                           | &nbsp;                              | Subcuenta           |
| locations.write                 | POST /locations/                                                                   | &nbsp;                              | Agencia             |
|                                 | PUT /locations/:locationId                                                         | &nbsp;                              | Agencia             |
|                                 | DELETE /locations/:locationId                                                      | &nbsp;                              | Agencia             |
| locations/customValues.readonly | GET /locations/:locationId/customValues                                            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /locations/:locationId/customValues/:id                                        | &nbsp;                              | Subcuenta           |
| locations/customValues.write    | POST /locations/:locationId/customValues                                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /locations/:locationId/customValues/:id                                        | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /locations/:locationId/customValues/:id                                     | &nbsp;                              | Subcuenta           |
| locations/customFields.readonly | GET /locations/:locationId/customFields                                            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /locations/:locationId/customFields/:id                                        | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /custom-fields/:id                                                             | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /custom-field/object-key/:key                                                  | &nbsp;                              | Subcuenta           |
| locations/customFields.write    | POST /locations/:locationId/customFields                                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /locations/:locationId/customFields/:id                                        | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /locations/:locationId/customFields/:id                                     | &nbsp;                              | Subcuenta           |
| locations/tags.readonly         | GET /locations/:locationId/tags                                                    | &nbsp;                              | Subcuenta           |
|                                 | GET /locations/:locationId/tags/:tagId                                             | &nbsp;                              | Subcuenta           |
| locations/tags.write            | POST /locations/:locationId/tags/                                                  | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /locations/:locationId/tags/:tagId                                             | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /locations/:locationId/tags/:tagId                                          | &nbsp;                              | Subcuenta           |
| locations/templates.readonly    | GET /locations/:locationId/templates                                               | &nbsp;                              | Subcuenta           |
| locations/tasks.readonly        | POST /locations/:locationId/tasks/search                                           | &nbsp;                              | Subcuenta           |
| medias.readonly                 | GET /medias/files                                                                  | &nbsp;                              | Subcuenta           |
| medias.write                    | POST /medias/upload-file                                                           | &nbsp;                              | Subcuenta           |
| funnels/redirect.readonly       | GET /funnels/lookup/redirect/list                                                  | &nbsp;                              | Subcuenta           |
| funnels/redirect.write          | POST /funnels/lookup/redirect                                                      | &nbsp;                              | Subcuenta           |
| funnels/page.readonly           | GET /funnels/page                                                                  | &nbsp;                              | Subcuenta           |
| funnels/funnel.readonly         | GET /funnels/funnel/list                                                           | &nbsp;                              | Subcuenta           |
| funnels/pagecount.readonly      | GET /funnels/page/count                                                            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /funnels/lookup/redirect/:id                                                | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PATCH /funnels/lookup/redirect/:id                                                 | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /medias/:fileId                                                             | &nbsp;                              | Subcuenta           |
| opportunities.readonly          | GET /opportunities/search                                                          | OpportunityCreate                   | Subcuenta           |
| &nbsp;                          | GET /opportunities/:id                                                             | OpportunityDelete                   | Subcuenta           |
| &nbsp;                          | GET /opportunities/pipelines                                                       | OpportunityStageUpdate              | Subcuenta           |
| &nbsp;                          | &nbsp;                                                                             | OpportunityStatusUpdate             | Subcuenta           |
| &nbsp;                          | &nbsp;                                                                             | OpportunityMonetaryValueUpdate      | Subcuenta           |
| opportunities.write             | DELETE /opportunities/:id                                                          | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /opportunities/:id/status                                                      | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /opportunities                                                                | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /opportunities/:id                                                             | &nbsp;                              | Subcuenta           |
| payments/integration.readonly   | GET /payments/integrations/provider/whitelabel                                     | &nbsp;                              | Subcuenta           |
| payments/integration.write      | POST /payments/integrations/provider/whitelabel                                    | &nbsp;                              | Subcuenta           |
| payments/orders.readonly        | GET /payments/orders/                                                              | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /payments/orders/:orderId                                                      | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /payments/orders/:orderId/fulfillments                                         | &nbsp;                              | Subcuenta           |
| payments/orders.write           | POST /payments/orders/:orderId/fulfillments                                        | &nbsp;                              | Subcuenta           |
| payments/transactions.readonly  | GET /payments/transactions/                                                        | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /payments/transactions/:transactionId                                          | &nbsp;                              | Subcuenta           |
| payments/subscriptions.readonly | GET /payments/subscriptions/                                                       | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /payments/subscriptions/:subscriptionId                                        | &nbsp;                              | Subcuenta           |
| products.readonly               | GET /products/                                                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /products/:productId                                                           | &nbsp;                              | Subcuenta           |
| products.write                  | POST /products/                                                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /products/:productId                                                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /products/:productId                                                        | &nbsp;                              | Subcuenta           |
| products/prices.readonly        | GET /products/:productId/price/                                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /products/:productId/price/:priceId                                            | &nbsp;                              | Subcuenta           |
| products/prices.write           | POST /products/:productId/price/                                                   | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /products/:productId/price/:priceId                                            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /products/:productId/price/:priceId                                         | &nbsp;                              | Subcuenta           |
| oauth.readonly                  | GET /oauth/installedLocations                                                      | &nbsp;                              | Agencia             |
| oauth.write                     | POST /oauth/locationToken                                                          | &nbsp;                              | Agencia             |
| saas/location.write             | PUT /update-saas-subscription/:locationId                                          | &nbsp;                              | Agencia             |
| &nbsp;                          | POST /enable-saas/:locationId                                                      | &nbsp;                              | Subcuenta, Agencia  |
| saas/location.read              | GET /locations                                                                     | &nbsp;                              | Subcuenta, Agencia  |
| saas/company.write              | POST /bulk-disable-saas/:companyId                                                 | &nbsp;                              | Subcuenta, Agencia  |
| snapshots.readonly              | GET /snapshots                                                                     | &nbsp;                              | Agencia             |
| socialplanner/account.readonly  | GET /social-media-posting/:locationId/accounts                                     | &nbsp;                              | Subcuenta           |
| socialplanner/account.write     | DELETE /social-media-posting/:locationId/accounts/:id                              | &nbsp;                              | Subcuenta           |
| socialplanner/csv.readonly      | GET /social-media-posting/:locationId/csv                                          | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/:locationId/csv/:id                                      | &nbsp;                              | Subcuenta           |
| socialplanner/csv.write         | POST /social-media-posting/:locationId/csv                                         | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/:locationId/set-accounts                                | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /social-media-posting/:locationId/csv/:id                                   | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PATCH /social-media-posting/:locationId/csv/:id                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/:locationId/posts/bulk-delete                           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /social-media-posting/:locationId/csv/:csvId/post/:postId                   | &nbsp;                              | Subcuenta           |
| socialplanner/category.readonly | GET /social-media-posting/:locationId/categories                                   | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/:locationId/categories/:id                               | &nbsp;                              | Subcuenta           |
| socialplanner/oauth.readonly    | GET /social-media-posting/oauth/facebook/start                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/:locationId/facebook/accounts/:accountId           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/google/start                                       | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/:locationId/google/locations/:accountId            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/instagram/start                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/:locationId/instagram/accounts/:accountId          | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/linkedin/start                                     | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/:locationId/linkedin/accounts/:accountId           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/tiktok/start                                       | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/:locationId/tiktok/accounts/:accountId             | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/tiktok-business/start                              | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/:locationId/tiktok-business/accounts/:accountId    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/twitter/start                                      | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /social-media-posting/oauth/:locationId/twitter/accounts/:accountId            | &nbsp;                              | Subcuenta           |
| socialplanner/oauth.write       | POST /social-media-posting/oauth/:locationId/facebook/accounts/:accountId          | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/oauth/:locationId/google/locations/:accountId           | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/oauth/:locationId/instagram/accounts/:accountId         | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/oauth/:locationId/linkedin/accounts/:accountId          | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/oauth/:locationId/tiktok/accounts/:accountId            | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/oauth/:locationId/twitter/accounts/:accountId           | &nbsp;                              | Subcuenta           |
| socialplanner/post.readonly     | GET /social-media-posting/:locationId/posts/:id                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/:locationId/posts/list                                  | &nbsp;                              | Subcuenta           |
| socialplanner/post.write        | POST /social-media-posting/:locationId/posts                                       | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PUT /social-media-posting/:locationId/posts/:id                                    | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /social-media-posting/:locationId/posts/:id                                 | &nbsp;                              | Subcuenta           |
| &nbsp;                          | PATCH /social-media-posting/:locationId/posts/:id                                  | &nbsp;                              | Subcuenta           |
| socialplanner/tag.readonly      | GET /social-media-posting/:locationId/tags                                         | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /social-media-posting/:locationId/tags/details                                | &nbsp;                              | Subcuenta           |
| surveys.readonly                | GET /surveys/                                                                      | &nbsp;                              | Subcuenta           |
| &nbsp;                          | GET /surveys/submissions                                                           | &nbsp;                              | Subcuenta           |
| users.readonly                  | GET /users/                                                                        | &nbsp;                              | Subcuenta, Agencia  |
| &nbsp;                          | GET /users/:userId                                                                 | &nbsp;                              | Subcuenta, Agencia  |
| users.write                     | POST /users/                                                                       | &nbsp;                              | Subcuenta, Agencia  |
| &nbsp;                          | DELETE /users/:userId                                                              | &nbsp;                              | Subcuenta, Agencia  |
| &nbsp;                          | PUT /users/:userId                                                                 | &nbsp;                              | Subcuenta, Agencia  |
| workflows.readonly              | GET /workflows/                                                                    | &nbsp;                              | Subcuenta           |
| courses.write                   | POST courses/courses-exporter/public/import                                        | &nbsp;                              | Subcuenta           |
| emails/builder.readonly         | GET emails/builder                                                                 | &nbsp;                              | Subcuenta           |
| emails/builder.write            | POST emails/builder                                                                | &nbsp;                              | Subcuenta           |
| &nbsp;                          | POST /emails/builder/data                                                          | &nbsp;                              | Subcuenta           |
| &nbsp;                          | DELETE /emails/builder/:locationId/:templateId                                     | &nbsp;                              | Subcuenta           |
| emails/schedule.readonly        | GET emails/schedule                                                                | &nbsp;                              | Subcuenta, Agencia  |
| blogs/post.write                | POST /blogs/posts                                                                  | &nbsp;                              | Subcuenta           |
| blogs/post-update.write         | PUT /blogs/posts/:postId                                                           | &nbsp;                              | Subcuenta           |
| blogs/check-slug.readonly       | GET /blogs/posts/url-slug-exists                                                   | &nbsp;                              | Subcuenta           |
| blogs/category.readonly         | GET /blogs/categories                                                              | &nbsp;                              | Subcuenta           |
| blogs/author.readonly           | GET /blogs/authors                                                                 | &nbsp;                              | Subcuenta           |
| blogs/posts.readonly            | GET /blogs/posts/all                                                               | &nbsp;                              | Subcuenta           |
| blogs/list.readonly             | GET /blogs/site/all                                                                | &nbsp;                              | Subcuenta           |
