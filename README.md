# Andre Wu — Portfolio

A single-page personal portfolio for a full-stack web developer. Modern editorial dark mode built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Editing content

All copy lives in [`content.ts`](./content.ts) at the project root — name, tagline, about paragraph, stack list, projects, experience, and contact links. Edit the strings and arrays there; you never need to touch component code.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

Alternatively, with the [Vercel CLI](https://vercel.com/docs/cli): `vercel`.

## Structure

```
app/
  layout.tsx        # fonts, metadata, Open Graph
  page.tsx          # assembles the sections
  globals.css       # theme tokens (colors, fonts)
components/portfolio/
  hero.tsx          # name, tagline, cursor glow
  about.tsx         # about + stack
  projects.tsx      # project grid
  project-card.tsx  # single project tile
  experience.tsx    # experience rows
  contact.tsx       # contact links
  reveal.tsx        # scroll-in animation helpers
content.ts          # ← all editable copy
```
