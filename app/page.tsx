import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C0C0B] text-[#F1EFE9] selection:bg-[#E56A3D]/25 selection:text-[#F1EFE9]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <Capabilities />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
