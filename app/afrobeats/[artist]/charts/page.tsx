import Link from "next/link";
import { count } from "../../../lib/plural";
import { notFound } from "next/navigation";
import styles from "../../../records/charts/charts.module.css";
import KeepExploring from "../../../components/KeepExploring";
import MobileOfficialCharts from "../../../components/MobileOfficialCharts";
import ChartExplorer from "../../../components/ChartExplorer";
import bar from "../artist.module.css";
import { lastUpdated } from "../../../lib/api";
import { pageMetadata, datasetJsonLd } from "../../../lib/seo";
import { numberOnes as burnaNo1s, chartEntryCount as burnaEntries } from "../../../data/charts";
import {
  artistBySlug,
  afrobeatsArtists,
  countryMeta,
  chartEntries,
  chartTerritories,
  chartGlobalLines,
  chartNo1s,
  type AfroArtist,
} from "../../../data/afrobeats";

/** "read from each country's national chart, plus 2 Billboard global charts".
 *
 *  The territory count includes Billboard's Global 200 and Global 200 Excl. US
 *  wherever the artist has charted on them, so a flat "each country's principal
 *  national chart" over that figure is false for two of them — the same
 *  countries-vs-territories confusion PR #160 fixed across the Burna Boy pages,
 *  inherited here by the board. One derivation, used by the meta description,
 *  the Dataset node and both layouts' ledes, so they cannot drift apart.
 *
 *  `principal` is dropped in the meta description only: it is worth 10 of the
 *  160 characters check-seo allows, and the page body still spells the full
 *  standard out under "Where the charts come from". */
const sourceClause = (a: AfroArtist, short = false) => {
  const globals = chartGlobalLines(a);
  const national = short ? "each country's national chart" : "each country's principal national chart";
  return globals
    ? `${national}, plus ${count(globals, "Billboard global chart", "Billboard global charts")}`
    : national;
};

export const dynamicParams = false;
export function generateStaticParams() {
  // Only artists whose registers have actually been read have a chart board.
  return afrobeatsArtists.filter((a) => a.charts.length > 0).map((a) => ({ artist: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  if (!a) return {};
  return pageMetadata({
    title: `${a.name} Chart History — ${count(chartNo1s(a), "No.1", "No.1s")} & Chart Peaks`,
    description: `Every ${a.name} official chart peak worldwide — ${count(chartEntries(a), "entry", "entries")} across ${count(chartTerritories(a), "territory", "territories")}, read from ${sourceClause(a, true)}.`,
    path: `/afrobeats/${a.slug}/charts`,
    shareTitle: `${a.name} — Official Chart Peaks`,
    shareDescription: `${count(chartEntries(a), "entry", "entries")}, ${count(chartTerritories(a), "territory", "territories")}, ${count(chartNo1s(a), "No. 1", "No. 1s")}.`,
  });
}

/** The explorer wants releases; the board stores them by kind. Albums and
 *  singles only — the sweeps record a featured credit as the release it is. */
const split = (a: AfroArtist) => ({
  albums: a.charts.filter((r) => r.kind === "Albums"),
  singles: a.charts.filter((r) => r.kind === "Singles"),
});

export default async function AfroArtistChartsPage({
  params,
}: {
  params: Promise<{ artist: string }>;
}) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  if (!a || a.charts.length === 0) notFound();

  const { albums, singles } = split(a);
  const entries = chartEntries(a);
  const territories = chartTerritories(a);
  const no1s = chartNo1s(a);
  const releases = a.charts.length;

  // Only the territories this artist has actually charted in, so the filter
  // rail is their record rather than a list of places to find nothing in.
  const codes = [...new Set(a.charts.flatMap((r) => r.entries.map((e) => e.c)))].sort((x, y) =>
    countryMeta(x).name.localeCompare(countryMeta(y).name)
  );
  const countries = Object.fromEntries(codes.map((c) => [c, countryMeta(c)]));

  // Artwork comes from the release itself — the site's own cover lookup only
  // knows Burna's catalogue. A map, not a function: this is a server component.
  const covers = Object.fromEntries(a.charts.map((r) => [r.title, r.cover]));

  // Most-charted first, which is also the mobile rail's order of usefulness.
  const railOrder = [...codes].sort(
    (x, y) =>
      a.charts.filter((r) => r.entries.some((e) => e.c === y)).length -
      a.charts.filter((r) => r.entries.some((e) => e.c === x)).length
  );

  const dataset = datasetJsonLd({
    name: `${a.name} official chart peaks by country`,
    description: `${a.name}'s peak positions on official singles and album charts across ${territories} territories — every charting release and its highest position, chart by chart, read from ${sourceClause(a)}, including ${no1s} No. 1 peaks.`,
    path: `/afrobeats/${a.slug}/charts`,
    keywords: [a.name, "chart positions", "official charts", "peak chart position", "Afrobeats charts"],
    variableMeasured: ["Peak chart position", "Country / territory", "Release", "Chart"],
        dateModified: lastUpdated,
    about: { name: a.name, sameAs: [a.wikipedia, `https://open.spotify.com/artist/${a.spotifyId}`] },
  });

  // "Territories" counts every distinct code in the artist's chart data, and for
  // most of them that includes Billboard's two global lines — so the note
  // "national charts" was describing a figure that is not purely national.
  // Derived per artist: Victony has one global line, four artists have none.
  const globalLines = chartGlobalLines(a);
  const territoryNote = globalLines
    ? `incl. ${count(globalLines, "global chart", "global charts")}`
    : "national charts";

  const stats = [
    { num: entries, label: "Chart entries", note: "official charts only" },
    { num: no1s, label: "No. 1 peaks", note: "placements, not releases" },
    { num: territories, label: "Territories", note: territoryNote },
    { num: releases, label: "Charting releases", note: "albums and singles" },
  ];

  const sourceNote = `Peaks on ${sourceClause(a)} — the same standard used for Burna Boy. Airplay, genre and platform charts excluded. Board reviewed weekly.`;

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />

      {/* Mobile keeps its own dedicated charts screen — the peak pills, the
          country rail and the grouping are the whole point of the page, and a
          flat list would throw all three away. */}
      <MobileOfficialCharts
        albums={albums}
        singles={singles}
        features={[]}
        countries={countries}
        entryCount={entries}
        territoryCount={territories}
        numberOnes={no1s}
        releaseCount={releases}
        covers={covers}
        countryRail={railOrder}
        backHref={`/afrobeats/${a.slug}`}
        backLabel={`${a.name} · charts`}
        heading={{ lead: a.name, gold: "charts" }}
        lede={`${count(entries, "entry", "entries")} across ${count(territories, "territory", "territories")}, ${no1s} of them at No. 1 — every peak read from ${sourceClause(a)}.`}
        sourceNote={sourceNote}
        showActionBar={false}
        territoryNote={territoryNote}
      />

      <div className={styles.desktopOnly}>
        <nav className={bar.crumbs} aria-label="Breadcrumb">
          <Link href="/afrobeats">The Afrobeats Board</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/afrobeats/${a.slug}`}>{a.name}</Link>
          <span aria-hidden="true">/</span>
          <span className={bar.crumbCurrent}>Official charts</span>
        </nav>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className={styles.heroWrap}>
          <div className={styles.kicker}>Peak positions worldwide</div>
          <h1 className={styles.h1}>
            {a.name} <span className="inkText">Charts</span>
          </h1>
          <p className={styles.lede}>
            {/* A single expression: JSX drops the space after an expression when
                the sentence wraps to the next line, which published "24of them". */}
            {`${a.name}’s peak positions on the world’s official charts — ${count(entries, "entry", "entries")} across ${count(territories, "territory", "territories")}, ${no1s} of them at No. 1, read from ${sourceClause(a)} rather than a platform or genre listing.`}
          </p>

          <div className={styles.statGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCell}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statNote}>{s.note}</div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.explorerWrap}>
          <ChartExplorer
            albums={albums}
            singles={singles}
            features={[]}
            countries={countries}
            covers={covers}
          />
        </div>

        {/* ── Where the charts come from ─────────────────────────── */}
        <section className={styles.sourceWrap}>
          <div className={styles.sourceGrid}>
            <p className={styles.source}>
              Peak positions on each country&apos;s principal national chart — the Official Charts
              Company, SNEP, GfK, FIMI, PROMUSICAE, ARIA, Recorded Music NZ, TurnTable, The Official
              SA Charts and their equivalents, with Billboard&apos;s charts used where a territory
              publishes none of its own. Genre listings, below-the-main-chart &ldquo;bubbling&rdquo;
              sections and platform charts are excluded, as are airplay charts except in the few
              countries that publish no non-airplay chart at all. Counted by exactly the standard
              behind Burna Boy&apos;s{" "}
              <Link href="/records/charts">{burnaEntries} entries and {burnaNo1s} No. 1s</Link>, so
              the two records can be read side by side. The board is reviewed weekly.
            </p>
            <div className={styles.splitPanel}>
              <div className={styles.splitKicker}>This artist&apos;s record</div>
              <div className={styles.splitList}>
                <div className={styles.splitRow}>
                  <span className={styles.splitNum}>{entries}</span>
                  <span className={styles.splitLabel}>official chart entries</span>
                </div>
                <div className={styles.splitRow}>
                  <span className={styles.splitNum}>{territories}</span>
                  <span className={styles.splitLabel}>territories charted in</span>
                </div>
                <div className={styles.splitRow}>
                  <span className={styles.splitNum}>{no1s}</span>
                  <span className={styles.splitLabel}>peaks at No. 1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Onward ─────────────────────────────────────────────── */}
        <section className={styles.actionWrap}>
          <div className={styles.actions}>
            <Link href={`/afrobeats/${a.slug}`} className="btn btnSecondary">← {a.name}</Link>
            <Link href="/afrobeats" className="btn btnPrimary">The Afrobeats Board ↗</Link>
            <Link href="/records/charts" className="btn btnSecondary">Burna Boy&apos;s charts ↗</Link>
          </div>
        </section>

        <KeepExploring current="/afrobeats" />
      </div>
    </main>
  );
}
