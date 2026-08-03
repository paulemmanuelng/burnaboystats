"use client"; // owns dialog state + clipboard

import { useEffect, useRef, useState } from "react";
import styles from "./statCardButton.module.css";
import { track } from "../lib/analytics";
import { useFocusTrap } from "../lib/useFocusTrap";
import { BURNA_PORTRAIT } from "../lib/artistImages";

/**
 * The design's "Make a stat card" control: a quiet icon button (or a block
 * button in the closing panel) that opens a 1080×1080 card preview and copies
 * the stat, its source and the link.
 *
 * Each button is its own island — there is no shared dialog state to lift, and
 * this keeps the surrounding sections as server components.
 */

const SITE = "https://burnaboystats.com";

export default function StatCardButton({
  value,
  label,
  source,
  href = "/",
  variant = "icon",
  children,
}: {
  value: string;
  label: string;
  source: string;
  href?: string;
  variant?: "icon" | "block";
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Whichever of the two trigger variants opened the dialog.
  const triggerRef = useRef<HTMLButtonElement>(null);

  // The keyboard side of aria-modal: Tab stays inside the dialog.
  useFocusTrap(dialogRef, open);

  // Escape closes, and the page behind must not scroll while it is open.
  // Focus moves to Close on open and back to the trigger on close — before
  // this, focus stayed on the trigger BEHIND the open dialog, so the next Tab
  // landed in the page underneath it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    // Captured now: the trigger this dialog opened FROM, not whatever the ref
    // holds by the time the cleanup runs.
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      trigger?.focus();
    };
  }, [open]);

  const cardDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  async function copy() {
    const text = `${value} — ${label}\n${source}\n${SITE}${href}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      track("stat_card_copy", { label });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the preview is still readable */
    }
  }

  return (
    <>
      {variant === "icon" ? (
        <button
          ref={triggerRef}
          type="button"
          className={`btn btnIcon ${styles.iconBtn}`}
          title="Make a stat card"
          aria-label={`Make a stat card for ${label}`}
          onClick={() => setOpen(true)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
            <path d="M12 3v12" />
            <path d="m7 8 5-5 5 5" />
          </svg>
        </button>
      ) : (
        <button ref={triggerRef} type="button" className={`btn btnBlock ${styles.blockBtn}`} onClick={() => setOpen(true)}>
          {children}
        </button>
      )}

      {open && (
        <div
          className={styles.backdrop}
          role="dialog"
          aria-modal="true"
          aria-label="Stat card"
          onClick={() => setOpen(false)}
        >
          <div ref={dialogRef} className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <div className={styles.head}>
              <span className={styles.headLabel}>Stat card · 1080 × 1080</span>
              <button ref={closeRef} type="button" className="btn btnGhost" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className={styles.body}>
              <div className={styles.card}>
                {/* The portrait, dissolved into the card's right side — the
                    same treatment as the downloadable cards, but in browser
                    CSS: a real mask does the left fade, and the scrim melts
                    its foot into the gold where the number sits. */}
                {/* eslint-disable-next-line @next/next/no-img-element -- decorative, CDN-sized */}
                <img className={styles.cardPhoto} src={BURNA_PORTRAIT} alt="" loading="lazy" />
                <div className={styles.cardPhotoScrim} aria-hidden="true" />
                <div className={styles.cardBrand}>Burnaboystats · {cardDate}</div>
                <div className={styles.cardFoot}>
                  <div className={styles.cardValue}>{value}</div>
                  <div className={styles.cardLabel}>{label}</div>
                  <div className={styles.cardRule} />
                  <div className={styles.cardSource}>{source}</div>
                </div>
              </div>
              <div className={styles.actions}>
                <button type="button" className="btn btnPrimary" onClick={copy}>
                  {copied ? "Copied" : "Copy stat"}
                </button>
                <span className={styles.actionsNote}>
                  Copies the stat, the source and the link
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
