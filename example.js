





/*CREATE TABLE allTopics (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name VARCHAR
    ) ;
    
    INSERT INTO allTopics (name) VALUES
  ('Intro to Javascript'),
  ('Debugging/DOM'),
  ('Rest Apis'),
  ('Node.js'),
  ('Databases'),
  ('Testing');

   CREATE TABLE questions (
        topic_id INT REFERENCES allTopics(id),
        question_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        question VARCHAR,
        topic VARCHAR,
        difficulty VARCHAR 
      );

    CREATE TABLE answers (
        answer_id INT REFERENCES questions(question_id),
        correctAnswer VARCHAR,
        wrongAnswer1 VARCHAR,
        wrongAnswer2 VARCHAR, 
        wrongAnswer3 VARCHAR
      );

      INSERT INTO questions (topic_id, question, topic, difficulty) VALUES
  (4, 'What is Node.js?', 'Node.js', 'Easy'),
  (4, 'Which of the following is NOT a core module in Node.js?', 'Node.js', 'Easy'),
  (4, 'How do you include an external module in a Node.js file?', 'Node.js', 'Easy'),
  (4, 'Which of the following is used to handle asynchronous operations in Node.js?', 'Node.js', 'Easy'),
  (4, 'How do you start a Node.js server?', 'Node.js', 'Easy');

   INSERT INTO answers (answer_id, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) VALUES
  (1, 'A runtime environment for executing JavaScript code outside of a browser', 'A programming language', 'A web browser', 'An operating system'),
  (2, 'sql (SQL)', 'fs (File System)', 'http (HTTP)', 'path (Path)'),
  (3, 'Using the require function ','Using the import keyword', 'Using the include keyword', 'Using the import function'),
  (4, 'All of the above (Promises, Callbacks, Async/await)','Promises','Callbacks', 'Async/await'),
  (5, 'Using the node server.js command in the terminal', 'Opening a web browser', 'Using the npm start command', 'Node.js servers start automatically when the file is executed');
  




  //Useful commands
  SELECT question_id, name, question, topic, difficulty FROM allTopics INNER JOIN questions ON allTopics.id = questions.topic_id
 SELECT question_id, name, question, topic, difficulty, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 FROM allTopics AS t INNER JOIN questions AS q ON t.id = q.topic_id INNER JOIN answers AS a ON q.question_id = a.answer_id;



