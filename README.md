# Back-end for TestTogether application

<img width="200" alt="Screenshot 2023-11-19 at 10 23 43" src="https://github.com/SchoolOfCode/bc15-w8-project-back-end-teamtogether/assets/93056794/6cb48d26-ff98-4b44-b33e-e6adf1bdbf48">


## 💼 The brief

To develop a full-stack web application that solves a problem for bootcampers as a team of 6.

## 🧠 Problem Statement

Bootcampers struggle to retain vast amounts of information due to the intensive nature of their programs. The lack of regular self-assessment tools leads to ineffective learning outcomes. 

## 🔖 Solution 

Our app, TestTogether, enables users to select quizzes from a curated list of topics while also offering functionality to create their own custom quizzes.

## 💪🏽 Process & Goal

We crafted a simple team manifesto outlining our shared values, principles, and goals to guide us throughout the project 📕

<img width="300" alt="Screenshot 2023-11-19 at 09 14 52" src="https://github.com/SchoolOfCode/bc15-w8-project-back-end-teamtogether/assets/93056794/55e41d42-a881-4b07-b684-2a3fbb2cc060">


We drew up plans for a simple MVP encompassing all the important features for our app. 

With the plans finalised, we started with the design phase by creating a wireframe in Figma 🎨 
Once we were all happy with the design, layout and color scheme for the app, we organized the team into pairs of 3 and started working on different areas of the app. 

## 🤔 What did I learn from it

My understanding of REST APIS, API endpoints and the communication between frontend and backend was reinforced. 
We had a problem with connecting the front-end to the back-end and realised CORS was the culprit. After some digging around, came to the conclusion that we have to use "*" as the origin in the CORS middleware. This allows any website to make requests to our server and retrieve data. 


## 📡 Technologies used

- Design: Figjam & Figma
- Planning: Trello
- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js, Express, ThunderClient
- Testing: Vitest 


## 🛠️ Installation

You will need node and npm installed on your machine.

Clone the repo:

`https://github.com/SchoolOfCode/bc15-w8-project-back-end-teamtogether`

Run `npm install` in the terminal.

Create a `.env` file in the root folder. The environment variables it should have:

- PORT
- DATABASE_CONNECTION_STRING

💡 Start the server using `npm run dev`.


## Improvements

- Allow users to choose level of difficulty, number of questions and time for each quiz
- Implement end-to-end testing via Playwright
- Improve the accessibility of the app 
- Implement user authorization and login feature
- Dynamically generate graphs that display user's quiz results over a period of time



## Demo 




https://github.com/SchoolOfCode/bc15-w8-project-back-end-teamtogether/assets/93056794/fa1588a5-a39b-4202-948c-a2957ad96a63




