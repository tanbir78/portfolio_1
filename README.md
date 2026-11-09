# Tanbir Hasan Jewel — Developer Portfolio

Responsive portfolio with floating particles, animated project cards, and Day/Night themes.

## Features
- Responsive desktop and mobile layout
- Pull-cord theme switch; preference saved locally
- Warm ivory Day Mode and deep-indigo Night Mode
- Colorful floating particles and gentle motion
- About, Work, Skills, Education, Blog, and Contact
- Soft pastel contact cards and animated project cards
- SEO metadata, sitemap, robots.txt, RSS, and accessibility support

## Tech Stack
Next.js App Router · React · TypeScript · Tailwind CSS v4 · Lucide React

## Requirements
Node.js 20.9+ and npm.

## Run Locally
```bash
npm install
npm run dev
```
Open http://localhost:5000.

## Commands
```bash
npm run dev       # Development server on port 5000
npm run build     # Production build
npm start         # Production server on port 5000
npm run lint      # ESLint
npm run typecheck # TypeScript check
```

## Customize
- `src/content/profile.ts` — name, bio, skills, education, contact links
- `src/content/projects.ts` — project descriptions, stacks, and URLs
- `public/images/` — replace sample profile artwork with your photo
- `public/projects/` — replace sample artwork with project screenshots
- `src/app/globals.css` — colors, cards, and animations
- `content/blog/` — Markdown blog posts

## Theme Colors
Day: `#FBFAF8` background · `#24232B` text · `#E8E4E8` border.
Night: `#11121A` background · `#F4F1F8` text · `#302D3B` border.
Accent: lavender `#8B78D6` (Day) · `#B7A5FF` (Night).
Contact cards use gentle lilac, sky blue, peach, and mint tones.

## Deploy
Push to GitHub, import into Vercel, and deploy.
Set `NEXT_PUBLIC_SITE_URL` to your public website URL.
Local commands use port 5000; Vercel manages the production port.

## Before Publishing
Add your real photo, university, email, GitHub/LinkedIn URLs, and project links.
Replace sample artwork with screenshots and verify all project descriptions.

---
Made with care by **Tanbir Hasan Jewel** · Bangladesh
# portfolio_1
