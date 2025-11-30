# AI Proposal Builder — One-Day Case Study Prototype

A simple AI-powered tool that generates complete project proposals using just a few inputs.  
Built as part of a **one-day case study challenge** — focused on clean UI, fast execution, and practical AI integration.

---

## 🚀 Features

- Generate full proposals (Executive Summary → Deliverables → Pricing)  
- Clean and minimal React UI  
- Fast Node.js backend with OpenAI integration  
- Works across industries (tech, retail, services, etc.)  
- Ready for deployment on **Vercel (frontend)** and **Render (backend)**

---

## 🧰 Tech Stack

- **Frontend:** React + Vite  
- **Backend:** Node.js + Express  
- **AI:** OpenAI Chat Completions API  
- **Styling:** Custom CSS  
- **Deployment:** Vercel (frontend) + Render (backend)

---

## 📁 Project Structure

root/
├── frontend/ (React + Vite)
│ ├── src/
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── index.css
│ │ └── main.jsx
│ └── package.json
└── backend/ (Node + Express)
├── index.js
├── package.json
└── .env (ignored)



---

## ⚙️ Local Setup

### 1️⃣ Backend
```bash
cd backend
npm install
# Create a .env file (do NOT commit this file)
# Example .env:
# OPENAI_API_KEY=your_key_here
# PORT=4000
npm run dev

local_setup:
  frontend:
    commands:
      - cd frontend
      - npm install
      - npm run dev
    open_in_browser:
      frontend: "http://localhost:5173"
      backend: "http://localhost:4000"

deployment:
  frontend_vercel:
    steps:
      - "Push the project to GitHub"
      - "Import repository into Vercel"
      - "Set Root Directory to /frontend"
      - add_environment_variable:
          VITE_API_URL: "https://<your-backend-url>"
      - "Deploy"

  backend_render:
    steps:
      - "Create new Web Service on Render"
      - "Set Root Directory to /backend"
      - build_command: "npm install"
      - start_command: "npm start"
      - add_environment_variable:
          OPENAI_API_KEY: "<your_openai_key>"
      - "Deploy"

how_to_use:
  - "Open the frontend app"
  - "Select project type"
  - "Enter client/company name"
  - "Enter goals and optional budget"
  - "Click Generate Proposal"
  - "AI generates full proposal"

screenshots_optional:
  recommended:
    - "ChatGPT prompts used during development"
    - "VS Code folder structure"
    - "Backend terminal showing: Backend listening on 4000"
    - "Frontend UI form"
    - "Generated proposal output"
  folder_example:
    - "/screenshots/frontend-ui.png"
    - "/screenshots/generated-proposal.png"

about_purpose:
  demonstrates:
    - "Quick full-stack prototype building"
    - "Clean UI/UX decisions"
    - "OpenAI integration"
    - "Deployable architecture (Vercel + Render)"
    - "Practical, real-world usage"

contact:
  name: "Ayush Kumar"
  email: "your-email@example.com"
  linkedin: "https://www.linkedin.com/in/your-link"


