# Design System & Aesthetics: Kero Portfolio (v4)

## 1. Visual Direction & Mood
- **Concept**: Premium SaaS Product + Editorial Engineering.
- **Atmosphere**: Dark, sophisticated, crisp, and restrained. Feels like modern developer infrastructure (Linear, Stripe, Supabase, Vercel).
- **Core Rule**: Avoid generic tropes:
  - NO neon cyber hacker greens/magentas.
  - NO random glassmorphism or muddy blur.
  - NO giant walls of tech logos.
  - NO spinning 3D cubes or floating blobs that destroy performance.
  - NO repetitive, boring card grids.

## 2. Color Palette & Theming (Tailwind v4 CSS Theme)
- **Backgrounds**:
  - Deep Canvas: `hsl(224, 25%, 4%)` (`#07090e`)
  - Elevated Card: `hsl(224, 20%, 8%)` (`#0f1219`)
  - Sub-surface / Inset: `hsl(224, 18%, 12%)` (`#181c26`)
- **Borders & Dividers**:
  - Subtle Border: `rgba(255, 255, 255, 0.08)`
  - Active/Hover Border: `rgba(255, 255, 255, 0.18)`
- **Typography & Foreground**:
  - Heading / Primary: `hsl(0, 0%, 98%)` (High contrast white)
  - Body / Secondary: `hsl(220, 14%, 72%)` (Readable slate)
  - Muted / Metadata: `hsl(220, 12%, 48%)`
- **Accent / Signal**:
  - Precision Emerald: `hsl(158, 64%, 52%)` (Indicates active availability, verified build status, live links)
  - Clean Indigo/Violet: `hsl(245, 82%, 67%)` (Subtle UI highlights, primary CTA focus)

## 3. Typography
- **Primary Sans**: `Geist Sans` / `Inter` / System Sans fallback.
- **Monospace Accent**: `Geist Mono` / `JetBrains Mono` (used for metadata, technical tags, status indicators, architecture specs).
- **Hierarchy Scale**:
  - Hero Display: `text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight`
  - Section Titles: `text-2xl sm:text-3xl font-semibold tracking-tight`
  - Subheads: `text-lg sm:text-xl text-muted-foreground font-normal`
  - Body: `text-base leading-relaxed text-secondary-foreground`
  - Microcopy / Badges: `text-xs font-mono uppercase tracking-wider`

## 4. Spacing, Layout & Rhythm
- **Rhythm**: Generous vertical whitespace (`py-20` to `py-32` between sections) to give content room to breathe.
- **Max Width**: Standardized container `max-w-6xl mx-auto px-6 sm:px-8`.
- **Component Anatomy**:
  - Clean, razor-thin borders (`1px solid var(--border)`).
  - Subtle corner rounding (`rounded-xl` / `rounded-2xl`).
  - High information density where technical proof is needed; spacious editorial layout where value is communicated.

## 5. Animation Strategy
- **Guiding Principle**: Motion must communicate hierarchy and state, never delay interaction.
- **Allowed Motion**:
  - Subtle entrance fades and slight y-translation on initial view.
  - Crisp hover states on buttons and project cards (border luminance change, slight image scale).
  - Micro-interactions on tabs or copy-to-clipboard buttons.
- **Accessibility**: Full compliance with `prefers-reduced-motion`. All key content must be immediately readable without animation.

## 6. Mobile-First Responsiveness
- All components built mobile-first.
- On small screens:
  - Eliminate multi-column project cards; present clear vertical flow: Preview Image -> Problem/Solution -> Tech Specs -> Action CTA.
  - Sticky/accessible contact actions (Direct WhatsApp & Email triggers).
  - Preserve high contrast and legible body size (minimum 16px body on mobile).
