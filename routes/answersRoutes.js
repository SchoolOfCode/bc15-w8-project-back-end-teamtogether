import express from "express";

import * as answersController from "../controllers/answersController.js";

export const answersRoutes = express.Router();

answersRoutes.get("/", answersController.getAnswers);

answersRoutes.get("/:id", answersController.getAnswersById);