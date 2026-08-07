/**
 * Edit everything about the site's copy here.
 * No need to touch any component code — change the strings/arrays below
 * and the page updates automatically.
 */

export const site = {
  name: "Andre Wu",
  role: "Full-stack developer",
  // Used for <title>, meta description, and Open Graph.
  metaTitle: "Andre Wu — Full-stack developer",
  metaDescription:
    "Andre Wu is a full-stack web developer building software that ships. React, Next.js, TypeScript, Node, and PostgreSQL.",
  url: "https://andrewu.dev",
}

export const hero = {
  name: "Andre Wu",
  tagline: "Full-stack developer building software that ships.",
}

export const about = {
  // 2–3 sentences. Keep it tight.
  paragraph:
    "I'm an early-career full-stack developer who has shipped production apps for real users — from event platforms to student marketplaces. I care about clean architecture, fast interfaces, and code that holds up after launch. I'm looking for a junior-to-mid role where I can keep shipping.",
  // Small stack list on the right. Edit freely.
  stack: ["React", "Next.js", "TypeScript", "Node", "PostgreSQL", "Prisma"],
}

export type GalleryImage = {
  src: string
  alt: string
  // Optional short caption shown under the image on the detail page.
  caption?: string
}

export type Project = {
  // URL-safe id. Powers the detail page at /projects/<slug>.
  slug: string
  name: string
  description: string
  stack: string[]
  // Card cover + detail page hero image.
  heroImage: string
  // Omit a URL (or leave it empty) to hide that button.
  liveUrl?: string
  codeUrl?: string

  // ----- Detail page content (all optional) -----
  // Shown under the title on the detail page.
  tagline?: string
  role?: string
  timeline?: string
  // Longer, paragraph-by-paragraph write-up.
  overview?: string[]
  // "Outline" — bullet list of what the project does / key features.
  highlights?: string[]
  // Deeper technical breakdown, each with a short label + explanation.
  technical?: { label: string; detail: string }[]
  // Extra images (the hero is shown automatically first).
  gallery?: GalleryImage[]
  // Optional gated demo credentials. Rendered blurred behind a lock so
  // viewers must email you (contact.email) to actually read them.
  credentials?: { email: string; password: string; note?: string }
}

// TIER 1 — Full-Stack Web. Large cards, 2 per row on desktop.
export const projectsTier1: Project[] = [
  {
    slug: "judien",
    name: "Judien",
    description:
      "Event RSVP platform for a Rotary International chapter in Taiwan. Co-built with a partner.",
    stack: ["React", "TypeScript", "Vercel"],
    heroImage: "/projects/judien-hero.png",
    liveUrl: "#",
    codeUrl: "#",
    tagline: "Event RSVP platform for a Rotary International chapter.",
    role: "Full-stack developer (co-built with a partner)",
    timeline: "2023",
    overview: [
      "Judien is an event RSVP platform built for a Rotary International chapter in Taiwan. Members receive an invite link, view event details in their language, and confirm attendance in a couple of taps.",
      "I co-built it with a partner, owning the frontend architecture and the deployment pipeline while we shared the data model. It's used to coordinate real chapter events.",
    ],
    highlights: [
      "Public event pages with date, location, and a one-tap RSVP flow.",
      "Guest list and headcount that update as members respond.",
      "Mobile-first layout — most members RSVP from their phones.",
      "Shareable invite links, no account required to respond.",
    ],
    technical: [
      {
        label: "Frontend",
        detail:
          "React + TypeScript single-page app with a component-driven layout and typed data models shared across views.",
      },
      {
        label: "Hosting & CI",
        detail:
          "Deployed on Vercel with preview deployments on every push so my partner and I could review changes before shipping.",
      },
      {
        label: "Collaboration",
        detail:
          "Split ownership across frontend and data model using a feature-branch workflow and PR review.",
      },
    ],
  },
  {
    slug: "sublethub",
    name: "SubletHub",
    description:
      "UCI student sublease marketplace with JWT auth, @uci.edu verification, real-time messaging, and admin auto-moderation.",
    stack: ["React", "Express", "Prisma", "PostgreSQL", "Socket.io"],
    heroImage: "/projects/sublethub-hero.png",
    liveUrl: "#",
    codeUrl: "#",
    tagline: "A trusted sublease marketplace for UCI students.",
    role: "Full-stack developer",
    timeline: "2024",
    overview: [
      "SubletHub is a sublease marketplace scoped to UCI students. It solves the trust problem in off-campus housing by verifying that every user has a real @uci.edu email before they can post or message.",
      "It's a full-stack app: a React frontend, an Express/Prisma API, a PostgreSQL database, and a Socket.io layer for real-time chat between renters and listers.",
    ],
    highlights: [
      "@uci.edu email verification gates posting and messaging.",
      "JWT-based authentication with protected API routes.",
      "Real-time buyer/seller messaging over WebSockets.",
      "Searchable, filterable listing feed with photos and pricing.",
      "Admin dashboard with automated moderation of flagged posts.",
    ],
    technical: [
      {
        label: "Auth",
        detail:
          "JWT access tokens with server-side verification middleware; registration is restricted to verified @uci.edu addresses.",
      },
      {
        label: "Data layer",
        detail:
          "Prisma ORM over PostgreSQL with typed models for users, listings, and conversations, plus relational constraints.",
      },
      {
        label: "Real-time",
        detail:
          "Socket.io channels scoped per conversation deliver messages instantly and persist them to the database.",
      },
      {
        label: "Moderation",
        detail:
          "An admin surface auto-flags listings against a ruleset and lets moderators approve or remove posts.",
      },
    ],
  },
  {
    slug: "rhythm-renew",
    name: "Rhythm Renew",
    description:
      "Cross-platform menstrual wellness app with phase-aware personalized recommendations filtered by dietary preferences and allergens.",
    stack: ["React", "Capacitor", "TypeScript"],
    heroImage: "/projects/rhythm-renew-hero.png",
    liveUrl: "#",
    codeUrl: "#",
    tagline: "Phase-aware wellness recommendations, on web and mobile.",
    role: "Full-stack developer",
    timeline: "2024",
    overview: [
      "Rhythm Renew is a menstrual wellness app that tailors food and wellness recommendations to the user's current cycle phase, then filters them by dietary preferences and allergens.",
      "It's built once in React/TypeScript and shipped to both web and native mobile through Capacitor, so the same codebase runs everywhere.",
    ],
    highlights: [
      "Cycle-phase tracker that drives personalized recommendations.",
      "Recommendations filtered by dietary preferences and allergens.",
      "One codebase deployed to web and native mobile via Capacitor.",
      "Clean, calm mobile-first interface.",
    ],
    technical: [
      {
        label: "Cross-platform",
        detail:
          "Capacitor wraps the React app into native iOS/Android builds while keeping a single TypeScript source of truth.",
      },
      {
        label: "Personalization",
        detail:
          "Recommendation logic keys off the tracked cycle phase and applies dietary/allergen filters before rendering.",
      },
      {
        label: "Type safety",
        detail:
          "TypeScript models for phases, foods, and preferences keep the filtering pipeline predictable.",
      },
    ],
  },
  {
    slug: "trek",
    name: "Trek",
    description:
      "48-hour hackathon submission at BerkeleyHacks. Later integrated agentic workflows via FetchAI and voice via Deepgram.",
    stack: ["Next.js", "React", "TypeScript"],
    heroImage: "/projects/trek-hero.png",
    liveUrl: "#",
    codeUrl: "#",
    tagline: "An AI trip planner built in 48 hours, then taken further.",
    role: "Full-stack developer",
    timeline: "BerkeleyHacks, 2024",
    overview: [
      "Trek started as a 48-hour BerkeleyHacks submission — an AI-assisted trip planner that turns a rough idea into a day-by-day itinerary with a map.",
      "After the hackathon I kept building: I integrated agentic workflows through FetchAI and added a voice interface with Deepgram so users can plan hands-free.",
    ],
    highlights: [
      "Generates day-by-day itineraries from a short prompt.",
      "Map view synced with the planned schedule.",
      "Agentic workflows via FetchAI for multi-step planning.",
      "Voice input and transcription powered by Deepgram.",
    ],
    technical: [
      {
        label: "Framework",
        detail:
          "Next.js + React with TypeScript, chosen for fast iteration under a 48-hour deadline.",
      },
      {
        label: "Agents",
        detail:
          "FetchAI agentic workflows coordinate the multi-step itinerary generation post-hackathon.",
      },
      {
        label: "Voice",
        detail:
          "Deepgram handles speech-to-text so trips can be planned by talking instead of typing.",
      },
    ],
  },
  {
    slug: "spotify-browser",
    name: "Spotify Browser",
    description:
      "Full-stack web app that browses Spotify data via their public API. An Angular frontend talks to a Node.js/Express backend to fetch and display artist, album, and track data.",
    stack: ["Angular", "TypeScript", "Node.js", "Express", "Spotify API"],
    heroImage: "/projects/spotify-browser-hero.png",
    liveUrl: "#",
    codeUrl: "#",
    tagline: "Explore artists, albums, and tracks from the Spotify API.",
    role: "Full-stack developer",
    timeline: "2023",
    overview: [
      "Spotify Browser is a full-stack web app for exploring Spotify's catalog. Search an artist and drill into their albums, top tracks, and related artists.",
      "An Angular frontend talks to a Node.js/Express backend that proxies and caches the Spotify Web API, keeping credentials off the client.",
    ],
    highlights: [
      "Search across artists, albums, and tracks.",
      "Artist detail view with albums, top tracks, and related artists.",
      "Backend proxy keeps API credentials server-side.",
      "Responsive grid layout for browsing large result sets.",
    ],
    technical: [
      {
        label: "Frontend",
        detail:
          "Angular + TypeScript with typed services and components for each Spotify entity.",
      },
      {
        label: "Backend",
        detail:
          "Node.js/Express server handles OAuth token exchange and proxies requests to the Spotify Web API.",
      },
      {
        label: "API integration",
        detail:
          "Normalizes Spotify responses into the shapes the UI needs before sending them to the client.",
      },
    ],
  },
  {
    slug: "warehouse-management-system",
    name: "Warehouse Management System",
    description:
      "Internal inventory and order management platform built for a small-business client at Alpha and Omega Computers.",
    stack: ["React", "Node.js", "PostgreSQL"],
    heroImage: "/projects/wms-hero.png",
    liveUrl: "https://wms-lac-six.vercel.app",
    tagline: "Inventory and order management for a small business.",
    role: "Solutions Architect — Alpha and Omega Computers",
    timeline: "2023 — Present",
    // Add as many images as you want here — the detail page shows them in a
    // horizontal, swipeable/scrollable gallery (hero first, then these).
    gallery: [
      {
        src: "/projects/wms-orders.png",
        alt: "Warehouse order management screen with status pills and an order detail drawer",
        caption: "Order management — track incoming and outgoing orders by status.",
      },
      {
        src: "/projects/wms-item.png",
        alt: "Inventory item detail with SKU, stock level, supplier, and stock-history chart",
        caption: "Item detail — stock levels, supplier info, and stock history.",
      },
    ],
    // Blurred demo login. Viewers must email to unlock full access.
    credentials: {
      email: "admin@wms.local",
      password: "ChangeMe123!",
      note: "Read-only demo account. Email me for full access.",
    },
    overview: [
      "This is an internal inventory and order management platform I built for a small-business client at Alpha and Omega Computers. It replaced spreadsheet-based tracking with a single source of truth for stock and orders.",
      "Staff track inventory levels, manage incoming and outgoing orders, and see live summary metrics from one dashboard.",
    ],
    highlights: [
      "Central inventory table with stock levels and item details.",
      "Order management for incoming and outgoing orders.",
      "Dashboard summary metrics at a glance.",
      "Built for and deployed to a real business client.",
    ],
    technical: [
      {
        label: "Frontend",
        detail:
          "React dashboard with a dense, table-first layout tuned for daily operational use.",
      },
      {
        label: "Backend",
        detail:
          "Node.js API layer serving inventory and order data.",
      },
      {
        label: "Database",
        detail:
          "PostgreSQL stores inventory, orders, and their relationships with referential integrity.",
      },
      {
        label: "Deployment",
        detail:
          "Hosted on Vercel and in active use by the client.",
      },
    ],
  },
]

// TIER 2 — Other Work. Condensed cards, 3 per row on desktop.
export const projectsTier2: Project[] = [
  {
    slug: "art-movement-classifier",
    name: "Art Movement Classifier",
    description:
      "Fine-tuned a SWIN Transformer to classify artwork genres across 10,000+ labeled images, reaching 93% test accuracy.",
    stack: ["Python", "PyTorch", "SWIN"],
    heroImage: "/projects/art-movement-classifier-hero.png",
    codeUrl: "#",
    tagline: "93% accuracy classifying art movements with a SWIN Transformer.",
    role: "ML engineer",
    timeline: "2024",
    overview: [
      "A computer-vision model that classifies a painting's art movement. I fine-tuned a SWIN Transformer on a dataset of 10,000+ labeled images and reached 93% accuracy on the held-out test set.",
    ],
    highlights: [
      "Fine-tuned a pretrained SWIN Transformer backbone.",
      "10,000+ labeled artwork images across 10 movements.",
      "93% test-set accuracy.",
      "Data augmentation and evaluation pipeline in PyTorch.",
    ],
    technical: [
      {
        label: "Model",
        detail:
          "Transfer learning on a SWIN Transformer, with the classification head retrained on the art dataset.",
      },
      {
        label: "Training",
        detail:
          "PyTorch training loop with augmentation, learning-rate scheduling, and per-class accuracy tracking.",
      },
    ],
  },
  {
    slug: "hand-gestured-web-alarm",
    name: "Hand-Gestured Web Alarm",
    description:
      "Browser-based timer and alarm controlled by hand gestures via webcam using computer vision.",
    stack: ["Angular", "TypeScript", "HTML/CSS"],
    heroImage: "/projects/hand-gestured-web-alarm-hero.png",
    liveUrl: "#",
    codeUrl: "#",
    tagline: "Set and dismiss alarms with hand gestures, no touch needed.",
    role: "Frontend developer",
    timeline: "2023",
    overview: [
      "A browser-based timer and alarm you control with hand gestures. A webcam feeds a computer-vision model that recognizes gestures to start, stop, and dismiss alarms — no keyboard or mouse required.",
    ],
    highlights: [
      "Real-time hand-gesture recognition from the webcam.",
      "Start, pause, and dismiss the alarm hands-free.",
      "Runs entirely in the browser — no install.",
    ],
    technical: [
      {
        label: "Vision",
        detail:
          "In-browser hand tracking maps detected gestures to timer controls in real time.",
      },
      {
        label: "Frontend",
        detail:
          "Angular + TypeScript app rendering the timer state and live webcam overlay.",
      },
    ],
  },
  {
    slug: "web-crawler-search-engine",
    name: "Web Crawler & Search Engine",
    description:
      "Python crawler indexing 30,000+ pages, returning ranked results in under 300ms via hashmap indexing and SQL storage.",
    stack: ["Python", "SQL", "Retrieval"],
    heroImage: "/projects/web-crawler-search-engine-hero.png",
    codeUrl: "#",
    tagline: "Sub-300ms ranked search over 30,000+ crawled pages.",
    role: "Backend developer",
    timeline: "2024",
    overview: [
      "A from-scratch search engine: a Python crawler indexes 30,000+ web pages, and a query engine returns ranked results in under 300 milliseconds using an in-memory hashmap index backed by SQL storage.",
    ],
    highlights: [
      "Crawler that indexed 30,000+ pages.",
      "Ranked retrieval returning results in under 300ms.",
      "Hashmap-based inverted index for fast lookups.",
      "SQL-backed persistent storage of the index.",
    ],
    technical: [
      {
        label: "Indexing",
        detail:
          "An inverted index in a hashmap gives near-constant-time term lookups; the index persists to SQL.",
      },
      {
        label: "Ranking",
        detail:
          "Term-frequency scoring orders results, with query latency held under 300ms.",
      },
    ],
  },
]

// Flat lookup used by the /projects/[slug] detail route.
export const allProjects: Project[] = [...projectsTier1, ...projectsTier2]

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug)
}

export type Experience = {
  company: string
  role: string
  date: string
  description: string
}

export const experience: Experience[] = [
  {
    company: "Alpha and Omega Computers",
    role: "Solutions Architect",
    date: "2023 — Present",
    description:
      "Design and deploy end-to-end systems for small-business clients.",
  },
  {
    company: "HandshakeAI",
    role: "AI Trainer",
    date: "2023",
    description:
      "Evaluated and refined model outputs to improve response quality.",
  },
  {
    company: "BeReal",
    role: "Product Design Extern",
    date: "2022",
    description:
      "Prototyped feature concepts and contributed to design reviews.",
  },
]

export const contact = {
  heading: "Get in touch",
  email: "wuandre6@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/andre31517912" },
    { label: "LinkedIn", href: "#" },
    { label: "Resume", href: "#" },
  ],
}
