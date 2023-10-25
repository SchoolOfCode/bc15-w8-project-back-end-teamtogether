import * as allTopicsModel from "../models/allTopicsModel.js";

export async function getAllTopics(req, res) {
  const allTopics = await allTopicsModel.getAllTopics();
  res.status(200).json({ status: "success", data: allTopics });
}

export async function getTopicById(req, res) {
  const id = req.params.id;
  const topic = await allTopicsModel.getTopicById(id);
  // Assume 404 status if the topic is not found
  if (!topic) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "topic not found" } });
  }
  res.status(200).json({ status: "success", data: topic });
}
