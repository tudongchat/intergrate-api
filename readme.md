# Chatbox API

This is a README document for the Chatbox API. The Chatbox API provides a set of routes to manage chatboxes, conversations, and messages.
Prerequisites

You must have an API key to use this API. API keys can be obtained from the dashboard.

In the dashboard, you can also set your callback link to receive new messages. When a new message is sent, the API will send a request to the provided callback link with the message details. The request will include an `x-signature` header, which is an HMAC SHA256 of the request body using the chatbox token as the secret.

The base URL for the API is `https://shark.tudongchat.com/api/chatbox`.

All the endpoints require an Authorization header with the format Bearer `<API_KEY>`. Replace `<API_KEY>` with the API key obtained from the dashboard.

1. Get chatbox details

- **Endpoint**: GET `/`
- **Headers**: Authorization: Bearer `<API_KEY>`
- **Response**: JSON object containing chatbox details.

2. Get chatbox conversations

- **Endpoint**: GET `/conversations`
- **Headers**: Authorization: Bearer `<API_KEY>`
- **Response**: JSON array containing a list of conversations associated with the chatbox.

3. Get messages in a conversation

- **Endpoint**: GET `/conversations/:id/messages`
- **Headers**: Authorization: Bearer `<API_KEY>`
- **URL Parameters**: id - ID of the conversation
- **Response**: JSON array containing a list of messages in the conversation.

4. Send a message in a conversation

- **Endpoint**: POST `/conversations/:id/messages`
- **Headers**: Authorization: Bearer `<API_KEY>`
- **URL Parameters**: id - ID of the conversation
- **Request Body**: JSON object with the following properties:
      content (string, required): The message content. Must be a string with a length between 1 and 1000 characters.
- **Response**: JSON object containing the created message.

Examples

To send HTTP requests to the API, you can use any HTTP client, like curl, Postman, or the fetch API in JavaScript.

Here's an example using curl:

```bash

# Get chatbox details
curl -X GET \
  -H "Authorization: Bearer <API_KEY>" \
  https://shark.tudongchat.com/api/chatbox/

# Get chatbox conversations
curl -X GET \
  -H "Authorization: Bearer <API_KEY>" \
  https://shark.tudongchat.com/api/chatbox/conversations

# Get messages in a conversation
curl -X GET \
  -H "Authorization: Bearer <API_KEY>" \
  https://shark.tudongchat.com/api/chatbox/conversations/:id/messages

# Send a message in a conversation
curl -X POST \
  -H "Authorization: Bearer <API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"content": "Hello, World!"}' \
  https://shark.tudongchat.com/api/chatbox/conversations/:id/messages
```

Replace `<API_KEY>` with your actual API key and :id with the conversation ID where applicable.
