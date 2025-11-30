AI Proposal Builder — Case Study Project

A mini full-stack AI tool designed to generate professional client proposals instantly from minimal user inputs.

This project was built as part of the Lunim Studio – Stage 2 Engineering Case Study, completed under an 8-hour challenge constraint.

🚀 Features

Instant Generation: AI-generated professional project proposals in seconds.

Minimalist Design: Clean, intuitive, and minimal user interface.

Intelligent Core: Leverages the power of the OpenAI Chat Completion API for quality content generation.

Full-Stack Architecture: Separated frontend and backend for robust development and deployment.

Rapid Development: Designed and built under an aggressive time constraint (8-hour challenge).

Deployment Ready: Configured for seamless deployment on modern hosting platforms (Vercel & Render).

🧩 Tech Stack

Component

Technology

Description

Frontend

React + Vite

Fast and modern user interface development.

Backend

Node.js + Express

Simple, unopinionated backend server for handling API calls.

AI Layer

OpenAI Chat API

The engine for generating context-aware proposals.

Styling

Custom CSS

Focused, clean, and minimal styling.

Deployment

Vercel (Frontend) & Render (Backend)

CI/CD and hosting solutions.

⚙️ Local Setup Instructions

Follow these steps to run the AI Proposal Builder locally.

Prerequisites

Node.js (LTS recommended)

An OpenAI API Key

1️⃣ Backend Setup

Navigate to the backend directory, install dependencies, and start the server.

cd backend
npm install
node index.js


Configuration:

Create a file named .env in the backend directory and add your configuration variables:

OPENAI_API_KEY=your_api_key
PORT=4000


The backend server will run at http://localhost:4000.

2️⃣ Frontend Setup

Navigate to the frontend directory, install dependencies, and start the development server.

cd frontend
npm install
npm run dev


The frontend application will run at: http://localhost:5173

🌐 Deployment Guide

This project is structured for easy deployment with services like Vercel (Frontend) and Render (Backend).

🔹 Frontend (Vercel)

Push your entire repository to GitHub.

Import the project into Vercel.

Set the Root Directory to frontend.

Add the necessary environment variable:

Name: VITE_API_URL

Value: https://your-backend-url.onrender.com (Replace with your actual Render URL).

Click Deploy.

🔹 Backend (Render)

Create a New Web Service on Render, connecting it to your GitHub repository.

Set the Root Directory to backend.

Set the Build Command to:

npm install


Set the Start Command to:

npm start


Add the necessary environment variable:

Name: OPENAI_API_KEY

Value: your_openai_key

Click Deploy.

🧪 How to Use

Once the application is running (either locally or deployed):

Open the frontend URL in your browser.

Fill in the required inputs on the form:

Select the Project Category (e.g., Website, Mobile App, Branding).

Enter the Client/Company Name.

Provide a One-line Goal for the project.

Add the Budget (optional).

Click the "Generate Proposal" button.

The AI will instantly return a complete, structured project proposal in the designated output are
