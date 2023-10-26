import { test, expect, afterAll } from "vitest";
import supertest from "supertest";
import app from "../app.js";
import { resetDatabase } from "./db/reset-database.js";

test("barebones connection test", async () => {});

test("Check get all topics function - GET /allTopics", async () => {
  // ARRANGE
  await resetDatabase();

  // ACT
  const response = await supertest(app).get("/alltopics");

  // ASSERT
  // console.log(response.body);
  // check response.status
  expect(response.status).toBe(200);
  // check response.headers
  expect(response.headers["content-type"]).toContain("application/json");
  // check response.body
  expect(typeof response.body).toBe("object");
  expect(response.body.status).toEqual("success");
  expect(Array.isArray(response.body.data)).toBeTruthy();
  expect(response.body.data[3].name).toEqual("Node.js");
});

test("Check get all questions function - GET /questions", async () => {
  // ARRANGE
  await resetDatabase();

  // ACT
  const response = await supertest(app).get("/questions");

  // ASSERT
  // console.log(response.body);
  // check response.status
  expect(response.status).toBe(200);
  // check response.headers
  expect(response.headers["content-type"]).toContain("application/json");
  // check response.body
  expect(typeof response.body).toBe("object");
  expect(response.body.status).toEqual("success");
  expect(Array.isArray(response.body.data)).toBeTruthy();
  expect(response.body.data[0].topic).toEqual("Node.js");
});

test("Check get all answers function - GET /answers", async () => {
  // ARRANGE
  await resetDatabase();

  // ACT
  const response = await supertest(app).get("/answers");

  // ASSERT
  // console.log(response.body);
  // check response.status
  expect(response.status).toBe(200);
  // check response.headers
  expect(response.headers["content-type"]).toContain("application/json");
  // check response.body
  expect(typeof response.body).toBe("object");
  expect(response.body.status).toEqual("success");
  expect(Array.isArray(response.body.data)).toBeTruthy();
});

test("Checking create new question - POST /questions/userquestion", async function () {
  await resetDatabase();
  
  const postData = {
    question: "testing3",
    topic: "test4",
    difficulty: "hard",
    correctanswer: "This is the correct answer",
    wronganswer1: "1",
    wronganswer2: "2",
    wronganswer3: "3"
  };

  const response = await supertest(app)
    .post("/questions/userquestion")
    .send(postData)
    .set("Accept", "application/json");

  //Send POST request from postData object
  
  // check response.body
  expect(typeof response.body).toBe("object");
  expect(response.body).toEqual({
   status:"success",
    data: {
      question: {
        topic_id: 7,
        question_id: 6,
        question: "testing3",
        topic: "test4",
        difficulty: "hard"
      },
      answer: {
        answer_id: 6,
        correctanswer: "This is the correct answer",
        wronganswer1: "1",
        wronganswer2: "2",
        wronganswer3: "3"
      }
    }
  });
  //response status that says 201
  expect(response.status).toBe(201);
  //response header that is application.json
  expect(response.headers["content-type"]).toContain("application/json");

});
