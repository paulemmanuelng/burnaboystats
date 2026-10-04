import Link from "next/link";
import styles from "../records/tours/revenue/revenue.module.css";
import own from "../records/tours/revenue/countries/countries.module.css";
import BreadcrumbBar from "./BreadcrumbBar";
import { REVENUE_AS_OF, REVENUE_SOURCE } from "../lib/revenueSource";
import {
  countryInSentence,
  idSlug,
  leaderLine,
  runCell,
  nightsLabel,
  standNote,
  usdFull,
  usdM,
  type ArtistTotal,
  type ContinentBoard,
  type RevenueByCountry,
} from "../lib/revenueByCountry";

/**
 * Box office by country — desktop. The phone screen is MobileRevenueCountries;
 * both take the same derived board (app/lib/revenueByCountry.ts).
 *
 * The look is the revenue board's: its hero, its row grammar, its rank and name
 * classes, and gold on HIS figures only (tests/goldMarksHisRows.test.ts) —
 * everyone else's money reads muted, or a page of other artists' totals would
 * read as his.
 */

export const AFRICA_NOTE =
  "Box-office reporting barely reaches venues in Africa — not reported, not unplayed.";

/** REVENUE_SOURCE opens a sentence on the board; mid-sentence here, lower-cased. */
const SOURCE_MID = REVENUE_SOURCE.charAt(0).toLowerCase() + REVENUE_SOURCE.slice(1);

// The source wording is the board's own (REVENUE_SOURCE), not a second typed
// copy (sw-4/C7, 3 Oct 2026), and the board is named by its page name, never
// "the revenue board" (sw-1).
export const METHOD_NOTE =
  `What counts is every row of the Highest-grossing shows board: ${SOURCE_MID}, as of ${REVENUE_AS_OF}. An artist's total in a country is every reported gross there added up, including multi-night runs reported as one figure, and a run counts every night it played; the best night is a single show only. Reporting is incomplete, so an artist missing from a country means not reported, not that they did not play there — and Boxscore and Pollstar rarely publish grosses from venues in Africa, which is why the continent has no reported box office here yet.`;

function Runner({ k }: { k: ContinentBoard }) {
  const second = k.artists[1];
  if (!second) return <span className={own.cardRunner}>The only artist reported</span>;
  return (
    <span className={own.cardRunner}>
      Next: {second.artist} · {usdM(second.total)}
    </span>
  );
}

function ArtistRow({ a, rank }: { a: ArtistTotal; rank: number }) {
  const note = standNote(a);
  const run = runCell(a);
  return (
    <div role="row" className={`${own.row} ${a.his ? styles.rowHis : ""}`}>
      {/* Every rank in the same ink, his No. 1 included: gold marks his
          figures only (N4, 4 Oct 2026; C2, 3 Oct 2026, had already taken it
          off Tyla's 01 in Japan, the Philippines and Singapore). */}
      <span role="cell" className={styles.rank}>
        {String(rank).padStart(2, "0")}
      </span>
      <span role="cell" className={a.his ? styles.hisName : styles.otherName}>
        {a.artist}
      </span>
      <span role="cell" className={styles.venueCell}>
        {a.best ? (
          <>
            <span className={styles.venue}>
              {usdM(a.best.revenue)} · {a.best.venue}
            </span>
            <span className={styles.city}>
              {a.best.city} · {a.best.year}
              {a.best.tickets ? ` · ${a.best.tickets} tickets` : ""}
            </span>
          </>
        ) : (
          run && (
            <>
              <span className={styles.venue}>{run.headline}</span>
              <span className={styles.city}>{run.line}</span>
            </>
          )
        )}
        {note && <span className={styles.city}>{note}</span>}
      </span>
      <span role="cell" className={styles.tickets}>
        {a.shows}
      </span>
      <span role="cell" className={`${styles.gross} ${a.his ? styles.grossHis : ""}`}>
        {usdFull(a.total)}
      </span>
    </div>
  );
}

export default function RevenueCountries({
  board,
  lede,
  path,
}: {
  board: RevenueByCountry;
  lede: string;
  path: string;
}) {
  const withData = board.continents.filter((k) => k.countries.length > 0);
  const africa = board.continents.find((k) => k.continent === "Africa" && k.countries.length === 0);

  return (
    <div className={styles.desktopOnly}>
      <BreadcrumbBar path={path} />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.band}>
        <div className={`${styles.wide} ${styles.heroPad}`}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            African artists · reported box office
          </div>
          <h1 className={styles.h1}>
            Highest-Grossing Artists <span className="inkText">by Country</span>
          </h1>
          <p className={styles.lede}>{lede}</p>
          <div className={styles.heroBtns}>
            <Link href="/records/tours/revenue" className="btn btnSecondary">
              ← Highest-grossing shows
            </Link>
          </div>
        </div>
      </section>

      {/* ── Continents ─────────────────────────────────────── */}
      <section className={styles.band} aria-labelledby="continents-title">
        <div className={`${styles.wide} ${own.pad}`}>
          <h2 id="continents-title" className={styles.standsTitle}>By continent</h2>
          <ul className={own.cards}>
            {withData.map((k) => (
              <li key={k.continent} className={own.card}>
                <span className={own.cardLabel}>{k.continent}</span>
                {/* Two fixed lines in every card, so the leader and figure sit
                    at the same height across the row at every width. */}
                <span className={own.cardMeta}>
                  <span className={own.metaLine}>{nightsLabel(k.shows)}</span>
                  <span className={own.metaLine}>
                    {k.countries.length} {k.countries.length === 1 ? "country" : "countries"}
                  </span>
                </span>
                <span className={`${own.cardLeader} ${k.leader!.his ? styles.hisName : styles.otherName}`}>
                  {k.leader!.artist}
                </span>
                <span className={`${own.cardGross} ${k.leader!.his ? own.cardGrossHis : ""}`}>
                  {usdM(k.leader!.total)}
                </span>
                {k.artists.length > 1 && (
                  <span className={own.cardOf}>of {usdM(k.total)}</span>
                )}
                <Runner k={k} />
              </li>
            ))}
            {africa && (
              <li className={own.card}>
                <span className={own.cardLabel}>Africa</span>
                <span className={own.cardEmptyTitle}>No reported box office yet</span>
                <span className={own.cardRunner}>{AFRICA_NOTE}</span>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* ── Countries, grouped by continent ────────────────── */}
      <section className={styles.band} aria-label="Every country">
        <div className={`${styles.wide} ${own.pad}`}>
          {withData.map((k) => (
            <section key={k.continent} className={own.continent} aria-labelledby={`k-${idSlug(k.continent)}`}>
              <div className={own.continentHead}>
                <h2 id={`k-${idSlug(k.continent)}`} className={own.continentTitle}>{k.continent}</h2>
                <span className={own.continentMeta}>
                  {usdM(k.total)} · {nightsLabel(k.shows)}
                </span>
              </div>
              {k.countries.map((c) => (
                <div key={c.flag} className={own.country}>
                  <div className={own.countryHead}>
                    <h3 className={own.countryName}>
                      <span aria-hidden="true">{c.flag}</span> {c.name}
                    </h3>
                    <span className={own.countryLead}>
                      <span className={c.leader.his ? styles.hisName : styles.otherName}>{c.leader.artist}</span>{" "}
                      {leaderLine(c)}
                    </span>
                  </div>
                  <div className={styles.board} role="table" aria-label={`Box office leaders in ${countryInSentence(c.name)}`}>
                    <div className={own.headRow} role="row">
                      <span role="columnheader">#</span>
                      <span role="columnheader">Artist</span>
                      <span role="columnheader">Best night</span>
                      <span className={styles.right} role="columnheader">Nights</span>
                      <span className={styles.right} role="columnheader">Total</span>
                    </div>
                    {c.artists.map((a, i) => (
                      <ArtistRow key={a.artist} a={a} rank={i + 1} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}

          <p className={styles.sourceNote}>{METHOD_NOTE}</p>
          <div className={own.backRow}>
            <Link href="/records/tours/revenue" className="btn btnSecondary">
              ← Highest-grossing shows
            </Link>
            <Link href="/records/tours" className="btn btnSecondary">
              Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
