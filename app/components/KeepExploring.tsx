import Link from "next/link";
import styles from "./KeepExploring.module.css";
import { exploreFor } from "../lib/links";
import { totalAwards, countryCount } from "../data/certifications";
import { chartEntryCount, numberOnes } from "../data/charts";

type SectionLink = { href: string; title: string; desc: string };

// Server component, so importing the (large) certifications data here stays on
// the server and is never shipped to the browser — the numbers below auto-update.
const sectionLinks: Record<string, SectionLink> = {
  home: { href: "/", title: "Home", desc: "Start here" },
  music: { href: "/music", title: "The Music", desc: "8 albums, EPs & every hit" },
  certifications: {
    href: "/certifications",
    title: "Certifications",
    desc: `${totalAwards()} awards across ${countryCount} countries`,
  },
  records: { href: "/records", title: "Career Records", desc: "Charts, awards & tours" },
  charts: {
    href: "/records/charts",
    title: "Chart Records",
    desc: `${chartEntryCount} chart entries · ${numberOnes} No.1s worldwide`,
  },
  tours: { href: "/records/tours", title: "Tours & Live", desc: "$30.46M — the biggest African tour" },
  about: { href: "/about", title: "About Burna Boy", desc: "Bio & career timeline" },
};

// A "what to look at next" block — shown at the bottom of each page so
// visitors click deeper into the site instead of leaving after one page.
export default function KeepExploring({ current }: { current: string }) {
  const keys = exploreFor[current] || ["music", "certifications", "records"];
  const links = keys.map((k) => sectionLinks[k]).filter(Boolean);

  return (
    <nav className={`container ${styles.wrap}`} aria-label="Explore more pages">
      <p className={styles.eyebrow}>Keep exploring</p>
      <div className={styles.grid}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={styles.card}>
            <span>
              <span className={styles.title}>{l.title}</span>
              <span className={styles.desc}>{l.desc}</span>
            </span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
