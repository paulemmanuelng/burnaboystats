import Link from "next/link";
import styles from "./onThisDayBand.module.css";
import { KindMark, KindPill } from "./OnThisDayKind";
import { cardFilename, cardPath, cardPreviewSrc } from "../lib/cardPreview";
import {
  KIND_MARK,
  homeAge,
  homeDayLink,
  homeLeadAge,
  homeRestTitle,
  homeRows,
  homeWhen,
  isRecordLine,
  keepSeparators,
  neighbours,
  type OnThisDayPick,
} from "../lib/onThisDay";

const NBSP = "\u00a0";

/**
 * The home page's "On this day" band — desktop (designs/desktop/OTD Home
 * Card.dc.html). MobileOnThisDayCard is the phone's.
 *
 * The lead milestone is the title; the date and the countdown sit in the
 * kicker. On the right, the day's other anniversaries (up to two, newest
 * first, each with its own age), a "Next on the calendar" teaser when there
 * are fewer than two, and the day's card with an outlined "The card ↓". No
 * gold action: "View certifications" is the screen's one.
 *
 * It sits under "History made". The pick is made once, in app/page.tsx, from
 * the London date at render and handed to both layouts; the home page
 * revalidates hourly, so the band turns over within the hour after London's
 * midnight.
 */
export default function OnThisDayBand({ pick }: { pick: OnThisDayPick | null }) {
  if (!pick) return null;
  const { day } = pick;
  const [lead, ...rest] = homeRows(pick);
  const next = neighbours(day.key).next;
  const cardButton = (className = "") => (
    <a href={cardPath(day.slug)} download={cardFilename(day.slug)} className={`btn btnSecondary ${styles.cardBtn}${className ? ` ${className}` : ""}`}>
      <span>
        The card<span className="visuallyHidden"> for {day.label}</span>
      </span>
      <span aria-hidden="true">↓</span>
    </a>
  );

  return (
    <section className={styles.band} aria-labelledby="otd-title">
      <div className={styles.inner}>
        <div className={styles.lead}>
          <p className={styles.kicker}>
            On this day ·{NBSP}<span className={styles.when}>{keepSeparators(homeWhen(pick))}</span>
          </p>
          <h2 id="otd-title" className={styles.title}>
            {lead.headline}
          </h2>
          {/* Each " · " travels with the item after it, joined by a no-break
              space, so a wrap never leaves a separator hanging at a line's
              end (at 1024 the age wrapped under "2021 ·"). */}
          <p className={styles.meta}>
            <KindPill kind={lead.kind} className={styles.pill} />
            <span>{lead.year}</span>
            <span>
              <span aria-hidden="true">·</span>
              {NBSP}
              <span className={styles.age}>{homeLeadAge(pick)}</span>
            </span>
          </p>
          {/* A record sentence prints in ink at 16px; a plain detail in body
              colour at 15px. */}
          <p className={isRecordLine(lead) ? styles.record : styles.detail}>{lead.detail}</p>
          <div className={styles.links}>
            <Link href={`/on-this-day/${day.slug}`} className={styles.link}>
              {homeDayLink(pick)} <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/on-this-day" className={styles.link}>
              The calendar <span aria-hidden="true">↗</span>
            </Link>
          </div>
          {/* 901–1239: the preview column drops and the button stays, here. */}
          {cardButton(styles.cardBtnTablet)}
        </div>

        <div className={styles.side}>
          <div className={styles.rest}>
            <p className={styles.restTitle}>{homeRestTitle(pick)}</p>
            {rest.length > 0 && (
              <ol className={styles.rows}>
                {rest.map((e) => (
                  <li key={e.id}>
                    <Link href={e.href} className={styles.row}>
                      <span className={styles.year}>{e.year}</span>
                      <span className={styles.body}>
                        <span className={styles.headline}>
                          <KindMark kind={e.kind} className={styles.mark} />
                          {e.headline}
                        </span>
                        <span className={styles.detailLine}>
                          {KIND_MARK[e.kind].word} · {e.detail}
                        </span>
                      </span>
                      <span className={styles.ago}>{homeAge(pick, e)}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            )}
            {rest.length < 2 && (
              <Link href={`/on-this-day/${next.slug}`} className={styles.row}>
                <span className={styles.nextLabel}>Next</span>
                <span className={styles.body}>
                  <span className={styles.headline}>{next.lead.headline}</span>
                  <span className={styles.nextMeta}>
                    {next.label} · {next.lead.year}
                  </span>
                </span>
                <span className={styles.nextArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            )}
          </div>

          <div className={styles.cardCol}>
            {/* Lazy, and hidden below 1240: a hidden lazy image is never
                fetched. The 320px WebP, never the 725 KB PNG. */}
            {/* eslint-disable-next-line @next/next/no-img-element -- a route-drawn WebP, sized by the route */}
            <img
              src={cardPreviewSrc(day.slug, 320)}
              alt={`The ${day.label} card: ${day.lead.year}, ${day.lead.headline}`}
              width={150}
              height={188}
              loading="lazy"
              decoding="async"
              className={styles.cardImg}
            />
            {cardButton()}
          </div>
        </div>
      </div>
    </section>
  );
}
