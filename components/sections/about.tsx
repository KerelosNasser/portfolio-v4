import React from "react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/lib/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 border-b border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 max-w-xl mb-16 md:mb-24">
          <p className="text-xs font-mono uppercase tracking-wider text-[#A7A39A]">
            04 — A little about me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1EFE9]">
            Practical thinking, clear code.
          </h2>
        </div>

        {/* Asymmetric 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#A7A39A] leading-relaxed">
            <p>
              I&apos;m Kero, a full-stack developer based in Alexandria, Egypt.
            </p>
            <p>
              I study Management Information Systems (MIS) at Alexandria University, which gives me
              a useful blend of business understanding and technical execution. Before writing
              code, I look closely at data structures, user workflows, and practical business needs.
            </p>
            <p>
              Most of my time is spent building with Next.js, React, TypeScript, Python, and
              PostgreSQL. I care about writing maintainable code with clear boundaries, so that when a
              project grows, it remains fast, stable, and easy to build on.
            </p>
            <p>
              I prioritize practical architecture and clear interfaces over unnecessary complexity.
              Every project in my portfolio is backed by public source code on GitHub.
            </p>
          </div>

          {/* Right Column: Background & Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6F6B63]">
                Education
              </span>
              <p className="text-base font-semibold text-[#F1EFE9]">
                {profileData.education.degree}
              </p>
              <p className="text-sm text-[#A7A39A]">
                {profileData.education.institution}
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6F6B63]">
                Certification
              </span>
              <p className="text-base font-semibold text-[#F1EFE9]">
                {profileData.certification.title}
              </p>
              <p className="text-sm text-[#A7A39A]">
                Issued by {profileData.certification.issuer}
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6F6B63]">
                Core Approach
              </span>
              <p className="text-sm text-[#A7A39A] leading-relaxed">
                Practical architecture, clean component boundaries, strict types, and direct
                communication.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6F6B63]">
                Location & Availability
              </span>
              <p className="text-sm text-[#F1EFE9]">
                Alexandria, Egypt <span className="text-[#A7A39A]">• Open to remote freelance</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
