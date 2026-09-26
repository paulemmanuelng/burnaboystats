"use client"; // the phone fold

import { useState } from "react";
import styles from "./DaiDaiConquest.module.css";

/**
 * "The world takeover" — every country “Dai Dai” charted in, one cell each.
 *
 * designs/desktop/Dai Dai Redesign.dc.html (approved by Paul, 26 Sep 2026):
 *   - desktop: eleven columns, so 66 countries make six full rows. Every cell
 *     shows its flag, the country's name and its peak — the names used to live
 *     only in hover tooltips, which a touch screen never shows;
 *   - the No. 1 cells carry the No. 1 peak band (--peak-band-1) as a wash and an
 *     edge. It is a data colour, not the brand gold, which marks only what is
 *     live or an action;
 *   - phone: six columns of flag, code and peak for the first thirty cells,
 *     then "Show all 66, with names" — the fold the owner approved. Folded
 *     cells stay in the HTML; the fold is a class, not an unrendered list.
 *
 * The old summary bar ("66 countries · 26 at No. 1") is gone: the section's
 * sentence says it once, just above.
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
  /** The country's name in the edition's language. */
  name: string;
  peak: number;
}

/** How many cells a phone shows before the fold (the phone artboard's 30). */
const PHONE_FOLD = 30;

/** No. 1s first, so the No. 1 cells group together. Stable within a tier.
 *  The tie-break names its locale: this runs in the browser too, and a Czech
 *  or Slovak reader's default collation files CH after H (and after GR), so
 *  the client's grid came out in a different order from the server's —
 *  React #418 on /dai-dai. */
function order(countries: ConquestCountry[]): ConquestCountry[] {
  return [...countries].sort((a, b) => a.peak - b.peak || a.code.localeCompare(b.code, "en"));
}

export default function DaiDaiConquest({
  countries,
  labels,
}: {
  countries: ConquestCountry[];
  /** Copy for the fold and the labels, so the grid can be shown in Spanish.
   *  Templates rather than functions — this is a client component, and a
   *  function cannot be passed across the server boundary. Placeholders:
   *  {total}, {ones}, {name}, {peak}. */
  labels?: {
    aria: string;
    /** A cell for a screen reader: "{name}, peak No. {peak}". */
    cell: string;
    /** The fold's two states. */
    showAll: string;
    showFewer: string;
  };
}) {
  const t = {
    aria: "“Dai Dai” charted in {total} countries and reached No. 1 in {ones} of them.",
    cell: "{name}, peak No. {peak}",
    showAll: "Show all {total}, with names",
    showFewer: "Show fewer",
    ...labels,
  };
  const seq = order(countries);
  const total = seq.length;
  const ones = seq.filter((c) => c.peak === 1).length;
  const fill = (s: string, c?: ConquestCountry) =>
    s
      .replace("{total}", String(total))
      .replace("{ones}", String(ones))
      .replace("{name}", c?.name ?? "")
      .replace("{peak}", String(c?.peak ?? ""));

  // Folded is the phone's default. Desktop and tablet ignore it entirely —
  // every rule that reads it sits in the ≤900px block of the stylesheet.
  const [open, setOpen] = useState(false);
  const folds = total > PHONE_FOLD;

  return (
    <div className={styles.wrap}>
      <ol className={`${styles.grid} ${open ? styles.gridOpen : ""}`} aria-label={fill(t.aria)}>
        {seq.map((c, i) => (
          <li
            key={c.code}
            data-code={c.code}
            className={`${styles.cell} ${c.peak === 1 ? styles.cellOne : ""} ${i >= PHONE_FOLD ? styles.cellFolded : ""}`}
          >
            <span className={styles.top} aria-hidden="true">
              <span className={styles.flag}>{c.flag}</span>
              <span className={styles.code}>{c.code}</span>
              <span className={styles.peak}>#{c.peak}</span>
            </span>
            <span className={styles.name} aria-hidden="true">
              {c.name}
            </span>
            <span className="visuallyHidden">{fill(t.cell, c)}</span>
          </li>
        ))}
      </ol>

      {folds ? (
        <button type="button" className={styles.fold} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span>{open ? t.showFewer : fill(t.showAll)}</span>
          <span aria-hidden="true">{open ? "↑" : "↓"}</span>
        </button>
      ) : null}
    </div>
  );
}
