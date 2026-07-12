import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Geist, Anton, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "./components/Nav";
import Breadcrumbs from "./components/Breadcrumbs";
import BirthdayCelebration from "./components/BirthdayCelebration";
import { siteUrl } from "./site";
import { footerLinks } from "./lib/links";
import "./globals.css";

// Body font — clean and readable.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Poster font — huge condensed type for the festival-poster headlines.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

// Monospace — editorial labels, tickers and buttons.
const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  verification: {
    google: [
      "2XOJ-X5bZw0xz0FThjWumiTpcwV3GOVU37g7M_NpxbE",
      "FVrWwEIrAzlM4eureFu-RMjQhgQOvVKRmNRwPjJ5b8I",
    ],
  },
  title: "Burna Boy Stats — Certifications, Charts, Awards & Records",
  description:
    "Every Burna Boy certification, chart peak, award and tour record in one place — fact-checked and always current. The unofficial stats home of Grammy-winning Nigerian superstar Burna Boy.",
  openGraph: {
    title: "Burna Boy Stats — Certifications, Charts, Awards & Records",
    description:
      "Every Burna Boy certification, chart peak, award and tour record in one place — fact-checked and always current.",
    type: "website",
    siteName: "Burna Boy Stats",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burna Boy Stats",
    description: "Certifications, discography and milestones of the African Giant.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

// Structured data (JSON-LD) so Google understands the site and its subject.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Burna Boy Stats",
  alternateName: "BurnaBoyStats",
  url: siteUrl,
  inLanguage: "en",
  description:
    "An unofficial fan site tracking the certifications, discography and milestones of Grammy-winning Nigerian superstar Burna Boy.",
  about: {
    "@type": "MusicGroup",
    name: "Burna Boy",
    alternateName: "Damini Ebunoluwa Ogulu",
    genre: ["Afrobeats", "Afro-fusion", "Reggae", "Dancehall"],
    award: "Grammy Award for Best Global Music Album (2021)",
    foundingLocation: { "@type": "Place", name: "Port Harcourt, Nigeria" },
    sameAs: [
      "https://en.wikipedia.org/wiki/Burna_Boy",
      "https://www.instagram.com/burnaboygram",
      "https://twitter.com/burnaboy",
      "https://www.youtube.com/channel/UCEzDdNqNkT-7rSfSGSr1hWg",
      "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
      "https://music.apple.com/us/artist/burna-boy/591899010",
      "https://www.facebook.com/Officialburnaboy",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${anton.variable} ${spaceMono.variable}`}
    >
      {/* suppressHydrationWarning: some browser extensions (e.g. Grammarly)
          add attributes to <body> before React loads, which is harmless. */}
      <body suppressHydrationWarning>
        <a href="#content" className="skipLink">Skip to content</a>
        {/* No-JS fallback: reveal animations are JS-driven, so without JS we must
            show the content (otherwise it stays at opacity:0). */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {/* Subtle film-grain texture overlay (sits behind content) */}
        <div className="grain" aria-hidden="true" />

        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Per-page breadcrumb structured data */}
        <Breadcrumbs />

        {/* NAVIGATION BAR — shown on every page */}
        <Nav />

        {/* Birthday takeover — self-gates to July 2 (Burna Boy's birthday) */}
        <BirthdayCelebration />

        {/* THE ACTUAL PAGE CONTENT gets slotted in here */}
        {children}

        {/* Vercel Web Analytics — privacy-friendly visitor stats */}
        <Analytics />
        {/* Vercel Speed Insights — real-user Core Web Vitals (LCP/CLS/INP) */}
        <SpeedInsights />

        {/* FOOTER — shown on every page */}
        <footer className="footer">
          <div className="container">
            <nav className="footerNav" aria-label="Footer">
              {footerLinks.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </nav>
            <p>© {new Date().getFullYear()} BurnaBoyStats · Unofficial Fan Site</p>
            <p className="disclaimer">
              This is an unofficial fan-made website created for educational and
              portfolio purposes. It is not affiliated with, endorsed by, or
              connected to Burna Boy or his representatives. The site&apos;s own
              graphics and design are original; album artwork is provided by
              Spotify and remains the property of its respective owners. No
              copyrighted audio is used.
            </p>
            <p className="builtBy">
              Built by{" "}
              <a
                href="https://www.tiktok.com/@paulemmanuelng"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink"
              >
                Paul Emmanuel
              </a>
            </p>
          </div>
          <div className="footerWordmark" aria-hidden="true">Burna Boy</div>
        </footer>
      </body>
    </html>
  );
}
