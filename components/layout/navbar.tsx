"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container } from "./container";
import { profileData } from "@/lib/data/profile";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#capabilities" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Identity */}
          <Link
            href="/"
            className="flex flex-col text-left group"
          >
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-foreground">
                KERO
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground font-normal">
                <span className="h-2 w-2 rounded-full bg-[#00A86B] dark:bg-[#20C67A]" />
                Available for freelance
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground font-normal tracking-tight">
              Independent Full-Stack Developer
            </span>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <nav className="flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium text-xs uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="h-4 w-px bg-border" />

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#00A86B] hover:bg-[#087A52] dark:bg-[#20C67A] dark:hover:bg-[#0A8F61] px-3.5 py-1.5 text-xs font-semibold text-white dark:text-[#0D110F] shadow-xs transition-colors"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Theme Toggle Button */}
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  aria-label="Toggle dark mode"
                  className="h-8 w-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  title="Toggle theme (or press 'd')"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-3.5 w-3.5" />
                  ) : (
                    <Moon className="h-3.5 w-3.5" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label="Toggle dark mode"
                className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3 bg-background">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#00A86B] dark:bg-[#20C67A]" />
              <span>Available for freelance projects</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-md bg-[#00A86B] hover:bg-[#087A52] dark:bg-[#20C67A] dark:hover:bg-[#0A8F61] px-4 py-2.5 text-sm font-semibold text-white dark:text-[#0D110F] shadow-xs transition-colors"
                >
                  <span>Let&apos;s talk</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
