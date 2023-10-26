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
  const client = await pool.connect();

  try {
    // Query to insert new question into database
    const queryQuestion =
      "INSERT INTO questions (topic_id, question, topic, difficulty) VALUES ($1, $2, $3, $4) RETURNING *";
    const topic_id = 7; // specific id for user questions
    const values = [
      topic_id,
      new_question.question,
      new_question.topic,
      new_question.difficulty,
    ];

    const questionResult = await client.query(queryQuestion, values);
    const question = questionResult.rows[0];
    console.log(question);

    // Query to insert new answer into database
    const queryAnswer =
      "INSERT INTO answers (answer_id, correctanswer, wronganswer1, wronganswer2, wronganswer3) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const answerValues = [
      question.question_id,
      new_question.correctanswer,
      new_question.wronganswer1,
      new_question.wronganswer2,
      new_question.wronganswer3,
    ];

    const answerResult = await client.query(queryAnswer, answerValues);
    const answer = answerResult.rows[0];

    return { question, answer };
  } catch (error) {
    throw error;
  } finally {
    // Make sure to release the client back to the pool
    client.release();
  }
}
