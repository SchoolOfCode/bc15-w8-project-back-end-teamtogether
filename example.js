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
  (1, '', '', '', ''),
  (2, '', '', '', ''),
  (3, '', '', '', ''),
  (4, '', '', '', ''),
  (5, '', '', '', ''),
  




  //Useful commands
  SELECT question_id, name, question, topic, difficulty FROM allTopics INNER JOIN questions ON allTopics.id = questions.topic_id
  SELECT question_id, name, question, topic, difficulty FROM allTopics AS t INNER JOIN questions AS q ON t.id = q.topic_id INNER JOIN answers AS a ON q.question_id = a.answer_id;



