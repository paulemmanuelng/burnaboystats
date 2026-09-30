"use client";

import Link from "next/link";
import type { Ref } from "react";
import type { TourMapCountry } from "../lib/tourMapData";
import styles from "./tourMapPanel.module.css";

/**
 * The phone's country panel (TM Card.dc.html, phone layout; design response
 * item 81: the phone gets its own component, not the desktop card widened).
 * It sits in the page flow directly under the map strip, full width, never
 * over the heading or the map. Close is a 44px button; the browser's back
 * button clears it too once ?country= is in the address.
 *
 * Same content as the desktop card, in the same order, at phone sizes: the
 * name at 24px, 44px link rows, no preview state (a tap selects).
 */
export default function TourMapPanel({
  country: c,
  itinerariesFrom,
  onClose,
  panelRef,
}: {
  country: TourMapCountry;
  itinerariesFrom: number;
  onClose: () => void;
  panelRef?: Ref<HTMLDivElement>;
}) {
  return (
    <div ref={panelRef} className={styles.panel} role="region" aria-label={c.name}>
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
        <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
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

      {c.links.length > 0 && (
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
        <span className={styles.label}>{c.documented ? "From the map" : "Known from"}</span>
        {c.events.map((e) => (
          <span key={e} className={styles.event}>
            {e}
          </span>
        ))}
      </div>
      <div className={styles.caveat}>Documented shows only. Tour itineraries on this site start in {itinerariesFrom}.</div>
    </div>
  );
}
