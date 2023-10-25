import express from "express";
import morgan from "morgan";

import { questionsRoutes } from "./routes/questionsRoutes.js";
import { answersRoutes } from "./routes/answersRoutes.js";
import { allTopicsRoutes } from "./routes/allTopicsRoutes.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/questions", questionsRoutes);
app.use("/answers", answersRoutes);
app.use("/alltopics", allTopicsRoutes);
