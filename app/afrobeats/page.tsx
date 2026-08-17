import Link from "next/link";
import styles from "./afrobeats.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import MobileMenuButton from "../components/MobileMenuButton";
import BackLink from "../components/BackLink";
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
} from "../data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../data/certifications";

// Names, and the count in the eyebrow, come from the data: adding an artist to
// the board must not leave the copy describing the old one.
const boardNames = [BURNA.name, ...[...sweptArtists].sort((a, b) => certCount(b) - certCount(a)).map((a) => a.name)];
const nameList = `${boardNames.slice(0, -1).join(", ")} and ${boardNames.at(-1)}`;

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

      <div className={styles.mobileBackBar}>
        <BackLink href="/" aria-label="Back home" className={styles.mobileBackBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.mobileBackLabel}>The Afrobeats Board</span>
        <MobileMenuButton />
      </div>

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
          {/* Burna leads the board and goes home, not to a profile — he is the
              site's subject, so his tile is the door back to all of it. */}
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
            <Link key={a.slug} href={`/afrobeats/${a.slug}`} className={styles.tile}>
              <span className={styles.art} style={{ backgroundImage: `url(${a.image})` }} aria-hidden="true" />
              <span className={styles.scrim} aria-hidden="true" />
              <span className={styles.tileBody}>
                <span className={styles.tileTop}>
                  <span className={styles.flag} aria-hidden="true">{a.flag}</span>
                  {badge(a) && <span className={styles.topBadge}>{badge(a)}</span>}
                </span>
                <span className={styles.tileName}>{a.name}</span>
                <span className={styles.tileStat}>
                  <strong>{certCount(a)}</strong> certifications · {countryCount(a)} countries
                </span>
                <span className={styles.tileHook}>{a.hook}</span>
              </span>
            </Link>
          ))}
          {/* Seven artists in a four-column grid leaves one cell empty. The
              rule they are all counted by is the honest thing to put in it. */}
          <Link href="/methodology" className={`${styles.tile} ${styles.tileRule}`}>
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
        </div>

        {/* Two rails, two kinds of record. Without these the chart boards and
            the live boards were each reachable from one page only. */}
        <div className={styles.chartRail}>
          <span className={styles.railLabel}>Chart peaks</span>
          {ranked.map((a) => (
            <Link key={a.slug} href={`/afrobeats/${a.slug}/charts`} className={styles.railLink}>
              {a.name} <span className={styles.railNum}>{chartEntries(a)}</span>
            </Link>
          ))}
        </div>

        <div className={styles.chartRail}>
          <span className={`${styles.railLabel} ${styles.railLive}`}>
            <span className={styles.railDot} aria-hidden="true" />
            Charting now
          </span>
          {[...LIVE_BOARDS]
            .sort((a, b) => b.placements - a.placements)
            .map((b) => {
              const artist = [...sweptArtists, ...pendingArtists].find((a) => a.slug === b.slug);
              return (
                <Link key={b.slug} href={`/afrobeats/${b.slug}/live`} className={styles.railLink}>
                  {artist?.name ?? b.slug} <span className={styles.railNum}>{b.placements}</span>
                </Link>
              );
            })}
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
          Counted under the rules on the <Link href="/methodology">methodology page</Link>. Last read
          at source{" "}
          {new Date(`${AFROBEATS_VERIFIED_ON}T12:00:00Z`).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          .
        </p>
      </section>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/afrobeats" />
      </div>
    </main>
  );
}
