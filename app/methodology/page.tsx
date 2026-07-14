import Link from "next/link";
import styles from "./methodology.module.css";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { updates } from "../data/updates";
import { totalAwards, countryCount } from "../data/certifications";
import { chartEntryCount, numberOnes } from "../data/charts";

export const metadata = pageMetadata({
  title: "Methodology & Sources — How Burna Boy Stats Verifies Its Numbers",
  description:
    "How every figure on Burna Boy Stats is sourced, verified and kept current — the primary sources we use, how we resolve conflicts, our update cadence and how to report a correction.",
  path: "/methodology",
  shareTitle: "Methodology & Sources",
  shareDescription: "How Burna Boy Stats sources, verifies and updates every number.",
});

// Human-readable "last reviewed" date, driven by the newest logged update so it
// stays honest without a hand-maintained date.
const lastReviewed = updates
  .map((u) => u.date)
  .sort()
  .at(-1)!;
const reviewedLabel = new Date(`${lastReviewed}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Primary sources, grouped by what they verify. Deliberately names the chart
// bodies and databases so readers (and search engines) can see the numbers are
// traceable to authoritative origins, not blogs or aggregators.
const sources = [
  {
    area: "Certifications",
    detail:
      "Official certification databases of each market — the RIAA (US), BPI (UK), SNEP (France), BVMI (Germany), CAPIF (Argentina) and others. A certification is only counted once it appears in the awarding body's own searchable database.",
  },
  {
    area: "Charts",
    detail:
      "The chart body that owns each chart: Billboard (Hot 100, Billboard 200, Global 200), the Official Charts Company (UK), SNEP (France), OCC/ARIA and their national equivalents. Peaks are read from the official chart run, never from a third-party summary.",
  },
  {
    area: "Streaming",
    detail:
      "Spotify and YouTube's own in-app figures for monthly listeners, followers and view counts, cross-checked against the platforms directly. Fast-moving totals are tracked live and updated as they move, not pulled from a scraper.",
  },
  {
    area: "Awards",
    detail:
      "The awarding organisation's official winners and nominees lists — the Recording Academy (Grammys), BET, the BRIT Awards, MOBO, MTV and others — plus contemporaneous reporting from established outlets for the ceremony itself.",
  },
  {
    area: "Tours & live",
    detail:
      "Box-office and attendance figures from Billboard Boxscore and Pollstar where available, verified venue capacities, and primary reporting for one-off shows and festival billings.",
  },
];

const principles = [
  {
    h: "Primary sources, not summaries",
    p: "A number is verified against the body that owns it — the chart's official run, the certifying database, the platform's own screen. Search-result snippets and news write-ups go stale and often quote the wrong chart (Global 200 vs Global 200 Excl. US, for example), so an official chart body's own card or database always wins over a summary that paraphrases it.",
  },
  {
    h: "Nothing goes up unverified",
    p: "If a claim can't be traced to a primary source, it doesn't appear as fact. Where something is credible but not yet confirmed, it's labelled as such (for example, cars in the collection marked “unconfirmed”) rather than stated flatly.",
  },
  {
    h: "The right metric, precisely",
    p: `Similar-sounding figures are kept distinct — chart entries versus peaks, worldwide charts versus US-inclusive ones, and “No. 1s” counted as the number of times a song reached the top spot, not the number of songs released. Today the site tracks ${chartEntryCount} chart entries, ${numberOnes} worldwide No. 1s and ${totalAwards()} certifications across ${countryCount} countries.`,
  },
  {
    h: "Conflicts resolve to the source of record",
    p: "When two sources disagree, the one that owns the data wins: SNEP for the French chart, Billboard for the Global 200, the RIAA for US certifications. A louder or more recent headline doesn't override the official record.",
  },
];

export default function MethodologyPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Methodology & Sources",
    description:
      "How every figure on Burna Boy Stats is sourced, verified and kept current.",
    url: `${CANONICAL_ORIGIN}/methodology`,
    dateModified: lastReviewed,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <header className="pageHeader container">
        <h1>
          Methodology &amp; <span className="accent">Sources</span>
        </h1>
        <p>
          Every number here is meant to be trusted — so here is exactly where the
          figures come from, how they&apos;re checked, and how often they&apos;re
          refreshed.
        </p>
      </header>

      <div className="container">
        <p className={styles.intro}>
          Burna Boy Stats is an independent, unofficial site that tracks Burna
          Boy&apos;s certifications, charts, streaming and career records. It runs
          on curated data, and the value of that data is only as good as its
          sourcing. This page sets out the standard every figure is held to.
        </p>

        <p className={styles.reviewed}>
          <span className={styles.reviewedDot} aria-hidden="true" />
          Data last reviewed <strong>{reviewedLabel}</strong>
        </p>

        <section className={styles.section} aria-labelledby="principles">
          <h2 id="principles" className={styles.h2}>
            How a figure gets verified
          </h2>
          <div className={styles.principleGrid}>
            {principles.map((pr) => (
              <div key={pr.h} className={styles.principle}>
                <h3 className={styles.principleH}>{pr.h}</h3>
                <p className={styles.principleP}>{pr.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="sources">
          <h2 id="sources" className={styles.h2}>
            Where the numbers come from
          </h2>
          <dl className={styles.sourceList}>
            {sources.map((s) => (
              <div key={s.area} className={styles.sourceRow}>
                <dt className={styles.sourceArea}>{s.area}</dt>
                <dd className={styles.sourceDetail}>{s.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.section} aria-labelledby="cadence">
          <h2 id="cadence" className={styles.h2}>
            How often it&apos;s updated
          </h2>
          <p className={styles.body}>
            Fast-moving streaming figures — Spotify monthly listeners, follower
            counts, YouTube views — are tracked live and updated as they move.
            Slower records such as certifications, chart peaks and awards are
            updated as each new milestone is confirmed. Every change worth noting
            is logged on the{" "}
            <Link href="/updates" className={styles.inlineLink}>
              Latest Updates
            </Link>{" "}
            feed (also available as an{" "}
            <a href="/rss.xml" className={styles.inlineLink}>
              RSS feed
            </a>
            ), so you can always see what changed and when.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="corrections">
          <h2 id="corrections" className={styles.h2}>
            Spotted something wrong?
          </h2>
          <p className={styles.body}>
            Accuracy matters more than being first. If a figure looks off — or a
            new milestone has been reached — send the primary source (an official
            chart card, a certification database entry, a platform screenshot) via
            the{" "}
            <Link href="/contact" className={styles.inlineLink}>
              contact page
            </Link>
            . Verified corrections are applied quickly and noted on the updates
            feed.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="independence">
          <h2 id="independence" className={styles.h2}>
            Independence
          </h2>
          <p className={styles.body}>
            This is a fan-made, portfolio project with no affiliation to Burna
            Boy or his team, no sponsorship and no advertising. There&apos;s no
            commercial incentive to inflate a number — the only goal is to be the
            most accurate Burna Boy stats resource on the web.
          </p>
        </section>

        <Link href="/records" className={styles.back}>
          ← Career Records
        </Link>
      </div>

      <KeepExploring current="/methodology" />
    </main>
  );
}
