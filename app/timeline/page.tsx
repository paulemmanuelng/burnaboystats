import Link from "next/link";
import styles from "./timeline.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import MobileMenuButton from "../components/MobileMenuButton";
import BackLink from "../components/BackLink";
import { pageMetadata, CANONICAL_ORIGIN } from "../lib/seo";
import { timelineEras, timelineEntryCount } from "../data/timeline";
import { totalAwards, countryCount } from "../data/certifications";
import { numberOnes, chartCountryCount } from "../data/charts";

export const metadata = pageMetadata({
  title: "Burna Boy Career Timeline — 2010 to Today",
  description:
    "Burna Boy's full career, year by year: from Port Harcourt mixtapes to the Grammy, the UK No. 1 album, stadium firsts and the 2026 World Cup Final halftime show.",
  path: "/timeline",
  shareTitle: "Burna Boy — The Career Timeline",
  shareDescription: "From Port Harcourt to the World Cup Final, dated and sourced.",
});

// The badge colours group entries by what kind of milestone they are.
const KIND_LABELS: Record<string, string> = {
  album: "Album",
  milestone: "First",
  award: "Award",
  tour: "Live",
  chart: "Charts",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_ORIGIN },
    { "@type": "ListItem", position: 2, name: "Career Timeline", item: `${CANONICAL_ORIGIN}/timeline` },
  ],
};

// The closing band derives live from the data, same as the homepage — the
// timeline's "today" can never drift from the rest of the site.
const today = [
  { v: String(totalAwards()), l: `certifications · ${countryCount} countries`, href: "/certifications" },
  { v: String(numberOnes), l: `No. 1s · ${chartCountryCount} countries charted`, href: "/records/charts" },
  { v: "$30.46M", l: "the record tour", href: "/records/tours" },
];

export default function TimelinePage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className={styles.mobileBackBar}>
        <BackLink href="/" aria-label="Back home" className={styles.mobileBackBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.mobileBackLabel}>Career timeline</span>
        <MobileMenuButton />
      </div>

      <div className={styles.desktopCrumbs}>
        <BreadcrumbBar path="/timeline" />
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          Est. 2010 · {timelineEntryCount} dated milestones
        </div>
        <h1 className={styles.h1}>
          The Career <span className="inkText">Timeline</span>
        </h1>
        <p className={styles.lede}>
          From Port Harcourt mixtapes to the World Cup Final halftime show — sixteen years,
          era by era, every milestone dated and linked to the page that holds the working.
        </p>
        {/* Era jump list — real anchors, so it works without JS. */}
        <nav className={styles.jumpRow} aria-label="Jump to an era">
          {timelineEras.map((era, i) => (
            <a key={era.name} href={`#era-${i}`} className={styles.jumpChip}>
              {era.span}
            </a>
          ))}
        </nav>
      </section>

      {/* ── The eras ─────────────────────────────────────────── */}
      {timelineEras.map((era, i) => (
        <section key={era.name} id={`era-${i}`} className={styles.era} aria-labelledby={`era-h-${i}`}>
          <div className={styles.eraHead}>
            <div className={styles.eraSpan}>{era.span}</div>
            <h2 id={`era-h-${i}`} className={styles.eraName}>{era.name}</h2>
            <p className={styles.eraIntro}>{era.intro}</p>
          </div>
          <div className={styles.spine}>
            {era.entries.map((e) => {
              const body = (
                <>
                  <span className={styles.dot} aria-hidden="true" />
                  <div className={styles.entryDate}>{e.date}</div>
                  <div className={styles.entryMain}>
                    <div className={styles.entryTop}>
                      <h3 className={styles.entryTitle}>{e.title}</h3>
                      <span className={`${styles.kind} ${styles[`kind_${e.kind}`]}`}>{KIND_LABELS[e.kind]}</span>
                    </div>
                    <p className={styles.entryText}>{e.text}</p>
                    {e.href && <span className={styles.entryMore}>See the record →</span>}
                  </div>
                </>
              );
              return e.href ? (
                <Link key={e.date + e.title} href={e.href} className={`${styles.entry} ${styles.entryLinked}`}>
                  {body}
                </Link>
              ) : (
                <div key={e.date + e.title} className={styles.entry}>{body}</div>
              );
            })}
          </div>
        </section>
      ))}

      {/* ── Today ────────────────────────────────────────────── */}
      <section className={styles.today} aria-labelledby="timeline-today">
        <div className={styles.todayKicker}>Still counting</div>
        <h2 id="timeline-today" className={styles.todayTitle}>Where it stands today</h2>
        <div className={styles.todayGrid}>
          {today.map((t) => (
            <Link key={t.l} href={t.href} className={styles.todayCell}>
              <span className={styles.todayValue}>{t.v}</span>
              <span className={styles.todayLabel}>{t.l}</span>
            </Link>
          ))}
        </div>
        <p className={styles.todayNote}>
          Figures update with the data — see the <Link href="/updates">latest updates</Link> for
          what changed this week.
        </p>
      </section>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/timeline" />
      </div>
    </main>
  );
}
