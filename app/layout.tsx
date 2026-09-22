import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { profileData } from "@/lib/data/profile";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0C0C0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kero | Full Stack Developer — Freelance Web & SaaS Development",
  description:
    "Kerolos Nasser (Kero) is a Full Stack Developer building modern SaaS applications, dashboards, internal business tools, and custom web platforms from idea to production.",
  keywords: [
    "Full Stack Developer",
    "Freelance Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "FastAPI",
    "SaaS MVP",
    "Web Application Developer",
    "Kerolos Nasser",
    "Kero",
  ],
  authors: [{ name: "Kerolos Nasser", url: "https://github.com/KerelosNasser" }],
  creator: "Kerolos Nasser",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-v4.vercel.app",
    title: "Kero | Full Stack Developer — Freelance Web & SaaS Development",
    description:
      "I turn product concepts into functional, responsive web applications. SaaS MVPs, dashboards, business tools, and custom web platforms.",
    siteName: "Kero Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kero | Full Stack Developer — Freelance Web & SaaS Development",
    description:
      "I build modern web products from idea to production. Available for freelance projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    alternateName: profileData.preferredName,
    jobTitle: profileData.role,
    url: "https://github.com/KerelosNasser",
    email: `mailto:${profileData.contact.email}`,
    sameAs: [
      profileData.contact.github,
      profileData.contact.linkedin,
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SaaS Development",
      "Full Stack Development",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontSerif.variable, fontMono.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
