"use client"; // the mobile fold

import { useState } from "react";
import styles from "../dai-dai/dai-dai.module.css";

/**
 * "Dai Dai by the numbers" — the song's own figures.
 *
 * Twenty-six boxes is a long scroll on a phone, so mobile shows the first six
 * and folds the rest behind a toggle. Desktop renders all of them and never
 * sees the button: the fold lives entirely in the mobile media query, so the
 * full set stays in the HTML for crawlers either way.
 */

const MOBILE_SHOWN = 6;

export default function DaiDaiNumbers({ items }: { items: { v: string; l: string }[] }) {
  const [open, setOpen] = useState(false);
  const hidden = items.length - MOBILE_SHOWN;

  return (
    <>
      <div className={`${styles.numGrid} ${open ? styles.numGridOpen : ""}`}>
        {items.map((n, i) => (
          <div key={n.l} className={`${styles.numCard} ${i === 0 ? styles.numCardLead : ""}`}>
            <span className={`${styles.numValue} ${i === 0 ? styles.numValueLead : ""}`}>
              {n.v}
            </span>
            <span className={styles.numLabel}>{n.l}</span>
          </div>
        ))}
      </div>
      {hidden > 0 && (
        <button
          type="button"
          className={styles.numFold}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Show fewer −" : `Show all ${items.length} +`}
        </button>
      )}
    </>
  );
}
