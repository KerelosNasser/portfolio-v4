import React from "react";
import { Container } from "@/components/layout/container";
import { ArrowDown, ArrowUpRight, ShoppingBag, Search, ExternalLink } from "lucide-react";

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
              <span>Independent Full-Stack Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
              I turn ideas into{" "}
              <span className="text-[#00A86B] dark:text-[#20C67A]">
                working web products.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
              Specializing in SaaS products, business tools, dashboards, custom web applications,
              and backend systems. From initial concept to working software your users can interact with.
            </p>

            {/* CTAs: Dominant Green Primary, Quiet Bordered Secondary, Clean GitHub Link */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00A86B] hover:bg-[#087A52] dark:bg-[#20C67A] dark:hover:bg-[#0A8F61] px-5 py-3 text-sm font-semibold text-white dark:text-[#0D110F] shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <span>View projects</span>
                <ArrowDown className="h-4 w-4 text-muted-foreground" />
              </a>

              <a
                href="https://github.com/KerelosNasser"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                aria-label="Visit Kero's GitHub profile"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Supporting Technology Evidence */}
            <p className="text-xs text-muted-foreground pt-4 font-mono">
              Next.js · React · TypeScript · Python · PostgreSQL
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
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Realistic Storefront Preview UI */}
              <div className="p-4 space-y-3.5 bg-card text-left">
                {/* Store Header bar */}
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-[#00A86B] text-white dark:bg-[#20C67A] dark:text-[#0D110F] font-bold text-xs">
                      A
                    </span>
                    <span className="font-semibold text-xs text-foreground">AliMart Store</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded text-[11px]">
                      <Search className="h-3 w-3 text-muted-foreground" />
                      <span>Search...</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-[#00A86B] dark:text-[#20C67A] bg-[#00A86B]/10 dark:bg-[#20C67A]/15 px-2 py-1 rounded">
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span className="font-mono">2 items</span>
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
                    Workspace
                  </span>
                  <span className="rounded bg-secondary text-muted-foreground px-2.5 py-0.5">
                    Audio
                  </span>
                </div>

                {/* Product Grid Preview */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="rounded border border-border bg-background p-2.5 space-y-2">
                    <div className="h-20 rounded bg-secondary/80 flex flex-col items-center justify-center text-xs text-muted-foreground p-2 text-center">
                      <span className="font-mono text-[10px] text-[#00A86B] dark:text-[#20C67A]">IN STOCK</span>
                      <span className="font-medium text-foreground text-[11px] pt-0.5">Desk Lamp</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-foreground truncate">
                        Minimal LED Lamp
                      </p>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-muted-foreground">$48.00</span>
                        <span className="text-[#00A86B] dark:text-[#20C67A] font-semibold text-[10px]">+ Add</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded border border-border bg-background p-2.5 space-y-2">
                    <div className="h-20 rounded bg-secondary/80 flex flex-col items-center justify-center text-xs text-muted-foreground p-2 text-center">
                      <span className="font-mono text-[10px] text-[#00A86B] dark:text-[#20C67A]">IN STOCK</span>
                      <span className="font-medium text-foreground text-[11px] pt-0.5">Studio Audio</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-foreground truncate">
                        Wireless Headphones
                      </p>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-muted-foreground">$129.00</span>
                        <span className="text-[#00A86B] dark:text-[#20C67A] font-semibold text-[10px]">+ Add</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project attribution caption */}
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
