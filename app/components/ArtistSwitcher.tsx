import Link from "./SiteLink";
import s from "./artistSwitcher.module.css";
import type { ArtistPageSegment } from "../lib/artistPages";

/**
 * Desktop: a board artist's three pages as one segmented row, on its own row
 * under the breadcrumb at the page's x-80 edge (J3-10, design review 8 Oct
 * 2026; fix 67: "Certifications 159 · Charts 240 · Live 287" for Wizkid). It
 * is page navigation, so the current page is aria-current and draws N2, the
 * chip state, with ink counts (fix 56). Built from lib/artistPages; a page the
 * artist lacks is left out, a pending artist shows no counts, and fewer than
 * two pages draw nothing (there is nothing to switch between).
 */
export default function ArtistSwitcher({ name, segments }: { name: string; segments: ArtistPageSegment[] }) {
  if (segments.length < 2) return null;
  return (
    <div className={s.row}>
      <nav aria-label={`${name}'s pages`} className={s.switcher}>
        {segments.map((g) => (
          <Link key={g.key} href={g.href} className={s.seg} aria-current={g.current ? "page" : undefined}>
            {g.label}
            {g.count !== undefined && <span className={s.count}>{g.count}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}
