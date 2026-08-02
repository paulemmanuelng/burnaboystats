import Link from "next/link";
import styles from "./firsts.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileDeepPage from "../../components/MobileDeepPage";
import { numberWord } from "../../lib/homeData";
import { firstGroups, allFirsts, firstsCount } from "../../data/firsts";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Firsts & Records — History-Making Milestones",
  description:
    "Every history-making first Burna Boy holds as an African artist — sold-out stadiums, the World Cup, the Grammy stage and the highest-grossing tour ever.",
  path: "/records/firsts",
  shareTitle: "Burna Boy Firsts & Records",
  shareDescription: "The history-making milestones of the African Giant.",
});

// The design's curated "headline firsts" — the six a reader opens the page
// for, not simply the six most recent. Sorting the whole set by year returns
// six 2026 entries and buries the Grammy and the Madison Square Garden night.
// The copy is the design's; the figures inside it are checked against
// firsts.ts, tours.ts and tourRevenue.ts.
const headlineFirsts = [
  { year: "2026", title: "First African artist to headline a World Cup final", sub: "“Dai Dai” with Shakira, halftime show" },
  { year: "2024", title: "First African artist to headline a UK stadium", sub: "London Stadium — 58,973 in the room" },
  { year: "2023", title: "Highest-grossing tour by an African artist", sub: "I Told Them… Tour, $30.46M" },
  { year: "2022", title: "First Nigerian to sell out Madison Square Garden", sub: "Space Drift Tour, 13,586 tickets" },
  { year: "2021", title: "Grammy — Best Global Music Album", sub: "Twice as Tall" },
  { year: "2024", title: "First African artist past 2 billion UK streams", sub: "BRIT Billion Award" },
];

/** Anchor id for a category heading, so the jump rail can reach it. */
const groupId = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const earliestYear = Math.min(...allFirsts.map((f) => Number(f.year)));

export default function FirstsPage() {
  return (
    <main id="content">
      {/* Mobile is screen 15 on the shared deep-page grammar. */}
      <MobileDeepPage
        label="Firsts"
        badge={String(firstsCount)}
        kicker="Record-breaking"
        titlePre="Firsts & "
        titleGold="records"
        titleSize={44}
        lede={`${numberWord(firstsCount)} milestones, from the first African stadium headline to the World Cup final.`}
        stats={[
          { value: String(firstsCount), label: "Milestones" },
          { value: String(firstGroups.length), label: "Categories" },
        ]}
        listTitle="The headline firsts"
        listMeta="newest first"
        rows={headlineFirsts.map((f, i) => ({
          rank: f.year,
          title: f.title,
          sub: f.sub,
          value: "",
          lead: i === 0,
        }))}
        footNote="Only firsts traceable to a primary source are listed. Grouped on the full page into stages, the world stage, awards, streaming and business."
        ctaLabel={`All ${firstsCount} firsts`}
        ctaHref="#all-firsts"
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/firsts" />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.wide}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              History made
            </div>
            <h1 className={styles.h1}>
              Firsts <span className="inkText">&amp; Records</span>
            </h1>
            <p className={styles.lede}>
              The history Burna Boy made for African music — every milestone, verified.{" "}
              {firstsCount} firsts across {firstGroups.length} categories.
            </p>
          </div>
        </section>

        {/* ── Headline strip ───────────────────────────────────── */}
        <section className={styles.headlineBand}>
          <div className={styles.headlineGrid}>
            <div className={styles.headlineCell}>
              <div className={styles.headlineValue}>{firstsCount}</div>
              <div className={styles.headlineLabel}>Milestones</div>
            </div>
            <div className={styles.headlineCell}>
              <div className={styles.headlineValue}>{firstGroups.length}</div>
              <div className={styles.headlineLabel}>Categories</div>
            </div>
            <div className={styles.headlineCell}>
              <div className={styles.headlineValue}>{earliestYear}</div>
              <div className={styles.headlineLabel}>First recorded</div>
            </div>
          </div>
        </section>

        {/* ── Jump-to rail ─────────────────────────────────────── */}
        <section className={styles.jumpBand}>
          <div className={styles.jumpInner}>
            <span className={styles.jumpLabel}>Jump to</span>
            {firstGroups.map((g) => (
              <a key={g.label} href={`#${groupId(g.label)}`} className={styles.jumpChip}>
                {g.label}
                <span className={styles.jumpCount}>{g.items.length}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Groups ───────────────────────────────────────────── */}
        <div id="all-firsts">
          {firstGroups.map((g) => (
            <section key={g.label} id={groupId(g.label)} className={styles.groupSection}>
              <div className={styles.wide}>
                <div className={styles.groupHead}>
                  <h2 className={styles.h2}>
                    <span className="inkText">{g.label}</span>
                  </h2>
                  <span className={styles.count}>({g.items.length})</span>
                </div>
                <div className={styles.list}>
                  {g.items.map((f) => (
                    <div key={f.title} className={styles.row}>
                      <span className={styles.year}>{f.year}</span>
                      <div>
                        <h3 className={styles.title}>{f.title}</h3>
                        <p className={styles.text}>{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── Source ───────────────────────────────────────────── */}
        <section className={styles.sourceBand}>
          <div className={styles.wide}>
            <p className={styles.source}>
              Every milestone here was cross-checked against multiple sources (Billboard,
              Pollstar/Boxscore, the BPI and press reporting), as of July 2026. “African” /
              “Nigerian” firsts reflect the wording of those sources. More milestones are
              added as they are confirmed.
            </p>
            <Link href="/records" className={`btn btnSecondary ${styles.back}`}>
              ← Career Records
            </Link>
          </div>
        </section>

        <KeepExploring current="/records/firsts" />
      </div>
    </main>
  );
}
