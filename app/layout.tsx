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
  /**
   * Icons declared as plain paths, from public/, rather than left to the
   * app/ file convention.
   *
   * The convention works — it served the right crown at every URL — but it
   * routes the icons through Next's generated-asset pipeline, and on Vercel
   * every generated asset URL picks up a `?dpl=<deployment id>` suffix. The
   * emitted tag read:
   *
   *   /favicon.ico?favicon.1to0g6l9_8fy3.ico?dpl=dpl_E1tETnxhfgvEwvLhDuBZui6jMqDC
   *
   * Google's favicon rule is one line: "The favicon URL must be stable (don't
   * change the URL frequently)." That URL changes on every deployment, and the
   * stats bot deploys every thirty minutes — roughly fifty new favicon URLs a
   * day, all serving identical bytes.
   *
   * Plain strings are not rewritten: `/manifest.webmanifest` and the og:image
   * both ship clean today while all 127 `_next/static` references carry the
   * suffix. So the paths below stay stable across deployments, which is the
   * whole point of moving the three files into public/.
   *
   * ICO first and SVG second on purpose. Google's supported favicon formats are
   * BMP, GIF, ICO, PNG, JPEG, PPM and TIFF — SVG is not among them — so the
   * format Google can actually read is the one that leads. Browsers that prefer
   * the SVG still take it; they read the whole list.
   */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
  // The dark value, and the one a browser sees before any script runs. The bar
  // themes now, so the strip behind the iOS status bar has to follow it — the
  // inline script below and ThemeToggle both rewrite this tag, because the
  // theme comes from a stored choice rather than from prefers-color-scheme and
  // a media-matched theme-color would be wrong for anyone who picked light on
  // a dark device.
  themeColor: "#0a0a0b",
  // Emits <meta name="color-scheme" content="dark light">. Dark is named
  // first because it is the default and the one an unset visitor gets; light
  // is named at all so the browser knows the page can do both and does not
  // apply its own adjustments to controls in the theme it did not expect.
  colorScheme: "dark light",
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
  // A 512x512 PNG, not the SVG this used to name.
  //
  // Google's Logo structured-data rules are specific: the image "must be
  // 112x112px, at minimum", "must be crawlable and indexable", and its format
  // "must be supported by Google Images". An SVG satisfies none of those
  // cleanly — it has no intrinsic pixel size to measure a minimum against, and
  // SVG is absent from the format list Google publishes for favicons in search
  // (BMP, GIF, ICO, PNG, JPEG, PPM, TIFF). icon-512.png is already built from
  // the same crown geometry, already served at a stable path, and is
  // unambiguous on every count. This is the node every Article on the site
  // resolves its author/publisher to, so it is the logo rich results and AI
  // engines pull for attribution — the one place the format needs to be dull.
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/icon-512.png`,
    width: 512,
    height: 512,
  },
  description:
    "An independent, fan-run statistics site tracking Burna Boy's certifications, chart history, awards and tour records — every figure sourced and verified.",
  sameAs: ["https://x.com/paulemmanuelng"],
  founder: {
    "@type": "Person",
    name: "Ukpaka Emmanuel",
    url: `${siteUrl}/curator`,
  },
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
      /* The pre-paint script below writes data-theme onto this element before
         React hydrates, so the server's markup and the client's DOM disagree by
         exactly that attribute — on every page, every load. React logged a
         hydration error for it, which is noise that hides the mismatches that
         DO matter. This is the documented answer for a theme script; it
         suppresses the warning one level deep, not the whole tree. */
      suppressHydrationWarning
    >
      {/* suppressHydrationWarning: some browser extensions (e.g. Grammarly)
          add attributes to <body> before React loads, which is harmless. */}
      <body suppressHydrationWarning>
        {/* Resolves the theme BEFORE first paint, so a light-mode reader
            never sees a dark frame (and the reverse). It has to run inline and
            synchronously: any deferred script, and any theme read during
            hydration, is a repaint the eye catches.

            Three stored choices, two possible themes. "system" is resolved
            here and re-resolved by ThemeToggle's listener while the page is
            open; anything unrecognised — including nothing stored at all —
            is dark, which is the site as it has always looked. That is why
            the attribute is always written: "no preference yet" and "follow
            the device" must not collapse into the same CSS state. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var c=localStorage.getItem("theme");' +
              'var t=c==="light"||c==="dark"?c:' +
              'c==="system"&&matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";' +
              'document.documentElement.dataset.theme=t;' +
              'var m=document.querySelector(\'meta[name="theme-color"]\');' +
              'if(m)m.setAttribute("content",t==="light"?"#f7f4ee":"#0a0a0b")}' +
              'catch(e){document.documentElement.dataset.theme="dark"}',
          }}
        />
        <FlagEmojiPolyfill />
        {/* Album art is served from Spotify's image CDN — open the connection
            early so covers (a likely LCP element on /music) load faster. React
            hoists these resource hints into <head>. */}
        <link rel="preconnect" href="https://i.scdn.co" />
        <link rel="dns-prefetch" href="https://i.scdn.co" />
        <a href="#content" className="skipLink">Skip to content</a>
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
