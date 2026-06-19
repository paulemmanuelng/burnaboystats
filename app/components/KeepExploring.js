import Link from "next/link";
import styles from "./KeepExploring.module.css";
import { exploreFor } from "../lib/links";
import { totalAwards, countryCount } from "../data/certifications";

// Server component, so importing the (large) certifications data here stays on
// the server and is never shipped to the browser — the numbers below auto-update.
const sectionLinks = {
  home: { href: "/", title: "Home", desc: "Start here" },
  music: { href: "/music", title: "The Music", desc: "8 albums, EPs & every hit" },
  certifications: {
    href: "/certifications",
    title: "Certifications",
    desc: `${totalAwards()} awards across ${countryCount} countries`,
  },
  tour: { href: "/tour", title: "Live & Tour", desc: "Stadiums, Grammys & the World Cup" },
  about: { href: "/about", title: "About Burna Boy", desc: "Bio & career timeline" },
};

// A "what to look at next" block — shown at the bottom of each page so
// visitors click deeper into the site instead of leaving after one page.
export default function KeepExploring({ current }) {
  const keys = exploreFor[current] || ["music", "certifications", "tour"];
  const links = keys.map((k) => sectionLinks[k]);

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
