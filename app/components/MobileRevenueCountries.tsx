import Link from "next/link";
import styles from "./mobileRevenue.module.css";
import own from "./mobileRevenueCountries.module.css";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { AFRICA_NOTE, METHOD_NOTE } from "./RevenueCountries";
import {
  bestNightLine,
  leaderLine,
  nightsLabel,
  standNote,
  usdM,
  type ArtistTotal,
  type RevenueByCountry,
} from "../lib/revenueByCountry";

/**
 * Box office by country — the phone screen. Desktop is RevenueCountries; both
 * read the one derived board (app/lib/revenueByCountry.ts).
 *
 * Built from the revenue screen's own parts (mobileRevenue.module.css): its
 * back bar, hero, stat grid, meta bars and row grammar, with the gold gross on
 * his rows only and the faint wash on everyone else's. Every country's full
 * ranked list stays open — dense lists, never an accordion — so the rows are
 * compact and the best-night line wraps instead of being cut off.
 */

function Row({ a, rank }: { a: ArtistTotal; rank: number }) {
  const note = standNote(a);
  return (
    <div className={`${styles.row} ${a.his ? "" : styles.rowOther}`}>
      <span className={styles.rank}>{String(rank).padStart(2, "0")}</span>
      <div className={styles.main}>
        <div className={`${styles.venue} ${own.artist}`}>{a.artist}</div>
        <div className={`${styles.meta} ${own.wrap}`}>
          {bestNightLine(a)}
          {note ? `. ${note}` : ""}
        </div>
      </div>
      <div className={styles.right}>
        <div className={`${styles.gross} ${a.his ? styles.grossHis : ""}`}>{usdM(a.total)}</div>
        <div className={styles.tickets}>{nightsLabel(a.shows)}</div>
      </div>
    </div>
  );
}

export default function MobileRevenueCountries({ board, lede }: { board: RevenueByCountry; lede: string }) {
  const withData = board.continents.filter((k) => k.countries.length > 0);
  const africa = board.continents.find((k) => k.continent === "Africa" && k.countries.length === 0);

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/records/tours/revenue" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>By country</span>
        <span className={styles.badge}>{board.countryCount} countries</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>African artists · reported box office</div>
        {/* The page's <h1> on phones; the desktop column carries its own. */}
        <h1 className={styles.title}>
          Highest-grossing artists <span className={styles.gold}>by country</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
      </div>

      <div className={styles.statGrid}>
        <div className={styles.statCell}>
          <div className={styles.statValue}>
            {board.hisLeads} of {board.countryCount}
          </div>
          <div className={styles.statLabel}>Countries he leads</div>
        </div>
        <div className={styles.statCell}>
          <div className={styles.statValue}>{board.showCount}</div>
          <div className={styles.statLabel}>Reported nights</div>
        </div>
      </div>

      {/* ── Continents ── */}
      <h2 className={`${styles.metaBar} ${own.barTitle}`}>By continent</h2>
      {/* The figure on the right is the CONTINENT's, muted like the bar further
          down; the leader's own total rides in his line, against it. */}
      {withData.map((k) => (
        <div key={k.continent} className={`${styles.row} ${own.noRank} ${k.leader!.his ? "" : styles.rowOther}`}>
          <div className={styles.main}>
            <div className={`${styles.venue} ${own.artist}`}>{k.continent}</div>
            <div className={`${styles.meta} ${own.wrap}`}>
              <span className={k.leader!.his ? own.leadHis : own.leadOther}>{k.leader!.artist}</span>
              {k.artists[1]
                ? ` leads · ${usdM(k.leader!.total)} of ${usdM(k.total)} · next ${k.artists[1].artist}, ${usdM(k.artists[1].total)}`
                : " · the only artist reported"}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.gross}>{usdM(k.total)}</div>
            <div className={styles.tickets}>
              {k.countries.length} {k.countries.length === 1 ? "country" : "countries"}
            </div>
          </div>
        </div>
      ))}
      {africa && (
        <div className={`${styles.row} ${own.noRank}`}>
          <div className={styles.main}>
            <div className={`${styles.venue} ${own.artist}`}>Africa · No reported box office yet</div>
            <div className={`${styles.meta} ${own.wrap}`}>{AFRICA_NOTE}</div>
          </div>
        </div>
      )}

      {/* ── Countries, grouped by continent ── */}
      {withData.map((k) => (
        <section key={k.continent} aria-labelledby={`m-${k.continent}`}>
          <h2 id={`m-${k.continent}`} className={`${styles.metaBar} ${own.barTitle} ${own.continentBar}`}>
            <span>{k.continent}</span>
            <span className={own.barRight}>
              {usdM(k.total)} · {nightsLabel(k.shows)}
            </span>
          </h2>
          {k.countries.map((c) => (
            <div key={c.flag}>
              <div className={own.countryHead}>
                <h3 className={own.countryName}>
                  <span aria-hidden="true">{c.flag}</span> {c.name}
                </h3>
                <span className={own.countryLead}>
                  <span className={c.leader.his ? own.leadHis : own.leadOther}>{c.leader.artist}</span>{" "}
                  {leaderLine(c)}
                </span>
              </div>
              {c.artists.map((a, i) => (
                <Row key={a.artist} a={a} rank={i + 1} />
              ))}
            </div>
          ))}
        </section>
      ))}

      <p className={styles.foot}>{METHOD_NOTE}</p>

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <Link href="/records/tours/revenue" className={styles.actionPrimary}>
          Every show, ranked
        </Link>
      </div>
    </div>
  );
}
