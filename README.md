Fallon Studio Internship Assignment

Submission for the Junior Developer Internship
Thank you for the opportunity to complete this assignment. This project is a full-stack web application that serves as a to-do manager and features an integrated large language model (LLM) interface. It is built using the MERN stack with Next.js for the frontend, demonstrating a range of skills from database management to secure API integration.

Features
To-Do Manager: A single-page application that allows users to add, update, mark as complete, and delete tasks. Progress is tracked and displayed visually.

User Persistence: Uses localStorage to remember the user's name, providing a personalized experience.

Data Persistence: To-do items are stored in a MongoDB database, which is accessed via a Node.js/Express.js backend API.

LLM Integration: Includes a dedicated "Ask Anything" section where a user can ask a question and receive a basic answer from the Google Gemini API.

Secure API Handling: The Gemini API key is securely stored on the backend, preventing its exposure to the public, which is a critical security best practice.

Responsive UI: The frontend is built with Next.js/React and styled using Tailwind CSS for a modern, mobile-friendly design.

Technologies Used
Frontend: Next.js, React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (using Mongoose ODM)

LLM API: Google Gemini API

Deployment/Hosting: Designed to be easily containerized and deployed.

How to Run It Locally
Prerequisites
Node.js (v18 or higher)

npm or yarn

MongoDB: A local instance of MongoDB running on port 27017 or a connection string from a cloud service like MongoDB Atlas.

Google Gemini API Key: You can obtain a free key from the Google AI Studio.

Step 1: Clone the Repository
Clone this project to your local machine:

git clone YOUR_GITHUB_REPO_LINK
cd fallon-studio-assignment

Step 2: Set Up the Backend
Navigate to the backend directory.

cd backend

Install the required Node.js packages.

npm install

Create a .env file in the backend directory and add your MongoDB URI and Gemini API key.

MONGODB_URI=mongodb://localhost:27017/todo-app
GEMINI_API_KEY=get one here -> (https://aistudio.google.com/app)

Note: If you are using MongoDB Atlas, replace the MONGODB_URI with your connection string.

Start the backend server.

node App.js

You should see a confirmation message that the server is running on http://localhost:3002. Keep this terminal running.

Step 3: Set Up the Frontend
Open a new terminal window and navigate to the frontend directory.

cd ../frontend

Install the required Node.js packages.

npm install

Start the Next.js development server.

npm run dev

Open your web browser and go to http://localhost:3000.

The application should now be fully functional. You can use the To-Do Manager and ask questions to the Gemini LLM.