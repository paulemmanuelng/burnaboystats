import Link from "next/link";
import styles from "./api.module.css";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { API_VERSION, lastUpdated } from "../lib/api";
import { chartEntryCount, chartCountryCount, numberOnes, CHART_COUNTRIES, allChartItems } from "../data/charts";
import { totalAwards } from "../data/certifications";
import { chartedCountryCount } from "../lib/analysis";
import { songs } from "../data/songs";

export const metadata = pageMetadata({
  title: "Burna Boy Open Data API — Free Chart & Certification Dataset",
  description:
    "A free, open JSON API of verified Burna Boy chart entries, certifications and streaming figures. No key, no rate limit — CC BY 4.0, attribution required.",
  path: "/api",
  shareTitle: "Burna Boy Open Data API",
  shareDescription: "Free JSON access to every verified chart entry and certification.",
});

const base = `${CANONICAL_ORIGIN}/api/${API_VERSION}`;

const endpoints = [
  {
    path: "/stats",
    what: "Headline career totals plus the dated Spotify monthly-listeners series.",
    size: "1 object",
  },
  {
    path: "/charts",
    what: "Every official chart entry, by release, with the country and chart body behind each peak.",
    size: `${chartEntryCount} entries`,
  },
  {
    path: "/certifications",
    what: "Every certification, by release, with the awarding body, level and multiplier.",
    size: `${totalAwards()} certifications`,
  },
  {
    path: "/songs",
    what: "The song catalogue, with verified Spotify track IDs and streaming totals.",
    size: `${songs.length} songs`,
  },
];

// The sample payload is built from the real dataset at build time, so these docs
// can never drift out of sync with what the endpoint actually returns.
const sampleRelease = allChartItems.find((r) => r.title === "Dai Dai") ?? allChartItems[0];
const sample = JSON.stringify(
  {
    artist: "Burna Boy",
    endpoint: `/api/${API_VERSION}/charts`,
    updated: lastUpdated,
    count: chartEntryCount,
    license: { name: "CC BY 4.0", attribution: `Data from ${SITE_NAME} (${CANONICAL_ORIGIN})` },
    data: {
      totals: { chartEntries: chartEntryCount, numberOnes, countries: chartCountryCount },
      releases: [
        {
          title: sampleRelease.title,
          credit: sampleRelease.credit ?? "Burna Boy",
          year: sampleRelease.year,
          entries: sampleRelease.entries.slice(0, 3).map((e) => ({
            countryCode: e.c,
            country: CHART_COUNTRIES[e.c]?.name ?? e.c,
            chart: CHART_COUNTRIES[e.c]?.body ?? null,
            peak: e.peak,
          })),
        },
      ],
    },
  },
  null,
  2
);

export default function ApiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Burna Boy chart, certification and streaming dataset",
    description:
      "Verified Burna Boy chart entries, certifications and streaming figures, sourced from official chart bodies and certification databases and published as open JSON.",
    url: `${CANONICAL_ORIGIN}/api`,
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    dateModified: lastUpdated,
    creator: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    keywords: ["Burna Boy", "charts", "certifications", "Afrobeats", "music data", "open data"],
    distribution: endpoints.map((e) => ({
      "@type": "DataDownload",
      encodingFormat: "application/json",
      contentUrl: `${base}${e.path}`,
      name: e.path,
    })),
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="pageHeader container">
        <h1>
          Open <span className="accent">Data API</span>
        </h1>
        <p>
          Every verified number on this site, free to use in JSON. No API key, no
          rate limit, no sign-up.
        </p>
      </header>

      <div className="container">
        <p className={styles.intro}>
          Afrobeats has no open chart dataset. Every figure here is checked
          against the body that owns it — Billboard, the Official Charts Company,
          SNEP, the RIAA, the BPI and their national equivalents — so it is
          published in machine-readable form for anyone building, writing or
          researching. Use it in a project, a story or a paper; the only
          condition is attribution.
        </p>

        <div className={styles.badges}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            {chartEntryCount} chart entries
          </span>
          <span className={styles.badge}>{totalAwards()} certifications</span>
          <span className={styles.badge}>{chartedCountryCount} countries charted</span>
          <span className={styles.badge}>CC BY 4.0</span>
        </div>

        <section className={styles.section} aria-labelledby="endpoints">
          <h2 id="endpoints" className={styles.h2}>
            Endpoints
          </h2>
          <p className={styles.body}>
            All endpoints are <code className={styles.code}>GET</code>, return
            JSON, and send{" "}
            <code className={styles.code}>Access-Control-Allow-Origin: *</code>{" "}
            so you can call them straight from the browser.
          </p>
          <div className={styles.endpointList}>
            {endpoints.map((e) => (
              <a
                key={e.path}
                href={`/api/${API_VERSION}${e.path}`}
                className={styles.endpoint}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.endpointTop}>
                  <code className={styles.method}>GET</code>
                  <code className={styles.path}>
                    /api/{API_VERSION}
                    {e.path}
                  </code>
                  <span className={styles.size}>{e.size}</span>
                </span>
                <span className={styles.endpointWhat}>{e.what}</span>
              </a>
            ))}
          </div>
          <p className={styles.note}>
            A directory of all four lives at{" "}
            <a href={`/api/${API_VERSION}`} className={styles.inlineLink} target="_blank" rel="noreferrer">
              /api/{API_VERSION}
            </a>
            .
          </p>
        </section>

        <section className={styles.section} aria-labelledby="try">
          <h2 id="try" className={styles.h2}>
            Try it
          </h2>
          <pre className={styles.pre}>
            <code>curl {base}/charts</code>
          </pre>
          <p className={styles.body}>
            Every response uses the same envelope — the data, plus where it came
            from and when it last changed:
          </p>
          <pre className={styles.pre}>
            <code>{sample}</code>
          </pre>
          <p className={styles.note}>
            <code className={styles.code}>updated</code> is the date of the most
            recent real change to the data, not the last deploy — so you can
            safely use it to decide whether to re-fetch.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="license">
          <h2 id="license" className={styles.h2}>
            Licence &amp; attribution
          </h2>
          <p className={styles.body}>
            The dataset is released under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className={styles.inlineLink}
              target="_blank"
              rel="noreferrer"
            >
              CC BY 4.0
            </a>
            . You can use it commercially, remix it and redistribute it — just
            credit the source:
          </p>
          <pre className={styles.pre}>
            <code>Data from Burna Boy Stats — {CANONICAL_ORIGIN}</code>
          </pre>
          <p className={styles.body}>
            If you publish something built on it, a link back is genuinely
            appreciated. How each figure is verified is set out on the{" "}
            <Link href="/methodology" className={styles.inlineLink}>
              methodology page
            </Link>
            , and every change is logged on the{" "}
            <Link href="/updates" className={styles.inlineLink}>
              updates feed
            </Link>
            .
          </p>
        </section>

        <section className={styles.section} aria-labelledby="caveats">
          <h2 id="caveats" className={styles.h2}>
            What to know before you use it
          </h2>
          <ul className={styles.caveats}>
            <li>
              <strong>Peaks, not runs.</strong> Chart data records the highest
              position a release reached in each country, not its week-by-week
              movement.
            </li>
            <li>
              <strong>Almost no airplay charts.</strong> Genre, component and
              airplay-only charts are excluded by design, so figures here will be
              lower than aggregators that count them. The exception is a country
              that publishes no non-airplay national chart at all — there the
              airplay chart is the only one there is. Where a country runs both,
              the non-airplay chart is the one recorded.
            </li>
            <li>
              <strong>&ldquo;No. 1s&rdquo; counts placements.</strong> A song
              that tops five countries adds five, not one.
            </li>
            <li>
              <strong>Streaming figures are display strings.</strong> Values like{" "}
              <code className={styles.code}>&quot;747M&quot;</code> are rounded
              for display; treat them as approximate, and{" "}
              <code className={styles.code}>null</code> as &ldquo;no verified
              figure&rdquo; rather than zero.
            </li>
            <li>
              <strong>This is an unofficial fan project.</strong> It is not
              affiliated with Burna Boy or his label.
            </li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="stability">
          <h2 id="stability" className={styles.h2}>
            Stability
          </h2>
          <p className={styles.body}>
            The <code className={styles.code}>{API_VERSION}</code> shape
            won&apos;t change in a breaking way — new fields may be added, but
            existing ones stay put. Anything breaking would ship as{" "}
            <code className={styles.code}>v2</code> at a new path. Spotted a
            problem or want a field added?{" "}
            <Link href="/contact" className={styles.inlineLink}>
              Get in touch
            </Link>
            .
          </p>
        </section>

        <Link href="/methodology" className={styles.back}>
          ← How the numbers are verified
        </Link>
      </div>

      <KeepExploring current="/api" />
    </main>
  );
}
