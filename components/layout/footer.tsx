import React from "react";
import { Container } from "./container";
import { profileData } from "@/lib/data/profile";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-14 text-sm">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          {/* Identity & Location */}
          <div className="space-y-1">
            <p className="font-semibold text-foreground">Kero</p>
            <p className="text-xs text-muted-foreground">Independent Full-Stack Developer</p>
            <p className="text-xs text-muted-foreground pt-1">Alexandria, Egypt</p>
          </div>

          {/* Direct Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={profileData.contact.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00A86B] dark:hover:text-[#20C67A] transition-colors inline-flex items-center gap-1"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <p>© {currentYear} Kerolos Nasser</p>
          <p className="font-mono text-[11px]">Independent Full-Stack Developer</p>
        </div>
      </Container>
    </footer>
  );
}
