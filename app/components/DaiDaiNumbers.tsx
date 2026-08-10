"use client"; // the mobile fold

import { useState } from "react";
import styles from "../dai-dai/dai-dai.module.css";

/**
 * "Dai Dai by the numbers" — the song's own figures, tiered.
 *
 * The old version poured every figure into one flat grid, so the song's
 * defining stat carried the same visual weight as a footnote. Now six hero
 * numbers lead at full volume, and the rest sit in labeled groups — the
 * streaks, the national charts, the world rankings, the video — each with a
 * one-line intro, so a scanning reader knows what a cell measures before
 * reading it.
 *
 * On a phone the hero grid shows and the groups fold behind a toggle; the
 * fold lives entirely in the mobile media query, so the full set stays in
 * the HTML for crawlers either way.
 */

interface Stat {
  v: string;
  l: string;
}

export default function DaiDaiNumbers({
  hero,
  groups,
  foldMore = "Show the full breakdown ({n} more) +",
  foldLess = "Show fewer −",
}: {
  hero: Stat[];
  groups: { label: string; intro: string; items: Stat[] }[];
  /** Fold copy, so the Spanish edition can speak Spanish. Templates rather
   *  than functions: this is a client component, and a function cannot cross
   *  the server boundary to reach it. "{n}" is the hidden-cell count. */
  foldMore?: string;
  foldLess?: string;
}) {
  const [open, setOpen] = useState(false);
  const grouped = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <div className={styles.numHeroGrid}>
        {hero.map((n) => (
          <div key={n.l} className={`${styles.numCard} ${styles.numCardLead}`}>
            <span className={`${styles.numValue} ${styles.numValueLead}`}>{n.v}</span>
            <span className={styles.numLabel}>{n.l}</span>
          </div>
        ))}
      </div>

      <div className={open ? `${styles.numGroups} ${styles.numGroupsOpen}` : styles.numGroups}>
        {groups.map((g) => (
          <section key={g.label} className={styles.numGroup}>
            <h3 className={styles.numGroupHead}>{g.label}</h3>
            <p className={styles.numGroupIntro}>{g.intro}</p>
            <div className={styles.numGrid}>
              {g.items.map((n) => (
                <div key={n.l} className={styles.numCard}>
                  <span className={styles.numValue}>{n.v}</span>
                  <span className={styles.numLabel}>{n.l}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <button
        type="button"
        className={styles.numFold}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? foldLess : foldMore.replace("{n}", String(grouped))}
      </button>
    </>
  );
}
