import React from "react";
import { Container } from "@/components/layout/container";
import { capabilitiesData } from "@/lib/data/services";
import { Check, Cpu, LayoutDashboard, MonitorSmartphone, Server } from "lucide-react";

export function Capabilities() {
  const icons = [
    <Cpu key="0" className="h-5 w-5 text-indigo-400" />,
    <LayoutDashboard key="1" className="h-5 w-5 text-indigo-400" />,
    <MonitorSmartphone key="2" className="h-5 w-5 text-indigo-400" />,
    <Server key="3" className="h-5 w-5 text-indigo-400" />,
  ];

  return (
    <section id="capabilities" className="py-20 md:py-28 lg:py-32 border-b border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
              What I Build
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services focused on tangible deliverables.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            I help founders and teams build working software without unnecessary overhead.
            Here is what I can realistically design, engineer, and deploy for your project.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilitiesData.map((capability, index) => (
            <div
              key={capability.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0f1219] p-6 sm:p-8 hover:border-white/[0.14] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08]">
                    {icons[index % icons.length]}
                  </div>
                  <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {capability.description}
                  </p>
                </div>

                <div className="pt-2">
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {capability.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {capability.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
