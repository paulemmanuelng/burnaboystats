import styles from "./certifications.module.css";
import Reveal from "../components/Reveal";
import Equalizer from "../components/Equalizer";
import CountUp from "../components/CountUp";
import {
  COUNTRIES, albums, singles, features,
  tierOf, totalAwards, certifiedReleaseCount, countryCount,
} from "../data/certifications";

const total = totalAwards();

// A small flag + level badge.
function Badge({ cert }) {
  const country = COUNTRIES[cert.c];
  return (
    <span
      className={`${styles.cBadge} ${styles[tierOf(cert.level)]}`}
      title={`${country.name} — ${country.body}`}
    >
      <span className={styles.flag}>{country.flag}</span>
      {cert.x ? `${cert.x}× ` : ""}
      {cert.level}
    </span>
  );
}

// One release card: title + a badge per country it's certified in.
function CertCard({ item }) {
  return (
    <div className={styles.certCard}>
      {item.year && <span className={styles.certYear}>{item.year}</span>}
      <div className={styles.certHead}>
        <span className={styles.certTitle}>{item.title}</span>
        {item.credit && <span className={styles.certCredit}>{item.credit}</span>}
      </div>
      <div className={styles.badges}>
        {item.certs.map((cert) => <Badge key={cert.c} cert={cert} />)}
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <main>
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

        {/* COUNTRY LEGEND */}
        <div className={styles.legend}>
          {Object.entries(COUNTRIES).map(([code, c]) => (
            <span key={code} className={styles.legendItem}>
              <span className={styles.flag}>{c.flag}</span>
              {c.name} <em>({c.body})</em>
            </span>
          ))}
        </div>

        {/* ALBUMS */}
        <h2 className={`secTitle ${styles.group}`}>
          Albums <span className={styles.count}>({albums.length})</span>
        </h2>
        <Reveal>
          <div className={styles.certGrid}>
            {albums.map((a) => <CertCard key={a.title} item={a} />)}
          </div>
        </Reveal>

        {/* SINGLES */}
        <h2 className={`secTitle ${styles.group}`}>
          Singles <span className={styles.count}>({singles.length})</span>
        </h2>
        <Reveal>
          <div className={styles.certGrid}>
            {singles.map((s) => <CertCard key={s.title} item={s} />)}
          </div>
        </Reveal>

        {/* FEATURES */}
        <h2 className={`secTitle ${styles.group}`}>
          Featured Appearances <span className={styles.count}>({features.length})</span>
        </h2>
        <Reveal>
          <div className={styles.certGrid}>
            {features.map((f) => <CertCard key={f.title} item={f} />)}
          </div>
        </Reveal>

        <p className={styles.source}>
          Sources: RIAA (US), BPI (UK), Music Canada, SNEP (France), BVMI
          (Germany), NVPI (Netherlands), ARIA (Australia), RMNZ (New Zealand),
          Promusicae (Spain), IFPI Denmark &amp; IFPI Norway — via Wikipedia and
          national charts, as of June 2026. Each card shows a song&apos;s current
          level in every country. Silver, Gold, Platinum and Diamond reflect each
          country&apos;s own thresholds; “×” denotes multi-platinum.
        </p>
      </div>
    </main>
  );
}
