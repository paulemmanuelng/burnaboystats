"use client"; // each tour opens its own date list

import { useId, useRef, useState } from "react";
import Link from "next/link";
import styles from "./mobileTours.module.css";
import { tourMeta, NO_TOUR_TOTAL, RECORD_PILL } from "../lib/tourMeta";
import { REVENUE_BODY, REVENUE_REPORTS } from "../lib/revenueSource";
import { upcomingShows, type Tour, type UpcomingShow } from "../data/tours";
import NotReported from "./NotReported";
import { holdInPlace } from "../lib/holdInPlace";
import { dropDeepLink } from "../lib/deepLink";
import { DATE_PARAM, TOUR_PARAM, showDateIso, tourSlug } from "../lib/tourDeepLink";
import { useTourDeepLink } from "../lib/useTourDeepLink";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import MobileProvenance from "./MobileProvenance";
import type { DataLine, P1Spec } from "../lib/provenance";
import { NOT_REPORTED_LINE, nightsOf, nightsSpan, type TourBoxOffice, type TourNight } from "../lib/tourNights";
import { RUNS_HREF, SHOWS_PATH, nightHref } from "../lib/showsDeepLink";
import {
  splitAnnounced,
  splitPlayed,
  foldAnnounced,
  ticketsShow,
  moreShowsLabel,
  SHOW_FEWER,
  yearOnly,
  ANNOUNCED_TAG,
  PLAYED_TAG,
  PLAYED_NOTE_SHORT,
} from "../lib/announcedShows";

// The lede reads as a sentence, so the count is spelled out — still derived,
// just worded. Anything past the list falls back to the numeral.
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const spell = (n: number) => (WORDS[n] ? WORDS[n][0].toUpperCase() + WORDS[n].slice(1) : String(n));

/**
 * The mobile tours screen.
 *
 * A distinct screen, not the desktop accordion narrowed: a two-up stat grid,
 * then one expandable row per tour whose dates stack rather than becoming a
 * table. Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html,
 * screen 12.
 *
 * The per-date figure is the VENUE'S CAPACITY, not tickets sold — tours.ts
 * records capacity, and only some nights have a Boxscore headcount. The column
 * says so, and the note under the list repeats it, because the two are easy to
 * conflate and the difference is large.
 *
 * Under the last tour row, "More from the road": the map, revenue and
 * festivals pages as three link rows (design response §10, item 35). Every
 * figure in their sub-lines arrives as a prop from the server page, so this
 * client component imports no extra data.
 *
 * A tour with nights on the Highest-grossing shows board (J3-11, design
 * review 8 Oct 2026) prints the board's figures instead of capacity: each
 * reported night is one whole-row link ending in → to its own row on the
 * board ("10,684 tickets · $1.22M · No. 13"), a run is one merged row to the
 * runs view ("… · 2 nights · Run", fix 60 with C-17), and a night with no
 * report reads "— not reported" and links nowhere (fix 59). A tour with no
 * board night keeps its capacity rows. The figures arrive as `boxOffice`,
 * built on the server (lib/tourBoxOffice).
 *
 * Under "More from the road", the desktop's "Record nights & live milestones"
 * (J4-9, fixes 81 and 92): every moment in the data's order, in full, no fold.
 * A record wears the ink outline "Record" tag and a first "First", as on the
 * desktop (C-27); a moment with a page is one whole-row link ending in the road
 * rows' gold →. The rows arrive as `moments`, built on the server.
 */
export default function MobileTours({
  tours,
  topGross,
  topTourName,
  countryCount,
  regionCount,
  biggestNight,
  biggestVenue,
  yearSpan,
  hisShowCount,
  revenueShowCount,
  appearanceCount,
  headlinedCount,
  today,
  data,
  p1,
  boxOffice,
  moments = [],
}: {
  tours: Tour[];
  topGross: string;
  topTourName: string;
  countryCount: number;
  regionCount: number;
  biggestNight: string;
  biggestVenue: string;
  yearSpan: string;
  /** His shows on the revenue board, and the board's length. */
  hisShowCount: number;
  revenueShowCount: number;
  /** Festivals, solo concerts and other appearances together; festivals alone. */
  appearanceCount: number;
  headlinedCount: number;
  /** London's day when the server rendered the page, ISO. The announced list
   *  is split against it here and not against the browser's clock, so the
   *  server's render is the only one (lib/announcedShows). */
  today: string;
  /** The note's data line, "Download CSV ↓ · JSON ↗ · CC BY 4.0 ↗ · cite as …",
   *  built by the server page (provenanceSpecs dataLineFor): it reads the data
   *  modules, which this client file must not. */
  data?: DataLine;
  /** The hero's P1 (J1-11), built by the server page (provenanceSpecs toursP1). */
  p1?: P1Spec;
  /** Each tour's nights on the box-office board (J3-11), built by the server
   *  page (lib/tourBoxOffice): the board's rows never reach this file. */
  boxOffice?: TourBoxOffice;
  /** The live moments, newest first, each with its page (lib/liveMomentLinks)
   *  and its tags (tourMeta momentFlags), built by the server page (J4-9). */
  moments?: { year: string; title: string; text: string; href: string | null; flags: string[] }[];
}) {
  const [open, setOpen] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  // #tour=<slug>&date=<day> — On This Day's link for a night — opens that
  // tour and brings the night's row into view; every tour starts shut here,
  // so the bare link left the night under a ▸ (V-otd-02, 5 Oct 2026).
  useTourDeepLink(tours, setOpen, rootRef);
  const { announced, played } = splitAnnounced(upcomingShows, today);
  // A played show that will never report a gross reads just "Played" (Paul,
  // "defaults", 10 Oct 2026): its own card, after the awaiting one.
  const { awaiting, noReport } = splitPlayed(played);
  const playedCards = [
    { key: "awaiting", note: PLAYED_NOTE_SHORT, shows: awaiting },
    { key: "played", note: null, shows: noReport },
  ].filter((c) => c.shows.length > 0);
  // The Announced card keeps the next show open and folds the rest behind one
  // toggle (Paul, 8 Oct 2026). The screen's only fold besides the tour rows:
  // the standing rule is dense lists, no accordions, unless he asks, and he
  // asked for this one. Shut on every render the server makes.
  const { next, later } = foldAnnounced(announced);
  // The bar's one gold action (J3-13, fix 65): the next show's own tickets
  // once it is on sale (C-21: the soonest announced show with an on-sale
  // URL, as the desktop panel reads it), and until then the board.
  const onSaleFirst = ticketsShow(announced);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreId = useId();

  // The note's two cases (C-18): any tour on the board, and any still
  // printing capacity.
  const boardTours = tours.some((t) => nightsOf(boxOffice, t.name));
  const capacityTours = tours.some((t) => (t.dates?.length ?? 0) > 0 && !nightsOf(boxOffice, t.name));

  const stats = [
    { v: String(tours.length), l: "Tours", n: yearSpan },
    { v: topGross, l: "Top gross", n: topTourName },
    { v: String(countryCount), l: "Countries", n: `${regionCount} regions` },
    { v: biggestNight, l: "Biggest night", n: biggestVenue },
  ];

  // Map first: the group is this screen's one route to it. The "Countries"
  // tile above stays a figure, not a link (brief §4.3).
  const road = [
    {
      href: "/records/tours/map",
      title: "Where he's performed",
      sub: `${countryCount} countries documented · ${regionCount} regions`,
    },
    {
      href: "/records/tours/revenue",
      title: "Highest-grossing shows",
      // "Of the N … by an African artist": the board ranks every African
      // artist, so "N shows" alone would overclaim. Not "biggest": the board
      // has no floor, it is every verified single-show gross.
      sub: `His ${hisShowCount} of the ${revenueShowCount} verified single-show grosses by an African artist`,
    },
    {
      href: "/records/tours/festivals",
      title: "Festivals & shows",
      sub: `${appearanceCount} documented appearances · ${headlinedCount} headlined`,
    },
  ];

  return (
    <div ref={rootRef} className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/records" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Tours &amp; live</span>
        <span className={styles.badge}>{tours.length} tours</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>On the road</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Tours &amp; <span className={styles.gold}>live</span>
        </h1>
        <p className={styles.lede}>
          {/* Two measures, kept apart: countryCount is every country he has
              performed in (tours, festivals and one-off shows), not the six
              tours' own footprint. */}
          {spell(tours.length)} tours, and live shows in {countryCount} countries — and the
          highest-grossing tour by any African artist. Tap a tour for its dates.
        </p>
        {/* P1 (J1-11, fix 24): under the lede, inside the hero. */}
        {p1 && <MobileProvenance size="p1" {...p1} className={styles.p1Slot} />}
      </div>

      {/* Stat strip */}
      <div className={styles.statGrid}>
        {stats.map((s) => (
          <div key={s.l} className={styles.statCell}>
            <div className={styles.statValue}>{s.v}</div>
            <div className={styles.statLabel}>{s.l}</div>
            <div className={styles.statNote}>{s.n}</div>
          </div>
        ))}
      </div>

      {/* Announced but unplayed — kept out of every figure above. */}
      {next && (
        <div className={styles.upcoming} data-announced="announced">
          {/* One date per show, not one for the block: with the NFL Paris
              halftime (25 Oct 2026) and London Stadium (2027) both announced,
              a single head date would label the second with the first's. */}
          <div className={styles.upcomingHead}>
            <span className={styles.upcomingTag}>{ANNOUNCED_TAG}</span>
            {/* One show: its date, in the display face. Several: a count in
                the label face, so it does not outsize the dated rows under it. */}
            {announced.length === 1 ? (
              <span className={`${styles.upcomingWhen} ${yearOnly(next.when) ? styles.whenYear : ""}`}>{next.when}</span>
            ) : (
              <span className={styles.upcomingCount}>{announced.length} shows</span>
            )}
          </div>
          <UpcomingRow show={next} dated={announced.length > 1} />
          {/* The later shows, folded under the next one. The toggle sits
              straight under that show and the rows open BELOW it, so nothing
              above the button changes. It is still held under the finger both
              ways (lib/holdInPlace), as the tour rows below are, rather than
              left to each browser's scroll anchoring (Safari has none):
              measured at 390 and 320, it stays put to the pixel. The rows
              stay in the served HTML behind `hidden`, so search engines read
              them; a reader without JavaScript gets them open and no toggle
              (the <noscript> rule), since a button that cannot run would hide
              them for good. */}
          {later.length > 0 && (
            <>
              <button
                type="button"
                className={styles.upcomingFold}
                aria-expanded={moreOpen}
                aria-controls={moreId}
                onClick={(e) => holdInPlace(e.currentTarget, () => setMoreOpen((o) => !o))}
              >
                {moreOpen ? SHOW_FEWER : moreShowsLabel(later.length)}
                <span className={styles.upcomingFoldGlyph} aria-hidden="true">
                  {moreOpen ? "▴" : "▾"}
                </span>
              </button>
              <div id={moreId} className={styles.upcomingMore} hidden={!moreOpen}>
                {later.map((u) => (
                  <UpcomingRow key={`${u.venue}-${u.when}`} show={u} dated />
                ))}
              </div>
              <noscript>
                <style>{`.${styles.upcomingMore}[hidden]{display:block}.${styles.upcomingFold}{display:none}`}</style>
              </noscript>
            </>
          )}
        </div>
      )}

      {/* Played, its day gone by, and nothing reported yet: the same card,
          still outside every figure, until the night moves into the record.
          Each row keeps its date, since the head carries the status. A night
          that will never report a gross is a card of its own reading just
          "Played", with no awaiting line. */}
      {playedCards.map((c) => (
        <div key={c.key} className={styles.upcoming} data-announced="played">
          <div className={styles.upcomingHead}>
            <span className={styles.upcomingTag}>{PLAYED_TAG}</span>
            {c.note && <span className={styles.upcomingCount}>{c.note}</span>}
          </div>
          {c.shows.map((u) => (
            <UpcomingRow key={`${u.venue}-${u.when}`} show={u} dated />
          ))}
        </div>
      ))}

      {/* Tours */}
      {tours.map((t) => {
        const isOpen = open === t.name;
        return (
          <div key={t.name} className={`${styles.tour} ${isOpen ? styles.tourOpen : ""}`}>
            <button
              type="button"
              className={styles.tourBtn}
              aria-expanded={isOpen}
              // One tour open at a time: tapping a row below the open one shut
              // the list above it and threw the tapped row 1,545px off the top
              // (V-tourscars-01, 5 Oct 2026). Held under the finger instead.
              // Picking a tour takes the link's out of the address bar, so a
              // reload does not put it back.
              onClick={(e) => {
                holdInPlace(e.currentTarget, () => setOpen(isOpen ? null : t.name));
                dropDeepLink(TOUR_PARAM, DATE_PARAM);
              }}
              data-tour={tourSlug(t.name)}
            >
              <div className={styles.tourTop}>
                <div className={styles.tourMain}>
                  <div className={styles.tourNameRow}>
                    <span className={styles.tourName}>{t.name}</span>
                    {t.record && <span className={styles.recordBadge}>{RECORD_PILL}</span>}
                  </div>
                  <div className={styles.tourMeta}>
                    {t.years} · {tourMeta(t)}
                  </div>
                </div>
                <span className={`${styles.tourGross} ${t.gross ? "" : styles.grossNone}`}>
                  {t.gross ?? <NotReported what={NO_TOUR_TOTAL} />}
                </span>
                <span className={styles.caret} aria-hidden="true">{isOpen ? "▴" : "▾"}</span>
              </div>
            </button>

            {isOpen && nightsOf(boxOffice, t.name) && (
              <div className={styles.tourBody}>
                <p className={styles.tourNote}>{t.note}</p>
                <BoardDates tour={t} nights={nightsOf(boxOffice, t.name)!} />
              </div>
            )}
            {isOpen && !nightsOf(boxOffice, t.name) && (
              <div className={styles.tourBody}>
                <p className={styles.tourNote}>{t.note}</p>
                <div className={styles.dateHead}>
                  <span>Date &amp; venue</span>
                  <span className={styles.dateHeadRight}>Venue capacity</span>
                </div>
                {t.dates?.length ? (
                  t.dates.map((d) => (
                    <div key={`${d.date}-${d.venue}`} className={styles.dateRow} data-show={showDateIso(d.date) ?? undefined}>
                      <div className={styles.dateMain}>
                        <div className={styles.dateVenue}>{d.venue}</div>
                        {/* City first, then country, as the announced list
                            above reads: "USA Atlanta" ran the two together
                            (V-tourscars-07). Desktop gives each a column. The
                            date kept whole: at 320 "Apr 12," / "2022" split. */}
                        <div className={styles.dateMeta}>
                          {d.city}, {d.country} · {d.date.replace(/ /g, " ")}
                        </div>
                      </div>
                      <span className={styles.dateCap}>
                        {d.cap ? d.cap.toLocaleString("en-GB") : <NotReported what="Capacity not stated" />}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className={styles.empty}>No date-level Boxscore report for this run.</p>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Links, not expanders: the whole row is the link and ends in →, where
          the tour rows above end in a ▸ caret. */}
      <nav aria-labelledby="more-from-the-road" className={styles.road}>
        <h2 id="more-from-the-road" className={styles.roadHead}>
          More from the road
        </h2>
        {road.map((r) => (
          <Link key={r.href} href={r.href} className={styles.roadRow}>
            <span className={styles.roadText}>
              <span className={styles.roadTitle}>{r.title}</span>
              <span className={styles.roadSub}>{r.sub}</span>
            </span>
            <span className={styles.roadArrow} aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </nav>

      {/* The record nights (J4-9, fix 92): the desktop h2's own words, the
          count from the data, every moment in full. Ink throughout; the one
          gold is each linked row's →, the road rows' rule just above. */}
      {moments.length > 0 && (
        <section aria-labelledby="m-moments" className={styles.moments}>
          <div className={styles.momentsHead}>
            <span className={styles.momentsKicker}>
              <span className={styles.momentsTick} aria-hidden="true" />
              {moments.length} moments
            </span>
            <h2 id="m-moments" className={styles.momentsTitle}>
              Record nights &amp; live milestones
            </h2>
          </div>
          {moments.map((m) => {
            const body = (
              <>
                <span className={styles.momentYear}>{m.year}</span>
                <span className={styles.momentMain}>
                  <span className={styles.momentTitleRow}>
                    <span className={styles.momentTitle}>{m.title}</span>
                    {m.flags.map((f) => (
                      <span key={f} className={styles.recordBadge}>
                        {f}
                      </span>
                    ))}
                    {m.href && (
                      <span className={`${styles.roadArrow} ${styles.momentArrow}`} aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                  <span className={styles.momentText}>{m.text}</span>
                </span>
              </>
            );
            return m.href ? (
              <Link key={m.title} href={m.href} className={styles.momentRow}>
                {body}
              </Link>
            ) : (
              <div key={m.title} className={styles.momentRow}>
                {body}
              </div>
            );
          })}
        </section>
      )}

      <MobileProvenance size="p3" data={data}>
        {/* The board's own credit (revenueSource.ts, no data imports, so the
            client bundle stays clean): it said "Billboard Boxscore" alone until
            5 Oct 2026, while the desktop page credits TouringData (D-03). */}
        {/* Until 5 Oct 2026 this named the data file ("tours.ts records
            capacity") and said a dash meant "no reported gross" — false for No
            Sign of Weakness and Space Drift, whose nights are on the board. */}
        {/* With the board's figures in the tables (J3-11, C-18), the capacity
            sentence holds only for the tours still printing capacity, and
            says so while any does. */}
        Tour grosses come from {REVENUE_BODY}, which republishes {REVENUE_REPORTS}.{" "}
        {boardTours ? (
          <>
            Where a tour&apos;s nights are on the Highest-grossing shows board, each row
            carries that night&apos;s own tickets and gross; &ldquo;{NOT_REPORTED_LINE}&rdquo;
            means no box-office report for that night, and a run, nights reported as one
            figure, prints it once.{" "}
            {capacityTours && (
              <>
                On the other tours the per-date figure is the{" "}
                <strong>venue&apos;s capacity</strong>, not tickets sold.{" "}
              </>
            )}
            A dash for a tour&apos;s gross means no tour total has been reported, not that
            the run was small. Some runs list only their confirmed dates.
          </>
        ) : (
          <>
            The per-date figure is the{" "}
            <strong>venue&apos;s capacity</strong>, not tickets sold; only some nights have a
            reported headcount. A dash means no tour total has been reported, not that the run
            was small; single nights from a run can still be on the Highest-grossing shows
            board. Some runs list only their confirmed dates.
          </>
        )}
      </MobileProvenance>

      <div className={styles.spacer} />

      {/* One gold fill (J3-13, decided 8 Oct 2026): "Highest-grossing shows ↗"
          while nothing is on sale, "Tickets ↗" once the next show is. The
          generic Ticketmaster artist page it carried is gone. */}
      <div className={styles.actionBar}>
        {onSaleFirst ? (
          <a href={onSaleFirst.onSale} target="_blank" rel="noopener noreferrer" className={styles.actionPrimary}>
            Tickets<span aria-hidden="true">↗</span>
          </a>
        ) : (
          <Link href={SHOWS_PATH} className={styles.actionPrimary}>
            Highest-grossing shows<span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </div>
  );
}

/** One announced (or played, unreported) show: venue and date, city and
 *  capacity, the one-line note and the source. */
function UpcomingRow({ show: u, dated }: { show: UpcomingShow; dated: boolean }) {
  return (
    <div className={styles.upcomingShow}>
      <div className={styles.upcomingRow}>
        <span className={styles.upcomingVenue}>{u.venue}</span>
        {/* Dates in ink, a bare year muted (J3-12, fix 56). */}
        {dated && <span className={`${styles.upcomingDate} ${yearOnly(u.when) ? styles.whenYear : ""}`}>{u.when}</span>}
      </div>
      <div className={styles.upcomingCity}>
        {u.city}, {u.country}
        {/* A named locale: this is a client component, and a bare
            toLocaleString() printed "80.000" in a German browser
            against the server's "80,000" — React #418. */}
        {u.cap ? ` · ${u.cap.toLocaleString("en-US")} cap` : ""}
      </div>
      {/* One line, not the full note: three notes ran this box to a
          whole phone screen (Paul, 1 Oct 2026). Desktop has them. */}
      <p className={styles.upcomingText}>{u.short}</p>
      {/* The date kept whole: at 320 "…the NFL, 17" / "September 2026"
          split the day from its month. Desktop prints it on one line. */}
      <p className={styles.upcomingSource}>{u.source.replace(/(\d{1,2}) ([A-Z][a-z]+) (\d{4})/, "$1\u00a0$2\u00a0$3")}</p>
    </div>
  );
}

/**
 * A board tour's nights (J3-11): venue, "{city}, {country} · {date}", then the
 * figure line. A reported night is one whole-row link to its own row on the
 * board; a run is one row for all its nights, to the runs view, carrying the
 * first night as `data-show` and every night in `data-show-nights` so a
 * night's deep link (#tour=&date=) still lands on it (lib/useTourDeepLink).
 * The → is the road rows' gold arrow, one whole-row grammar on the screen.
 */
function BoardDates({ tour, nights }: { tour: Tour; nights: Record<string, TourNight> }) {
  return (
    <>
      <div className={styles.dateHead}>
        <span>Date &amp; venue</span>
      </div>
      {tour.dates?.map((d) => {
        const iso = showDateIso(d.date);
        const n = iso ? nights[iso] : undefined;
        const key = `${d.date}-${d.venue}`;
        const place = `${d.city}, ${d.country}`;
        if (n?.kind === "run") {
          if (n.dates[0] !== iso) return null;
          return (
            <Link
              key={key}
              href={RUNS_HREF}
              className={`${styles.dateRow} ${styles.dateRowLink}`}
              data-show={iso}
              data-show-nights={n.dates.join(" ")}
            >
              <div className={styles.dateMain}>
                <div className={styles.dateVenue}>{d.venue}</div>
                <div className={styles.dateMeta}>
                  {place} · {nightsSpan(n.dates)}
                </div>
                <div className={styles.dateFigs}>
                  {n.tickets} tickets · {n.grossShort} · {n.nights} nights · Run
                </div>
              </div>
              <span className={styles.roadArrow} aria-hidden="true">
                →
              </span>
            </Link>
          );
        }
        const meta = (
          <div className={styles.dateMeta}>
            {place} · {d.date.replace(/ /g, "\u00a0")}
          </div>
        );
        if (n) {
          return (
            <Link
              key={key}
              href={nightHref(n.rank, "m")}
              className={`${styles.dateRow} ${styles.dateRowLink}`}
              data-show={iso ?? undefined}
            >
              <div className={styles.dateMain}>
                <div className={styles.dateVenue}>{d.venue}</div>
                {meta}
                <div className={styles.dateFigs}>
                  {n.tickets ? `${n.tickets} tickets · ` : ""}
                  {n.grossShort} · No. {n.rank}
                </div>
              </div>
              <span className={styles.roadArrow} aria-hidden="true">
                →
              </span>
            </Link>
          );
        }
        return (
          <div key={key} className={styles.dateRow} data-show={iso ?? undefined}>
            <div className={styles.dateMain}>
              <div className={styles.dateVenue}>{d.venue}</div>
              {meta}
              <div className={`${styles.dateFigs} ${styles.dateFigsNone}`}>{NOT_REPORTED_LINE}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
