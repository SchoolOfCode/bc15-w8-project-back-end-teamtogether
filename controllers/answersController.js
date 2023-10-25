import * as answersModel from "../models/answersModel.js";

export async function getAnswers(req, res) {
  const answers = await answersModel.getAnswers();
  res.status(200).json({ status: "success", data: answers });
}

export async function getAnswersById(req, res) {
  const id = req.params.id;
  const answers = await answersModel.getAnswersById(id);
  // Assume 404 status if the answer is not found
  if (!answers) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "answers not found" } });
  }
  res.status(200).json({ status: "success", data: answers });
}