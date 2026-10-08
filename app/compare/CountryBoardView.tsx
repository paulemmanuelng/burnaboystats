import { Fragment } from "react";
import Link from "next/link";
import styles from "./compare.module.css";
import { fmt, keepParens, PlaqueWords, program, shortProgram, tierClass } from "./chips";
import type { SP } from "../lib/compareUrl";
import { artAt, artSrcSet } from "../lib/artAt";
import { canonicalPair, pairSlug } from "../lib/comparePairs";
import { comparableArtists } from "../lib/certUnits";
import {
  bodyOwner,
  countryBoards,
  countrySlug,
  priceCountry,
  type CountryArtistLine,
  type CountryBoard,
  type CountryPlaque,
  type CountryProgram,
} from "../lib/certCountry";
import { CERT_PROGRAMS, type CertFormat, type TierUnits } from "../data/certThresholds";
import { tierWord } from "../lib/awardName";

/**
 * /compare in COUNTRY mode — one market, every artist, ranked by the units
 * behind their plaques there.
 *
 * The rest of /compare answers "who has more?". This answers "who has more
 * WHERE?", which is the question the ledgers could not: an artist's page lists
 * their Canadian plaques, and nothing on the site put those beside every
 * other artist's Canadian plaques on one scale.
 *
 * Every figure comes from app/lib/certCountry.ts, which is a pivot of the
 * compare engine rather than a second one — see the note at the top of that
 * file, and tests/compareCountry.test.ts, which holds the two to the same
 * numbers country by country.
 *
 * NO STATE OF ITS OWN. The country is a query param on /compare and a path
 * segment on /compare/in/<country>; both render this tree, and every control
 * builds a /compare URL through `href`, exactly as the pair pages do.
 */

/** One clause, unbreakable: its spaces become no-break spaces. */
const nb = (clause: string) => clause.replace(/ /g, "\u00a0");

/** Gold 40,000 · Platinum 80,000 · Diamond 800,000 — the tiers a body awards,
 *  in order, skipping the ones it does not. A null tier is not a gap. Named as
 *  the programme names them: RIAA Latin's card read "Gold 30,000 · Platinum
 *  60,000" beside its own Platino chips (debug pass, 5 Oct 2026). Each pair
 *  holds together and the "·" rides with the pair before it, so a line breaks
 *  only after a "·": with plain spaces the card wrapped the US's "Diamond" /
 *  "10,000,000" and the UK's "Platinum" / "600,000" at 1024 and 1440 (debug
 *  pass, 7 Oct 2026). */
const tierRun = (t: TierUnits, body?: string) =>
  ([
    ["Silver", t.silver],
    ["Gold", t.gold],
    ["Platinum", t.platinum],
    ["Diamond", t.diamond],
  ] as const)
    .filter(([, n]) => n !== null)
    .map(([name, n]) => nb(`${tierWord(name, body)} ${fmt(n as number)}`))
    .join("\u00a0· ");

/** The index and a board, in the reader's features state. The pretty routes
 *  render a fixed query with features on, so a features-off view keeps the
 *  query route, which /compare canonicalises to the pretty one. "Change
 *  country" always did; the index's 27 rows linked the pretty board and
 *  turned features back on under the reader — Mexico read 1,980,000 on the
 *  row and opened at 3,960,000 (debug pass, 5 Oct 2026). The query is the
 *  one the board's own switch writes, so the two land on one URL. */
const indexHref = (includeFeatures: boolean) => (includeFeatures ? "/compare/in" : "/compare?mode=country&feat=0");
const boardHref = (code: string, includeFeatures: boolean) =>
  includeFeatures ? `/compare/in/${countrySlug(code)}` : `/compare?mode=country&country=${countrySlug(code)}&feat=0`;

/** An index row's country: flag, name, code. */
function CountryName({ b }: { b: { flag: string; name: string; code: string } }) {
  return (
    <>
      <span className={styles.flag} aria-hidden="true">{b.flag}</span>
      <span className={styles.cbCountryName}>{b.name}</span>
      <span className={styles.countryCode}>{b.code}</span>
    </>
  );
}

/** Does this board hold a plaque of this format? A format-scoped note (the
 *  singles-only § and ‡, Poland's ¶) applies only where it does. No format:
 *  the note covers both. */
const formatOnBoard = (board: CountryBoard, format?: CertFormat) =>
  !format || board.programs.some((x) => x.lines.some((l) => l.plaqueList.some((p) => p.format === format)));

/** The marks a board's figure carries on the index, as the pair pages mark a
 *  country's row: § for a stream ratio the body does not publish (Mexico,
 *  Sweden), ¶ for a figure it no longer prints (Greece, Poland's singles). The
 *  footer below the index said plaques were "marked §" and "marked ¶" and no
 *  row carried either (debug pass, 5 Oct 2026). */
const boardMarks = (board: CountryBoard): string[] => {
  const t = board.thresholds;
  return [
    t?.assumed && formatOnBoard(board, t.assumedFormat) ? "§" : null,
    t?.historic && formatOnBoard(board, t.historicFormat) ? "¶" : null,
  ].filter((m): m is string => Boolean(m));
};

function PlaqueChip({ p, code, hideProgram = false }: { p: CountryPlaque; code: string; hideProgram?: boolean }) {
  // Inside a programme's own table the marker is the table's title repeated on
  // every row; in the mixed list below it is the only thing telling a 16×
  // Platino worth 960,000 from a 5× Platinum worth 5,000,000.
  const prog = hideProgram ? null : program(p, code);
  return (
    <span className={`${styles.tierChip} ${tierClass(p.level)}`}>
      <PlaqueWords top={p} />
      {prog && (
        <span className={styles.chipProgram} title={prog}>
          <span className={styles.progLong}>{prog}</span>
          <span className={styles.progShort} aria-hidden="true">{shortProgram(prog)}</span>
        </span>
      )}
    </span>
  );
}

/** Arrival: every market the board holds a plaque in, most units first. This is
 *  the picker — a table rather than a row of chips, because the ranking IS the
 *  information, and 27 chips would hide it behind a fold. */
function CountryIndex({ options }: { options: { includeNigeria: boolean; includeFeatures: boolean } }) {
  const boards = countryBoards(options);
  const totalPlaques = boards.reduce((n, b) => n + b.plaques, 0);
  // Where "priced at the body named beside it" is not the whole story, said
  // by name and derived: IFPI Greece publishes no current level (its board is
  // priced at IFPI's June 2013 one) and Colombia's body publishes none at all.
  // The lead promised every plaque its own body's price (debug pass, 5 Oct 2026).
  const elsewhere = boards.filter((b) => b.counted && b.thresholds?.pricedAt).map((b) => `${b.name}'s at ${b.thresholds!.pricedAt}`);
  const unpriced = boards.filter((b) => !b.counted).map((b) => `${b.name}'s`);
  const listed = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`);
  return (
    <>
      <div className={styles.cbIndexHead}>
        <h2 className={styles.cbIndexTitle}>Pick a market</h2>
        <p className={styles.cbIndexLead}>
          {/* "Plaques" here counts RECORDS: one two artists share is one plaque
              in its country (Paul, 4 Oct 2026), where the site's artist-plaque
              totals count it once per holder — said, so the two figures do not
              read as a contradiction. */}
          {boards.length} countries, {fmt(totalPlaques)} certifications — a record two artists share counted once —{" "}
          {boards[0]?.artists ?? 0} artists deep in the biggest. Every figure is a floor, priced at the body named
          beside it{elsewhere.length ? ` — ${listed(elsewhere)}` : ""}
          {unpriced.length ? (
            <>
              {elsewhere.length ? ", " : " — "}
              {listed(unpriced)} not at all{"\u00a0"}<span className={styles.mark}>¹</span>
            </>
          ) : null}
          .
        </p>
      </div>
      <div className={styles.cbWrap}>
        <table className={`${styles.cbTable} ${styles.cbIndexTable}`} role="table">
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">Country<span className={styles.thSep}> · </span><span className={styles.thCount}>{boards.length}</span></th>
              <th scope="col" role="columnheader">Certified there</th>
              <th scope="col" role="columnheader" className={styles.thNum}>Certified units</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {boards.map((b) => (
              <tr key={b.code} role="row">
                <td role="cell" className={styles.cbNameCell}>
                  {/* Features on (the default, and what a crawler reads): the
                      pretty board itself, written out so the route checklist
                      sees its one inbound link. Features off: the query board
                      that keeps them off (boardHref, V-compareIn-02). */}
                  {options.includeFeatures ? (
                    <Link href={`/compare/in/${countrySlug(b.code)}`} className={styles.cbCountryLink}>
                      <CountryName b={b} />
                    </Link>
                  ) : (
                    <Link href={boardHref(b.code, false)} className={styles.cbCountryLink}>
                      <CountryName b={b} />
                    </Link>
                  )}
                </td>
                <td role="cell" className={styles.cbMetaCell}>
                  <span className={styles.cbCoverage}>
                    {b.artists} artist{b.artists === 1 ? "" : "s"} · {b.plaques} certification{b.plaques === 1 ? "" : "s"}
                    {b.notCounted ? ` · ${b.notCounted} not counted` : ""} · {b.body}
                  </span>
                </td>
                <td role="cell" className={`${styles.tdNum} ${styles.cbUnitsCell}`}>
                  {b.counted ? (
                    <span className={`${styles.units} ${styles.unitsLead}`}>
                      {fmt(b.units)}
                      {boardMarks(b).length > 0 && <>{"\u00a0"}<span className={styles.mark}>{boardMarks(b).join(" ")}</span></>}
                    </span>
                  ) : (
                    <span className={styles.notCounted}>not counted{" "}<span className={styles.mark}>¹</span></span>
                  )}
                  {/* The row is a page: the chevron says so at rest, and moves
                      with the uplift on hover. Decorative — the country's own
                      link already carries the accessible name. */}
                  <span className={styles.cbGo} aria-hidden="true">→</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.cbFoot}>
        <span className={styles.mark}>¹</span> A country with certifications but no published threshold is listed, never
        summed — the certification is real, the scale is not available. <Link href="/methodology#certified-units" className={`${styles.noteLink} proseLink`}>How this is counted ↗</Link>
      </p>
    </>
  );
}

function ArtistRow({ line, board, lead, place }: { line: CountryArtistLine; board: CountryBoard; lead: number; place: number | null }) {
  // A row inside a programme's table carries that programme by definition.
  const ownProgram = Boolean(line.program);
  const a = line.artist;
  return (
    <tr role="row">
      <td role="cell" className={styles.cbRankCell}>
        {/* No place where nothing is priced: Colombia ranked its two plaques
            1 and 2 by the artists' names, then said nobody leads (5 Oct 2026). */}
        <span className={styles.cbRank}>{place ?? "–"}</span>
      </td>
      <td role="cell" className={styles.cbArtistCell}>
        <Link href={a.href} className={styles.cbArtistLink}>
          {a.image ? (
            // In a <picture> so React does not make this eager face a preload
            // hint: hints ride in the RSC payload, so every page whose links
            // prefetched a board downloaded its faces and covers unseen (15
            // from /updates for Poland's, debug pass 5 Oct 2026). display:
            // contents keeps the <img> the link's flex item.
            <picture style={{ display: "contents" }}>
              <img
                src={artAt(a.image, 72)}
                srcSet={artSrcSet(a.image, 36)}
                sizes="36px"
                alt=""
                className={styles.cbFace}
                width={36}
                height={36}
                decoding="async"
              />
            </picture>
          ) : (
            <span className={styles.cbFace} aria-hidden="true" />
          )}
          <span className={styles.cbArtistName}>{a.name}</span>
        </Link>
      </td>
      <td role="cell" className={styles.cbPlaqueCell}>
        {line.top && <PlaqueChip p={line.top} code={board.code} hideProgram={ownProgram} />}
        <span className={styles.notCounted}>
          {line.top ? <span className={styles.cbTopTitle}> {keepParens(line.top.title)}</span> : null}
        </span>
      </td>
      <td role="cell" className={`${styles.tdNum} ${styles.cbUnitsCell}`}>
        {line.counted ? (
          <span className={`${styles.units} ${styles.unitsLead}`}>{fmt(line.units)}</span>
        ) : (
          <span className={styles.notCounted}>not counted{" "}<span className={styles.mark}>¹</span></span>
        )}
        <span className={styles.cbPlaqueCount}>
          {line.plaques} certification{line.plaques === 1 ? "" : "s"}
          {/* "1 plaque · 1 not counted" under a cell that already reads "not
              counted" says the same thing three times. */}
          {line.notCounted && line.counted ? ` · ${line.notCounted} not counted` : ""}
        </span>
        <span className={styles.cbBar} aria-hidden="true">
          <span className={styles.cbBarFill} style={{ width: `${lead > 0 ? (line.units / lead) * 100 : 0}%` }} />
        </span>
      </td>
    </tr>
  );
}

/** One programme's ranked artists. A country with a single programme renders
 *  exactly one of these and never names it; the United States renders two —
 *  RIAA and RIAA Latin — each with its own subtotal, because a Platino at
 *  60,000 units and a Platinum at 1,000,000 are not the same award and a
 *  combined "United States" line reports plaques the RIAA never issued
 *  (Paul, 23 Sep 2026). */
function ProgramTable({ prog, board, split }: { prog: CountryProgram; board: CountryBoard; split: boolean }) {
  const lead = prog.lines[0]?.units ?? 0;
  if (prog.lines.length === 0) return null;
  return (
    <section className={styles.cbProgram} aria-label={split ? `${prog.name} certifications` : undefined}>
      {split && (
        <p className={styles.cbProgramHead}>
          <span className={styles.cbProgramName}>{prog.name}</span>
          <span className={styles.cbProgramMeta}>
            {prog.lines.length} artist{prog.lines.length === 1 ? "" : "s"} · {prog.plaques} certification
            {prog.plaques === 1 ? "" : "s"} · {prog.single?.platinum ? `${tierWord("Platinum", prog.program)} ${fmt(prog.single.platinum)}` : "no published level"}
          </span>
          <span className={`${styles.units} ${styles.unitsLead} ${styles.cbProgramUnits}`}>{fmt(prog.units)}</span>
        </p>
      )}
      <div className={styles.cbWrap}>
        <table className={`${styles.cbTable} ${styles.cbBoardTable}`} role="table">
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader" className={styles.cbRankCell}><span className="visuallyHidden">Rank</span><span aria-hidden="true">#</span></th>
              <th scope="col" role="columnheader">Artist<span className={styles.thSep}> · </span><span className={styles.thCount}>{prog.lines.length}</span></th>
              <th scope="col" role="columnheader">Highest tier</th>
              <th scope="col" role="columnheader" className={styles.thNum}>Certified units</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {prog.lines.map((l, i) => (
              <ArtistRow key={l.artist.slug} line={l} board={board} lead={lead} place={prog.counted ? i + 1 : null} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function CountryBoardView({
  code,
  includeFeatures,
}: {
  /** The page's query, as every view receives it. Unread since the "Change
   *  country" link stopped building a query-string URL (5 Oct 2026). */
  sp: SP;
  /** null = nothing picked yet; the index is the picker. */
  code: string | null;
  includeFeatures: boolean;
}) {
  // Nigeria is the SUBJECT here, never a term in someone else's sum, so the
  // separation /compare applies between two artists does not apply — see the
  // note at the top of certCountry.ts. The provenance strip below says why it
  // would elsewhere.
  const options = { includeNigeria: true, includeFeatures };
  if (!code) return <CountryIndex options={options} />;

  const board = priceCountry(code, options);
  const t = board.thresholds;
  // Programmes whose plaques are on this board and are NOT the country's own
  // body — RIAA Latin in the US. Priced at that programme's levels, which is a
  // sixteen-fold difference and has to be said on the page.
  const programmes = board.programs.filter((p) => p.program).map((p) => p.name);
  // One row per RECORD, not per holder. "Essence" is Wizkid's plaque and Tems'
  // — the table above rightly counts it on both lines, but a list of the
  // biggest records in a market that printed it twice read as a duplicate, so
  // here the holders share the row. The records are the board's own
  // (certCountry.recordsOf), matched artist WITH title: this list used to key
  // on the title alone, which would have folded Olamide's "Loml" (Cheque ft.
  // Olamide) and Seyi Vibez's — two records — into one row. The holders come
  // in recordsOf's order: lead credits first, and among leads the act billed
  // first — "Bandana" (Fireboy DML with Asake) is a lead for both by Rule C,
  // and names Fireboy DML first although Asake outranks him here.
  const records = board.programs.flatMap((x) => x.records).filter((r) => r.plaque.units !== null);
  // The † says "this body publishes no multiplier rule, so an N× award is
  // priced as N × Platinum". It is only a caveat where an N× award is actually
  // on the board — the Czech card carried it above a single Gold. A half step
  // on top (AMPROFON's "Platino & Oro") leans on the same stacking rule, as in
  // certUnits.plaqueNotes.
  const multiplied = board.programs.some((x) => x.lines.some((l) => l.plaqueList.some((p) => p.x > 1 || !!p.plus)));
  const onBoard = (format?: CertFormat) => formatOnBoard(board, format);
  // The programme's name sits BEFORE its <dl>, not inside it: a <p> is not
  // allowed in a definition list, and the two-programme US card failed as one.
  const levelLists = board.programs.map((prog) => (
    <Fragment key={prog.name}>
      {board.programs.length > 1 && <p className={styles.cbThProgram}>{prog.name}</p>}
      <dl className={styles.cbThList}>
        <div className={styles.cbThRow}>
          <dt>Single</dt>
          <dd>{prog.single ? tierRun(prog.single, prog.program) : <>not priced{"\u00a0"}<span className={styles.mark}>¹</span></>}</dd>
        </div>
        <div className={styles.cbThRow}>
          <dt>Album</dt>
          <dd>{prog.album ? tierRun(prog.album, prog.program) : <>not priced{"\u00a0"}<span className={styles.mark}>¹</span></>}</dd>
        </div>
      </dl>
    </Fragment>
  ));
  const levelsLink = t?.sourceUrl && (
    <a href={t.sourceUrl} className={styles.cbRegister} target="_blank" rel="noopener noreferrer">
      {/* "Its own levels" is a promise the link has to keep: a body
          that publishes none is linked as a register instead. Where the
          board is priced at someone else's level (`pricedAt`: Greece, at
          IFPI's June 2013 international table), the link says so. Where
          the link opens neither (Turkey: the label's own site, which prints
          no level), it names what it opens (`sourceLinkText`). */}
      {t.sourceLinkText ?? t.pricedAt ?? (t.single || t.album ? `${bodyOwner(board.body)}'s own levels` : `${bodyOwner(board.body)}'s register`)}{" "}
      <span aria-hidden="true">↗</span>
    </a>
  );
  const byUnits = records
    .map((r) => ({ p: r.plaque, holders: r.holders.map((h) => ({ name: h.artist.name, featured: h.featured })) }))
    .sort((x, y) => (y.p.units ?? 0) - (x.p.units ?? 0) || x.p.title.localeCompare(y.p.title));
  const biggest = byUnits.slice(0, 10);
  // The ten stop mid-tie on most boards — Nigeria's tenth is a 500,000 with two
  // more at 500,000 behind it, cut by the alphabet. Those are named under the
  // list rather than dropped (debug pass, 5 Oct 2026); a line, not a fold.
  const cut = biggest.length === 10 ? biggest[9].p.units : null;
  const moreAtCut = cut === null ? [] : byUnits.slice(10).filter((r) => r.p.units === cut);
  // A record two artists share is on both their lines and counted ONCE in the
  // figure above (Paul, 4 Oct 2026), so the lines sum to more than the figure
  // by exactly these. Said under it, on a line of its own — run on after the
  // plaque count it wrapped at 1440 with its "·" orphaned at the line's start —
  // and in the notes below.
  const sharedLine = board.shared
    ? `${board.shared} ${board.shared === 1 ? "record" : "records"} shared by two or more artists, counted once`
    : "";
  // The two leaders, in the pair pages' own canonical order.
  const top2 = board.lines.slice(0, 2).map((l) => l.artist);
  const tiedTop = board.lines.filter((l) => l.units === board.lines[0]?.units);
  // Level at SECOND, behind one leader: "Burna Boy and CKay lead Austria" named
  // CKay over Tyla on the same 30,000 by the alphabet (debug pass, 5 Oct 2026).
  const tiedSecond = board.lines.slice(1).filter((l) => l.units === board.lines[1]?.units);
  const names = (ls: CountryArtistLine[]) =>
    ls.length < 2 ? ls.map((l) => l.artist.name).join("") : `${ls.slice(0, -1).map((l) => l.artist.name).join(", ")} and ${ls[ls.length - 1].artist.name}`;
  const pair = top2.length === 2 ? canonicalPair(top2[0], top2[1]) : null;

  return (
    <>
      <div className={styles.cbHead} id="result">
        <div className={styles.cbHeadMain}>
          <p className={styles.cbCountryLine}>
            <span className={styles.cbBigFlag} aria-hidden="true">{board.flag}</span>
            <span className={styles.cbHeadName}>{board.name}</span>
            <span className={styles.cbHeadBody}>{board.body}</span>
            {/* The index's canonical URL, as the mode switch links it: the
                query twin (/compare?mode=country) canonicalises there anyway.
                /compare/in reads no search params, so a features-off view
                keeps the query route (compare/page.tsx, the mode segment). */}
            <Link href={indexHref(includeFeatures)} className={styles.cbChange}>
              <span className={styles.cbChangeText}>Change country</span>
              <span aria-hidden="true">✕</span>
            </Link>
          </p>
          <p className={styles.cbFigureLabel}>
            The board&apos;s certs here{board.counted ? " · at least" : ""}
          </p>
          {/* A country whose body publishes no threshold has a real plaque
              count and no figure. Printing "0" there says the plaques are
              worth nothing, which is the opposite of what the data means. */}
          <p className={styles.cbFigure}>{board.counted ? fmt(board.units) : <span aria-hidden="true">—</span>}</p>
          {/* Each clause holds together (no-break spaces inside it, and before
              each "·"), so a line can only break after a "·" — and the programme split takes a
              line of its own, like the shared-records note, because run on it
              wrapped at 1440 with a stray leading "·" (US) and Nigeria's
              left "COUNTED" alone on a line (debug pass, 5 Oct 2026). */}
          <p className={styles.cbFigureMeta}>
            {board.counted
              ? [
                  "certified units",
                  `${board.artists} of ${comparableArtists.length} artists certified`,
                  `${board.counted} of ${board.plaques} cert${board.plaques === 1 ? "" : "s"} counted`,
                  board.notCounted ? `${board.notCounted} not counted` : "",
                ]
                  .filter(Boolean)
                  .map(nb)
                  .join("\u00a0· ")
              : [`${board.plaques} cert${board.plaques === 1 ? "" : "s"} held by ${board.artists} artist${board.artists === 1 ? "" : "s"}`, "none priceable"]
                  .map(nb)
                  .join("\u00a0· ")}
            {board.counted && board.programs.length > 1 && (
              <span className={styles.cbFigureShared}>
                {board.programs.map((p) => nb(`${p.plaques} at ${p.name}`)).join(", ")}
              </span>
            )}
            {sharedLine && <span className={styles.cbFigureShared}>{sharedLine}</span>}
          </p>
        </div>
        <div className={styles.cbThresholds}>
          <p className={styles.cbThHead}>What one certification is worth here</p>
          {/* One block per programme awarded here. An excluded format carries
              the MARK and its body's own words in the footnote below: the
              reasons run to three sentences — Colombia's twice over, once per
              format — and a card built to be read at a glance turned into two
              paragraphs of register provenance. */}
          {levelLists}
          <p className={styles.cbThNote}>
            {/* A format-scoped note — Poland's ¶, and the singles-only ‡ and §
                (23 Sep 2026) — prints only where that format is on the board. */}
            {t?.vintage && onBoard(t.vintageFormat) ? <><span className={styles.mark}>‡</span> {t.vintage}{" "}</> : null}
            {t?.assumed && onBoard(t.assumedFormat) ? <><span className={styles.mark}>§</span> {t.assumed}{" "}</> : null}
            {t?.historic && onBoard(t.historicFormat)
              ? <><span className={styles.mark}>¶</span> {t.historic}{" "}</>
              : null}
            {t?.caveat && multiplied ? <><span className={styles.mark}>†</span> {t.caveat}{" "}</> : null}
          </p>
          {levelsLink}
        </div>
        {/* The same card on a phone, folded shut (Paul, 23 Sep 2026): a native
            <details>, like this page's "+ N more" folds, so it needs no script.
            CSS shows exactly one of the two per layout; the footnotes stay a
            desktop thing (see the 760px block in compare.module.css). */}
        <details className={styles.cbThFold}>
          <summary className={styles.cbThSummary}>
            <span className={styles.cbThHead}>What one cert is worth here</span>
            <span className={styles.cbThChevron} aria-hidden="true">↓</span>
          </summary>
          <div className={styles.cbThFoldBody}>
            {levelLists}
            {levelsLink}
          </div>
        </details>
      </div>

      {board.code === "NG" && (
        <section className={styles.ngStrip} aria-label="About this register">
          <h2 className={styles.ngHead}><span aria-hidden="true">🇳🇬</span> A request-based register.</h2>
          <p className={styles.ngText}>
            TCSN certifies on application, so a title missing from the register proves nothing about what it
            sold — only that nobody applied. A gap between two artists here can measure paperwork rather than
            sales, which is why every head-to-head on this site counts Nigeria on its own line.
          </p>
        </section>
      )}

      <h2 className="visuallyHidden" id="country-board">Artists ranked in {board.inSentence}</h2>
      {board.programs.map((prog) => (
        <ProgramTable key={prog.name} prog={prog} board={board} split={board.programs.length > 1} />
      ))}

      {biggest.length > 0 && (
        <section className={styles.cbBiggest} aria-labelledby="biggest-plaques">
          <h2 id="biggest-plaques" className={styles.cbSectionHead}>Biggest certifications in {board.inSentence}</h2>
          <ul className={styles.cbPlaqueList}>
            {biggest.map(({ p, holders }) => (
              <li key={`${p.title}|${p.format}`} className={styles.cbPlaqueRow}>
                {p.cover ? (
                  // In a <picture> for React, as the faces above: no preload
                  // hint, so a prefetch of this board fetches no covers.
                  <picture style={{ display: "contents" }}>
                    <img src={artAt(p.cover, 72)} srcSet={artSrcSet(p.cover, 36)} sizes="36px" alt="" className={styles.cbArt} width={36} height={36} decoding="async" />
                  </picture>
                ) : (
                  <span className={styles.cbArt} aria-hidden="true" />
                )}
                <span className={styles.cbPlaqueTitle}>
                  {keepParens(p.title)}
                  <span className={styles.cbPlaqueBy}>
                    {holders.map((h) => `${h.name}${h.featured ? " (featured)" : ""}`).join(" · ")}
                  </span>
                </span>
                <PlaqueChip p={p} code={board.code} />
                <span className={`${styles.units} ${styles.unitsLead}`}>{fmt(p.units ?? 0)}</span>
              </li>
            ))}
          </ul>
          {moreAtCut.length > 0 && cut !== null && (
            <p className={styles.cbBiggestMore}>
              + {moreAtCut.length} more at {fmt(cut)} units: {moreAtCut.map((r) => r.p.title).join(", ")}.
            </p>
          )}
        </section>
      )}

      <div className={styles.notes}>
        {(board.notCounted > 0 || t?.singleExcluded || t?.albumExcluded) && (
          <p>
            <strong><span className={styles.mark}>¹</span> Not priced</strong>{" "}
            {board.notCounted > 0 && (
              <>
                — {board.notCounted} certification{board.notCounted === 1 ? "" : "s"} here{" "}
                {board.notCounted === 1 ? "is" : "are"} real and cannot be put on this page&apos;s scale.{" "}
              </>
            )}
            {[...new Set([t?.singleExcluded, t?.albumExcluded].filter(Boolean) as string[])].join(" ")} Listed,
            never summed.
          </p>
        )}
        {board.shared > 0 && (
          <p>
            <strong>Shared records</strong> — {board.shared === 1 ? "one record here is" : `${board.shared} records here are`}{" "}
            credited to more than one of the board&apos;s artists. Each artist&apos;s line carries the certification in full,
            because it is theirs; the country&apos;s figure counts it once, because it is one certification.
          </p>
        )}
        {programmes.length > 0 && (
          <p>
            <strong>Counted separately</strong> — {programmes.join(", ")}{" "}
            {programmes.length === 1 ? "runs" : "run"} beside {board.body} here at {programmes.length === 1 ? "its" : "their"} own
            levels, so {programmes.length === 1 ? "its certifications have" : "their certifications have"} a table of their own: summing them into
            the {board.body} line would report certifications {board.body} never issued.{" "}
            {programmes.map((p) => CERT_PROGRAMS[p]?.note).filter(Boolean).join(" ")}
          </p>
        )}
      </div>

      <section className={`${styles.exit} ${styles.exitBoard}`} aria-label="Next">
        <h2 className={styles.exitKicker}>Next</h2>
        {pair ? (
          <>
            <p className={styles.exitLead}>
              {/* Three or more level at the top share it: "Burna Boy and Rema lead
                  the Czech Republic" left out Tems on the same 11,261 units
                  (23 Sep 2026). The pair link still takes the first two. */}
              {board.counted && tiedTop.length > 2
                ? `${tiedTop.slice(0, -1).map((l) => l.artist.name).join(", ")} and ${tiedTop[tiedTop.length - 1].artist.name} share the lead in ${board.inSentence}. The head-to-head puts ${board.lines[0].artist.name} and ${board.lines[1].artist.name} side by side in every country at once.`
                : board.counted && tiedTop.length === 1 && tiedSecond.length > 1
                ? `${board.lines[0].artist.name} leads ${board.inSentence}; ${names(tiedSecond)} share second. The head-to-head puts ${board.lines[0].artist.name} and ${board.lines[1].artist.name} side by side in every country at once.`
                : board.counted
                ? `${board.lines[0].artist.name} and ${board.lines[1].artist.name} lead ${board.inSentence}. The head-to-head puts them side by side in every country at once.`
                : `No certification here can be priced, so nobody leads ${board.inSentence}. The head-to-head compares ${board.lines[0].artist.name} and ${board.lines[1].artist.name} everywhere one can.`}
            </p>
            <Link href={`/compare/${pairSlug(pair[0], pair[1])}`} className="btn btnPrimary">
              {pair[0].name} vs {pair[1].name} <span aria-hidden="true">↗</span>
            </Link>
          </>
        ) : (
          <>
            {/* One artist certified here — there is no head-to-head to offer,
                so the way onward is the board itself. */}
            <p className={styles.exitLead}>
              {board.lines[0]?.artist.name} is the only one of the {comparableArtists.length} certified in{" "}
              {board.inSentence}. Every other market is one tap away.
            </p>
            <Link href={indexHref(includeFeatures)} className="btn btnPrimary">
              Every market <span aria-hidden="true">↗</span>
            </Link>
          </>
        )}
      </section>
    </>
  );
}
