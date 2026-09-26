import Link from "next/link";
import styles from "./onThisDay.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import MobileOnThisDayIndex from "../components/MobileOnThisDayIndex";
import { pageMetadata } from "../lib/seo";
import {
  KIND_INK,
  KIND_LABEL,
  MONTHS,
  onThisDayCounts,
  onThisDayDays,
  onThisDayEvents,
  type OnThisDayKind,
} from "../lib/onThisDay";

export const metadata = pageMetadata({
  title: "Burna Boy On This Day — A Milestone for Every Date",
  description: `Burna Boy on this day: ${onThisDayEvents.length} dated milestones on ${onThisDayDays.length} days of the year — releases, No. 1s, certifications, awards and shows.`,
  path: "/on-this-day",
  shareTitle: "Burna Boy — On This Day",
  shareDescription: "A dated milestone for every day that has one, each linked to its source.",
});

const kinds = (Object.keys(KIND_LABEL) as OnThisDayKind[]).filter((k) => onThisDayCounts[k] > 0);

// A leap year, so 29 February has a square to sit in.
const daysIn = (month: number) => new Date(Date.UTC(2024, month, 0)).getUTCDate();

export default function OnThisDayPage() {
  return (
    <main id="content">
      <MobileOnThisDayIndex />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/on-this-day" />

        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.hero}`}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowRule} aria-hidden="true" />
                Burna Boy · the calendar
              </div>
              <h1 className={styles.h1}>
                On This <span className="inkText">Day</span>
              </h1>
              <p className={styles.lede}>
                {onThisDayEvents.length} dated milestones on {onThisDayDays.length} days of the year — album
                releases, chart peaks, certifications, awards and shows, each filed on the day it happened.
                Pick a date for everything on it.
              </p>
            </div>
            <ul className={styles.tally} aria-label="Milestones by kind">
              {kinds.map((k) => (
                <li key={k} className={styles.tallyRow}>
                  <span className={styles.dot} style={{ background: KIND_INK[k] }} aria-hidden="true" />
                  {KIND_LABEL[k]}
                  <span className={styles.tallyValue}>{onThisDayCounts[k]}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.band} aria-label="The calendar">
          <div className={styles.wide}>
            <div className={styles.calendar}>
              {MONTHS.map((name, i) => {
                const month = i + 1;
                const byDay = new Map(onThisDayDays.filter((d) => d.month === month).map((d) => [d.day, d]));
                return (
                  <div key={name}>
                    <h2 className={styles.monthName}>
                      {name}
                      <span className={styles.monthCount}>{byDay.size} dates</span>
                    </h2>
                    <div className={styles.days}>
                      {Array.from({ length: daysIn(month) }, (_, j) => j + 1).map((n) => {
                        const d = byDay.get(n);
                        return d ? (
                          <Link
                            key={n}
                            href={`/on-this-day/${d.slug}`}
                            className={styles.dayOn}
                            aria-label={`${d.label} — ${d.events.length} milestone${d.events.length === 1 ? "" : "s"}`}
                            title={`${d.lead.year}: ${d.lead.headline}`}
                          >
                            {n}
                            <span className={styles.dayDot} style={{ background: KIND_INK[d.lead.kind] }} aria-hidden="true" />
                          </Link>
                        ) : (
                          <span key={n} className={styles.dayOff} aria-hidden="true">
                            {n}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className={styles.legend}>
              <span>The dot is the day&apos;s lead milestone:</span>
              {kinds.map((k) => (
                <span key={k} className={styles.legendItem}>
                  <span className={styles.dot} style={{ background: KIND_INK[k] }} aria-hidden="true" />
                  {KIND_LABEL[k]}
                </span>
              ))}
            </p>
          </div>
        </section>

        <section className={styles.bandSurface}>
          <div className={styles.wide}>
            <p className={styles.source}>
              Only records that carry their own day are here: a certification on the award date its body&apos;s
              register prints, a chart peak on the issue that first carried it, a show on the night itself. A
              record known only by its year stays off the calendar until its day is read — see the{" "}
              <Link href="/methodology">methodology</Link>.
            </p>
          </div>
        </section>

        <KeepExploring current="/on-this-day" />
      </div>
    </main>
  );
}
