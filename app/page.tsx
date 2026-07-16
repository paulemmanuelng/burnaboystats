import Link from "next/link";
import styles from "./page.module.css";
import Waveform from "./components/Waveform";
import Marquee from "./components/Marquee";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import UpdatesList from "./components/UpdatesList";
import MusicDecor from "./components/MusicDecor";
import AlbumStrip from "./components/AlbumStrip";
import GlobeTeaser from "./components/GlobeTeaser";
import TierDonut, { type DonutSeg } from "./components/TierDonut";
import { totalAwards, countryCount, albums, singles, features } from "./data/certifications";
import { latestUpdates, updates } from "./data/updates";

const total = totalAwards();

// Tier breakdown of all certifications, for the donut under the ranked list.
const tierCounts: Record<string, number> = { Diamond: 0, Platinum: 0, Gold: 0, Silver: 0 };
for (const it of [...albums, ...singles, ...features]) for (const c of it.certs) tierCounts[c.level]++;
const tierSegments: DonutSeg[] = [
  { label: "Diamond", value: tierCounts.Diamond, color: "#8fe3f0" },
  { label: "Platinum", value: tierCounts.Platinum, color: "#dfe2e8" },
  { label: "Gold", value: tierCounts.Gold, color: "#ffb627" },
  { label: "Silver", value: tierCounts.Silver, color: "#b8bcc4" },
];

// Freshness cue for the hero — the most recent Updates-feed date, formatted.
// Derived from fixed data (not runtime "now"), so it's stable at build time.
const lastUpdatedISO = updates.reduce((m, u) => (u.date > m ? u.date : m), updates[0].date);
const lastUpdated = new Date(`${lastUpdatedISO}T00:00:00`).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

// His most decorated tracks — shown as a ranked list (the #1 is featured).
const topCerts = [
  { title: "Last Last", credit: "Burna Boy · 2022", cert: "Diamond 🇫🇷 · 4× Platinum 🇨🇦 · 5× Platinum 🇳🇬" },
  { title: "Location", credit: "Dave ft. Burna Boy · 2019", cert: "5× Platinum 🇬🇧 · Diamond 🇫🇷" },
  { title: "Jerusalema (Remix)", credit: "Master KG, Nomcebo & Burna Boy · 2020", cert: "Diamond 🇫🇷 · 4× Platinum 🇮🇹 · 2× Platinum 🇵🇹" },
  { title: "On the Low", credit: "Burna Boy · 2018", cert: "Diamond 🇫🇷 · 2× Platinum 🇨🇦" },
];

const marqueeItems = [
  "African Giant", "FIFA World Cup 2026", "Grammy Winner", "Odogwu",
  "BET Award Winner", "Global Superstar", "Afro-Fusion", "Twice as Tall",
];

// Career-defining records as an African artist (the headline feats).
const records = [
  {
    num: "$30.46M",
    title: "Highest-grossing African tour",
    desc: "The I Told Them… Tour — the biggest tour in history by an African artist.",
    href: "/records/tours",
  },
  {
    num: "$6.15M",
    title: "Biggest African concert",
    desc: "His record London Stadium night — and he was the first African artist to headline a UK stadium.",
    href: "/records/tours/revenue",
  },
  {
    num: "2026",
    title: "FIFA World Cup headliner",
    desc: "First African artist to headline a World Cup opening ceremony, performing “Dai Dai” with Shakira.",
    href: "/records/firsts",
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
            <div className={styles.metaGroup}>
              <span className={styles.metaLabel}>Est. 2010</span>
              <span className={styles.metaLabel}>Afro-Fusion</span>
            </div>
            <span className={styles.updated}>
              <span className={styles.liveDot} aria-hidden="true" />
              Updated {lastUpdated}
            </span>
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
            <Link href="/certifications" className={styles.stat}>
              <span className={styles.statNum}><CountUp end={total} /></span>
              <span className={styles.statLabel}>Certifications</span>
            </Link>
            <Link href="/certifications" className={styles.stat}>
              <span className={styles.statNum}><CountUp end={countryCount} /></span>
              <span className={styles.statLabel}>Countries</span>
            </Link>
            <Link href="/music" className={styles.stat}>
              <span className={styles.statNum}><CountUp end={8} /></span>
              <span className={styles.statLabel}>Studio albums</span>
            </Link>
            <Link href="/records/awards" className={styles.stat}>
              <span className={styles.statNum}>2021</span>
              <span className={styles.statLabel}>Grammy winner</span>
            </Link>
          </div>
        </div>

        <Waveform bars={60} className={styles.heroWave} />
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee items={marqueeItems} />

      {/* ================= FEATURED: DAI DAI STORY ================= */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <Link href="/dai-dai" className={styles.featured}>
              <div className={styles.featuredBody}>
                <span className={styles.featuredBadge}>
                  <span className={styles.featuredDot} aria-hidden="true" />
                  Featured story · World Cup Final this weekend
                </span>
                <h2 className={styles.featuredTitle}>
                  The <span className="goldText">Dai Dai</span> Story
                </h2>
                <p className={styles.featuredText}>
                  How Shakira &amp; Burna Boy&apos;s World Cup anthem hit No.&nbsp;1 in 15
                  countries and became the most-streamed song on Earth — and lands on the
                  Final halftime stage on 19 July.
                </p>
                <span className={styles.featuredCta}>Read the story ↗</span>
              </div>
              {/* Official Dai Dai cover, served from Spotify's CDN (same source as the discography). */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.featuredCover}
                src="https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4"
                alt="Dai Dai single cover — Shakira × Burna Boy"
                width={190}
                height={190}
                loading="lazy"
              />
            </Link>
          </Reveal>
        </div>
      </section>

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

      {/* ================= DISCOGRAPHY STRIP ================= */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>The catalogue</p>
          </Reveal>
          <Reveal delay={80}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>
                The <span className="goldText">discography</span>
              </h2>
              <Link href="/music" className={styles.headLink}>
                Explore the music ↗
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <AlbumStrip />
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
          <Reveal delay={200}>
            <div className={styles.tierStrip}>
              <div className={styles.tierHead}>
                <p className={styles.eyebrow}>The full picture</p>
                <Link href="/records/visualized" className={styles.headLink}>
                  See it visualized ↗
                </Link>
              </div>
              <TierDonut
                segments={tierSegments}
                total={total}
                centerNum={`${total}`}
                centerLabel="certifications"
                ariaLabel={`Certifications by tier: ${tierSegments.map((s) => `${s.value} ${s.label}`).join(", ")}`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= LATEST UPDATES ================= */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Tracked as it happens</p>
          </Reveal>
          <Reveal delay={80}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>
                Latest <span className="goldText">updates</span>
              </h2>
              <Link href="/updates" className={styles.headLink}>
                All updates ↗
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <UpdatesList items={latestUpdates(4)} />
          </Reveal>
        </div>
      </section>

      {/* ================= MAP TEASER ================= */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <GlobeTeaser />
          </Reveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <div className="container">
          <Reveal>
            <div className={styles.ctaInner}>
              <MusicDecor />
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>
                  Dive into the <span className="goldText">data</span>
                </h2>
                <p className={styles.ctaText}>
                  Chart records, awards, tours and certifications — every career
                  record of the African Giant in one place.
                </p>
                <Link href="/records" className="btn btnPrimary">Explore the records ↗</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
