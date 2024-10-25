## SETUP RESTFULL API DOCUMENTATION WITH SWAGGER

## INSTALL DEPENDENCIES

```bash
npm i swagger-jsdoc swagger-ui-express
```

## CREATE FILE `swagger.js` ON FOLDER `application`

```bash
touch application/swagger.js
```

## COPY CODE ON FILE `swagger.js`

```js
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
dotenv.config();

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API DOCUMENTATION',
            version: '1.0.0',
            description: '',
            contact: {
                name: 'YUDHA GINONG PRATIDINA',
                url: 'https://github.com/yudhaginongpratidina',
            },
        },
        servers: [
            {
                url: process.env.APP_BASE_URL,
                description: ``,
            },
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                BearerAuth: [],
            },
        ],
    },
    apis: ['./domain/**/*.js'],
};

const specs = swaggerJsdoc(options);
export { specs };
```

## ADD CODE ON FILE `application/app.js`

```js
// import lib
import swaggerUi from "swagger-ui-express";
import { specs } from "./swagger.js";

// use swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs))
```

## EXAMPLE USE SWAGGER

```js
/**
 * @swagger
 * /api:
 *  get:
 *      summary: API is running
 *      tags: [Root]
 *      responses:
 *          200:
 *              description: API is running
 */
router.get('/', (req, res) => {
    res.status(200).json('API is running...');
});
```