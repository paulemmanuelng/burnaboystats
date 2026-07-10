import Link from "next/link";
import styles from "./byTheNumbers.module.css";
import KeepExploring from "../../components/KeepExploring";
import { pageMetadata, datasetJsonLd, CANONICAL_ORIGIN } from "../../lib/seo";
import { totalAwards, countryCount } from "../../data/certifications";
import { totalWins } from "../../data/awards";
import { numberOnes, chartCountryCount } from "../../data/charts";
import { countryCount as performedCountryCount } from "../../data/performedCountries";
import { albums } from "../../data/albums";

const editionYear = new Date().getFullYear();
const asOf = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

export const metadata = pageMetadata({
  title: `Burna Boy by the Numbers (${editionYear}) — Every Career Stat`,
  description: `Burna Boy's career in numbers, ${asOf}: ${totalAwards()} certifications across ${countryCount} countries, ${totalWins} award wins, ${numberOnes} No. 1 chart placements, the $30.46M highest-grossing African tour and more — fact-checked in one place.`,
  path: "/records/by-the-numbers",
  shareTitle: "Burna Boy by the Numbers",
  shareDescription: "The African Giant's whole career, in the stats that matter.",
});

// Each stat is a standalone, quotable fact linking to the page that proves it.
const stats: { num: string; label: string; sub: string; href: string }[] = [
  { num: `${totalAwards()}`, label: "Certifications", sub: `across ${countryCount} countries — most of any African artist`, href: "/certifications" },
  { num: `${totalWins}`, label: "Award wins", sub: "including a 2021 Grammy, plus BET, MOBO, Headies & AFRIMA wins", href: "/records/awards" },
  { num: `${numberOnes}`, label: "No. 1 chart placements", sub: `on official national charts, part of ${chartCountryCount} charting countries in all`, href: "/records/charts" },
  { num: "$30.46M", label: "Highest-grossing African tour", sub: "the I Told Them… Tour — a world record for an African act", href: "/records/tours" },
  { num: "$6.15M", label: "Biggest concert by an African artist", sub: "London Stadium, June 2024 — 58,973 fans", href: "/records/tours" },
  { num: "9", label: "Billboard Hot 100 entries", sub: "the most by any African artist, six years running", href: "/records/charts" },
  { num: "50M+", label: "Spotify monthly listeners", sub: "the first African artist ever to reach 50 million", href: "/records/africas-biggest" },
  // 662M figure is kept in sync with the YouTube Music leaderboard on data/africasBiggest.ts.
  { num: "662M", label: "YouTube Music monthly audience", sub: "the highest peak of any African artist", href: "/records/africas-biggest" },
  { num: "2B+", label: "UK streams", sub: "the first African artist to pass two billion", href: "/records/firsts" },
  { num: `${performedCountryCount}`, label: "Countries performed in", sub: "live shows on every inhabited continent", href: "/records/tours/map" },
  { num: `${albums.length}`, label: "Studio albums", sub: "from L.I.F.E (2013) to No Sign of Weakness (2025)", href: "/music" },
  { num: "1st", label: "African artist to headline a World Cup opening", sub: "the 2026 FIFA World Cup, performing “Dai Dai” with Shakira", href: "/records/firsts" },
];

const pageUrl = `${CANONICAL_ORIGIN}/records/by-the-numbers`;
const shareText = `Burna Boy by the numbers: ${totalAwards()} certifications, ${totalWins} award wins, ${numberOnes} No.1s and the biggest tour in African history 🇳🇬`;
const shareLinks = [
  { name: "Share on X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}` },
  { name: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}` },
  { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}` },
];

const jsonLd = datasetJsonLd({
  name: `Burna Boy by the Numbers (${editionYear})`,
  description: `Key career statistics for Burna Boy as of ${asOf}: certifications, award wins, chart No. 1s, tour grosses, streaming milestones and more.`,
  path: "/records/by-the-numbers",
  keywords: ["Burna Boy", "Burna Boy stats", "Burna Boy records", "certifications", "awards", "chart records", "African music"],
  variableMeasured: stats.map((s) => s.label),
});

export default function ByTheNumbersPage() {
  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="pageHeader container">
        <h1>
          Burna Boy <span className="accent">by the Numbers</span>
        </h1>
        <p>The African Giant&apos;s whole career, in the stats that matter — {editionYear} edition</p>
      </header>

      <div className="container">
        <p className="lead" style={{ margin: "0 auto 8px", textAlign: "center" }}>
          As of {asOf}, Burna Boy has {totalAwards()} music certifications across{" "}
          {countryCount} countries, {totalWins} award wins including a Grammy, and{" "}
          {numberOnes} No. 1 chart placements — plus the highest-grossing tour ($30.46M)
          and biggest single concert ($6.15M) by any African artist in history.
        </p>

        <div className={styles.grid}>
          {stats.map((s) => (
            <Link key={s.label} href={s.href} className={styles.stat}>
              <span className={styles.num}>{s.num}</span>
              <span className={styles.label}>{s.label}</span>
              <span className={styles.sub}>{s.sub}</span>
            </Link>
          ))}
        </div>

        <div className={styles.shareRow}>
          <span className={styles.shareLabel}>Share these stats</span>
          <div className={styles.shareBtns}>
            {shareLinks.map((l) => (
              <a
                key={l.name}
                className={styles.shareBtn}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.name} ↗
              </a>
            ))}
          </div>
        </div>

        <p className={styles.source}>
          Every figure links to the page that documents it, each fact-checked against
          official sources (RIAA, BPI, SNEP, Billboard, Official Charts, Pollstar and
          more) and kept current. Last updated {asOf}.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>

      <KeepExploring current="/records/by-the-numbers" />
    </main>
  );
}
