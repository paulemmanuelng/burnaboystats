import Link from "next/link";
import styles from "./firsts.module.css";
import CountUp from "../../components/CountUp";
import StatGrid from "../../components/StatGrid";
import { firstGroups } from "../../data/firsts";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Firsts & Records — History-Making Milestones",
  description:
    "Every history-making first Burna Boy holds as an African artist — sold-out stadiums, the World Cup, the Grammy stage and the highest-grossing tour ever.",
  path: "/records/firsts",
  shareTitle: "Burna Boy Firsts & Records",
  shareDescription: "The history-making milestones of the African Giant.",
});

export default function FirstsPage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Firsts <span className="accent">&amp; Records</span>
        </h1>
        <p>The history Burna Boy made for African music — every milestone, verified</p>
      </header>

      <div className="container">
        <StatGrid
          stats={[
            { num: <CountUp end={30} prefix="$" suffix=".5M" />, label: "Highest-grossing African tour" },
            { num: <CountUp end={2} suffix="B" />, label: "UK streams · first African" },
            { num: <CountUp end={6} />, label: "Straight years on the Hot 100" },
          ]}
        />

        {firstGroups.map((g) => (
          <div key={g.label}>
            <h2 className={`secTitle ${styles.group}`}>
              <span className="goldText">{g.label}</span>{" "}
              <span className={styles.count}>({g.items.length})</span>
            </h2>
            <div className={styles.list}>
              {g.items.map((f) => (
                <div key={f.title} className={styles.row}>
                  <span className={styles.year}>{f.year}</span>
                  <div>
                    <h3 className={styles.title}>{f.title}</h3>
                    <p className={styles.text}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className={styles.source}>
          Every milestone here was cross-checked against multiple sources
          (Billboard, Pollstar/Boxscore, the BPI and press reporting), as of
          July 2026. “African” / “Nigerian” firsts reflect the wording of those
          sources. More milestones are added as they are confirmed.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
