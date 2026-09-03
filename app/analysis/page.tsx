import Link from "next/link";
import styles from "./analysis.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileAnalysis from "../components/MobileAnalysis";
import { findings } from "../lib/analysisFindings";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../lib/seo";
import { updates } from "../data/updates";
import { numberWord } from "../lib/homeData";
import { chartEntryCount, daiDaiChartEntryCount } from "../data/charts";
import { totalAwards } from "../data/certifications";

export const metadata = pageMetadata({
  title: "Burna Boy Chart Analysis — What the Numbers Actually Say",
  description:
    "Four findings from Burna Boy's chart and certification record: how one song took half his No. 1s, why Britain outranks America, and where he goes Diamond.",
  path: "/analysis",
  shareTitle: "What Burna Boy's Numbers Actually Say",
  shareDescription: "Four data-led findings from the full chart and certification record.",
});

const lastReviewed = updates.map((u) => u.date).sort().at(-1)!;
const reviewedLabel = new Date(`${lastReviewed}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function AnalysisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Burna Boy Chart Analysis — What the Numbers Actually Say",
    description:
      "Four findings drawn from Burna Boy's complete chart and certification record.",
    url: `${CANONICAL_ORIGIN}/analysis`,
    // The page first shipped 25 Jul 2026 (git history); modified tracks the feed.
    datePublished: "2026-07-25",
    dateModified: asDateTime(lastReviewed),
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    author: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    articleSection: findings.map((f) => f.h),
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Mobile is screen 21 — the shared deep-page grammar. Each row is the
          finding's headline plus the number it turns on. */}
      {/* Mobile is screen 21 — every finding in full: number, kicker, headline,
          a three-up stat row, its paragraphs and its links. It used to be four
          rows linking to /analysis#id, and those ids live only in the desktop
          layout, so all four were dead taps on a phone. */}
      <MobileAnalysis
        findings={findings}
        lede={`The rest of this site reports the record. This page argues with it — ${numberWord(findings.length).toLowerCase()} findings drawn from the full chart and certification data.`}
        reviewedLabel={reviewedLabel}
        /* The /methodology link is load-bearing, not decoration: the whole page
           argues from definitions documented there, and this screen carried no
           route to it anywhere — only the desktop "How to check this" did. */
        checkNote={
          <>
            Nothing here is an opinion about the music — each claim is a statement about the
            dataset, and every one can be reproduced. The figures are published as open JSON
            on the <Link href="/api">data API</Link>, and how each number is verified is set
            out in the <Link href="/methodology">methodology</Link>. Two definitions matter:
            No. 1s are counted as <em>placements</em>, and country tallies exclude the two
            Billboard Global charts, since a worldwide chart isn&apos;t a market.
          </>
        }
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/analysis" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>Analysis · not a summary</div>
          <h1 className={styles.h1}>
            What the Numbers <span className="inkText">Actually Say</span>
          </h1>
          <p className={styles.intro}>
            Totals flatten things. {chartEntryCount} chart entries and {totalAwards()}{" "}
            certifications tell you a career happened, not what shape it took. Read the
            same data by country, by tier and by release and a much sharper picture
            appears — one that contradicts a few things commonly said about Burna Boy.
            Every figure below is computed live from the site&apos;s own dataset, so it
            stays true as the record changes.
          </p>
          <p className={styles.reviewed}>
            <span className={styles.reviewedDot} aria-hidden="true" />
            Data last reviewed <strong>{reviewedLabel}</strong>
          </p>
        </section>

        {/* ── Contents ───────────────────────────────────────── */}
        <nav className={`${styles.wrap} ${styles.tocPad}`} aria-label="Findings">
          <div className={styles.toc}>
            {findings.map((f, i) => (
              <a key={f.id} href={`#${f.id}`} className={styles.tocItem}>
                <span className={styles.tocNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.tocLabel}>{f.h}</span>
              </a>
            ))}
            {/* The correction is a section of this page, but it is not a
                finding, so it is not in `findings` and was therefore missing
                from the only index a desktop reader gets. Adding the section
                without adding it here left it discoverable by scrolling and by
                nothing else — which is how it stayed unfindable even after it
                had a link. Numbered past the findings so the list still reads
                in page order. */}
            <a href="#correction" className={styles.tocItem}>
              <span className={styles.tocNum}>{String(findings.length + 1).padStart(2, "0")}</span>
              <span className={styles.tocLabel}>A claim worth correcting</span>
            </a>
          </div>
        </nav>

        {/* ── Findings ───────────────────────────────────────── */}
        {findings.map((f, i) => (
          <section
            key={f.id}
            id={f.id}
            className={`${styles.wrap} ${styles.findingPad}`}
            aria-labelledby={`${f.id}-h`}
          >
            <div className={styles.findingKicker}>
              <span className={styles.findingNum}>{String(i + 1).padStart(2, "0")}</span>
              {f.kicker}
            </div>
            <h2 id={`${f.id}-h`} className={styles.h2}>{f.h}</h2>

            <div className={styles.statRow}>
              {f.stats.map((s) => (
                <div key={s.l} className={styles.stat}>
                  <div className={styles.statV}>{s.v}</div>
                  <div className={styles.statL}>{s.l}</div>
                </div>
              ))}
            </div>

            <div className={styles.findingBody}>
              <div className={styles.prose}>
                {f.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                <div className={styles.findingLinks}>
                  {f.links.map((l) => (
                    <Link key={l.href} href={l.href} className={styles.findingLink}>
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.chartCol}>
                <div className={styles.chartLabel}>{f.chartLabel}</div>
                <div className={styles.bars}>
                  {f.bars.map((b) => (
                    <div key={b.name}>
                      <div className={styles.barHead}>
                        <span className={`${styles.barName} ${b.hot ? styles.barNameHot : ""}`}>
                          {b.name}
                        </span>
                        <span className={`${styles.barValue} ${b.hot ? styles.barValueHot : ""}`}>
                          {b.value}
                        </span>
                      </div>
                      <div className={styles.barTrack}>
                        <div
                          className={`${styles.barFill} ${b.hot ? styles.barFillHot : ""}`}
                          style={{ width: `${Math.round(b.frac * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className={styles.chartNote}>{f.chartNote}</p>
              </div>
            </div>
          </section>
        ))}

        {/* ── The correction ─────────────────────────────────── */}
        {/* The unmerge explainer lives under this section but was reachable only
            from search and the sitemap — it had no route in from the page it
            sits beneath, which is the one place a reader looking for it would
            start. A page nobody can navigate to is a page that only answer
            engines ever see. */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="correction">
          <h2 id="correction" className={styles.h2}>A claim worth correcting</h2>
          <p className={styles.intro}>
            Every few months the same story circulates: that Burna Boy lost Spotify
            streams in February 2026 because they were bot-generated. He did not — Spotify
            un-merged two remixes and about 309 million streams moved to the original
            recordings that had earned them. Nothing was deleted.
          </p>
          <Link href="/analysis/spotify-unmerge" className="btn btnSecondary">
            The February 2026 correction, with the arithmetic ↗
          </Link>
        </section>

        {/* ── How to check this ──────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.methodPad}`} aria-labelledby="how">
          <div className={styles.method}>
            <h2 id="how" className={styles.methodH}>How to check this</h2>
            <p className={styles.methodBody}>
              Nothing here is an opinion about the music — each claim is a statement about
              the dataset, and every one can be reproduced. The underlying figures are
              published as open JSON on the <Link href="/api">data API</Link>, and how each
              number is verified is set out in the{" "}
              <Link href="/methodology">methodology</Link>. Two definitions matter for the
              figures above: No. 1s are counted as <em>placements</em> (a song topping five
              countries adds five), and the country tallies here exclude the two Billboard
              Global charts, since a worldwide chart isn&apos;t a market.
            </p>
          </div>
        </section>

        {/* ── Onward ─────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/records" className="btn btnSecondary">← Career records</Link>
          <Link href="/methodology" className="btn btnPrimary">Methodology ↗</Link>
          <Link href="/records/charts" className="btn btnSecondary">Every chart entry ↗</Link>
        </section>

        <KeepExploring current="/analysis" />
      </div>
    </main>
  );
}
