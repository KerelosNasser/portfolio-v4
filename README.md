# Kerolos Nasser (Kero) — Full Stack Developer Portfolio (v4)

A high-performance, conversion-oriented developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Engineered to showcase verified full-stack capabilities, real project evidence, and clean software architecture for technical recruiters, engineering hiring managers, and freelance clients.

---

## 👨‍💻 Candidate Overview (For HR & Hiring Teams)

| Attribute | Details |
| :--- | :--- |
| **Full Name** | Kerolos Nasser (Preferred: Kero) |
| **Role** | Junior / Strong-Junior Full Stack Developer |
| **Location** | Alexandria, Egypt (Open to Remote Worldwide & Freelance) |
| **Academic Background** | **Management Information Systems (MIS)**, Alexandria University |
| **Professional Certifications** | **Meta Frontend Developer Professional Certificate** (Meta) |
| **Primary Focus** | SaaS MVPs, Analytical Dashboards, Business Tools, REST APIs, Full-Stack Web Apps |
| **Primary Contact** | [keronaser2030@gmail.com](mailto:keronaser2030@gmail.com) • WhatsApp: [+20 121 173 0727](https://wa.me/201211730727) |
| **Profiles** | [GitHub Profile](https://github.com/KerelosNasser) • [LinkedIn Profile](https://linkedin.com/in/kerolos-nasser) |

### Professional Profile
Kero combines academic training in **Management Information Systems (MIS)**—covering business process modeling, systems analysis, and database architecture—with modern full-stack engineering. Rather than relying on superficial boilerplate or inflated metrics, every project and skill listed in this portfolio is backed by verifiable source code in public repositories.

---

## 🛠️ Technical Stack & Tooling

### Frontend
- **Framework**: Next.js 16.3.4 (App Router, Turbopack)
- **UI Library**: React 19.2.8
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with CSS variable tokens
- **Component Primitives**: Base UI (`@base-ui/react`) / shadcn architecture
- **Icons**: Lucide Icons & accessible inline SVGs

### Backend & Databases
- **API Architecture**: Next.js Route Handlers, Python (FastAPI), RESTful API design
- **Databases**: PostgreSQL, Prisma ORM, SQL schema modeling
- **Integrations**: AI API integrations, Sentry error monitoring

### Quality & Performance
- **Linting & Formatting**: ESLint 10, Prettier (`prettier-plugin-tailwindcss`)
- **Rendering Strategy**: Server Components (RSC) by default; Client Components isolated to interactive islands
- **SEO & Accessibility**: Semantic HTML5, structured JSON-LD schema, WCAG AA color contrast, responsive touch targets (≥44px)

---

## 🏛️ Architectural Highlights & Engineering Decisions

1. **Server Components by Default**:
   All static content, layouts, typography, and case study presentations are rendered as React Server Components. JavaScript bundle size is minimized by only hydrating interactive elements (mobile navigation drawer, one-click email copy).

2. **Single Source of Truth Data Layer**:
   No hardcoded text inside UI components. All profile information, project details, capabilities, and process steps are governed by strict TypeScript interfaces in `types/index.ts` and managed in `lib/data/`.

3. **Tailwind CSS v4 Native Design Tokens**:
   Leverages the latest Tailwind v4 `@theme` directive in `app/globals.css`, eliminating runtime CSS-in-JS overhead while maintaining a consistent dark editorial SaaS palette.

4. **Zero-Friction Conversion & Honest Lead Capture**:
   Avoids non-functional submission forms. Provides direct, instant communication channels (WhatsApp direct chat link and 1-click email copy with clipboard fallback and visual confirmation).

---

## 📂 Verified Featured Projects

Every project featured in this portfolio is backed by verifiable source code:

### 1. [Advanced E-Commerce Storefront](https://github.com/KerelosNasser/advanced_e_commerce)
- **Stack**: React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Live Demo**: [advanced-e-commerce.vercel.app](https://advanced-e-commerce.vercel.app)
- **Summary**: High-performance retail storefront featuring instant client-side multi-category filtering, real-time product search, persistent cart state management, and touch-optimized responsive navigation.

### 2. [Global Environmental Impact Dashboard](https://github.com/KerelosNasser/Enviroment-Dashboard)
- **Stack**: React 19, Vite, TypeScript, Tailwind CSS v4, TanStack Query, Recharts, Framer Motion
- **Summary**: Interactive data visualization dashboard presenting time-series charts, status telemetry cards, and multi-metric comparisons across simulated environmental datasets.

### 3. [Next.js SaaS Application Foundation](https://github.com/KerelosNasser/saas-app)
- **Stack**: Next.js (App Router), TypeScript, Tailwind CSS, Sentry
- **Summary**: Production-ready SaaS application baseline utilizing Next.js App Router Server Components, modular workspace layouts, and automated Sentry error monitoring instrumentation.

---

## 📁 Repository Structure

```text
portfolio-v4/
├── app/
│   ├── globals.css          # Tailwind v4 theme tokens, dark palette, base styles
│   ├── layout.tsx           # Root layout, fonts (Inter/Geist), SEO & JSON-LD
│   └── page.tsx             # Assembled homepage section hierarchy
├── components/
│   ├── layout/
│   │   ├── container.tsx    # Standardized max-w-6xl container primitive
│   │   ├── navbar.tsx       # Responsive nav with availability indicator & mobile menu
│   │   └── footer.tsx       # Clean editorial footer with verified links & timezone
│   ├── sections/
│   │   ├── hero.tsx         # Value proposition, role positioning, dual CTAs
│   │   ├── selected-work.tsx# Deep case studies (Problem -> Build -> Tech -> Links)
│   │   ├── capabilities.tsx # "What I Build" (SaaS MVPs, Dashboards, APIs)
│   │   ├── process.tsx      # "Workflow" (Scope -> Build -> Polish & Ship)
│   │   ├── about.tsx        # MIS background, Meta certification, engineering values
│   │   └── contact.tsx      # Direct WhatsApp & 1-click Email copy (no fake forms)
│   └── ui/                  # Reusable UI primitives (Button, etc.)
├── lib/
│   ├── data/
│   │   ├── profile.ts       # Profile facts, contact info, availability status
│   │   ├── projects.ts      # Real project case study data
│   │   └── services.ts      # Capabilities and workflow step definitions
│   └── utils.ts             # Tailwind class merging utility
└── types/
    └── index.ts             # TypeScript interfaces for all data models
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `pnpm` (recommended) or `npm`

### Installation & Execution

```bash
# 1. Clone repository
git clone https://github.com/KerelosNasser/portfolio-v4.git
cd portfolio-v4

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Verification Scripts

```bash
# Run TypeScript strict typecheck
pnpm typecheck

# Run ESLint check
pnpm lint

# Build production bundle
pnpm build
```

---

## 📄 License & Attribution

Created by **Kerolos Nasser**. Distributed under the [MIT License](LICENSE).
Code is open for inspection and architectural reference.
