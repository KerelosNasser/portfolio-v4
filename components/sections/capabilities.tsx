import React from "react";
import { Container } from "@/components/layout/container";
import { capabilitiesData } from "@/lib/data/services";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 lg:py-40 border-b border-border">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              02 — What I build
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Software built around your business goals.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            I help founders and businesses turn requirements into working web applications
            without agency overhead or technical confusion.
          </p>
        </div>

        {/* Editorial Typographic List - Not Cards */}
        <div className="divide-y divide-border border-y border-border">
          {capabilitiesData.map((item, index) => (
            <div
              key={item.title}
              className="py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group hover:bg-secondary/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-md"
            >
              {/* Number and Title (5 cols) */}
              <div className="lg:col-span-5 space-y-2">
                <span className="font-mono text-xs font-semibold text-[#00A86B] dark:text-[#20C67A]">
                  0{index + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
              </div>

              {/* Description & Deliverables (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                  {item.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#00A86B] dark:text-[#20C67A] font-bold">—</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-muted-foreground bg-secondary px-2.5 py-0.5 rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
