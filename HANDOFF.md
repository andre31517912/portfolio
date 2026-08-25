# Handoff — Alpha & Omega Computer project entry

Context for whoever picks this up next (Claude or otherwise). Written after the
`alpha-and-omega` branch work on `andre31517912/portfolio`.

## Repo state

- **Branch:** `alpha-and-omega` (pushed to `origin`, working tree clean)
- **Base branch:** `main` — the two commits below are **not yet merged**
- **Framework:** Next.js App Router, Tailwind, pnpm

Relevant commits:

| Commit | Description |
| --- | --- |
| `8af8782` | Added `liveUrl: "https://test.aocit.com"` to the Alpha & Omega project |
| `70e9a4c` | Replaced the placeholder hero + added a 2-image gallery and screenshots |

## What was done

1. **Linked the live site.** The Alpha & Omega entry previously had only a
   `codeUrl`, so the detail page showed no "Visit live site" button. Added
   `liveUrl: "https://test.aocit.com"`.

2. **Replaced the hero image.** `public/projects/aoc-website-hero.png` was a
   generic laptop mockup. It is now a real screenshot of the AOC homepage
   (dark navy hero, "Customized ERP systems and warehouse management
   solutions", stat counters, technology-partner chips).

3. **Added a gallery.** Two more real screenshots, wired into the `gallery`
   array on the project:
   - `public/projects/aoc-website-about.png` — About page (mission section,
     stat cards, industries-served carousel)
   - `public/projects/aoc-website-insights.png` — Insights page (client
     story / blog card grid, recent-posts sidebar, "Have a project?" CTA)

## How the content model works

Everything about a project lives in **`content.ts`** — there is no CMS or
database. The types are at the top of that file:

```ts
export type GalleryImage = {
  src: string
  alt: string
  caption?: string   // shown under the image on the detail page
}

export type Project = {
  slug: string        // powers /projects/<slug>
  name: string
  description: string
  stack: string[]
  heroImage: string   // card cover AND detail-page hero
  liveUrl?: string
  codeUrl?: string
  tagline?: string
  role?: string
  timeline?: string
  overview?: string[]                              // paragraphs
  highlights?: string[]                            // bullet outline
  technical?: { label: string; detail: string }[]
  gallery?: GalleryImage[]                         // hero is prepended automatically
  credentials?: { email: string; password: string; note?: string }
}
```

Projects are grouped into exported tier arrays (`projectsTier1`, etc.), which
control card size and layout density on the homepage.

Consumers to be aware of:

- `app/projects/[slug]/page.tsx` — builds the gallery as
  `[{ src: heroImage, ... }, ...(project.gallery ?? [])]`, so **do not repeat
  the hero inside `gallery`**. It also treats `'#'` as "no link": buttons are
  hidden when a URL is missing *or* equal to `'#'`.
- `components/portfolio/project-card.tsx` — renders the card cover from
  `heroImage`, falling back to `/placeholder.svg`.
- `components/portfolio/project-gallery.tsx` — the horizontal, swipeable
  gallery component.

## Conventions worth following

- Screenshots live in `public/projects/` and are named
  `<slug>-<page>.png` (e.g. `aoc-website-about.png`). The cover is
  `<slug>-hero.png`.
- Referenced from code by local path (`/projects/foo.png`), never a blob or
  external URL.
- Every gallery image gets a **descriptive `alt`** (what is actually visible,
  for screen readers) plus a short human-facing `caption`. These serve
  different purposes — do not duplicate one into the other.
- The `wms` project (around line 354 in `content.ts`) is the reference example
  of a fully populated multi-image entry. Match its shape.

## Suggested next steps

Nothing here is broken; these are the open threads:

1. **Open a PR to `main`.** The work is sitting on `alpha-and-omega` and has
   not been merged. This is the main outstanding action.
2. **Confirm `test.aocit.com` is the intended public URL.** It reads like a
   staging/test subdomain. If AOC later launches on the apex domain, update
   `liveUrl`. Also worth a quick check that it resolves publicly and is not
   behind basic auth or a "Password Required" screen — the screenshots show a
   chat widget and full nav, so it appeared live at the time of writing.
3. **Consider more AOC screenshots.** The site also has Services, Industries,
   and Contact pages that are not captured yet. Only add them if they show
   something the existing three do not.
4. **Other entries still have placeholder links.** Several projects use
   `liveUrl: '#'` (judien, sublethub, rhythm-renew, trek, spotify-browser,
   hand-gestured-web-alarm). They render as hidden buttons, which is fine, but
   they are candidates for real URLs or removal.
5. **Verify in a browser after changes.** Check `/projects/aoc-website` and the
   homepage card at desktop and mobile widths — the screenshots are wide
   16:9-ish captures, so confirm the cover crop still reads well in the card.
