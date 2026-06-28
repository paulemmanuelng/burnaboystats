import styles from "./certifications.module.css";
import Equalizer from "../components/Equalizer";
import CountUp from "../components/CountUp";
import CertExplorer from "../components/CertExplorer";
import KeepExploring from "../components/KeepExploring";
import { siteUrl } from "../site";
import {
  COUNTRIES, albums, singles, features,
  totalAwards, certifiedReleaseCount, countryCount,
} from "../data/certifications";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Certifications — Gold, Platinum & Diamond Awards Worldwide",
  description:
    "The complete list of Burna Boy's music certifications — 160+ Gold, Platinum and Diamond awards across 22 countries (RIAA, BPI, SNEP, Music Canada, RMNZ, TCSN and more). Filter by country or tier.",
  path: "/certifications",
  shareTitle: "Burna Boy Certifications — Every Gold, Platinum & Diamond",
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

export default function CertificationsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certJsonLd) }} />
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

        {/* INTERACTIVE FILTER + RESULTS */}
        <CertExplorer
          albums={albums}
          singles={singles}
          features={features}
          countries={COUNTRIES}
        />

        <p className={styles.source}>
          Sources: RIAA (US), BPI (UK), Music Canada, SNEP (France), BVMI
          (Germany), FIMI (Italy), BEA (Belgium), GLF (Sweden), NVPI
          (Netherlands), ARIA (Australia), RMNZ (New Zealand), Promusicae (Spain),
          IFPI (Denmark, Norway, Switzerland, Austria), ZPAV (Poland), AFP
          (Portugal), RiSA (South Africa), TCSN (Nigeria) and Pro-Música Brasil —
          cross-checked against Wikipedia&apos;s cited certification tables, as of
          June 2026. Each card shows a song&apos;s current level in every country;
          “×” denotes multi-platinum.
        </p>
      </div>

      <KeepExploring current="/certifications" />
    </main>
  );
}
