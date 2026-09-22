import React from "react";
import { Container } from "@/components/layout/container";
import { projectsData } from "@/lib/data/projects";
import { ArrowUpRight, ExternalLink, Code2, Layers, CheckCircle } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="py-20 md:py-28 lg:py-32 border-b border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Selected Work
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real projects with verifiable code.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Every featured project below is backed by public source code on GitHub.
            Explore the problem, implementation, architecture, and live applications.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12 md:space-y-16">
          {projectsData.map((project, index) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-white/[0.08] bg-[#0f1219] p-6 sm:p-8 lg:p-10 transition-colors hover:border-white/[0.16] shadow-sm"
            >
              {/* Project Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.08] pb-6 mb-6">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded bg-white/[0.05] border border-white/[0.08] px-2.5 py-0.5 font-mono text-xs text-slate-300">
                      0{index + 1} • {project.category}
                    </span>
                    {project.status === "live" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Deployment
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/50 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                        Public Repository
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl pt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 max-w-2xl">{project.tagline}</p>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2 sm:pt-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-slate-950 hover:bg-slate-200 transition-colors min-h-[38px]"
                    >
                      <span>Live App</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-colors min-h-[38px]"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View GitHub</span>
                    <ArrowUpRight className="h-3 w-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Project Deep-Dive Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Problem & Solution (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                      <Layers className="h-3.5 w-3.5 text-slate-400" />
                      <span>The Problem</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300 bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                      {project.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                      <Code2 className="h-3.5 w-3.5" />
                      <span>What Kero Built</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300 bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Right Column: Architecture & Key Features (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      Technical Architecture
                    </p>
                    <p className="text-sm leading-relaxed text-slate-300 bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                      {project.architecture}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      Key Capabilities & Features
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {project.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-2 bg-white/[0.02] border border-white/[0.04] p-2.5 rounded-lg"
                        >
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technologies Used Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-slate-500 mr-2">Technologies:</span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
