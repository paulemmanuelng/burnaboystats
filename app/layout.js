import { Geist, Space_Grotesk, Anton, Space_Mono } from "next/font/google";
import Nav from "./components/Nav";
import { siteUrl } from "./site";
import "./globals.css";

// Body font — clean and readable.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Display font — mid-level headings.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
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

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  verification: { google: "2XOJ-X5bZw0xz0FThjWumiTpcwV3GOVU37g7M_NpxbE" },
  title: "Burna Boy Stats — Unofficial Fan Site",
  description:
    "Burna Boy Stats: an unofficial fan site tracking the certifications, music and stats of Grammy-winning Nigerian superstar Burna Boy.",
  openGraph: {
    title: "Burna Boy Stats",
    description:
      "Certifications, discography and milestones of Grammy-winning Nigerian superstar Burna Boy.",
    type: "website",
    siteName: "Burna Boy Stats",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burna Boy Stats",
    description: "Certifications, discography and milestones of the African Giant.",
  },
};

// Structured data (JSON-LD) so Google understands the site and its subject.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Burna Boy Stats",
  url: siteUrl,
  description:
    "An unofficial fan site tracking the certifications, discography and milestones of Grammy-winning Nigerian superstar Burna Boy.",
  about: {
    "@type": "MusicGroup",
    name: "Burna Boy",
    alternateName: "Damini Ebunoluwa Ogulu",
    genre: ["Afrobeats", "Afro-fusion"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${anton.variable} ${spaceMono.variable}`}
    >
      {/* suppressHydrationWarning: some browser extensions (e.g. Grammarly)
          add attributes to <body> before React loads, which is harmless. */}
      <body suppressHydrationWarning>
        {/* Subtle film-grain texture overlay (sits behind content) */}
        <div className="grain" aria-hidden="true" />

        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* NAVIGATION BAR — shown on every page */}
        <Nav />

        {/* THE ACTUAL PAGE CONTENT gets slotted in here */}
        {children}

        {/* FOOTER — shown on every page */}
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} BurnaBoyStats · Unofficial Fan Site</p>
            <p className="disclaimer">
              This is an unofficial fan-made website created for educational and
              portfolio purposes. It is not affiliated with, endorsed by, or
              connected to Burna Boy or his representatives. All graphics are
              original; no copyrighted images or audio are used.
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
        </footer>
      </body>
    </html>
  );
}
