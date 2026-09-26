import Link from "next/link";
import styles from "./mobileOnThisDay.module.css";
import BackLink from "./BackLink";
import MobileMenuButton from "./MobileMenuButton";
import OnThisDayPhoneMonth, { type PhoneMonthDay } from "./OnThisDayPhoneMonth";
import { KindMark } from "./OnThisDayKind";
import {
  KIND_MARK,
  KIND_ORDER,
  MONTHS,
  calendarDayLabel,
  calendarMonthDays,
  milestones,
  monthDefault,
  monthSub,
  onThisDayCounts,
  onThisDayDays,
  onThisDayEvents,
  todaySentence,
  yearSpan,
  type OnThisDayToday,
} from "../lib/onThisDay";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The phone's On this day calendar (designs/desktop/OTD Calendar.dc.html,
 * phone): the Today panel, a 6×2 grid of month jumps, the legend-and-tally
 * strip, then each month as a real 1–31 grid — seven 44px columns fit at 360
 * with the gap stepped down — with its selected-day panel under it. The
 * desktop page is app/on-this-day/page.tsx, its own markup.
 *
 * `today` is the London date, read once by the page on the server (the page
 * revalidates hourly), so the ring, the Today panel and each month's opening
 * day are in the served HTML.
 */
export default function MobileOnThisDayIndex({ today }: { today: OnThisDayToday }) {
  const kinds = KIND_ORDER.filter((k) => onThisDayCounts[k] > 0);
  const focus = today.focus;
  const months = MONTHS.map((name, i) => {
    const month = i + 1;
    const days = onThisDayDays.filter((d) => d.month === month);
    return { name, month, days };
  });

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>On this day</span>
        <MobileMenuButton />
      </div>

      <div className={styles.calHero}>
        <p className={styles.dayKicker}>Burna Boy · the calendar</p>
        {/* The page's <h1>, one per layout — only one is ever visible. */}
        <h1 className={styles.title}>
          On this <span className={styles.gold}>day</span>
        </h1>
        <p className={styles.calLede}>
          {onThisDayEvents.length} dated milestones on {onThisDayDays.length} days of the year. Tap a date to see
          what happened on it.
        </p>

        <section className={styles.calToday} aria-labelledby="otd-today-m">
          <p id="otd-today-m" className={styles.calTodayLabel}>
            <span className={styles.calTodaySwatch} aria-hidden="true" />
            Today · <span className={styles.calTodayDate}>{today.label}</span>
          </p>
          <p className={styles.calTodaySentence}>{todaySentence(today)}</p>
          <p className={styles.calTodayHeadline}>{focus.lead.headline}</p>
          <Link href={`/on-this-day/${focus.slug}`} className={styles.calOpenRow}>
            <span>Open {focus.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <nav id="months" aria-label="Months" className={styles.monthJumps}>
          {months.map((m) => (
            <a
              key={m.name}
              href={`#month-${m.name.toLowerCase()}`}
              className={styles.monthJump}
              aria-label={`${m.name} — ${m.days.length} date${m.days.length === 1 ? "" : "s"}`}
            >
              <span className={styles.monthJumpName}>{m.name.slice(0, 3)}</span>
              <span className={styles.monthJumpCount}>{m.days.length}</span>
            </a>
          ))}
        </nav>

        <ul className={styles.calLegend} aria-label="Milestones by kind">
          {kinds.map((k) => (
            <li key={k} className={styles.calLegendKind}>
              <KindMark kind={k} size={12} className={styles.calLegendMark} />
              {KIND_MARK[k].word} <span className={styles.calLegendCount}>{onThisDayCounts[k]}</span>
            </li>
          ))}
        </ul>
      </div>

      {months.map(({ name, month, days }) => {
        const byDay = new Map(days.map((d) => [d.day, d]));
        const phoneDays: PhoneMonthDay[] = days.map((d) => ({
          key: d.key,
          day: d.day,
          slug: d.slug,
          label: d.label,
          count: d.events.length,
          meta: `${d.label} · ${milestones(d.events.length)} · ${yearSpan(d.events)}`,
          headline: d.lead.headline,
          kind: d.lead.kind,
        }));
        return (
          <OnThisDayPhoneMonth
            key={name}
            month={month}
            name={name}
            sub={monthSub(days)}
            cellLabels={Array.from({ length: calendarMonthDays(month) }, (_, j) =>
              calendarDayLabel(`${pad(month)}-${pad(j + 1)}`, byDay.get(j + 1)),
            )}
            days={phoneDays}
            todayKey={today.key}
            defaultKey={monthDefault(days, today)?.key ?? null}
          />
        );
      })}

      <p className={styles.calNote}>
        Only records that carry their own day are here: a certification on the award date its body&apos;s
        register prints, a chart peak on the issue that first carried it, a show on the night itself. A record
        known only by its year stays off the calendar until its day is read — see the{" "}
        <Link href="/methodology">methodology</Link>.
      </p>
    </div>
  );
}
