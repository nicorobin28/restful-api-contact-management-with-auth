# User API Spec

## Register User API

Endpoint : /api/users

Request Body :

```json
{
  "username": "askar",
  "password": "askar123",
  "name": "Askar Prayogo"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "askar",
    "namme": "Askar Prayogo"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username Already Registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "askar",
  "password": "askar123"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "Askar Prayogo Lagi", // optional
  "password": "new password" // optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "askar",
    "name": "Askar Prayogo Lagi"
  }
}
```

Response Body Error :

```json
{
  "errors": "Name Length Max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "askar",
    "name": "Askar Prayogo"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
