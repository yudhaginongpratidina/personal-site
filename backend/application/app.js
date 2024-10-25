// import libraries
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { specs } from "./swagger.js";

// initialize app
export const app = express();

// make global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs))