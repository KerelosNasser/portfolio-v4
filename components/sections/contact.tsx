"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/lib/data/profile";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = profileData.contact.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="max-w-2xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#A7A39A]">
              05 — Contact
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F1EFE9]">
              Let&apos;s talk.
            </h2>
            <p className="text-base sm:text-lg text-[#A7A39A] leading-relaxed pt-2">
              Have an idea for a web app, dashboard, or business tool? Reach out directly.
              No sales reps or complicated forms—just a conversation about what you need and how
              we can build it.
            </p>
          </div>

          {/* Direct Action Channels */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* WhatsApp Trigger */}
            <a
              href={profileData.contact.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F1EFE9] px-5 py-3 text-sm font-medium text-[#0C0C0B] hover:bg-white transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Direct Mailto */}
            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-[#F1EFE9] hover:bg-white/[0.05] hover:border-white/25 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#A7A39A]" />
              <span>Email</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#A7A39A]" />
            </a>

            {/* 1-Click Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-mono text-[#A7A39A] hover:bg-white/[0.04] hover:text-[#F1EFE9] transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#E56A3D]" />
                  <span className="text-xs text-[#E56A3D]">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="text-xs">Copy email</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-[#6F6B63] font-mono pt-4">
            Based in Alexandria, Egypt (UTC+3) • Typically respond within a few hours.
          </p>
        </div>
      </Container>
    </section>
  );
}
