import Link from "next/link";
import styles from "./certifications.module.css";
import Equalizer from "../components/Equalizer";
import CountUp from "../components/CountUp";
import CertExplorer from "../components/CertExplorer";
import CertHistoryByYear from "../components/CertHistoryByYear";
import KeepExploring from "../components/KeepExploring";
import { siteUrl } from "../site";
import {
  COUNTRIES, albums, singles, features, certHistory,
  totalAwards, certifiedReleaseCount, countryCount,
} from "../data/certifications";
import { pageMetadata, datasetJsonLd } from "../lib/seo";

export const metadata = pageMetadata({
  title: `Burna Boy Certifications — ${totalAwards()} Awards Across ${countryCount} Countries`,
  description:
    `${totalAwards()} Silver, Gold, Platinum and Diamond certifications across ${countryCount} countries — filter by tier, country or year.`,
  path: "/certifications",
  shareTitle: "Burna Boy Certifications — Every Silver, Gold, Platinum & Diamond",
  shareDescription: "Every certified Burna Boy song and album across 22 countries.",
});

const total = totalAwards();

const certJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Certifications", item: `${siteUrl}/certifications` },
  ],
};

const certDataset = datasetJsonLd({
  name: "Burna Boy music certifications",
  description: `Every Silver, Gold, Platinum and Diamond certification for Burna Boy's songs and albums — ${total} awards across ${countryCount} countries (RIAA, BPI, SNEP and more).`,
  path: "/certifications",
  keywords: ["Burna Boy", "certifications", "RIAA", "BPI", "Gold", "Platinum", "Diamond", "music sales"],
  variableMeasured: ["Certification level", "Country", "Release"],
});

export default function CertificationsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certDataset) }} />
      <header className="pageHeader container">
        <h1>
          Global <span className="accent">Certifications</span>
        </h1>
        <p>Every Burna Boy album &amp; single certified around the world</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 22, height: 24 }}>
          <Equalizer bars={11} />
        </div>
      </header>

      <div className="container">
        {/* LIVE SUMMARY */}
        <div className={styles.summary}>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={total} /></span>
            <span className={styles.sumLabel}>Total certifications</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={countryCount} /></span>
            <span className={styles.sumLabel}>Countries</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={certifiedReleaseCount} /></span>
            <span className={styles.sumLabel}>Certified releases</span>
          </div>
        </div>

        <p className="lead" style={{ margin: "22px auto 0", textAlign: "center" }}>
          Burna Boy has {total} music certifications across {countryCount} countries —
          Silver, Gold, Platinum and Diamond awards from bodies including the RIAA
          (US), BPI (UK), SNEP (France) and Music Canada, making him the most-certified
          African artist in history.
        </p>

        <div style={{ margin: "8px 0 36px" }}>
          <Link href="/records/visualized#certifications" className="btn btnSecondary">
            See certifications by country →
          </Link>
        </div>

        {/* INTERACTIVE FILTER + RESULTS */}
        <CertExplorer
          albums={albums}
          singles={singles}
          features={features}
          countries={COUNTRIES}
        />

        <CertHistoryByYear history={certHistory} countries={COUNTRIES} />

        <p className={styles.source}>
          Sources: RIAA (US), BPI (UK), Music Canada, SNEP (France), BVMI
          (Germany), FIMI (Italy), BEA (Belgium), GLF (Sweden), NVPI
          (Netherlands), ARIA (Australia), RMNZ (New Zealand), Promusicae (Spain),
          IFPI (Denmark, Norway, Switzerland, Austria), ZPAV (Poland), AFP
          (Portugal), RiSA (South Africa), TCSN (Nigeria) and Pro-Música Brasil —
          cross-checked against Wikipedia&apos;s cited certification tables, as of
          July 2026. Each card shows a song&apos;s current level in every country;
          “×” denotes multi-platinum.
        </p>
      </div>

      <KeepExploring current="/certifications" />
    </main>
  );
}
