export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "live" | "repo";
}

export interface Capability {
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  focus: string;
}

export interface Profile {
  name: string;
  preferredName: string;
  role: string;
  availability: string;
  headline: string;
  valueProposition: string;
  location: string;
  education: {
    degree: string;
    institution: string;
  };
  certification: {
    title: string;
    issuer: string;
  };
  contact: {
    email: string;
    whatsapp: {
      number: string;
      displayNumber: string;
      chatUrl: string;
    };
    github: string;
    linkedin: string;
  };
}
