import Link from "next/link";
import styles from "./africas-biggest.module.css";
import KeepExploring from "../../components/KeepExploring";
import StatBox from "../../components/StatBox";
import { statBoxes } from "../../data/africasBiggest";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Africa's Biggest — Most-Streamed African Artists by Year (Spotify)",
  description:
    "Africa's biggest artists on Spotify — most-streamed by year, monthly-listener peaks and more, with Burna Boy leading nearly every leaderboard.",
  path: "/records/africas-biggest",
  shareTitle: "Africa's Biggest",
  shareDescription: "Spotify's most-streamed African artists, year by year.",
});

export default function AfricasBiggestPage() {
  const dataset = datasetJsonLd({
    name: "Africa's biggest artists — Spotify streaming & chart records",
    description: "Year-by-year leaderboards of the most-streamed African artists on Spotify, plus records like most Billboard Hot 100 entries and most songs over 200M Spotify streams — with Burna Boy in context.",
    path: "/records/africas-biggest",
    keywords: ["most-streamed African artist", "Spotify", "Burna Boy", "Afrobeats streaming", "Billboard Hot 100", "African music records"],
    variableMeasured: ["Spotify streams", "Artist", "Year", "Chart entries"],
  });
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
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
          Burna Boy was the <strong>most-streamed African artist on Spotify
          globally</strong> in both 2024 and 2025 — and his 1.986 billion streams
          in 2025 set a record for the biggest streaming year ever by an African
          artist. The leaderboards below track who tops African music each year.
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
