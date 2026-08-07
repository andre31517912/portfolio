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
    stack: [
      "Next.js 14",
      "React",
      "Expo React Native",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "JWT",
      "bcryptjs",
      "Twilio",
      "SendGrid",
      "next-intl",
      "i18next",
      "Zod",
      "pnpm",
      "Vercel",
    ],
    heroImage: "/projects/judien-hero.png",
    liveUrl: "#",
    codeUrl: "https://github.com/andre31517912/judien",
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
          "Next.js 14 web app with React and TypeScript, plus an Expo React Native client for mobile. Internationalization runs on next-intl and i18next so members can use the app in their language.",
      },
      {
        label: "Backend",
        detail:
          "NestJS API with Prisma ORM over PostgreSQL and Redis for caching. BullMQ handles background job queues (SMS/email dispatch), JWT with bcryptjs secures auth, and Zod validates input.",
      },
      {
        label: "Notifications",
        detail:
          "Twilio sends SMS reminders and SendGrid handles transactional email so members get event updates and RSVP confirmations.",
      },
      {
        label: "Infrastructure",
        detail:
          "A pnpm monorepo houses the web, mobile, and backend packages, deployed on Vercel with preview deployments on every push for pre-merge review.",
      },
    ],
  },
  {
    slug: "sublethub",
    name: "SubletHub",
    description:
      "UCI student sublease marketplace with JWT auth, @uci.edu verification, real-time messaging, and admin auto-moderation.",
    stack: [
      "React 18",
      "React Router",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "JWT",
      "bcryptjs",
      "Multer",
      "Nodemailer",
      "Zod",
      "Helmet",
      "Docker",
    ],
    heroImage: "/projects/sublethub-hero.png",
    liveUrl: "#",
    codeUrl: "https://github.com/andre31517912/sublethub",
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
        label: "Frontend",
        detail:
          "React 18 with React Router and TypeScript, bundled by Vite and styled with Tailwind CSS for a fast, responsive listing feed.",
      },
      {
        label: "Backend & data",
        detail:
          "Express API with Prisma ORM over PostgreSQL and typed models for users, listings, and conversations. Zod validates input at every route.",
      },
      {
        label: "Auth & security",
        detail:
          "JWT access tokens with bcryptjs password hashing and server-side verification middleware; registration is restricted to verified @uci.edu addresses. Helmet sets secure headers and rate limiting guards the API.",
      },
      {
        label: "Real-time & media",
        detail:
          "Socket.io channels scoped per conversation deliver messages instantly, Multer handles listing photo uploads, and Nodemailer sends verification and notification email.",
      },
      {
        label: "Infrastructure",
        detail:
          "Docker Compose runs Postgres and the services locally for a reproducible development environment.",
      },
    ],
  },
  {
    slug: "rhythm-renew",
    name: "Rhythm Renew",
    description:
      "Cross-platform menstrual wellness app with phase-aware personalized recommendations filtered by dietary preferences and allergens.",
    stack: [
      "React",
      "TypeScript",
      "Capacitor",
      "Expo React Native",
      "Drizzle ORM",
      "Metro",
      "Babel",
    ],
    heroImage: "/projects/rhythm-renew-hero.png",
    liveUrl: "#",
    codeUrl: "https://github.com/andre31517912/rhythm-renew-2",
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
          "A React + TypeScript codebase ships to iOS, Android, and web through Capacitor, alongside an Expo React Native (v2) build. Metro bundles the native app and Babel handles transpilation.",
      },
      {
        label: "Data layer",
        detail:
          "Drizzle ORM provides typed, schema-first access to the app's local and synced data.",
      },
      {
        label: "Personalization",
        detail:
          "Recommendation logic keys off the tracked cycle phase and applies dietary/allergen filters before rendering, with TypeScript models keeping the pipeline predictable.",
      },
    ],
  },
  {
    slug: "trek",
    name: "Trek",
    description:
      "48-hour hackathon submission at BerkeleyHacks. Later integrated agentic workflows via FetchAI and voice via Deepgram.",
    stack: ["Next.js", "React", "TypeScript", "FetchAI", "Deepgram", "Maps"],
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
      {
        label: "Maps",
        detail:
          "A map integration visualizes each generated itinerary, keeping the schedule and locations in sync.",
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
    codeUrl: "https://github.com/andre31517912/spotify-browser",
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
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma 7",
      "PostgreSQL 17",
      "Zod 4",
      "bcryptjs",
      "Neon",
      "Vercel",
      "Docker",
      "Turbopack",
      "SheetJS",
    ],
    heroImage: "/projects/wms-hero.png",
    liveUrl: "https://wms-lac-six.vercel.app",
    codeUrl: "https://github.com/andre31517912/wms",
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
          "Next.js 16 (App Router, server components, server actions) with React 19 and useActionState-driven forms, TypeScript throughout, Tailwind CSS v4 for utility-first styling, and a custom i18n layer for an English/Chinese toggle with no external library.",
      },
      {
        label: "Backend",
        detail:
          "All mutations — login, orders, stock adjustments — run through Next.js server actions. Prisma 7 with the @prisma/adapter-pg driver talks to PostgreSQL 17, bcryptjs hashes passwords, and Zod 4 validates input at every boundary. Auth is hand-rolled: DB-backed sessions, httpOnly cookies, and SHA-256 token hashing.",
      },
      {
        label: "Infrastructure",
        detail:
          "Hosted on Vercel with auto-deploy from main. Neon provides managed serverless PostgreSQL via the Vercel integration in production, while Docker Compose runs a local Postgres for development.",
      },
      {
        label: "Tooling",
        detail:
          "Turbopack as the default Next.js 16 bundler, ESLint for linting, tsx for running TypeScript scripts (seed, migrations), and SheetJS (xlsx) for bulk import from spreadsheets.",
      },
    ],
  },
]

// TIER 2 — Other Work. Condensed cards, 3 per row on desktop.
export const projectsTier2: Project[] = [
  {
    slug: "aoc-website",
    name: "Alpha & Omega Website",
    description:
      "Full redesign of the Alpha & Omega Computer Software Solutions site, built on ASP.NET Core MVC with a focus on SEO and performance.",
    stack: [
      "ASP.NET Core MVC",
      "C#",
      "EF Core",
      "MySQL",
      "Bootstrap 5",
      "HTML/CSS",
      "AWS",
    ],
    heroImage: "/projects/aoc-website-hero.png",
    codeUrl: "https://github.com/andre31517912/aoc_web",
    tagline: "A rebuilt company website tuned for SEO and speed.",
    role: "Assistant Solutions Architect — Alpha & Omega",
    timeline: "2026 — Present",
    overview: [
      "A ground-up redesign of the Alpha & Omega Computer Software Solutions marketing site. I rebuilt the front end and templating on ASP.NET Core MVC, prioritizing search visibility and page performance to drive inbound leads.",
    ],
    highlights: [
      "Full visual and structural redesign of the company site.",
      "SEO-focused markup, metadata, and semantic structure.",
      "Performance-tuned pages for fast loads.",
      "Deployed on AWS.",
    ],
    technical: [
      {
        label: "Framework",
        detail:
          "ASP.NET Core MVC with C# and Razor views, backed by EF Core over a MySQL database.",
      },
      {
        label: "Frontend",
        detail:
          "Bootstrap 5 with custom HTML/CSS for a responsive, accessible layout across devices.",
      },
      {
        label: "Infrastructure",
        detail:
          "Hosted on AWS, with an emphasis on caching and asset optimization for performance.",
      },
    ],
  },
  {
    slug: "art-movement-classifier",
    name: "Art Movement Classifier",
    description:
      "Fine-tuned a Swin Transformer to classify paintings into 13 art movements, reaching 97% test accuracy.",
    stack: [
      "Python",
      "PyTorch",
      "Swin Transformer",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "OpenCV",
      "Pillow",
      "Anaconda",
    ],
    heroImage: "/projects/art-movement-classifier-hero.png",
    codeUrl: "https://github.com/andre31517912/art-movement-classifier",
    tagline: "97% accuracy classifying paintings across 13 art movements with a Swin Transformer.",
    role: "ML engineer",
    timeline: "2024",
    overview: [
      "A computer-vision model that classifies a painting's art movement. I fine-tuned a Swin Transformer and reached 97% accuracy across 13 movements using data augmentation and hyper-tuned parameters.",
    ],
    highlights: [
      "Fine-tuned a pretrained Swin Transformer backbone.",
      "Classifies paintings into 13 distinct art movements.",
      "97% test-set accuracy.",
      "Data augmentation and evaluation pipeline in PyTorch.",
    ],
    technical: [
      {
        label: "Model",
        detail:
          "A Swin Transformer architecture implemented in PyTorch, fine-tuned via transfer learning with the classification head retrained on the art dataset. Python is the primary language, with Anaconda managing the environment and packages.",
      },
      {
        label: "Data & preprocessing",
        detail:
          "NumPy and Pandas handle data processing, while OpenCV and Pillow power image processing and data augmentation to improve generalization across movements.",
      },
      {
        label: "Training & evaluation",
        detail:
          "PyTorch training loop with hyper-tuned parameters and augmentation. Scikit-learn produces evaluation metrics and the confusion matrix, and Matplotlib visualizes results and per-class performance.",
      },
    ],
  },
  {
    slug: "hand-gestured-web-alarm",
    name: "Hand-Gestured Web Alarm",
    description:
      "Browser-based timer and alarm controlled by hand gestures via webcam using computer vision.",
    stack: ["Angular", "TypeScript", "HTML/CSS", "Computer Vision", "Karma"],
    heroImage: "/projects/hand-gestured-web-alarm-hero.png",
    liveUrl: "#",
    codeUrl: "https://github.com/andre31517912/Hand-gestured-web-alarm",
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
          "Angular + TypeScript app with HTML/CSS rendering the timer state and live webcam overlay.",
      },
      {
        label: "Testing",
        detail:
          "Karma runs the unit test suite for the timer and gesture-handling logic.",
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
    codeUrl: "https://github.com/andre31517912/cs121-web-crawler",
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
  type: string
  date: string
  description: string
}

export const experience: Experience[] = [
  {
    company: "Alpha and Omega Computer Software Solutions",
    role: "Assistant Solutions Architect",
    type: "Full-time",
    date: "May 2026 — Present",
    description:
      "Lead growth operations and outreach. Shipped a major website redesign on ASP.NET Core MVC (C#, EF Core, MySQL, Bootstrap 5, AWS) focused on SEO and performance, built a fully customized CRM tailored to company workflow, and deployed scraping agents that verify business legitimacy at a 95% confidence rate — trimming 70% of invalid leads.",
  },
  {
    company: "BeReal",
    role: "Product Design & UI/UX",
    type: "Internship",
    date: "Nov 2025 — Feb 2026",
    description:
      "Owned end-to-end product concept development aimed at growing MAU. Produced lo-fi and hi-fi UI/UX in Figma and Canva, ran user research through study groups and surveys, and benchmarked features against key competitors to surface engagement gaps and differentiation opportunities for stakeholders.",
  },
  {
    company: "Cortica",
    role: "Behavior Technician",
    type: "Contract",
    date: "Jul 2025 — Nov 2025",
    description:
      "Ran hourly sessions with children diagnosed with ASD, collecting and processing clinical data for interdisciplinary care teams. Automated data pipelines with Python (pandas, NumPy) and built custom dashboards to translate complex behavioral data into actionable insights through statistical analysis and visualization.",
  },
  {
    company: "HandshakeAI",
    role: "AI Trainer",
    type: "Freelance",
    date: "2024",
    description:
      "Evaluated and refined model outputs to improve response quality, writing detailed feedback and rankings that helped shape more accurate, helpful, and safe AI behavior across a range of prompts.",
  },
  {
    company: "Phi Kappa Psi Fraternity",
    role: "VP of Operations, Marketing & Outreach",
    type: "Extracurricular",
    date: "Nov 2023 — Jun 2025",
    description:
      "Scaled the chapter from 9 to 50 members in one year, driving engagement up 550% and social presence up 210%. Led a philanthropy fundraiser that raised over $8k, managed sponsorships and onboarding, and applied A/B testing and data analysis to optimize marketing and events.",
  },
  {
    company: "Self-Employed",
    role: "Content Analyst",
    type: "Freelance · Self-employed",
    date: "Mar 2022 — Apr 2025",
    description:
      "Grew client social accounts to 24K followers and 3.4M total likes. Analyzed KPIs (engagement rate, impressions, reach) via custom dashboards, evaluated sponsor campaigns on conversion and ROI, and used A/B testing to identify high-impact content formats.",
  },
]

export const contact = {
  heading: "Get in touch",
  blurb:
    "Open to full-time roles and freelance work in software, product, and data. The fastest way to reach me is email or a call — I usually reply the same day.",
  email: "wuandre6@gmail.com",
  phone: "858-353-8656",
  linkedin: "https://www.linkedin.com/in/andre-wu-146088250",
  resume: "#",
  links: [
    { label: "GitHub", href: "https://github.com/andre31517912" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/andre-wu-146088250" },
    { label: "Resume", href: "#" },
  ],
}
