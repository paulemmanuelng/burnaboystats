import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../onThisDay.module.css";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import KeepExploring from "../../components/KeepExploring";
import MobileOnThisDayDay from "../../components/MobileOnThisDayDay";
import { pageMetadata, CANONICAL_ORIGIN } from "../../lib/seo";
import {
  KIND_INK,
  KIND_LABEL,
  dayBySlug,
  neighbours,
  onThisDayDays,
  yearSpan,
  type OnThisDayDay,
} from "../../lib/onThisDay";

// Only a day with at least one dated milestone has a page — no thin pages, and
// anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return onThisDayDays.map((d) => ({ day: d.slug }));
}

const plural = (n: number) => `${n} milestone${n === 1 ? "" : "s"}`;

/** The description names the lead event when it fits in Google's 160, and
 *  falls back to a count and a span when it does not. */
function describe(day: OnThisDayDay): string {
  const n = day.events.length;
  const rich = `${day.lead.year}: ${day.lead.headline}.${n > 1 ? ` Plus ${n - 1} more Burna Boy milestone${n === 2 ? "" : "s"} dated ${day.label}.` : ` Burna Boy on this day, ${day.label}.`}`;
  return rich.length <= 160 ? rich : `${plural(n)} dated ${day.label}, ${yearSpan(day.events)} — releases, chart peaks, certifications and shows, each linked to its source.`;
}

export async function generateMetadata({ params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const day = dayBySlug(slug);
  if (!day) return {};
  return pageMetadata({
    title: `Burna Boy on This Day: ${day.label} — ${day.events.length} Milestone${day.events.length === 1 ? "" : "s"}`,
    description: describe(day),
    path: `/on-this-day/${day.slug}`,
    shareTitle: `Burna Boy on this day — ${day.label}`,
    shareDescription: `${day.lead.year}: ${day.lead.headline}.`,
  });
}

export default async function OnThisDayDayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const day = dayBySlug(slug);
  if (!day) notFound();

  const { prev, next } = neighbours(day.key);
  const n = day.events.length;

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

        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.hero}`}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowRule} aria-hidden="true" />
                Burna Boy · on this day
              </div>
              <h1 className={styles.h1}>{day.label}</h1>
              <p className={styles.lede}>
                {plural(n)} dated {day.label}, {yearSpan(day.events)} — newest first. Each one links to the page
                that holds the record.
              </p>
            </div>
            <div className={styles.cardAside}>
              {/* eslint-disable-next-line @next/next/no-img-element -- a route-drawn PNG, sized by the route */}
              <img
                src={`/on-this-day/${day.slug}/card`}
                alt={`The ${day.label} card: ${day.lead.year}, ${day.lead.headline}`}
                width={176}
                height={220}
                loading="lazy"
                className={styles.cardPreview}
              />
              <div className={styles.cardCopy}>
                <a
                  href={`/on-this-day/${day.slug}/card`}
                  download={`burna-boy-on-this-day-${day.slug}.png`}
                  className="btn btnPrimary"
                >
                  Download the card ↓
                </a>
                <p className={styles.cardNote}>1080×1350, the 4:5 a post runs uncropped on Instagram and X.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.band}>
          <div className={styles.wide}>
            <ol className={styles.events}>
              {day.events.map((e) => (
                <li key={e.id}>
                  <Link href={e.href} className={styles.event}>
                    <span className={styles.eventYear}>{e.year}</span>
                    <span className={styles.eventBody}>
                      <span className={styles.tag} style={{ color: KIND_INK[e.kind], borderColor: KIND_INK[e.kind] }}>
                        {KIND_LABEL[e.kind]}
                      </span>
                      <span className={styles.eventHeadline}>{e.headline}</span>
                      <span className={styles.eventDetail}>{e.detail}</span>
                    </span>
                    <span className={styles.eventMore}>See the record →</span>
                  </Link>
                </li>
              ))}
            </ol>

            <nav className={styles.pager} aria-label="Other dates">
              <Link href={`/on-this-day/${prev.slug}`} className={styles.pagerLink}>
                ← {prev.label}
              </Link>
              <Link href="/on-this-day" className={`${styles.pagerLink} ${styles.pagerMid}`}>
                The calendar
              </Link>
              <Link href={`/on-this-day/${next.slug}`} className={styles.pagerLink}>
                {next.label} →
              </Link>
            </nav>
          </div>
        </section>

        <KeepExploring current="/on-this-day" />
      </div>
    </main>
  );
}
