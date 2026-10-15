"use client"; // interactive: open a tour to see its dates/venues/capacities

import { useEffect, useRef, useState } from "react";
import Link from "./SiteLink";
import styles from "../records/tours/tours.module.css";
import type { Tour } from "../data/tours";
import { tourMeta, tourDateNote, CAPACITIES_SENTENCE, NO_TOUR_TOTAL, RECORD_PILL } from "../lib/tourMeta";
import { track } from "../lib/analytics";
import { holdInPlace } from "../lib/holdInPlace";
import { dropDeepLink } from "../lib/deepLink";
import { DATE_PARAM, TOUR_PARAM, showDateIso, tourSlug } from "../lib/tourDeepLink";
import { useTourDeepLink } from "../lib/useTourDeepLink";
import { BOX_OFFICE_NOTE, NO_NIGHT_REPORT, nightsOf, type TourBoxOffice, type TourNight } from "../lib/tourNights";
import { RUNS_HREF, nightHref } from "../lib/showsDeepLink";
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
 *
 * A tour with nights on the Highest-grossing shows board (J3-11, design review
 * 8 Oct 2026) gains Tickets, Gross and Board from it, and capacity moves to a
 * quiet last column: a single night links to its own row ("No. 13 ↗"), a run
 * prints its figures once across its nights, bracketed by a 2px --rule line,
 * and links to the runs view ("Run · 2 nights ↗", never a rank: fix 60), and a
 * night with no report prints a dash, never zero (fix 59). At 901–1239 City
 * and Country become one column and capacity drops (fix 73). A tour with no
 * board night keeps the five columns at every width. The figures arrive as a
 * prop (`boxOffice`, built on the server by lib/tourBoxOffice): this client
 * file never reads the board's rows.
 */

/** The design opens the record-holding tour by default. */
const defaultOpen = (tours: Tour[]) => tours.find((t) => t.record)?.name ?? null;

export default function ToursExplorer({ tours, boxOffice }: { tours: Tour[]; boxOffice?: TourBoxOffice }) {
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

            {isOpen && nightsOf(boxOffice, t.name) && (
              <div id={panelId} className={styles.tourPanel}>
                <BoardTable tour={t} nights={nightsOf(boxOffice, t.name)!} />
                <BoardTableNote note={tourDateNote(t)} />
              </div>
            )}
            {isOpen && !nightsOf(boxOffice, t.name) && (
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

/**
 * A tour's dates with the board's figures (J3-11). One <tr> per night, so a
 * night's deep link (#tour=&date=, data-show) lands on its own row; a run's
 * three figure cells span its nights. City and Country print twice, once as
 * their own columns and once merged ("Toronto, Canada"); the stylesheet shows
 * the merged cell at 901–1239 only, where capacity drops too.
 */
/**
 * The note under a box-office table: the tour's own date note, then the
 * board's. Its capacities sentence is a span of its own, so it hides with the
 * Capacity column at 901–1239 (fix 73), where it described a column the
 * table no longer shows (review, 14 Oct 2026).
 */
function BoardTableNote({ note }: { note: string }) {
  const lead = note.endsWith(CAPACITIES_SENTENCE) ? note.slice(0, -CAPACITIES_SENTENCE.length).trimEnd() : null;
  return (
    <div className={styles.dateNote}>
      {lead === null ? (
        note
      ) : (
        <>
          {lead} <span className={styles.capNote}>{CAPACITIES_SENTENCE}</span>
        </>
      )}{" "}
      {BOX_OFFICE_NOTE}
    </div>
  );
}

function BoardTable({ tour, nights }: { tour: Tour; nights: Record<string, TourNight> }) {
  return (
    <table className={`tableBase ${styles.nightTable}`}>
      <thead>
        <tr>
          <th className={styles.colDate}>Date</th>
          <th>Venue</th>
          <th className={styles.colCity}>City</th>
          <th className={styles.colCountry}>Country</th>
          <th className={styles.colPlace}>City</th>
          <th className={styles.colNightTickets}>Tickets</th>
          <th className={styles.colNightGross}>Gross</th>
          <th className={styles.colBoard}>Board</th>
          <th className={styles.colCap}>Capacity</th>
        </tr>
      </thead>
      <tbody>
        {tour.dates?.map((d) => {
          const iso = showDateIso(d.date);
          const n = iso ? nights[iso] : undefined;
          return (
            <tr key={`${d.date}-${d.venue}`} data-show={iso ?? undefined}>
              <td className={styles.dDate}>{d.date}</td>
              <td className={styles.dVenue}>{d.venue}</td>
              <td className={styles.dCity}>{d.city}</td>
              <td className={styles.dCountry}>{d.country}</td>
              <td className={styles.dPlace}>
                {d.city}, {d.country}
              </td>
              {n?.kind === "run" ? (
                // The figures once, on the run's first night, across all of them.
                n.dates[0] === iso && (
                  <>
                    <td rowSpan={n.dates.length} className={`${styles.dNum} ${styles.runSpan}`}>
                      {n.tickets}
                    </td>
                    <td rowSpan={n.dates.length} className={styles.dGross}>
                      {n.grossFull}
                    </td>
                    <td rowSpan={n.dates.length} className={styles.dBoard}>
                      <Link href={RUNS_HREF} className={styles.boardLink}>
                        Run · {n.nights} nights ↗
                      </Link>
                    </td>
                  </>
                )
              ) : n ? (
                <>
                  <td className={styles.dNum}>{n.tickets ?? <NotReported what="No headcount published" />}</td>
                  <td className={styles.dGross}>{n.grossFull}</td>
                  <td className={styles.dBoard}>
                    <Link href={nightHref(n.rank, "k")} className={styles.boardLink}>
                      No. {n.rank} ↗
                    </Link>
                  </td>
                </>
              ) : (
                <>
                  <td className={styles.dNum}>
                    <NotReported what={NO_NIGHT_REPORT} />
                  </td>
                  <td className={styles.dGross}>
                    <NotReported what={NO_NIGHT_REPORT} />
                  </td>
                  <td className={styles.dBoard} />
                </>
              )}
              <td className={styles.dCap}>
                {d.cap ? d.cap.toLocaleString("en-US") : <NotReported what="Capacity not stated" />}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
