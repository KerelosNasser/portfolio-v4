import React from "react";
import { Container } from "./container";
import { profileData } from "@/lib/data/profile";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#0C0C0B] py-14 text-sm">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          {/* Identity & Location */}
          <div className="space-y-1">
            <p className="font-semibold text-[#F1EFE9]">Kero</p>
            <p className="text-xs text-[#A7A39A]">Full-stack developer</p>
            <p className="text-xs text-[#6F6B63] pt-1">Alexandria, Egypt</p>
          </div>

          {/* Direct Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#A7A39A]">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F1EFE9] transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F1EFE9] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="hover:text-[#F1EFE9] transition-colors inline-flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={profileData.contact.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E56A3D] transition-colors inline-flex items-center gap-1"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#6F6B63]">
          <p>© {currentYear} Kerolos Nasser</p>
          <p className="font-mono text-[11px]">Editorial Developer Studio</p>
        </div>
      </Container>
    </footer>
  );
}
