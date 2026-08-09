"use client"; // owns dialog state + the download

import { useEffect, useRef, useState } from "react";
import styles from "./statCardButton.module.css";
import { track } from "../lib/analytics";
import { useFocusTrap } from "../lib/useFocusTrap";
import { saveCard } from "../lib/saveCard";
import type { CardRatio } from "../lib/cardSizes";

/**
 * The per-row "Make a stat card" control — the share icon beside a ledger row
 * or a career first.
 *
 * The dialog previews the REAL card from the /stat-card route — the same
 * renderer, the same portrait, the same PNG the download saves — so what you
 * see is exactly the file you get. It used to draw its own gold CSS card,
 * which had drifted from the downloadable design and, worse, could not be
 * downloaded at all: the only actions were Copy and Close.
 *
 * `cardId` names a card the server has registered (a canned card, or the
 * cert-/first- families in statCards.ts). The route only renders known ids,
 * so no one can mint an official-looking card with arbitrary text.
 */

const SITE = "https://burnaboystats.com";

export default function StatCardButton({
  cardId,
  value,
  label,
  source,
  href = "/",
  variant = "icon",
  className,
  children,
}: {
  /** A card id the server resolves — see findCard in lib/statCards.ts. */
  cardId: string;
  value: string;
  label: string;
  source: string;
  href?: string;
  variant?: "icon" | "block";
  /** Extra classes for the block trigger, so a list row can keep its styling
   *  when the whole row becomes the dialog's trigger. */
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [ratio, setRatio] = useState<CardRatio>("square");
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Whichever of the two trigger variants opened the dialog.
  const triggerRef = useRef<HTMLButtonElement>(null);

  const src = `/stat-card?stat=${encodeURIComponent(cardId)}&ratio=${ratio}${attempt ? `&r=${attempt}` : ""}`;

  // The keyboard side of aria-modal: Tab stays inside the dialog.
  useFocusTrap(dialogRef, open);

  // Escape closes, and the page behind must not scroll while it is open.
  // Focus moves to Close on open and back to the trigger on close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      trigger?.focus();
    };
  }, [open]);

  function openDialog() {
    setLoading(true);
    setFailed(false);
    setOpen(true);
  }

  function selectRatio(next: CardRatio) {
    if (next === ratio) return;
    setLoading(true);
    setFailed(false);
    setRatio(next);
  }

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

  async function download() {
    setDownloading(true);
    track("stat_card_download", { stat: cardId, ratio });
    await saveCard(src, `burna-boy-${cardId}-${ratio}.png`);
    setDownloading(false);
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
          onClick={openDialog}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
            <path d="M12 3v12" />
            <path d="m7 8 5-5 5 5" />
          </svg>
        </button>
      ) : (
        <button ref={triggerRef} type="button" className={`btn btnBlock ${styles.blockBtn} ${className ?? ""}`} onClick={openDialog}>
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
              <span className={styles.headLabel}>
                Stat card · {ratio === "story" ? "1080 × 1920" : "1080 × 1080"}
              </span>
              <div className={styles.ratios} role="group" aria-label="Card shape">
                <button
                  type="button"
                  aria-pressed={ratio === "square"}
                  className={`${styles.ratioBtn} ${ratio === "square" ? styles.ratioOn : ""}`}
                  onClick={() => selectRatio("square")}
                >
                  Square
                </button>
                <button
                  type="button"
                  aria-pressed={ratio === "story"}
                  className={`${styles.ratioBtn} ${ratio === "story" ? styles.ratioOn : ""}`}
                  onClick={() => selectRatio("story")}
                >
                  Story
                </button>
              </div>
              <button ref={closeRef} type="button" className="btn btnGhost" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className={styles.body}>
              <div className={styles.stage}>
                {/* eslint-disable-next-line @next/next/no-img-element -- dynamic image route */}
                <img
                  className={`${styles.preview} ${ratio === "story" ? styles.previewStory : ""} ${
                    loading ? styles.previewLoading : ""
                  }`}
                  src={src}
                  alt={`Stat card: ${label}`}
                  onLoad={() => {
                    setLoading(false);
                    // Warm the other shape so the toggle is instant — the
                    // route is cacheable, so this is one background request.
                    const other = ratio === "square" ? "story" : "square";
                    new window.Image().src = `/stat-card?stat=${encodeURIComponent(cardId)}&ratio=${other}`;
                  }}
                  onError={() => {
                    setLoading(false);
                    setFailed(true);
                  }}
                />
                {failed && (
                  <div className={styles.failed} role="alert">
                    <span>The card didn&apos;t render.</span>
                    <button
                      type="button"
                      className={styles.retry}
                      onClick={() => {
                        setLoading(true);
                        setFailed(false);
                        setAttempt((n) => n + 1);
                      }}
                    >
                      Try again
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.actions}>
                <button type="button" className="btn btnPrimary" onClick={download} disabled={downloading || failed}>
                  {downloading ? "Preparing…" : "↓ Download PNG"}
                </button>
                <button type="button" className="btn btnGhost" onClick={copy}>
                  {copied ? "Copied" : "Copy stat"}
                </button>
                <span className={styles.actionsNote}>
                  Downloads at full size · copy takes the stat, source and link
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
