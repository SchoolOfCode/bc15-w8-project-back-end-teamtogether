import express from "express";

import * as questionsController from "../controllers/questionsController.js";

export const questionsRoutes = express.Router();

questionsRoutes.get("/", questionsController.getQuestions);

questionsRoutes.get("/:id", questionsController.getQuestionById);
