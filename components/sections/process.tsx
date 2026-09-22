import React from "react";
import { Container } from "@/components/layout/container";
import { processStepsData } from "@/lib/data/services";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 lg:py-40 border-b border-border">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              03 — How I work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Simple, transparent collaboration.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            No agency bloat or opaque handoffs. We align on scope, build in testable
            increments, and ship reliable software.
          </p>
        </div>

        {/* 3-Step Scannable Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
          {processStepsData.map((step, idx) => (
            <div
              key={step.stepNumber}
              className={`space-y-4 ${idx > 0 ? "pt-8 md:pt-0 md:pl-12" : ""}`}
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold text-[#00A86B] dark:text-[#20C67A]">
                  {step.stepNumber} — {step.title}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              <div className="pt-2">
                <p className="text-xs font-mono text-muted-foreground">
                  Focus: {step.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
