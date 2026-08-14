"use client"; // the tier rail filters the list

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileCerts.module.css";
import { badgeWeight } from "../lib/certs";
import ScrollRail from "./ScrollRail";
import { titleKey } from "../lib/titleKey";
import { coverFor } from "../lib/covers";
import { spotifyImage } from "../lib/spotifyImage";
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
}: {
  releases: Release[];
  albums: Release[];
  history: CertEvent[];
  countries: Record<string, Country>;
  total: number;
  countryCount: number;
}) {
  // The list runs albums, singles and features together, so an album needs
  // saying — on desktop the three are separate sections and the grouping does
  // this job for free.
  const albumTitles = new Set(albums.map((a) => titleKey(a.title)));
  const [tier, setTier] = useState<Tier | null>(null);
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
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Certifications</span>
        <span className={styles.backCount}>{total}</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
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
            {countryCount} countries
          </span>
        </h1>
        <p className={styles.lede}>
          Silver, Gold, Platinum and Diamond awards from the RIAA, BPI, SNEP, Music Canada
          and {countryCount - 4} more — across {releases.length} certified releases.
        </p>

        <div className={styles.tierList}>
          {TIER_ORDER.map((name) => (
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
        {TIER_ORDER.map((name) => (
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
                style={{ backgroundImage: `url(${spotifyImage(coverFor(r.title) ?? "", 300)})` }}
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
              {[...r.certs]
                .sort((x, y) => badgeWeight(y) - badgeWeight(x))
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
                    </span>
                  );
                })}
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

      {/* ── The dated log ─────────────────────────────────────────── */}
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

      <div className={styles.spacer} />

      {/* Action bar — replaces the tab bar on a deep screen */}
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
    </div>
  );
}
