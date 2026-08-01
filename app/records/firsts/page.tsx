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

// The design's curated "headline firsts" — the six a reader opens the page
// for, not simply the six most recent. Sorting the whole set by year returns
// six 2026 entries and buries the Grammy and the Madison Square Garden night.
// The copy is the design's; the figures inside it are checked against
// firsts.ts, tours.ts and tourRevenue.ts.
const headlineFirsts = [
  { year: "2026", title: "First African artist to headline a World Cup final", sub: "“Dai Dai” with Shakira, halftime show" },
  { year: "2024", title: "First African artist to headline a UK stadium", sub: "London Stadium — 58,973 in the room" },
  { year: "2023", title: "Highest-grossing tour by an African artist", sub: "I Told Them… Tour, $30.46M" },
  { year: "2022", title: "First Nigerian to sell out Madison Square Garden", sub: "Space Drift Tour, 13,586 tickets" },
  { year: "2021", title: "Grammy — Best Global Music Album", sub: "Twice as Tall" },
  { year: "2024", title: "First African artist past 2 billion UK streams", sub: "BRIT Billion Award" },
];

export default function FirstsPage() {
  return (
    <main id="content">
      <DeepPage
        backHref="/records"
        backLabel="Firsts"
        badge={String(firstsCount)}
        kicker="Record-breaking"
        titlePre="Firsts & "
        titleGold="records"
        lede={`Forty-nine milestones, from the first African stadium headline to the World Cup final.`}
        stats={[
          { value: String(firstsCount), label: "Milestones" },
          { value: String(firstGroups.length), label: "Categories" },
        ]}
        chips={[
          { label: `All ${firstsCount}`, active: true },
          { label: "Stages" },
          { label: "World stage" },
          { label: "Awards" },
          { label: "Streaming" },
        ]}
        listTitle="The headline firsts"
        listMeta="newest first"
        rows={headlineFirsts.map((f, i) => ({
          rank: f.year,
          title: f.title,
          sub: f.sub,
          value: "",
          highlight: i < 2,
        }))}
        footNote="Only firsts traceable to a primary source are listed. Grouped on the full page into stages, the world stage, awards, streaming and business."
        cta={{ label: `All ${firstsCount} firsts`, href: "#all-firsts" }}
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
