import TrackedLink from "./TrackedLink";
import styles from "./KeepExploring.module.css";
import { exploreFor } from "../lib/links";
import { totalAwards, countryCount } from "../data/certifications";
import { chartEntryCount, numberOnes } from "../data/charts";
import { tours } from "../data/tours";
import { albums } from "../data/albums";
import { careerYears } from "../data/timeline";
import { numberWord } from "../lib/homeData";

// The record tour by gross — the tile typed "$30.46M" while the hub beside it
// derived the same figure, and a typed copy follows nothing.
const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
const topTour = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];

type SectionLink = { href: string; title: string; desc: string };

// Server component, so importing the (large) certifications data here stays on
// the server and is never shipped to the browser — the numbers below auto-update.
export const sectionLinks: Record<string, SectionLink> = {
  home: { href: "/", title: "Home", desc: "Start here" },
  music: { href: "/music", title: "The Music", desc: `${albums.length} albums, EPs & every hit` },
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
  tours: { href: "/records/tours", title: "Tours & Live", desc: `${topTour.gross} — the biggest African tour` },
  about: { href: "/about", title: "About Burna Boy", desc: "Bio & career timeline" },
  timeline: { href: "/timeline", title: "Career Timeline", desc: `${numberWord(careerYears)} years, era by era` },
  afrobeats: { href: "/afrobeats", title: "The Afrobeats Board", desc: "The genre's biggest, counted by one rule" },
  "dai-dai": { href: "/dai-dai", title: "The Dai Dai Story", desc: "The World Cup song that conquered 2026" },
  "africas-biggest": { href: "/records/africas-biggest", title: "Africa's Biggest", desc: "Most-streamed African artists" },
  share: { href: "/share", title: "Stat Cards", desc: "Download a card & share the numbers" },
  "live-charts": {
    href: "/live-charts",
    title: "Live Charts",
    desc: "Where he's charting right now",
  },
  analysis: {
    href: "/analysis",
    title: "Chart Analysis",
    desc: "Four findings the totals hide",
  },
  api: { href: "/api", title: "Open Data API", desc: "Every figure as free JSON" },
  "by-the-numbers": {
    href: "/records/by-the-numbers",
    title: "By the Numbers",
    desc: "The whole career, quotable",
  },
  methodology: {
    href: "/methodology",
    title: "Methodology",
    desc: "Where every figure comes from",
  },
};

/** Where a page with no `exploreFor` list of its own is sent. Named and exported
 *  so the link-integrity test can hold the fallback to the same rules as the
 *  authored lists — a page falling through to it must not be one of these three. */
export const DEFAULT_EXPLORE = ["music", "certifications", "records"];

// A "what to look at next" block — shown at the bottom of each page so
// visitors click deeper into the site instead of leaving after one page.
export default function KeepExploring({ current }: { current: string }) {
  const keys = exploreFor[current] || DEFAULT_EXPLORE;
  const links = keys.map((k) => sectionLinks[k]).filter(Boolean);

  // Its margin is .container's `0 auto` and nothing else. The module's own
  // .wrap margins (64px/80px, 36px/56px on phones) lost that tie on every page
  // until 23 Sep 2026, because this stylesheet was linked ahead of globals.css.
  // Since the root layout stopped importing the FAQ and By-the-numbers pages
  // (lib/navGroups.ts) it loads after globals.css, where they would win, so
  // they were removed rather than brought to life. tests/rootLayoutCss.test.ts.
  return (
    <nav className="container" aria-label="Explore more pages">
      <p className={styles.eyebrow}>Keep exploring</p>
      <div className={styles.grid}>
        {links.map((l) => (
          <TrackedLink
            key={l.href}
            href={l.href}
            className={styles.card}
            event="gateway_click"
            props={{ from: current, to: l.href }}
          >
            <span>
              <span className={styles.title}>{l.title}</span>
              <span className={styles.desc}>{l.desc}</span>
            </span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </TrackedLink>
        ))}
      </div>
    </nav>
  );
}
