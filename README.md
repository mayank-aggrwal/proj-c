
# 💻 XMEME
[![](https://img.shields.io/badge/Node.js-12.19.0-blue)](https://nodejs.org/)
[![](https://img.shields.io/badge/express-4.17.1-brightgreen)](https://expressjs.com/)
[![](https://img.shields.io/badge/mongoose-5.9.29-orange)](https://www.npmjs.com/package/mongoose)
[![](https://img.shields.io/badge/author-mayankaggarwal-informational)](https://github.com/mayank-aggrwal/)

## Open Endpoints

 - Endpoint to send a meme to the backend :  `POST /memes`
 - Endpoint to fetch the latest 100 memes created from the backend : `GET /memes`
 - Endpoint to specify a particular id (identifying the meme) to fetch a single Meme. : `GET /memes/<id>`
 - Check API health : `GET /health`
 - Endpoint to delete a meme : `DELETE /memes/<id>`

---

`POST /memes`
### Request schema

```json
{
    "name": "<meme-name>",
    "url": "<meme-image-url>",
    "caption": "<meme-cation>"
}
```
### Response schema

```json
{
  "id": "5f81dca70f685f2f104"
}
```

```json
{
  "errors": {
    "message": "Invalid long URL"
  }
}
```

```json
{
  "errors": {
    "message": "Invalid base URL"
  }
}
```

```json
{
  "errors": {
    "message": "Server error"
  }
}
```
---

`GET /memes`
### Response schema

```json
[
  {
    "id": "5f81dca70f685f2f104",
    "name": "<meme-name>",
    "url": "<meme-image-url>",
    "caption": "<meme-caption>",
    "date": "Sat Oct 10 2017 21:39:11 GMT+0530 (India Standard Time)"
  },
  {
    "_id": "5f81dca70f685f2f156",
    "name": "<meme-name>",
    "url": "<meme-image-url>",
    "caption": "<meme-caption>",
    "date": "Sat Oct 13 2018 21:39:11 GMT+0530 (India Standard Time)"
  }
]
```

```json
{
  "errors": {
    "message": "Code already in use"
  }
}
```

```json
{
  "errors": {
    "message": "Invalid long URL"
  }
}
```

```json
{
  "errors": {
    "message": "Invalid base URL"
  }
}
```

```json
{
  "errors": {
    "message": "Server error"
  }
}
```
---

`GET /memes/<id>`
### Response schema

```json
{
  "id": "<id>",
  "name": "<meme-name>",
  "url": "<meme-image-url>",
  "caption": "<meme-caption>",
  "date": "Sat Oct 13 2018 21:39:11 GMT+0530 (India Standard Time)"
}
```

```json
{
  "errors": {
    "message": "Code already in use"
  }
}
```

```json
{
  "errors": {
    "message": "Invalid long URL"
  }
}
```

```json
{
  "errors": {
    "message": "Invalid base URL"
  }
}
```

```json
{
  "errors": {
    "message": "Server error"
  }
}
```

---


## Instructions

 - Clone the repository
 - Install node from [official website](https://nodejs.org/en/download/)
 - Install the dependencies for the project using below command
   ```bash
   npm install
   ```
 - To run the application locally
   ```bash
   npm run dev
   ```
 - In the browser goto : http://localhost:5000/health

## Useful instructions

### To check node version :
```bash
node -v
```

### To check npm version :
```bash
npm -v
```

### To setup an express app :
```bash
npm init -y
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Check Contributing.md for more instructions.
