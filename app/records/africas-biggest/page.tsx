import Link from "next/link";
import styles from "./africas-biggest.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import StatBox from "../../components/StatBox";
import TrendDelta from "../../components/TrendDelta";
import { statBoxes, HIGHLIGHT, BURNA_HOT_100_ENTRIES_WORD } from "../../data/africasBiggest";
import { monthlyListenersSeries } from "../../data/trends";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";
import MobileAfricasBiggest from "../../components/MobileAfricasBiggest";
import {
  africaBoards,
  boardsHeLeads,
  boardsOthersLead,
  youtubeWorldRank,
} from "../../lib/africaBoards";

const firstListeners = monthlyListenersSeries[0].value;
const latestListeners = monthlyListenersSeries[monthlyListenersSeries.length - 1].value;
const listenersMonthPct = ((latestListeners - firstListeners) / firstListeners) * 100;

// The design draws eight bars showing the climb. The series is logged daily
// rather than monthly, so the last eight readings sit within half a million of
// each other and would draw as a flat block. These are eight readings spaced
// evenly across the whole run — every bar a real logged figure, and the shape
// is the climb the chart is there to show.
const BARS = 8;
const barPoints = Array.from({ length: BARS }, (_, i) =>
  monthlyListenersSeries[
    Math.round((i * (monthlyListenersSeries.length - 1)) / (BARS - 1))
  ]
);
// Bars are drawn against zero, not against the range, so a 25% climb reads as
// a 25% climb.
const barMax = Math.max(...barPoints.map((p) => p.value));
const barDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });

export const metadata = pageMetadata({
  title: "Africa's Biggest Artists — Charts & Streaming Records",
  description:
    "The biggest African artists by the numbers — Billboard Global 200 peaks, most-streamed on Spotify each year and streaming records, with Burna Boy in context.",
  path: "/records/africas-biggest",
  shareTitle: "Africa's Biggest Artists",
  shareDescription: "Top African artists on the Billboard Global 200 and Spotify — with Burna Boy in context.",
});

// Answer-first Q&A targeting the multi-artist searches this page serves, so it
// can win featured snippets / AI answers for "which / highest African artist on
// Billboard / Spotify" queries. Rendered visibly and as FAQPage structured data.
export const pageFaqs = [
  {
    q: "What is the highest-charting African song on the Billboard Global 200?",
    a: "Shakira and Burna Boy's “Dai Dai” — the first and only African song to reach No. 1 on Billboard's US-inclusive Global 200. The next-highest are CKay's “Love Nwantiti” (No. 2), Rema and Selena Gomez's “Calm Down” (No. 3), Tyla's “Water” (No. 9) and Libianca's “People” (No. 20).",
  },
  {
    q: "Which African artists have reached No. 1 on the Billboard Hot 100?",
    a: "Wizkid (“One Dance” with Drake) and Tems (“Wait for U” with Future and Drake) have both topped the Billboard Hot 100 through featured credits. The highest Hot 100 peak for a lead African act is Rema's “Calm Down” at No. 3, ahead of Tyla's “Water” (No. 7) and Burna Boy's “Dai Dai” with Shakira (No. 17). Burna Boy's best featured placing is higher still — “WGFT” with Gunna at No. 16.",
  },
  {
    q: "Which African artist has the most Billboard Hot 100 entries?",
    a: `Burna Boy, with ${BURNA_HOT_100_ENTRIES_WORD.toLowerCase()} career entries — the record for any African act, ahead of Tems (eight) and the South African rock band Seether (seven). Wizkid is next on five, then Tyla and Hugh Masekela tied on four.`,
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

// His all-time YouTube monthly-audience peak — read from the board that ranks
// it, so the stat cell can never drift from the row it summarises.
const youtubePeak =
  statBoxes
    .find((b) => b.id === "youtube-music-audience-peak")
    ?.entries?.find((e) => e.name === HIGHLIGHT)?.value ?? "—";

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

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      {itemLists.map((il, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(il) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Mobile is screen 16 — its own screen, not the shared deep-page
          grammar: each board carries a badge and a note the shared rows have
          nowhere to put. Every figure below is derived, including "he leads":
          the design's mock said 8 of 14, which was true only while the stats
          bot had corrupted the monthly-listeners board.
          `faqs` is not decoration. The FAQPage node above goes out at every
          width but its five answers were rendered only in the `.desktopOnly`
          half below, which is display:none on a phone — so the schema promised
          Googlebot (which renders at phone width) and every phone reader an
          answer this page did not show them. The desktop half cannot simply be
          un-hidden here; the answers had to come to the screen. */}
      <MobileAfricasBiggest
        boards={africaBoards}
        leads={boardsHeLeads}
        others={boardsOthersLead}
        faqs={pageFaqs}
        stats={[
          { value: String(statBoxes.length), label: "Leaderboards", note: "African music" },
          { value: String(boardsHeLeads), label: "He leads", note: `of ${statBoxes.length} boards` },
          { value: "1st", label: "Global 200", note: "first African ever" },
          { value: youtubePeak, label: "YouTube peak", note: `${youtubeWorldRank} worldwide` },
        ]}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/africas-biggest" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>African music by the numbers</div>
          <h1 className={styles.h1}>
            Africa&apos;s <span className="inkText">Biggest</span>
          </h1>
          <p className={styles.intro}>
            Burna Boy is the{" "}
            <strong>first African artist ever to reach No. 1 on Billboard&apos;s Global 200</strong>{" "}
            — and the most-streamed African artist on Spotify in both 2024 and 2025, whose
            1.986 billion streams in 2025 set a record for the biggest streaming year by an
            African artist. The leaderboards below rank African music&apos;s biggest by the
            numbers.
          </p>

          {/* Headline number beside its own recent history. */}
          <div className={styles.trendGrid}>
            <div className={styles.trendMain}>
              <div className={styles.trendKicker}>Spotify monthly listeners · peak</div>
              <div className={styles.trendValueRow}>
                <span className={`${styles.trendValue} inkText`}>{latestListeners}M</span>
                <TrendDelta value={listenersMonthPct} format="pct" label="this month" />
              </div>
              <p className={styles.trendNote}>
                Climbing fast on the “Dai Dai” World Cup run — up from {firstListeners}M at
                the start of July, and the highest of any African artist.
              </p>
            </div>
            <div className={styles.trendChart}>
              <div className={styles.chartLabel}>
                {barDate(barPoints[0].date)} — {barDate(barPoints[barPoints.length - 1].date)}
              </div>
              <div className={styles.bars}>
                {barPoints.map((p, i) => {
                  const now = i === barPoints.length - 1;
                  return (
                    <div key={p.date} className={styles.bar}>
                      <span className={`${styles.barValue} ${now ? styles.barValueNow : ""}`}>
                        {p.value}M
                      </span>
                      <span
                        className={`${styles.barFill} ${now ? styles.barFillNow : ""}`}
                        style={{ height: `${Math.round((p.value / barMax) * 78)}px` }}
                      />
                      <span className={styles.barMonth}>{barDate(p.date)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <nav className={styles.jumpNav} aria-label="Jump to a section">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`}>{g.label}</a>
            ))}
            <a href="#faq">Common questions</a>
          </nav>
        </section>

        {/* ── Leaderboards ───────────────────────────────────── */}
        {groups.map((g) => (
          <section key={g.id} id={g.id} className={`${styles.wrap} ${styles.groupPad}`}>
            <h2 className={styles.groupHead}>
              {g.label} <span className={styles.groupCount}>{g.boxes.length}</span>
            </h2>
            <div className={styles.boxGrid}>
              {g.boxes.map((box) => (
                <StatBox
                  key={box.id}
                  box={box}
                  featured={box.id === "billboard-global-200-peak"}
                />
              ))}
            </div>
          </section>
        ))}

        {/* ── FAQ ────────────────────────────────────────────── */}
        {/* The laptop copy. It stays inside .desktopOnly — this wrapper holds
            the whole desktop page, so un-hiding it the way /music/[song] was
            un-hidden would paint the entire desktop tree on a phone. The phone
            copy is the same `pageFaqs` array, rendered by
            MobileAfricasBiggest at the top of this file, which is what stops
            the FAQPage node above promising a phone reader an answer the page
            withholds. */}
        <section id="faq" className={`${styles.wrap} ${styles.faqPad}`}>
          <h2 className={styles.groupHead}>Common questions</h2>
          <div className={styles.faqList}>
            {pageFaqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Onward ─────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/records" className="btn btnSecondary">← Career records</Link>
          <Link href="/records/charts" className="btn btnPrimary">Official charts ↗</Link>
          <Link href="/music" className="btn btnSecondary">Discography ↗</Link>
        </section>

        <KeepExploring current="/records/africas-biggest" />
      </div>
    </main>
  );
}
