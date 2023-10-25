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
  // Query the database and return the author with a matching id or null

  // Define the SQL query to fetch the author with the specified id from the 'questions' table
  const queryText = "SELECT * FROM questions WHERE topic_id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows[0] || null;
}
