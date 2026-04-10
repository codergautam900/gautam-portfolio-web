<div align="center">

# Frontend Portfolio Experience

High-impact React portfolio frontend built for a premium first impression, strong mobile responsiveness, and clear conversion paths.

<p>
  <strong>React 19</strong> | <strong>Vite 7</strong> | <strong>Framer Motion</strong> | <strong>Responsive UI</strong>
</p>

</div>

## Overview

This frontend powers the main portfolio landing experience and can run independently from the backend when you only need the public-facing site.

The active entry is [src/App.jsx](./src/App.jsx), which renders the full single-page portfolio experience.

## Section Breakdown

The current UI includes:

- Hero area with primary CTAs and resume access
- About section with education, goals, and value proposition
- Skills and projects sections for technical proof
- GitHub and readiness sections for credibility
- Contact section for direct outreach
- Footer-level resume access so the download remains reachable from multiple points

## Core Files

| File | Role |
| --- | --- |
| [src/App.jsx](./src/App.jsx) | Main single-page portfolio experience |
| [src/index.css](./src/index.css) | Visual system, layout, theme, and responsive rules |
| [src/services/api.js](./src/services/api.js) | Shared API client and helper modules |
| [public/Gautam-Sagar-Resume.pdf](./public/Gautam-Sagar-Resume.pdf) | Downloadable resume asset used by CTA buttons |
| [public/favicon-logo.png](./public/favicon-logo.png) | Browser tab icon |

## Local Development

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Default local URL: `http://localhost:5173`

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Environment

Create `.env` from [./.env.example](./.env.example).

| Variable | Required | Purpose | Example |
| --- | --- | --- | --- |
| `VITE_BACKEND_URL` | Only if API-backed features are used | Backend base URL for portfolio CMS endpoints | `http://localhost:5000` |

If this value is not set, the app falls back to `http://localhost:5000`.

## Resume Updates

The frontend download buttons point to:

- [public/Gautam-Sagar-Resume.pdf](./public/Gautam-Sagar-Resume.pdf)

To replace the resume later, swap that file while keeping the same filename. This keeps every existing resume CTA working automatically.

## Design Direction

This frontend intentionally leans into a premium visual treatment instead of a generic template:

- layered gradients and ambient glow
- strong visual hierarchy and card depth
- animated transitions that support the reading flow
- responsive spacing tuned for desktop and mobile

## Customization Guide

- Update personal copy, links, roles, and CTA text in [src/App.jsx](./src/App.jsx)
- Adjust color system, layout, and responsive behavior in [src/index.css](./src/index.css)
- Replace local images inside [src/assets](./src/assets)
- Point the frontend to a deployed backend by updating `VITE_BACKEND_URL`

## Build And Deploy

```powershell
npm run build
npm run preview
```

The production bundle is generated inside `dist/`.

Deployment flow:

1. Deploy this `frontend/` directory to Vercel or Netlify.
2. Add `VITE_BACKEND_URL` in the hosting dashboard if backend APIs are enabled.
3. Verify resume download, section navigation, and contact/API flows after deployment.

## Notes

- The repo also contains older route-based pages under [src/pages](./src/pages) and [src/routes](./src/routes), but the current landing experience ships from [src/App.jsx](./src/App.jsx).
- If you only need the portfolio showcase, this frontend can be deployed without the backend.
