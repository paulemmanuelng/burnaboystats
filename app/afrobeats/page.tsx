import Link from "next/link";
import styles from "./afrobeats.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import MobileMenuButton from "../components/MobileMenuButton";
import BackLink from "../components/BackLink";
import MobileAfrobeatsHub from "../components/MobileAfrobeatsHub";
import HubScatter, { type ScatterDot } from "../components/HubScatter";
import { pageMetadata, CANONICAL_ORIGIN } from "../lib/seo";
import { LIVE_BOARDS } from "../data/liveBoards";
import {
  sweptArtists,
  pendingArtists,
  certCount,
  countryCount,
  topAward,
  chartEntries,
  BURNA,
  AFROBEATS_VERIFIED_ON,
  AFROBEATS_VERIFIED_ON_2,
} from "../data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../data/certifications";
import { chartEntryCount as burnaChartEntries } from "../data/charts";
import { livePlacementCount as burnaLivePlacements } from "../data/liveCharts";

// Names, and the count in the eyebrow, come from the data: adding an artist to
// the board must not leave the copy describing the old one.
const boardNames = [BURNA.name, ...[...sweptArtists].sort((a, b) => certCount(b) - certCount(a)).map((a) => a.name)];
// Ten names no longer fit a meta description, so the biggest five lead and the
// rest are counted. Still derived: adding an artist moves the number.
const nameList = `${boardNames.slice(0, 5).join(", ")} and ${boardNames.length - 5} more`;

export const metadata = pageMetadata({
  title: "The Afrobeats Board — Certifications & Charts",
  description:
    `${nameList}, counted by one rule — every plaque read in the issuing body's own register, never a fan tally.`,
  path: "/afrobeats",
  shareTitle: "The Afrobeats Board",
  shareDescription: "The genre's biggest names, counted by one rule.",
});

// Ordered by verified plaque count — the board's whole point is comparability,
// so the order has to be the number, not an opinion.
const ranked = [...sweptArtists].sort((a, b) => certCount(b) - certCount(a));

// The two sweep dates as one range — "17–19 August 2026" — so the provenance
// tile moves when the sweeps do instead of carrying a typed string.
const sweptRange = (() => {
  const d = (iso: string) => new Date(`${iso}T12:00:00Z`);
  const a = d(AFROBEATS_VERIFIED_ON);
  const b = d(AFROBEATS_VERIFIED_ON_2);
  const month = (x: Date) => x.toLocaleDateString("en-GB", { month: "long", timeZone: "UTC" });
  const year = b.getUTCFullYear();
  if (a.getTime() === b.getTime()) return `${a.getUTCDate()} ${month(a)} ${year}`;
  return month(a) === month(b) && a.getUTCFullYear() === year
    ? `${a.getUTCDate()}–${b.getUTCDate()} ${month(b)} ${year}`
    : `${a.getUTCDate()} ${month(a)} – ${b.getUTCDate()} ${month(b)} ${year}`;
})();

// Every dot is a computed pair. Burna leads the list so he paints last-but-one
// under nobody; the plot itself does not care about order.
// The live rail's own caption, one sentence, shared by both layouts.
const liveCadenceNote =
  "Live placements across Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts — platform charts, not official ones.";

const scatterDots: ScatterDot[] = [
  { slug: "burna-boy", name: BURNA.name, countries: burnaCountries, plaques: totalAwards(), anchor: true },
  ...sweptArtists.map((a) => ({
    slug: a.slug,
    name: a.name,
    countries: countryCount(a),
    plaques: certCount(a),
    anchor: false,
  })),
];

// Both rails carry Burna Boy alongside the board. The page's question is where
// he stands among them, and a rail he is absent from cannot answer it. He is
// sorted on his own figure like everyone else rather than pinned to the front —
// he leads both today, and if that ever changes the rail should say so. His
// chips link to his own pages, which is why the rows are built rather than
// mapped straight off the board arrays.
interface Rail { key: string; name: string; href: string; value: number; isBurna: boolean }

const chartPeakRail: Rail[] = [
  { key: "burna-boy", name: "Burna Boy", href: "/records/charts", value: burnaChartEntries, isBurna: true },
  ...sweptArtists.map((a) => ({
    key: a.slug,
    name: a.name,
    href: `/afrobeats/${a.slug}/charts`,
    value: chartEntries(a),
    isBurna: false,
  })),
].sort((x, y) => y.value - x.value);

const liveRail: Rail[] = [
  { key: "burna-boy", name: "Burna Boy", href: "/live-charts", value: burnaLivePlacements, isBurna: true },
  ...LIVE_BOARDS.map((b) => ({
    key: b.slug,
    name: [...sweptArtists, ...pendingArtists].find((a) => a.slug === b.slug)?.name ?? b.slug,
    href: `/afrobeats/${b.slug}/live`,
    value: b.placements,
    isBurna: false,
  })),
].sort((x, y) => y.value - x.value);

const badge = (a: (typeof sweptArtists)[number]) => {
  const t = topAward(a);
  if (!t) return null;
  return `${t.x && t.x > 1 ? `${t.x}× ` : ""}${t.level}`;
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "The Afrobeats Board",
  url: `${CANONICAL_ORIGIN}/afrobeats`,
  description:
    "Certification and chart records for Afrobeats' biggest artists, each read in the issuing body's own register.",
  // An ItemList, not hasPart: hasPart takes CreativeWork parts of this page,
  // while what the board actually publishes is a ranked list of artists.
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: ranked.length + pendingArtists.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: [...ranked, ...pendingArtists].map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${CANONICAL_ORIGIN}/afrobeats/${a.slug}`,
      name: a.name,
    })),
  },
};

export default function AfrobeatsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* The phone gets its own screen. It used to get this page's grid squeezed
          by media queries — four columns down to two, and Burna the first
          half-width cell among ten on the one page whose job is to place him
          against the field. */}
      <MobileAfrobeatsHub
        boardCount={sweptArtists.length + 1}
        burna={{
          name: BURNA.name,
          flag: BURNA.flag,
          image: BURNA.image,
          href: BURNA.href,
          certs: totalAwards(),
          countries: burnaCountries,
        }}
        artists={ranked.map((a) => ({
          slug: a.slug,
          name: a.name,
          flag: a.flag,
          image: a.image,
          certs: certCount(a),
          countries: countryCount(a),
          badge: badge(a),
        }))}
        chartRail={chartPeakRail}
        liveRail={liveRail}
        sweptRange={sweptRange}
        liveNote={liveCadenceNote}
      />

      <div className={styles.desktopBody}>
      <div className={styles.desktopCrumbs}>
        <BreadcrumbBar path="/afrobeats" />
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          One rule, {boardNames.length} verified artists
        </div>
        <h1 className={styles.h1}>
          The Afrobeats <span className="inkText">Board</span>
        </h1>
        <p className={styles.lede}>
          Where Burna Boy stands among the genre&apos;s biggest names — counted the same way he is.
          One plaque per title per country at its current tier, lead and featured credits both,
          every figure read in the issuing body&apos;s own register rather than taken from a fan tally.
        </p>
        <p className={styles.cadence}>
          The board is reviewed weekly. Burna Boy&apos;s own pages update daily.
        </p>
      </section>

      {/* ── The grid ─────────────────────────────────────────── */}
      <section className={styles.gridPad} aria-labelledby="the-field">
        <h2 id="the-field" className="visuallyHidden">The field</h2>
        <div className={styles.grid}>
          {/* Burna leads the board and goes to his ledger, not to a profile: he
              is the site's subject, so there is no /afrobeats page for him, and
              this tile states a plaque count — so the count is what it opens. */}
          <Link href={BURNA.href} className={`${styles.tile} ${styles.tileAnchor}`}>
            <span className={styles.art} style={{ backgroundImage: `url(${BURNA.image})` }} aria-hidden="true" />
            <span className={styles.scrim} aria-hidden="true" />
            <span className={styles.tileBody}>
              <span className={styles.tileTop}>
                <span className={styles.flag} aria-hidden="true">{BURNA.flag}</span>
                <span className={styles.anchorTag}>This site</span>
              </span>
              <span className={styles.tileName}>{BURNA.name}</span>
              <span className={styles.tileStat}>
                <strong>{totalAwards()}</strong> certifications · {burnaCountries} countries
              </span>
              <span className={styles.tileHook}>{BURNA.hook}</span>
            </span>
          </Link>

          {ranked.map((a) => (
            <Link
              key={a.slug}
              href={`/afrobeats/${a.slug}`}
              className={styles.tile}
              prefetch={false}
            >
              <span className={styles.art} style={{ backgroundImage: `url(${a.image})` }} aria-hidden="true" />
              <span className={styles.scrim} aria-hidden="true" />
              <span className={styles.tileBody}>
                <span className={styles.tileTop}>
                  <span className={styles.flag} aria-hidden="true">{a.flag}</span>
                  {badge(a) && <span className={styles.topBadge}>{badge(a)}</span>}
                </span>
                <span className={styles.tileName}>{a.name}</span>
                <span className={styles.tileStat}>
                  <strong>{certCount(a)}</strong> certifications · {countryCount(a)}{" "}
                  {countryCount(a) === 1 ? "country" : "countries"}
                </span>
                <span className={styles.tileHook}>{a.hook}</span>
              </span>
            </Link>
          ))}
          {/* The board rarely divides evenly into the column count, so the
              grid ends with cells to spare. The rule they are all counted by is
              the honest thing to put in one.
              This tile and the provenance one beside it used to point at the
              same bare /methodology, so two tiles with different labels led to
              the same place. They ask different questions, and the methodology
              page answers them in two different sections. */}
          <Link href="/methodology#principles" className={`${styles.tile} ${styles.tileRule}`}>
            <span className={styles.tileBody}>
              <span className={styles.tileTop}>
                <span className={styles.ruleMark} aria-hidden="true">§</span>
              </span>
              <span className={styles.ruleName}>One rule, counted the same</span>
              <span className={styles.ruleBody}>
                One plaque per title per country at its current tier. Award events are not
                plaques, fan tallies are not registers, and nothing is published here that has
                not been read at source.
              </span>
              <span className={styles.ruleLink}>How the counting works →</span>
            </span>
          </Link>

          {/* The second leftover cell, filled with where the figures came
              from — which is the board's whole claim. The date range is the two
              sweep dates, not a typed string. Neither comment names a cell
              number any more: the board has outgrown three such counts already. */}
          <Link href="/methodology#sources" className={`${styles.tile} ${styles.tileRule}`}>
            <span className={styles.tileBody}>
              <span className={styles.ruleKicker}>Provenance</span>
              <span className={styles.ruleName}>Read at source, {sweptRange}</span>
              <span className={styles.ruleBody}>
                {sweptArtists.length} register sweeps — RIAA, BPI, SNEP, TurnTable and their
                equivalents — re-read weekly. A figure with no register behind it is not
                published.
              </span>
              <span className={styles.ruleLink}>Where the figures come from →</span>
            </span>
          </Link>
        </div>

        <HubScatter dots={scatterDots} />

        {/* Two rails, two kinds of record. Without these the chart boards and
            the live boards were each reachable from one page only. */}
        <div className={styles.chartRail}>
          <span className={styles.railLabel}>Chart peaks</span>
          {chartPeakRail.map((r) => (
            <Link
              key={r.key}
              href={r.href}
              className={r.isBurna ? `${styles.railLink} ${styles.railAnchor}` : styles.railLink}
              prefetch={false}
            >
              {r.name} <span className={styles.railNum}>{r.value}</span>
            </Link>
          ))}
        </div>

        <div className={styles.chartRail}>
          <span className={`${styles.railLabel} ${styles.railLive}`}>
            <span className={styles.railDot} aria-hidden="true" />
            Charting now
          </span>
          {liveRail.map((r) => (
            <Link
              key={r.key}
              href={r.href}
              className={r.isBurna ? `${styles.railLink} ${styles.railAnchor}` : styles.railLink}
              prefetch={false}
            >
              {r.name} <span className={styles.railNum}>{r.value}</span>
            </Link>
          ))}
        </div>

        {pendingArtists.length > 0 && (
          <>
            <h2 className={styles.pendingHead}>Sweep scheduled</h2>
            <p className={styles.pendingLede}>
              On the board for their streaming weight, with no figures published until their
              registers have been read at source.
            </p>
            <div className={styles.grid}>
              {pendingArtists.map((a) => (
                <Link key={a.slug} href={`/afrobeats/${a.slug}`} className={`${styles.tile} ${styles.tilePending}`}>
                  <span className={styles.art} style={{ backgroundImage: `url(${a.image})` }} aria-hidden="true" />
                  <span className={styles.scrim} aria-hidden="true" />
                  <span className={styles.tileBody}>
                    <span className={styles.tileTop}>
                      <span className={styles.flag} aria-hidden="true">{a.flag}</span>
                      <span className={styles.pendingBadge}>Scheduled</span>
                    </span>
                    <span className={styles.tileName}>{a.name}</span>
                    <span className={styles.tileStat}>Register sweep pending</span>
                    <span className={styles.tileHook}>{a.hook}</span>
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}

        <p className={styles.foot}>
          Counted under the rules on the{" "}
          <Link href="/methodology#principles">methodology page</Link>. Last read at source{" "}
          {sweptRange}.
        </p>
      </section>

      </div>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/afrobeats" />
      </div>
    </main>
  );
}
