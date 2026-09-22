import React from "react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/lib/data/profile";
import { Award, BookOpen, CheckCircle, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 border-b border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
              About Kero
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Practical engineering grounded in business systems.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Background narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a Junior Full Stack Developer based in Egypt, studying Management Information
              Systems (MIS) at Alexandria University. My coursework provides a strong foundation
              in business processes, systems analysis, and database design, which directly informs
              how I approach software development.
            </p>
            <p>
              Rather than chasing fleeting development hype or over-engineering solutions with
              unnecessary microservices, I prioritize writing clean, maintainable code that directly
              solves the client&apos;s problem. I believe a good web application should be fast,
              intuitive to use, and straightforward to maintain.
            </p>
            <p>
              I actively build and ship projects with React, Next.js, TypeScript, Python/FastAPI,
              and PostgreSQL, continuously expanding my practical engineering capabilities through
              hands-on code.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero fake claims or inflated metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>All code verifiable on GitHub</span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Credentials Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-white/[0.08] bg-[#0f1219] p-6 space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Verified Credentials & Education
              </h3>

              {/* Education */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] shrink-0 text-slate-300">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {profileData.education.degree}
                  </p>
                  <p className="text-xs text-slate-400">
                    {profileData.education.institution}
                  </p>
                </div>
              </div>

              {/* Certification */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 shrink-0 text-emerald-400">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {profileData.certification.title}
                  </p>
                  <p className="text-xs text-slate-400">
                    Issued by {profileData.certification.issuer}
                  </p>
                </div>
              </div>

              {/* Approach summary */}
              <div className="flex items-start gap-3 pt-2 border-t border-white/[0.06]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] shrink-0 text-slate-300">
                  <Code className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Core Development Philosophy
                  </p>
                  <p className="text-xs text-slate-400">
                    Simplicity, typed reliability, performance, and transparent communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
