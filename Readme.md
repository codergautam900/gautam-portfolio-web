<div align="center">

# Gautam Sagar Portfolio

Premium full stack portfolio platform with a cinematic React frontend and an admin-ready Node + Express + MongoDB backend.

<p>
  <strong>React 19</strong> | <strong>Vite 7</strong> | <strong>Express 5</strong> | <strong>MongoDB</strong> | <strong>Framer Motion</strong>
</p>

</div>

## Overview

This repository contains a polished developer portfolio that can be used in two ways:

- `frontend/` can be deployed as a standalone landing portfolio.
- `backend/` unlocks admin/content APIs for profile, projects, skills, experience, contact handling, and AI-assisted copy enhancement.

The current portfolio experience is rendered from [frontend/src/App.jsx](./frontend/src/App.jsx), while the backend API starts from [backend/server.js](./backend/server.js).

## What Makes It Strong

- Cinematic single-page portfolio UI with layered gradients, motion, and responsive sections
- Direct resume download flow, GitHub visibility, and contact conversion points
- Structured backend for managing profile, projects, skills, and experience data
- Secure admin login flow backed by JWT
- AI endpoint for improving portfolio text using Gemini
- Deployment-friendly env setup for local, preview, and production environments

## Architecture Snapshot

| Layer | Responsibility | Key Files |
| --- | --- | --- |
| Frontend shell | Main portfolio entry, section rendering, resume CTA | [frontend/src/App.jsx](./frontend/src/App.jsx) |
| Frontend styling | Global visual system, layout, responsive rules | [frontend/src/index.css](./frontend/src/index.css) |
| Frontend API client | Shared axios instance, auth token injection, API helpers | [frontend/src/services/api.js](./frontend/src/services/api.js) |
| Backend server | CORS, middleware, route registration, startup lifecycle | [backend/server.js](./backend/server.js) |
| Backend routes | Portfolio CRUD and service endpoints | [backend/routes](./backend/routes) |
| Data models | MongoDB schemas for portfolio entities | [backend/models](./backend/models) |

## Portfolio Experience Map

The landing flow in [frontend/src/App.jsx](./frontend/src/App.jsx) is organized around these core sections:

1. Hero introduction with role-based messaging and immediate CTAs
2. About section that frames background, goals, and execution style
3. Skills and projects sections for technical proof
4. Readiness and GitHub sections for credibility
5. Contact section for conversion
6. Repeated resume download entry points across the page

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
|   |-- package.json
|   `-- server.js
|-- frontend/
|   |-- public/
|   |-- src/
|   |-- .env.example
|   |-- package.json
|   `-- vite.config.js
|-- LICENSE.md
`-- README.md
```

## Quick Start

### Frontend Only

Use this mode if you only want the portfolio landing page.

```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```

Default URL: `http://localhost:5173`

### Full Stack Mode

Run both apps when you want API-backed portfolio content and admin features.

```powershell
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```

Backend default URL: `http://localhost:5000`

In a second terminal:

```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```

## Environment Reference

### Frontend

Use [frontend/.env.example](./frontend/.env.example) as the base file.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_BACKEND_URL` | Only for API-backed mode | Base URL of the deployed or local backend |

### Backend

Use [backend/.env.example](./backend/.env.example) as the base file.

| Variable | Required | Purpose |
| --- | --- | --- |
| `MONGODB_URL` | Yes | MongoDB connection string |
| `SECRET_TOKEN_KEY` | Yes | JWT signing secret |
| `ADMIN_EMAIL` | Yes | Seeded admin login email |
| `ADMIN_PASSWORD` | Yes | Seeded admin login password |
| `MY_EMAIL` | For contact mail | Sender email used by Nodemailer |
| `MY_PASSWORD` | For contact mail | Sender email password or app password |
| `CORS_ORIGINS` | Recommended | Comma-separated allowed frontend origins |
| `CLOUDINARY_CLOUD_NAME` | For uploads | Cloudinary storage config |
| `CLOUDINARY_API_KEY` | For uploads | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | For uploads | Cloudinary API secret |
| `GEMINI_API_KEY` | For AI endpoint | Enables copy enhancement endpoint |

## Resume Management

The live download button in the frontend points to:

- [frontend/public/Gautam-Sagar-Resume.pdf](./frontend/public/Gautam-Sagar-Resume.pdf)

To update the resume later, replace that file while keeping the same filename so every CTA continues to work without code changes.

## API Surface

| Route Prefix | Purpose |
| --- | --- |
| `/api/auth` | Admin login, auth status, initialization |
| `/api/user/profile` | Profile fetch and update |
| `/api/projects` | Project CRUD |
| `/api/experiences` | Experience and education CRUD |
| `/api/skills` | Skill CRUD and category grouping |
| `/api/contact` | Contact form submission |
| `/api/ai/enhance` | Gemini-powered text enhancement |

## Deployment Playbook

### Frontend

1. Deploy the `frontend/` directory to Vercel or Netlify.
2. Set `VITE_BACKEND_URL` if the backend is also deployed.
3. Use `npm run build` as the build command.
4. Use `dist/` as the publish directory.

### Backend

1. Deploy the `backend/` directory to Render, Railway, or another Node host.
2. Configure environment variables from [backend/.env.example](./backend/.env.example).
3. Use `npm start` as the production start command.
4. Verify the health route at `GET /`.

### Final Checks

1. Confirm the frontend loads without console errors.
2. Confirm backend health returns success.
3. Confirm `CORS_ORIGINS` includes the deployed frontend URL exactly.
4. Test admin authentication before sharing the dashboard.
5. Test contact email flow only after SMTP credentials are configured.

## Customization Hotspots

- Update personal branding copy in [frontend/src/App.jsx](./frontend/src/App.jsx)
- Refresh styling and theming in [frontend/src/index.css](./frontend/src/index.css)
- Replace images inside [frontend/src/assets](./frontend/src/assets)
- Adjust API behavior or auth flows in [frontend/src/services/api.js](./frontend/src/services/api.js)
- Expand backend business logic in [backend/controllers](./backend/controllers)

## Troubleshooting

- If the frontend cannot reach the API, check `VITE_BACKEND_URL` and confirm the backend is running.
- If requests fail in production, confirm `CORS_ORIGINS` includes the exact frontend domain.
- If contact submission fails, verify `MY_EMAIL` and `MY_PASSWORD`.
- If image upload fails, verify Cloudinary credentials.
- If admin login does not work after deployment, confirm `ADMIN_EMAIL` and `ADMIN_PASSWORD` were set before the backend started.

## License

Released under the ISC license. See [LICENSE.md](./LICENSE.md).
