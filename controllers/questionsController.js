import * as questionsModel from "../models/questionsModel.js";

export async function getQuestions(req, res) {
  const questions = await authorsModel.getQuestions();
  res.status(200).json({ status: "success", data: questions });
}

export async function getQuestionById(req, res) {
  const id = req.params.id;
  const question = await questionsModel.getQuestionById(id);
  // Assume 404 status if the question is not found
  if (!question) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "question not found" } });
  }
  res.status(200).json({ status: "success", data: question });
}
