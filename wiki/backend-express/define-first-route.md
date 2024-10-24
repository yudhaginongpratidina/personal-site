# DEFINE FIRST ROUTE

## CREATE FILE API ON FOLDER ROUTES

```bash
mkdir routes
touch routes/api.js
```

## COPY CODE ON FILE `api.js`

```js
// import lib
import express from 'express';

// initiliaze router
const router = express.Router();

// define routes
router.get('/', (req, res) => {
    res.send('API is running...');
})

// export router
export default router;
```

## ADD CODE IN FILE `index.js`

```js
// import routes
import api from "./routes/api.js";

// use routes
app.use("/api", api);
```