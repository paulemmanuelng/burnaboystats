import Link from "next/link";
import styles from "./page.module.css";
import Waveform from "./components/Waveform";
import Marquee from "./components/Marquee";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import KeepExploring from "./components/KeepExploring";
import { totalAwards, countryCount } from "./data/certifications";

const total = totalAwards();

// His most decorated tracks — shown as a ranked list (the #1 is featured).
const topCerts = [
  { title: "Last Last", credit: "Burna Boy · 2022", cert: "Diamond 🇫🇷 · 4× Platinum 🇨🇦 · 5× Platinum 🇳🇬" },
  { title: "Location", credit: "Dave ft. Burna Boy · 2019", cert: "5× Platinum 🇬🇧 · Diamond 🇫🇷" },
  { title: "On the Low", credit: "Burna Boy · 2018", cert: "Diamond 🇫🇷 · 2× Platinum 🇨🇦" },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy · 2019", cert: "3× Platinum 🇬🇧" },
];

const marqueeItems = [
  "African Giant", "FIFA World Cup 2026", "Grammy Winner", "Odogwu",
  "BET Award Winner", "Global Superstar", "Afro-Fusion", "Twice as Tall",
];

export default function Home() {
  return (
    <main id="content">
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <span className={styles.heroWatermark} aria-hidden="true">Odogwu</span>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTop}>
            <span className={styles.metaLabel}>Est. 2013 — Port Harcourt</span>
            <span className={styles.metaLabel}>Unofficial fan index — Afro-Fusion</span>
          </div>

          <p className={styles.eyebrow}>★ The African Giant — by the numbers</p>
          <h1 className={styles.title}>
            Burna <span className="goldText">Boy</span>
          </h1>
          <p className={styles.tagline}>
            Every certification, every chart record, every milestone — the whole
            catalogue in one place. Fact-checked and always current.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/certifications" className="btn btnPrimary">View certifications ↗</Link>
            <Link href="/music" className="btn btnSecondary">Explore the music ↗</Link>
          </div>

          <div className={styles.scoreboard}>
            <div className={styles.stat}>
              <span className={styles.statNum}><CountUp end={total} /></span>
              <span className={styles.statLabel}>Certifications</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}><CountUp end={countryCount} /></span>
              <span className={styles.statLabel}>Countries</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}><CountUp end={8} /></span>
              <span className={styles.statLabel}>Studio albums</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>2021</span>
              <span className={styles.statLabel}>Grammy winner</span>
            </div>
          </div>
        </div>

        <Waveform bars={90} className={styles.heroWave} />
      </section>

      {/* ================= WORLD CUP BANNER ================= */}
      <section className={styles.newsBannerWrap}>
        <div className="container">
          <div className={styles.newsBanner}>
            <span className={styles.newsTag}>New</span>
            Headlined the 2026 FIFA World Cup Opening Ceremony with Shakira — “Dai Dai”
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee items={marqueeItems} />

      {/* ================= BIGGEST CERTIFICATIONS (ranked) ================= */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Certified worldwide</p>
          </Reveal>
          <Reveal delay={80}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>
                Biggest <span className="goldText">certifications</span>
              </h2>
              <Link href="/certifications" className={styles.headLink}>
                All {total} certifications ↗
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ol className={styles.rankList}>
              {topCerts.map((c, i) => (
                <li key={c.title} className={`${styles.rankRow} ${i === 0 ? styles.rankFeatured : ""}`}>
                  <span className={styles.rank}>{String(i + 1).padStart(2, "0")}</span>
                  <div className={styles.rankBody}>
                    <span className={styles.rankTitle}>{c.title}</span>
                    <span className={styles.rankCredit}>{c.credit}</span>
                  </div>
                  <span className={styles.rankCert}>{c.cert}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <div className="container">
          <Reveal>
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>
                Dive into the <span className="goldText">data</span>
              </h2>
              <p className={styles.ctaText}>
                Explore the full discography, global certifications and milestones
                of the African Giant.
              </p>
              <Link href="/certifications" className="btn btnPrimary">Explore the stats ↗</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <KeepExploring current="/" />
    </main>
  );
}
