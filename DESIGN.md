# Design Guide: Editorial Developer Studio

This document explains the design direction for Kero's portfolio. It is written plainly so any designer or developer can understand the aesthetic and maintain it without slipping into generic SaaS habits.

---

## 1. Creative Direction

The website should feel like:
> A talented developer showing his work.

It should **not** feel like:
* An AI-generated SaaS landing page
* A dark-mode dashboard template (Linear / Stripe clones)
* A corporate agency portfolio

The concept is **"Editorial Developer Studio"**: personal, technical, confident, and authored. It pairs strong typography and generous whitespace with real, functional project presentations.

---

## 2. Color Palette

The palette is warm, dark, and restrained. Avoid cold blue-gray slate or neon accent greens.

* **Canvas**: `#0C0C0B` (warm near-black)
* **Subtle Surface**: `#141413`
* **Elevated Surface**: `#1B1B19`
* **Primary Text**: `#F1EFE9` (warm off-white)
* **Secondary Text**: `#A7A39A` (warm stone)
* **Muted**: `#6F6B63`
* **Border**: `rgba(241, 239, 233, 0.12)`
* **Accent**: `#E56A3D` (vermilion / warm orange)

### How to use the accent:
The accent color (`#E56A3D`) is an editorial punctuation mark. Use it for:
* Small numerical indicators (`01`, `02`)
* Very selective highlights (like a wavy underline or focus state)
* A subtle availability dot

Do not turn buttons, banners, or whole sections orange.

---

## 3. Typography

* **Sans-serif (Inter)**: The workhorse font for all body copy, navigation, buttons, and section titles. Clean and highly legible.
* **Editorial Serif (Newsreader)**: Used sparingly for single phrase accents (such as *"working web products"* in the hero). It adds human authorship without turning the site into a magazine.
* **Monospace (Geist Mono)**: Reserved strictly for what naturally belongs in monospace: technology tags, code snippets, and tiny section counters. Never use monospace for general marketing copy or normal headings.

---

## 4. Visual Rhythm & Layout

### Avoid the "Everything is a Card" Pattern
Do not wrap every piece of content in `rounded-xl border bg-card`. That creates a repetitive, robotic look.

Instead, build visual rhythm using:
* Open typographic layouts
* Thin horizontal divider rules (`border-white/[0.08]`)
* Asymmetric two-column grids
* Generous whitespace (`py-24` to `py-40` between major sections)
* Varied project presentations

### Selected Work is the Centerpiece
The work section has the highest visual weight on the page. Each project is treated like a feature article with an alternating layout:
1. **Project 01**: Text left, real storefront UI right.
2. **Project 02**: Simulated environmental charts left, text right.
3. **Project 03**: Full-width application window with text underneath.

---

## 5. Real Project Visuals

Always showcase real UI from Kero's actual repositories and deployments:
* **AliMart**: Real storefront with product cards, category filtering, and shopping cart.
* **Environmental Impact Dashboard**: Clean charts and indicators built around simulated data (never claim real-time telemetry).
* **Next.js SaaS Foundation**: Authentic App Router workspace and monitoring baseline.

Frame these in clean browser chrome with realistic URLs and understated controls.

---

## 6. Voice and Copy

Write like a real person talking to a prospective client:
* Clear, direct sentences.
* Non-technical business owners should immediately understand what Kero builds.
* Banned buzzwords: *high-performance, production-ready, cutting-edge, scalable, innovative solutions, digital experiences, engineering excellence, conversion-oriented, seamless*.
* State facts simply: what was built, what problem it solves, and where to inspect the code.

---

## 7. Motion

Motion is quiet and physical:
* Smooth link transitions and subtle border lightening on hover.
* Small arrow icon translations (`hover:translate-x-0.5`).
* No continuous looping animations, glowing neon blobs, or jarring parallax.
