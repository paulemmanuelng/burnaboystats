"use client"; // the tier rail filters the list

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./mobileCerts.module.css";
import { badgeWeight } from "../lib/certs";
import ScrollRail from "./ScrollRail";
import { titleKey } from "../lib/titleKey";
import { coverFor } from "../lib/covers";
import { spotifyImage } from "../lib/spotifyImage";
import { portraitArtFor } from "../lib/portraitArt";
import type { CertEvent, Country, Release } from "../data/certifications";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/**
 * The mobile certifications screen.
 *
 * A distinct screen, not the desktop page reflowed: one big total with the
 * tier bars stacked under it, a scrolling tier rail, then the most-certified
 * releases as stacked rows with their badges wrapped beneath each title.
 * Built from designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 02.
 *
 * Every figure derives from app/data.
 */

const TIER_ORDER = ["Diamond", "Platinum", "Gold", "Silver"] as const;
type Tier = (typeof TIER_ORDER)[number];

// Tier colours carry data meaning and are never recoloured to gold.
const INK: Record<Tier, string> = {
  Diamond: "#8fe3f0",
  Platinum: "#dfe2e8",
  Gold: "#ffb627",
  Silver: "#b8bcc4",
};
const GRAD: Record<Tier, string> = {
  Diamond: "linear-gradient(90deg,#4fb9cc,#8fe3f0)",
  Platinum: "linear-gradient(90deg,#9aa1ad,#dfe2e8)",
  Gold: "linear-gradient(90deg,#ff7a1a,#ffd24a)",
  Silver: "linear-gradient(90deg,#7e828a,#b8bcc4)",
};

const ROWS_SHOWN = 10;

const YEARS = [2026, 2025, 2024, 2023];

export default function MobileCerts({
  releases,
  albums,
  history,
  countries,
  total,
  countryCount,
  covers,
  portrait,
  portraitSlug,
  chartsHref,
  liveHref,
  chartsNote,
  liveNote,
  backHref = "/",
  backLabel = "Certifications",
  lede,
  showActionBar = true,
}: {
  releases: Release[];
  albums: Release[];
  /** The by-year log. Empty hides that section: the Afrobeats Board's artists
   *  have plaques but no dated award events, and a year rail over nothing is
   *  worse than no rail. */
  history: CertEvent[];
  countries: Record<string, Country>;
  total: number;
  countryCount: number;
  /** Artwork by release title. Burna Boy's page passes nothing, because the
   *  site's own catalogue lookup knows every one of his releases. */
  covers?: Record<string, string | undefined>;
  backHref?: string;
  backLabel?: string;
  /** Replaces the hero sentence, which names Burna Boy's own certifying bodies. */
  lede?: string;
  /** The artist's portrait, blended into the hero behind the type. */
  portrait?: string;
  /** Which artist's treatment to use — see app/lib/portraitArt.ts. */
  portraitSlug?: string;
  /** This artist's official chart peaks, if they have a board. */
  chartsHref?: string;
  /** This artist's live board, if they have one. */
  liveHref?: string;
  /** Which register carries most of their peaks — "TurnTable and more". */
  chartsNote?: string;
  /** Which platform carries most of their live placements. */
  liveNote?: string;
  /** The board's screens end in the five-tab bar instead of an action bar. */
  showActionBar?: boolean;
}) {
  const art = (title: string) => (covers ? covers[title] : coverFor(title));
  // The list runs albums, singles and features together, so an album needs
  // saying — on desktop the three are separate sections and the grouping does
  // this job for free.
  const albumTitles = new Set(albums.map((a) => titleKey(a.title)));
  const portraitArt = portraitArtFor(portraitSlug ?? "burna-boy");
  const [tier, setTier] = useState<Tier | null>(null);
  // Rows whose full badge wall is open — keyed by title, folded by default.
  const [openBadges, setOpenBadges] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState(false);
  const [year, setYear] = useState(YEARS[0]);

  const tierCount = TIER_ORDER.reduce<Record<Tier, number>>(
    (acc, name) => {
      acc[name] = releases.reduce(
        (n, r) => n + r.certs.filter((c) => c.level === name).length,
        0
      );
      return acc;
    },
    { Diamond: 0, Platinum: 0, Gold: 0, Silver: 0 }
  );
  const maxTier = Math.max(...TIER_ORDER.map((t) => tierCount[t]));

  const matching = releases
    .filter((r) => !tier || r.certs.some((c) => c.level === tier))
    .slice()
    // Albums lead, then the songs — each block running most-certified to
    // least. The blocks aren't labelled; the ALBUM tag on each album row is
    // what carries the split.
    .sort((a, b) => {
      const aAlbum = albumTitles.has(titleKey(a.title)) ? 0 : 1;
      const bAlbum = albumTitles.has(titleKey(b.title)) ? 0 : 1;
      return aAlbum - bAlbum || b.certs.length - a.certs.length;
    });
  const rows = expanded ? matching : matching.slice(0, ROWS_SHOWN);
  const hidden = matching.length - rows.length;

  const events = history.filter((e) => e.year === year);
  const yearCounts = history.reduce<Record<number, number>>((acc, e) => {
    acc[e.year] = (acc[e.year] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href={backHref} aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>{backLabel}</span>
        <span className={styles.backCount}>{total}</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        {portrait && (
          <>
            <span
              className={portraitArt.mode === "emblem" ? `${styles.heroArt} ${styles.heroArtEmblem}` : styles.heroArt}
              style={{
                backgroundImage: `url(${portrait})`,
                "--focal": portraitArt.focal,
                "--portrait-opacity": portraitArt.opacity,
                "--grayscale": portraitArt.grayscale,
              } as CSSProperties}
              aria-hidden="true"
            />
            <span className={styles.heroScrim} aria-hidden="true" />
          </>
        )}
        <div className={styles.kicker}>Certified worldwide</div>
        {/* The page's <h1>. Screen 02 leads with the total rather than a worded
            title, so the total IS the heading — it reads "221 awards, 25
            countries". Both layouts sit in the DOM at once, so the document
            carries two h1s, one per layout, and only ever one is visible. */}
        <h1 className={styles.totalRow}>
          <span className={styles.total}>{total}</span>
          <span className={styles.totalUnit}>
            awards
            <br />
            {countryCount} {countryCount === 1 ? "country" : "countries"}
          </span>
        </h1>
        <p className={styles.lede}>
          {lede ??
            `Silver, Gold, Platinum and Diamond awards from the RIAA, BPI, SNEP, Music Canada and ${countryCount - 4} more — across ${releases.length} certified releases.`}
        </p>

        <div className={styles.tierList}>
          {TIER_ORDER.filter((name) => tierCount[name] > 0).map((name) => (
            <div key={name} className={styles.tierRow}>
              <div className={styles.tierTop}>
                <span className={styles.tierName} style={{ color: INK[name] }}>{name}</span>
                <span className={styles.tierCount}>{tierCount[name]}</span>
                <span className={styles.tierPct}>
                  {Math.round((tierCount[name] / total) * 100)}%
                </span>
              </div>
              <div className={styles.tierTrack}>
                <div
                  className={styles.tierFill}
                  style={{ width: `${(tierCount[name] / maxTier) * 100}%`, background: GRAD[name] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tier rail */}
      <ScrollRail className={styles.rail} label="Filter by certification tier">
        <button
          type="button"
          className={`${styles.chip} ${!tier ? styles.chipOn : ""}`}
          onClick={() => setTier(null)}
        >
          {!tier ? null : <span className={styles.chipDot} style={{ background: INK.Gold }} />}
          All {total}
        </button>
        {TIER_ORDER.filter((name) => tierCount[name] > 0).map((name) => (
          <button
            key={name}
            type="button"
            className={`${styles.chip} ${tier === name ? styles.chipOn : ""}`}
            style={tier === name ? undefined : { color: INK[name] }}
            onClick={() => setTier(tier === name ? null : name)}
          >
            {tier === name ? null : <span className={styles.chipDot} style={{ background: INK[name] }} />}
            {name} {tierCount[name]}
          </button>
        ))}
      </ScrollRail>

      <div className={styles.listLabel}>Most-certified releases</div>

      <div className={styles.list}>
        {rows.map((r, i) => (
          // Deliberately not interactive: the row already shows every one of
          // the release's certifications, so a tap has nothing to reveal. It
          // linked to /certifications?release=… for a while, which on a phone
          // only re-navigated the same page and jumped to the top.
          <div key={r.title} className={styles.row}>
            <div className={styles.rowTop}>
              <span className={styles.rank}>{String(i + 1).padStart(2, "0")}</span>
              {/* Same treatment as the live-charts rows: the release's art,
                  resolved by title, riding between rank and name. */}
              <span
                className={styles.rowCover}
                aria-hidden="true"
                style={{ backgroundImage: `url(${spotifyImage(art(r.title) ?? "", 300)})` }}
              />
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>
                  {r.title}
                  {albumTitles.has(titleKey(r.title)) && (
                    <span className={styles.albumTag}>Album</span>
                  )}
                </div>
                <div className={styles.rowMeta}>
                  {[r.credit, r.year].filter(Boolean).join(" · ")}
                </div>
              </div>
              <span className={styles.rowCount}>{r.certs.length} certs</span>
            </div>
            <div className={styles.badges}>
              {(() => {
                // A row with 20+ plaques is a wall on a phone — Dai Dai and
                // Last Last each push past a dozen and a board artist can go
                // further. Past 15 the row folds: the twelve biggest show, a
                // "+N" chip opens the rest in place, "− less" folds it back.
                // Thresholds live here on purpose: fold at >15, show 12, so
                // the chip never appears just to hide two badges.
                const sorted = [...r.certs].sort((x, y) => badgeWeight(y) - badgeWeight(x));
                const folded = sorted.length > 15 && !openBadges.has(r.title);
                return (folded ? sorted.slice(0, 12) : sorted);
              })()
                .map((c) => {
                  // Keyed off the level itself. tierOf() returns a lowercase
                  // slug ("gold"), which never matched this map — every badge
                  // was falling through to silver.
                  const ink = INK[c.level as Tier] ?? INK.Silver;
                  return (
                    <span
                      key={`${c.c}-${c.level}-${c.x ?? 1}`}
                      className={styles.badge}
                      style={{ color: ink, borderColor: ink }}
                    >
                      <span className={styles.flag}>{countries[c.c].flag}</span>
                      {c.x ? `${c.x}× ` : ""}
                      {c.level}
                      {c.body && c.body !== countries[c.c].body && (
                        <span className={styles.badgeProgram}>
                          {c.body.replace(countries[c.c].body, "").trim() || c.body}
                        </span>
                      )}
                    </span>
                  );
                })}
              {r.certs.length > 15 && (
                <button
                  type="button"
                  className={styles.badgeMore}
                  aria-expanded={openBadges.has(r.title)}
                  onClick={() =>
                    setOpenBadges((prev) => {
                      const next = new Set(prev);
                      if (next.has(r.title)) next.delete(r.title);
                      else next.add(r.title);
                      return next;
                    })
                  }
                >
                  {openBadges.has(r.title) ? "− less" : `+${r.certs.length - 12}`}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* The whole ledger is here — the button opens the rest in place rather
          than sending a phone reader to the desktop table. It only appears
          when there is actually something left to reveal: filtering to
          Diamond leaves six releases, all of them already on screen. */}
      {matching.length > ROWS_SHOWN && (
        <button
          type="button"
          className={styles.allBtn}
          aria-expanded={expanded}
          onClick={() => setExpanded((o) => !o)}
        >
          {expanded ? `Show the top ${ROWS_SHOWN}` : `All ${matching.length} releases`}
          <span aria-hidden="true">{expanded ? "↑" : `+${hidden}`}</span>
        </button>
      )}

      {/* The two other boards, side by side. The desktop page carries these as
          full-width panels, but both sat inside .desktopOnly — so on a phone
          this screen was a dead end: no way to reach the chart peaks or the
          live board without going back out through the hub. Under the ledger
          is where they belong, because that is the point a reader has finished
          with the plaques and wants the next kind of record. */}
      {(chartsHref || liveHref) && (
        <div className={styles.boards}>
          {chartsHref && (
            <Link href={chartsHref} className={styles.boardBtn}>
              <span className={styles.boardTop}>
                <span className={styles.boardLabel}>Chart peaks</span>
                <span className={styles.boardGo} aria-hidden="true">↗</span>
              </span>
              {chartsNote && <span className={styles.boardNote}>{chartsNote}</span>}
            </Link>
          )}
          {liveHref && (
            <Link href={liveHref} className={`${styles.boardBtn} ${styles.boardLive}`}>
              <span className={styles.boardTop}>
                <span className={styles.boardDot} aria-hidden="true" />
                <span className={styles.boardLabel}>Live charts</span>
                <span className={styles.boardGo} aria-hidden="true">↗</span>
              </span>
              {liveNote && <span className={styles.boardNote}>{liveNote}</span>}
            </Link>
          )}
        </div>
      )}

      {/* ── The dated log ─────────────────────────────────────────── */}
      {history.length > 0 && (
      <section className={styles.log}>
        <div className={styles.logHead}>
          <div className={styles.logKicker}>The dated log</div>
          <h2 className={styles.logTitle}>Certifications by year</h2>
          <p className={styles.logLede}>
            Each international announcement as it landed — a release can appear twice in a
            year if it was certified at two tiers. Nigeria’s TCSN plaques count in the
            totals and the country grid, not in this log.
          </p>
        </div>

        <ScrollRail className={styles.rail} label="Filter the log by year">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              className={`${styles.chip} ${year === y ? styles.chipOn : ""}`}
              aria-pressed={year === y}
              onClick={() => setYear(y)}
            >
              {y}
              <span className={styles.chipSep} aria-hidden="true">·</span>
              <span className={styles.chipCount}>{yearCounts[y] ?? 0}</span>
              <span className="visuallyHidden">certifications</span>
            </button>
          ))}
        </ScrollRail>

        <div className={styles.list}>
          {events.map((e, i) => {
            const ink = INK[e.level as Tier] ?? INK.Silver;
            return (
              <div key={`${e.title}-${e.country}-${i}`} className={styles.eventRow}>
                <div className={styles.rowMain}>
                  <div className={styles.eventTitle}>{e.title}</div>
                  <div className={styles.rowMeta}>
                    {[e.album ? "Album" : e.credit, countries[e.country].body]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                </div>
                <span className={styles.badge} style={{ color: ink, borderColor: ink }}>
                  <span className={styles.flag}>{countries[e.country].flag}</span>
                  {e.x ? `${e.x}× ` : ""}
                  {e.level}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      )}

      <div className={styles.spacer} />

      {/* Action bar — replaces the tab bar on a deep screen */}
      {showActionBar && (
      <div className={styles.actionBar}>
        <Link href="/share" className={styles.actionPrimary}>
          Make a stat card ↗
        </Link>
        <button
          type="button"
          aria-label="Filter by tier"
          className={styles.actionIcon}
          onClick={() => document.getElementById("cert-rail")?.scrollIntoView({ behavior: "smooth" })}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 7h16M7 12h10M10 17h4" />
          </svg>
        </button>
      </div>
      )}
    </div>
  );
}
