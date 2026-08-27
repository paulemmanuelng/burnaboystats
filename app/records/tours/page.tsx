import Link from "next/link";
import styles from "./tours.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import ToursExplorer from "../../components/ToursExplorer";
import MobileTours from "../../components/MobileTours";
import { tours, liveMoments, upcomingShows } from "../../data/tours";
import { revenueShows } from "../../data/tourRevenue";
import { countryCount as playedCount, regionCount } from "../../data/performedCountries";
import { pageMetadata } from "../../lib/seo";
import NotReported from "../../components/NotReported";

export const metadata = pageMetadata({
  title: "Burna Boy Tours — $30.46M Record Tour & Sold-Out Stadiums",
  description:
    "Burna Boy's tours and biggest live moments — the $30.46M highest-grossing African tour ever, the record London Stadium concert and the World Cup.",
  path: "/records/tours",
  shareTitle: "Burna Boy Tours & Live",
  shareDescription: "Record-breaking grosses, sold-out stadiums and history made on stage.",
});

// No MusicEvent JSON-LD here on purpose: every documented show is in the past,
// and Google only shows *upcoming* events in rich results — so the markup won
// zero placements while repeatedly tripping GSC's Events report on the `offers`
// field, which we can't honestly fill for sold-out past shows with no price.

// ── Derived figures ────────────────────────────────────────────────────────
// Everything on this page is computed from tours.ts and tourRevenue.ts. Nothing
// below is a number typed into the markup.
const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
const topTour = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];
const topShow = [...revenueShows].sort((a, b) => b.revenue - a.revenue)[0];
const hisShowCount = revenueShows.filter((s) => s.artist === "Burna Boy").length;

const topShowM = (dp: number) => `$${(topShow.revenue / 1e6).toFixed(dp)}M`;
// "$30.46M" → "$30.46 million", so the lede reads as prose and the strip above
// it can carry the short form.
const topGrossLong = (topTour.gross ?? "").replace(/M$/, " million");
// 302,801 → "300K+". Rounded down to the nearest hundred thousand, so the "+"
// is always honest.
const topTicketsShort = topTour.tickets
  ? `${Math.floor(Number(topTour.tickets.replace(/,/g, "")) / 1e5) * 100}K+`
  : "—";

// Tour years are ranges, and the end of one is abbreviated: "2025–26" means
// 2025 to 2026, so a plain number-scrape would read the run as ending in 26.
// A two-digit end borrows the century of the year it follows.
function yearsOf(range: string): number[] {
  let century = 0;
  return (range.match(/\d{2,4}/g) ?? []).map((p) => {
    const n = Number(p);
    if (p.length === 4) {
      century = Math.floor(n / 100) * 100;
      return n;
    }
    return century + n;
  });
}
const tourYears = tours.flatMap((t) => yearsOf(t.years));
const yearSpan = `${Math.min(...tourYears)} — ${Math.max(...tourYears)}`;

const headline = [
  { value: `$${grossOf(topTour.gross).toFixed(1)}M`, label: "Top tour gross · African record" },
  { value: topShowM(1), label: "Biggest concert · African record" },
  { value: topTicketsShort, label: `Tickets · ${topTour.name}` },
];

export default function ToursPage() {
  return (
    <main id="content">
      {/* Mobile is screen 12 — a two-up stat grid, then one expandable row per
          tour whose dates stack rather than becoming a table. */}
      <MobileTours
        tours={tours}
        topGross={topTour.gross ?? "—"}
        // The stat cell is narrow, and "Tour" is the one word every entry
        // shares — dropping it costs nothing and keeps the note on one line.
        topTourName={topTour.name.replace(/ Tour$/, "")}
        countryCount={playedCount}
        regionCount={regionCount}
        biggestNight={topShow.tickets ?? "—"}
        biggestVenue={topShow.venue}
        yearSpan={yearSpan}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/tours" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.heroGrid}>
              <div>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowRule} aria-hidden="true" />
                  On the road
                </div>
                <h1 className={styles.h1}>
                  Tours <span className="inkText">&amp; Live</span>
                </h1>
                <p className={styles.lede}>
                  The {topTour.name} grossed {topGrossLong} across {topTour.shows} reported shows —
                  the highest-grossing tour by an African artist in history — and his June
                  2024 {topShow.venue} concert ({topShowM(2)} from {topShow.tickets} fans) is
                  the biggest single concert ever by an African artist.
                </p>
              </div>
              <div className={styles.ticketPanel}>
                <div className={styles.kicker}>Upcoming dates &amp; tickets</div>
                <div className={styles.ticketBtns}>
                  <a
                    className="btn btnPrimary"
                    href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tickets · Ticketmaster ↗
                  </a>
                  <a
                    className="btn btnSecondary"
                    href="https://www.onaspaceship.com/tour"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official tour site ↗
                  </a>
                  <Link href="/records/tours/map" className="btn btnSecondary">
                    Where he&apos;s performed ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Headline strip ─────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={styles.wide}>
            <div className={styles.headlineGrid}>
              {headline.map((s) => (
                <div key={s.label} className={styles.headlineCell}>
                  <div className={styles.headlineValue}>{s.value}</div>
                  <div className={styles.headlineLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tours ──────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.sectionPad}`}>
            <div className={styles.headRow}>
              <h2 className={styles.h2}>
                <span className="inkText">Tours</span>
              </h2>
              <p className={styles.headLede}>
                Click a tour to see its venues, dates and capacities.
              </p>
            </div>
            {/* Announced but unplayed. Sits above the tours because it is the
                only thing here that hasn't happened yet, and it is kept out of
                every total for the same reason. */}
            {upcomingShows.length > 0 && (
              <div className={styles.upcoming}>
                <div className={styles.upcomingHead}>
                  <span className={styles.upcomingTag}>Announced</span>
                  <span className={styles.upcomingNote}>Not yet played — no gross, no attendance</span>
                </div>
                {upcomingShows.map((u) => (
                  <div key={`${u.venue}-${u.when}`} className={styles.upcomingRow}>
                    <div className={styles.upcomingMain}>
                      <div className={styles.upcomingVenue}>
                        {u.venue}
                        <span className={styles.upcomingCity}>
                          {u.city}, {u.country}
                          {u.cap ? ` · ${u.cap.toLocaleString()} capacity` : ""}
                        </span>
                      </div>
                      <p className={styles.upcomingText}>{u.note}</p>
                      <p className={styles.upcomingSource}>{u.source}</p>
                    </div>
                    <span className={styles.upcomingWhen}>{u.when}</span>
                  </div>
                ))}
              </div>
            )}

            <ToursExplorer tours={tours} />

            <Link href="/records/tours/festivals" className={styles.jumpCard}>
              <span>
                <span className={styles.jumpTitle}>Festivals &amp; shows</span>
                <span className={styles.jumpDesc}>
                  Every festival &amp; big stage he&apos;s played — the headline sets and
                  beyond
                </span>
              </span>
              <span className={styles.jumpArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* ── Highest revenue per show ───────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.revenuePad}`}>
            <h2 className={styles.h2}>
              Highest <span className="inkText">revenue per show</span>
            </h2>
            <p className={styles.headLede}>
              The top 10 single-show grosses by any African artist.
            </p>
            <table className="tableBase">
              <thead>
                <tr>
                  <th className={styles.colRank}>#</th>
                  <th>Artist</th>
                  <th>Venue</th>
                  <th className={styles.colTour}>Tour</th>
                  <th className={styles.colTickets}>Tickets</th>
                  <th className={styles.colGross}>Gross</th>
                </tr>
              </thead>
              <tbody>
                {revenueShows.slice(0, 10).map((s, i) => (
                  <tr key={`${s.artist}-${s.venue}-${s.year}-${s.revenue}`}>
                    <td className={styles.rank}>{String(i + 1).padStart(2, "0")}</td>
                    <td className={s.artist === "Burna Boy" ? styles.hisName : styles.otherName}>
                      {s.artist}
                    </td>
                    <td>
                      <div className={styles.venue}>
                        {s.flag} {s.venue}
                      </div>
                      <div className={styles.city}>{s.city}</div>
                    </td>
                    <td className={styles.tourCell}>
                      {s.tour} · {s.year}
                    </td>
                    <td className={styles.tickets}>{s.tickets ?? <NotReported />}</td>
                    <td
                      className={`${styles.grossCell} ${
                        s.artist === "Burna Boy" ? styles.grossCellHis : ""
                      }`}
                    >
                      ${s.revenue.toLocaleString("en-US")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.sourceNote}>
              Burna Boy holds {hisShowCount} of the {revenueShows.length}{" "}
              highest-grossing shows by an African artist — more than every other artist on this list
              combined. Box-office figures reported by Billboard Boxscore &amp; Pollstar (as
              aggregated by TouringData), cross-checked against press reporting, as of August
              2026.
            </p>
            <Link href="/records/tours/revenue" className={styles.jumpCardAlt}>
              <span>
                <span className={styles.jumpTitle}>
                  See the full top {revenueShows.length}
                </span>
                <span className={styles.jumpDesc}>
                  Every show on the list, ranked by reported revenue
                </span>
              </span>
              <span className={styles.jumpArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* ── Record nights ──────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.momentsPad}`}>
            <h2 className={`${styles.h2} ${styles.h2Spaced}`}>
              Record nights &amp; <span className="inkText">live milestones</span>
            </h2>
            <div className={styles.momentList}>
              {liveMoments.map((m) => (
                <div
                  key={m.title}
                  className={`${styles.moment} ${m.record ? styles.momentRecord : ""}`}
                >
                  <span className={styles.momentYear}>{m.year}</span>
                  <div>
                    <h3 className={styles.momentTitle}>{m.title}</h3>
                    <p className={styles.momentText}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Source ─────────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.sourcePad}`}>
            <p className={styles.sourceLine}>
              Box-office figures are reported by Billboard Boxscore &amp; Pollstar (as
              aggregated by TouringData) and cross-checked against press reporting, as of
              August 2026. For future dates, always check official ticketing.
            </p>
            <Link href="/records" className={`btn btnSecondary ${styles.backBtn}`}>
              ← Career Records
            </Link>
          </div>
        </section>

        <KeepExploring current="/records/tours" />
      </div>
    </main>
  );
}
