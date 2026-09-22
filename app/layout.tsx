import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { profileData } from "@/lib/data/profile";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F7F8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kero | Independent Full-Stack Developer — SaaS, Web Apps & Business Tools",
  description:
    "Kerolos Nasser (Kero) is an Independent Full-Stack Developer building modern SaaS applications, dashboards, internal business tools, and custom web platforms from concept to deployment.",
  keywords: [
    "Full Stack Developer",
    "Independent Developer",
    "Freelance Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SaaS MVP",
    "Business Tools",
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
    title: "Kero | Independent Full-Stack Developer — SaaS, Web Apps & Business Tools",
    description:
      "I turn ideas into working web products. Specializing in SaaS products, business tools, dashboards, custom web applications, and backend systems.",
    siteName: "Kero Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kero | Independent Full-Stack Developer — SaaS, Web Apps & Business Tools",
    description:
      "I build modern web products from concept to deployment. Available for freelance projects worldwide.",
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
      "Business Tools",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable)}
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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
