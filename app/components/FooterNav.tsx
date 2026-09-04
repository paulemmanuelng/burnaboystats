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

/**
 * The copyright year, read once when this module loads rather than on every
 * render.
 *
 * This is a client component mounted in the root layout, so the module is
 * evaluated twice — once on the server (at BUILD time; every page here is
 * statically generated) and once in the browser (at READ time). `new Date()`
 * inside the render therefore produced two different answers for the same
 * markup, and every reader who loaded a page built the previous year got a
 * hydration mismatch on the home page. React does not patch a mismatch in
 * place; it throws the server's subtree away and re-renders it on the client.
 *
 * Hoisting it does not make the two processes agree — nothing in a client
 * bundle can know the build's clock — so the element below is marked
 * suppressHydrationWarning, which is React's way of saying the server's value
 * is the authoritative one. That is also the correct fact: a copyright year
 * states when the page was last published, and for a static page that is the
 * build, not the moment someone happens to open it.
 */
const YEAR = new Date().getFullYear();

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
        {/* suppressHydrationWarning: see YEAR above — the server's build year
            is the authoritative one, and without this a page built in one year
            and read in the next tears the whole footer down and rebuilds it. */}
        <p className="footerCopy" suppressHydrationWarning>
          © {YEAR} · Built by{" "}
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
