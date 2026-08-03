"use client"; // one section open at a time

import { useState } from "react";
import styles from "./mobileSections.module.css";

/**
 * The accordion the design calls `sectioned()`.
 *
 * From designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html — screens 13
 * (Festivals) and 15 (Firsts) share it exactly, which is why it lives here
 * rather than in either screen.
 *
 * Its behaviour is the design's, not a general accordion: the **first section
 * is open on arrival**, opening another closes the one before it, and tapping
 * the open one closes it and leaves them all shut. That is what makes a long
 * list scannable on a phone without a filter rail.
 *
 * The two screens draw their rows differently, so `variant` carries that:
 * screen 13 sets the year in mono over a location line, screen 15 sets it in
 * Anton at 18px with the milestone alone. Same shell, different row.
 */

export interface SectionRow {
  /** Left column — a year, in gold. */
  lead: string;
  title: string;
  meta?: string;
}

export interface Section {
  name: string;
  rows: SectionRow[];
}

export default function MobileSections({
  sections,
  variant = "meta",
}: {
  sections: Section[];
  /** "meta" — screen 13's mono year + location. "plain" — screen 15's Anton year. */
  variant?: "meta" | "plain";
}) {
  // `undefined` means untouched, so the first section shows; -1 means the user
  // closed one and expects them all shut.
  const [open, setOpen] = useState<number | undefined>(undefined);

  return (
    <>
      {sections.map((s, i) => {
        const isOpen = open === undefined ? i === 0 : open === i;
        const panelId = `sec-${s.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
        return (
          <div key={s.name} className={styles.section}>
            <button
              type="button"
              className={`${styles.head} ${isOpen ? styles.headOpen : ""}`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className={`${styles.name} ${variant === "plain" ? styles.nameSm : ""}`}>
                {s.name}
              </span>
              <span className={styles.count}>({s.rows.length})</span>
              <span className={styles.caret} aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div id={panelId}>
                {s.rows.map((r, ri) => (
                  <div key={`${ri}-${r.title}`} className={styles.row}>
                    <span className={variant === "plain" ? styles.leadDisplay : styles.lead}>
                      {r.lead}
                    </span>
                    <div className={styles.main}>
                      <div className={`${styles.title} ${variant === "plain" ? styles.plainTitle : ""}`}>
                        {r.title}
                      </div>
                      {r.meta && <div className={styles.meta}>{r.meta}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
