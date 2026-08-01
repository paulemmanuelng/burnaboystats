import Link from "next/link";
import styles from "./awards.module.css";
import KeepExploring from "../../components/KeepExploring";
import CountUp from "../../components/CountUp";
import StatGrid from "../../components/StatGrid";
import AwardExplorer from "../../components/AwardExplorer";
import DeepPage from "../../components/DeepPage";
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

const topBodies = [...ceremonies]
  .map((c) => ({
    name: SHORT_NAME[c.name] ?? c.name,
    wins: c.noms.filter((n) => n.won).length,
    noms: c.noms.length,
  }))
  // Ties break on FEWER nominations — 8 from 12 beats 8 from 22, which is the
  // order the design lists Soundcity and AFRIMMA in.
  .sort((a, b) => b.wins - a.wins || a.noms - b.noms)
  .slice(0, 6);

const mostWins = topBodies[0]?.wins ?? 1;
const winRate = Math.round((totalWins / totalNominations) * 100);

export default function AwardsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <DeepPage
        backHref="/records"
        backLabel="Awards"
        badge={`${totalWins} wins`}
        kicker="Decorated"
        titlePre="Awards & "
        titleGold="nominations"
        lede={`${totalWins} wins from ${totalNominations} nominations across ${ceremonyCount} award bodies — including a 2021 Grammy.`}
        stats={[
          { value: String(grammyWins), label: "Grammy win" },
          { value: String(grammyNoms), label: "Grammy noms" },
          { value: String(ceremonyCount), label: "Award bodies" },
        ]}
        chips={[
          { label: "All", active: true },
          { label: "Wins only" },
          { label: "Nominations" },
        ]}
        listTitle="Most-decorated stages"
        listMeta="top 6 by wins"
        rows={topBodies.map((b, i) => ({
          rank: String(i + 1).padStart(2, "0"),
          title: b.name,
          sub: `${b.noms} nominations`,
          value: String(b.wins),
          bar: b.wins / mostWins,
          highlight: i < 2,
        }))}
        footNote={`Wins and nominations from each body's own winners list. A ${winRate}% career strike rate. Honours like the MFR and TIME 100 are listed separately, not counted here.`}
        cta={{ label: "Every award", href: "#award-explorer" }}
      />

      <div className="container">
        <div style={{ margin: "8px 0 36px" }}>
          <Link href="/records/visualized#awards" className="btn btnSecondary">
            See wins by award body →
          </Link>
        </div>

        <div id="award-explorer">
          <AwardExplorer />
        </div>

        <section className={styles.honours}>
          <h2 className={`secTitle ${styles.group}`}>
            <span className="goldText">Honours &amp; Special Recognitions</span>
          </h2>
          <div className={styles.honourGrid}>
            {honours.map((h, i) => (
              <div key={i} className={styles.honourCard}>
                <span className={styles.honourTitle}>{h.title}</span>
                <span className={styles.honourOrg}>{h.org} · {h.year}</span>
                {h.note && <span className={styles.honourNote}>{h.note}</span>}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="awards-faq">
          <h2 id="awards-faq" className={`secTitle ${styles.faqTitle}`}>
            <span className="goldText">How many awards has Burna Boy won?</span>
          </h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className={styles.source}>
          Includes a 2021 Grammy win (Best Global Music Album, <em>Twice as Tall</em>)
          and thirteen Grammy nominations in total. Compiled and verified against
          each ceremony&apos;s results, July 2026; nominations are listed even
          where the award went elsewhere. Upcoming-ceremony entries are added
          only once results are confirmed.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>

      <KeepExploring current="/records/awards" />
    </main>
  );
}
