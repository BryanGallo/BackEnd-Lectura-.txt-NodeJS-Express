import express from "express";
import { readFile } from "../controller/uploadController.js";

const uploadRouter = express.Router();

uploadRouter.post("/", readFile);

export default uploadRouter;
