import Link from "next/link";
import styles from "./africas-biggest.module.css";
import KeepExploring from "../../components/KeepExploring";
import StatBox from "../../components/StatBox";
import { statBoxes } from "../../data/africasBiggest";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Africa's Biggest Artists — Billboard Global 200 & Streaming Records",
  description:
    "The biggest African artists by the numbers: the top 5 on the Billboard Global 200 (Burna Boy is the first African to hit No. 1), the most-streamed on Spotify each year, monthly-listener peaks and more.",
  path: "/records/africas-biggest",
  shareTitle: "Africa's Biggest Artists",
  shareDescription: "Top African artists on the Billboard Global 200 and Spotify — with Burna Boy in context.",
});

export default function AfricasBiggestPage() {
  const dataset = datasetJsonLd({
    name: "Africa's biggest artists — Billboard, Spotify & chart records",
    description: "Leaderboards of Africa's biggest artists: the top 5 by Billboard Global 200 peak, the most-streamed on Spotify each year, most Billboard Hot 100 entries and more — with Burna Boy in context.",
    path: "/records/africas-biggest",
    keywords: ["most-streamed African artist", "Billboard Global 200", "first African artist Billboard Global 200", "Spotify", "Burna Boy", "Afrobeats", "African music records"],
    variableMeasured: ["Billboard Global 200 peak", "Spotify streams", "Artist", "Year", "Chart entries"],
  });

  // ItemList for the lead leaderboard so search + AI engines read the ranking.
  const globalBox = statBoxes.find((b) => b.id === "billboard-global-200-peak");
  const globalItemList = globalBox && {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 5 African artists by Billboard Global 200 peak",
    numberOfItems: globalBox.entries?.length ?? 0,
    itemListElement: (globalBox.entries ?? []).map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e.name,
    })),
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      {globalItemList && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalItemList) }} />
      )}
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
          The leaderboards below rank African music&apos;s biggest by the numbers.
        </p>

        <div className={styles.boxGrid}>
          {statBoxes.map((box) => (
            <StatBox key={box.id} box={box} />
          ))}
        </div>

        <p className={styles.note}>
          More leaderboards are on the way — most-streamed African song each year,
          most Spotify monthly listeners, biggest streaming debuts and more.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>

      <KeepExploring current="/records/africas-biggest" />
    </main>
  );
}
