import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "advanced-ecommerce",
    title: "AliMart Storefront",
    tagline: "A modern retail storefront with instant filtering, product search, and a persistent shopping cart.",
    category: "E-Commerce / Web App",
    problem:
      "Online retail storefronts often feel sluggish when filtering products or browsing categories with repeated full-page reloads.",
    solution:
      "Built a fast-filtering retail storefront using React 19 and Vite. Shoppers can search, filter across categories, view product details in modal views, and manage cart items smoothly without page refreshes.",
    outcome:
      "Provides instantaneous client-side category filtering, real-time product search, and persistent session cart management.",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Instant multi-category filtering and real-time product search",
      "Persistent shopping cart with live quantity adjustment",
      "Product detail modal views with responsive image galleries",
      "Touch-friendly layout designed for mobile and desktop screens",
    ],
    githubUrl: "https://github.com/KerelosNasser/advanced_e_commerce",
    liveUrl: "https://advanced-e-commerce.vercel.app",
    status: "live",
  },
  {
    slug: "environmental-dashboard",
    title: "Environmental Impact Dashboard",
    tagline: "Interactive dashboard built around simulated environmental data.",
    category: "Data Visualization",
    problem:
      "Complex environmental datasets can be hard to interpret without clear visual hierarchy, readable charts, and intuitive metric indicators.",
    solution:
      "Designed an interactive data visualization dashboard that maps simulated climate metrics—such as temperature variations and emissions—into readable, responsive charts and summary indicators.",
    outcome:
      "Synthesizes simulated climate indicators into responsive SVG charts and scannable metric cards with clear simulated data labeling.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Recharts",
      "Framer Motion",
    ],
    features: [
      "Interactive time-series charts for temperature and emission trends",
      "Simulated metric cards highlighting key environmental indicators",
      "Asynchronous data queries with clear loading and active states",
      "Responsive layout that adapts cleanly across desktop and mobile screens",
    ],
    githubUrl: "https://github.com/KerelosNasser/Enviroment-Dashboard",
    status: "repo",
  },
  {
    slug: "saas-application-foundation",
    title: "Next.js SaaS Foundation",
    tagline: "A structured baseline with App Router layouts, error tracking, and typed data flows.",
    category: "SaaS / Full Stack",
    problem:
      "Starting a new web app often means rebuilding the same foundation: layout structures, error monitoring, server component boundaries, and type definitions.",
    solution:
      "Created a clean baseline using Next.js App Router, complete with responsive workspace navigation, Sentry error monitoring, and modular layout architecture ready for custom features.",
    outcome:
      "Provides a pre-configured App Router workspace with server component boundaries, integrated error diagnostics, and strict typing.",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Sentry"],
    features: [
      "Server Components architecture with fast initial load",
      "Integrated Sentry error monitoring and diagnostic reporting",
      "Modular workspace layout with responsive sidebar navigation",
      "Strict TypeScript definitions for application data flows",
    ],
    githubUrl: "https://github.com/KerelosNasser/saas-app",
    status: "repo",
  },
];
