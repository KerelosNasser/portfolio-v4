import { Capability, ProcessStep } from "@/types";

export const capabilitiesData: Capability[] = [
  {
    title: "SaaS & MVPs",
    description:
      "Products that need authentication, dashboards, workflows, and integrations. From initial concept to a working version people can use.",
    deliverables: [
      "User authentication & session management",
      "Dashboard interfaces & interactive workflows",
      "Database schema design & migrations",
      "Deployment to Vercel or cloud hosts",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Business tools",
    description:
      "Internal apps, dashboards, and systems that replace manual work or organize company data in one place.",
    deliverables: [
      "Clear charts & metric summaries",
      "Searchable, filterable data tables",
      "Management panels & role-based views",
      "Form handling & workflow automation",
    ],
    technologies: ["React", "TypeScript", "TanStack Query", "Recharts", "Tailwind CSS"],
  },
  {
    title: "Custom web apps",
    description:
      "Product interfaces built around a specific workflow or business need, designed to work smoothly on mobile and desktop.",
    deliverables: [
      "Mobile-friendly, responsive layouts",
      "Dynamic filtering, search, and catalogs",
      "Fast page load times & clean styling",
      "Accessible, semantic markup",
    ],
    technologies: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: "APIs & backend",
    description:
      "Practical APIs and backend services using Next.js or FastAPI to power your application reliably.",
    deliverables: [
      "REST API route handlers & endpoints",
      "Relational data modeling & SQL queries",
      "External API integrations",
      "Error handling & logging",
    ],
    technologies: ["Python (FastAPI)", "Next.js Route Handlers", "PostgreSQL", "Prisma"],
  },
];

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Understand",
    description:
      "We talk through what you need, define the essential features, and choose the simplest stack that does the job.",
    focus: "Clear deliverables, agreed scope, and no guesswork.",
  },
  {
    stepNumber: "02",
    title: "Build",
    description:
      "I build the application in visible, working increments. You get regular updates and previews to test along the way.",
    focus: "Working software, responsive screens, and fast feedback loops.",
  },
  {
    stepNumber: "03",
    title: "Refine",
    description:
      "We test on mobile and desktop, fix edge cases, verify error handling, and deploy to your domain.",
    focus: "Clean launch, smooth handover, and code you can build on.",
  },
];
