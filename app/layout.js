import { Geist, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Body font — clean and readable.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Display font — bold and modern, used for big headings.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Burna Boy Stats — Unofficial Fan Site",
  description:
    "Burna Boy Stats: an unofficial fan site tracking the certifications, music and stats of Grammy-winning Nigerian superstar Burna Boy.",
};

// The links in the top navigation bar. Add a page here to add a menu item.
const navItems = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/certifications", label: "Certifications" },
  { href: "/tour", label: "Tour" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${spaceGrotesk.variable}`}
    >
      {/* suppressHydrationWarning: some browser extensions (e.g. Grammarly)
          add attributes to <body> before React loads, which is harmless. */}
      <body suppressHydrationWarning>
        {/* NAVIGATION BAR — shown on every page */}
        <header className="navbar">
          <nav className="navInner container">
            <Link href="/" className="brand">
              BurnaBoy<span>Stats</span>
            </Link>
            <ul className="navLinks">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

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
