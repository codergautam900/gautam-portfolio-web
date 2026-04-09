<div align="center">

# Gautam Sagar Portfolio

Premium developer portfolio built with a polished React + Vite frontend and a Node + Express + MongoDB backend for admin-ready content management.

<p>
  <strong>Responsive UI</strong> | <strong>Theme toggle</strong> | <strong>REST API</strong> | <strong>Deploy-ready env setup</strong>
</p>

</div>

## Overview

This repository contains a portfolio platform split into two deployable apps:

- `frontend/` ships the premium landing experience rendered from `src/App.jsx`.
- `backend/` provides authenticated portfolio APIs for profile, projects, skills, experience, contact messages, and AI-assisted text enhancement.

If you only want to deploy the landing page, the frontend can run on its own. If you want admin/content APIs, deploy both apps and connect them with `VITE_BACKEND_URL`.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Frontend | React 19, Vite 7, Framer Motion, React Icons, custom CSS |
| Backend | Node.js, Express 5, MongoDB, Mongoose, JWT |
| Media / Messaging | Cloudinary, Nodemailer |
| AI | Gemini API |
| Deployment | Vercel / Netlify for frontend, Render / Railway / VPS for backend |

## Highlights

- Premium single-page portfolio UI with strong visual hierarchy, motion, and mobile responsiveness
- Light and dark theme support with local preference persistence
- GitHub profile surfacing, downloadable resume, and direct contact CTA
- Admin-capable backend for updating profile, projects, experience, and skills
- Deployment-focused configuration with env examples, CORS control, and safer admin seeding

## Project Structure

```text
my-portfolio/
|-- backend/
|   |-- config/
|   |-- controllers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- .env.example
|   `-- server.js
|-- frontend/
|   |-- public/
|   |-- src/
|   |-- .env.example
|   `-- vite.config.js
|-- LICENSE.md
`-- README.md
```

## Local Development

### 1. Backend

```powershell
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```

Backend defaults to `http://localhost:5000`.

### 2. Frontend

```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```

Frontend defaults to `http://localhost:5173`.

## Environment Files

### `backend/.env`

Use [backend/.env.example](./backend/.env.example) as the template.

Important variables:

- `MONGODB_URL`: MongoDB connection string
- `SECRET_TOKEN_KEY`: JWT signing secret
- `MY_EMAIL` / `MY_PASSWORD`: SMTP sender credentials for contact emails
- `ADMIN_EMAIL` / `ADMIN_PASSWORD`: admin account used for automatic seeding
- `CORS_ORIGINS`: comma-separated frontend URLs allowed to call the API
- `CLOUDINARY_*`: required only when image uploads are used
- `GEMINI_API_KEY`: required only when AI enhancement endpoints are used

### `frontend/.env`

Use [frontend/.env.example](./frontend/.env.example) as the template.

- `VITE_BACKEND_URL`: deployed backend base URL, for example `https://your-api.onrender.com`

## Deployment Checklist

### Frontend

1. Deploy the `frontend/` folder to Vercel or Netlify.
2. Set `VITE_BACKEND_URL` to your live backend URL.
3. Build command: `npm run build`
4. Output directory: `dist`

### Backend

1. Deploy the `backend/` folder to Render, Railway, or your preferred Node host.
2. Set all required environment variables from [backend/.env.example](./backend/.env.example).
3. Start command: `npm start`
4. Confirm the health route returns success at `GET /`

### After Deploy

1. Verify frontend loads without console errors.
2. Verify `GET /` on the backend returns the API health payload.
3. Confirm `CORS_ORIGINS` contains the exact deployed frontend URL.
4. Test admin login if you plan to use backend content management.
5. Test contact flow and image upload only after SMTP and Cloudinary credentials are configured.

## API Surface

| Route Group | Purpose |
| --- | --- |
| `/api/auth` | Admin login and authenticated user lookup |
| `/api/user/profile` | Portfolio profile fetch/update |
| `/api/projects` | Project CRUD |
| `/api/experiences` | Experience and education CRUD |
| `/api/skills` | Skill CRUD |
| `/api/contact` | Contact form submission |
| `/api/ai/enhance` | AI-assisted text enhancement |

## Production Notes

- Admin initialization no longer falls back to insecure default credentials. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` explicitly before deploying.
- Contact email delivery depends on valid SMTP credentials in `MY_EMAIL` and `MY_PASSWORD`.
- The current polished landing page lives in [frontend/src/App.jsx](./frontend/src/App.jsx) and styling is centered in [frontend/src/index.css](./frontend/src/index.css).

## License

Released under the ISC license. See [LICENSE.md](./LICENSE.md).
