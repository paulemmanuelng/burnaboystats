"use client"; // interactive: open a tour to see its dates/venues/capacities

import { useEffect, useRef, useState } from "react";
import styles from "../records/tours/tours.module.css";
import type { Tour } from "../data/tours";

export default function ToursExplorer({ tours }: { tours: Tour[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const tour = open !== null ? tours[open] : null;
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  // While a tour is open: trap focus inside the modal, close on Escape, lock
  // page scroll, and restore focus to the trigger when it closes.
  useEffect(() => {
    if (!tour) return;
    lastFocused.current = document.activeElement as HTMLElement | null;
    const node = modalRef.current;
    const getFocusable = (): HTMLElement[] =>
      node
        ? Array.from(
            node.querySelectorAll<HTMLElement>(
              'a[href], button, input, textarea, [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];

    const focusables = getFocusable();
    if (focusables[0]) focusables[0].focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        return;
      }
      if (e.key === "Tab") {
        const els = getFocusable();
        if (els.length === 0) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocused.current?.focus();
    };
  }, [tour]);

  return (
    <>
      <div className={styles.tourList}>
        {tours.map((t, i) => {
          const clickable = !!(t.dates && t.dates.length);
          const body = (
            <>
              <div className={styles.tourHead}>
                <div>
                  <span className={styles.tourName}>{t.name}</span>
                  <span className={styles.tourYears}>
                    {t.years}{clickable ? ` · ${t.dates!.length} dates` : ""}
                  </span>
                </div>
                {t.gross && (
                  <div className={styles.tourFigures}>
                    <span className={styles.tourGross}>{t.gross}</span>
                    <span className={styles.tourSub}>
                      {[t.tickets ? `${t.tickets} tickets` : null, t.shows ? `${t.shows} shows` : null]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  </div>
                )}
              </div>
              {t.record && <span className={styles.recordTag}>Highest-grossing African tour ever</span>}
              <p className={styles.tourNote}>{t.note}</p>
              {clickable && <span className={styles.tourCta} aria-hidden="true">View dates →</span>}
            </>
          );

          return clickable ? (
            <button
              key={t.name}
              className={`${styles.tourCard} ${styles.tourCardBtn} ${t.record ? styles.tourRecord : ""}`}
              onClick={() => setOpen(i)}
              aria-label={`View tour dates for ${t.name}`}
            >
              {body}
            </button>
          ) : (
            <div key={t.name} className={`${styles.tourCard} ${t.record ? styles.tourRecord : ""}`}>
              {body}
            </div>
          );
        })}
      </div>

      {tour && tour.dates && (
        <div className="modalOverlay" onClick={() => setOpen(null)} role="presentation">
          <div
            className="modal"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${tour.name} tour dates`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modalClose" onClick={() => setOpen(null)} aria-label="Close dialog">×</button>
            <p className="eyebrow eyebrowTight">
              {tour.years}{tour.gross ? ` · ${tour.gross}` : ""}
            </p>
            <h3 className="modalTitle">{tour.name}</h3>
            {tour.partial && (
              <p className={styles.modalNote}>Confirmed dates shown — not the full itinerary.</p>
            )}
            <div className={styles.showList}>
              <div className={`${styles.showRow} ${styles.showHead}`}>
                <span>Date</span>
                <span>Venue · City</span>
                <span className={styles.capCol}>Capacity</span>
              </div>
              {tour.dates.map((s, j) => (
                <div className={styles.showRow} key={`${s.date}-${j}`}>
                  <span className={styles.showDate}>{s.date}</span>
                  <span className={styles.showVenue}>
                    {s.venue}
                    <span className={styles.showCity}>{s.city}, {s.country}</span>
                  </span>
                  <span className={styles.capCol}>{s.cap ? s.cap.toLocaleString() : "—"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
