import Link from "next/link";
import styles from "./mobileRevenue.module.css";
import own from "./mobileRevenueCountries.module.css";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import ToursDataLine from "./ToursDataLine";
import JumpSpy from "./JumpSpy";
import ScrollRail from "./ScrollRail";
import { NB, RunMeta, emptyNote, methodNote } from "./RevenueCountries";
import { pct } from "../lib/showsChips";
import { runsBasis } from "../lib/multiNightRuns";
import {
  continentAnchor,
  countryAnchor,
  heroFigures,
  ladderRows,
  leadsOnTotal,
  nightsLabel,
  runParts,
  shareOf,
  usdM,
  widthPct,
  type ArtistTotal,
  type ContinentBoard,
  type CountryBoard,
  type RevenueByCountry,
} from "../lib/revenueByCountry";

/**
 * Highest-Grossing Artists by Country — the phone screen. Claude Design round
 * 1 (4 Oct 2026), Job 1, "ranked bars": designs/desktop/GXCountriesPhone.dc.html,
 * with the review's fixes and the owner's rulings where they differ. Its own
 * component, never the desktop's (RevenueCountries); both read the one derived
 * board (app/lib/revenueByCountry.ts).
 *
 * The back bar and action bar are the site's chrome, unchanged: the badge is
 * plain muted text (fix 2) and "Every show, ranked" stays the one gold action.
 * One money form on the screen: the short one, "$15.50M" / "$385K" (fix 4).
 * Every country's full ranked list stays open — dense lists, never an
 * accordion. Gold marks his figures only; his name and every rank are ink (N4).
 */

/** The continent rail's short names, so six chips stay readable. */
const SHORT: Record<string, string> = { "North America": "N. America", "South America": "S. America" };

/**
 * A continent chip's words: "N. America" on screen, and an accessible name
 * that starts with what is on screen — "N. America (North America)" — so a
 * speech-input user who says the visible label is understood (WCAG 2.5.3;
 * E-14, 4 Oct 2026: the aria-label "North America" replaced the label).
 */
function ChipName({ continent }: { continent: string }) {
  const short = SHORT[continent];
  if (!short) return <>{continent}</>;
  return (
    <>
      {short}
      <span className="visuallyHidden"> ({continent})</span>
    </>
  );
}

/** The bar under a heading: his part gold, the rest --other, a 2px gap. */
function SplitBar({ c }: { c: CountryBoard }) {
  return (
    <div
      className={own.splitBar}
      role="img"
      aria-label={c.artists.map((a) => `${a.artist} ${pct(shareOf(a, c))}`).join(", ")}
    >
      {c.artists.map((a) => (
        <span key={a.artist} className={`${styles.seg} ${a.his ? styles.segHis : ""}`} style={{ width: widthPct(shareOf(a, c)) }} />
      ))}
    </div>
  );
}

function Row({ a, rank }: { a: ArtistTotal; rank: number }) {
  return (
    <div className={`${own.row} ${a.his ? "" : own.rowOther}`}>
      <span className={own.rank}>{String(rank).padStart(2, "0")}</span>
      {/* His name in the same ink and place as everyone's (N4). */}
      <span className={own.artist}>{a.artist}</span>
      <span className={`${styles.gross} ${own.total} ${a.his ? styles.grossHis : styles.grossOther}`}>{usdM(a.total)}</span>
      <span className={own.sub}>
        {a.best ? (
          <span>
            <span className={`${own.subStrong} ${own.nowrap}`}>{nightsLabel(a.shows)}</span> · best{" "}
            {/* His best night is gold on the phone too (fix 7). */}
            <span className={`${own.bestFig} ${a.his ? own.bestHis : ""}`}>{usdM(a.best.revenue)}</span>
            {a.best.tickets ? `${NB}· ${a.best.tickets}${NB}tickets` : ""}
            <br />
            {a.best.venue} · {a.best.city} · {a.best.year}
          </span>
        ) : (
          <span>
            <span className={`${own.subStrong} ${own.nowrap}`}>{nightsLabel(a.shows)}</span> · no single night reported here
          </span>
        )}
        {a.stands.map((st) => {
          const r = runParts(st, usdM);
          return (
            <span key={`${st.venue}-${st.dates}`} className={own.run}>
              <span className={own.runHead}>
                <span className={own.runMarker}>
                  <span className={own.runMarkerBars} aria-hidden="true">
                    <span />
                    <span />
                  </span>
                  <span>{r.marker}</span>
                </span>
                <span className={`${own.runFig} ${a.his ? own.runHis : ""}`}>{r.gross}</span>
              </span>
              {/* The dates and "tickets over nights" each kept whole (A-06). */}
              <span>
                {r.place}
                {NB}· <RunMeta st={st} keep={own.nowrap} />
              </span>
            </span>
          );
        })}
      </span>
    </div>
  );
}

function CountryBlock({ c }: { c: CountryBoard }) {
  const single = c.artists.length === 1;
  const callout = leadsOnTotal(c, usdM, "phone");
  return (
    <div id={countryAnchor(c.name, true)} className={own.country}>
      <div className={own.countryHead}>
        <h3 className={own.countryName}>
          <span className={own.flag} aria-hidden="true">
            {c.flag}
          </span>
          {c.name}
        </h3>
        <div className={own.countryLead}>
          <span className={own.leadName}>{c.leader.artist}</span>{" "}
          {single ? (
            <>
              · the only artist reported ·{" "}
              <span className={`${own.leadFig} ${c.leader.his ? own.leadHis : ""}`}>{usdM(c.total)}</span>
              {NB}· <span className={own.nowrap}>{nightsLabel(c.shows)}</span>
            </>
          ) : (
            // "12 | nights" split at 320 and 360 (A-07): the count keeps its unit.
            <>
              leads · <span className={`${own.leadFig} ${c.leader.his ? own.leadHis : ""}`}>{usdM(c.leader.total)}</span> of{" "}
              {usdM(c.total)}
              {NB}· {pct(shareOf(c.leader, c))}
              {NB}· <span className={own.nowrap}>{nightsLabel(c.shows)}</span>
            </>
          )}
        </div>
        {!single && <SplitBar c={c} />}
        {callout && (
          <p className={own.callout}>
            <span className={own.calloutLabel}>Leads on total</span>
            {callout}
          </p>
        )}
      </div>
      {c.artists.map((a, i) => (
        <Row key={a.artist} a={a} rank={i + 1} />
      ))}
    </div>
  );
}

function ContinentRow({ k }: { k: ContinentBoard }) {
  if (k.countries.length === 0)
    return (
      <div className={own.contRow}>
        <div className={own.hatch}>
          <div className={own.contTop}>
            <span className={own.contName}>{k.continent}</span>
            <span className={own.emptyTitle}>No reported box office yet</span>
          </div>
          <div className={own.emptyNote}>{emptyNote(k.continent)}</div>
        </div>
      </div>
    );
  const L = k.leader!;
  const next = k.artists[1];
  return (
    <div className={own.contRow}>
      <div className={own.contTop}>
        <span className={own.contName}>{k.continent}</span>
        {/* The CONTINENT's total, in ink: every artist's, not his. */}
        <span className={own.contTotal}>{usdM(k.total)}</span>
      </div>
      <span className={own.contBar} role="img" aria-label={`${L.artist} ${pct(shareOf(L, k))} of ${k.continent}`}>
        <span className={`${styles.seg} ${L.his ? styles.segHis : ""}`} style={{ width: widthPct(shareOf(L, k)) }} />
        {k.artists.length > 1 && <span className={styles.seg} style={{ flex: 1 }} />}
      </span>
      {/* The figure and its share as one unit, as on desktop (A-13). */}
      <div className={own.contLead}>
        <span className={own.leadName}>{L.artist}</span> leads ·{" "}
        <span className={own.nowrap}>
          <span className={`${own.leadFig} ${L.his ? own.leadHis : ""}`}>{usdM(L.total)}</span> · {pct(shareOf(L, k))}
        </span>
        {NB}· {next ? `next ${next.artist}, ${usdM(next.total)}` : "the only artist reported"}
      </div>
      <div className={own.contMeta}>
        <span className={own.nowrap}>{nightsLabel(k.shows)}</span>
        {NB}·{" "}
        <span className={own.nowrap}>
          {k.countries.length} {k.countries.length === 1 ? "country" : "countries"}
        </span>
      </div>
    </div>
  );
}

export default function MobileRevenueCountries({ board }: { board: RevenueByCountry }) {
  const hero = heroFigures(board);
  const ladder = ladderRows(board);
  const note = methodNote(board, "phone");

  return (
    <div className={styles.screen}>
      <div className={`${styles.backBar} ${own.bar}`}>
        <BackLink href="/records/tours/revenue" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={`${styles.backLabel} ${own.barLabel}`}>By country</span>
        {/* Every artist's countries, not his: plain muted text, no fill, no
            border — the chrome as live (C3, 3 Oct 2026; review fix 2). */}
        <span className={`${styles.badge} ${own.barBadge} ${own.mutedBadge}`}>{board.countryCount} countries</span>
        <MobileMenuButton />
      </div>

      {/* ── Hero: the story, complete above the first bars ── */}
      <section className={styles.showHero}>
        <div className={styles.showKicker}>
          <span className={styles.showKickerRule} aria-hidden="true" />
          Reported box office
        </div>
        {/* The page's <h1> on phones; the desktop column carries its own. */}
        <h1 className={styles.title}>
          Highest-grossing artists <span className={styles.gold}>by country</span>
        </h1>
        <div className={own.grand}>
          <span className={own.grandValue}>{usdM(board.grandTotal)}</span>
          <span className={own.grandLabel}>
            Reported
            <br />
            gross
          </span>
        </div>
        <div className={`${styles.figs} ${own.figs}`}>
          <div className={styles.fig}>
            {/* Every artist's nights: ink, not his gold. */}
            <span className={styles.figValue}>{board.showCount}</span>
            <span className={styles.figLabel}>Nights</span>
          </div>
          <div className={styles.fig}>
            <span className={styles.figValue}>
              {board.continentCount} of {hero.continentsAll}
            </span>
            <span className={styles.figLabel}>Continents</span>
          </div>
          <div className={styles.fig}>
            {/* Ink, like every tile here: the owner's #420 ruling on the
                shows hero ("so much gold"), carried to this one (A-04). */}
            <span className={styles.figValue}>
              {board.hisLeads} of {board.countryCount}
            </span>
            <span className={styles.figLabel}>He leads</span>
          </div>
        </div>
        {/* $44.99M is the hero's one gold figure; the share beside it is ink. */}
        <div className={own.share}>
          <span className={own.shareSum}>
            <span className={own.leadName}>Burna Boy</span> · <span className={own.shareGold}>{usdM(hero.hisTotal)}</span>{" "}
            of every reported gross, {runsBasis(board.standCount, true)}
          </span>
          <span className={own.sharePct}>{pct(hero.hisShare)}</span>
        </div>
        <div
          className={`${styles.shareBar} ${styles.grow} ${own.heroBar}`}
          role="img"
          aria-label={`Burna Boy ${pct(hero.hisShare)} of every reported gross; ${hero.otherArtists} other artists the rest`}
        >
          <span className={`${styles.seg} ${styles.segHis}`} style={{ width: widthPct(hero.hisShare) }} />
          <span className={styles.seg} style={{ flex: 1 }} />
        </div>
      </section>

      {/* ── The country ladder: each bar a link to its country ── */}
      <section className={own.ladderSec} aria-labelledby="m-ladder-title">
        <div className={own.ladderHead}>
          <h2 id="m-ladder-title" className={own.ladderTitle}>
            By country
          </h2>
          <span className={own.key} aria-hidden="true">
            <span className={`${own.keySwatch} ${styles.segHis}`} />
            His
            <span className={`${own.keySwatch} ${own.keyOther}`} />
            Others
          </span>
        </div>
        <ol className={own.ladder}>
          {ladder.map((r) => (
            <li key={r.flag}>
              <a
                href={`#${countryAnchor(r.name, true)}`}
                className={own.ladderRow}
                aria-label={`${r.name}: ${usdM(r.total)}, led by ${r.leader}. Jump to ${r.name}`}
              >
                <span className={own.ladderPos}>{r.rank}</span>
                {/* The country, its leader named under it, muted, for every
                    row — his too (review fix 5). */}
                <span className={own.ladderWho}>
                  <span className={own.ladderName}>
                    <span className={own.flag} aria-hidden="true">
                      {r.flag}
                    </span>
                    <span className={own.clip}>{r.name}</span>
                  </span>
                  <span className={own.ladderLeader}>{r.leader}</span>
                </span>
                <span className={own.ladderTrack} aria-hidden="true">
                  <span className={`${own.ladderFill} ${own.grow}`} style={{ width: widthPct(r.w) }}>
                    {r.his > 0 && <span className={`${styles.seg} ${styles.segHis}`} style={{ width: widthPct(r.his) }} />}
                    {r.his < 1 && <span className={styles.seg} style={{ flex: 1 }} />}
                  </span>
                </span>
                <span className={own.ladderTotal}>{usdM(r.total)}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* ── The jump control: in the flow after the ladder, then held under
          the back bar (z 4, under the bar's 5); the continent on screen takes
          the ember on-state, never a gold fill (N2). ── */}
      <JumpSpy as="nav" className={own.railStick} label="Jump to a continent" offset={160}>
        <ScrollRail className={own.rail} label="Continents">
          {board.continents.map((k) => (
            <a
              key={k.continent}
              href={`#${continentAnchor(k.continent, true)}`}
              className={`${own.chip} ${k.countries.length === 0 ? own.chipEmpty : ""}`}
            >
              <ChipName continent={k.continent} />
            </a>
          ))}
        </ScrollRail>
      </JumpSpy>

      {/* ── Continents, said once ── */}
      <section className={own.contSec} aria-labelledby="m-continents-title">
        <h2 id="m-continents-title" className={own.secTitle}>
          By continent
        </h2>
        {board.continents.map((k) => (
          <ContinentRow key={k.continent} k={k} />
        ))}
      </section>

      {/* ── Countries, grouped by continent; Africa and South America shown
          as places with no reported box office yet (item 2, Q1). ── */}
      {board.continents.map((k) => (
        <section
          key={k.continent}
          id={continentAnchor(k.continent, true)}
          className={own.group}
          aria-labelledby={`${continentAnchor(k.continent, true)}-title`}
        >
          {/* The h2 holds the continent alone; its figures sit beside it (C9). */}
          <div className={own.groupHead}>
            <h2 id={`${continentAnchor(k.continent, true)}-title`} className={own.groupTitle}>
              {k.continent}
            </h2>
            {k.countries.length > 0 && (
              <span className={own.groupMeta}>
                {usdM(k.total)} · {nightsLabel(k.shows)}
              </span>
            )}
          </div>
          {k.countries.length === 0 && (
            <div className={`${own.hatch} ${own.emptyBlock}`}>
              <div className={own.emptyTitle}>No reported box office yet</div>
              <div className={own.emptyNote}>{emptyNote(k.continent)}</div>
            </div>
          )}
          {k.countries.map((c) => (
            <CountryBlock key={c.flag} c={c} />
          ))}
        </section>
      ))}

      <section className={styles.method} aria-label="How this page counts">
        <dl className={`${styles.methodList} ${own.methodList}`}>
          {note.map((n) => (
            <div key={n.k} className={styles.methodRow}>
              <dt>{n.k}</dt>
              <dd>{n.v}</dd>
            </div>
          ))}
          <div className={styles.methodRow}>
            <dt>Data</dt>
            <dd>
              <ToursDataLine />
            </dd>
          </div>
        </dl>
      </section>

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <Link href="/records/tours/revenue" className={styles.actionPrimary}>
          Every show, ranked
        </Link>
      </div>
    </div>
  );
}
