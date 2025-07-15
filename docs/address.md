# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/adresses

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jl. Cakalele",
  "city": "Depok",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": "11352"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Cakalele",
    "city": "Depok",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "11352"
  }
}
```

Response Body Error:

```json
{
  "errors": "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/adresses/:addressId

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jl. Cakalele",
  "city": "Depok",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": "11352"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Cakalele",
    "city": "Depok",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "11352"
  }
}
```

Response Body Error:

```json
{
  "errors": "Country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/adresses/:addressId

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Cakalele",
    "city": "Depok",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "11352"
  }
}
```

Response Body Error:

```json
{
  "errors": "Contact is not found"
}
```

## List Addresses API

Endpoint : GET /api/contacts/:contactId/adresses

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": [
    {
      "data": {
        "id": 1,
        "street": "Jl. Cakalele",
        "city": "Depok",
        "province": "Jawa Barat",
        "country": "Indonesia",
        "postal_code": "11352"
      }
    },
    {
      "data": {
        "id": 2,
        "street": "Jl. Cakalele",
        "city": "Depok",
        "province": "Jawa Barat",
        "country": "Indonesia",
        "postal_code": "11352"
      }
    }
  ]
}
```

Response Body Error:

```json
{
  "errors": "Contact is not found"
}
```

## Remove Addresses API

Endpoint : DELETE /api/contacts/:contactId/adresses/:addressId

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Error:

```json
{
  "errors": "Address is not found"
}
```
