# Portfolio App

A full-stack developer portfolio built with React + Vite on the frontend and Express + MongoDB on the backend. It includes a public portfolio website, a protected admin dashboard to manage content, Cloudinary-based image uploads, contact mail handling, and a Gemini-powered text enhancement helper for admin workflows.

## Live Links

- Live Demo: https://portfolio-built-by-gaurav.vercel.app
- Backend API: https://my-portfolio-uac7.onrender.com

## Highlights

- Responsive portfolio with dedicated pages for Home, About, Skills, Experience, Projects, and Contact
- Animated UI with intro screen, custom cursor, particles background, gradients, and Framer Motion transitions
- Protected admin dashboard for managing profile, projects, experience, and skills
- JWT-based admin authentication
- Project and profile image uploads using Multer + Cloudinary
- Contact form with message persistence and email delivery via Nodemailer
- Gemini-powered text enhancement endpoint for skill names and professional descriptions
- MongoDB-backed content management for portfolio sections

## Tech Stack

### Frontend

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 4
- Framer Motion
- Axios
- React Toastify
- React Icons

### Backend

- Node.js
- Express 5
- MongoDB + Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- Nodemailer
- Google Gemini API

## Project Structure

```text
PORTFOLIO APP/
|-- backend/
|   |-- config/
|   |   |-- cloudinary.js
|   |   |-- db.js
|   |   |-- env.js
|   |   `-- seeder.js
|   |-- controllers/
|   |   |-- ai.controller.js
|   |   |-- auth.controller.js
|   |   |-- contact.controller.js
|   |   |-- experience.controller.js
|   |   |-- profile.controller.js
|   |   |-- project.controller.js
|   |   `-- skill.controller.js
|   |-- middleware/
|   |   |-- auth.middleware.js
|   |   `-- error.middleware.js
|   |-- models/
|   |   |-- Contact.model.js
|   |   |-- Experience.model.js
|   |   |-- Profile.model.js
|   |   |-- Project.model.js
|   |   |-- Skill.model.js
|   |   `-- User.model.js
|   |-- routes/
|   |   |-- ai.routes.js
|   |   |-- auth.routes.js
|   |   |-- contact.routes.js
|   |   |-- experience.routes.js
|   |   |-- profile.routes.js
|   |   |-- project.routes.js
|   |   `-- skill.routes.js
|   `-- server.js
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- assets/
|   |   |-- components/
|   |   |-- context/
|   |   |-- forms/
|   |   |-- pages/
|   |   |-- routes/
|   |   |-- services/
|   |   |-- App.jsx
|   |   |-- index.css
|   |   `-- main.jsx
|   |-- index.html
|   `-- package.json
`-- README.md
```

## Main Features

### Public Website

- Hero section with animated intro experience
- About page with profile image, education, and social links
- Skills page with categorized skills and icon-based presentation
- Experience timeline for work and education entries
- Projects showcase with category filtering, tech stacks, GitHub links, and live demo links
- Contact page with form submission and feedback toasts

### Admin Dashboard

- Secure login flow for admin access
- Manage profile details and profile image
- Create, update, and delete projects
- Create, update, and delete experience entries
- Create, update, and delete skills
- Quick links to portfolio pages from the dashboard

### Backend Capabilities

- Portfolio content stored in MongoDB
- Cloudinary integration for uploaded media
- Automated admin seeding from environment variables
- Centralized error handling
- Protected routes with bearer token authentication
- Gemini endpoint for polishing text inside admin workflows

## API Overview

Base URL:

- Local: `http://localhost:5000`
- Production: `https://my-portfolio-uac7.onrender.com`

### Health

- `GET /` - API health check

### Contact

- `POST /api/contact` - send a message and store it in the database

### Profile

- `GET /api/user/profile` - fetch portfolio profile data
- `POST /api/user/profile` - create or update profile data with optional image upload

### Projects

- `GET /api/projects` - fetch all projects
- `GET /api/projects?category=Frontend` - filter projects by category
- `POST /api/projects` - create a project with optional image upload
- `PUT /api/projects/:id` - update a project
- `DELETE /api/projects/:id` - delete a project

### Experience

- `GET /api/experiences` - fetch all experience entries
- `GET /api/experiences?type=work` - filter by `work` or `education`
- `POST /api/experiences` - create an experience entry
- `PUT /api/experiences/:id` - update an experience entry
- `DELETE /api/experiences/:id` - delete an experience entry

### Skills

- `GET /api/skills` - fetch all skills and grouped categories
- `POST /api/skills` - create a skill
- `PUT /api/skills/:id` - update a skill
- `DELETE /api/skills/:id` - delete a skill

### AI

- `POST /api/ai/enhance` - enhance text using Gemini

Example request body:

```json
{
  "text": "react js",
  "contextType": "skill"
}
```

### Auth

- `POST /api/auth/login` - admin login
- `GET /api/auth/me` - get current logged-in admin
- `GET /api/auth/init` - one-time admin initialization route

## Environment Variables

### Backend `.env`

Create `backend/.env`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URL=your_mongodb_connection_string
MY_EMAIL=your_email@gmail.com
MY_PASSWORD=your_email_app_password
SECRET_TOKEN_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GEMINI_API_KEY=your_gemini_api_key
ADMIN_PASSWORD=your_admin_password
```

Notes:

- `MY_EMAIL` is used as the admin email seed and also as the receiver for contact form emails.
- `MY_PASSWORD` is used for mail transport.
- `ADMIN_PASSWORD` is used to seed or sync the admin account at server startup.

### Frontend `.env`

Create `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

For production, this project currently points to:

```env
VITE_BACKEND_URL=https://my-portfolio-uac7.onrender.com
```

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "PORTFOLIO APP"
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4. Start the backend

```bash
cd ../backend
npm run dev
```

### 5. Start the frontend

```bash
cd ../frontend
npm run dev
```

### 6. Open the app

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Available Scripts

### Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Backend

```bash
npm run dev
npm start
```

## Data Models

### Profile

- Name, professional title, location, email, phone, availability
- About text
- Social links
- Education array
- Profile image

### Project

- Title, description, image
- Category
- Tech stack
- GitHub link
- Live demo link
- Display order

### Experience

- Type: `work` or `education`
- Title, company, location, period
- Description
- Technologies
- Display order

### Skill

- Name
- Color
- Category
- Display order

## Deployment Notes

- Frontend is configured for Vercel deployment
- Backend is configured for Render deployment
- CORS currently allows:
- `https://portfolio-built-by-gaurav.vercel.app`
- `https://my-portfolio-uac7.onrender.com`

## Author

Gaurav Gautam
