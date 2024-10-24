// import libraries
import express from "express";
import cors from "cors";

// initialize app
export const app = express();

// make global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));