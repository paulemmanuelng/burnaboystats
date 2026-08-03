"use client"; // the mobile fold

import { useState } from "react";
import styles from "./DaiDaiConquest.module.css";

/**
 * "The world takeover" — every country “Dai Dai” charted in.
 *
 * From designs/desktop/Dai Dai.dc.html and mobile screen 25: a grid of
 * flag / code / peak cells, ten columns on desktop and five on a phone, with
 * the No. 1 countries gold and the rest a warm neutral. Ordered by peak, so the
 * gold strongholds read as a block.
 *
 * This replaced an SVG world map, and the reason is worth keeping: a map can
 * only light a country it holds a shape for, and three of the No. 1 countries
 * (Singapore among them) have none — so the map's own counter read 21 while the
 * prose beside it said 24. Every charted country has a flag, so none are
 * silently dropped.
 */

export interface ConquestCountry {
  code: string;
  flag: string;
  name: string;
  peak: number;
}

/** No. 1s first, so the gold cells group together. Stable within a tier. */
function order(countries: ConquestCountry[]): ConquestCountry[] {
  return [...countries].sort((a, b) => a.peak - b.peak || a.code.localeCompare(b.code));
}

export default function DaiDaiConquest({ countries }: { countries: ConquestCountry[] }) {
  const seq = order(countries);
  const total = seq.length;
  const ones = seq.filter((c) => c.peak === 1).length;

  // On a phone the grid is 57 cells deep, so it starts folded down to its own
  // numbers. Desktop ignores this entirely — see the media query in the CSS.
  const [open, setOpen] = useState(false);

  return (
    <figure className={styles.wrap}>
      {/* Mobile only: the folded state is the numbers alone. */}
      <button
        type="button"
        className={styles.fold}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.foldNums}>
          <span className={styles.foldNum}>{total}</span> countries ·{" "}
          <span className={styles.foldNum}>{ones}</span> at No. 1
        </span>
        <span className={styles.foldAction} aria-hidden="true">
          {open ? "Hide −" : "Show all +"}
        </span>
      </button>

      <div
        className={`${styles.grid} ${open ? styles.gridOpen : ""}`}
        role="img"
        aria-label={`“Dai Dai” charted in ${total} countries and reached No. 1 in ${ones} of them.`}
      >
        {seq.map((c) => (
          <div
            key={c.code}
            title={`${c.name} — peak #${c.peak}`}
            className={`${styles.cell} ${c.peak === 1 ? styles.cellOne : styles.cellOn}`}
          >
            <span className={styles.flag}>{c.flag}</span>
            <span className={styles.code}>{c.code}</span>
            <span className={styles.peak}>#{c.peak}</span>
          </div>
        ))}
      </div>

      <figcaption className={`${styles.legend} ${open ? styles.legendOpen : ""}`}>
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.swatchOne}`} aria-hidden="true" />
          No. 1
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.swatchOn}`} aria-hidden="true" />
          Charted
        </span>
        <span className={styles.status}>
          {total} countries · {ones} at No. 1
        </span>
      </figcaption>
    </figure>
  );
}
