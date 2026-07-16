import Link from "next/link";
import styles from "./africas-biggest.module.css";
import KeepExploring from "../../components/KeepExploring";
import StatBox from "../../components/StatBox";
import TrendStat from "../../components/TrendStat";
import { statBoxes } from "../../data/africasBiggest";
import { monthlyListenersSeries, monthlyListenersValues } from "../../data/trends";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";

const firstListeners = monthlyListenersSeries[0].value;
const latestListeners = monthlyListenersSeries[monthlyListenersSeries.length - 1].value;
const listenersMonthPct = ((latestListeners - firstListeners) / firstListeners) * 100;

export const metadata = pageMetadata({
  title: "Africa's Biggest Artists — Billboard Global 200 & Streaming Records",
  description:
    "The biggest African artists by the numbers: the top 5 on the Billboard Global 200 (Burna Boy is the first African to hit No. 1), the most-streamed on Spotify each year, monthly-listener peaks and more.",
  path: "/records/africas-biggest",
  shareTitle: "Africa's Biggest Artists",
  shareDescription: "Top African artists on the Billboard Global 200 and Spotify — with Burna Boy in context.",
});

// Answer-first Q&A targeting the multi-artist searches this page serves, so it
// can win featured snippets / AI answers for "which / highest African artist on
// Billboard / Spotify" queries. Rendered visibly and as FAQPage structured data.
const pageFaqs = [
  {
    q: "What is the highest-charting African song on the Billboard Global 200?",
    a: "Shakira and Burna Boy's “Dai Dai” — the first and only African song to reach No. 1 on Billboard's US-inclusive Global 200. The next-highest are CKay's “Love Nwantiti” (No. 2), Rema and Selena Gomez's “Calm Down” (No. 3), Tyla's “Water” (No. 9) and Libianca's “People” (No. 20).",
  },
  {
    q: "Which African artists have reached No. 1 on the Billboard Hot 100?",
    a: "Wizkid (“One Dance” with Drake) and Tems (“Wait for U” with Future and Drake) have both topped the Billboard Hot 100 through featured credits. The highest Hot 100 peak for a lead African act is Rema's “Calm Down” at No. 3, ahead of Tyla's “Water” (No. 7) and Burna Boy's “WGFT” (No. 16).",
  },
  {
    q: "Which African artist has the most Billboard Hot 100 entries?",
    a: "Burna Boy, with nine career entries — the record for any African act, ahead of Tems (eight) and the South African rock band Seether (seven). Wizkid (five) and Tyla (three) complete the top five.",
  },
  {
    q: "Who is the most-streamed African artist on Spotify?",
    a: "Burna Boy was the most-streamed African artist globally in both 2024 and 2025, and holds the highest Spotify monthly-listener peak of any African artist. Tems, Wizkid, Tyla and Asake also rank among the most-streamed African artists each year.",
  },
  {
    q: "Who was the first African artist to reach No. 1 on the Billboard Global 200?",
    a: "Burna Boy, when “Dai Dai” (with Shakira) topped the chart in July 2026 — no African artist had ever led Billboard's flagship, US-inclusive worldwide chart before.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pageFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AfricasBiggestPage() {
  const dataset = datasetJsonLd({
    name: "Africa's biggest artists — Billboard, Spotify & chart records",
    description: "Leaderboards of Africa's biggest artists: the top 5 by Billboard Global 200 peak, the most-streamed on Spotify each year, most Billboard Hot 100 entries and more — with Burna Boy in context.",
    path: "/records/africas-biggest",
    keywords: ["most-streamed African artist", "highest-charting African song", "African artists Billboard Hot 100", "Billboard Global 200", "first African artist Billboard Global 200", "Burna Boy", "Wizkid", "Tems", "Rema", "Tyla", "Afrobeats records"],
    variableMeasured: ["Billboard Global 200 peak", "Billboard Hot 100 peak", "Spotify streams", "Artist", "Chart entries"],
  });

  // ItemLists for the Billboard peak leaderboards so search + AI read the rankings.
  const itemLists = ["billboard-global-200-peak", "billboard-hot-100-peak"]
    .map((id) => statBoxes.find((b) => b.id === id))
    .filter((b): b is (typeof statBoxes)[number] => !!b?.entries?.length)
    .map((b) => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: b.title,
      numberOfItems: b.entries!.length,
      itemListElement: b.entries!.map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: e.name,
      })),
    }));

  // Group the leaderboards so the long page reads as two clear sections.
  const billboardIds = new Set([
    "billboard-global-200-peak",
    "billboard-hot-100-peak",
    "most-hot-100-entries",
  ]);
  const groups = [
    { id: "billboard", label: "On the Billboard charts", boxes: statBoxes.filter((b) => billboardIds.has(b.id)) },
    { id: "streaming", label: "On streaming", boxes: statBoxes.filter((b) => !billboardIds.has(b.id)) },
  ];

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      {itemLists.map((il, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(il) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="pageHeader container">
        <h1>
          Africa&apos;s <span className="accent">Biggest</span>
        </h1>
        <p>
          The artists topping African music by the numbers — year-by-year
          streaming leaderboards, with Burna Boy in context
        </p>
      </header>

      <div className="container">
        {/* Answer-first intro (helps search + AI answer engines). */}
        <p className={styles.intro}>
          Burna Boy is the <strong>first African artist ever to reach No. 1 on
          Billboard&apos;s Global 200</strong>{" "}— and the most-streamed African
          artist on Spotify in both 2024 and 2025, whose 1.986 billion streams in
          2025 set a record for the biggest streaming year by an African artist.
          The leaderboards below rank African music&apos;s biggest — Burna Boy,
          Wizkid, Tems, Rema, Tyla and more — by the numbers.
        </p>

        <div className={styles.trendLead}>
          <TrendStat
            kicker="Spotify monthly listeners · peak"
            value={`${latestListeners}M`}
            series={monthlyListenersValues}
            delta={listenersMonthPct}
            deltaFormat="pct"
            deltaLabel="this month"
            note="Climbing fast on the “Dai Dai” World Cup run — up from 47.4M at the start of July, and the highest of any African artist."
          />
        </div>

        <nav className={styles.jumpNav} aria-label="Jump to a section">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`}>{g.label}</a>
          ))}
          <a href="#faq">Common questions</a>
        </nav>

        {groups.map((g) => (
          <section key={g.id} id={g.id} className={styles.group}>
            <h2 className={styles.groupHead}>
              {g.label} <span className={styles.groupCount}>{g.boxes.length}</span>
            </h2>
            <div className={styles.boxGrid}>
              {g.boxes.map((box) => (
                <StatBox key={box.id} box={box} featured={box.id === "billboard-global-200-peak"} />
              ))}
            </div>
          </section>
        ))}

        <section id="faq" className={styles.faqSection} aria-label="Common questions">
          <h2 className={styles.groupHead}>Common questions</h2>
          {pageFaqs.map((f) => (
            <div key={f.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </section>

        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>

      <KeepExploring current="/records/africas-biggest" />
    </main>
  );
}
