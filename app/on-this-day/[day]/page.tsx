import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../onThisDay.module.css";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import KeepExploring from "../../components/KeepExploring";
import MobileOnThisDayDay from "../../components/MobileOnThisDayDay";
import { KindPill } from "../../components/OnThisDayKind";
import { pageMetadata, CANONICAL_ORIGIN } from "../../lib/seo";
import { cardFilename, cardPath, cardPreviewSrc } from "../../lib/cardPreview";
import { BLANK_PIXEL } from "../../lib/blankPixel";
import {
  dayBySlug,
  dayLede,
  dayMeta,
  dayPageDescription,
  dayPageTitle,
  dayShareLine,
  isIndexableDay,
  isRecordLine,
  milestones,
  neighbours,
  onThisDayDays,
  yearGroups,
} from "../../lib/onThisDay";

// Only a day with at least one dated milestone has a page, and anything else
// 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return onThisDayDays.map((d) => ({ day: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const day = dayBySlug(slug);
  if (!day) return {};
  return pageMetadata({
    title: dayPageTitle(day),
    description: dayPageDescription(day),
    path: `/on-this-day/${day.slug}`,
    shareTitle: `Burna Boy on this day — ${day.label}`,
    shareDescription: dayShareLine(day),
    // A one-milestone day stays live, linked and searchable on the site, but
    // is `noindex, follow` for search engines, and out of the sitemap
    // (isIndexableDay, lib/onThisDay.ts): 120 of the 167 are one sentence.
    noindex: !isIndexableDay(day),
  });
}

export default async function OnThisDayDayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const day = dayBySlug(slug);
  if (!day) notFound();

  const { prev, next } = neighbours(day.key);
  const groups = yearGroups(day);

  // Hand-written, like the song and album pages: the leaf is "26 September",
  // which the slug cannot spell (OWN_BREADCRUMB in lib/seo.ts).
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_ORIGIN },
      { "@type": "ListItem", position: 2, name: "On This Day", item: `${CANONICAL_ORIGIN}/on-this-day` },
      { "@type": "ListItem", position: 3, name: day.label, item: `${CANONICAL_ORIGIN}/on-this-day/${day.slug}` },
    ],
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <MobileOnThisDayDay day={day} />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path={`/on-this-day/${day.slug}`} leaf={day.label} />

        <div className={styles.dayWrap}>
          <header className={styles.dayHero}>
            <p className={styles.dayEyebrow}>Burna Boy · On this day</p>
            <h1 className={styles.h1}>{day.label}</h1>
            <p className={styles.dayLede}>{dayLede(day)}</p>
          </header>

          <div className={styles.dayGrid}>
            <div className={styles.dayMain}>
              {groups.map((g) => (
                <section key={g.year} className={styles.yearGroup} aria-labelledby={`otd-y-${g.year}`}>
                  <div className={styles.yearHead}>
                    <h2 id={`otd-y-${g.year}`} className={styles.yearNum}>
                      {g.year}
                    </h2>
                    <span className={styles.yearCount}>{milestones(g.events.length)}</span>
                  </div>
                  <ol className={styles.rows}>
                    {g.events.map((e) => {
                      const record = isRecordLine(e);
                      return (
                        <li key={e.id}>
                          <Link href={e.href} className={styles.row}>
                            <span className={styles.rowBody}>
                              <span className={styles.rowTags}>
                                <KindPill kind={e.kind} className={styles.tag} />
                                {e === day.lead && (
                                  <span className={styles.cardTag}>
                                    <svg width="9" height="11" viewBox="0 0 9 11" aria-hidden="true" focusable="false">
                                      <rect x=".75" y=".75" width="7.5" height="9.5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
                                    </svg>
                                    On the card
                                  </span>
                                )}
                              </span>
                              <span className={styles.rowHeadline}>{e.headline}</span>
                              {record ? (
                                <span className={styles.recordLine}>
                                  <span className={styles.recordLabel}>Record</span>
                                  <span>{e.detail}</span>
                                </span>
                              ) : (
                                <span className={styles.rowDetail}>{e.detail}</span>
                              )}
                            </span>
                            <span className={styles.rowArrow} aria-hidden="true">
                              ↗
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </section>
              ))}

              <nav className={styles.pagerCards} aria-label="Other dates">
                <Link href={`/on-this-day/${prev.slug}`} className={styles.pagerCard}>
                  <span className={styles.pagerLabel}>← {prev.label}</span>
                  <span className={styles.pagerHeadline}>{prev.lead.headline}</span>
                  <span className={styles.pagerMeta}>{dayMeta(prev)}</span>
                </Link>
                <Link href="/on-this-day" className={styles.pagerCalendar}>
                  The calendar ↗
                </Link>
                <Link href={`/on-this-day/${next.slug}`} className={`${styles.pagerCard} ${styles.pagerCardNext}`}>
                  <span className={styles.pagerLabel}>{next.label} →</span>
                  <span className={styles.pagerHeadline}>{next.lead.headline}</span>
                  <span className={styles.pagerMeta}>{dayMeta(next)}</span>
                </Link>
              </nav>
            </div>

            <aside className={styles.cardCol} aria-labelledby="otd-card">
              <p id="otd-card" className={styles.cardColLabel}>
                The {day.label} card
              </p>
              <div className={styles.cardStage}>
                {/* Eager, since it sits above the fold here; the <source> hands
                    the hidden desktop copy a blank pixel on a phone, where a
                    display:none <img loading="eager"> would still be fetched
                    (lib/blankPixel.ts). */}
                <picture>
                  <source media="(max-width: 900px)" srcSet={BLANK_PIXEL} />
                  {/* eslint-disable-next-line @next/next/no-img-element -- a route-drawn WebP, sized by the route */}
                  <img
                    src={cardPreviewSrc(day.slug, 560)}
                    alt={`The ${day.label} card: ${day.lead.year}, ${day.lead.headline}`}
                    width={280}
                    height={350}
                    loading="eager"
                    fetchPriority="low"
                    decoding="async"
                    className={styles.cardImg}
                  />
                </picture>
              </div>
              <a href={cardPath(day.slug)} download={cardFilename(day.slug)} className={`btn btnPrimary ${styles.cardBtn}`}>
                <span>Download the card</span>
                <span aria-hidden="true">↓</span>
              </a>
              <p className={styles.cardBenefit}>
                Posts whole on Instagram and X, with no crop. It names the date and the source, so it stays true
                wherever it&apos;s reposted.
              </p>
            </aside>
          </div>
        </div>

        <KeepExploring current="/on-this-day" />
      </div>
    </main>
  );
}
