import React from "react";
import { Container } from "@/components/layout/container";
import { ArrowDown, ArrowUpRight, ShoppingBag, Search, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36 border-b border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Client-First Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Identity & Role */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-muted-foreground">
              <span className="font-semibold text-foreground">Kero</span>
              <span>/</span>
              <span>Full-stack developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
              I turn ideas into{" "}
              <span className="text-[#00A86B] dark:text-[#20C67A]">
                working web products.
              </span>
            </h1>

            {/* Client-First Supporting Copy */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
              Full-stack developer focused on SaaS, business tools, dashboards, and modern
              web applications. From initial concept to working software your users can interact with.
            </p>

            {/* CTAs: Green Primary, Quiet Bordered Secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00A86B] hover:bg-[#087A52] dark:bg-[#20C67A] dark:hover:bg-[#0A8F61] px-5 py-2.5 text-sm font-semibold text-white dark:text-[#0D110F] shadow-sm transition-colors"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <span>View my work</span>
                <ArrowDown className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>

            {/* Client Reassurance */}
            <p className="text-xs text-muted-foreground pt-4 font-mono">
              Working with Next.js, React, TypeScript, Python, and PostgreSQL.
            </p>
          </div>

          {/* Right Column: Real Software Product Preview (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-border bg-card shadow-lg overflow-hidden transition-all duration-300 hover:border-[#00A86B]/40 dark:hover:border-[#20C67A]/40">
              {/* Browser Chrome */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border bg-secondary/70 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground bg-background/80 px-2.5 py-0.5 rounded border border-border">
                  <span>advanced-e-commerce.vercel.app</span>
                </div>
                <a
                  href="https://advanced-e-commerce.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  aria-label="View live AliMart site"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Realistic Storefront Preview UI */}
              <div className="p-4 space-y-3.5 bg-card text-left">
                {/* Store Header bar */}
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-[#00A86B]/15 text-[#00A86B] dark:bg-[#20C67A]/20 dark:text-[#20C67A] font-bold text-xs">
                      A
                    </span>
                    <span className="font-semibold text-xs text-foreground">AliMart</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded text-[11px]">
                      <Search className="h-3 w-3 text-muted-foreground" />
                      <span>Search...</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-[#00A86B] dark:text-[#20C67A] bg-[#00A86B]/10 dark:bg-[#20C67A]/15 px-2 py-1 rounded">
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>2 items</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex items-center gap-1.5 overflow-hidden text-[11px]">
                  <span className="rounded bg-[#00A86B] text-white dark:bg-[#20C67A] dark:text-[#0D110F] px-2.5 py-0.5 font-medium">
                    All Products
                  </span>
                  <span className="rounded bg-secondary text-muted-foreground px-2.5 py-0.5">
                    Electronics
                  </span>
                  <span className="rounded bg-secondary text-muted-foreground px-2.5 py-0.5">
                    Home & Desk
                  </span>
                  <span className="rounded bg-secondary text-muted-foreground px-2.5 py-0.5">
                    Audio
                  </span>
                </div>

                {/* Product Grid Preview */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="rounded border border-border bg-background p-2.5 space-y-2">
                    <div className="h-20 rounded bg-secondary flex items-center justify-center text-xs text-muted-foreground">
                      Product Preview
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-foreground truncate">
                        Minimal Desk Lamp
                      </p>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-muted-foreground">$48.00</span>
                        <span className="text-[#00A86B] dark:text-[#20C67A] font-semibold">+ Add</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded border border-border bg-background p-2.5 space-y-2">
                    <div className="h-20 rounded bg-secondary flex items-center justify-center text-xs text-muted-foreground">
                      Product Preview
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-foreground truncate">
                        Wireless Headphones
                      </p>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-muted-foreground">$129.00</span>
                        <span className="text-[#00A86B] dark:text-[#20C67A] font-semibold">+ Add</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real project attribution caption - client value first */}
                <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-medium text-foreground">Real Project: AliMart Storefront</span>
                  <span className="font-mono">React 19 • Vite • Live Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
