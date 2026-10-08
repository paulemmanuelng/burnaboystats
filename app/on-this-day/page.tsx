import Link from "next/link";
import styles from "./onThisDay.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import MobileOnThisDayIndex from "../components/MobileOnThisDayIndex";
import StaticLinks from "../components/StaticLinks";
import { desktopMonthsHtml } from "./desktopMonths";
import { pageMetadata } from "../lib/seo";
import { KindMark } from "../components/OnThisDayKind";
import {
  KIND_MARK,
  KIND_ORDER,
  calendarToday,
  focusMeta,
  onThisDayCounts,
  onThisDayDays,
  onThisDayEvents,
  todaySentence,
} from "../lib/onThisDay";

// The title counts what the calendar holds: fewer than half of the 366 dates
// carry a milestone (161 on 26 Sep 2026), so "a milestone for every date" was
// a promise the page broke.
export const metadata = pageMetadata({
  title: `Burna Boy On This Day — ${onThisDayEvents.length} Milestones on ${onThisDayDays.length} Dates`,
  description: `Burna Boy on this day: ${onThisDayEvents.length} dated milestones on ${onThisDayDays.length} days of the year — releases, No. 1s, certifications, awards and shows.`,
  path: "/on-this-day",
  shareTitle: "Burna Boy — On This Day",
  shareDescription: "A dated milestone for every day that has one, each linked to its source.",
});

// Today's ring and the Today panel are drawn on the server from the London
// date, and the page is rebuilt hourly — the home page's model — so there is
// no client script and nothing for hydration to disagree with (design
// response §3; change list item 12).
export const revalidate = 3600;

const kinds = KIND_ORDER.filter((k) => onThisDayCounts[k] > 0);

/**
 * The calendar (designs/desktop/OTD Calendar.dc.html, desktop): the Today
 * panel beside the h1, one legend-and-tally strip, then twelve months of days
 * 1–31 in seven columns with no weekday header — the calendar has no year, so
 * a weekday would be false. Under each grid, the month's dated days with their
 * lead headlines, lit together with their cells. MobileOnThisDayIndex is the
 * phone's.
 */
export default function OnThisDayPage() {
  const today = calendarToday(new Date());
  const focus = today.focus;

  return (
    <main id="content">
      <MobileOnThisDayIndex today={today} />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/on-this-day" />

        <div className={styles.calWrap}>
          <header className={styles.calHero}>
            <div className={styles.calHeroText}>
              <p className={styles.dayEyebrow}>Burna Boy · the calendar</p>
              <h1 className={styles.h1}>
                On This <span className="inkText">Day</span>
              </h1>
              <p className={styles.calLede}>
                {onThisDayEvents.length} dated milestones on {onThisDayDays.length} days of the year:
                releases, chart peaks, certifications, awards and shows, each filed on the day it happened.
                Pick a date for everything on it.
              </p>
            </div>

            <section className={styles.today} aria-labelledby="otd-today">
              <p id="otd-today" className={styles.todayLabel}>
                <span className={styles.todaySwatch} aria-hidden="true" />
                Today · <span className={styles.todayDate}>{today.label}</span>
              </p>
              <p className={styles.todaySentence}>{todaySentence(today)}</p>
              <p className={styles.todayHeadline}>{focus.lead.headline}</p>
              <p className={styles.todayMeta}>{focusMeta(focus)}</p>
              <Link href={`/on-this-day/${focus.slug}`} className={styles.todayOpen}>
                Open {focus.label} <span aria-hidden="true">↗</span>
              </Link>
            </section>
          </header>

          <div className={styles.legendStrip}>
            <ul className={styles.legendKinds} aria-label="Milestones by kind">
              {kinds.map((k) => (
                <li key={k} className={styles.legendKind}>
                  <KindMark kind={k} size={12} className={styles.legendMark} />
                  {KIND_MARK[k].word} <span className={styles.legendCount}>{onThisDayCounts[k]}</span>
                </li>
              ))}
            </ul>
            <p className={styles.legendRule}>
              Mark = the day&apos;s lead milestone · number = milestones that day · no weekdays: the calendar has
              no year
            </p>
          </div>

          {/* The keyboard's way past the calendar. Every dated day is its own
              Tab stop, month by month (the design's keyboard order), so
              without this the next stop after the Today panel was a run of
              every dated cell before "How dates are filed". Seen only on
              focus. The phone has its month jumps. */}
          <a href="#otd-filed" className={styles.skip}>
            Skip the calendar
          </a>

          {/* The twelve months, as one block of server-built HTML
              (desktopMonths.ts): all of it in the page, none of it for React
              to rebuild or hydrate on a phone, where it is display:none. */}
          <StaticLinks className={styles.months} html={desktopMonthsHtml(today)} />

          <div id="otd-filed" className={styles.filed}>
            <p className={styles.filedLabel}>How dates are filed</p>
            <p className={styles.filedText}>
              Only records that carry their own day are here: a certification on the date its body&apos;s
              register prints, a chart peak on the issue that first carried it, a show on the night itself. A
              record known only by its year stays off the calendar until its day is read — see the{" "}
              <Link href="/methodology#dates">methodology</Link>.
            </p>
          </div>
        </div>

        <KeepExploring current="/on-this-day" />
      </div>
    </main>
  );
}
