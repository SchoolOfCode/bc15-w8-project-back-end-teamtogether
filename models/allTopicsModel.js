// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getAllTopics() {
  // Query the database and return all allTopics

  // Define the SQL query to fetch all allTopics from the 'allTopics' table
  const queryText = "SELECT * FROM allTopics"; // !!!! double check name matches db

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getTopicById(id) {
  // Query the database and return the author with a matching id or null

  // Define the SQL query to fetch the author with the specified id from the 'allTopics' table
  const queryText = "SELECT * FROM allTopics WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows[0] || null;
}
