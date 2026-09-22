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
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              05 — Contact
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Have a project in mind?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
              Tell me what you&apos;re trying to build, improve, or automate. No sales reps,
              intermediaries, or lengthy forms—just a direct conversation about your product
              requirements.
            </p>
          </div>

          {/* Direct Action Channels */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {/* Primary Action: Start a conversation via WhatsApp */}
            <a
              href={profileData.contact.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00A86B] hover:bg-[#087A52] dark:bg-[#20C67A] dark:hover:bg-[#0A8F61] px-6 py-3.5 text-sm font-semibold text-white dark:text-[#0D110F] shadow-sm transition-all hover:translate-y-[-1px]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Start a conversation</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Direct Email Link */}
            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>Send an email</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </a>

            {/* 1-Click Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-3.5 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#00A86B] dark:text-[#20C67A]" />
                  <span className="text-xs text-[#00A86B] dark:text-[#20C67A] font-sans font-medium">
                    Copied to clipboard
                  </span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="text-xs font-sans font-medium">Copy email</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-muted-foreground font-mono pt-4">
            Based in Alexandria, Egypt (UTC+2) • Available for freelance projects worldwide.
          </p>
        </div>
      </Container>
    </section>
  );
}
