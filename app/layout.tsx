import type { Metadata, Viewport } from "next";
import MobileTabBar from "./components/MobileTabBar";
import type { ReactNode } from "react";
import { Geist, Anton, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "./components/Nav";
import MobileNavSheet from "./components/MobileNavSheet";
import NavHistoryTracker from "./components/NavHistoryTracker";
import { navGroups, navUpdated, navSearchHint } from "./lib/navGroups";
import BackToTop from "./components/BackToTop";
import Breadcrumbs from "./components/Breadcrumbs";
import BirthdayCelebration from "./components/BirthdayCelebration";
import FooterNav from "./components/FooterNav";
import { siteUrl } from "./site";
import "./globals.css";
import FlagEmojiPolyfill from "./components/FlagEmojiPolyfill";

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
    "Every Burna Boy certification, chart peak, award and tour record — fact-checked and always current. The unofficial stats home of the African Giant.",
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
  // Emits <meta name="color-scheme" content="dark">. Pairs with the
  // color-scheme property in globals.css so Safari knows this is a dark UI
  // before the stylesheet lands, rather than adjusting colours itself.
  colorScheme: "dark",
  // The switch that makes every env(safe-area-inset-*) in the CSS real. The
  // bottom bars shipped with those insets from day one, but without
  // viewport-fit=cover iOS reports them all as 0 — so the iPhone home
  // indicator sat on top of the tab bar. Cover lets the page bleed to the
  // physical edges while the insets push the CONTENT back into the safe area.
  viewportFit: "cover",
};

// Structured data (JSON-LD) so Google understands the site and its subject.
// The publisher itself is an entity too: every Article on the site names
// "Burna Boy Stats" as author/publisher, and this is the node those names
// resolve to — with the logo AI engines and rich results pull for source
// attribution. Kept honest: a fan-run statistics site, not the artist.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Burna Boy Stats",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "An independent, fan-run statistics site tracking Burna Boy's certifications, chart history, awards and tour records — every figure sourced and verified.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Burna Boy Stats",
  alternateName: "BurnaBoyStats",
  url: siteUrl,
  inLanguage: "en",
  description:
    "An unofficial fan site tracking the certifications, discography and milestones of Grammy-winning Nigerian superstar Burna Boy.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
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
        <FlagEmojiPolyfill />
        {/* Album art is served from Spotify's image CDN — open the connection
            early so covers (a likely LCP element on /music) load faster. React
            hoists these resource hints into <head>. */}
        <link rel="preconnect" href="https://i.scdn.co" />
        <link rel="dns-prefetch" href="https://i.scdn.co" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Per-page breadcrumb structured data */}
        <Breadcrumbs />

        {/* Notes each route change, so a screen's back bar can tell "go back
            to where you came from" from "there is nowhere to go back to". */}
        <NavHistoryTracker />

        {/* NAVIGATION BAR — shown on every page */}
        <Nav />

        {/* The mobile spine: a fixed five-tab bar on every phone screen.
            Hidden above the mobile breakpoint, where the sticky nav does it. */}
        <MobileTabBar />

        {/* The hamburger's open state. Mounted once here rather than per
            screen: it is opened by an event, so every back bar's menu button
            reaches this one instance. The groups are built on the server, so
            the underlying data never enters the client bundle. */}
        <MobileNavSheet
          groups={navGroups}
          updated={navUpdated}
          searchHint={navSearchHint}
        />

        {/* Birthday takeover — self-gates to July 2 (Burna Boy's birthday) */}
        <BirthdayCelebration />

        {/* THE ACTUAL PAGE CONTENT gets slotted in here */}
        {children}

        {/* Floating "back to top" — appears after scrolling down a long page */}
        <BackToTop />

        {/* Vercel Web Analytics — privacy-friendly visitor stats */}
        <Analytics />
        {/* Vercel Speed Insights — real-user Core Web Vitals (LCP/CLS/INP) */}
        <SpeedInsights />

        {/* FOOTER — shown on every page */}
        <footer className="footer">
          <FooterNav />
        </footer>
      </body>
    </html>
  );
}
