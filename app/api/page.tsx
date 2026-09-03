import Link from "next/link";
import styles from "./api.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import CopyButton from "../components/CopyButton";
import MobileApi from "../components/MobileApi";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../lib/seo";
import { API_VERSION, lastUpdated } from "../lib/api";
import { chartEntryCount, chartCountryCount, numberOnes, CHART_COUNTRIES, allChartItems } from "../data/charts";
import { totalAwards } from "../data/certifications";
import { chartedCountryCount } from "../lib/analysis";
import { songs } from "../data/songs";
import { totalNominations } from "../data/awards";
import { tours } from "../data/tours";
import { afrobeatsArtists } from "../data/afrobeats";

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
  {
    path: "/awards",
    what: "Every competitive nomination as one row — ceremony, year, category, work, won — plus the honours, listed apart from the competitive total.",
    size: `${totalNominations} nominations`,
  },
  {
    path: "/tours",
    what: "Tours, festivals and one-off shows, with box-office figures where a source publishes them, plus the highest-grossing-show board.",
    size: `${tours.length} tours`,
  },
  {
    path: "/afrobeats",
    what: `The Afrobeats Board — ${afrobeatsArtists.length + 1} artists' certifications and chart records, counted by one stated rule so the totals compare.`,
    size: `${afrobeatsArtists.length + 1} artists`,
  },
  {
    path: "/live-charts",
    what: "Current platform positions across six services, rebuilt hourly. Add /{artist} for a board artist.",
    size: "hourly",
  },
];

const ATTRIBUTION = `Data from Burna Boy Stats — ${CANONICAL_ORIGIN}`;
const CURL = `curl ${base}/charts`;

// The design numbers these; they read as a checklist of what the data is not.
const caveats = [
  { h: "Peaks, not runs.", p: "Chart data records the highest position a release reached in each country, not its week-by-week movement." },
  { h: "Almost no airplay charts.", p: "Genre, component and airplay-only charts are excluded by design, so figures here will be lower than aggregators that count them. The exception is a country that publishes no non-airplay national chart at all — there the airplay chart is the only one there is. Where a country runs both, the non-airplay chart is the one recorded." },
  { h: "“No. 1s” counts placements.", p: "A song that tops five countries adds five, not one." },
  { h: "Streaming figures are display strings.", p: "Values like \"747M\" are rounded for display; treat them as approximate, and null as “no verified figure” rather than zero." },
  { h: "This is an unofficial fan project.", p: "It is not affiliated with Burna Boy or his label." },
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
      totals: {
        chartEntries: chartEntryCount,
        numberOnes,
        countries: chartedCountryCount,
        territories: chartCountryCount,
      },
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
    dateModified: asDateTime(lastUpdated),
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

      {/* Mobile is screen 23 — the shared deep-page grammar, one row per
          endpoint with the size it returns. */}
      {/* Mobile is screen 23 — four documentation blocks, not a row list. It
          used to be four rows with a value column, which left no room for the
          curl, the response envelope, the caveats or the licence string. Every
          pill figure is derived. */}
      <MobileApi
        version={API_VERSION}
        base={`/api/${API_VERSION}`}
        lede="Afrobeats has no open chart dataset. Every figure here is checked against the body that owns it, and published in machine-readable form. The only condition is attribution."
        pills={[
          `${chartEntryCount} chart entries`,
          `${totalAwards()} certifications`,
          // chartedCountryCount, not chartCountryCount: this pill said
          // "countries" over the territory figure, which counts Billboard's
          // Global 200 and Global 200 Excl. US. Neither is a country, so the
          // pill read two higher than the desktop badge beside it on the same
          // page. Both layouts now take the same country figure.
          `${chartedCountryCount} countries`,
          "CC BY 4.0",
        ]}
        endpoints={endpoints}
        caveats={caveats}
        curl={CURL}
        attribution={ATTRIBUTION}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/api" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>Free · no key · no rate limit</div>
          <h1 className={styles.h1}>
            Open <span className="inkText">Data API</span>
          </h1>
          <p className={styles.lede}>
            Every verified number on this site, free to use in JSON. No API key, no rate
            limit, no sign-up.
          </p>
          <p className={styles.intro}>
            Afrobeats has no open chart dataset. Every figure here is checked against the
            body that owns it — Billboard, the Official Charts Company, SNEP, the RIAA, the
            BPI and their national equivalents — so it is published in machine-readable
            form for anyone building, writing or researching. Use it in a project, a story
            or a paper; the only condition is attribution.
          </p>
          <div className={styles.badges}>
            <span className={`${styles.badge} ${styles.badgeLive}`}>
              <span className={styles.badgeDot} aria-hidden="true" />
              {chartEntryCount} chart entries
            </span>
            <span className={styles.badge}>{totalAwards()} certifications</span>
            <span className={styles.badge}>{chartedCountryCount} countries charted</span>
            <span className={`${styles.badge} ${styles.badgeLicence}`}>CC BY 4.0</span>
          </div>
        </section>

        {/* ── Endpoints ──────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="endpoints">
          <h2 id="endpoints" className={styles.h2}>Endpoints</h2>
          <p className={styles.body}>
            All endpoints are <code className={styles.code}>GET</code>, return JSON, and
            send <code className={styles.code}>Access-Control-Allow-Origin: *</code> so you
            can call them straight from the browser.
          </p>
          <div className={styles.endpointList}>
            {endpoints.map((e) => (
              <a
                key={e.path}
                href={`/api/${API_VERSION}${e.path}`}
                target="_blank"
                rel="noreferrer"
                className={styles.endpoint}
              >
                <span className={styles.endpointTop}>
                  <code className={styles.method}>GET</code>
                  <code className={styles.path}>/api/{API_VERSION}{e.path}</code>
                  <span className={styles.size}>{e.size}</span>
                </span>
                <span className={styles.endpointWhat}>{e.what}</span>
              </a>
            ))}
          </div>
          <p className={styles.note}>
            A directory of all {endpoints.length} endpoints lives at{" "}
            <a href={`/api/${API_VERSION}`} target="_blank" rel="noreferrer">
              /api/{API_VERSION}
            </a>
            .
          </p>
        </section>

        {/* ── Try it ─────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="try">
          <h2 id="try" className={styles.h2}>Try it</h2>
          <div className={styles.curlRow}>
            <code className={styles.curl}>{CURL}</code>
            <CopyButton value={CURL} className={styles.copyBtn} />
          </div>
          <p className={styles.body}>
            Every response uses the same envelope — the data, plus where it came from and
            when it last changed:
          </p>
          <pre className={styles.pre}>
            <code>{sample}</code>
          </pre>
          <p className={styles.note}>
            <code>updated</code> is the date of the most recent real change to the data, not
            the last deploy — so you can safely use it to decide whether to re-fetch.
          </p>
        </section>

        {/* ── Licence + stability ────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.blocks}>
            <div className={`${styles.block} ${styles.blockGold}`}>
              <h2 className={styles.blockH}>Licence &amp; attribution</h2>
              <p className={styles.blockP}>
                The dataset is released under{" "}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CC BY 4.0
                </a>
                . You can use it commercially, remix it and redistribute it — just credit
                the source:
              </p>
              <div className={styles.attrRow}>
                <code className={styles.attr}>{ATTRIBUTION}</code>
                <CopyButton value={ATTRIBUTION} className={styles.copyBtnSm} />
              </div>
              <p className={styles.blockMuted}>
                If you publish something built on it, a link back is genuinely appreciated.
                How each figure is verified is set out on the{" "}
                <Link href="/methodology">methodology page</Link>, and every change is
                logged on the <Link href="/updates">updates feed</Link>.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockH}>Stability</h2>
              <p className={styles.blockP}>
                The <code className={styles.code}>{API_VERSION}</code> shape won&apos;t
                change in a breaking way — new fields may be added, but existing ones stay
                put. Anything breaking would ship as{" "}
                <code className={styles.code}>v2</code> at a new path.
              </p>
              <p className={styles.blockMuted}>
                Spotted a problem or want a field added?{" "}
                <Link href="/contact">Get in touch</Link>.
              </p>
              <div className={styles.freshness}>
                <span className={styles.freshDot} aria-hidden="true" />
                Data updated {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* ── Caveats ────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="caveats">
          <h2 id="caveats" className={styles.h2}>What to know before you use it</h2>
          <ul className={styles.caveats}>
            {caveats.map((c, i) => (
              <li key={c.h} className={styles.caveat}>
                <span className={styles.caveatNum}>{String(i + 1).padStart(2, "0")}</span>
                <p className={styles.caveatP}>
                  <strong>{c.h}</strong> {c.p}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Onward ─────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/methodology" className="btn btnSecondary">
            ← How the numbers are verified
          </Link>
          <Link href="/analysis" className="btn btnPrimary">What the numbers say ↗</Link>
          <Link href="/records/charts" className="btn btnSecondary">Every chart entry ↗</Link>
        </section>

        <KeepExploring current="/api" />
      </div>
    </main>
  );
}
