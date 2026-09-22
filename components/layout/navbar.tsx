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
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "border-b border-white/[0.08] bg-[#0C0C0B]/90 backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#F1EFE9] hover:text-white transition-colors"
          >
            <span>Kero</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-normal text-[#A7A39A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E56A3D]" />
              Available for projects
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#A7A39A] hover:text-[#F1EFE9] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profileData.contact.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#A7A39A] hover:text-[#E56A3D] transition-colors"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-md border border-white/10 text-[#F1EFE9] hover:bg-white/[0.04] transition-colors"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-white/[0.08] py-4 space-y-3 bg-[#0C0C0B]">
            <div className="flex items-center gap-1.5 text-xs text-[#A7A39A] px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E56A3D]" />
              <span>Available for freelance projects</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-[#F1EFE9] hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profileData.contact.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-[#E56A3D] hover:bg-white/[0.04] transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
