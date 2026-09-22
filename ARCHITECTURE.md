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
  - Client Components (`"use client"`) are isolated strictly to interactive islands (e.g., Mobile Menu, Copy Email / Contact Interactivity, Theme Toggle).
- **Zero Bloat / Minimal Overhead**:
  - No external state management libraries (no Redux, no heavy stores).
  - No heavy 3D/canvas bundles (no Three.js, no WebGL).
  - Clean, typed data modules in TypeScript.
- **Single Source of Truth for Content**:
  - Project specifications, capabilities, and personal facts live in `lib/data/projects.ts`, `lib/data/profile.ts`, and `lib/data/services.ts`.
  - Adding or updating a project happens in a single typed TypeScript data file.

## 3. Directory Structure
```
c:/projects/portfolio-v4/
├── app/
│   ├── layout.tsx         # Root layout, fonts, SEO metadata, theme wrapper, JSON-LD
│   ├── page.tsx           # Assembled single-page conversion flow
│   ├── globals.css        # Tailwind v4 theme, tokens, reduced-motion accessibility
│   └── icon.svg           # Favicon asset
├── components/
│   ├── layout/
│   │   ├── navbar.tsx     # Clean header with Services link, persistent CTA, theme toggle
│   │   ├── footer.tsx     # Minimalist footer with legal, direct links, and developer role
│   │   └── container.tsx  # Standardized max-w-6xl wrapper
│   ├── sections/
│   │   ├── hero.tsx       # Value proposition, clear role, dominant Start a conversation CTA
│   │   ├── selected-work.tsx # Visual-first project case studies (Visual -> Problem -> Build -> Tech)
│   │   ├── capabilities.tsx  # Services & capabilities (SaaS, Business Tools, Web Apps, APIs)
│   │   ├── process.tsx    # How Kero works (Understand -> Build -> Refine)
│   │   ├── about.tsx      # Human background, MIS education, certified skills
│   │   └── contact.tsx    # High-conversion contact (Start a conversation, WhatsApp, Email)
│   └── ui/                # Reusable primitives (button, badge, card)
├── lib/
│   ├── data/
│   │   ├── profile.ts     # Independent Full-Stack Developer facts, contact links
│   │   ├── projects.ts    # Visual-first project case study data
│   │   └── services.ts    # Client-friendly service descriptions
│   └── utils.ts           # Class merging (cn)
├── types/
│   └── index.ts           # Type definitions for Project, Capability, Profile, etc.
└── public/
    └── projects/          # Project assets and screenshots
```

## 4. Performance & Core Web Vitals
- **Images**: Next/Image with explicit aspect ratios, modern formats (WebP/AVIF), and responsive `sizes` attribute.
- **Fonts**: Next/Font (`next/font/google`) with font-display swap to eliminate layout shift (CLS).
- **Bundle Optimization**: Tree-shaken icons, zero runtime CSS-in-JS.
- **SEO & Social Share**: Dynamic OpenGraph tags, Twitter cards, semantic JSON-LD schema for Person / WebSite.
- **Accessibility**: Standardized 44px touch targets, focus-visible contrast, and `prefers-reduced-motion` compliance.
