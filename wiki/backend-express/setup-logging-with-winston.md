# SETUP LOGGING WITH WINSTON

## INSTALL DEPENDENCIES

```bash
npm i winston
```
## CREATE FILE `logging.js`

```bash
touch application/logging.js
```

copy and paste code below

```js
import winston from "winston";
import dotenv from "dotenv";
dotenv.config();


// DEFINE LEVELS AND COLORS
const customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        verbose: 'cyan',
        debug: 'blue',
        silly: 'grey'
    }
};


// APPLY COLOR TO LEVELS
winston.addColors(customLevels.colors);


// CREATE CUSTOM FORMAT
const jsonFormat = winston.format.printf(({ timestamp, level, message, service, ...meta }) => {
    return JSON.stringify({
        timestamp,
        level,
        message,
        service,
        ...meta
    });
});


// DEFINE LOG TRANSPORTS
const transports = [
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format: winston.format.combine(
            winston.format.timestamp(),
            jsonFormat
        )
    }),
    new winston.transports.File({
        filename: 'logs/warn.log',
        level: 'warn',
        format: winston.format.combine(
            winston.format.timestamp(),
            jsonFormat
        )
    }),
    new winston.transports.File({
        filename: 'logs/info.log',
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(),
            jsonFormat
        )
    }),
    new winston.transports.File({
        filename: 'logs/verbose.log',
        level: 'verbose',
        format: winston.format.combine(
            winston.format.timestamp(),
            jsonFormat
        )
    }),
    new winston.transports.File({
        filename: 'logs/debug.log',
        level: 'debug',
        format: winston.format.combine(
            winston.format.timestamp(),
            jsonFormat
        )
    }),
    new winston.transports.File({
        filename: 'logs/silly.log',
        level: 'silly',
        format: winston.format.combine(
            winston.format.timestamp(),
            jsonFormat
        )
    })
];


// CONSOLE TRANSPORT
if (process.env.APPLICATION_DEBUGGING === "true") {
    transports.push(new winston.transports.Console({}));
}

// INIT
export const logger = winston.createLogger({
    levels: customLevels.levels,
    format: winston.format.combine(
        winston.format.timestamp(),
        jsonFormat
    ),
    defaultMeta: { service: "application" },
    transports: transports,
});
```

## CREATE FOLDER LOGS ON ROOT PROJECT

```bash
mkdir logs
touch logs/.gitignore
```

copy and paste code below `logs/.gitignore`

```gitignore
*.log
```

## MODIFY CODE ON FILE `index.js`

```js
import { logger } from "./application/logging.js";

// start listening backend
app.listen(APP_PORT, () => {
    logger.info(`${APP_NAME} ${APP_VERSION} is running on port ${APP_PORT}.`)
})
```

## ADD CONFIG ON `.env`

```env
APP_DEBUG=true
```