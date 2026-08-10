import Link from "next/link";
import styles from "./press.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import CopyButton from "../components/CopyButton";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../lib/seo";
import { totalAwards, countryCount } from "../data/certifications";
import { chartEntryCount, numberOnes, chartCountryCount } from "../data/charts";
import { totalWins, totalNominations } from "../data/awards";
import { countryCount as performedCountryCount } from "../data/performedCountries";
import { spotifyTotalStreams } from "../data/streamingTotals";
import { updates } from "../data/updates";

export const metadata = pageMetadata({
  title: "Press & Data Kit — Cite Burna Boy Stats",
  description:
    "Verified Burna Boy figures, free to use with attribution — citation lines, an open JSON API under CC BY 4.0, stat cards and a direct line to the curator.",
  path: "/press",
  shareTitle: "Press & Data Kit",
  shareDescription: "Verified Burna Boy figures, free to use with attribution — API, stat cards and citation-ready numbers.",
});

const lastReviewed = updates
  .map((u) => u.date)
  .sort()
  .at(-1)!;
const reviewedLabel = new Date(`${lastReviewed}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const CITATION = "Data: Burna Boy Stats (burnaboystats.com)";
const CITATION_LINKED = 'Data: <a href="https://burnaboystats.com">Burna Boy Stats</a>';

// The headline figures a writer most often needs, every one derived live from
// the same data the pages render — this strip can never go stale on its own.
const figures = [
  { value: String(totalAwards()), label: "Certifications", sub: `${countryCount} countries` },
  { value: String(chartEntryCount), label: "Chart entries", sub: `${chartCountryCount} territories` },
  { value: String(numberOnes), label: "No. 1 placements", sub: "worldwide" },
  { value: String(totalWins), label: "Award wins", sub: `${totalNominations} nominations` },
  { value: spotifyTotalStreams, label: "Career streams", sub: "Spotify, all credits" },
  { value: String(performedCountryCount), label: "Countries performed in", sub: "7 regions" },
];

const X_CONTACT = "https://x.com/paulemmanuelng";

export default function PressPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Press & Data Kit",
    description:
      "Verified Burna Boy statistics, free to use with attribution — citation formats, open API and shareable stat cards.",
    url: `${CANONICAL_ORIGIN}/press`,
    dateModified: asDateTime(lastReviewed),
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    license: "https://creativecommons.org/licenses/by/4.0/",
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <BreadcrumbBar path="/press" />

      <section className={`${styles.wrap} ${styles.heroPad}`}>
        <div className={styles.kicker}>For journalists, bloggers &amp; fan pages</div>
        <h1 className={styles.h1}>
          Press &amp; <span className="inkText">Data Kit</span>
        </h1>
        <p className={styles.lede}>
          Every figure on this site is verified against primary sources and free to use —
          all we ask is a credit with a link. This page has everything you need to cite,
          embed or build on the data.
        </p>
        <p className={styles.reviewed}>
          <span className={styles.reviewedDot} aria-hidden="true" />
          Data last reviewed <strong>{reviewedLabel}</strong>
        </p>
      </section>

      {/* ── The numbers, citation-ready ─────────────────────── */}
      <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="figures">
        <h2 id="figures" className={styles.h2}>The headline figures</h2>
        <p className={styles.p}>
          Rendered live from the same dataset as the rest of the site, so they are always
          current. Each links to a page with the full breakdown and sourcing.
        </p>
        <div className={styles.figures}>
          {figures.map((f) => (
            <div key={f.label} className={styles.figure}>
              <div className={styles.figureValue}>{f.value}</div>
              <div className={styles.figureLabel}>{f.label}</div>
              <div className={styles.figureSub}>{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How to credit ───────────────────────────────────── */}
      <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="cite">
        <h2 id="cite" className={styles.h2}>How to credit</h2>
        <p className={styles.p}>
          In an article, a tweet or a video description — one line does it:
        </p>
        <div className={styles.citeRow}>
          <code className={styles.citeCode}>{CITATION}</code>
          <CopyButton value={CITATION} className={styles.copyBtn} />
        </div>
        <div className={styles.citeRow}>
          <code className={styles.citeCode}>{CITATION_LINKED}</code>
          <CopyButton value={CITATION_LINKED} className={styles.copyBtn} label="Copy HTML" />
        </div>
        <p className={styles.small}>
          Deep-link to the page you used where you can — e.g. burnaboystats.com/certifications
          for a certification figure.
        </p>
      </section>

      {/* ── The open API ────────────────────────────────────── */}
      <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="api">
        <h2 id="api" className={styles.h2}>The open API</h2>
        <p className={styles.p}>
          The verified chart and certification dataset is served as JSON at{" "}
          <Link href="/api" className={styles.link}>burnaboystats.com/api</Link>, licensed{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            rel="noopener"
            target="_blank"
            className={styles.link}
          >
            CC BY 4.0
          </a>{" "}
          — free for articles, visualisations, bots and research, with attribution. If you
          build something with it, tell us and we&apos;ll share it.
        </p>
      </section>

      {/* ── Stat cards ──────────────────────────────────────── */}
      <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="cards">
        <h2 id="cards" className={styles.h2}>Ready-made stat cards</h2>
        <p className={styles.p}>
          Every major figure is available as a shareable image — timeline and story sizes,
          rendered from live data — on the{" "}
          <Link href="/share" className={styles.link}>stat cards page</Link>. Need a figure
          as a card that isn&apos;t there? Ask — custom cards for fan pages are usually a
          same-day turnaround.
        </p>
      </section>

      {/* ── Trust & contact ─────────────────────────────────── */}
      <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="trust">
        <h2 id="trust" className={styles.h2}>Why the numbers hold up</h2>
        <p className={styles.p}>
          The verification standard is public: primary sources only, conflicts resolve to
          the body that owns the data, and nothing ships unverified — the{" "}
          <Link href="/methodology" className={styles.link}>methodology</Link> spells it
          out, and the <Link href="/curator" className={styles.link}>curator page</Link>{" "}
          says who does the work. For data requests, corrections or anything else, DM{" "}
          <a href={X_CONTACT} rel="noopener" target="_blank" className={styles.link}>
            @paulemmanuelng
          </a>{" "}
          or use the <Link href="/contact" className={styles.link}>contact page</Link>.
        </p>
      </section>

      <KeepExploring current="/press" />
    </main>
  );
}
