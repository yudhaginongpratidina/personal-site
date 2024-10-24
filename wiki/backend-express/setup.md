# BACKEND EXPRESS - SETUP

## CREATE FOLDER AND INITIALIZE

```bash
mkdir backend
cd backend
npm init -y
```

## INSTALL DEPENDENCIES

```bash
npm i express cors dotenv
npm i -D nodemon
```

## MODIFY FILE `package.json`

```json
{
    "type": "module"
}
```

```json
{
    "scripts": {
        "dev": "nodemon index.js",
        "start": "node index.js"
    }
}
```

## MAKE FILE `app.js` ON APPLICATION FOLDER

```bash
mkdir application
touch application/app.js
```

copy code to `app.js`

```js
// import libraries
import express from "express";
import cors from "cors";

// initialize app
export const app = express();

// make global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

## MAKE FODER AND FILE `index.js` ON ROOT FOLDER

```bash
touch index.js
```

copy code to `index.js`

```js
// import libraries
import express from "express";
import cors from "cors";

// initialize app
export const app = express();

// make global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

## START SERVER

```bash
npm run dev
npm run start
```

## MAKE FILE `.gitignore` ON ROOT FOLDER

```bash
touch .gitignore
```

copy code to `.gitignore`

```gitignore
node_modules
.env
```