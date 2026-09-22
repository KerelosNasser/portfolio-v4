# Design System Guide: Light-First Developer Studio (White + Green + Black)

This document establishes the visual direction, color system, typography rules, and component standards for Kero's portfolio. It is written plainly so any designer or developer can maintain visual consistency.

---

## 1. Core Visual Direction

The portfolio communicates:
> **Work, trust, clarity, professionalism, and getting things done.**

The visual identity is designed for a **client first, developer second**:
* A non-technical visitor immediately understands what Kero builds, what problems he solves, and how to hire him.
* The aesthetic feels like a **premium independent developer studio**—clean, bright, spacious, confident, modern, and product-focused.
* It intentionally avoids the generic "dark mode SaaS dashboard" look (neon gradients, floating blobs, glowing pills) and avoids looking like Fiverr or Upwork.

The primary visual identity is:
# WHITE + GREEN + BLACK TEXT + REAL SOFTWARE + GREAT TYPOGRAPHY

---

## 2. Color System

### Light Mode (Default Theme)
Light mode is the primary presentation of the website.
* **Canvas Background**: `#F7F8F5` (crisp, airy off-white)
* **Surface / Card**: `#FFFFFF` (pure white for elevated components and product previews)
* **Primary Text**: `#111412` (deep near-black with strong contrast)
* **Secondary Text**: `#5E6861` (readable slate-gray for body copy and descriptions)
* **Muted Text**: `#7D8780` (subtle captions and metadata)
* **Border**: `#DDE3DE` (subtle structural divider lines)
* **Primary Green**: `#00A86B` (brand accent for primary CTAs and availability)
* **Dark Green**: `#087A52` (hover state for green buttons)
* **Soft Green**: `#E8F5EF` (subtle badges, highlighted accents)

### Dark Mode (Night Theme)
Dark mode uses the same visual identity—feeling like the same studio at night.
* **Canvas Background**: `#0D110F`
* **Surface / Card**: `#151A17`
* **Primary Text**: `#F3F6F2`
* **Secondary Text**: `#A0ABA4`
* **Border**: `#27302B`
* **Primary Green**: `#20C67A`
* **Dark Green**: `#0A8F61`
* **Soft Green**: `#163B2C`

### Green Usage Rules
Green is the brand accent. It is used selectively where attention matters:
* Primary CTAs ("Let's talk ↗", WhatsApp trigger)
* Availability indicator (`● Available for freelance`)
* Selected links and active tabs
* Key numerical indices (`01`, `02`, `03`)
* Important project interaction details (cart badge, chart trendline)

**Banned green patterns**:
* Do NOT make every heading green.
* Do NOT make every card background green.
* Do NOT use giant neon gradients or glowing green blobs.

---

## 3. Typography

* **Primary Sans-Serif (Inter)**:
  Used for all headlines, body copy, navigation, buttons, and section titles. Clean, modern, highly legible.
  Personality is created through size, weight, letter spacing, and composition—not decorative fonts.
* **Monospace (Geist Mono)**:
  Reserved strictly for code snippets, technology tags, and small technical metadata. Never used for marketing headlines or body paragraphs.
* **No Decorative Serifs**:
  Newsreader and serif-heavy editorial styling have been removed in favor of clean, direct sans-serif typography.

---

## 4. Visual Hierarchy & Layout Principles

### Client First, Developer Second
1. **Outcome First**: Lead with the business problem solved and the resulting user experience.
2. **Real Software Centerpiece**: Showcase working interfaces (AliMart storefront, Environmental Dashboard) before explaining the underlying architecture.
3. **Tech Stack as Secondary Proof**: Frameworks (Next.js, React, TypeScript, Python) provide credibility at the end of a section, not as the headline.

### Avoid the "Everything is a Card" Trap
Do not wrap every section in `rounded-xl border bg-card shadow`. Build visual rhythm through:
* Open typographic layouts with generous whitespace (`py-24` to `py-40`)
* Thin structural borders (`#DDE3DE` in light mode, `#27302B` in dark mode)
* Asymmetric column grids (e.g. 7-col / 5-col split)
* Three distinct project layouts in Selected Work:
  1. **Project 01**: Text left, real storefront UI right.
  2. **Project 02**: Simulated data visualization left, text right.
  3. **Project 03**: Full-width application window with text underneath.

---

## 5. Project Visuals & Factual Integrity

* **AliMart Storefront**: Real e-commerce interface with product search, category filtering, and persistent cart.
* **Environmental Impact Dashboard**: Visual charts and metric indicators. **Must always be identified as simulated data** (never claim real-time telemetry or live production sensors).
* **Next.js SaaS Foundation**: Authentic App Router workspace and error tracking baseline.

---

## 6. Voice and Copy

* Short sentences, plain English, direct statements.
* Confident without hype.
* **Banned words**: *leveraging, seamlessly, robust, scalable, innovative, cutting-edge, production-ready, digital experiences, engineering excellence*.
