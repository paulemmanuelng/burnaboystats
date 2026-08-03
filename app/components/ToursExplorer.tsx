"use client"; // interactive: open a tour to see its dates/venues/capacities

import { useEffect, useState } from "react";
import styles from "../records/tours/tours.module.css";
import type { Tour } from "../data/tours";
import { tourMeta, tourDateNote } from "../lib/tourMeta";
import { track } from "../lib/analytics";
import NotReported from "./NotReported";

/**
 * The tours accordion.
 *
 * An inline accordion, not a modal: the design opens each tour in place, under
 * its own row, so the page keeps its shape and a reader can scroll from a
 * tour's dates straight back into the list. The note stays visible whether the
 * row is open or shut — the note is the reason to open it.
 *
 * The table's last column is the VENUE'S CAPACITY, not tickets sold. tours.ts
 * records capacity; ticket counts live in tourRevenue.ts and exist only for
 * Boxscore-reported nights. The column header and the note under the table both
 * say so, because the two are easy to conflate and the gap is large.
 */

/** The design opens the record-holding tour by default. */
const defaultOpen = (tours: Tour[]) => tours.find((t) => t.record)?.name ?? null;

export default function ToursExplorer({ tours }: { tours: Tour[] }) {
  const [open, setOpen] = useState<string | null>(() => defaultOpen(tours));

  // Track which tours people open into.
  useEffect(() => {
    if (open) track("tour_open", { tour: open });
  }, [open]);

  return (
    <div className={styles.accordion}>
      {tours.map((t) => {
        const isOpen = open === t.name;
        const panelId = `tour-${t.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
        return (
          <div key={t.name} className={styles.tourItem}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : t.name)}
              className={`${styles.tourRow} ${isOpen ? styles.tourRowOpen : ""}`}
            >
              <span
                className={`${styles.caret} ${isOpen ? "" : styles.caretShut}`}
                aria-hidden="true"
              >
                ▼
              </span>
              <span className={styles.tourBody}>
                <span className={styles.tourTitleRow}>
                  <span className={styles.tourHeading}>{t.name}</span>
                  <span className={styles.tourRun}>{t.years}</span>
                  {/* Green, not gold: this marks an outside record, and gold on
                      this site means one of his own chart or cert numbers. */}
                  {t.record && <span className={styles.recordPill}>African record</span>}
                </span>
                <span className={styles.tourBlurb}>{t.note}</span>
              </span>
              <span className={styles.tourFigs}>
                <span className={`${styles.grossFig} ${t.gross ? "" : styles.grossNone}`}>
                  {t.gross ?? <NotReported />}
                </span>
                <span className={styles.tourMeta}>{tourMeta(t)}</span>
              </span>
            </button>

            {isOpen && (
              <div id={panelId} className={styles.tourPanel}>
                <table className="tableBase">
                  <thead>
                    <tr>
                      <th className={styles.colDate}>Date</th>
                      <th>Venue</th>
                      <th className={styles.colCity}>City</th>
                      <th className={styles.colCountry}>Country</th>
                      <th className={styles.colCap}>Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.dates?.map((d) => (
                      <tr key={`${d.date}-${d.venue}`}>
                        <td className={styles.dDate}>{d.date}</td>
                        <td className={styles.dVenue}>{d.venue}</td>
                        <td className={styles.dCity}>{d.city}</td>
                        <td className={styles.dCountry}>{d.country}</td>
                        <td className={styles.dCap}>
                          {d.cap ? d.cap.toLocaleString("en-US") : <NotReported what="Capacity not stated" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className={styles.dateNote}>{tourDateNote(t)}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
