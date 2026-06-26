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

// Career-defining records as an African artist (the headline feats).
const records = [
  {
    num: "$30.5M",
    title: "Highest-grossing African tour",
    desc: "The I Told Them… Tour — the biggest tour in history by an African artist.",
    href: "/records/tours",
  },
  {
    num: "$6.15M",
    title: "Biggest African concert",
    desc: "His record London Stadium night — and he was the first African artist to headline a UK stadium.",
    href: "/records/tours",
  },
  {
    num: "2026",
    title: "FIFA World Cup headliner",
    desc: "First African artist to headline a World Cup opening ceremony, performing “Dai Dai” with Shakira.",
    href: "/records/tours",
  },
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
            <span className={styles.metaLabel}>Est. 2010</span>
            <span className={styles.metaLabel}>Afro-Fusion</span>
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

        <Waveform bars={60} className={styles.heroWave} />
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee items={marqueeItems} />

      {/* ================= CAREER RECORDS ================= */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Record-breaking</p>
          </Reveal>
          <Reveal delay={80}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>
                Career <span className="goldText">records</span>
              </h2>
              <Link href="/records" className={styles.headLink}>
                All career records ↗
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className={styles.recordGrid}>
              {records.map((r) => (
                <Link key={r.title} href={r.href} className={styles.recordCard}>
                  <span className={styles.recordNum}>{r.num}</span>
                  <span className={styles.recordTitle}>{r.title}</span>
                  <span className={styles.recordDesc}>{r.desc}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

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
                <li key={c.title} className={styles.rankRow}>
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
                Chart records, awards, tours and certifications — every career
                record of the African Giant in one place.
              </p>
              <Link href="/records" className="btn btnPrimary">Explore the records ↗</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <KeepExploring current="/" />
    </main>
  );
}
