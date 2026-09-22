import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "advanced-ecommerce",
    title: "Advanced E-Commerce Storefront",
    tagline: "High-performance retail storefront with dynamic filtering and stateful shopping experience.",
    category: "Web Application",
    problem:
      "Modern e-commerce storefronts require immediate responsiveness, fluid client-side navigation, and seamless product filtering without sluggish page reloads.",
    solution:
      "Built a full-featured storefront using React 19 and Vite with instant client-side filtering, category browsing, responsive product grids, and persistent cart state management.",
    architecture:
      "Engineered with React 19 component boundaries, Vite compilation for minimal latency, TypeScript contracts for product schemas, and Tailwind CSS + shadcn/ui for accessible styling.",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Dynamic multi-category filtering and real-time search",
      "Persistent client-side shopping cart with instant quantity adjustments",
      "Detailed product modal views and responsive image galleries",
      "Mobile-optimized layout designed for touch-first navigation",
    ],
    githubUrl: "https://github.com/KerelosNasser/advanced_e_commerce",
    liveUrl: "https://advanced-e-commerce.vercel.app",
    status: "live",
  },
  {
    slug: "environmental-dashboard",
    title: "Environmental Impact Dashboard",
    tagline: "Interactive data visualization dashboard analyzing simulated ecological metrics.",
    category: "Analytics & Dashboard",
    problem:
      "Complex environmental datasets are difficult to digest without clear visual hierarchy, responsive charting, and intuitive metric indicators.",
    solution:
      "Designed and developed an analytical dashboard featuring interactive time-series charts, status telemetry cards, and multi-metric comparisons using simulated environmental data.",
    architecture:
      "Utilized TanStack Query for asynchronous data management, Recharts for responsive SVG visualizations, and Tailwind CSS v4 for clean grid structure.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "TanStack Query",
      "Recharts",
      "Framer Motion",
    ],
    features: [
      "Multi-parameter time-series charts for temperature and emission trends",
      "Interactive telemetry cards displaying key simulated environmental indices",
      "Dynamic data queries with asynchronous client-state handling",
      "Fully responsive dashboard layout spanning desktop and tablet screens",
    ],
    githubUrl: "https://github.com/KerelosNasser/Enviroment-Dashboard",
    status: "repo",
  },
  {
    slug: "saas-application-foundation",
    title: "Next.js SaaS Foundation",
    tagline: "Production-oriented SaaS application foundation with modern App Router architecture.",
    category: "SaaS & Full Stack",
    problem:
      "Starting a new SaaS product requires a solid architectural baseline: reliable routing, responsive dashboard layouts, and error monitoring from day one.",
    solution:
      "Constructed a structured Next.js App Router codebase equipped with error tracking, modular layouts, and scalable TypeScript definitions ready for feature development.",
    architecture:
      "Built on Next.js App Router with Server Components, integrated Sentry error monitoring for crash diagnostics, and utility-first Tailwind CSS styling.",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Sentry"],
    features: [
      "Next.js App Router foundation with server-first architecture",
      "Sentry integration for automated error tracking and diagnostics",
      "Structured workspace layout with sidebar navigation and mobile support",
      "Strict TypeScript definitions for application data flows",
    ],
    githubUrl: "https://github.com/KerelosNasser/saas-app",
    status: "repo",
  },
];
