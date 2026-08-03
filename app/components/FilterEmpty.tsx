"use client"; // the two buttons act on the host component's filter state

import AppState from "./AppState";
import styles from "./filterEmpty.module.css";

/**
 * The one empty state every filtered view shares.
 *
 * From designs/desktop/App States.dc.html, panel D. Two things make it better
 * than a bare "no results": the host's filter rail stays on screen, so the user
 * can see what they asked for, and the sentence **names the combination** —
 * an empty result on this site is usually a true fact about the record, and
 * saying so is more useful than an apology.
 *
 * `narrowest` is the filter the second button drops. Pass the more specific of
 * the active filters — a country before a tier, a year before a category — so
 * the user keeps the broad one they started from.
 */
export default function FilterEmpty({
  body,
  onClear,
  narrowest,
}: {
  /** Names the combination that matched nothing, in the host's own nouns. */
  body: string;
  onClear: () => void;
  narrowest?: { label: string; drop: () => void };
}) {
  return (
    <AppState
      compact
      title="No entries match"
      body={body}
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      }
      actions={
        <>
          <button type="button" className={`${styles.btn} ${styles.clear}`} onClick={onClear}>
            Clear filters
          </button>
          {narrowest && (
            <button
              type="button"
              className={`${styles.btn} ${styles.drop}`}
              onClick={narrowest.drop}
            >
              Drop “{narrowest.label}”
            </button>
          )}
        </>
      }
    />
  );
}
