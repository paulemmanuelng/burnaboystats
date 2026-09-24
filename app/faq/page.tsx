import styles from "./faq.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileFaq from "../components/MobileFaq";
import { pageMetadata } from "../lib/seo";
import { GROUPS, faqs } from "../data/faqs";
import { lastUpdated } from "../lib/api";

export const metadata = pageMetadata({
  title: "Burna Boy FAQ — Grammys, Certifications, Records & Stats",
  description:
    "Quick answers to the most-asked questions about Burna Boy — Grammys, certifications, his highest-grossing tour, Hot 100 entries and more.",
  path: "/faq",
  shareTitle: "Burna Boy FAQ",
  shareDescription: "Quick answers: Grammys, certifications, tours, chart records and more.",
});

// This page types no figures of its own — every number in its answers
// (data/faqs.ts) is imported from certifications, awards, charts, tours and
// cars. So its "as of" is not a fact about this page at all: it is the date of
// the newest verified fact in the data behind it, and `lastUpdated` (the newest
// entry in the updates log) is exactly that date, already computed. It read
// "August 2026" while the newest facts underneath were a Premios Juventud win
// read at the ceremony's own account and an Austrian Platinum read in IFPI
// Austria's Gold & Platin database, both in September. Derived here so it can
// never fall behind the figures it is stamping — and, unlike a build-clock
// date, it cannot run ahead of them either.
const SOURCE_NOTE = `Figures stay in sync with the site's certifications, charts, awards and tours data, verified against official sources as of ${new Date(
  `${lastUpdated}T12:00:00Z`
).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" })}.`;

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
        source={SOURCE_NOTE}
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
          </div>
        </section>

        {/* ── Jump band ──────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.jumpPad}`}>
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

        {/* ── Source ─────────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.sourcePad}`}>
            <p className={styles.source}>{SOURCE_NOTE}</p>
          </div>
        </section>

        <KeepExploring current="/faq" />
      </div>
    </main>
  );
}
