import Link from "next/link";
import styles from "./firsts.module.css";
import Provenance from "../../components/Provenance";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileFirsts from "../../components/MobileFirsts";
import IndexBar from "../../components/IndexBar";
import { numberWord } from "../../lib/homeData";
import { firstGroups, allFirsts, firstsCount, firstGroupId } from "../../data/firsts";
import { pageMetadata } from "../../lib/seo";
import { proofHref } from "../../lib/firstProof";

export const metadata = pageMetadata({
  title: "Burna Boy Firsts & Records — History-Making Milestones",
  description:
    "Every history-making first Burna Boy holds as an African artist — sold-out stadiums, the World Cup, the Grammy stage and the highest-grossing tour ever.",
  path: "/records/firsts",
  shareTitle: "Burna Boy Firsts & Records",
  shareDescription: "The history-making milestones of the African Giant.",
});

const earliestYear = Math.min(...allFirsts.map((f) => Number(f.year)));

export default function FirstsPage() {
  return (
    <main id="content">
      {/* Mobile is screen 15 — every category open in full under a docking
          index (J4-Q3, Job 4 · J4-10), and no stat strip: the design runs the
          hero straight into them. Category labels and ids come from
          firsts.ts so mobile and desktop can never disagree about what a
          group is called. */}
      <MobileFirsts
        total={firstsCount}
        lede={`${numberWord(firstsCount)} milestones in ${numberWord(firstGroups.length).toLowerCase()} categories, from the first African stadium headline to the World Cup final.`}
        sections={firstGroups.map((g) => ({
          id: `m-${firstGroupId(g.label)}`,
          name: g.label,
          // Every milestone with its detail line, as the desktop prints it
          // (J4-Q3: all of them, with detail lines), and its "Proof ↗" where
          // the site prints the figure (J4-7, Paul's decision (b)).
          rows: g.items.map((f) => ({ lead: f.year, title: f.title, meta: f.text, proof: proofHref(f) ?? undefined })),
        }))}
        // The note said each first was "sourced on the desktop page": that
        // layout has no per-item sources (one blanket cross-check paragraph),
        // and it is the same URL with this layout hidden (5 Oct 2026, records-11).
        sourceNote="Every milestone was cross-checked against multiple sources before it was listed."
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

        {/* ── The docking index (J4-6/J4-7, fix 85) ──────────────
            The five categories, under the masthead to the foot of this
            layout; it replaces the "Jump to" rail that sat here. */}
        <IndexBar kicker="Firsts & Records" items={firstGroups.map((g) => ({ id: firstGroupId(g.label), label: g.label }))} />

        {/* ── Groups ───────────────────────────────────────────── */}
        <div id="all-firsts">
          {firstGroups.map((g) => (
            <section key={g.label} id={firstGroupId(g.label)} className={styles.groupSection}>
              <div className={styles.wide}>
                <div className={styles.groupHead}>
                  <h2 className={styles.h2}>{g.label}</h2>
                  <span className={styles.count}>({g.items.length})</span>
                </div>
                <div className={styles.list}>
                  {g.items.map((f) => {
                    // Headline first; the year an ink label at the right, over
                    // "Proof ↗" where the site prints the figure (fixes 85,
                    // 96 and 83; Paul's decision (b): no page, no link).
                    const proof = proofHref(f);
                    return (
                      <div key={f.title} className={styles.row}>
                        <div>
                          <h3 className={styles.title}>{f.title}</h3>
                          <p className={styles.text}>{f.text}</p>
                        </div>
                        <div className={styles.side}>
                          <span className={styles.year}>{f.year}</span>
                          {proof && (
                            <Link href={proof} className={styles.proof}>
                              Proof<span aria-hidden="true"> ↗</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
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
            <Provenance size="p3">
              Every milestone here was cross-checked against multiple sources (Billboard,
              Pollstar/Boxscore, the BPI and press reporting), as of September 2026. “African” /
              “Nigerian” firsts reflect the wording of those sources. More milestones are
              added as they are confirmed.
            </Provenance>
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
