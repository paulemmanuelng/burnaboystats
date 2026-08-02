"use client"; // the tier rail filters the list

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileCerts.module.css";
import { badgeWeight } from "../lib/certs";
import { tierOf, type Country, type Release } from "../data/certifications";

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

export default function MobileCerts({
  releases,
  countries,
  total,
  countryCount,
}: {
  releases: Release[];
  countries: Record<string, Country>;
  total: number;
  countryCount: number;
}) {
  const [tier, setTier] = useState<Tier | null>(null);

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

  const rows = releases
    .filter((r) => !tier || r.certs.some((c) => c.level === tier))
    .slice()
    .sort((a, b) => b.certs.length - a.certs.length)
    .slice(0, ROWS_SHOWN);

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Certifications</span>
        <span className={styles.backCount}>{total}</span>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Certified worldwide</div>
        <div className={styles.totalRow}>
          <span className={styles.total}>{total}</span>
          <span className={styles.totalUnit}>
            awards
            <br />
            {countryCount} countries
          </span>
        </div>
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
      <div className={styles.rail}>
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
      </div>

      <div className={styles.listLabel}>Most-certified releases</div>

      <div className={styles.list}>
        {rows.map((r, i) => (
          <Link key={r.title} href={`/certifications?release=${encodeURIComponent(r.title)}`} className={styles.row}>
            <div className={styles.rowTop}>
              <span className={styles.rank}>{String(i + 1).padStart(2, "0")}</span>
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>{r.title}</div>
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
                  const ink = INK[tierOf(c.level) as Tier] ?? INK.Silver;
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
          </Link>
        ))}
      </div>

      <Link href="/certifications#certs" className={styles.allBtn}>
        All {releases.length} releases<span aria-hidden="true">↗</span>
      </Link>

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
