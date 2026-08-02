"use client"; // the footer differs between the home page and every other page

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerColumns, footerFor, DEFAULT_FOOTER } from "../lib/links";

/**
 * Two footers, as the design has them.
 *
 * The home page gets the full five-column sitemap. Every other page gets a
 * compact bar — wordmark, that page's own provenance line, and four links
 * chosen for where a reader of *that* page would go next. The footer is part
 * of each page's argument rather than the same block repeated.
 */

function Wordmark() {
  return (
    <div className="footerMark">
      BURNABOY<span>STATS</span>
    </div>
  );
}

const DISCLAIMER = "An unofficial fan site — not affiliated with or endorsed by Burna Boy.";

export default function FooterNav() {
  const pathname = usePathname();

  if (pathname !== "/") {
    const variant = footerFor[pathname] ?? DEFAULT_FOOTER;
    return (
      <div className="footerCompact">
        <div>
          <Wordmark />
          <p className="footerDisclaimer">
            {DISCLAIMER}
            {variant.note ? ` ${variant.note}` : ""}
          </p>
        </div>
        <nav className="footerQuick" aria-label="Footer">
          {variant.links.map((l) =>
            l.href.endsWith(".xml") ? (
              <a key={l.href} href={l.href}>{l.label}</a>
            ) : (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            )
          )}
        </nav>
      </div>
    );
  }

  return (
    <div className="footerGrid">
      <div className="footerBrand">
        <Wordmark />
        <p className="footerDisclaimer">
          {DISCLAIMER} Artwork provided by Spotify and remains the property of its owners.
        </p>
        <p className="footerCopy">
          © {new Date().getFullYear()} · Built by{" "}
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

      {footerColumns.map((col) => (
        <nav key={col.label} className="footerCol" aria-label={col.label}>
          {/* h6, as the design has it — a footer sitemap shouldn't insert
              itself into the page's heading outline, and each column's real
              name for assistive tech is the nav's aria-label. */}
          <h6 className="footerColTitle">{col.label}</h6>
          {col.links.map((l) =>
            /* The feed is a route handler, not a page — a plain anchor, so
               the router doesn't try to client-navigate to XML. */
            l.href.endsWith(".xml") ? (
              <a key={`${col.label}-${l.href}`} href={l.href}>{l.label}</a>
            ) : (
              <Link key={`${col.label}-${l.href}`} href={l.href}>{l.label}</Link>
            )
          )}
        </nav>
      ))}
    </div>
  );
}
