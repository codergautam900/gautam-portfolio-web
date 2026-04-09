<div align="center">

# Frontend Portfolio Experience

Modern developer portfolio frontend with a premium visual language, responsive layout, Framer Motion interactions, and a deploy-ready Vite setup.

<p>
  <strong>React 19</strong> | <strong>Vite 7</strong> | <strong>Framer Motion</strong> | <strong>Responsive premium UI</strong>
</p>

</div>

## What This Frontend Includes

- Premium hero section with animated type treatment and layered depth panel
- Strong responsive layout for desktop, tablet, and mobile
- Light and dark theme toggle with saved user preference
- Downloadable resume, GitHub profile surfacing, and direct contact CTA
- Clean single-entry app flow powered by [src/App.jsx](./src/App.jsx)

## Core Files

| File | Role |
| --- | --- |
| [src/App.jsx](./src/App.jsx) | Main portfolio experience |
| [src/index.css](./src/index.css) | Full visual system and responsive styling |
| [src/services/api.js](./src/services/api.js) | Shared API client and backend base URL |
| [public/Gautam-Sagar-Resume.pdf](./public/Gautam-Sagar-Resume.pdf) | Downloadable resume asset |

## Local Run

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Default local URL: `http://localhost:5173`

## Environment

Create `frontend/.env` from [frontend/.env.example](./.env.example).

| Variable | Purpose | Example |
| --- | --- | --- |
| `VITE_BACKEND_URL` | Base URL for the backend API when admin or CMS endpoints are used | `http://localhost:5000` |

## Build For Production

```powershell
npm run build
npm run preview
```

The production bundle is generated inside `dist/`.

## Deploy Notes

1. Deploy this `frontend/` folder to Vercel or Netlify.
2. Add `VITE_BACKEND_URL` in the hosting dashboard if you are also deploying the backend.
3. If you only need the portfolio landing page, the frontend can be deployed standalone.

## Design Direction

This frontend intentionally avoids generic template styling. It leans into:

- cinematic gradients and ambient glow
- glassmorphism cards with strong depth
- expressive typography
- motion that supports hierarchy instead of distracting from content
