import * as allTopicsModel from "../models/allTopicsModel.js";

export async function getallTopics(req, res) {
  const allTopics = await allTopicsModel.getallTopics();
  res.status(200).json({ status: "success", data: allTopics });
}

export async function allTopicsbyId(req, res) {
  const id = req.params.id;
  const allTopics = await allTopicsModel.allTopicsbyId(id);
  // Assume 404 status if the topic is not found
  if (!question) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "topic not found" } });
  }
  res.status(200).json({ status: "success", data: questionallTopic });
}