"use client"; // interactive: open a tour to see its dates/venues/capacities

import { useEffect, useRef, useState } from "react";
import styles from "../records/tours/tours.module.css";
import type { Tour } from "../data/tours";
import { tourMeta, tourDateNote, NO_TOUR_TOTAL, RECORD_PILL } from "../lib/tourMeta";
import { track } from "../lib/analytics";
import { holdInPlace } from "../lib/holdInPlace";
import { dropDeepLink } from "../lib/deepLink";
import { DATE_PARAM, TOUR_PARAM, showDateIso, tourSlug } from "../lib/tourDeepLink";
import { useTourDeepLink } from "../lib/useTourDeepLink";
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
  const rootRef = useRef<HTMLDivElement>(null);
  // #tour=<slug>&date=<day> — On This Day's link for a night — opens that
  // tour over the default and brings the night's row into view (V-otd-02).
  useTourDeepLink(tours, setOpen, rootRef);

  // Track which tours people open into.
  useEffect(() => {
    if (open) track("tour_open", { tour: open });
  }, [open]);

  return (
    <div ref={rootRef} className={styles.accordion}>
      {tours.map((t) => {
        const isOpen = open === t.name;
        const panelId = `tour-${t.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
        return (
          <div key={t.name} className={styles.tourItem}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              // One tour open at a time, so opening a row BELOW the open one
              // shuts the panel above it: the row rose 1,158px, off the top of
              // the screen (V-tourscars-01, 5 Oct 2026). holdInPlace keeps the
              // clicked row where the pointer was and opens its dates under it.
              // Picking a tour takes the link's out of the address bar, so a
              // reload does not put it back.
              onClick={(e) => {
                holdInPlace(e.currentTarget, () => setOpen(isOpen ? null : t.name));
                dropDeepLink(TOUR_PARAM, DATE_PARAM);
              }}
              data-tour={tourSlug(t.name)}
              className={`${styles.tourRow} ${isOpen ? styles.tourRowOpen : ""}`}
            >
              <span className={styles.caret} aria-hidden="true">
                {isOpen ? "▴" : "▾"}
              </span>
              <span className={styles.tourBody}>
                <span className={styles.tourTitleRow}>
                  <span className={styles.tourHeading}>{t.name}</span>
                  <span className={styles.tourRun}>{t.years}</span>
                  {/* Green, not gold: this marks an outside record, and gold on
                      this site means one of his own chart or cert numbers. */}
                  {t.record && <span className={styles.recordPill}>{RECORD_PILL}</span>}
                </span>
                <span className={styles.tourBlurb}>{t.note}</span>
              </span>
              <span className={styles.tourFigs}>
                <span className={`${styles.grossFig} ${t.gross ? "" : styles.grossNone}`}>
                  {/* A missing TOUR TOTAL, not a missing gross: No Sign of
                      Weakness and Space Drift have reported nights on the
                      board below (debug pass 5 Oct 2026). */}
                  {t.gross ?? <NotReported what={NO_TOUR_TOTAL} />}
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
                      <tr key={`${d.date}-${d.venue}`} data-show={showDateIso(d.date) ?? undefined}>
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
