# sign-api-wykop

> Sign and query the Wykop.pl API in a simple way

## Install

```sh
$ npm install sign-api-wykop
// or
$ yarn add sign-api-wykop
```

## Import

```javascript
const { signApi, wykopRequest } = require("sign-api-wykop");
```

## Usage

signApi(url, params, APPKEY, SECRET)

```javascript
signApi(
  `Search/Links`,
  { q: "hello", votes: 100 },
  process.env.APPKEY,
  process.env.SECRET
);
```

wykopRequest(url, params, APPKEY, SECRET)

```javascript
wykopRequest(
  "Search/Links",
  { q: "hello", votes: 100 },
  process.env.APPKEY,
  process.env.SECRET
);
```

## Example

```javascript
wykopRequest(
  "Entries/Upvoters/64834157/",
  {},
  process.env.APPKEY,
  process.env.SECRET
)
  .then((res) => {
    res.data.data.map((d) => {
      return console.log(d.author);
    });
  })
  .catch((error) => {
    throw error;
  });
```
