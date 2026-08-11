import Link from "next/link";
import styles from "./records.module.css";
import { pageMetadata } from "../lib/seo";
import { revenueShows } from "../data/tourRevenue";
import { tours } from "../data/tours";
import { ceremonies } from "../data/awards";
import { numberWord } from "../lib/homeData";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import MobileRecords from "../components/MobileRecords";
import NotReported from "../components/NotReported";

export const metadata = pageMetadata({
  title: "Career Records — Burna Boy Charts, Awards, Tours & Firsts",
  description:
    "Burna Boy's career records: official chart entries, awards, tours and the historic firsts that made him the African Giant.",
  path: "/records",
  shareTitle: "Burna Boy — Career Records",
});

// Ordered by weight: official charts lead, then the heaviest career stats
// (awards, historic firsts, streaming, touring), with the overviews and extras
// (by-the-numbers, visualized, map, cars) following.
const subs = [
  { href: "/records/charts", title: "Official Charts", desc: "Peak positions on every major chart worldwide" },
  { href: "/live-charts", title: "Live Charts", desc: "Where every release is charting right now, refreshed hourly" },
  { href: "/records/awards", title: "Awards", desc: "Every win & nomination to date" },
  { href: "/records/firsts", title: "Firsts", desc: "Every record broken & first achieved" },
  { href: "/records/africas-biggest", title: "Africa's Biggest", desc: "Most-streamed African artists, year by year" },
  { href: "/records/tours", title: "Tours", desc: "Tour runs, dates & box-office grosses" },
  { href: "/records/tours/revenue", title: "Highest Revenue Per Show", desc: `The ${revenueShows.length} biggest single-show grosses by an African artist` },
  { href: "/records/by-the-numbers", title: "By the Numbers", desc: "His whole career in one scannable stat sheet" },
  { href: "/records/visualized", title: "Visualized", desc: "The charts — grosses, certifications & awards at a glance" },
  { href: "/records/tours/map", title: "Where He's Performed", desc: "An interactive map of every country he's taken the stage" },
  { href: "/records/tours/festivals", title: "Festivals", desc: "Afro Nation and every big-stage festival billing" },
  { href: "/records/cars", title: "Car Collection", desc: "Every confirmed vehicle in the garage" },
];


// ── Headline stats ────────────────────────────────────────────────────────
// Every figure is read off the data, so the strip can never fall out of step
// with the pages it links to.
const usd = (n: number) => `$${(n / 1e6).toFixed(2)}M`;

const topShow = [...revenueShows].sort((a, b) => b.revenue - a.revenue)[0];
const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
const topTour = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];
const grammyWin = ceremonies
  .find((c) => c.name === "Grammy Awards")
  ?.noms.find((n) => n.won);

const hisShows = revenueShows.filter((r) => r.artist === "Burna Boy").length;

const headline = [
  {
    value: usd(topShow.revenue),
    label: "Biggest single show",
    note: `${topShow.venue}, ${topShow.year}`,
    href: "/records/tours/revenue",
  },
  {
    value: topShow.tickets ?? "—",
    label: "Tickets, one night",
    note: "The African record",
    href: "/records/africas-biggest",
  },
  {
    value: topTour?.gross ?? "—",
    label: "Highest tour gross",
    note: topTour?.name ?? "",
    href: "/records/tours",
  },
  {
    value: String(grammyWin?.year ?? ""),
    label: "Grammy winner",
    note: grammyWin?.category ?? "",
    href: "/records/awards",
  },
];

// The leaderboard's top rows, for the box-office table.
const showRows = revenueShows.slice(0, 8);

export default function RecordsPage() {
  return (
    <main id="content">
      {/* Mobile is its own screen in this design — a two-up headline grid, the
          record books as stacked rows and a condensed box-office list. */}
      <MobileRecords
        headline={headline}
        subs={subs}
        shows={showRows}
        hisShows={hisShows}
        showCount={revenueShows.length}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records" />

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.wide}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Record-breaking
            </div>
            <h1 className={styles.h1}>
              Career <span className="inkText">Records</span>
            </h1>
            <p className={styles.lede}>
              Charts, awards, tours and the firsts that made history — {subs.length} record
              books, each one sourced and dated.
            </p>
          </div>
        </section>

        {/* ── Headline stats ─────────────────────────────────────── */}
        <section className={styles.headlineBand}>
          <div className={styles.headlineGrid}>
            {headline.map((s) => (
              <Link key={s.label} href={s.href} className={styles.headlineCell}>
                <div className={styles.headlineValue}>{s.value}</div>
                <div className={styles.headlineLabel}>{s.label}</div>
                <div className={styles.headlineNote}>{s.note}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── The record books ───────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.wide}>
            <div className={styles.head}>
              <div>
                <div className={styles.kicker}>The record books</div>
                <h2 className={styles.h2}>{numberWord(subs.length)} ways in</h2>
              </div>
              <p className={styles.headLede}>
                Official charts lead, then the heaviest career stats — awards, firsts,
                streaming and touring.
              </p>
            </div>
            <div className={styles.grid}>
              {subs.map((s) => (
                <Link key={s.href} href={s.href} className={styles.card}>
                  <span>
                    <span className={styles.cardTitle}>{s.title}</span>
                    <span className={styles.cardDesc}>{s.desc}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Box office ─────────────────────────────────────────── */}
        <section className={styles.boxBand}>
          <div className={styles.wide}>
            <div className={styles.head}>
              <div>
                <div className={styles.kicker}>Box office</div>
                <h2 className={styles.h2}>Highest revenue per show</h2>
              </div>
              <p className={styles.headLede}>
                The biggest single-show grosses by an African artist — {hisShows} of the{" "}
                {revenueShows.length} on the leaderboard are his.
              </p>
              <Link href="/records/tours/revenue" className={`btn btnSecondary ${styles.headBtn}`}>
                Full leaderboard ↗
              </Link>
            </div>
            <table className="tableBase">
              <thead>
                <tr>
                  <th className={styles.colRank}>#</th>
                  <th>Artist</th>
                  <th>Venue</th>
                  <th className={styles.colTour}>Tour</th>
                  <th className={styles.colRight}>Tickets</th>
                  <th className={styles.colRight}>Gross</th>
                </tr>
              </thead>
              <tbody>
                {showRows.map((s, i) => (
                  <tr key={`${s.artist}-${s.venue}-${s.year}-${i}`}>
                    <td className={styles.rank}>{i + 1}</td>
                    <td className={s.artist === "Burna Boy" ? styles.hisName : styles.otherName}>
                      {s.artist}
                    </td>
                    <td>
                      <div className={styles.venue}>{s.flag} {s.venue}</div>
                      <div className={styles.city}>{s.city}</div>
                    </td>
                    <td className={styles.tour}>{s.tour} · {s.year}</td>
                    <td className={styles.tickets}>{s.tickets ?? <NotReported />}</td>
                    <td className={styles.gross}>{usd(s.revenue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.sourceNote}>
              Source: TouringData, aggregating Billboard Boxscore, cross-checked against press
              reporting — August 2026. Per-show gross, distinct from tour-level totals.
            </p>
          </div>
        </section>

        <KeepExploring current="/records" />
      </div>
    </main>
  );
}
