import * as questionsModel from "../models/questionsModel.js";

export async function getQuestions(req, res) {
  const questions = await questionsModel.getQuestions();
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

export async function getQuizByTopicId(req, res) {
  const id = req.params.id;
  const quiz = await questionsModel.getQuizByTopicId(id);
  // Assume 404 status if the quiz is not found
  if (!quiz) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "quiz not found" } });
  }
  res.status(200).json({ status: "success", data: quiz });
}

export async function newQuestion(req, res) {
  const data = req.body;
  const question = await questionsModel.newQuestion(data);
  res.status(201).json({ status: "success", data: question });
}
