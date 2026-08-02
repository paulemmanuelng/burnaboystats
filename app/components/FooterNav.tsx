import Link from "next/link";
import { footerColumns } from "../lib/links";

/**
 * The footer sitemap: brand block plus four titled link columns.
 *
 * Each column is its own <nav> with the heading as its accessible name, so the
 * whole sitemap isn't announced as one undifferentiated list of thirty links.
 */
export default function FooterNav() {
  return (
    <div className="footerGrid">
      <div className="footerBrand">
        <div className="footerMark">
          BURNABOY<span>STATS</span>
        </div>
        <p className="footerDisclaimer">
          An unofficial fan site — not affiliated with or endorsed by Burna Boy. Artwork
          provided by Spotify and remains the property of its owners.
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
              <a key={`${col.label}-${l.href}`} href={l.href}>
                {l.label}
              </a>
            ) : (
              <Link key={`${col.label}-${l.href}`} href={l.href}>
                {l.label}
              </Link>
            )
          )}
        </nav>
      ))}
    </div>
  );
}
