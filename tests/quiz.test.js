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
