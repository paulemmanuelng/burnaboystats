import { Fragment } from "react";
import Link from "next/link";
import styles from "./compare.module.css";
import { fmt, keepParens, plaque, program, shortProgram, tierClass } from "./chips";
import { href, type SP } from "../lib/compareUrl";
import { artAt, artSrcSet } from "../lib/artAt";
import { canonicalPair, pairSlug } from "../lib/comparePairs";
import { comparableArtists } from "../lib/certUnits";
import {
  countryBoards,
  countrySlug,
  priceCountry,
  type CountryArtistLine,
  type CountryBoard,
  type CountryPlaque,
  type CountryProgram,
} from "../lib/certCountry";
import { CERT_PROGRAMS, type CertFormat, type TierUnits } from "../data/certThresholds";

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

/** Gold 40,000 · Platinum 80,000 · Diamond 800,000 — the tiers a body awards,
 *  in order, skipping the ones it does not. A null tier is not a gap. */
const tierRun = (t: TierUnits) =>
  ([
    ["Silver", t.silver],
    ["Gold", t.gold],
    ["Platinum", t.platinum],
    ["Diamond", t.diamond],
  ] as const)
    .filter(([, n]) => n !== null)
    .map(([name, n]) => `${name} ${fmt(n as number)}`)
    .join(" · ");

function PlaqueChip({ p, code, hideProgram = false }: { p: CountryPlaque; code: string; hideProgram?: boolean }) {
  // Inside a programme's own table the marker is the table's title repeated on
  // every row; in the mixed list below it is the only thing telling a 16×
  // Platino worth 960,000 from a 5× Platinum worth 5,000,000.
  const prog = hideProgram ? null : program(p, code);
  return (
    <span className={`${styles.tierChip} ${tierClass(p.level)}`}>
      <span className={styles.tierWord}>{plaque(p)}</span>
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
  return (
    <>
      <div className={styles.cbIndexHead}>
        <h2 className={styles.cbIndexTitle}>Pick a market</h2>
        <p className={styles.cbIndexLead}>
          {boards.length} countries, {fmt(totalPlaques)} plaques, {boards[0]?.artists ?? 0} artists deep in the
          biggest. Every figure is a floor, and every plaque is priced at the body named beside it.
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
                  <Link href={`/compare/in/${countrySlug(b.code)}`} className={styles.cbCountryLink}>
                    <span className={styles.flag} aria-hidden="true">{b.flag}</span>
                    <span className={styles.cbCountryName}>{b.name}</span>
                    <span className={styles.countryCode}>{b.code}</span>
                  </Link>
                </td>
                <td role="cell" className={styles.cbMetaCell}>
                  <span className={styles.cbCoverage}>
                    {b.artists} artist{b.artists === 1 ? "" : "s"} · {b.plaques} plaque{b.plaques === 1 ? "" : "s"}
                    {b.notCounted ? ` · ${b.notCounted} not counted` : ""} · {b.body}
                  </span>
                </td>
                <td role="cell" className={`${styles.tdNum} ${styles.cbUnitsCell}`}>
                  {b.counted ? (
                    <span className={`${styles.units} ${styles.unitsLead}`}>{fmt(b.units)}</span>
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
        <span className={styles.mark}>¹</span> A country with plaques but no published threshold is listed, never
        summed — the plaque is real, the scale is not available. <Link href="/methodology#certified-units" className={`${styles.noteLink} proseLink`}>How this is counted ↗</Link>
      </p>
    </>
  );
}

function ArtistRow({ line, board, lead, place }: { line: CountryArtistLine; board: CountryBoard; lead: number; place: number }) {
  // A row inside a programme's table carries that programme by definition.
  const ownProgram = Boolean(line.program);
  const a = line.artist;
  return (
    <tr role="row">
      <td role="cell" className={styles.cbRankCell}>
        <span className={styles.cbRank}>{place}</span>
      </td>
      <td role="cell" className={styles.cbArtistCell}>
        <Link href={a.href} className={styles.cbArtistLink}>
          {a.image ? (
            // eslint-disable-next-line @next/next/no-img-element
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
          {line.plaques} plaque{line.plaques === 1 ? "" : "s"}
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
    <section className={styles.cbProgram} aria-label={split ? `${prog.name} awards` : undefined}>
      {split && (
        <p className={styles.cbProgramHead}>
          <span className={styles.cbProgramName}>{prog.name}</span>
          <span className={styles.cbProgramMeta}>
            {prog.lines.length} artist{prog.lines.length === 1 ? "" : "s"} · {prog.plaques} plaque
            {prog.plaques === 1 ? "" : "s"} · {prog.single?.platinum ? `Platinum ${fmt(prog.single.platinum)}` : "no published level"}
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
              <th scope="col" role="columnheader">Highest plaque</th>
              <th scope="col" role="columnheader" className={styles.thNum}>Certified units</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {prog.lines.map((l, i) => (
              <ArtistRow key={l.artist.slug} line={l} board={board} lead={lead} place={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function CountryBoardView({
  sp,
  code,
  includeFeatures,
}: {
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
  // here the holders share the row.
  const byRecord = new Map<string, { p: CountryPlaque; holders: { name: string; featured: boolean }[] }>();
  for (const line of board.programs.flatMap((x) => x.lines)) {
    for (const p of line.plaqueList) {
      if (p.units === null) continue;
      const key = `${p.title.toLowerCase()}|${p.format}`;
      const held = byRecord.get(key);
      const who = { name: line.artist.name, featured: p.isFeature };
      if (held) {
        held.holders.push(who);
        // The same record can sit at different tiers for two holders only if a
        // register says so; show the higher one, with its units.
        if ((p.units ?? 0) > (held.p.units ?? 0)) held.p = p;
      } else byRecord.set(key, { p, holders: [who] });
    }
  }
  // Lead credits first. The holders arrive in board order, so "Bandana" —
  // Fireboy DML featuring Asake — was billed to Asake, who outranks him here.
  // The board carries no credit string for its artists, so a record whose lead
  // act is not on the board names only its featured holder, marked as one.
  for (const r of byRecord.values()) r.holders.sort((x, y) => Number(x.featured) - Number(y.featured));
  // The † says "this body publishes no multiplier rule, so an N× award is
  // priced as N × Platinum". It is only a caveat where an N× award is actually
  // on the board — the Czech card carried it above a single Gold.
  const multiplied = board.programs.some((x) => x.lines.some((l) => l.plaqueList.some((p) => p.x > 1)));
  const onBoard = (format?: CertFormat) =>
    !format || board.programs.some((x) => x.lines.some((l) => l.plaqueList.some((p) => p.format === format)));
  // The programme's name sits BEFORE its <dl>, not inside it: a <p> is not
  // allowed in a definition list, and the two-programme US card failed as one.
  const levelLists = board.programs.map((prog) => (
    <Fragment key={prog.name}>
      {board.programs.length > 1 && <p className={styles.cbThProgram}>{prog.name}</p>}
      <dl className={styles.cbThList}>
        <div className={styles.cbThRow}>
          <dt>Single</dt>
          <dd>{prog.single ? tierRun(prog.single) : <>not priced{"\u00a0"}<span className={styles.mark}>¹</span></>}</dd>
        </div>
        <div className={styles.cbThRow}>
          <dt>Album</dt>
          <dd>{prog.album ? tierRun(prog.album) : <>not priced{"\u00a0"}<span className={styles.mark}>¹</span></>}</dd>
        </div>
      </dl>
    </Fragment>
  ));
  const levelsLink = t?.sourceUrl && (
    <a href={t.sourceUrl} className={styles.cbRegister} target="_blank" rel="noopener noreferrer">
      {/* "Its own levels" is a promise the link has to keep: a body
          that publishes none is linked as a register instead. Where the
          board is priced at someone else's level (`pricedAt`: Greece, at
          IFPI's June 2013 international table), the link says so. */}
      {t.pricedAt ?? (t.single || t.album ? `${board.body}'s own levels` : `${board.body}'s register`)}{" "}
      <span aria-hidden="true">↗</span>
    </a>
  );
  const biggest = [...byRecord.values()]
    .sort((x, y) => (y.p.units ?? 0) - (x.p.units ?? 0) || x.p.title.localeCompare(y.p.title))
    .slice(0, 10);
  // The two leaders, in the pair pages' own canonical order.
  const top2 = board.lines.slice(0, 2).map((l) => l.artist);
  const tiedTop = board.lines.filter((l) => l.units === board.lines[0]?.units);
  const pair = top2.length === 2 ? canonicalPair(top2[0], top2[1]) : null;

  return (
    <>
      <div className={styles.cbHead} id="result">
        <div className={styles.cbHeadMain}>
          <p className={styles.cbCountryLine}>
            <span className={styles.cbBigFlag} aria-hidden="true">{board.flag}</span>
            <span className={styles.cbHeadName}>{board.name}</span>
            <span className={styles.cbHeadBody}>{board.body}</span>
            <Link href={href(sp, { country: null })} className={styles.cbChange}>
              <span className={styles.cbChangeText}>Change country</span>
              <span aria-hidden="true">✕</span>
            </Link>
          </p>
          <p className={styles.cbFigureLabel}>
            The board&apos;s plaques here{board.counted ? " · at least" : ""}
          </p>
          {/* A country whose body publishes no threshold has a real plaque
              count and no figure. Printing "0" there says the plaques are
              worth nothing, which is the opposite of what the data means. */}
          <p className={styles.cbFigure}>{board.counted ? fmt(board.units) : <span aria-hidden="true">—</span>}</p>
          <p className={styles.cbFigureMeta}>
            {board.counted
              ? `certified units · ${board.artists} of ${comparableArtists.length} artists certified · ${board.counted} of ${board.plaques} plaque${board.plaques === 1 ? "" : "s"} counted${board.notCounted ? ` · ${board.notCounted} not counted` : ""}${
                  board.programs.length > 1
                    ? ` · ${board.programs.map((p) => `${p.plaques} at ${p.name}`).join(", ")}`
                    : ""
                }`
              : `${board.plaques} plaque${board.plaques === 1 ? "" : "s"} held by ${board.artists} artist${board.artists === 1 ? "" : "s"} · none priceable`}
          </p>
        </div>
        <div className={styles.cbThresholds}>
          <p className={styles.cbThHead}>What one plaque is worth here</p>
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
            <span className={styles.cbThHead}>What one plaque is worth here</span>
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
          <h2 id="biggest-plaques" className={styles.cbSectionHead}>Biggest plaques in {board.inSentence}</h2>
          <ul className={styles.cbPlaqueList}>
            {biggest.map(({ p, holders }) => (
              <li key={`${p.title}|${p.format}`} className={styles.cbPlaqueRow}>
                {p.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={artAt(p.cover, 72)} srcSet={artSrcSet(p.cover, 36)} sizes="36px" alt="" className={styles.cbArt} width={36} height={36} decoding="async" />
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
        </section>
      )}

      <div className={styles.notes}>
        {(board.notCounted > 0 || t?.singleExcluded || t?.albumExcluded) && (
          <p>
            <strong><span className={styles.mark}>¹</span> Not priced</strong>{" "}
            {board.notCounted > 0 && (
              <>
                — {board.notCounted} plaque{board.notCounted === 1 ? "" : "s"} here{" "}
                {board.notCounted === 1 ? "is" : "are"} real and cannot be put on this page&apos;s scale.{" "}
              </>
            )}
            {[...new Set([t?.singleExcluded, t?.albumExcluded].filter(Boolean) as string[])].join(" ")} Listed,
            never summed.
          </p>
        )}
        {programmes.length > 0 && (
          <p>
            <strong>Counted separately</strong> — {programmes.join(", ")}{" "}
            {programmes.length === 1 ? "runs" : "run"} beside {board.body} here at {programmes.length === 1 ? "its" : "their"} own
            levels, so {programmes.length === 1 ? "its plaques have" : "their plaques have"} a table of their own: summing them into
            the {board.body} line would report awards {board.body} never issued.{" "}
            {programmes.map((p) => CERT_PROGRAMS[p]?.note).filter(Boolean).join(" ")}
          </p>
        )}
      </div>

      <section className={styles.exit} aria-label="Next">
        <h2 className={styles.exitKicker}>Next</h2>
        {pair ? (
          <>
            <p className={styles.exitLead}>
              {/* Three or more level at the top share it: "Burna Boy and Rema lead
                  the Czech Republic" left out Tems on the same 11,261 units
                  (23 Sep 2026). The pair link still takes the first two. */}
              {board.counted && tiedTop.length > 2
                ? `${tiedTop.slice(0, -1).map((l) => l.artist.name).join(", ")} and ${tiedTop[tiedTop.length - 1].artist.name} share the lead in ${board.inSentence}. The head-to-head puts ${board.lines[0].artist.name} and ${board.lines[1].artist.name} side by side in every country at once.`
                : board.counted
                ? `${board.lines[0].artist.name} and ${board.lines[1].artist.name} lead ${board.inSentence}. The head-to-head puts them side by side in every country at once.`
                : `No plaque here can be priced, so nobody leads ${board.inSentence}. The head-to-head compares ${board.lines[0].artist.name} and ${board.lines[1].artist.name} everywhere one can.`}
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
            <Link href="/compare/in" className="btn btnPrimary">
              Every market <span aria-hidden="true">↗</span>
            </Link>
          </>
        )}
      </section>
    </>
  );
}
