import Link from "next/link";
import styles from "./awards.module.css";
import CountUp from "../../components/CountUp";
import AwardExplorer from "../../components/AwardExplorer";
import { totalWins, totalNominations, ceremonyCount } from "../../data/awards";

export const metadata = {
  title: "Burna Boy Awards & Nominations — Grammy, BET, Headies, AFRIMA & more",
  description:
    "Every award and nomination Burna Boy has received — his Grammy win, BET Awards, BRIT, MOBO, Headies, AFRIMA and more. Filter by wins or nominations.",
  alternates: { canonical: "/records/awards" },
};

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

        <AwardExplorer />

        <p className={styles.source}>
          Includes a 2021 Grammy win (Best Global Music Album, <em>Twice as Tall</em>)
          and twelve Grammy nominations in total. Compiled and verified against
          each ceremony&apos;s results, June 2026; nominations are listed even
          where the award went elsewhere. Upcoming-ceremony entries are added
          only once results are confirmed.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
