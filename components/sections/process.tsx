import React from "react";
import { Container } from "@/components/layout/container";
import { processStepsData } from "@/lib/data/services";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 lg:py-32 border-b border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Workflow
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A straightforward, iterative process.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            No bloated agency overhead or opaque handoffs. We align on scope, build in testable
            increments, and ship reliable software.
          </p>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processStepsData.map((step) => (
            <div
              key={step.stepNumber}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0f1219] p-6 sm:p-8"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded inline-block">
                  Phase {step.stepNumber}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Deliverable Focus
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
