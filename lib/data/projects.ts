import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "advanced-ecommerce",
    title: "AliMart Storefront",
    tagline: "A modern retail storefront with instant filtering, product search, and a persistent shopping cart.",
    category: "E-Commerce / Web App",
    problem:
      "Online retail storefronts often feel sluggish when filtering products or browsing categories with repeated page reloads.",
    solution:
      "Built an instant-filtering retail storefront using React 19 and Vite. Shoppers can search, filter by multiple categories, inspect product details in modals, and manage cart items smoothly without page refreshes.",
    architecture:
      "Component-driven React 19 architecture with Vite for minimal latency, TypeScript for product schema safety, and Tailwind CSS with shadcn/ui for accessible styling.",
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
    architecture:
      "Built with React 19, Vite, TanStack Query for asynchronous state handling, Recharts for responsive SVG visualizations, and Tailwind CSS for grid layout.",
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
    architecture:
      "Built with Next.js App Router using React Server Components, Sentry error tracking, TypeScript schemas, and utility-first Tailwind CSS.",
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
