import Link from "next/link";
import styles from "../records/tours/revenue/revenue.module.css";
import own from "../records/tours/revenue/countries/countries.module.css";
import BreadcrumbBar from "./BreadcrumbBar";
import JumpSpy from "./JumpSpy";
import { REVENUE_AS_OF, REVENUE_SOURCE } from "../lib/revenueSource";
import { pct } from "../lib/showsChips";
import {
  CONTINENT_ORDER,
  continentAnchor,
  countryAnchor,
  countryInSentence,
  heroFigures,
  ladderRows,
  leadsOnTotal,
  nightsLabel,
  runMetaParts,
  runParts,
  runsNote,
  shareOf,
  summaryLine,
  usdM,
  widthPct,
  type ArtistTotal,
  type ContinentBoard,
  type CountryBoard,
  type RevenueByCountry,
  type StandLine,
} from "../lib/revenueByCountry";

/**
 * Highest-Grossing Artists by Country — desktop. Claude Design round 1
 * (4 Oct 2026), Job 1, "ranked bars" (designs/desktop/GXCountriesDesk.dc.html),
 * with the review's fixes 1–10 and the owner's rulings Q1 and N4 where they
 * differ from the canvas. The phone screen is MobileRevenueCountries, its own
 * component; both read the one derived board (app/lib/revenueByCountry.ts).
 *
 * One money form on the screen: the short one, "$15.50M" / "$385K" (fix 4) —
 * the hero, the ladder, the index, the heads and the rows agree.
 *
 * Gold marks HIS figures only (tests/goldMarksHisRows.test.ts): his gross, his
 * best night, his runs, his part of every bar, the countries he leads. His
 * name and every rank are set in the same ink as everyone else's (N4).
 */

/** The places with no reported box office, and why (owner rulings: Africa,
 *  3 Oct 2026; South America, Q1, 4 Oct 2026). */
export const AFRICA_NOTE =
  "Box-office reporting barely reaches venues in Africa — not reported, not unplayed.";
/** The review's nit on item 2: the canvas's note repeated its own heading. */
export const SOUTH_AMERICA_NOTE = "Not reported, not unplayed.";
export const EMPTY_NOTE: Partial<Record<(typeof CONTINENT_ORDER)[number], string>> = {
  Africa: AFRICA_NOTE,
  "South America": SOUTH_AMERICA_NOTE,
};
/** Any other continent that ever has no box office: no claim either way. */
export const emptyNote = (continent: string) =>
  EMPTY_NOTE[continent as keyof typeof EMPTY_NOTE] ?? "No gross from a venue there is on the board yet.";

/** The source line: REVENUE_SOURCE + ", as of " + REVENUE_AS_OF, never typed
 *  (review fix 18, as on Highest-grossing shows). */
export const SOURCE_LINE = `${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}.`;

/** A no-break space: binds a separator to the words before it, so a line
 *  never starts with "· ". */
export const NB = "\u00a0";

/** Every count held to the word after it — "(89 nights)", "12 countries" —
 *  for prose the page prints as one string (A-missed, 4 Oct 2026: the method
 *  note broke "(89 | nights)" on both layouts). Display only: the data,
 *  JSON-LD and metadata keep plain spaces. */
export const keepCounts = (s: string) => s.replace(/(\d[\d,.]*) (?=\S)/g, (_, n: string) => `${n}${NB}`);

/**
 * A run's meta on either layout: "{tour} · {dates} · {tickets} tickets over
 * {k} nights", the tour, the dates and the tickets each kept whole and every
 * separator ending the line it follows (A-06, E-11, D-13: "28– | 29 November",
 * "50,814 | tickets", "over 3 | nights" on desktop and phone; on the preview,
 * "Made in Lagos | Tour" at 320, 920 and 1240).
 */
export function RunMeta({ st, keep }: { st: StandLine; keep: string }) {
  const m = runMetaParts(st);
  return (
    <>
      <span className={keep}>{m.tour}</span>
      {NB}· <span className={keep}>{m.dates}</span>
      {NB}· <span className={keep}>{m.tickets}</span>
    </>
  );
}

/**
 * How the page counts — the method note, desktop wording (GXCountriesDesk's
 * five rows), with the source line and the two empty continents (Q1).
 */
export function methodNote(b: RevenueByCountry, form: "desk" | "phone") {
  const desk = form === "desk";
  return [
    { k: "Source", v: SOURCE_LINE },
    {
      k: desk ? "What counts" : "Counts",
      v: keepCounts(
        desk
          ? `Every row of Highest-grossing shows and its multi-night runs: ${summaryLine(b)}.`
          : `${summaryLine(b)}.`.replace(/^./, (c) => c.toUpperCase())
      ),
    },
    {
      k: desk ? "A country total" : "Totals",
      v: desk
        ? "Every reported gross an artist has there, multi-night runs included. Each run is one reported figure and counts every night it played."
        : "Every reported gross in a country, runs included; a run is one figure for all its nights.",
    },
    { k: "Best night", v: desk ? "A single show only. A run is never counted as one night." : "A single show only, never a run." },
    {
      k: desk ? "Not reported" : "Missing",
      v: desk
        ? "Reporting is incomplete: an artist missing from a country means no gross was reported, not that they never played there."
        : "Not reported — not unplayed.",
    },
    {
      k: "Africa",
      v: desk
        ? "Billboard Boxscore and Pollstar rarely publish grosses from venues in Africa, which is why the continent has no reported box office here yet."
        : "Boxscore and Pollstar rarely publish grosses there.",
    },
    {
      k: "South America",
      v: desk
        ? "No gross from a venue in South America is on the board yet — not reported, not unplayed."
        : "None on the board yet — not reported, not unplayed.",
    },
  ];
}

/** His part gold, everyone else's --other, a 2px ground gap between them. */
function SplitBar({ c, className }: { c: CountryBoard; className: string }) {
  return (
    <div
      className={className}
      role="img"
      aria-label={c.artists.map((a) => `${a.artist} ${pct(shareOf(a, c))}`).join(", ")}
    >
      {c.artists.map((a) => (
        <span
          key={a.artist}
          className={`${own.seg} ${a.his ? own.segHis : ""}`}
          style={{ width: widthPct(shareOf(a, c)) }}
        />
      ))}
    </div>
  );
}

function RunLines({ a }: { a: ArtistTotal }) {
  return (
    <>
      {a.stands.map((st) => {
        const r = runParts(st, usdM);
        return (
          <span key={`${st.venue}-${st.dates}`} className={own.run}>
            <span className={own.runMarker}>
              <span className={own.runMarkerBars} aria-hidden="true">
                <span />
                <span />
              </span>
              <span>{r.marker}</span>
            </span>
            <span className={own.runText}>
              <span className={`${own.runFig} ${a.his ? own.runHis : ""}`}>{r.gross}</span>
              {NB}· {r.place}
              {NB}· <RunMeta st={st} keep={own.nowrap} />
            </span>
          </span>
        );
      })}
    </>
  );
}

function ArtistRow({ a, rank, c }: { a: ArtistTotal; rank: number; c: CountryBoard }) {
  const note = runsNote(a);
  const share = shareOf(a, c);
  // No wash on his rows: the canvas row is clear but for hover, and gold
  // marks his figures only (N4).
  return (
    <div role="row" className={own.row}>
      {/* Every rank in the same ink, his No. 1 included: gold marks his
          figures only (N4, 4 Oct 2026; C2, 3 Oct 2026, had already taken it
          off Tyla's 01 in Japan, the Philippines and Singapore). */}
      <span role="cell" className={own.rank}>
        {String(rank).padStart(2, "0")}
      </span>
      {/* His name in the same ink and place as every other (N4). */}
      <span role="cell" className={styles.otherName}>
        {a.artist}
      </span>
      <span role="cell" className={own.bestCell}>
        {a.best && (
          <>
            <span className={own.bestLine}>
              <span className={`${own.bestFig} ${a.his ? own.bestHis : ""}`}>{usdM(a.best.revenue)}</span> ·{" "}
              {a.best.venue}
            </span>
            <span className={own.bestMeta}>
              {a.best.city} · {a.best.year}
              {a.best.tickets ? `${NB}· ${a.best.tickets}${NB}tickets` : ""}
            </span>
          </>
        )}
        <RunLines a={a} />
        {note && <span className={own.bestMeta}>{note}</span>}
      </span>
      <span role="cell" className={own.nights}>
        {a.shows}
      </span>
      <span role="cell" className={own.shareCell}>
        <span className={own.shareTrack} aria-hidden="true">
          <span className={`${own.shareFill} ${a.his ? own.shareFillHis : ""}`} style={{ width: widthPct(share) }} />
        </span>
        <span className={own.sharePct}>{pct(share)}</span>
      </span>
      <span role="cell" className={`${styles.gross} ${own.total} ${a.his ? styles.grossHis : styles.grossOther}`}>
        {usdM(a.total)}
      </span>
    </div>
  );
}

function CountryBlock({ c }: { c: CountryBoard }) {
  const single = c.artists.length === 1;
  const callout = leadsOnTotal(c, usdM, "desk");
  return (
    <div id={countryAnchor(c.name)} className={own.country}>
      <div className={own.countryHead}>
        <h3 className={own.countryName}>
          <span className={own.flag} aria-hidden="true">
            {c.flag}
          </span>
          {c.name}
        </h3>
        {/* The leader's own total against the country's (leaderLine). Named
            in ink, his included (N4); only his figure is gold. */}
        <span className={own.countryLead}>
          <span className={own.leadName}>{c.leader.artist}</span>{" "}
          {single ? (
            <>
              · the only artist reported ·{" "}
              <span className={`${own.leadFig} ${c.leader.his ? own.leadHis : ""}`}>{usdM(c.total)}</span>
              {NB}· <span className={own.nowrap}>{nightsLabel(c.shows)}</span> reported
            </>
          ) : (
            <>
              leads · <span className={`${own.leadFig} ${c.leader.his ? own.leadHis : ""}`}>{usdM(c.leader.total)}</span>{" "}
              of {usdM(c.total)}
              {NB}· {pct(shareOf(c.leader, c))}
              {NB}· <span className={own.nowrap}>{nightsLabel(c.shows)}</span> reported
            </>
          )}
        </span>
      </div>
      {/* One artist: no split bar to draw (fix 6, S3). */}
      {!single && <SplitBar c={c} className={own.countryBar} />}
      {callout && (
        <p className={own.callout}>
          <span className={own.calloutLabel}>Leads on total</span>
          {callout}
        </p>
      )}
      <div className={own.table} role="table" aria-label={`Box office leaders in ${countryInSentence(c.name)}`}>
        {/* The visible column heads sit once, over every table; each table
            still names its columns for a screen reader. */}
        <div role="row" className="visuallyHidden">
          <span role="columnheader">Rank</span>
          <span role="columnheader">Artist</span>
          <span role="columnheader">Best single night</span>
          <span role="columnheader">Nights</span>
          <span role="columnheader">Share of country</span>
          <span role="columnheader">Total gross</span>
        </div>
        {c.artists.map((a, i) => (
          <ArtistRow key={a.artist} a={a} rank={i + 1} c={c} />
        ))}
      </div>
    </div>
  );
}

function ContinentCard({ k, rank }: { k: ContinentBoard; rank: number }) {
  if (k.countries.length === 0)
    return (
      <li className={`${own.card} ${own.cardEmpty}`}>
        <span className={own.cardHead}>
          <span className={own.cardName}>{k.continent}</span>
          <span className={own.cardPos} aria-hidden="true">
            —
          </span>
        </span>
        <span className={own.hatch}>
          <span className={own.emptyTitle}>No reported box office yet</span>
          <span className={own.emptyNote}>{emptyNote(k.continent)}</span>
        </span>
      </li>
    );
  const L = k.leader!;
  const next = k.artists[1];
  return (
    <li className={own.card}>
      <span className={own.cardHead}>
        <span className={own.cardName}>{k.continent}</span>
        <span className={own.cardPos}>{String(rank).padStart(2, "0")}</span>
      </span>
      <span className={own.cardTotal}>{usdM(k.total)}</span>
      <span className={own.cardMeta}>
        <span className={own.nowrap}>{nightsLabel(k.shows)}</span> ·{" "}
        <span className={own.nowrap}>
          {k.countries.length} {k.countries.length === 1 ? "country" : "countries"}
        </span>
      </span>
      <span className={own.cardBar} role="img" aria-label={`${L.artist} ${pct(shareOf(L, k))} of ${k.continent}`}>
        <span className={`${own.seg} ${L.his ? own.segHis : ""}`} style={{ width: widthPct(shareOf(L, k)) }} />
        {k.artists.length > 1 && <span className={own.seg} style={{ flex: 1 }} />}
      </span>
      {/* The figure and its share as one unit: "$21.18M | · 61.7%" and
          "$2.06M · | 100.0%" left the share alone on a line (A-13). */}
      <span className={own.cardLead}>
        <span className={own.leadName}>{L.artist}</span> leads ·{" "}
        <span className={own.nowrap}>
          <span className={`${own.leadFig} ${L.his ? own.leadHis : ""}`}>{usdM(L.total)}</span> · {pct(shareOf(L, k))}
        </span>
      </span>
      <span className={own.cardNext}>{next ? `Next: ${next.artist} · ${usdM(next.total)}` : "The only artist reported"}</span>
    </li>
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
  const hero = heroFigures(board);
  const ladder = ladderRows(board);
  const note = methodNote(board, "desk");

  return (
    <div className={styles.desktopOnly}>
      <BreadcrumbBar path={path} />

      <div className={styles.page}>
        {/* ── Hero: the story at the left, the ladder at the right ── */}
        <section className={own.hero}>
          <div className={styles.heroMain}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              African artists · reported box office
            </div>
            <h1 className={`${styles.h1} ${own.h1}`}>
              Highest-Grossing Artists <span className="inkText">by Country</span>
            </h1>
            <p className={`${styles.lede} ${styles.heroLede}`}>{lede}</p>
            <div className={`${styles.figs} ${own.figs}`}>
              <div className={styles.fig}>
                <span className={styles.figValue}>{usdM(board.grandTotal)}</span>
                <span className={styles.figLabel}>Reported gross</span>
              </div>
              <div className={styles.fig}>
                <span className={styles.figValue}>{board.showCount}</span>
                <span className={styles.figLabel}>Nights</span>
              </div>
              <div className={styles.fig}>
                <span className={styles.figValue}>{board.countryCount}</span>
                <span className={styles.figLabel}>
                  Countries · {board.continentCount} of {hero.continentsAll} continents
                </span>
              </div>
              <div className={styles.fig}>
                <span className={`${styles.figValue} ${styles.figHis}`}>
                  {board.hisLeads} of {board.countryCount}
                </span>
                <span className={styles.figLabel}>Countries he leads</span>
              </div>
            </div>
            <div className={own.share}>
              <div className={own.shareHead}>
                <span className={own.shareSum}>
                  <span className={own.leadName}>Burna Boy</span> ·{" "}
                  <span className={own.shareGold}>{usdM(hero.hisTotal)}</span> of {usdM(board.grandTotal)} reported
                </span>
                <span className={own.sharePctBig}>{pct(hero.hisShare)}</span>
              </div>
              <div
                className={`${own.heroBar} ${own.grow}`}
                role="img"
                aria-label={`Burna Boy ${pct(hero.hisShare)} of ${usdM(board.grandTotal)} reported gross; ${hero.otherArtists} other artists ${pct(1 - hero.hisShare)}`}
              >
                <span className={`${own.seg} ${own.segHis}`} style={{ width: widthPct(hero.hisShare) }} />
                <span className={own.seg} style={{ flex: 1 }} />
              </div>
              <div className={own.shareCap}>
                <span>His share of every reported gross</span>
                <span>
                  {usdM(hero.othersTotal)} · {hero.otherArtists} other artists
                </span>
              </div>
            </div>
            <div className={styles.heroBtns}>
              <Link href="/records/tours/revenue" className="btn btnSecondary">
                ← Highest-grossing shows
              </Link>
            </div>
          </div>

          {/* The ladder: every country, the way into the page. Each bar is the
              country's total, linear against the largest; his part gold; the
              leader named for every row, his too (fix 5). */}
          <div className={own.ladderCol}>
            <div className={own.ladderHead}>
              <h2 className={own.ladderTitle}>Countries, by reported gross</h2>
              <span className={own.key} aria-hidden="true">
                <span className={`${own.keySwatch} ${own.segHis}`} />
                Burna Boy
                <span className={`${own.keySwatch} ${own.keyOther}`} />
                Others
              </span>
            </div>
            <ol className={own.ladder}>
              {ladder.map((r) => (
                <li key={r.flag}>
                  <a
                    href={`#${countryAnchor(r.name)}`}
                    className={own.ladderRow}
                    aria-label={`${r.name}: ${usdM(r.total)}, led by ${r.leader}. Jump to ${r.name}`}
                  >
                    <span className={own.ladderPos}>{r.rank}</span>
                    <span className={own.ladderName}>
                      <span className={own.flag} aria-hidden="true">
                        {r.flag}
                      </span>
                      <span className={own.clip}>{r.name}</span>
                    </span>
                    <span className={own.ladderLeader}>{r.leader}</span>
                    <span className={own.ladderTrack} aria-hidden="true">
                      <span className={`${own.ladderFill} ${own.grow}`} style={{ width: widthPct(r.w) }}>
                        {r.his > 0 && <span className={`${own.seg} ${own.segHis}`} style={{ width: widthPct(r.his) }} />}
                        {r.his < 1 && <span className={own.seg} style={{ flex: 1 }} />}
                      </span>
                    </span>
                    <span className={own.ladderTotal}>{usdM(r.total)}</span>
                  </a>
                </li>
              ))}
            </ol>
            <p className={own.ladderNote}>
              Linear scale, each bar the country’s total; the smallest is drawn at least 3px so it stays visible.
              Select a country to jump to it.
            </p>
          </div>
        </section>

        {/* ── Continents, said once ── */}
        <section className={own.continents} aria-labelledby="continents-title">
          <h2 id="continents-title" className={own.sectionTitle}>
            By continent
          </h2>
          <ul className={own.cards}>
            {board.continents.map((k, i) => (
              <ContinentCard key={k.continent} k={k} rank={i + 1} />
            ))}
          </ul>
        </section>

        {/* ── Countries, grouped by continent, beside the sticky index ── */}
        <div className={own.main}>
          <JumpSpy as="nav" className={own.index} label="Jump to a country" offset={140} selector="a[data-spy]">
            <span className={own.indexTitle}>Jump to</span>
            {board.continents.map((k) => (
              <div key={k.continent} className={own.indexGroup}>
                {/* A continent's label marks the place only where it has no
                    country of its own to mark (Africa, South America). */}
                <a
                  href={`#${continentAnchor(k.continent)}`}
                  className={own.indexContinent}
                  data-spy={k.countries.length === 0 ? "" : undefined}
                >
                  {k.continent}
                </a>
                {k.countries.map((c) => (
                  <a key={c.flag} href={`#${countryAnchor(c.name)}`} className={own.indexLink} data-spy="">
                    <span className={own.flag} aria-hidden="true">
                      {c.flag}
                    </span>
                    <span className={own.indexName}>{c.name}</span>
                    <span className={own.indexVal}>{usdM(c.total)}</span>
                  </a>
                ))}
              </div>
            ))}
          </JumpSpy>

          <div className={own.tables}>
            <div className={own.headRow} aria-hidden="true">
              <span>#</span>
              <span>Artist</span>
              <span>Best single night</span>
              <span className={styles.right}>Nights</span>
              <span>Share of country</span>
              <span className={styles.right}>Total gross</span>
            </div>

            {board.continents.map((k) => (
              <section
                key={k.continent}
                id={continentAnchor(k.continent)}
                className={own.continent}
                aria-labelledby={`${continentAnchor(k.continent)}-title`}
              >
                <h2 id={`${continentAnchor(k.continent)}-title`} className={own.continentTitle}>
                  {k.continent}
                </h2>
                {k.countries.length > 0 ? (
                  <span className={own.continentMeta}>
                    {k.countries.length} {k.countries.length === 1 ? "country" : "countries"}
                  </span>
                ) : (
                  <div className={`${own.hatch} ${own.emptyBlock}`}>
                    <span className={own.emptyTitle}>No reported box office yet</span>
                    <span className={own.emptyNote}>{emptyNote(k.continent)}</span>
                  </div>
                )}
                {k.countries.map((c) => (
                  <CountryBlock key={c.flag} c={c} />
                ))}
              </section>
            ))}

            <section className={styles.method} aria-label="How this page counts">
              <dl className={styles.methodList}>
                {note.map((n) => (
                  <div key={n.k} className={styles.methodRow}>
                    <dt>{n.k}</dt>
                    <dd>{n.v}</dd>
                  </div>
                ))}
              </dl>
              <div className={own.backRow}>
                <Link href="/records/tours/revenue" className="btn btnSecondary">
                  ← Highest-grossing shows
                </Link>
                <Link href="/records/tours" className="btn btnSecondary">
                  Tours
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
