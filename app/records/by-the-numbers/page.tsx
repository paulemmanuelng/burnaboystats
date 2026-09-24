import Link from "next/link";
import styles from "./byTheNumbers.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import TrendDelta from "../../components/TrendDelta";
import MobileDeepPage from "../../components/MobileDeepPage";
import { pageMetadata, datasetJsonLd, CANONICAL_ORIGIN } from "../../lib/seo";
import { totalAwards, countryCount } from "../../data/certifications";
import { totalWins } from "../../data/awards";
import { numberOnes } from "../../data/charts";
import { stats } from "../../data/byTheNumbers";
import { lastUpdated } from "../../lib/api";

// This page prints "verified {asOf}" and "Last updated {asOf}" over figures it
// imports from elsewhere. Both used to come from `new Date()`, which is the
// build clock and knows nothing about the data: it would have gone on saying
// "verified February 2027" over stats last touched in September. A stamp that
// advances on its own is the one kind that can never be caught being stale, and
// this page's was the September the audit measured every other page's August
// against. `lastUpdated` is the newest entry in the updates log — the date of
// the newest verified fact behind these numbers — so the stamp now moves only
// when the data does.
const asOfDate = new Date(`${lastUpdated}T12:00:00Z`);
const editionYear = asOfDate.getUTCFullYear();
const asOf = asOfDate.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const metadata = pageMetadata({
  title: `Burna Boy by the Numbers (${editionYear}) — Every Career Stat`,
  description: `Burna Boy's career in numbers, ${asOf}: ${totalAwards()} certifications, ${totalWins} award wins, ${numberOnes} No. 1 chart placements and the $30.46M record tour.`,
  path: "/records/by-the-numbers",
  shareTitle: "Burna Boy by the Numbers",
  shareDescription: "The African Giant's whole career, in the stats that matter.",
});

// What each destination proves, printed at the foot of its card.
const PROOF: Record<string, string> = {
  "/certifications": "Certifications",
  "/records/awards": "Awards",
  "/records/charts": "Official charts",
  "/records/tours": "Tours & live",
  "/records/africas-biggest": "Africa's biggest",
  "/records/firsts": "Firsts & records",
  "/music": "Discography",
  "/records/tours/map": "Where he's performed",
};

const pageUrl = `${CANONICAL_ORIGIN}/records/by-the-numbers`;
const shareText = `Burna Boy by the numbers: ${totalAwards()} certifications, ${totalWins} award wins, ${numberOnes} No. 1s and the biggest tour in African history 🇳🇬`;
const shareLinks = [
  { name: "Share on X", href: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}` },
  { name: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}` },
  { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}` },
];

const jsonLd = datasetJsonLd({
  name: `Burna Boy by the Numbers (${editionYear})`,
  description: `Key career statistics for Burna Boy as of ${asOf}: certifications, award wins, chart No. 1s, tour grosses, streaming milestones and more.`,
  path: "/records/by-the-numbers",
  keywords: ["Burna Boy", "Burna Boy stats", "Burna Boy records", "certifications", "awards", "chart records", "African music"],
  variableMeasured: stats.map((s) => s.label),
});

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
const spell = (n: number) => {
  const w = WORDS[n] ?? String(n);
  return w[0].toUpperCase() + w.slice(1);
};

export default function ByTheNumbersPage() {
  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Mobile is screen 17 — the shared deep-page grammar. Every row is a
          link, because the lede promises exactly that. */}
      {/* Screen 17: no stat strip — the design runs the hero straight into the
          fifteen figures, since every row already is one. The badge is that
          count, not the edition year. */}
      <MobileDeepPage
        label="By the numbers"
        badge={String(stats.length)}
        kicker="The whole career, quotable"
        titlePre="By the "
        titleGold="numbers"
        lede={`${spell(stats.length)} figures, each linking to the page that proves it.`}
        listTitle="The headline figures"
        listMeta={`verified ${asOf}`}
        rows={stats.map((s) => ({
          title: s.label,
          sub: s.sub,
          value: s.num,
          href: s.href,
          lead: s.big,
        }))}
        footNote="Every figure is fact-checked against RIAA, BPI, SNEP, Billboard, Official Charts and Pollstar, and links to the page that documents it."
        ctaLabel="Share these stats"
        ctaHref="/share"
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/by-the-numbers" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.eyebrow}>
            <span>{editionYear} edition</span>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            <span className={styles.freshness}>
              <span className={styles.freshDot} aria-hidden="true" />
              Updated {asOf}
            </span>
          </div>
          <h1 className={styles.h1}>
            Burna Boy <span className="inkText">by the Numbers</span>
          </h1>
          <p className={styles.lede}>
            As of {asOf}, Burna Boy has {totalAwards()} music certifications across{" "}
            {countryCount} countries, {totalWins} award wins including a Grammy, and{" "}
            {numberOnes} No. 1 chart placements — plus the highest-grossing tour ($30.46M)
            and biggest single concert ($6.15M) by any African artist in history.
          </p>
          <p className={styles.hint}>Every figure links to the page that documents it ↓</p>
        </section>

        {/* ── Stat grid ──────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.gridPad}`}>
          <div className={styles.grid}>
            {stats.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className={`${styles.stat} ${s.big ? styles.statBig : ""}`}
              >
                <span className={styles.numRow}>
                  <span className={`${styles.num} ${s.big ? styles.numBig : ""}`}>
                    {s.num}
                  </span>
                  {s.delta != null && (
                    <TrendDelta value={s.delta.pct} format="pct" label={s.delta.window} />
                  )}
                </span>
                <span className={styles.label}>{s.label}</span>
                <span className={styles.sub}>{s.sub}</span>
                <span className={styles.proof}>{PROOF[s.href] ?? "See the page"} ↗</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Share ──────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sharePad}`}>
          <div className={styles.shareRow}>
            <span className={styles.shareLabel}>Share these stats</span>
            <div className={styles.shareBtns}>
              {shareLinks.map((l) => (
                <a
                  key={l.name}
                  className={styles.shareBtn}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.name} ↗
                </a>
              ))}
            </div>
          </div>
          <p className={styles.source}>
            Every figure links to the page that documents it, each fact-checked against
            official sources (RIAA, BPI, SNEP, Billboard, Official Charts, Pollstar and
            more) and kept current. Last updated {asOf}.
          </p>
        </section>

        {/* ── Onward ─────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/records" className="btn btnSecondary">← Career records</Link>
          <Link href="/records/africas-biggest" className="btn btnPrimary">
            Africa&apos;s biggest ↗
          </Link>
          <Link href="/records/charts" className="btn btnSecondary">Official charts ↗</Link>
        </section>

        <KeepExploring current="/records/by-the-numbers" />
      </div>
    </main>
  );
}
