import Link from "next/link";
import styles from "./firsts.module.css";
import KeepExploring from "../../components/KeepExploring";
import CountUp from "../../components/CountUp";
import StatGrid from "../../components/StatGrid";
import DeepPage from "../../components/DeepPage";
import { firstGroups, allFirsts, firstsCount } from "../../data/firsts";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Firsts & Records — History-Making Milestones",
  description:
    "Every history-making first Burna Boy holds as an African artist — sold-out stadiums, the World Cup, the Grammy stage and the highest-grossing tour ever.",
  path: "/records/firsts",
  shareTitle: "Burna Boy Firsts & Records",
  shareDescription: "The history-making milestones of the African Giant.",
});

// The headline firsts: the most recent from each category, then newest first.
//
// Sorting the whole set by year gave six 2026 entries and buried the Grammy,
// the Madison Square Garden sell-out and the first stadium headline — the
// milestones a reader actually came for. One per category keeps the spread
// across stages, world stage, awards and streaming while staying derived.
const headlineFirsts = firstGroups
  .map((g) => [...g.items].sort((a, b) => Number(b.year) - Number(a.year))[0])
  .filter(Boolean)
  .sort((a, b) => Number(b.year) - Number(a.year));

export default function FirstsPage() {
  return (
    <main id="content">
      <DeepPage
        backHref="/records"
        backLabel="Records"
        badge={String(firstsCount)}
        kicker="Record-breaking"
        titlePre="Firsts & "
        titleGold="records"
        lede={`${firstsCount} milestones, from the first African stadium headline to the World Cup final.`}
        stats={[
          { value: String(firstsCount), label: "Milestones" },
          { value: String(firstGroups.length), label: "Categories" },
        ]}
        listTitle="The headline firsts"
        listMeta="newest first"
        rows={headlineFirsts.map((f, i) => ({
          rank: f.year,
          title: f.title,
          sub: f.text,
          value: "",
          highlight: i < 2,
        }))}
        footNote={`Each first is dated to the event itself and cross-checked against the chart, certification or box-office record behind it. Grouped into ${firstGroups.length} categories below.`}
        cta={{ label: "Every milestone", href: "#all-firsts" }}
      />

      <div className="container" id="all-firsts">
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

      <KeepExploring current="/records/firsts" />
    </main>
  );
}
