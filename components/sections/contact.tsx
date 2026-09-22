"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/lib/data/profile";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers or restricted permissions
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
    <section id="contact" className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="rounded-2xl border border-white/[0.08] bg-[#0f1219] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />

          <div className="max-w-2xl space-y-6 relative z-10">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for freelance projects</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s build your next web application.
              </h2>
              <p className="text-base text-slate-300 sm:text-lg leading-relaxed">
                Whether you need a SaaS MVP, an internal dashboard, or a custom web platform,
                reach out directly. No complicated forms or sales pitches—just direct communication
                with the developer who will build your product.
              </p>
            </div>

            {/* Direct Action Channels */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* WhatsApp Trigger */}
              <a
                href={profileData.contact.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors shadow-sm min-h-[48px]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 opacity-75" />
              </a>

              {/* Direct Mailto */}
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white hover:border-white/25 transition-colors min-h-[48px]"
              >
                <Mail className="h-4 w-4 text-slate-400" />
                <span>Send Email</span>
              </a>

              {/* 1-Click Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm font-mono text-slate-300 hover:bg-white/[0.06] hover:text-white transition-colors min-h-[48px]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs text-emerald-400">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Contact Reassurance */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span>Typical response within a few hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-slate-400" />
                <span>Direct developer collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
