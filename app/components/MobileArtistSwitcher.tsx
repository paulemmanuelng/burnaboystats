import Link from "next/link";
import s from "./mobileArtistSwitcher.module.css";
import type { ArtistPageSegment } from "../lib/artistPages";

/**
 * Phone: a board artist's three pages as a non-pinned 44px row of equal
 * segments directly under the back bar (J3-10, design review 8 Oct 2026; fixes
 * 56, 67). The current page is aria-current, in N2. On the certifications
 * screen it replaces the two cards at the foot. Same segments as the desktop
 * row (lib/artistPages), with the short labels; two pages draw two columns.
 */
export default function MobileArtistSwitcher({ name, segments }: { name: string; segments: ArtistPageSegment[] }) {
  if (segments.length < 2) return null;
  return (
    <div className={s.row}>
      <nav aria-label={`${name}'s pages`} className={s.switcher}>
        {segments.map((g) => (
          <Link key={g.key} href={g.href} className={s.seg} aria-current={g.current ? "page" : undefined}>
            {g.short}
            {g.count !== undefined && <span className={s.count}>{g.count}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}
