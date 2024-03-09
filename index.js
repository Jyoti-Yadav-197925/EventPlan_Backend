import express from "express";
import dotenv from "dotenv";
import { mongooseDB } from "./config/mongoose.js";


dotenv.config({path: ".env"});
mongooseDB();

const app =  express();


export default app;
