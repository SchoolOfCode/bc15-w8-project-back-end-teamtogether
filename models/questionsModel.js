// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getQuestions() {
  // Query the database and return all questions

  // Define the SQL query to fetch all questions from the 'questions' table
  const queryText = "SELECT * FROM questions"; // !!!! double check name matches db

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

// Functions all questions about a single topic (id) - frontend to then display a single question from returned object, and so on

export async function getQuestionById(id) {
  // Query the database and return the question with a matching id or null

  // Define the SQL query to fetch the question with the specified id from the 'questions' table
  const queryText = "SELECT * FROM questions WHERE topic_id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows || null;
}

export async function getQuizByTopicId(id) {
  // Define the SQL query to fetch the all question + answers with the specified topic id from the 'questions' + 'answers' table
  const queryText =
    "SELECT question_id, name, question, topic, difficulty, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 FROM allTopics AS t INNER JOIN questions AS q ON t.id = q.topic_id INNER JOIN answers AS a ON q.question_id = a.answer_id WHERE topic_id = $1;";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows || null;
}

export async function newQuestion(new_question) {
  // Query the database to create an question and return the newly created question and answer
  //Create query to insert new question into database
  const queryText = "INSERT INTO questions (question, topic, difficulty) VALUES ($1, $2, $3) RETURNING *";
  //Store 
  const values = [new_question.question, new_question.topic, new_question.difficulty];
  const result = await pool.query(queryText, values);
  return result || null;
}

