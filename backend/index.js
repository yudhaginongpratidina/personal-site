// import libs
import { app } from "./application/app.js";
import { logger } from "./application/logging.js";
import dotenv from "dotenv";

// import routes
import api from "./routes/api.js";

// initialize dotenv
dotenv.config();

// variable for app config
const APP_NAME = process.env.APP_NAME;
const APP_VERSION = process.env.APP_VERSION;
const APP_PORT = process.env.APP_PORT;

// use routes
app.use("/api", api);

// start listening backend
app.listen(APP_PORT, () => {
    logger.info(`${APP_NAME} ${APP_VERSION} is running on port ${APP_PORT}.`)
})