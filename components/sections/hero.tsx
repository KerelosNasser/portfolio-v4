import React from "react";
import { Container } from "@/components/layout/container";
import { ArrowDown, ArrowUpRight, ShoppingBag, Search, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36 border-b border-white/[0.08]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Simple, natural identity */}
            <p className="text-sm font-medium text-[#A7A39A] tracking-normal">
              Kero <span className="text-[#6F6B63]">/</span> Full-stack developer
            </p>

            {/* Headline with restrained serif emphasis */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F1EFE9] leading-[1.12]">
              I turn ideas into{" "}
              <span className="font-serif italic font-normal text-[#F1EFE9] underline decoration-[#E56A3D]/50 decoration-wavy decoration-1 underline-offset-8">
                working web products.
              </span>
            </h1>

            {/* Supporting sentence in human tone */}
            <p className="text-base sm:text-lg text-[#A7A39A] leading-relaxed max-w-xl font-normal">
              Full-stack developer focused on SaaS, business tools, dashboards, and modern
              web applications. I build the frontend, backend, database, and the parts in between.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F1EFE9] px-5 py-2.5 text-sm font-medium text-[#0C0C0B] hover:bg-white transition-colors"
              >
                <span>View my work</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-[#F1EFE9] hover:bg-white/[0.05] hover:border-white/25 transition-colors"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="h-4 w-4 text-[#A7A39A]" />
              </a>
            </div>

            {/* Simple tech reassurance - no badges */}
            <p className="text-xs text-[#6F6B63] pt-4 font-mono">
              Working with Next.js, React, TypeScript, Python, and PostgreSQL.
            </p>
          </div>

          {/* Right Column: Real Project Visual Preview (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-white/15 bg-[#141413] shadow-2xl overflow-hidden transition-all duration-300 hover:border-white/25">
              {/* Browser Chrome */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-[#1B1B19]/70 text-xs text-[#A7A39A]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#6F6B63] bg-black/30 px-2 py-0.5 rounded border border-white/5">
                  <span>advanced-e-commerce.vercel.app</span>
                </div>
                <a
                  href="https://advanced-e-commerce.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F1EFE9] transition-colors"
                  aria-label="View live AliMart site"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Realistic Storefront Preview UI */}
              <div className="p-4 space-y-3.5 bg-[#0C0C0B]/90 text-left">
                {/* Store Header bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-[#E56A3D]/20 text-[#E56A3D] font-bold text-xs">
                      A
                    </span>
                    <span className="font-semibold text-xs text-[#F1EFE9]">AliMart</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#A7A39A] text-xs">
                    <div className="flex items-center gap-1 bg-white/[0.04] px-2 py-1 rounded text-[11px]">
                      <Search className="h-3 w-3 text-[#6F6B63]" />
                      <span className="text-[#6F6B63]">Search...</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#E56A3D]">
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>2</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex items-center gap-1.5 overflow-hidden text-[11px]">
                  <span className="rounded bg-[#E56A3D] text-[#0C0C0B] px-2 py-0.5 font-medium">
                    All Products
                  </span>
                  <span className="rounded bg-white/[0.05] text-[#A7A39A] px-2 py-0.5">
                    Electronics
                  </span>
                  <span className="rounded bg-white/[0.05] text-[#A7A39A] px-2 py-0.5">
                    Home & Desk
                  </span>
                  <span className="rounded bg-white/[0.05] text-[#A7A39A] px-2 py-0.5">
                    Audio
                  </span>
                </div>

                {/* Product Grid Preview */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="rounded border border-white/10 bg-[#141413] p-2.5 space-y-2">
                    <div className="h-20 rounded bg-white/[0.03] flex items-center justify-center text-xs text-[#6F6B63]">
                      Product Image
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-[#F1EFE9] truncate">
                        Minimal Desk Lamp
                      </p>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-[#A7A39A]">$48.00</span>
                        <span className="text-[#E56A3D] font-medium">+ Add</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded border border-white/10 bg-[#141413] p-2.5 space-y-2">
                    <div className="h-20 rounded bg-white/[0.03] flex items-center justify-center text-xs text-[#6F6B63]">
                      Product Image
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-[#F1EFE9] truncate">
                        Wireless Headphones
                      </p>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-[#A7A39A]">$129.00</span>
                        <span className="text-[#E56A3D] font-medium">+ Add</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real project attribution caption */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#6F6B63]">
                  <span>Live Project: AliMart Storefront</span>
                  <span className="font-mono">React 19 • Vite • Cart State</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
