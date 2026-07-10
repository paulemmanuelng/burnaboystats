import Link from "next/link";
import styles from "./awards.module.css";
import CountUp from "../../components/CountUp";
import AwardExplorer from "../../components/AwardExplorer";
import RankedBars, { type BarItem } from "../../components/RankedBars";
import { totalWins, totalNominations, ceremonyCount, honours, ceremonies } from "../../data/awards";
import { pageMetadata } from "../../lib/seo";

// Prefer a body's parenthetical abbreviation (AFRIMMA, AFRIMA…) for the chart.
const shortName = (name: string) => name.match(/\(([^)]+)\)/)?.[1] ?? name;

const winsByBody: BarItem[] = ceremonies
  .map((c) => ({ name: c.name, wins: c.noms.filter((n) => n.won).length }))
  .filter((c) => c.wins > 0)
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 10)
  .map((c) => ({ name: shortName(c.name), value: c.wins, displayValue: `${c.wins}` }));

export const metadata = pageMetadata({
  title: `Burna Boy Awards: ${totalWins} Wins — Grammy, BET, Headies & AFRIMA`,
  description:
    "Every award and nomination Burna Boy has received — his Grammy win, BET Awards, BRIT, MOBO, Headies, AFRIMA and more. Filter by wins or nominations.",
  path: "/records/awards",
  shareTitle: "Burna Boy Awards & Nominations",
  shareDescription: "His Grammy win, BET, BRIT, MOBO, Headies, AFRIMA and more.",
});

export default function AwardsPage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Awards <span className="accent">&amp; Nominations</span>
        </h1>
        <p>From the Grammys to the Headies — every win and nod, verified</p>
      </header>

      <div className="container">
        <div className={styles.summary}>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={totalWins} /></span>
            <span className={styles.sumLabel}>Awards won</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={totalNominations} /></span>
            <span className={styles.sumLabel}>Total nominations</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={ceremonyCount} /></span>
            <span className={styles.sumLabel}>Award bodies</span>
          </div>
        </div>

        <p className="lead" style={{ margin: "22px auto 0", textAlign: "center" }}>
          Burna Boy has won {totalWins} awards from {totalNominations} nominations
          across {ceremonyCount} award bodies — including a 2021 Grammy (Best Global
          Music Album for <em>Twice as Tall</em>), 4 BET Awards, 3 MOBO Awards, 9
          Headies and 7 AFRIMA awards.
        </p>

        <section style={{ margin: "40px 0" }}>
          <p className="eyebrow">Most-decorated stages</p>
          <RankedBars items={winsByBody} ariaLabel="Burna Boy's award wins by award body — the top 10" />
          <p style={{ marginTop: 16, fontSize: "0.82rem", color: "var(--text-muted)", maxWidth: "62ch", lineHeight: 1.5 }}>
            Where the {totalWins} wins come from — his top 10 award bodies by number of trophies. The Grammy, BET Awards and MOBOs sit alongside a deep African-awards haul.
          </p>
        </section>

        <AwardExplorer />

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

        <p className={styles.source}>
          Includes a 2021 Grammy win (Best Global Music Album, <em>Twice as Tall</em>)
          and thirteen Grammy nominations in total. Compiled and verified against
          each ceremony&apos;s results, July 2026; nominations are listed even
          where the award went elsewhere. Upcoming-ceremony entries are added
          only once results are confirmed.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
