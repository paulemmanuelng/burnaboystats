import Link from "next/link";
import styles from "./onThisDay.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import MobileOnThisDayIndex from "../components/MobileOnThisDayIndex";
import { pageMetadata } from "../lib/seo";
import { KindMark } from "../components/OnThisDayKind";
import {
  KIND_MARK,
  KIND_ORDER,
  MONTHS,
  calendarDayLabel,
  calendarMonthDays,
  calendarToday,
  focusMeta,
  monthDefault,
  monthSub,
  onThisDayCounts,
  onThisDayDays,
  onThisDayEvents,
  todaySentence,
} from "../lib/onThisDay";

// The title counts what the calendar holds: 167 of 366 dates carry a
// milestone, so "a milestone for every date" was a promise the page broke.
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
const pad = (n: number) => String(n).padStart(2, "0");

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
                {onThisDayEvents.length} dated milestones on {onThisDayDays.length} days of the year — album
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

          <div className={styles.months}>
            {MONTHS.map((name, i) => {
              const month = i + 1;
              const days = onThisDayDays.filter((d) => d.month === month);
              const byDay = new Map(days.map((d) => [d.day, d]));
              // The month's lit day at rest, as the artboard draws it: today,
              // else the Today panel's next date, else the busiest day.
              const lit = monthDefault(days, today)?.day;
              return (
                <section key={name} className={styles.month} aria-labelledby={`otd-cal-${month}`}>
                  <div className={styles.monthHead}>
                    <h2 id={`otd-cal-${month}`} className={styles.monthName}>
                      {name}
                    </h2>
                    <span className={styles.monthSub}>
                      {monthSub(days)}
                      <span className="visuallyHidden"> milestones</span>
                    </span>
                  </div>

                  <div className={styles.grid}>
                    {Array.from({ length: calendarMonthDays(month) }, (_, j) => j + 1).map((n) => {
                      const key = `${pad(month)}-${pad(n)}`;
                      const d = byDay.get(n);
                      const isToday = key === today.key;
                      const cls = `${styles.cell} ${d ? styles.cellOn : styles.cellOff}${isToday ? ` ${styles.cellToday}` : ""}`;
                      return d ? (
                        <Link
                          key={n}
                          href={`/on-this-day/${d.slug}`}
                          data-day={n}
                          data-default={n === lit || undefined}
                          className={cls}
                          aria-label={calendarDayLabel(key, d)}
                          aria-current={isToday ? "date" : undefined}
                        >
                          {n}
                          <KindMark kind={d.lead.kind} size={8} className={styles.cellMark} />
                          {d.events.length > 1 && <span className={styles.cellCount}>{d.events.length}</span>}
                        </Link>
                      ) : (
                        <span key={n} className={cls} aria-current={isToday ? "date" : undefined}>
                          <span aria-hidden="true">{n}</span>
                          <span className="visuallyHidden">{calendarDayLabel(key)}</span>
                        </span>
                      );
                    })}
                  </div>

                  {/* Every lead headline is in the page, not in a tooltip. The
                      cells above are the keyboard's way in; these rows repeat
                      their links for the pointer, so they stay out of the tab
                      order. */}
                  <ol className={styles.monthList}>
                    {days.map((d) => (
                      <li key={d.key}>
                        <Link
                          href={`/on-this-day/${d.slug}`}
                          data-day={d.day}
                          data-default={d.day === lit || undefined}
                          className={styles.listRow}
                          tabIndex={-1}
                        >
                          <span className={styles.listDay}>{d.day}</span>
                          <KindMark kind={d.lead.kind} alone className={styles.listMark} />
                          <span className={styles.listHeadline}>{d.lead.headline}</span>
                          <span className={styles.listMore}>
                            {d.events.length > 1 && (
                              <>
                                +{d.events.length - 1}
                                <span className="visuallyHidden"> more</span>
                              </>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
              );
            })}
          </div>

          <div className={styles.filed}>
            <p className={styles.filedLabel}>How dates are filed</p>
            <p className={styles.filedText}>
              Only records that carry their own day are here: a certification on the award date its body&apos;s
              register prints, a chart peak on the issue that first carried it, a show on the night itself. A
              record known only by its year stays off the calendar until its day is read — see the{" "}
              <Link href="/methodology">methodology</Link>.
            </p>
          </div>
        </div>

        <KeepExploring current="/on-this-day" />
      </div>
    </main>
  );
}
