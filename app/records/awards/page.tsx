import Link from "next/link";
import styles from "./awards.module.css";
import CountUp from "../../components/CountUp";
import AwardExplorer from "../../components/AwardExplorer";
import { totalWins, totalNominations, ceremonyCount, honours } from "../../data/awards";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Awards & Nominations — Grammy, BET, Headies, AFRIMA & more",
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
          each ceremony&apos;s results, June 2026; nominations are listed even
          where the award went elsewhere. Upcoming-ceremony entries are added
          only once results are confirmed.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
