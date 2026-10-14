import type { CSSProperties } from "react";
import styles from "./faq.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileFaq from "../components/MobileFaq";
import { pageMetadata, BURNA_BOY_REAL_NAME } from "../lib/seo";
import { FAQ_TITLE, faqDescription } from "../lib/searchSnippets";
import { albums } from "../data/albums";
import { carCount } from "../data/cars";
import { totalAwards } from "../data/certifications";
import { totalWins } from "../data/awards";
import { GROUPS, faqs } from "../data/faqs";
import { faqP1 } from "../lib/provenanceSpecs";
import Provenance from "../components/Provenance";

// The page Google shows for "burna boy" at position 3.3, and for the real-name
// and albums searches: the title names what those searches ask, and the
// description answers the first of them before counting the rest, every figure
// from the data the answers below are built from.
export const metadata = pageMetadata({
  title: FAQ_TITLE,
  description: faqDescription({
    realName: BURNA_BOY_REAL_NAME,
    albums: albums.length,
    cars: carCount,
    certifications: totalAwards(),
    awardWins: totalWins,
    questions: faqs.length,
  }),
  path: "/faq",
  shareTitle: "Burna Boy FAQ",
  shareDescription: "Quick answers: Grammys, certifications, tours, chart records and more.",
});

// This page types no figures of its own — every number in its answers
// (data/faqs.ts) is imported from certifications, awards, charts, tours and
// cars. So its date is not a fact about this page at all: it is the date of
// the newest verified fact in the data behind it, and `lastUpdated` (the newest
// entry in the updates log) is exactly that date, already computed. It read
// "August 2026" while the newest facts underneath were in September, and until
// 14 Oct 2026 it was a month-only foot note ("…verified against official
// sources as of October 2026"); it is now the hero's P1, to the day:
// "Updated {lastUpdated}" (design review 8 Oct 2026, J1-16, fix 24).
const p1 = faqP1();

const groups = GROUPS.map((g) => ({
  ...g,
  items: faqs.filter((f) => f.g === g.id),
})).filter((g) => g.items.length > 0);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main id="content">
      {/* FAQ structured data — helps Google and AI answer engines lift these answers. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Mobile is screen 08 — a flat list where each question carries its
          own category label, since a phone scrolls past sticky headings. */}
      <MobileFaq
        total={faqs.length}
        chips={groups.map((g) => ({ id: g.id, label: g.title, count: g.items.length }))}
        items={groups.flatMap((g) =>
          g.items.map((f, i) => ({ group: g.title, groupId: i === 0 ? g.id : undefined, q: f.q, a: f.a }))
        )}
        p1={p1}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/faq" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Answer first
            </div>
            <h1 className={styles.h1}>
              Burna Boy <span className="inkText">FAQ</span>
            </h1>
            <p className={styles.lede}>
              Quick, verified answers to the questions people ask most about the African
              Giant — every figure pulled from the same data as the rest of the site.
            </p>
            <Provenance size="p1" {...p1} className={styles.p1Slot} />
          </div>
        </section>

        {/* ── Jump band ──────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          {/* --jump-cols: two even rows of chips between 901 and 1239px
              (faq.module.css), counted from the groups. */}
          <div
            className={`${styles.wide} ${styles.jumpPad}`}
            style={{ "--jump-cols": Math.ceil(groups.length / 2) } as CSSProperties}
          >
            <span className={styles.jumpLabel}>Jump to</span>
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className={styles.jumpChip}>
                {g.title}
                <span className={styles.jumpCount}>{g.items.length}</span>
              </a>
            ))}
            <span className={styles.jumpTotal}>{faqs.length} questions</span>
          </div>
        </section>

        {/* ── Groups ─────────────────────────────────────────── */}
        {groups.map((g) => (
          <section key={g.id} id={g.id} className={styles.band}>
            <div className={`${styles.wide} ${styles.groupPad}`}>
              <div className={styles.groupAside}>
                <div className={styles.groupKicker}>{g.kicker}</div>
                <h2 className={styles.groupTitle}>{g.title}</h2>
                <div className={styles.groupCount}>
                  {g.items.length} {g.items.length === 1 ? "question" : "questions"}
                </div>
              </div>
              <div className={styles.qList}>
                {g.items.map((f) => (
                  <div key={f.q} className={styles.item}>
                    <h3 className={styles.q}>{f.q}</h3>
                    <p className={styles.a}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <KeepExploring current="/faq" />
      </div>
    </main>
  );
}
