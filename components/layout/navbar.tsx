"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./container";
import { profileData } from "@/lib/data/profile";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Selected Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "border-b border-white/[0.08] bg-[#07090e]/85 backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand & Availability */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 text-base font-semibold tracking-tight text-white hover:text-white/90 transition-colors"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.08] border border-white/[0.12] text-xs font-mono font-bold text-white group-hover:border-white/25 transition-colors">
                KN
              </span>
              <span className="font-medium text-slate-100">Kero</span>
              <span className="hidden text-xs text-slate-400 sm:inline-block font-mono">
                / Full Stack
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for freelance projects</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={profileData.contact.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-colors min-h-[36px]"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-3.5 py-1.5 text-xs font-medium text-slate-950 hover:bg-slate-200 transition-colors min-h-[36px]"
            >
              Discuss a Project
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-white/[0.08] py-4 space-y-3 bg-[#07090e]">
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-400 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for freelance projects</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href={profileData.contact.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] py-2.5 text-sm font-medium text-slate-200 hover:bg-white/[0.08]"
              >
                <span>WhatsApp: {profileData.contact.whatsapp.displayNumber}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-lg bg-white py-2.5 text-sm font-medium text-slate-950 hover:bg-slate-200"
              >
                Discuss a Project
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
