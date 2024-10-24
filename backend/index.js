// import libs
import { app } from "./application/app.js";
import dotenv from "dotenv";

// initialize dotenv
dotenv.config();

// variable for app config
const APP_NAME = process.env.APP_NAME;
const APP_VERSION = process.env.APP_VERSION;
const APP_PORT = process.env.APP_PORT;

// start listening backend
app.listen(APP_PORT, () => console.log(`${APP_NAME} v${APP_VERSION} listening on port ${APP_PORT}`))