import express from "express";
import morgan from "morgan";
import cors from "cors";

import { questionsRoutes } from "./routes/questionsRoutes.js";
import { answersRoutes } from "./routes/answersRoutes.js";
import { allTopicsRoutes } from "./routes/allTopicsRoutes.js";

export const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.use("/questions", questionsRoutes);
app.use("/answers", answersRoutes);
app.use("/alltopics", allTopicsRoutes);

app.use(function (_req, res, _next) {
  res.status(404).json({
    success: false,
    error:
      "We can't find that page! Did you send the request to the right path?",
  });
});

app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Something went wrong, please try again later",
  });
});

export default app;
