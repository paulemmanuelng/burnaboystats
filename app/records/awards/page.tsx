import Link from "next/link";
import styles from "./awards.module.css";
import KeepExploring from "../../components/KeepExploring";
import AwardExplorer from "../../components/AwardExplorer";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileAwards from "../../components/MobileAwards";
import { totalWins, totalNominations, ceremonyCount, honours, honourCount, grammyWins, ceremonies } from "../../data/awards";
import { pageMetadata, CANONICAL_ORIGIN } from "../../lib/seo";

export const metadata = pageMetadata({
  // Lead the description with the number: the top query cluster in Search
  // Console is "how many awards does burna boy have (in total)" — high
  // impressions, ~0% CTR — so the snippet must answer it outright.
  title: `Burna Boy Awards: ${totalWins} Wins — Grammy, BET, Headies & AFRIMA`,
  description:
    `Burna Boy has won ${totalWins} awards from ${totalNominations} nominations across ${ceremonyCount} award bodies — a 2021 Grammy, plus BET, BRIT, MOBO, Headies & AFRIMA wins. Every award, filterable.`,
  path: "/records/awards",
  shareTitle: "Burna Boy Awards & Nominations",
  shareDescription: "His Grammy win, BET, BRIT, MOBO, Headies, AFRIMA and more.",
});

// Wins for a named body, derived so the FAQ can never drift from the data.
const winsBy = (name: string) =>
  ceremonies.find((c) => c.name === name)?.noms.filter((n) => n.won).length ?? 0;
const grammyNoms = ceremonies.find((c) => c.name === "Grammy Awards")?.noms.length ?? 0;

// Answer-first Q&A aimed at the exact award questions searchers ask. Kept
// data-driven so a new win updates the answers and the structured data at once.
const faqs: { q: string; a: string }[] = [
  {
    q: "How many awards has Burna Boy won?",
    a: `Burna Boy has won ${totalWins} competitive awards from ${totalNominations} nominations across ${ceremonyCount} award bodies, plus ${honourCount} major honours and special recognitions. His wins include a 2021 Grammy, ${winsBy("BET Awards")} BET Awards, ${winsBy("MOBO Awards")} MOBO Awards, ${winsBy("The Headies")} Headies and ${winsBy("All Africa Music Awards (AFRIMA)")} AFRIMA awards.`,
  },
  {
    q: "How many Grammys does Burna Boy have?",
    a: `Burna Boy has won ${grammyWins} Grammy — Best Global Music Album at the 2021 ceremony, for Twice as Tall — from ${grammyNoms} career Grammy nominations.`,
  },
  {
    q: "Has Burna Boy won a Grammy?",
    a: `Yes. Burna Boy won Best Global Music Album at the 2021 Grammy Awards for Twice as Tall — the first winner of that renamed category — and has ${grammyNoms} Grammy nominations in total.`,
  },
  {
    q: "What are Burna Boy's biggest award wins?",
    a: `His 2021 Grammy for Best Global Music Album is the headline, alongside ${winsBy("BET Awards")} BET Awards, a Billboard Music Award for Top Afrobeats Artist, ${winsBy("MOBO Awards")} MOBO Awards, ${winsBy("The Headies")} Headies and ${winsBy("All Africa Music Awards (AFRIMA)")} AFRIMA awards — ${totalWins} in total.`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_ORIGIN },
    { "@type": "ListItem", position: 2, name: "Career Records", item: `${CANONICAL_ORIGIN}/records` },
    { "@type": "ListItem", position: 3, name: "Awards & Nominations", item: `${CANONICAL_ORIGIN}/records/awards` },
  ],
};

// The six bodies from the design's "most-decorated stages" list. The bodies
// and their figures are derived; SHORT_NAME only shortens what the design
// shortened for the row width ("AFRIMMA", not the full registered name).
const SHORT_NAME: Record<string, string> = {
  "Soundcity MVP Awards Festival": "Soundcity MVP",
  "African Muzik Magazine Awards (AFRIMMA)": "AFRIMMA",
  "All Africa Music Awards (AFRIMA)": "AFRIMA",
  "Nigeria Entertainment Awards": "Nigeria Entertainment",
};

// Every award body, in the design's own order: most wins first, ties broken on
// FEWER nominations — 8 from 12 beats 8 from 22, which is how the design lists
// Soundcity and AFRIMMA. SHORT_NAME only shortens what the design shortened.
const mobileCeremonies = [...ceremonies]
  .map((c) => ({ ...c, name: SHORT_NAME[c.name] ?? c.name }))
  .sort(
    (a, b) =>
      b.noms.filter((n) => n.won).length - a.noms.filter((n) => n.won).length ||
      a.noms.length - b.noms.length
  );

export default function AwardsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Mobile is screen 11 — a nomination ledger, not a summary. Every body,
          every year, every category, won or not, plus the honours block; the
          shared deep-page grammar has one row per item and could not carry it.
          The design's mock shows six bodies because that is what fits a mockup;
          the real screen renders all of them. */}
      <MobileAwards
        ceremonies={mobileCeremonies}
        honours={honours}
        wins={totalWins}
        footNote={`${totalWins} wins from ${totalNominations} nominations across ${ceremonyCount} award bodies, plus ${honourCount} honours & special recognitions — including the 2021 Grammy for Twice as Tall.`}
        stats={[
          { value: String(totalWins), label: "Wins", note: "career total" },
          {
            value: String(totalNominations),
            label: "Nominations",
            note: `${Math.round((totalWins / totalNominations) * 100)}% strike rate`,
          },
          { value: String(ceremonyCount), label: "Award bodies", note: "worldwide" },
          {
            value: String(grammyWins),
            label: grammyWins === 1 ? "Grammy" : "Grammys",
            note: `from ${grammyNoms} noms`,
          },
        ]}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/awards" />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.wide}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              The trophy cabinet
            </div>
            <h1 className={styles.h1}>
              Awards <span className="inkText">&amp; Nominations</span>
            </h1>
            <p className={styles.lede}>
              From the Grammys to the Headies — every win and nod, verified. A 2021 Grammy
              for <em>Twice as Tall</em>, {winsBy("BET Awards")} BET Awards,{" "}
              {winsBy("MOBO Awards")} MOBO Awards, {winsBy("The Headies")} Headies and{" "}
              {winsBy("All Africa Music Awards (AFRIMA)")} AFRIMA awards, across{" "}
              {ceremonyCount} award bodies.
            </p>
            <div className={styles.heroActions}>
              <Link href="/records/visualized#awards" className="btn btnSecondary">
                See wins by award body →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Headline strip ───────────────────────────────────── */}
        <section className={styles.headlineBand}>
          <div className={styles.headlineGrid}>
            <div className={styles.headlineCell}>
              <div className={`${styles.headlineValue} ${styles.winInk}`}>{grammyWins}</div>
              <div className={styles.headlineLabel}>
                Grammy {grammyWins === 1 ? "win" : "wins"}
              </div>
            </div>
            <div className={styles.headlineCell}>
              <div className={styles.headlineValue}>{totalWins}</div>
              <div className={styles.headlineLabel}>Award wins</div>
            </div>
            <div className={styles.headlineCell}>
              <div className={styles.headlineValue}>{ceremonyCount}</div>
              <div className={styles.headlineLabel}>Award bodies</div>
            </div>
            <div className={styles.headlineCell}>
              <div className={styles.headlineValue}>{honourCount}</div>
              <div className={styles.headlineLabel}>Honours &amp; recognitions</div>
            </div>
          </div>
        </section>

        {/* ── Filters + ceremonies ─────────────────────────────── */}
        <div id="award-explorer">
          <AwardExplorer />
        </div>

        {/* ── Honours ──────────────────────────────────────────── */}
        <section className={styles.honoursBand}>
          <div className={styles.wide}>
            <h2 className={styles.h2}>
              <span className="inkText">Honours &amp; special recognitions</span>
            </h2>
            <div className={styles.honourGrid}>
              {/* The note stays. Two BRIT Billion Awards share a title, an
                  org and a year — one for 1bn UK streams, one for 2bn — so
                  without it they render as two identical cards. */}
              {honours.map((h, i) => (
                <div key={`${h.title}-${h.year}-${i}`} className={styles.honourCard}>
                  <span className={styles.honourTitle}>{h.title}</span>
                  <span className={styles.honourOrg}>{h.org} · {h.year}</span>
                  {h.note && <span className={styles.honourNote}>{h.note}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className={styles.faqBand}>
          <div className={styles.wide}>
            <h2 className={styles.h2}>
              <span className="inkText">How many awards has Burna Boy won?</span>
            </h2>
            <div className={styles.faqGrid}>
              {faqs.map((f) => (
                <div key={f.q} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{f.q}</h3>
                  <p className={styles.faqA}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Source ───────────────────────────────────────────── */}
        <section className={styles.sourceBand}>
          <div className={styles.wide}>
            <p className={styles.source}>
              Includes a 2021 Grammy win (Best Global Music Album, <em>Twice as Tall</em>)
              and {grammyNoms} Grammy nominations in total. Compiled and verified against
              each ceremony&apos;s results, August 2026; nominations are listed even where the
              award went elsewhere. Nominations at ceremonies still to be held stay listed
              as nominations until the results are confirmed.
            </p>
            <Link href="/records" className={`btn btnSecondary ${styles.back}`}>
              ← Career Records
            </Link>
          </div>
        </section>

        <KeepExploring current="/records/awards" />
      </div>
    </main>
  );
}
