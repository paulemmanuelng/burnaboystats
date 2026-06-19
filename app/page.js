import Link from "next/link";
import styles from "./page.module.css";
import Waveform from "./components/Waveform";
import Equalizer from "./components/Equalizer";
import Vinyl from "./components/Vinyl";
import Marquee from "./components/Marquee";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import { totalAwards, countryCount } from "./data/certifications";
import KeepExploring from "./components/KeepExploring";

const total = totalAwards();

// His most decorated tracks (flagship certification shown on each).
const topCerts = [
  { title: "Location", credit: "Dave ft. Burna Boy", cert: "5× Platinum", tier: "platinum" },
  { title: "Last Last", credit: "Diamond 🇫🇷 · 4× Platinum 🇨🇦", cert: "Diamond", tier: "diamond" },
  { title: "On the Low", credit: "Diamond in France", cert: "Diamond", tier: "diamond" },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", cert: "3× Platinum", tier: "platinum" },
];

const marqueeItems = [
  "African Giant", "FIFA World Cup 2026", "Grammy Winner", "Odogwu",
  "BET Award Winner", "Global Superstar", "Afro-Fusion", "Twice as Tall",
];

export default function Home() {
  return (
    <main>
      {/* ================= HERO (festival poster) ================= */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <span className={styles.heroWatermark} aria-hidden="true">Odogwu</span>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTop}>
            <span className={styles.metaLabel}>01 — Afro-Fusion</span>
            <span className={styles.metaLabel}>Est. 2013 · Grammy Winner</span>
          </div>

          <h1 className={styles.title}>
            Burna <span className="goldText">Boy</span>
          </h1>

          <div className={styles.heroRule} aria-hidden="true" />

          <div className={styles.heroFoot}>
            <p className={styles.tagline}>
              The African Giant — every certified hit, every milestone, by the
              numbers.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/certifications" className="btn btnPrimary">
                View Certifications
              </Link>
              <Link href="/music" className="btn btnSecondary">
                Explore Music
              </Link>
            </div>
          </div>

          <div className={styles.heroStats}>
            <span className={styles.heroStat}><b>{total}</b> Certifications</span>
            <span className={styles.heroStat}><b>8</b> Albums</span>
            <span className={styles.heroStat}><b>2021</b> Grammy</span>
          </div>
        </div>

        <Waveform bars={90} className={styles.heroWave} />
      </section>

      {/* ================= WORLD CUP NEWS BANNER ================= */}
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

      {/* ================= STATS ================= */}
      <section className={styles.section} id="stats">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>By the Numbers</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.sectionTitle}>
              A career in <span className="goldText">record-breaking</span> figures
            </h2>
          </Reveal>

          <div className={styles.statGrid}>
            <Reveal delay={0}>
              <div className={styles.statCard}>
                <span className={styles.statNum}><CountUp end={total} /></span>
                <span className={styles.statLabel}>Certifications worldwide</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className={styles.statCard}>
                <span className={styles.statNum}><CountUp end={countryCount} /></span>
                <span className={styles.statLabel}>Countries certified</span>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className={styles.statCard}>
                <span className={styles.statNum}><CountUp end={8} /></span>
                <span className={styles.statLabel}>Studio albums</span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>2021</span>
                <span className={styles.statLabel}>Grammy winner</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS HIGHLIGHT ================= */}
      <section className={styles.section}>
        <div className={`container ${styles.certWrap}`}>
          <div className={styles.certArt} aria-hidden="true">
            <Vinyl size={300} />
            <Equalizer bars={9} className={styles.certEq} />
          </div>

          <div>
            <Reveal>
              <p className={styles.eyebrow}>Certified Worldwide</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className={styles.sectionTitle}>
                His biggest <span className="goldText">certifications</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <ul className={styles.certList}>
                {topCerts.map((c) => (
                  <li key={c.title} className={styles.certRow}>
                    <div>
                      <span className={styles.certTitle}>{c.title}</span>
                      <span className={styles.certCredit}>{c.credit}</span>
                    </div>
                    <span className={`${styles.badge} ${styles[c.tier]}`}>
                      {c.cert}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <Link href="/certifications" className={styles.textLink}>
                Explore all {total} certifications →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
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
              <Link href="/certifications" className="btn btnPrimary">
                Explore the Stats
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <KeepExploring
        links={[
          { href: "/certifications", title: "Certifications", desc: "163 awards across 21 countries" },
          { href: "/music", title: "The Music", desc: "8 albums, EPs & every hit" },
          { href: "/tour", title: "Live & Tour", desc: "Stadiums, Grammys & the World Cup" },
        ]}
      />
    </main>
  );
}
