"use client";

import Link from "next/link";
import type { Ref } from "react";
import type { TourMapCountry } from "../lib/tourMapData";
import styles from "./tourMapCard.module.css";

/**
 * The desktop country card (design: TM Card.dc.html, desktop layout; the
 * phone has its own panel, TourMapPanel). It lives INSIDE the map frame,
 * top-right, and never floats over the masthead, the h1 or the selection.
 *
 * Top to bottom: flag and name, the region (muted); "Documented" and the
 * documented line; the biggest reported night or stand; the link rows (only
 * when pinned); the map's own event lines, "From the map" (or "Known from"
 * for the nine countries with no row); the caveat. No "…and more": the
 * documented line is the count and the link rows are the way on (items 3,
 * 21). The link rows sit ABOVE the event lines, so what scrolls out of a
 * tall card is the event lines and the caveat, never the way on (item 4).
 *
 * A preview (hover or keyboard focus) has no links and says "Click to pin";
 * a pinned card has the links and a close button.
 */
export default function TourMapCard({
  country: c,
  pinned,
  itinerariesFrom,
  onClose,
  maxHeight,
  cardRef,
}: {
  country: TourMapCountry;
  pinned: boolean;
  itinerariesFrom: number;
  onClose: () => void;
  maxHeight?: number;
  cardRef?: Ref<HTMLDivElement>;
}) {
  const events = c.documented ? "From the map" : "Known from";
  return (
    <div
      ref={cardRef}
      className={styles.card}
      style={maxHeight ? { maxHeight } : undefined}
      aria-label={`${c.name}${pinned ? "" : ", preview"}`}
      role="region"
    >
      <div className={styles.head}>
        <div className={styles.titles}>
          <div className={styles.nameLine}>
            {c.flag && (
              <span className={styles.flag} aria-hidden="true">
                {c.flag}
              </span>
            )}
            <span className={styles.name}>{c.name}</span>
          </div>
          <span className={styles.region}>{c.region}</span>
        </div>
        {pinned && (
          <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        )}
      </div>

      {(c.documented || c.big) && (
        <div className={styles.body}>
          {c.documented && (
            <div className={styles.field}>
              <span className={styles.label}>Documented</span>
              <span className={styles.value}>{c.documented}</span>
            </div>
          )}
          {c.big && (
            <div className={styles.field}>
              <span className={styles.label}>{c.big.label}</span>
              <span className={styles.value}>{c.big.line}</span>
            </div>
          )}
        </div>
      )}

      {pinned && c.links.length > 0 && (
        <div className={styles.links}>
          {c.links.map((l) => (
            <Link key={l.label} href={l.href} className={styles.linkRow}>
              <span className={styles.linkText}>
                <span className={styles.linkLabel}>
                  {l.label}
                  {l.peak !== undefined && <> No. {l.peak}</>}
                </span>
                {l.sub && <span className={styles.linkSub}>{l.sub}</span>}
              </span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      )}

      <div className={styles.events}>
        <span className={styles.label}>{events}</span>
        {c.events.map((e) => (
          <span key={e} className={styles.event}>
            {e}
          </span>
        ))}
      </div>

      {!pinned && <div className={styles.hint}>Click to pin · links inside</div>}
      <div className={styles.caveat}>Documented shows only. Tour itineraries on this site start in {itinerariesFrom}.</div>
    </div>
  );
}
