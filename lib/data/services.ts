import { Capability, ProcessStep } from "@/types";

export const capabilitiesData: Capability[] = [
  {
    title: "SaaS & MVPs",
    description:
      "Turn an idea into a functional product users can actually use. From concept to working software with auth, dashboards, and databases.",
    deliverables: [
      "User authentication & account setup",
      "Interactive dashboards & user workflows",
      "Database schema & data modeling",
      "Production deployment to your domain",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Business tools",
    description:
      "Replace repetitive manual workflows with custom software that centralizes company data and automates daily tasks.",
    deliverables: [
      "Readable metric cards & trend charts",
      "Searchable and filterable data tables",
      "Admin panels & role-based access",
      "Form processing & workflow automation",
    ],
    technologies: ["React", "TypeScript", "TanStack Query", "Recharts", "Tailwind CSS"],
  },
  {
    title: "Custom web applications",
    description:
      "Build web applications around your exact business requirements, designed to work smoothly on mobile and desktop screens.",
    deliverables: [
      "Responsive, mobile-friendly interfaces",
      "Fast page load times & clean styling",
      "Live search, filtering, and data catalogs",
      "Accessible and semantic structure",
    ],
    technologies: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: "APIs & backend",
    description:
      "Create reliable backend systems and integrations that power your web application smoothly.",
    deliverables: [
      "REST API routes & endpoints",
      "Relational SQL database design",
      "External service integrations",
      "Structured error logging & monitoring",
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
