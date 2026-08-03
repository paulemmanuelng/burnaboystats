import Link from "next/link";
import styles from "./page.module.css";
import LiveBand from "./components/LiveBand";
import TodaysNumber from "./components/TodaysNumber";
import MobileHome from "./components/MobileHome";
import CertLedger from "./components/CertLedger";
import StatCardButton from "./components/StatCardButton";
import GlobeTeaser from "./components/GlobeTeaser";
import SearchTrigger from "./components/SearchTrigger";
import { homeScoreboard } from "./lib/homeScoreboard";
import { spotifyImage } from "./lib/spotifyImage";
import {
  ledgerRows,
  certTotal,
  certCountryTotal,
  certifiedReleaseTotal,
  tierTotals,
  largestTier,
  diamondNote,
  boardCells,
  boardCountryTotal,
  careerNumberOnes,
  albumCards,
  topShows,
  topTour,
  homeFirsts,
  numberWord,
} from "./lib/homeData";
import { updates } from "./data/updates";
import NotReported from "./components/NotReported";

/**
 * The homepage, built from designs/desktop/Burna Boy Stats.dc.html.
 *
 * Eight sections in the design's order: hero, scoreboard, history made, the
 * certifications ledger, the No. 1 board, the catalogue, career records, and
 * the closing source panel — and nothing else. The marquee, updates feed and
 * map teaser the previous page carried are not in this design.
 */

// The freshness chip reads off the feed rather than a typed date.
const lastVerified = new Date(
  `${updates.reduce((m, u) => (u.date > m ? u.date : m), updates[0].date)}T00:00:00`
).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

// Tier colours carry data meaning and are never recoloured to gold.
const TIER_INK: Record<string, string> = {
  Diamond: "var(--cyan)",
  Platinum: "var(--silver)",
  Gold: "var(--gold)",
  Silver: "#b8bcc4",
};
const TIER_GRAD: Record<string, string> = {
  Diamond: "linear-gradient(90deg, #8fe3f0, #5fc9dc)",
  Platinum: "linear-gradient(90deg, #dfe2e8, #b8bcc4)",
  Gold: "linear-gradient(90deg, var(--gold-bright), var(--gold))",
  Silver: "linear-gradient(90deg, #b8bcc4, #8f939b)",
};

// 2013–2025 is thirteen years, not twelve — the span is inclusive of both ends.
const firstYear = albumCards[0].year;
const lastYear = albumCards.at(-1)!.year;
const albumSpan = `${numberWord(lastYear - firstYear + 1)} years, ${firstYear} to ${lastYear}.`;

export default function Home() {
  return (
    <main id="content">
      {/* Mobile is its own screen in this design — a different running order,
          and sections the desktop page does not have. Each renders at its own
          breakpoint rather than one being reflowed into the other. */}
      <MobileHome />

      <div className={styles.desktopOnly}>
        <LiveBand />

        {/* ── Hero ───────────────────────────────────────────────── */}
        {/* Two columns, no portrait: in this design the gold "today's number"
            panel IS the right column, divided from the copy by a hairline. */}
        <section className={styles.hero} id="top">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowRule} aria-hidden="true" />
                The African Giant · Est. 2010 · Afro-Fusion
              </div>
              <h1 className={styles.title}>
                Burna <span className="inkText">Boy</span>
              </h1>
              <p className={styles.tagline}>
                Every certification, chart peak, award and tour record — one dataset,
                sourced line by line, updated the day it changes.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/certifications" className="btn btnPrimary">View certifications</Link>
                <Link href="/music" className="btn btnSecondary">Explore the music</Link>
                <SearchTrigger />
              </div>
              <div className={styles.heroChips}>
                <span className="tag tagNeutral">Sources: RIAA · BPI · SNEP · IFPI</span>
                <span className="tag tagNeutral">Last verified {lastVerified}</span>
                <Link href="/api" className="tag tagOutline">Open data API</Link>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <TodaysNumber />
            </div>
          </div>
        </section>

        {/* ── Scoreboard ─────────────────────────────────────────── */}
        <section className={styles.scoreStrip}>
          <div className={styles.wide}>
            <div className={styles.scoreGrid}>
              {homeScoreboard.map((s) => (
                <Link key={s.label} href={s.href} className={styles.scoreCell}>
                  <div className={styles.scoreValue}>{s.value}</div>
                  <div className={styles.scoreLabel}>{s.label}</div>
                  <div className={styles.scoreSource}>{s.source}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── History made ───────────────────────────────────────── */}
        <section className={styles.historyBand}>
          <div className={styles.historyInner}>
            <div>
              <div className={styles.historyKicker}>History made · 19 July 2026</div>
              <h2 className={styles.historyTitle}>Shakira × Burna Boy — “Dai Dai”</h2>
            </div>
            <div className={styles.historyRow}>
              <p className={styles.historyText}>
                The first-ever FIFA World Cup Final halftime show, and the first African
                artist to headline it. Their anthem is now the most-streamed song on Earth.
              </p>
              <Link href="/dai-dai" className={`btn btnPrimary ${styles.historyCta}`}>
                Read the story ↗
              </Link>
            </div>
          </div>
        </section>

        {/* ── The certifications ledger ──────────────────────────── */}
        <CertLedger
          rows={ledgerRows}
          releaseTotal={certifiedReleaseTotal}
          certTotal={certTotal}
          certCountries={certCountryTotal}
        >
          <div className={styles.tierKicker}>The full picture</div>
          <div className={styles.tierTotal}>
            <span className={styles.tierTotalNum}>{certTotal}</span>
            <span className={styles.tierTotalWord}>certifications</span>
          </div>
          <div className={styles.tierList}>
            {tierTotals.map((t) => (
              <div key={t.name} className={styles.tierRow}>
                <div className={styles.tierTop}>
                  <span className={styles.tierName} style={{ color: TIER_INK[t.name] }}>
                    {t.name}
                  </span>
                  <span className={styles.tierCount}>{t.count}</span>
                  <span className={styles.tierPct}>{t.pct}%</span>
                </div>
                <div className={styles.tierTrack}>
                  <div
                    className={styles.tierFill}
                    style={{
                      width: `${(t.count / largestTier) * 100}%`,
                      background: TIER_GRAD[t.name],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className={styles.tierNote}>
            Bars are scaled to the largest tier and coloured by metal. {diamondNote}
          </p>
          <Link href="/records/visualized" className={`btn btnGhost ${styles.flushGhost}`}>
            See it visualized ↗
          </Link>

          {/* The rotating globe fills the rest of this column — a teaser into
              the full performance map. */}
          <GlobeTeaser />
        </CertLedger>

        {/* ── The No. 1 board ────────────────────────────────────── */}
        <section className={styles.liveSection} id="live">
          <div className={styles.wide}>
            <div className={styles.head}>
              <div>
                <div className={styles.kicker}>Tracked as it happens</div>
                <h2 className={styles.h2}>The No. 1 board</h2>
              </div>
              <p className={styles.lede}>
                Where he sits at the top today. Green cells marked{" "}
                <span className={styles.newInk}>NEW</span> entered at No. 1 most recently.
              </p>
              <Link href="/records/charts" className={`btn btnSecondary ${styles.headBtn}`}>
                All {careerNumberOnes} career No. 1s ↗
              </Link>
            </div>

            <div className={styles.boardCount}>
              Showing {boardCells.length} of {boardCountryTotal} · official national charts
            </div>

            <div className={styles.boardGrid}>
              {boardCells.map((c) => (
                <div
                  key={c.code}
                  className={`${styles.boardCell} ${c.isNew ? styles.boardNew : ""}`}
                >
                  <div className={styles.boardTop}>
                    <span className={styles.boardCode}>{c.code}</span>
                    <span className={styles.boardFlag} aria-hidden="true">
                      {c.isNew ? "NEW" : c.flag}
                    </span>
                  </div>
                  <div className={styles.boardName}>{c.name}</div>
                  <div className={styles.boardChart}>{c.chart}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The catalogue ──────────────────────────────────────── */}
        <section className={styles.section} id="music">
          <div className={styles.wide}>
            <div className={styles.head}>
              <div>
                <div className={styles.kicker}>The catalogue</div>
                <h2 className={styles.h2}>
                  {numberWord(albumCards.length)} studio albums
                </h2>
              </div>
              <p className={styles.lede}>
                {albumSpan} Hover an album for its peak and certifications.
              </p>
              <Link href="/music" className={`btn btnSecondary ${styles.headBtn}`}>
                Full discography ↗
              </Link>
            </div>

            <div className={styles.albumGrid}>
              {albumCards.map((a) => (
                <Link key={a.title} href="/music" className={styles.albumCard}>
                  <div
                    className={styles.albumCover}
                    style={
                      a.cover
                        ? { backgroundImage: `url(${spotifyImage(a.cover, 300)})` }
                        : undefined
                    }
                  />
                  <div className={styles.albumRow}>
                    <div className={styles.albumTitle}>{a.title}</div>
                    <div className={styles.albumYear}>{a.year}</div>
                  </div>
                  {/* Only the chips there is data for — the earliest albums
                      predate the chart and certification records. */}
                  <div className={styles.albumChips}>
                    {a.peak && <span className="tag tagNeutral">{a.peak}</span>}
                    {a.certs && <span className="tag tagNeutral">{a.certs}</span>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Career records ─────────────────────────────────────── */}
        <section className={styles.section} id="records">
          <div className={styles.wide}>
            <div className={styles.head}>
              <div>
                <div className={styles.kicker}>Record-breaking</div>
                <h2 className={styles.h2}>Career records</h2>
              </div>
              <Link href="/records" className={`btn btnSecondary ${styles.headBtn}`}>
                All career records ↗
              </Link>
            </div>

            <div className={styles.recordsGrid}>
              <div className={styles.recordsLeft}>
                <h3 className={styles.h3}>Highest revenue per show</h3>
                <table className="tableBase">
                  <thead>
                    <tr>
                      <th>Venue</th>
                      <th className={styles.colCity}>City</th>
                      <th className={styles.colTickets}>Tickets</th>
                      <th className={styles.colGross}>Gross</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topShows.map((t) => (
                      <tr key={`${t.venue}-${t.year}`}>
                        <td>
                          <div className={styles.showVenue}>{t.venue}</div>
                          <div className={styles.showDate}>
                            {t.tour} · {t.year}
                          </div>
                        </td>
                        <td>{t.city}</td>
                        <td className={styles.numRight}>{t.tickets ?? <NotReported />}</td>
                        <td className={styles.grossCell}>${(t.revenue / 1e6).toFixed(2)}M</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className={styles.sourceNote}>
                  Source: TouringData / Billboard Boxscore · the {topTour.name} grossed{" "}
                  {topTour.gross}
                  {topTour.tickets ? ` from ${topTour.tickets} tickets` : ""}
                  {topTour.shows ? ` across ${topTour.shows} reported shows` : ""} — the
                  highest-grossing tour by an African artist.
                </p>
              </div>

              <div className={styles.recordsRight}>
                <h3 className={styles.h3}>Firsts</h3>
                <div className={styles.firstsList}>
                  {homeFirsts.map((f) => (
                    <div key={f.title} className={styles.firstRow}>
                      <div className={styles.firstYear}>{f.year}</div>
                      <div>
                        <div className={styles.firstTitle}>{f.title}</div>
                        <div className={styles.firstNote}>{f.text}</div>
                      </div>
                      <StatCardButton
                        value={f.year}
                        label={f.title}
                        source={f.text}
                        href="/records/firsts"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Built for the timeline ─────────────────────────────── */}
        <section className={styles.closer}>
          <div className={styles.closerGlyphs} aria-hidden="true">
            <span className={styles.g1}>♫</span>
            <span className={styles.g2}>♪</span>
            <span className={styles.g3}>♬</span>
            <span className={styles.g4}>◉</span>
            <span className={styles.g5}>✦</span>
            <span className={styles.g6}>♩</span>
            <span className={styles.g7}>✦</span>
            <span className={styles.g8}>♪</span>
            <span className={styles.g9}>♫</span>
            <span className={styles.ring1} />
            <span className={styles.ring2} />
          </div>
          <div className={styles.closerInner}>
            <div>
              <div className={styles.closerKicker}>Built for the timeline</div>
              <h2 className={styles.closerTitle}>
                Every number here comes with a source and a date.
              </h2>
              <p className={styles.closerText}>
                No aggregated guesses. Certifications are read from the issuing body,
                chart peaks from the national chart, grosses from Boxscore — and the whole
                dataset is public.
              </p>
            </div>
            <div className={styles.closerActions}>
              {/* Goes to the stat card page rather than opening a one-stat
                  preview. Its two siblings below navigate, and the ↗ promises
                  the same; /share is also the fuller thing — every stat, sized
                  for each platform, instead of this one fixed card. */}
              <Link href="/share" className={`btn btnBlock ${styles.closerLink}`}>
                Make a stat card ↗
              </Link>
              <Link href="/api" className={`btn btnBlock ${styles.closerLink}`}>
                Open data API ↗
              </Link>
              <Link href="/methodology" className={`btn btnBlock ${styles.closerLink}`}>
                Methodology ↗
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
