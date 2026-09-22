# Architecture & Technical Strategy: Kero Portfolio (v4)

## 1. Technology Foundation
- **Framework**: Next.js 16.3.4 (App Router)
- **UI Library**: React 19.2.8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with CSS variables
- **Component Primitives**: shadcn/ui configured with Base UI (`@base-ui-components/react`)
- **Icons**: `lucide-react`
- **Package Manager**: pnpm

## 2. Architecture Principles
- **Server-First by Default**:
  - Page layouts, static content, project data presentation, and copy are Server Components (`RSC`).
  - Client Components (`"use client"`) are isolated strictly to interactive islands (e.g., Mobile Menu, Copy Email / Contact Interactivity, Project Media Carousel/Tabs if applicable).
- **Zero Bloat / Minimal Overhead**:
  - No external state management libraries (no Redux, no heavy stores).
  - No heavy 3D/canvas bundles (no Three.js, no WebGL).
  - Clean, typed data modules in TypeScript.
- **Single Source of Truth for Content**:
  - Project specifications, capabilities, and personal facts live in `lib/data/projects.ts` and `lib/data/profile.ts`.
  - Adding or updating a project happens in a single typed TypeScript data file.

## 3. Directory Structure
```
c:/projects/portfolio-v4/
├── app/
│   ├── layout.tsx         # Root layout, fonts, SEO metadata, theme wrapper
│   ├── page.tsx           # Assembled single-page conversion flow
│   ├── globals.css        # Tailwind v4 theme, tokens, base typography
│   └── icon.svg           # Favicon asset
├── components/
│   ├── layout/
│   │   ├── navbar.tsx     # Clean header with availability indicator & quick contact
│   │   ├── footer.tsx     # Minimalist footer with legal, links, and direct contact
│   │   └── container.tsx  # Standardized max-w-6xl wrapper
│   ├── sections/
│   │   ├── hero.tsx       # Value proposition, clear role, primary CTAs
│   │   ├── selected-work.tsx # Deep project case studies (Problem -> Build -> Tech)
│   │   ├── capabilities.tsx  # What Kero builds (SaaS, MVPs, Dashboards, APIs)
│   │   ├── process.tsx    # How Kero works (Idea -> MVP -> Delivery)
│   │   ├── about.tsx      # Honest background, education, certified skills
│   │   └── contact.tsx    # Frictionless direct contact (WhatsApp & 1-click Email copy)
│   └── ui/                # Reusable primitives (button, badge, card)
├── lib/
│   ├── data/
│   │   ├── profile.ts     # Verified facts, contact links, availability
│   │   └── projects.ts    # Real project case study data
│   └── utils.ts           # Class merging (cn)
├── types/
│   └── index.ts           # Type definitions for Project, Capability, etc.
└── public/
    └── projects/          # Real project screenshots & previews
```

## 4. Performance & Core Web Vitals
- **Images**: Next/Image with explicit aspect ratios, modern formats (WebP/AVIF), and responsive `sizes` attribute.
- **Fonts**: Next/Font (`next/font/google`) with font-display swap to eliminate layout shift (CLS).
- **Bundle Optimization**: Tree-shaken icons, zero runtime CSS-in-JS.
- **SEO & Social Share**: Dynamic OpenGraph tags, semantic JSON-LD schema for Person / WebSite.
