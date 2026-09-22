import React from "react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/lib/data/profile";
import { ArrowDown, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";

export function Hero() {
  const coreTech = [
    "Next.js",
    "React 19",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Tailwind CSS",
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 border-b border-white/[0.08]">
      {/* Subtle background ambient gradient (restrained, dark) */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[380px] w-[600px] rounded-full bg-indigo-950/20 blur-[130px]" />
      </div>

      <Container>
        <div className="max-w-3xl space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>{profileData.availability}</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {profileData.headline}
            </h1>
            <p className="text-lg leading-relaxed text-slate-300 sm:text-xl max-w-2xl font-normal">
              Full Stack Developer specializing in turning product concepts into working web
              applications. I build SaaS MVPs, internal dashboards, business tools, and
              custom web platforms with clean, maintainable code.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={profileData.contact.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors shadow-sm min-h-[44px]"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              <span>Discuss a Project</span>
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white hover:border-white/25 transition-colors min-h-[44px]"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="h-4 w-4 text-slate-400" />
            </a>
          </div>

          {/* Practical Capabilities Checklist */}
          <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Full-stack implementation from UI to database</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Responsive, mobile-first web interfaces</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Direct communication & iterative delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Clean code with strict TypeScript types</span>
            </div>
          </div>

          {/* Verified Tech Stack Chips */}
          <div className="space-y-2 pt-2">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Primary Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {coreTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
