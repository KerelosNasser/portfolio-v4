import React from "react";
import { Container } from "@/components/layout/container";
import { projectsData } from "@/lib/data/projects";
import { ArrowUpRight, ExternalLink, Search, ShoppingBag } from "lucide-react";

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

export function SelectedWork() {
  const [p1, p2, p3] = projectsData;

  return (
    <section id="work" className="py-24 md:py-32 lg:py-40 border-b border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-mono uppercase tracking-wider text-[#A7A39A]">
              01 — Selected work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1EFE9]">
              Real work, built to solve real problems.
            </h2>
          </div>
          <p className="text-sm text-[#A7A39A] max-w-sm leading-relaxed">
            Every project below is backed by public source code on GitHub and built with
            practical, maintainable software architecture.
          </p>
        </div>

        {/* PROJECTS CONTAINER */}
        <div className="space-y-28 md:space-y-36">
          {/* ============================================================ */}
          {/* PROJECT 01: AliMart Storefront (Text Left / Visual Right) */}
          {/* ============================================================ */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#E56A3D]">01 / E-COMMERCE & WEB APP</span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1EFE9]">
                  {p1.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A7A39A] leading-relaxed">
                  {p1.tagline}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#A7A39A] leading-relaxed">
                <p>
                  Shoppers get frustrated when filtering products requires waiting for page
                  refreshes. AliMart solves this with instant client-side category filtering,
                  live search, and a persistent shopping cart.
                </p>
                <ul className="space-y-2 pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E56A3D] font-bold">—</span>
                    <span>Instant category filtering without full-page reloads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E56A3D] font-bold">—</span>
                    <span>Persistent cart state that remembers items across sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E56A3D] font-bold">—</span>
                    <span>Touch-friendly mobile layouts for on-the-go shopping</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {p1.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-[#A7A39A] bg-white/[0.04] px-2.5 py-1 rounded border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                {p1.liveUrl && (
                  <a
                    href={p1.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-[#F1EFE9] px-4 py-2 text-xs font-medium text-[#0C0C0B] hover:bg-white transition-colors"
                  >
                    <span>Visit live store</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <a
                  href={p1.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A7A39A] hover:text-[#F1EFE9] transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>View GitHub</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Visual Column (7 cols): Realistic Storefront UI */}
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-white/15 bg-[#141413] shadow-xl overflow-hidden group">
                {/* Browser chrome */}
                <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-[#1B1B19]/70 text-xs text-[#A7A39A]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#6F6B63] bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <span>advanced-e-commerce.vercel.app</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#E56A3D]">Live</span>
                </div>

                {/* Storefront Layout */}
                <div className="p-5 space-y-4 bg-[#0C0C0B]">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-[#E56A3D] text-[#0C0C0B] font-bold text-xs">
                        A
                      </span>
                      <span className="font-semibold text-sm text-[#F1EFE9]">AliMart</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded text-xs text-[#6F6B63] border border-white/5">
                        <Search className="h-3 w-3" />
                        <span>Search products...</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#E56A3D] bg-[#E56A3D]/10 px-2.5 py-1 rounded border border-[#E56A3D]/20">
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span className="font-mono font-medium">Cart (3)</span>
                      </div>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="rounded bg-[#E56A3D] text-[#0C0C0B] px-2.5 py-1 font-medium">
                      All Items
                    </span>
                    <span className="rounded bg-white/[0.04] text-[#A7A39A] px-2.5 py-1 hover:text-white cursor-pointer">
                      Electronics
                    </span>
                    <span className="rounded bg-white/[0.04] text-[#A7A39A] px-2.5 py-1 hover:text-white cursor-pointer">
                      Home & Workspace
                    </span>
                    <span className="rounded bg-white/[0.04] text-[#A7A39A] px-2.5 py-1 hover:text-white cursor-pointer">
                      Audio
                    </span>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-2">
                      <div className="h-24 rounded bg-white/[0.03] flex items-center justify-center text-xs text-[#6F6B63]">
                        Minimal Desk Lamp
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-[#F1EFE9]">Desk Lamp</p>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-mono text-[#A7A39A]">$48.00</span>
                          <span className="text-[#E56A3D] font-medium">+ Cart</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-2">
                      <div className="h-24 rounded bg-white/[0.03] flex items-center justify-center text-xs text-[#6F6B63]">
                        Studio Headphones
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-[#F1EFE9]">Headphones</p>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-mono text-[#A7A39A]">$129.00</span>
                          <span className="text-[#E56A3D] font-medium">+ Cart</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-2">
                      <div className="h-24 rounded bg-white/[0.03] flex items-center justify-center text-xs text-[#6F6B63]">
                        Mechanical Board
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-[#F1EFE9]">Keyboard</p>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-mono text-[#A7A39A]">$89.00</span>
                          <span className="text-[#E56A3D] font-medium">+ Cart</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* PROJECT 02: Environmental Dashboard (Visual Left / Text Right) */}
          {/* ============================================================ */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Column (7 cols): Simulated Environmental Charts */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-lg border border-white/15 bg-[#141413] shadow-xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-[#1B1B19]/70 text-xs text-[#A7A39A]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#6F6B63] bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <span>environmental-dashboard (simulated data)</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A7A39A]">React 19</span>
                </div>

                {/* Dashboard UI */}
                <div className="p-5 space-y-4 bg-[#0C0C0B]">
                  {/* Metric Cards Row */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-1">
                      <p className="text-[11px] text-[#A7A39A]">Avg Temp Anomaly</p>
                      <p className="text-lg font-bold font-mono text-[#E56A3D]">+1.24°C</p>
                      <p className="text-[10px] text-[#6F6B63]">Simulated climate trend</p>
                    </div>

                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-1">
                      <p className="text-[11px] text-[#A7A39A]">Clean Energy Share</p>
                      <p className="text-lg font-bold font-mono text-[#F1EFE9]">28.6%</p>
                      <p className="text-[10px] text-[#6F6B63]">+3.2% vs baseline</p>
                    </div>

                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-1">
                      <p className="text-[11px] text-[#A7A39A]">Simulated Index</p>
                      <p className="text-lg font-bold font-mono text-[#F1EFE9]">418 ppm</p>
                      <p className="text-[10px] text-[#6F6B63]">Atmospheric model</p>
                    </div>
                  </div>

                  {/* SVG Chart Visualization */}
                  <div className="rounded border border-white/10 bg-[#141413] p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#F1EFE9]">
                        Global Temperature Anomaly Timeline
                      </span>
                      <div className="flex items-center gap-3 text-[11px] text-[#A7A39A]">
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E56A3D]" />
                          Simulated Trend
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                          Historical Base
                        </span>
                      </div>
                    </div>

                    {/* Chart SVG Canvas */}
                    <div className="h-36 w-full pt-2">
                      <svg viewBox="0 0 500 120" className="w-full h-full overflow-visible">
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.06)" />
                        <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.06)" />
                        <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.06)" />

                        {/* Baseline curve */}
                        <path
                          d="M0,105 Q120,95 240,75 T500,45"
                          fill="none"
                          stroke="rgba(255,255,255,0.25)"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />

                        {/* Active trend curve */}
                        <path
                          d="M0,110 C80,105 140,85 220,70 C300,55 380,35 500,15"
                          fill="none"
                          stroke="#E56A3D"
                          strokeWidth="2.5"
                        />

                        {/* Subtle area gradient under curve */}
                        <polygon
                          points="0,110 80,105 140,85 220,70 300,55 380,35 500,15 500,120 0,120"
                          fill="rgba(229,106,61,0.08)"
                        />

                        {/* Data point dots */}
                        <circle cx="220" cy="70" r="3.5" fill="#E56A3D" />
                        <circle cx="380" cy="35" r="3.5" fill="#E56A3D" />
                        <circle cx="500" cy="15" r="4" fill="#F1EFE9" stroke="#E56A3D" strokeWidth="2" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#6F6B63] font-mono pt-1">
                      <span>1980</span>
                      <span>1995</span>
                      <span>2010</span>
                      <span>2025 (Projected)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#E56A3D]">02 / DATA VISUALIZATION</span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1EFE9]">
                  {p2.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A7A39A] leading-relaxed">
                  {p2.tagline}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#A7A39A] leading-relaxed">
                <p>
                  Complex datasets can be hard to interpret without clean visual structure.
                  This dashboard organizes simulated climate metrics into intuitive time-series
                  charts and key summary cards.
                </p>
                <ul className="space-y-2 pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E56A3D] font-bold">—</span>
                    <span>Interactive time-series charts for temperature and emission trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E56A3D] font-bold">—</span>
                    <span>Summary indicator cards for simulated environmental indices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E56A3D] font-bold">—</span>
                    <span>Responsive SVG chart rendering that stays sharp on all screens</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {p2.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-[#A7A39A] bg-white/[0.04] px-2.5 py-1 rounded border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={p2.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-4 py-2 text-xs font-medium text-[#F1EFE9] hover:bg-white/[0.05] hover:border-white/25 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>View GitHub</span>
                  <ArrowUpRight className="h-3 w-3 text-[#A7A39A]" />
                </a>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* PROJECT 03: Next.js SaaS Foundation (Full-width Visual / Text Under) */}
          {/* ============================================================ */}
          <article className="space-y-8">
            {/* Full Width Visual: App Architecture & Workspace Window */}
            <div className="rounded-lg border border-white/15 bg-[#141413] shadow-xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-[#1B1B19]/70 text-xs text-[#A7A39A]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#6F6B63] bg-black/40 px-2 py-0.5 rounded border border-white/5">
                  <span>github.com/KerelosNasser/saas-app</span>
                </div>
                <span className="text-[11px] font-mono text-[#A7A39A]">App Router</span>
              </div>

              {/* SaaS App Layout Representation */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px] bg-[#0C0C0B]">
                {/* Sidebar Mockup (3 cols) */}
                <div className="hidden md:block md:col-span-3 border-r border-white/10 p-4 space-y-4 bg-[#111110]">
                  <div className="flex items-center gap-2 px-1">
                    <div className="h-5 w-5 rounded bg-white/15 flex items-center justify-center text-[10px] font-bold">
                      S
                    </div>
                    <span className="text-xs font-semibold text-[#F1EFE9]">Acme SaaS</span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="rounded bg-white/[0.06] text-[#F1EFE9] px-2.5 py-1.5 font-medium">
                      Overview
                    </div>
                    <div className="text-[#A7A39A] px-2.5 py-1.5 hover:text-white">
                      Workspaces
                    </div>
                    <div className="text-[#A7A39A] px-2.5 py-1.5 hover:text-white">
                      Integrations
                    </div>
                    <div className="text-[#A7A39A] px-2.5 py-1.5 hover:text-white">
                      Settings
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 text-[11px] text-[#6F6B63] space-y-1">
                    <p className="font-mono">Sentry: Active</p>
                    <p className="font-mono">Next.js 15+ / RSC</p>
                  </div>
                </div>

                {/* Workspace Main Area (9 cols) */}
                <div className="md:col-span-9 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <h4 className="text-sm font-semibold text-[#F1EFE9]">Workspace Overview</h4>
                      <p className="text-xs text-[#A7A39A]">App Router layout baseline</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#A7A39A] bg-white/[0.04] px-2 py-1 rounded border border-white/5">
                        production-ready architecture
                      </span>
                    </div>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-1">
                      <p className="text-[11px] text-[#A7A39A]">Layout Structure</p>
                      <p className="text-sm font-semibold text-[#F1EFE9]">Server Components</p>
                      <p className="text-[10px] text-[#6F6B63]">Isolated interactive islands</p>
                    </div>

                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-1">
                      <p className="text-[11px] text-[#A7A39A]">Monitoring</p>
                      <p className="text-sm font-semibold text-[#E56A3D]">Sentry Integrated</p>
                      <p className="text-[10px] text-[#6F6B63]">Automated error logging</p>
                    </div>

                    <div className="rounded border border-white/10 bg-[#141413] p-3 space-y-1">
                      <p className="text-[11px] text-[#A7A39A]">Data Safety</p>
                      <p className="text-sm font-semibold text-[#F1EFE9]">Strict TypeScript</p>
                      <p className="text-[10px] text-[#6F6B63]">Typed data flows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text & Details Underneath */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              <div className="lg:col-span-7 space-y-3">
                <span className="font-mono text-xs text-[#E56A3D]">03 / SAAS ARCHITECTURE</span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1EFE9]">
                  {p3.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A7A39A] leading-relaxed">
                  {p3.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#A7A39A] leading-relaxed pt-1">
                  Starting a SaaS project usually involves repeating the same setup: layout
                  structures, error monitoring, server component boundaries, and type
                  definitions. This foundation provides a clean baseline ready for building
                  business features.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4 lg:pt-8">
                <div className="flex flex-wrap items-center gap-2">
                  {p3.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-[#A7A39A] bg-white/[0.04] px-2.5 py-1 rounded border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={p3.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-4 py-2 text-xs font-medium text-[#F1EFE9] hover:bg-white/[0.05] hover:border-white/25 transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View GitHub Repository</span>
                    <ArrowUpRight className="h-3 w-3 text-[#A7A39A]" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
