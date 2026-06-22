import Link from "next/link";
import styles from "./africas-biggest.module.css";
import StatBox from "../../components/StatBox";
import { statBoxes } from "../../data/africasBiggest";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Africa's Biggest — Most-Streamed African Artists by Year (Spotify)",
  description:
    "Who is the most-streamed African artist on Spotify? The year-by-year leaderboard of Africa's biggest artists by global streams — Burna Boy topped 2024 and 2025, with his ~2 billion streams in 2025 a record for an African artist.",
  path: "/records/africas-biggest",
  shareTitle: "Africa's Biggest",
  shareDescription: "Spotify's most-streamed African artists, year by year.",
});

export default function AfricasBiggestPage() {
  return (
    <main id="content">
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
    </main>
  );
}
