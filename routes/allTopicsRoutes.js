import express from "express";

import * as allTopicsController from "../controllers/allTopicsController.js";

export const allTopicsRoutes = express.Router();

allTopicsRoutes.get("/", allTopicsController.getAllTopics);

allTopicsRoutes.get("/:id", allTopicsController.getTopicById);
