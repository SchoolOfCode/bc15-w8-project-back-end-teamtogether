import { pool } from "./index.js";

export async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS allTopics CASCADE;
      DROP TABLE IF EXISTS questions CASCADE;
      DROP TABLE IF EXISTS answers CASCADE;
    `);

    //create all topics table with auto generated ID
    await pool.query(`
    CREATE TABLE allTopics (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name VARCHAR
    );
    `);
    
    //create questions table 
    await pool.query(`
      CREATE TABLE questions (
        topic_id INT REFERENCES allTopics(id),
        question_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        question VARCHAR,
        topic VARCHAR,
        difficulty VARCHAR);
      `);

    //create answers table
    await pool.query(`
       CREATE TABLE answers (
        answer_id INT REFERENCES questions(question_id),
        correctAnswer VARCHAR,
        wrongAnswer1 VARCHAR,
        wrongAnswer2 VARCHAR, 
        wrongAnswer3 VARCHAR
      );
      `);

    //Populate tables topics
    await pool.query(`
    INSERT INTO allTopics (name) 
    VALUES
    ('Intro to Javascript'),
    ('Debugging/DOM'),
    ('Rest APIs'),
    ('Node.js'),
    ('Databases'),
    ('Testing'),
    ('User Questions');
    `);
    
    //populate questions 
    await pool.query(`
      INSERT INTO questions (topic_id, question, topic, difficulty) 
      VALUES
    (4, 'What is Node.js?', 'Node.js', 'Easy'),
    (4, 'Which of the following is NOT a core module in Node.js?', 'Node.js', 'Easy'),
    (4, 'How do you include an external module in a Node.js file?', 'Node.js', 'Easy'),
    (4, 'Which of the following is used to handle asynchronous operations in Node.js?', 'Node.js', 'Easy'),
    (4, 'How do you start a Node.js server?', 'Node.js', 'Easy'),

    (4, 'What is the purpose of the "npm" command in Node.js?', 'Node.js', 'Intermediate'),
    (4, 'Which of the following is NOT a built-in module in Node.js?', 'Node.js', 'Intermediate'),
    (4, 'How can you handle errors in Node.js?', 'Node.js', 'Intermediate'),
    (4, 'What is the purpose of the "require" function in Node.js?', 'Node.js', 'Intermediate'),
    (4, 'How can you make an HTTP request in Node.js?', 'Node.js', 'Intermediate'),

    (4, 'Which of the following is NOT a core module in Node.js?', 'Node.js', 'Hard'),
    (4, 'How can you handle streaming data in Node.js?', 'Node.js', 'Hard'),
    (4, 'What is the purpose of the "cluster" module in Node.js?', 'Node.js', 'Hard'),
    (4, 'What is the difference between "require" and "import" in Node.js?', 'Node.js', 'Hard'),
    (4, 'How can you handle memory leaks in a Node.js application?', 'Node.js', 'Hard');
    `);
      
    //populate answers
    await pool.query(`
    INSERT INTO answers (answer_id, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) 
    VALUES
    (1, 'A runtime environment for executing JavaScript code outside of a browser', 'A programming language', 'A web browser', 'An operating system'),
    (2, 'sql (SQL)', 'fs (File System)', 'http (HTTP)', 'path (Path)'),
    (3, 'Using the require function ','Using the import keyword', 'Using the include keyword', 'Using the import function'),
    (4, 'All of the above (Promises, Callbacks, Async/await)','Promises','Callbacks', 'Async/await'),
    (5, 'Using the node server.js command in the terminal', 'Opening a web browser', 'Using the npm start command', 'Node.js servers start automatically when the file is executed'),
    
    (6, 'To manage dependencies and packages in a Node.js project',  'To install global packages',  'To start a local server',  'To execute JavaScript code'),
    (7, 'express (Express.js)', 'Using try-catch blocks', 'Using the "error" event handler',  'Using the "throw" keyword' ),
    (8, 'All of the above', 'Using try-catch blocks', 'Using the "error" event handler',  'Using the "throw" keyword' ),
    (9, 'To include external modules', 'To define variables',  'To create functions',  'To execute JavaScript code'),
    (10, 'Using the "http" module', 'Using the "fetch" function', ' Using the "ajax" function', ' Using the "request" module'),

    (11, 'mongo (MongoDB)','fs (File System)', 'http (HTTP)', 'net (Network)'),
    (12, 'Using the "stream" module', 'Using the "fs" module',  'Using the "http" module', 'Streaming is not supported in Node.js'),
    (13, 'To handle multi-core processing',  'To create child processes', 'To manage file systems', 'To interact with databases'),
    (14, 'There is no difference, both are used interchangeably in Node.js','require is used for built-in modules, while import is used for external modules', 'require is used for external modules, while import is used for built-in modules', 'require is a synchronous operation, while import is an asynchronous operation'),
    (15, 'By using tools like heap snapshots and monitoring memory usage', 'Manually freeing up memory using the garbage collector', 'Using the "memory" module to release memory', 'Implementing proper error handling');
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    // await pool.end();
  }
}

await resetDatabase();
