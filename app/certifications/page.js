import styles from "./certifications.module.css";
import Reveal from "../components/Reveal";
import Equalizer from "../components/Equalizer";
import CountUp from "../components/CountUp";
import {
  COUNTRIES, albums, singles, features, awardsByYear,
  tierOf, totalAwards, certifiedReleaseCount, countryCount,
} from "../data/certifications";

const total = totalAwards();
const years = Object.keys(awardsByYear).sort((a, b) => Number(b) - Number(a));

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

// One release card (all-time catalogue): title + a badge per country.
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

        {/* ============ CERTIFICATIONS BY YEAR ============ */}
        <h2 className={`secTitle ${styles.group}`}>Certifications by Year</h2>
        <p className={styles.byYearIntro}>
          New certifications &amp; upgrades, by the year they were announced
          (newest first). The complete all-time catalogue is below.
        </p>
        {years.map((year) => (
          <div key={year} className={styles.yearBlock}>
            <h3 className={styles.yearHead}>
              {year} <span className={styles.count}>({awardsByYear[year].length})</span>
            </h3>
            <Reveal>
              <div className={styles.yearGrid}>
                {awardsByYear[year].map((e, i) => (
                  <div className={styles.yearItem} key={`${e.title}-${e.c}-${e.level}-${i}`}>
                    <span className={styles.yearItemTitle}>
                      {e.title}
                      {e.credit && (
                        <span className={styles.yearItemCredit}> · {e.credit}</span>
                      )}
                    </span>
                    <Badge cert={e} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        ))}

        {/* ============ COMPLETE ALL-TIME CATALOGUE ============ */}
        <h2 className={`secTitle ${styles.group}`} style={{ marginTop: 64 }}>
          Complete all-time catalogue
        </h2>
        <p className={styles.byYearIntro}>
          Every certified release with its current level in each country.
        </p>

        <h3 className={styles.subGroup}>
          Albums <span className={styles.count}>({albums.length})</span>
        </h3>
        <Reveal>
          <div className={styles.certGrid}>
            {albums.map((a) => <CertCard key={a.title} item={a} />)}
          </div>
        </Reveal>

        <h3 className={styles.subGroup}>
          Singles <span className={styles.count}>({singles.length})</span>
        </h3>
        <Reveal>
          <div className={styles.certGrid}>
            {singles.map((s) => <CertCard key={s.title} item={s} />)}
          </div>
        </Reveal>

        <h3 className={styles.subGroup}>
          Featured Appearances <span className={styles.count}>({features.length})</span>
        </h3>
        <Reveal>
          <div className={styles.certGrid}>
            {features.map((f) => <CertCard key={f.title} item={f} />)}
          </div>
        </Reveal>

        <p className={styles.source}>
          Sources: RIAA (US), BPI (UK), Music Canada, SNEP (France), BVMI
          (Germany), NVPI (Netherlands), ARIA (Australia), RMNZ (New Zealand),
          Promusicae (Spain), IFPI Denmark &amp; IFPI Norway — via Wikipedia and
          dated news reports, as of June 2026. The year shows when an award was
          announced; the catalogue shows each song&apos;s current level. Silver,
          Gold, Platinum and Diamond reflect each country&apos;s own thresholds;
          “×” denotes multi-platinum.
        </p>
      </div>
    </main>
  );
}
