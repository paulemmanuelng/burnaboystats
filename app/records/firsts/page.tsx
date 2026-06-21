import Link from "next/link";
import styles from "./firsts.module.css";
import CountUp from "../../components/CountUp";
import { firstGroups } from "../../data/firsts";

export const metadata = {
  title: "Burna Boy Firsts & Records — History-Making Milestones",
  description:
    "Every history-making first and record Burna Boy holds as an African artist — sold-out stadiums, the World Cup, Grammy stage, billions of UK streams and the highest-grossing African tour ever.",
  alternates: { canonical: "/records/firsts" },
};

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
        <div className={styles.summary}>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={30} prefix="$" suffix=".5M" /></span>
            <span className={styles.sumLabel}>Highest-grossing African tour</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={2} suffix="B" /></span>
            <span className={styles.sumLabel}>UK streams · first African</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={6} /></span>
            <span className={styles.sumLabel}>Straight years on the Hot 100</span>
          </div>
        </div>

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
          (Billboard, Pollstar/Boxscore, the BPI and press reporting), as of June
          2026. “African” / “Nigerian” firsts reflect the wording of those
          sources. More milestones are added as they are confirmed.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
