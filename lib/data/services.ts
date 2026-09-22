import { Capability, ProcessStep } from "@/types";

export const capabilitiesData: Capability[] = [
  {
    title: "SaaS MVPs & Prototypes",
    description:
      "Transforming product concepts into working, deployable MVPs with responsive interfaces, user authentication, and structured databases.",
    deliverables: [
      "User authentication & session flows",
      "Interactive workspace & dashboard layouts",
      "Database schema design & migrations",
      "Deployment to Vercel or cloud hosts",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Business Tools & Dashboards",
    description:
      "Building internal operational tools, analytical dashboards, and administrative portals to visualize data and streamline workflows.",
    deliverables: [
      "Interactive charts & metric summaries",
      "Searchable, filterable data tables",
      "Role-based views and management panels",
      "Stateful forms and workflow automation",
    ],
    technologies: ["React", "TypeScript", "TanStack Query", "Recharts", "Tailwind CSS"],
  },
  {
    title: "Custom Web Applications",
    description:
      "Developing high-performance, mobile-first web applications, client portals, and storefronts tailored to specific business needs.",
    deliverables: [
      "Mobile-first, fully responsive layouts",
      "Dynamic filtering, search, and catalogs",
      "Fast page load times & optimized assets",
      "Accessible, semantic markup standards",
    ],
    technologies: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: "REST APIs & Backend Services",
    description:
      "Engineering clean, maintainable backend APIs, database models, and service integrations to power web applications.",
    deliverables: [
      "RESTful API route handlers & endpoints",
      "Relational data modeling & queries",
      "Third-party API & AI integrations",
      "Error handling, validation & monitoring",
    ],
    technologies: ["Python (FastAPI)", "Next.js Route Handlers", "PostgreSQL", "Prisma"],
  },
];

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Scope & Architecture",
    description:
      "We define the core user problems, scope the essential feature set, establish data structures, and select the simplest effective technical stack.",
    focus: "Clarity on deliverables, architecture diagram, and project roadmap.",
  },
  {
    stepNumber: "02",
    title: "Build & Iterate",
    description:
      "I develop the application in testable, iterative increments across frontend, backend, and database. You receive regular progress updates and staging previews.",
    focus: "Working code, responsive components, and tight feedback loops.",
  },
  {
    stepNumber: "03",
    title: "Polish & Ship",
    description:
      "I test across mobile and desktop viewports, audit performance, verify error handling, and deploy the application to your production environment.",
    focus: "Production deployment, clean handover, and verified responsiveness.",
  },
];
