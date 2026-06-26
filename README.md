# Haza'ElDevs Portfolio — Next.js

Migrated from React + Vite to Next.js 15 (App Router).

## Stack

- **Next.js 15** — App Router, Server Components, file-based routing
- **React 19**
- **Tailwind CSS v4** + DaisyUI
- **Framer Motion** — animations (client components only)
- **next/font** — replaces Google Fonts `<link>` tags
- **next/image** — automatic image optimisation

## Removed (no longer needed)

| Old | Replaced by |
|---|---|
| `react-router-dom` | Next.js file-based routing |
| `react-helmet-async` | `export const metadata` in each page |
| `generate-sitemap.js` | `app/sitemap.js` (auto-generated) |
| `vite` + plugins | Next.js compiler |
| `vercel.json` SPA rewrites | Not needed — Next.js is SSR |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.js           ← Root layout + site-wide metadata
  page.js             ← Home (/)
  services/page.js    ← /services
  portfolio/page.js   ← /portfolio
  contact/page.js     ← /contact
  sitemap.js          ← Auto-generates /sitemap.xml
  robots.js           ← Auto-generates /robots.txt
  not-found.js        ← 404 page
  globals.css         ← Tailwind + global styles

components/
  ui/
    Navbar.js         ← 'use client' (mobile menu state)
    Footer.js         ← Server Component
  sections/
    Hero.js
    TrustBar.js
    Services.js
    Portfolio.js
    Testimonials.js
    Pricing.js
    CTA.js
```

## Migration steps (per component)

1. Copy your existing JSX into the matching file under `components/sections/`
2. Replace `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`
3. Replace `<img>` with `<Image>` from `next/image` (add `width`, `height`, and `priority` on hero image)
4. Add `'use client'` only to components that use `useState`, `useEffect`, event handlers, or browser APIs
5. Remove any `<Helmet>` usage — metadata is now in each `page.js` file

## Deployment

Push to GitHub and connect to Vercel. The `vercel.json` is minimal — Next.js on Vercel is zero-config.
