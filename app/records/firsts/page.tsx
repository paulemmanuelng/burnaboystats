import Link from "next/link";
import styles from "./firsts.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileFirsts from "../../components/MobileFirsts";
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

/** Anchor id for a category heading, so the jump rail can reach it. */
const groupId = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const earliestYear = Math.min(...allFirsts.map((f) => Number(f.year)));

export default function FirstsPage() {
  return (
    <main id="content">
      {/* Mobile is screen 15 — five accordion categories, first one open, and no
          stat strip: the design runs the hero straight into them. Category
          labels come from firsts.ts so mobile and desktop can never disagree
          about what a group is called. */}
      <MobileFirsts
        total={firstsCount}
        lede={`${numberWord(firstsCount)} milestones in ${numberWord(firstGroups.length).toLowerCase()} categories, from the first African stadium headline to the World Cup final.`}
        sections={firstGroups.map((g) => ({
          name: g.label,
          // The design's row is the year and the milestone alone; `text` is the
          // supporting detail and stays on the desktop page, which is what the
          // source note points at.
          rows: g.items.map((f) => ({ lead: f.year, title: f.title })),
        }))}
        sourceNote="Each milestone is a documented first, sourced on the desktop page. Tap a category to open it."
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

        {/* ── Source ─────────────────────────────────────────────
            September, not August, because data/firsts.ts gained milestones in
            September that were cross-checked then: "Dai Dai" at No. 1 on
            Billboard's Rhythmic Airplay chart, and the 4-billion YouTube mark
            read at youtube.com/@BurnaBoy on 3 Sep 2026 (the entry names the
            day). The stamp dates the checking behind the list, not the day the
            page is served — it does not move on its own. */}
        <section className={styles.sourceBand}>
          <div className={styles.wide}>
            <p className={styles.source}>
              Every milestone here was cross-checked against multiple sources (Billboard,
              Pollstar/Boxscore, the BPI and press reporting), as of September 2026. “African” /
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
