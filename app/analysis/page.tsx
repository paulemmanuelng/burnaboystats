import Link from "next/link";
import styles from "./analysis.module.css";
import KeepExploring from "../components/KeepExploring";
import { findings } from "../lib/analysisFindings";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { updates } from "../data/updates";
import { chartEntryCount, daiDaiChartEntryCount } from "../data/charts";
import { totalAwards } from "../data/certifications";
import {
  countryNumberOnes,
  countryNumberOneReleases,
  daiDaiCountryNumberOnes,
  daiDaiNumberOneShare,
  chartedCountryCount,
  marketProfile,
  marketsByVolume,
  certsByCountry,
  diamondCerts,
  diamondCountries,
} from "../lib/analysis";

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
    dateModified: lastReviewed,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    articleSection: findings.map((f) => f.h),
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="pageHeader container">
        <h1>
          What the Numbers <span className="accent">Actually Say</span>
        </h1>
        <p>
          The rest of this site reports the record. This page argues with it —
          four findings drawn from the full chart and certification data.
        </p>
      </header>

      <div className="container">
        <p className={styles.intro}>
          Totals flatten things. {chartEntryCount} chart entries and {totalAwards()}{" "}
          certifications tell you a career happened, not what shape it took.
          Read the same data by country, by tier and by release
          and a much sharper picture appears — one that contradicts a few things
          commonly said about Burna Boy. Every figure below is computed live from
          the site&apos;s own dataset, so it stays true as the record changes.
        </p>

        <p className={styles.reviewed}>
          <span className={styles.reviewedDot} aria-hidden="true" />
          Data last reviewed <strong>{reviewedLabel}</strong>
        </p>

        <nav className={styles.toc} aria-label="Findings">
          {findings.map((f, i) => (
            <a key={f.id} href={`#${f.id}`} className={styles.tocItem}>
              <span className={styles.tocNum}>{String(i + 1).padStart(2, "0")}</span>
              <span>{f.h}</span>
            </a>
          ))}
        </nav>

        {findings.map((f, i) => (
          <section key={f.id} id={f.id} className={styles.finding} aria-labelledby={`${f.id}-h`}>
            <p className={styles.kicker}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              {f.kicker}
            </p>
            <h2 id={`${f.id}-h`} className={styles.h2}>
              {f.h}
            </h2>

            <div className={styles.statRow}>
              {f.stats.map((s) => (
                <div key={s.l} className={styles.stat}>
                  <span className={styles.statV}>{s.v}</span>
                  <span className={styles.statL}>{s.l}</span>
                </div>
              ))}
            </div>

            {f.body.map((p) => (
              <p key={p.slice(0, 40)} className={styles.body}>
                {p}
              </p>
            ))}

            <p className={styles.findingLinks}>
              {f.links.map((l) => (
                <Link key={l.href} href={l.href} className={styles.findingLink}>
                  {l.label} →
                </Link>
              ))}
            </p>
          </section>
        ))}

        <section className={styles.method} aria-labelledby="how">
          <h2 id="how" className={styles.methodH}>
            How to check this
          </h2>
          <p className={styles.body}>
            Nothing here is an opinion about the music — each claim is a
            statement about the dataset, and every one can be reproduced. The
            underlying figures are published as open JSON on the{" "}
            <Link href="/api" className={styles.inlineLink}>
              data API
            </Link>
            , and how each number is verified is set out in the{" "}
            <Link href="/methodology" className={styles.inlineLink}>
              methodology
            </Link>
            . Two definitions matter for the figures above: No. 1s are counted as{" "}
            <em>placements</em> (a song topping five countries adds five), and the
            country tallies here exclude the two Billboard Global charts, since a
            worldwide chart isn&apos;t a market.
          </p>
        </section>

        <Link href="/records" className={styles.back}>
          ← Career Records
        </Link>
      </div>

      <KeepExploring current="/analysis" />
    </main>
  );
}
