import Link from "next/link";
import styles from "./compare.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import { pageMetadata, datasetJsonLd } from "../lib/seo";
import { siteUrl } from "../site";
import { countryMeta } from "../data/afrobeats";
import type { Metadata } from "next";
import { PICKER_FOLD, fold, pickerArtists, pickerReleases } from "../lib/comparePicker";
import { featuredPairs, pairCopy, pairSlug } from "../lib/comparePairs";
import { artAt, artSrcSet } from "../lib/artAt";
import {
  artistBySlug,
  comparableArtists,
  compare,
  nigeriaDefault,
  priceArtist,
  priceRelease,
  type ArtistUnits,
  type ComparableArtist,
  type ComparableRelease,
  type ComparisonRow,
  type CountryLine,
} from "../lib/certUnits";

/**
 * /compare — two artists, or two records, priced by the units behind their
 * plaques.
 *
 * WHY THIS IS A SERVER PAGE DRIVEN BY THE QUERY STRING rather than a client app
 * holding state. Three reasons, in order of how much they mattered:
 *
 *  1. Every comparison becomes a URL. "Burna vs Wizkid, features on, Nigeria
 *     included" is a link somebody can paste into the argument they are already
 *     having, which is the entire point of the page.
 *  2. The engine reads the whole plaque corpus — 16 artists, 1,212 plaques and
 *     the 27-body threshold table. Shipping that to the browser to power four
 *     toggles would be a large bundle for state a query string already holds.
 *  3. It renders complete without JavaScript, so a crawler sees the numbers.
 *
 * The cost is that a toggle is a navigation. At this page's size that is a
 * fetch, and it buys shareability outright.
 */

const BASE_METADATA = pageMetadata({
  title: "Compare Certified Units — Burna Boy vs Wizkid & More",
  description:
    "Compare two Afrobeats artists, two songs or two albums by the units behind their certifications — every plaque priced at its own body's published threshold, under identical rules.",
  path: "/compare",
  shareTitle: "Certified units, compared",
  shareDescription:
    "Two records, or two catalogues, priced at each certifying body's own threshold. A floor for both sides under identical rules.",
});

/**
 * Metadata follows the query. Two artists in artist mode is the comparison
 * that has a page of its own (/compare/<a>-vs-<b>), so that state canonicals
 * THERE — every toggle of it (features, Nigeria, show all) is a variant of
 * one comparison, and the pretty URL is the one to index. Everything else —
 * arrival, one side, a song or album pairing — is the tool, canonical to
 * /compare. Titles stay derived from the data; nothing here is typed.
 */
export async function generateMetadata({ searchParams }: { searchParams: Promise<SP> }): Promise<Metadata> {
  const sp = await searchParams;
  const mode = readMode(one(sp.mode));
  const a = artistBySlug(one(sp.a) ?? "") ?? null;
  const b = artistBySlug(one(sp.b) ?? "") ?? null;
  if (mode === "artists" && a && b && a.slug !== b.slug) {
    const copy = pairCopy(a, b);
    return {
      ...BASE_METADATA,
      title: copy.title,
      description: copy.description,
      alternates: { canonical: `/compare/${pairSlug(a, b)}` },
      openGraph: { ...BASE_METADATA.openGraph, title: copy.title, description: copy.sub, url: `/compare/${pairSlug(a, b)}` },
      twitter: { ...BASE_METADATA.twitter, title: copy.title, description: copy.sub },
    };
  }
  if (isRecordMode(mode) && a && b) {
    const ra = a.releases.find((r) => r.title === one(sp.sa) && r.format === formatOf(mode));
    const rb = b.releases.find((r) => r.title === one(sp.sb) && r.format === formatOf(mode));
    if (ra && rb && !(ra.title === rb.title && a.slug === b.slug)) {
      const title = `${ra.title} vs ${rb.title}: Certified Units Compared`;
      return {
        ...BASE_METADATA,
        title: title.length <= 60 ? title : `${ra.title} vs ${rb.title}`,
        description: `${ra.title} (${a.name}) against ${rb.title} (${b.name}) by the units behind their plaques — priced at each body's own threshold.`.slice(0, 160),
      };
    }
  }
  return BASE_METADATA;
}

type SP = Record<string, string | string[] | undefined>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

/** Three modes: two record modes (a single against a single, an album against
 *  an album) and artist totals. The record modes share every mechanism and
 *  differ only in which format the pickers list and the chosen title must be. */
type Mode = "songs" | "albums" | "artists";
const readMode = (v: string | undefined): Mode => (v === "songs" ? "songs" : v === "albums" ? "albums" : "artists");
const isRecordMode = (m: Mode) => m !== "artists";
const formatOf = (m: Mode) => (m === "albums" ? "album" : "single") as "album" | "single";
/** Words for the record mode: "song"/"songs" or "album"/"albums". */
const noun = (m: Mode, plural = false) => (m === "albums" ? (plural ? "albums" : "album") : plural ? "songs" : "song");

const fmt = (n: number) => n.toLocaleString("en-US");
const tierClass = (level: string) =>
  level === "Diamond" ? styles.tDiamond
  : level === "Platinum" ? styles.tPlatinum
  : level === "Gold" ? styles.tGold
  : styles.tSilver;
/** A title's trailing "(…)" stays on one line — "love nwantiti (ah ah / ah)"
 *  split its own parenthetical at 375. */
const keepParens = (title: string) => {
  const m = title.match(/^(.*?)(\s*\([^()]*\))$/);
  return m ? <>{m[1]}<span className={styles.nowrap}>{m[2]}</span></> : title;
};
const plaque = (top: { level: string; x: number } | null) =>
  top ? `${top.x > 1 ? `${top.x}× ` : ""}${top.level}` : "";
/** The programme marker, derived exactly as Burna's explorer derives it:
 *  whatever the override adds beyond the country's default body. "RIAA Latin"
 *  against RIAA reads "Latin". Without it a 16× Platino worth 960,000 sat
 *  beside a 5× Platinum worth 5,000,000 with nothing to say why. */
/** The marker's short form for a phone chip: "Latin" stays; a whole other
 *  issuer ("Sony Music Colombia") becomes its first word, the full name in
 *  the chip's title and in the desktop run. */
const shortProgram = (p: string) => (p.length > 12 ? p.split(" ")[0] : p);
const program = (top: { body?: string } | null, country: string) => {
  const own = countryMeta(country).body;
  if (!top?.body || top.body === own) return null;
  return top.body.replace(own, "").trim() || top.body;
};

/** Rebuild the URL with one thing changed. Every control on this page is a link,
 *  so this is the only state setter there is. */
function href(sp: SP, patch: Record<string, string | null>) {
  const q = new URLSearchParams();
  // An expanded table is a property of one pair. Changing either side, the
  // mode, or a song drops it, so "Show all" does not follow the reader around.
  if (["a", "b", "sa", "sb", "mode"].some((k) => k in patch)) patch = { all: null, ...patch };
  for (const [k, v] of Object.entries(sp)) {
    const s = one(v);
    if (s) q.set(k, s);
  }
  for (const [k, v] of Object.entries(patch)) {
    if (v === null) q.delete(k);
    else q.set(k, v);
  }
  const s = q.toString();
  return s ? `/compare?${s}` : "/compare";
}

/** A chip list that shows the first PICKER_FOLD and folds the rest behind a
 *  native disclosure — no script, no navigation, nothing dropped. The whole
 *  list is in the served markup; the fold is presentation. */
function FoldedChips({ chips, label }: { chips: React.ReactNode[]; label: string }) {
  const shown = chips.slice(0, PICKER_FOLD);
  const rest = chips.slice(PICKER_FOLD);
  return (
    <>
      <div className={styles.chips}>{shown}</div>
      {rest.length > 0 && (
        <details className={styles.more}>
          {/* No aria-label: the two spans swap with the open state, so the
              accessible name follows what the reader sees ("+ 77 more
              releases" / "Show fewer releases"). A static label kept saying
              "Show 77 more" on an open fold. */}
          <summary className={styles.moreToggle}>
            <span className={styles.whenClosed}>+ {rest.length} more<span className="visuallyHidden"> {label}</span> <span aria-hidden="true">↓</span></span>
            <span className={styles.whenOpen}>Show fewer<span className="visuallyHidden"> {label}</span> <span aria-hidden="true">↑</span></span>
          </summary>
          <div className={styles.chips}>{rest}</div>
        </details>
      )}
    </>
  );
}

function Slot({
  artist, release, priced, sp, side, mode, refused = false,
}: {
  artist: ComparableArtist | null;
  release: ComparableRelease | null;
  priced: ArtistUnits | null;
  sp: SP;
  side: "a" | "b";
  mode: Mode;
  /** The same artist is on both sides: the clear control drops the whole side,
   *  so the artist picker the refusal points at is actually reachable. "Change
   *  song" on its own kept a=b. (The same-record refusal keeps "Change song" —
   *  there the fix IS a different release.) */
  refused?: boolean;
}) {
  if (!artist) {
    // EVERY artist on the board, minus whoever is already on the other side —
    // never a shortlist. Most plaques first; the first eight show, the rest fold.
    const otherSlug = one(sp[side === "a" ? "b" : "a"]);
    const others = pickerArtists(otherSlug);
    return (
      <div className={`${styles.slot} ${styles.slotEmpty}`} id={`slot-${side}`}>
        <p className={styles.prompt}>{otherSlug ? "Choose who to compare against" : "Choose an artist"}</p>
        <FoldedChips
          label="artists"
          chips={others.map((o) => (
            // The tap's result is what the page should land on: the figures
            // when this completes a pair, the other side's slot when it does
            // not. A plain navigation put the reader back at the title with
            // the answer a screen below the fold.
            <Link
              key={o.slug}
              href={`${href(sp, { [side]: o.slug })}#${otherSlug ? "result" : `slot-${side === "a" ? "b" : "a"}`}`}
              className={styles.chip}
            >
              {o.name}
            </Link>
          ))}
        />
      </div>
    );
  }

  const isSong = isRecordMode(mode) && release;
  const img = isSong ? release.cover : artist.image;
  const title = isSong ? release.title : artist.name;
  // The plaque count is split so it agrees with the header beneath it, whose
  // denominator is the international plaques: "20 plaques" over "17 of 19
  // counted" read as a contradiction until the Nigerian one was named.
  const ngCount = isSong ? release.certs.filter((c) => c.c === "NG").length : 0;
  // Segments, not one string: each is rendered nowrap and the line breaks
  // only at a separator, so a phone never opens a line with "·" or splits
  // "+ 1 Nigerian" across two.
  const meta: string[] = isSong
    ? [artist.name, release.isFeature ? "featured" : release.format === "album" ? "album" : "lead single",
       release.credit ?? "",
       ngCount
         ? `${release.certs.length - ngCount} international plaque${release.certs.length - ngCount === 1 ? "" : "s"} + ${ngCount} Nigerian`
         : `${release.certs.length} plaque${release.certs.length === 1 ? "" : "s"}`]
        .filter(Boolean)
    : isRecordMode(mode)
      ? (() => {
          // A record mode with nothing chosen yet: say what the picker holds,
          // not the artist totals the page is not in the business of showing.
          const n = artist.releases.filter((r) => r.format === formatOf(mode)).length;
          return [`${n} certified ${n === 1 ? noun(mode) : noun(mode, true)}`];
        })()
      : [
          "artist totals",
          priced ? `${priced.pricedPlaques} counted` : "",
          priced ? `${priced.byCountry.length} ${priced.byCountry.length === 1 ? "country" : "countries"}` : "",
        ].filter(Boolean);

  return (
    <div className={styles.slot} id={`slot-${side}`}>
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={artAt(img, 112)}
          srcSet={artSrcSet(img, 56)}
          sizes="56px"
          alt=""
          className={`${styles.art} ${isSong ? "" : styles.artRound}`}
          width={56}
          height={56}
          decoding="async"
        />
      ) : (
        <div className={`${styles.art} ${isSong ? "" : styles.artRound}`} aria-hidden="true" />
      )}
      <div className={styles.slotBody}>
        <p className={styles.slotTitle}>{keepParens(title)}</p>
        <p className={styles.slotMeta}>
          {/* A line may break only at the space before a separator: short
              segments are glued with no-break spaces, the "·" rides with the
              segment it introduces. Long segments still wrap inside. */}
          {meta.map((m, i) => (
            <span key={i}>
              {i > 0 ? " " : ""}
              <span className={styles.metaSeg}>{i > 0 ? "·\u00a0" : ""}{m.length <= 22 ? m.replace(/ /g, "\u00a0") : m}</span>
            </span>
          ))}
        </p>
      </div>
      {/* Clear the most specific thing first: a chosen song drops back to that
          artist's picker, an artist drops back to the suggestions. Without this
          the only way to change a side is editing the URL. */}
      <Link
        href={
          isSong && !refused
            ? `${href(sp, { [side === "a" ? "sa" : "sb"]: null })}#pick-${side}`
            : href(sp, {
                [side]: null,
                [side === "a" ? "sa" : "sb"]: null,
                [side === "a" ? "qa" : "qb"]: null,
              })
        }
        className={styles.slotClear}
        aria-label={isSong && !refused ? `Choose a different ${noun(mode)} by ${artist.name}` : `Choose a different artist`}
      >
        <span className={styles.slotClearText}>{isSong && !refused ? `Change ${noun(mode)}` : "Change"}</span>
        <span aria-hidden="true">✕</span>
      </Link>
    </div>
  );
}

/**
 * Pick a release, by search rather than by luck.
 *
 * Eight chips out of eighty-five is a shortlist, not a picker. This is a GET
 * form rather than a client-side filter so it obeys the same rule as every other
 * control here — the state is in the URL — which means a searched picker is
 * shareable and still works with JavaScript off.
 */
function SongPicker({
  artist, side, sp, query, mode, landing,
}: {
  artist: ComparableArtist;
  side: "a" | "b";
  sp: SP;
  query: string;
  mode: Mode;
  /** Where a pick lands: "result" when it completes the pair, otherwise the
   *  other side's picker or, if no artist is chosen there yet, its slot. */
  landing: "result" | "pick-a" | "pick-b" | "slot-a" | "slot-b";
}) {
  const format = formatOf(mode);
  const field = side === "a" ? "qa" : "qb";
  const target = side === "a" ? "sa" : "sb";
  // Folded, so a punctuation-only query ("&", ".") is empty for the label just
  // as it is for the filter — it was reporting "85 of 85 match “&”".
  const q = fold(query);
  const all = artist.releases.filter((r) => r.format === format);
  // Eight of the sixteen hold no certified album at all. Say so, and offer
  // the mode that has something to price, rather than an empty picker.
  if (all.length === 0) {
    const other = mode === "albums" ? "songs" : "albums";
    return (
      <div className={styles.pickWrap} id={`pick-${side}`}>
        <p className={styles.pickNone}>
          <strong>{artist.name} holds no certified {noun(mode)} on this site</strong> — every one of{" "}
          {artist.releases.reduce((n, r) => n + r.certs.length, 0).toLocaleString("en-US")} plaques here is on a{" "}
          {noun(other)}.{" "}
          <Link href={href(sp, { mode: other, sa: null, sb: null, qa: null, qb: null })} className={styles.pickChange}>
            Compare {noun(other, true)} instead <span aria-hidden="true">↗</span>
          </Link>{" "}
          or{" "}
          <Link href={href(sp, { [side]: null, [target]: null, [field]: null })} className={styles.pickChange}>
            change artist <span aria-hidden="true">↺</span>
          </Link>
        </p>
      </div>
    );
  }
  // EVERY certified release, always — search narrows, it never hides. The first
  // version showed eight of eighty-five and the rest were reachable only by
  // typing the exact title. Now the first eight show and the rest FOLD, which
  // is a different thing: every chip is in the markup, one tap away.
  const matches = pickerReleases(artist, q, format);

  // Everything except this side's own query, so submitting replaces rather than
  // stacks it.
  const carried = Object.entries(sp)
    .map(([k, v]) => [k, one(v)] as const)
    .filter(([k, v]) => v && k !== field);

  return (
    <div className={styles.pickWrap} id={`pick-${side}`}>
      <div className={styles.pickHead}>
        <span className={styles.pickLabel}>
          {q
            ? `${matches.length} of ${all.length} match “${query}”`
            : `${artist.name} · all ${all.length} certified\u00a0${all.length === 1 ? noun(mode) : noun(mode, true)}`}
        </span>
        <Link
          href={href(sp, { [side]: null, [target]: null, [field]: null })}
          className={styles.pickChange}
        >
          Change artist <span aria-hidden="true">↺</span>
        </Link>
        {/* The action carries the picker's fragment: a GET form keeps it when
            it builds the query, so the reload lands on the results, not the
            title. */}
        <form method="get" action={`/compare#pick-${side}`} className={styles.search} role="search">
          {carried.map(([k, v]) => (
            <input key={k} type="hidden" name={k} value={v as string} />
          ))}
          <input
            type="search"
            name={field}
            defaultValue={query}
            className={styles.searchInput}
            placeholder={`Search ${all.length} ${noun(mode, true)}`}
            aria-label={`Search ${artist.name}'s certified ${noun(mode, true)}`}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck={false}
            enterKeyHint="search"
          />
          <button type="submit" className={styles.searchBtn}>Search</button>
        </form>
      </div>
      {matches.length > 0 ? (
        <FoldedChips
          label={noun(mode, true)}
          chips={matches.map((r) => (
            <Link
              key={r.title}
              href={`${href(sp, { [target]: r.title, [field]: null })}#${landing}`}
              className={styles.chip}
            >
              {keepParens(r.title)}
            </Link>
          ))}
        />
      ) : (
        <p className={styles.pickNone}>
          No certified {noun(mode)} of {artist.name}&apos;s matches “{query}”. Only {noun(mode, true)} that hold at
          least one plaque appear here — a {noun(mode)} with no certification has nothing to price.
        </p>
      )}
    </div>
  );
}

function Cell({ line, lead, artistMode }: { line: CountryLine | null; lead: boolean; artistMode: boolean }) {
  // A blank cell reads as a rendering fault, so the words are the value.
  if (!line) return <span className={styles.noPlaque}>No plaque</span>;
  // No-break spaces: a mark on its own line inside a 104px phone chip read
  // as a stray glyph. The marks share one face (.mark) — Space Mono has no ‡,
  // and its † pulled a latin-ext subset the site never preloads.
  const markList = [line.caveat ? "†" : null, line.vintage ? "‡" : null, line.assumed ? "§" : null].filter(Boolean);
  const marks = markList.length ? <>{"\u00a0"}<span className={styles.mark}>{markList.join("\u00a0")}</span></> : null;
  const prog = program(line.top, line.country);
  if (!line.counted) {
    return (
      <div className={styles.cell}>
        <span className={`${styles.tierChip} ${tierClass(line.top?.level ?? "Gold")}`}>
          <span className={styles.tierWord}>
            {plaque(line.top)}
            {line.releases > 1 ? `\u00a0+${line.releases - 1}` : ""}
          </span>
          {prog && (
            <span className={styles.chipProgram} title={prog}>
              <span className={styles.progLong}>{prog}</span>
              <span className={styles.progShort} aria-hidden="true">{shortProgram(prog)}</span>
            </span>
          )}
        </span>
        <span className={styles.notCounted}>not counted{"\u00a0"}<span className={styles.mark}>¹</span></span>
      </div>
    );
  }
  // In artist mode the cell is a SUM of several releases, and the design's
  // chip says how many rather than naming one release's tier — "2× Platinum"
  // beside a sum of 19 records misread as the tier of the sum. Song mode
  // keeps the tier chip: there the cell IS one plaque.
  return (
    <div className={styles.cell}>
      {artistMode ? (
        <span className={`${styles.tierChip} ${styles.tNeutral}`}>
          <span className={styles.tierWord}>
            {line.releases} plaque{line.releases === 1 ? "" : "s"}
            {marks}
          </span>
        </span>
      ) : (
        <span className={`${styles.tierChip} ${tierClass(line.top?.level ?? "Gold")}`}>
          <span className={styles.tierWord}>
            {plaque(line.top)}
            {marks}
          </span>
          {prog && (
            <span className={styles.chipProgram} title={prog}>
              <span className={styles.progLong}>{prog}</span>
              <span className={styles.progShort} aria-hidden="true">{shortProgram(prog)}</span>
            </span>
          )}
        </span>
      )}
      <span className={`${styles.units} ${lead ? styles.unitsLead : styles.unitsBehind}`}>
        {fmt(line.units)}
      </span>
      {/* The same country's unpriced plaques, which used to vanish here. */}
      {line.notCounted && (
        <span className={styles.notCounted}>
          +{line.notCounted.plaques} {plaque(line.notCounted.top)} not counted{"\u00a0"}<span className={styles.mark}>¹</span>
        </span>
      )}
    </div>
  );
}

export default async function ComparePage({ searchParams }: { searchParams: Promise<SP> }) {
  // Called, not rendered as an element: the awaited tree is plain markup,
  // which is what the tests (renderToStaticMarkup) and Next both want.
  return CompareView({ sp: await searchParams, path: "/compare" });
}

/**
 * The page itself, shared with /compare/<a>-vs-<b>: the same tree with both
 * sides filled, a path of its own for the breadcrumb and a leaf label the
 * slug cannot spell ("Burna Boy vs Wizkid").
 */
export async function CompareView({ sp, path, leaf }: { sp: SP; path: string; leaf?: string }) {
  const mode = readMode(one(sp.mode));
  const record = isRecordMode(mode);
  const format = formatOf(mode);
  const a = artistBySlug(one(sp.a) ?? "") ?? null;
  const b = artistBySlug(one(sp.b) ?? "") ?? null;
  const showAll = one(sp.all) === "1";

  // The chosen title must be of the mode's format: a single named in album
  // mode (a hand-edited URL, or a mode switch that kept it) is not chosen.
  const songA = record && a ? a.releases.find((r) => r.title === one(sp.sa) && r.format === format) ?? null : null;
  const songB = record && b ? b.releases.find((r) => r.title === one(sp.sb) && r.format === format) ?? null : null;

  const both = Boolean(a && b);
  // The engine decides Nigeria unless the reader has said otherwise; `ng` in the
  // URL is the override, never the default — and only "1"/"0" count as saying
  // something. Any other value (ng=yes, ng=on) used to force Nigeria OFF and
  // suppress the why-line, which is the worst possible reading of a typo.
  const ngParam = one(sp.ng) === "1" ? "1" : one(sp.ng) === "0" ? "0" : undefined;
  // Every plaque counts unless the reader turns features OFF (feat=0). The
  // first version defaulted to lead credits only and read as an undercount:
  // Burna Boy's 19× Platinum in South Africa sat behind the switch.
  const featParam = one(sp.feat);
  const includeFeatures = featParam !== "0";

  // A record compared with ITSELF is not a comparison, and with two artists
  // holding slightly different copies of one recording it printed a winner.
  // Same title, both credits naming the same lead: refuse and say so.
  const sameRecording =
    record && songA && songB && a && b && a.slug !== b.slug &&
    songA.title.toLowerCase() === songB.title.toLowerCase() &&
    (songA.isFeature || songB.isFeature);
  // An artist against themselves is not a comparison either. The picker no
  // longer offers it, but a URL can still say so.
  const sameArtist = Boolean(a && b && a.slug === b.slug);

  const c = both && !sameRecording && !sameArtist
    ? compare(a!, b!, {
        ...(ngParam ? { includeNigeria: ngParam === "1" } : {}),
        includeFeatures,
      })
    : null;

  // One side filled: the solo figure honours the Nigeria switch too. It used to
  // hardcode Nigeria off, so the switch it rendered was inert and Seyi Vibez
  // landed on "at least 0" with no way to see his 7,750,000.
  const soloNg = ngParam === "1";
  // Solo pricing also backs the slots on a REFUSED pairing (same artist twice),
  // so they never print "· · 0 countries" for an artist with a real catalogue.
  const soloPriced = a && (!both || sameArtist) ? priceArtist(a, { includeNigeria: soloNg, includeFeatures }) : null;
  const refused = Boolean(sameArtist || sameRecording);

  const songPriced = (art: ComparableArtist | null, rel: ComparableRelease | null, ngIn: boolean) =>
    art && rel ? priceRelease(art, rel.title, { includeNigeria: ngIn, includeFeatures: true }) : null;
  const ngForSongs = c?.options.includeNigeria ?? soloNg;
  const spa = songPriced(a, songA, ngForSongs);
  const spb = songPriced(b, songB, ngForSongs);

  const useSongs = Boolean(record && spa && spb && !sameRecording && !sameArtist);
  // "Filled" means different things in the two modes, and conflating them was a
  // real bug: in song mode with no song picked yet, the page fell through to
  // ARTIST totals and printed them under the artists' names. In song mode
  // nothing renders until BOTH songs are chosen.
  const ready = record ? useSongs : both && !refused;
  // A refused pairing renders its refusal and nothing else — no card, no hint.
  // It was printing "at least 0 certified units" beneath "That is Burna Boy on
  // both sides", which is a number the page never established.
  const partial = refused ? false : record ? Boolean(spa || spb) : Boolean(a);

  // The side being described, whichever mode is on — and in song mode with one
  // song chosen, that side is the SONG, never the artist. The header card was
  // printing "Essence · 6,340,000 · 47 of 47 plaques counted": the song's figure
  // beside the artist's plaque count.
  const sideA: ArtistUnits | null = record ? spa : c?.a ?? soloPriced ?? null;
  const sideB: ArtistUnits | null = record ? spb : c?.b ?? null;
  const totalA = sideA?.total ?? 0;
  const totalB = sideB?.total ?? 0;
  const nameA = record && songA ? songA.title : a?.name ?? "";
  const nameB = record && songB ? songB.title : b?.name ?? "";

  const byMax = (x: ComparisonRow, y: ComparisonRow) =>
    Math.max(y.a?.units ?? 0, y.b?.units ?? 0) - Math.max(x.a?.units ?? 0, x.b?.units ?? 0) ||
    x.country.localeCompare(y.country);
  // Nigeria pins first whenever it is in scope — the engine does this for the
  // default rows, and "Show all" re-sorted the merged set without it, dropping
  // the highlighted row into the middle of the table.
  const pinNg = (rs: ComparisonRow[], on: boolean) =>
    on ? [...rs.filter((r) => r.country === "NG"), ...rs.filter((r) => r.country !== "NG")] : rs;

  const rows: ComparisonRow[] = useSongs
    ? (() => {
        const codes = [...new Set([
          ...spa!.byCountry.map((l) => l.country), ...spa!.listed.map((l) => l.country),
          ...spb!.byCountry.map((l) => l.country), ...spb!.listed.map((l) => l.country),
        ])];
        const find = (p: typeof spa, code: string) =>
          p!.byCountry.find((l) => l.country === code) ?? p!.listed.find((l) => l.country === code) ?? null;
        return pinNg(
          codes
            .map((country) => {
              const la = find(spa, country);
              const lb = find(spb, country);
              return { country, body: countryMeta(country).body, a: la, b: lb, contested: Boolean(la && lb) };
            })
            .sort(byMax),
          ngForSongs,
        );
      })()
    : c
      ? showAll
        ? pinNg([...c.rows, ...c.collapsed.flatMap((t) => t.rows)].sort(byMax), c.options.includeNigeria)
        : c.rows
      : [];

  // Footnotes describe what is ON SCREEN. In song mode they were being read off
  // the artist comparison, so footnote 1 named six bodies absent from a ten-row
  // table and the dagger had no footnote at all.
  const noteSource = useSongs
    ? {
        notCounted: [...spa!.listed, ...spb!.listed, ...spa!.byCountry.filter((l) => l.notCounted), ...spb!.byCountry.filter((l) => l.notCounted)]
          .filter((l, i, xs) => xs.findIndex((y) => y.country === l.country) === i)
          .map((l) => ({ country: l.country, body: l.body, reason: l.reason ?? l.notCounted?.reason ?? "" })),
        caveats: [...new Set([...spa!.caveats, ...spb!.caveats])],
        vintages: [...new Set([...spa!.vintages, ...spb!.vintages])],
        assumptions: [...new Set([...spa!.assumptions, ...spb!.assumptions])],
      }
    : c
      ? { notCounted: c.notCounted, caveats: c.caveats, vintages: c.vintages, assumptions: c.assumptions }
      : { notCounted: [], caveats: [], vintages: [], assumptions: [] };
  // ...and only the markers that are actually visible earn their footnote. With
  // every not-counted row folded into the tail, footnote 1 was naming six
  // countries under a four-row table that carried no marker anywhere.
  const visibleNotCounted = rows.some((r) => (r.a && !r.a.counted) || (r.b && !r.b.counted) || r.a?.notCounted || r.b?.notCounted);
  const visibleCaveat = rows.some((r) => r.a?.caveat || r.b?.caveat);
  const visibleVintage = rows.some((r) => r.a?.vintage || r.b?.vintage);
  const visibleAssumed = rows.some((r) => r.a?.assumed || r.b?.assumed);
  // The collapse row counts PLAQUES it hides, not rows: a listed-only line is
  // every plaque on it, a priced line hides the unpriced half riding on it. It
  // was counting rows, so it said 3 beneath a header that said 8. Counted per
  // group, because each side's fold is its own row.
  const unpricedIn = (l: CountryLine | null) => (!l ? 0 : !l.counted ? l.releases : l.notCounted?.plaques ?? 0);
  const foldedIn = (rowsIn: ComparisonRow[]) => rowsIn.reduce((m, r) => m + unpricedIn(r.a) + unpricedIn(r.b), 0);
  const foldedNotCounted = c && !showAll ? c.collapsed.reduce((n, t) => n + foldedIn(t.rows), 0) : 0;

  const tie = ready && totalA === totalB;
  const leadA = totalA >= totalB;
  const max = Math.max(totalA, totalB, 1);
  const diff = Math.abs(totalA - totalB);
  const ratio = Math.min(totalA, totalB) > 0 ? Math.max(totalA, totalB) / Math.min(totalA, totalB) : null;
  const ngOn = c?.options.includeNigeria ?? soloNg;
  // What the switch returns to when turned back: the pair's own default. It
  // used to write ng=0 / feat=0 into every shared URL, and on a default-included
  // pair the round trip left ng=1, hiding the "by default" label and the why-line.
  const ngDefault = a && b && !refused && !record ? nigeriaDefault(a, b, includeFeatures).on : false;
  const scope = ngOn ? "27 countries · Nigeria included" : "26 countries · international";
  const trailing = (n: string) => (n.endsWith("s") ? `${n}'` : `${n}'s`);

  // The ONE breadcrumb trail this page emits (the site-wide one stands down
  // for /compare — see OWN_BREADCRUMB): Home › Certifications › Compare, and
  // on a pair page the pair itself as the leaf.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Certifications", item: `${siteUrl}/certifications` },
      { "@type": "ListItem", position: 3, name: "Compare", item: `${siteUrl}/compare` },
      ...(leaf ? [{ "@type": "ListItem", position: 4, name: leaf, item: `${siteUrl}${path}` }] : []),
    ],
  };
  // A comparison of two artists is a dataset in its own right: two floors
  // and a country-by-country table, priced at published thresholds.
  const dataset = ready && !record && a && b
    ? datasetJsonLd({
        name: `${a.name} vs ${b.name} — certified units`,
        description: pairCopy(a, b).description,
        path,
        keywords: [a.name, b.name, "certified units", "certifications", "Afrobeats", "head to head"],
        variableMeasured: ["Certified units (floor) per country", "Highest certification per release per country", "Plaques counted and not counted"],
        about: { name: `${a.name} and ${b.name}` },
      })
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {dataset && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />}
      <BreadcrumbBar path={path} leaf={leaf} />
      <main id="content" className={styles.wrap}>
        <p className={styles.kicker}>Certifications › Compare</p>
        <h1 className={styles.h1}>Certified units, compared</h1>
        <p className={styles.lede}>
          Every plaque is a floor — a Platinum single in the UK means <em>at least</em> 600,000, and could
          be 1,190,000. This page adds those floors up for two records or two artists, at each certifying
          body&apos;s own published threshold, under identical rules.
        </p>

        <nav className={styles.seg} aria-label="Comparison mode">
          {/* The selected segment is not a link: a self-link that also dropped
              `all` collapsed the table when you clicked the mode you were in.
              Switching between the two record modes drops the chosen titles
              and queries — a single is not an album. */}
          {(
            [
              { key: "songs", long: "Song vs song", short: "Songs" },
              { key: "albums", long: "Album vs album", short: "Albums" },
              { key: "artists", long: "Artist totals", short: "Artists" },
            ] as const
          ).map((m) =>
            mode === m.key ? (
              <span key={m.key} className={`${styles.segItem} ${styles.segOn}`} aria-current="page">
                <span className={styles.segLong}>{m.long}</span>
                <span className={styles.segShort} aria-hidden="true">{m.short}</span>
              </span>
            ) : (
              <Link
                key={m.key}
                href={href(sp, { mode: m.key, sa: null, sb: null, qa: null, qb: null })}
                className={styles.segItem}
              >
                <span className={styles.segLong}>{m.long}</span>
                <span className={styles.segShort} aria-hidden="true">{m.short}</span>
              </Link>
            ),
          )}
        </nav>

        <div className={styles.slots}>
          <Slot artist={a} release={songA} priced={c?.a ?? soloPriced ?? null} sp={sp} side="a" mode={mode} refused={sameArtist} />
          <span className={styles.vs}>vs</span>
          <Slot artist={b} release={songB} priced={c?.b ?? (sameArtist ? soloPriced : null) ?? null} sp={sp} side="b" mode={mode} refused={sameArtist} />
        </div>

        {record && a && !songA && (
          <SongPicker artist={a} side="a" sp={sp} query={one(sp.qa) ?? ""} mode={mode} landing={songB ? "result" : b ? "pick-b" : "slot-b"} />
        )}
        {record && b && !songB && (
          <SongPicker artist={b} side="b" sp={sp} query={one(sp.qb) ?? ""} mode={mode} landing={songA ? "result" : a ? "pick-a" : "slot-a"} />
        )}

        {/* Refusals come first: on a phone they were explaining themselves
            below the fold, under controls that had nothing to switch. */}
        {sameArtist && (
          <p className={styles.why}>
            <strong>That is {a!.name} on both sides.</strong> Pick a different artist for one of them.
          </p>
        )}
        {sameRecording && (
          <p className={styles.why}>
            <strong>That is the same recording on both sides.</strong> “{songA!.title}” is one record with
            one set of plaques; pick a different {noun(mode)} for one of them.
          </p>
        )}

        {!refused && (
        <div className={styles.controls}>
          {mode === "artists" && (
            <span className={styles.control}>
              {/* "Features" on the phone (the design's label); the full name
                  stays for desktop and for assistive tech. */}
              <span className={styles.controlName}>
                <span className={styles.nameLong}>Featured appearances</span>
                <span className={styles.nameShort} aria-hidden="true">Features</span>
              </span>
              <Link
                href={href(sp, { feat: includeFeatures ? "0" : null })}
                scroll={false}
                className={`${styles.switch} ${includeFeatures ? styles.switchOn : ""}`}
              >
                <span className={`${styles.dot} ${includeFeatures ? styles.dotOn : ""}`} />
                <span className="visuallyHidden">Featured appearances: </span>
                {includeFeatures ? "on · every plaque held" : "off · lead credits only"}
              </Link>
            </span>
          )}
          <span className={styles.control}>
            <span className={styles.controlName}>Nigeria</span>
            <Link href={href(sp, { ng: ngOn ? (ngDefault ? "0" : null) : ngDefault ? null : "1" })} scroll={false} className={`${styles.switch} ${ngOn ? styles.switchOn : ""}`}>
              <span className={`${styles.dot} ${ngOn ? styles.dotOn : ""}`} />
              <span className="visuallyHidden">Nigeria: </span>
              {ngOn ? (ngParam ? "included" : "included · by default") : "separated"}
            </Link>
          </span>
          <Link href="/methodology#certified-units" className={`${styles.howLink} ${styles.howLinkTop}`}>How this is counted <span aria-hidden="true">↗</span></Link>
        </div>
        )}

        {/* Arrival, artist mode: the board's own head-to-heads, one tap each.
            These are the pretty routes — the crawl path to the 120 pair pages
            runs through here and the sitemap. */}
        {mode === "artists" && !a && !b && (
          <section className={styles.featured} aria-labelledby="featured-pairs">
            <h2 id="featured-pairs" className={styles.featuredTitle}>Head to head</h2>
            <ul className={styles.featuredList}>
              {featuredPairs().map(([x, y]) => (
                <li key={pairSlug(x, y)}>
                  <Link href={`/compare/${pairSlug(x, y)}`} className={styles.featuredLink}>
                    {x.name} <span className={styles.featuredVs}>vs</span> {y.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {c && c.nigeria.on && !ngParam && c.nigeria.reason && (
          <p className={styles.why}>
            <strong>Nigeria included by default</strong> — {c.nigeria.reason.replace(/^Nigeria included: /, "")}
          </p>
        )}

        {(ready || partial) && (
          <>
            <div className={`${styles.head} ${ready ? "" : styles.headSolo}`} id="result">
              <div className={styles.headCell}>
                <p className={styles.headName}><span className={styles.headNameName}>{nameA || a?.name}</span><span className={styles.headNameQual}>{"\u00a0·\u00a0at least"}</span></p>
                <p className={`${styles.figure} ${leadA ? styles.figureLead : styles.figureBehind}`}>{fmt(totalA)}</p>
                <p className={styles.headMeta}>
                  certified units · {ngOn ? "Nigeria included" : "international"}
                  {sideA ? ` · ${sideA.pricedPlaques} of ${sideA.pricedPlaques + sideA.excludedPlaques} plaques counted` : ""}
                  {sideA?.excludedPlaques ? ` · ${sideA.excludedPlaques} not comparable` : ""}
                </p>
                <div className={styles.bar}>
                  <div className={`${styles.barFill} ${leadA ? "" : styles.barFillBehind}`} style={{ width: `${(totalA / max) * 100}%` }} />
                </div>
              </div>
              {ready && (
                <div className={styles.headCell}>
                  <p className={styles.headName}><span className={styles.headNameName}>{nameB}</span><span className={styles.headNameQual}>{"\u00a0·\u00a0at least"}</span></p>
                  <p className={`${styles.figure} ${leadA ? styles.figureBehind : styles.figureLead}`}>{fmt(totalB)}</p>
                  <p className={styles.headMeta}>
                    certified units · {ngOn ? "Nigeria included" : "international"}
                    {sideB ? ` · ${sideB.pricedPlaques} of ${sideB.pricedPlaques + sideB.excludedPlaques} plaques counted` : ""}
                    {sideB?.excludedPlaques ? ` · ${sideB.excludedPlaques} not comparable` : ""}
                  </p>
                  <div className={styles.bar}>
                    <div className={`${styles.barFill} ${leadA ? styles.barFillBehind : ""}`} style={{ width: `${(totalB / max) * 100}%` }} />
                  </div>
                </div>
              )}
            </div>

            <div className={`${styles.diffRow} ${ready ? "" : styles.diffRowSolo}`}>
              {ready && tie ? (
                <p className={styles.diff}>
                  <strong>Level</strong> — both at least {fmt(totalA)} certified units
                  {totalA === 0 && !ngOn ? ". Neither holds a certification outside Nigeria; include it to compare them." : "."}
                </p>
              ) : ready ? (
                <p className={styles.diff}>
                  <strong>{leadA ? nameA : nameB}</strong> leads by at least{"\u00a0"}{fmt(diff)} certified units
                  {ratio && ratio >= 1.05
                    ? `\u00a0— a floor ${ratio.toFixed(1)}× the size of ${trailing(leadA ? nameB : nameA)}`
                    : ""}.
                </p>
              ) : (
                <p className={styles.diff}>
                  {record
                    ? `Pick ${mode === "albums" ? "an album" : "a song"} on each side — the country-by-country table appears once both are chosen.`
                    : includeFeatures
                      ? "The country-by-country table appears when both sides are filled. Every plaque the artist holds counts, featured appearances included."
                      : "The country-by-country table appears when both sides are filled. Featured appearances are off — lead credits only."}
                </p>
              )}
              <span className={styles.scope}>{scope}</span>
            </div>
          </>
        )}

        {c && ready && (
          <section className={styles.ngStrip} aria-label="Nigeria">
            <h2 className={styles.ngHead}><span aria-hidden="true">🇳🇬</span> Nigeria — {ngOn ? "included" : "separated"}.</h2>
            <p className={styles.ngText}>
              TCSN&apos;s register is request-based, so a title missing from it proves nothing about what it
              sold — only that nobody applied. A gap between two artists there can measure paperwork rather
              than sales, which is why it is counted on its own line.
            </p>
            <div className={styles.ngFigures}>
              <span>{nameA} — {sideA?.nigeria.plaques ?? 0} plaque{(sideA?.nigeria.plaques ?? 0) === 1 ? "" : "s"} · at least{"\u00a0"}{fmt(sideA?.nigeria.units ?? 0)}</span>
              <span>{nameB} — {sideB?.nigeria.plaques ?? 0} plaque{(sideB?.nigeria.plaques ?? 0) === 1 ? "" : "s"} · at least{"\u00a0"}{fmt(sideB?.nigeria.units ?? 0)}</span>
            </div>
            <Link href={href(sp, { ng: ngOn ? (ngDefault ? "0" : null) : ngDefault ? null : "1" })} scroll={false} className={styles.ngAction}>
              {ngOn ? "Separate Nigeria" : "Include Nigeria"}
            </Link>
          </section>
        )}

        {ready && rows.length === 0 && (
          <p className={styles.why}>
            Neither {nameA} nor {nameB} holds a certification {ngOn ? "anywhere on the board" : "outside Nigeria"}
            {!ngOn ? " — include Nigeria to compare them" : ""}.
          </p>
        )}

        {ready && rows.length > 0 && (
          <>
            <h2 className="visuallyHidden" id="country-table">Country by country</h2>
            <div className={styles.tableWrap}>
              {/* Explicit roles: under 760px the table is displayed as a grid,
                  and WebKit can drop table semantics from a <table> whose
                  display is not table-*. No-ops where the heuristics hold. */}
              <table className={styles.table} role="table">
                <thead role="rowgroup">
                  <tr role="row">
                    <th scope="col" role="columnheader">Country<span className={styles.thSep}> · </span><span className={styles.thCount}>{rows.length}</span></th>
                    <th scope="col" role="columnheader" className={styles.thNum}>{nameA}</th>
                    <th scope="col" role="columnheader" className={styles.thNum}>{nameB}</th>
                  </tr>
                </thead>
                <tbody role="rowgroup">
                  {rows.map((r) => {
                    const m = countryMeta(r.country);
                    const av = r.a?.units ?? 0;
                    const bv = r.b?.units ?? 0;
                    return (
                      <tr key={r.country} role="row" className={r.country === "NG" && ngOn ? styles.ngRow : undefined}>
                        <td role="cell">
                          <span className={styles.country}>
                            <span className={styles.flag} aria-hidden="true">{m.flag}</span>
                            <span className={styles.countryName}>{m.name}</span>
                            <span className={styles.countryCode}>{r.country}</span>
                          </span>
                        </td>
                        <td role="cell" className={styles.tdNum}><Cell line={r.a} lead={av >= bv} artistMode={!useSongs} /></td>
                        <td role="cell" className={styles.tdNum}><Cell line={r.b} lead={bv >= av} artistMode={!useSongs} /></td>
                      </tr>
                    );
                  })}
                  {!useSongs && showAll && c && c.collapsed.length > 0 && (
                    <tr role="row" className={styles.collapseRow}>
                      <td role="cell" colSpan={3}>
                        {/* Not scroll={false}: collapsing the table above the reader
                            clamped the page to its new bottom with this link under the
                            header. The fragment lands them at the top of the folded table. */}
                        <Link href={`${href(sp, { all: null })}#country-table`} className={styles.showAll}>Show fewer <span aria-hidden="true">↑</span></Link>
                      </td>
                    </tr>
                  )}
                  {!useSongs && !showAll && c?.collapsed.map((t) => (
                    <tr key={t.side} role="row" className={styles.collapseRow}>
                      <td role="cell" colSpan={3}>
                        <span className={styles.collapseText}>
                          + {t.countries} further countries where only {t.artist} is certified ·{" "}
                          <span className={styles.collapseUnits}>at least{"\u00a0"}{fmt(t.units)}</span>
                          {foldedIn(t.rows) > 0 ? <> · {foldedIn(t.rows)} plaque{foldedIn(t.rows) === 1 ? "" : "s"} not counted{"\u00a0"}<span className={styles.mark}>¹</span></> : null}
                        </span>
                        {/* scroll={false}: this sits at the foot of the table, and the
                            default navigation put the reader back at the top of
                            the page (scrollY 1600 → 43), losing the rows they
                            had just asked for. */}
                        <Link href={href(sp, { all: "1" })} scroll={false} className={styles.showAll}>Show all <span aria-hidden="true">↓</span></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.notes}>
              {(visibleNotCounted || foldedNotCounted > 0) && noteSource.notCounted.length > 0 && (
                <p>
                  <strong><span className={styles.mark}>¹</span> Not counted</strong> —{" "}
                  {noteSource.notCounted.map((n) => `${countryMeta(n.country).name} (${countryMeta(n.country).body})`).join(" · ")}.
                  Listed, never summed: these bodies publish no threshold this page can put on the same scale
                  as the rest.
                </p>
              )}
              {visibleCaveat && noteSource.caveats.length > 0 && (
                <p><strong><span className={styles.mark}>†</span> Multiplier assumed</strong> — {noteSource.caveats.join(" ")}</p>
              )}
              {visibleVintage && noteSource.vintages.length > 0 && (
                <p>
                  <strong><span className={styles.mark}>‡</span> This body raised its thresholds since 2015</strong> — the figure is today&apos;s level, and a
                  plaque awarded before the rise may have cleared a lower bar.{" "}
                  {/* The body-by-body record lives on the methodology page (Paul, 11
                      Sep): twelve of them here were a 40-line wall on a phone. */}
                  <Link href="/methodology#threshold-history" className={styles.noteLink}>
                    Which bodies, and when ↗
                  </Link>
                </p>
              )}
              {visibleAssumed && noteSource.assumptions.length > 0 && (
                <p>
                  <strong><span className={styles.mark}>§</span> Ratio assumed</strong> — the body publishes its levels in
                  streams and no download-equivalence, so this page converts at 100 streams to a unit, the ratio
                  Denmark and Norway publish for the same measure. {noteSource.assumptions.join(" ")}
                </p>
              )}
            </div>
          </>
        )}

        <h2 className="visuallyHidden">How this is counted</h2>
        <div className={styles.method}>
          <div>
            <p className={styles.methodTitle}>One plaque per release per country</p>
            <p className={styles.methodBody}>
              At its current tier. Gold → Platinum → 2× Platinum is the same sales recertified, never three
              sales.
            </p>
          </div>
          <div>
            <p className={styles.methodTitle}>Each body&apos;s own threshold</p>
            <p className={styles.methodBody}>
              Streams-based bodies — France, Denmark, Norway and the Netherlands — are converted with the
              body&apos;s own published download-equivalence, never an estimate.
            </p>
          </div>
          <div>
            <p className={styles.methodTitle}>Not quite everything can be priced</p>
            <p className={styles.methodBody}>
              Sweden and Mexico publish their song levels in streams and no download-equivalence — those
              plaques are converted at 100 streams to a unit, the ratio Denmark and Norway publish, and marked §.
              Poland measures singles in złoty of revenue and Greece and Colombia publish no thresholds: those
              plaques are listed, never summed, and never hidden.
            </p>
          </div>
        </div>

        {/* The design's phone frame ends on this row; the controls-row copy
            above hides under 760px. */}
        {!refused && (
          <Link href="/methodology#certified-units" className={`${styles.howLink} ${styles.howLinkFoot}`}>
            How this is counted <span aria-hidden="true">↗</span>
          </Link>
        )}

        {ready && (
          <section className={styles.exit} aria-label="Next">
            <h2 className={styles.exitKicker}>Next</h2>
            <p className={styles.exitLead}>
              Two artists priced against each other — the other fourteen are one tap away, each with a ledger
              you can bring back here.
            </p>
            <Link href="/afrobeats" className="btn btnPrimary">The Afrobeats Board <span aria-hidden="true">↗</span></Link>
          </section>
        )}
      </main>
      {/* Phone only: the design's sticky bar above the five-tab bar, once both
          sides are filled. The desktop foot strip above hides under 760px. */}
      {ready && (
        <div className={`${styles.boardBar} compareBoardBar`}>
          <Link href="/afrobeats" className={styles.boardBtn}>
            <span>The Afrobeats Board</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      )}
      {/* No "Keep exploring" here (Paul, 11 Sep): the Afrobeats Board action
          is the one way onward this page offers. */}
      {ready && <div className={styles.barSpacer} aria-hidden="true" />}
    </>
  );
}
