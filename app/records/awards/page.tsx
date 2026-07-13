import Link from "next/link";
import styles from "./awards.module.css";
import CountUp from "../../components/CountUp";
import StatGrid from "../../components/StatGrid";
import AwardExplorer from "../../components/AwardExplorer";
import { totalWins, totalNominations, ceremonyCount, honours, honourCount } from "../../data/awards";
import { pageMetadata } from "../../lib/seo";

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
        <StatGrid
          stats={[
            { num: <CountUp end={totalWins} />, label: "Competitive wins" },
            { num: <CountUp end={totalNominations} />, label: "Total nominations" },
            { num: <CountUp end={ceremonyCount} />, label: "Award bodies" },
            { num: <CountUp end={honourCount} />, label: "Honours & recognitions" },
          ]}
        />

        <p className="lead" style={{ margin: "22px auto 0", textAlign: "center" }}>
          Burna Boy has won {totalWins} competitive awards from {totalNominations} nominations
          across {ceremonyCount} award bodies — plus {honourCount} major honours and special
          recognitions — including a 2021 Grammy (Best Global Music Album for <em>Twice as
          Tall</em>), 4 BET Awards, 3 MOBO Awards, 9 Headies and 7 AFRIMA awards.
        </p>

        <div style={{ margin: "8px 0 36px" }}>
          <Link href="/records/visualized#awards" className="btn btnSecondary">
            See wins by award body →
          </Link>
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
          each ceremony&apos;s results, July 2026; nominations are listed even
          where the award went elsewhere. Upcoming-ceremony entries are added
          only once results are confirmed.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
