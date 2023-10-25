import { test, expect, afterAll } from "vitest";
import request from "supertest";
import app from "../app.js";
import  { resetDatabase }  from "../db/reset-database.js";
import { pool } from "../db/index.js";

test("GET /questions works", async function () {
    await resetDatabase();

    const response = await request(app).get("/questions");

    console.log(response.body)})