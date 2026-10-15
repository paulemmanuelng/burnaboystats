import { Fragment } from "react";
import Link from "next/link";
import styles from "./compare.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import { pageMetadata, datasetJsonLd, SEGMENT_LABELS } from "../lib/seo";
import { siteUrl } from "../site";
import { countryMeta, artistBySlug as boardArtist, pageStamp } from "../data/afrobeats";
import { CERT_THRESHOLDS } from "../data/certThresholds";
import { numberWord } from "../lib/homeData";

// As the rest of the page names them: "the Czech Republic", the name its
// table row, h1 and breadcrumb print — the card said "Czechia" (debug pass,
// 5 Oct 2026). Both are right; one page uses one.
const nameOf = (code: string) => (code === "NL" ? "the Netherlands" : code === "CZ" ? "the Czech Republic" : countryMeta(code).name);

// The bodies that publish their levels in streams AND their own download
// equivalence — the same filter /methodology uses. Typed, this card named four
// (France, Denmark, Norway, the Netherlands) while the table below it priced
// Czech and Slovak plaques by the same rule.
const streamRatioNames = Object.values(CERT_THRESHOLDS)
  .filter((t) => t.singleRaw && !t.assumed)
  .map((t) => nameOf(t.code))
  .sort((a, b) => a.replace(/^the /, "").localeCompare(b.replace(/^the /, "")));
const streamRatioBodies = `${streamRatioNames.slice(0, -1).join(", ")} and ${streamRatioNames[streamRatioNames.length - 1]}`;

// The method card's other four lists, derived the same way — "Sweden and
// Mexico", "Poland" and "Greece and Colombia" were typed and would have stood
// still the day a body joined or left a category. (Greece did leave one on
// 20 Sep 2026, when it was priced at IFPI's June 2013 level and marked ¶, and
// Poland left the revenue list on 23 Sep 2026, when its złoty were divided by
// ZPAV's own 2 zł a single — ¶ too.)
const joinNames = (xs: string[]) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);
const byName = (a: string, b: string) => a.replace(/^the /, "").localeCompare(b.replace(/^the /, ""));
/** Bodies whose song levels are streams with no download-equivalence — priced at an assumed ratio, marked §. */
const assumedNames = Object.values(CERT_THRESHOLDS).filter((t) => t.assumed).map((t) => nameOf(t.code)).sort(byName);
/** Bodies that price albums but not singles — none since 23 Sep 2026, when
 *  Poland's singles were priced; the clause renders only while one exists. */
const revenueNames = Object.values(CERT_THRESHOLDS).filter((t) => t.singleExcluded && !t.albumExcluded).map((t) => nameOf(t.code)).sort(byName);
/** Bodies that publish no threshold for either format — listed, never summed. Colombia alone since 20 Sep 2026. */
const noThresholdNames = Object.values(CERT_THRESHOLDS).filter((t) => t.singleExcluded && t.albumExcluded).map((t) => nameOf(t.code)).sort(byName);
/** Bodies priced at the last LEVEL ever published for them — marked ¶ (Greece, IFPI's June 2013 list). */
const historicNames = Object.values(CERT_THRESHOLDS).filter((t) => t.historic && !t.plnPerSingle).map((t) => nameOf(t.code)).sort(byName);
/** Bodies that print single levels in złoty and no rate, divided by the złoty a
 *  single their own rules last printed — also marked ¶ (Poland, 2 zł). */
const plnBodies = Object.values(CERT_THRESHOLDS).filter((t) => t.plnPerSingle).sort((a, b) => byName(nameOf(a.code), nameOf(b.code)));
// Countries with no certifying body, priced at the issuing label's own
// published level — Turkey (Sony Music Türkiye, 7 Oct 2026; `labelLevel`).
const labelNames = Object.values(CERT_THRESHOLDS).filter((t) => t.labelLevel).map((t) => nameOf(t.code)).sort(byName);
/** The ratio the § conversion applies, read off an assumed body's own raw and priced levels. */
const assumedRatio = (() => {
  const t = Object.values(CERT_THRESHOLDS).find((x) => x.assumed && x.singleRaw?.platinum && x.single?.platinum);
  return t ? Math.round(t.singleRaw!.platinum! / t.single!.platinum!) : 100;
})();
/** How many countries the table covers — every body with a threshold row,
 *  Colombia included, whose plaques are listed rather than priced — for the
 *  scope line's "N countries checked" (compareA-02). It is the method's
 *  coverage, the same on every pair, not the pair's own spread: the table's
 *  "Country · N" header counts that. */
const coveredBodies = Object.keys(CERT_THRESHOLDS);
const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const ukPlatinum = CERT_THRESHOLDS.UK.single!.platinum!;
import type { Metadata } from "next";
import { PICKER_FOLD, fold, pickerArtists, pickerReleases } from "../lib/comparePicker";
import { compareWithLinks, featuredPairs, pairCopy, pairSlug } from "../lib/comparePairs";
import { pairLine } from "../lib/comparePairLine";
import { joinListed, listedOnly, marketSummary, summaryWords } from "../lib/compareSummary";
import { carried, href, one, type SP } from "../lib/compareUrl";
import { fmt, keepParens, plaque, PlaqueWords, program, shortProgram } from "./chips";
import { caveatParagraph, marketKey, notCountedNotes, PLAQUE_NOTE_HEADINGS } from "../lib/certUnits";

/** "RIAA Latin" in the US code column reads as "US · LATIN" — the country is
 *  already spelled beside it, so the column carries what makes this row a
 *  different line from the one above it. */
const programShort = (name: string, country: string) => {
  const own = countryMeta(country).body;
  const tail = name.startsWith(own) ? name.slice(own.length).trim() : name;
  return `${country} · ${(tail || name).toUpperCase()}`;
};
import { CountryBoardView } from "./CountryBoardView";
import { CompareBackBar } from "./CompareBackBar";
import { HeadSync } from "./HeadSync";
import { KeepFocus } from "./KeepFocus";
import { certCountryCodes, countryBoards, countryCopy, countryFromSlug, countryIndexCopy, countrySlug, priceCountry, pricingPhrase, sameRecord } from "../lib/certCountry";
import { artAt, artSrcSet } from "../lib/artAt";
import {
  artistBySlug,
  comparableArtists,
  compare,
  nigeriaDefault,
  nigeriaDefaultSolo,
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
 *  2. The engine reads the whole plaque corpus — every artist, every plaque and
 *     the 27-body threshold table. Shipping that to the browser to power four
 *     toggles would be a large bundle for state a query string already holds.
 *  3. It renders complete without JavaScript, so a crawler sees the numbers.
 *
 * The cost is that a toggle is a navigation. At this page's size that is a
 * fetch, and it buys shareability outright.
 */

const BASE_METADATA = pageMetadata({
  title: "Compare Certified Units — Burna Boy vs Wizkid & More",
  // 159 characters, and a test holds it there. The previous one ran to 179 and
  // was being truncated in results: /compare is server-rendered, so
  // scripts/check-seo.mjs — which reads prerendered HTML — never saw it, and
  // nothing else looked until the 23 Sep sweep.
  description:
    "Compare two Afrobeats artists, two songs or two albums by the units behind their plaques — or one market at a time, at each body's published threshold.",
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
  return compareMetadata(await searchParams);
}

/** generateMetadata's answer for one query, shared with the page so the tab
 *  can be given the same title and canonical after a client-side toggle
 *  (HeadSync). */
function compareMetadata(sp: SP): Metadata {
  const mode = readMode(one(sp.mode));
  // Country mode canonicals to the pretty route the same way a filled pair
  // does: /compare?mode=country&country=canada and /compare/in/canada are one
  // board, and only one of them should be indexed.
  if (mode === "country") {
    const code = countryFromSlug(one(sp.country) ?? "");
    // No market named: the index, with /compare/in's own title over its
    // "Certified units by country" h1, not the hub's (V-compareA-11).
    if (!code) return pageMetadata({ ...countryIndexCopy(), path: "/compare/in" });
    const board = priceCountry(code);
    const copy = countryCopy(board);
    const url = `/compare/in/${countrySlug(code)}`;
    return {
      ...BASE_METADATA,
      title: copy.title,
      description: copy.description,
      alternates: { canonical: url },
      openGraph: { ...BASE_METADATA.openGraph, title: copy.title, description: copy.sub, url },
      twitter: { ...BASE_METADATA.twitter, title: copy.title, description: copy.sub },
    };
  }
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


/** Three modes: two record modes (a single against a single, an album against
 *  an album) and artist totals. The record modes share every mechanism and
 *  differ only in which format the pickers list and the chosen title must be. */
type Mode = "songs" | "albums" | "artists" | "country";
const readMode = (v: string | undefined): Mode =>
  v === "songs" ? "songs" : v === "albums" ? "albums" : v === "country" ? "country" : "artists";
const isRecordMode = (m: Mode) => m === "songs" || m === "albums";
const formatOf = (m: Mode) => (m === "albums" ? "album" : "single") as "album" | "single";
/** Words for the record mode: "song"/"songs" or "album"/"albums". */
const noun = (m: Mode, plural = false) => (m === "albums" ? (plural ? "albums" : "album") : plural ? "songs" : "song");

const MODES = [
  { key: "songs", long: "Song vs song", short: "Songs" },
  { key: "albums", long: "Album vs album", short: "Albums" },
  { key: "artists", long: "Artist totals", short: "Artists" },
  { key: "country", long: "By country", short: "Country" },
] as const;

/** The four modes and where each one goes from here: read by the desktop
 *  segmented control and by the phone's mode menu (J2-1, fix 43), so the two
 *  can never drift. No new link: these are the segment's own hrefs. */
function modeLinks(sp: SP, includeFeatures: boolean) {
  return MODES.map((m) => ({
    ...m,
    // Country mode has a page of its own, and it is where the 27 boards are
    // linked from — so the segment points at the pretty index rather than the
    // query-string twin it canonicals to. The features choice is the
    // reader's, so it carries over. Switching between the two record modes
    // drops the chosen titles and queries — a single is not an album — and
    // `country` goes with the record params: a market is not a state of the
    // song or artist modes, and leaving it in put "&country=canada" in every
    // URL shared from a board.
    href:
      m.key === "country"
        ? includeFeatures
          ? "/compare/in"
          : "/compare?mode=country&feat=0"
        : href(sp, { mode: m.key, sa: null, sb: null, qa: null, qb: null, country: null }),
  }));
}
type ModeLink = ReturnType<typeof modeLinks>[number];

/** A side's "Change": clear the most specific thing first. A chosen song
 *  drops back to that artist's picker, an artist back to the suggestions.
 *  Read by the slot's ✕ and by the phone's change row, so both land in one
 *  place. */
const clearHref = (sp: SP, side: "a" | "b", isSong: boolean, refused: boolean) =>
  isSong && !refused
    ? `${href(sp, { [side === "a" ? "sa" : "sb"]: null })}#pick-${side}`
    : href(sp, {
        [side]: null,
        [side === "a" ? "sa" : "sb"]: null,
        [side === "a" ? "qa" : "qb"]: null,
      });


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
            <span className={styles.whenClosed}>+ {rest.length} more<span className="visuallyHidden"> {label}</span></span>
            <span className={styles.whenOpen}>Show fewer<span className="visuallyHidden"> {label}</span></span>
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
  // The count is split so it agrees with the header beneath it, whose
  // denominator is the plaques outside Nigeria: "20 plaques" over "17 of 19
  // counted" read as a contradiction until the Nigerian one was named.
  const ngCount = isSong ? release.certs.filter((c) => c.c === "NG").length : 0;
  // Segments, not one string: each is rendered nowrap and the line breaks
  // only after a separator, so a phone never opens a line with "·" or splits
  // "+ 1 Nigerian" across two.
  const meta: string[] = isSong
    ? [artist.name, release.isFeature ? "featured" : release.format === "album" ? "album" : "lead single",
       release.credit ?? "",
       ngCount
         ? `${release.certs.length - ngCount} cert${release.certs.length - ngCount === 1 ? "" : "s"} outside Nigeria + ${ngCount} Nigerian`
         : `${release.certs.length} cert${release.certs.length === 1 ? "" : "s"}`]
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
          // Countries HELD, counted once: the lines are markets, so a RIAA
          // Latin line beside a RIAA line is one country, and a listed-only
          // line (Colombia) is a country too (debug pass, 5 Oct 2026).
          priced ? (() => {
            const n = new Set([...priced.byCountry, ...priced.listed].map((l) => l.country)).size;
            return `${n} ${n === 1 ? "country" : "countries"}`;
          })() : "",
        ].filter(Boolean);

  return (
    <div className={styles.slot} id={`slot-${side}`}>
      {img ? (
        // In a <picture> so React does not make this eager image a preload
        // hint: hints ride in the RSC payload, so every page whose links
        // prefetched a pair downloaded both its avatars unseen (20 on /compare
        // at 1024, debug pass 5 Oct 2026). display: contents keeps the <img>
        // the slot's flex item.
        <picture style={{ display: "contents" }}>
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
        </picture>
      ) : (
        <div className={`${styles.art} ${isSong ? "" : styles.artRound}`} aria-hidden="true" />
      )}
      <div className={styles.slotBody}>
        <p className={styles.slotTitle}>{keepParens(title)}</p>
        <p className={styles.slotMeta}>
          {/* A line may break only at the space after a separator: short
              segments are glued with no-break spaces, the "·" ends the
              segment it follows, so it ends a line and never starts one
              ("· 25 countries" opened a line, debug pass 5 Oct 2026). Long
              segments still wrap inside. */}
          {meta.map((m, i) => (
            <span key={i}>
              {i > 0 ? " " : ""}
              <span className={styles.metaSeg}>{m.length <= 22 ? m.replace(/ /g, "\u00a0") : m}{i < meta.length - 1 ? "\u00a0·" : ""}</span>
            </span>
          ))}
        </p>
      </div>
      {/* Clear the most specific thing first: a chosen song drops back to that
          artist's picker, an artist drops back to the suggestions. Without this
          the only way to change a side is editing the URL. */}
      <Link
        href={clearHref(sp, side, Boolean(isSong), refused)}
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
 * The phone's mode control (J2-1, fix 43): a native <details> holding the four
 * modes as links, so it works without script and every href is the desktop
 * segment's. The summary is a 44px target naming the current mode, ▾ shut and
 * ▴ open. The current mode is not a link (the segment's own rule) and wears
 * its ink fill. Remounted closed after a switch.
 */
function ModeMenu({ items, current }: { items: ModeLink[]; current: Mode }) {
  const on = items.find((m) => m.key === current) ?? items[0];
  return (
    <details className={styles.modeMenu} key={current}>
      <summary className={styles.modeSummary}>
        <span className="visuallyHidden">Comparison mode: </span>
        {on.short}{" "}
        <span aria-hidden="true" className={styles.whenClosed}>▾</span>
        <span aria-hidden="true" className={styles.whenOpen}>▴</span>
      </summary>
      <ul className={styles.modeList}>
        {items.map((m) => (
          <li key={m.key}>
            {m.key === current ? (
              <span className={`${styles.modeItem} ${styles.modeOn}`} aria-current="page">{m.long}</span>
            ) : (
              <Link href={m.href} className={styles.modeItem}>{m.long}</Link>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}

/**
 * The phone's compact change row (J2-1, fix 43): "{A} CHANGE · {B} CHANGE"
 * and the mode menu, in place of the two slot cards and the segment. Each
 * change is ONE link spanning the full 56px row, at least 44px wide, to the
 * slot's own clear (no new link); its name is its visible text. Hidden above
 * 900, where the slots and the segment are the controls.
 */
function ChangeRow({ sides, items, mode }: { sides: { name: string; href: string }[]; items: ModeLink[]; mode: Mode }) {
  return (
    <div className={styles.changeRow}>
      <div className={styles.changeLinks}>
        {sides.map((x, i) => (
          <Fragment key={i}>
            {i > 0 && <span className={styles.changeSep} aria-hidden="true">·</span>}
            <Link href={x.href} className={styles.changeLink}>
              <span className={styles.changeName}>{x.name}</span>{" "}
              <span className={styles.changeWord}>Change</span>
            </Link>
          </Fragment>
        ))}
      </div>
      <ModeMenu items={items} current={mode} />
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
  // Many on the roster hold no certified album at all. Say so, and offer
  // the mode that has something to price, rather than an empty picker.
  if (all.length === 0) {
    const other = mode === "albums" ? "songs" : "albums";
    return (
      <div className={styles.pickWrap} id={`pick-${side}`}>
        <p className={styles.pickNone}>
          <strong>{artist.name} holds no certified {noun(mode)} on this site</strong> — every one of{" "}
          {artist.releases.reduce((n, r) => n + r.certs.length, 0).toLocaleString("en-US")} certifications here is on a{" "}
          {noun(other)}.{" "}
          <Link href={href(sp, { mode: other, sa: null, sb: null, qa: null, qb: null })} className={styles.pickChange}>
            Compare {noun(other, true)} instead
          </Link>{" "}
          or{" "}
          <Link href={href(sp, { [side]: null, [target]: null, [field]: null })} className={styles.pickChange}>
            change artist
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
  const kept = carried(sp).filter(([k]) => k !== field);

  return (
    <div className={styles.pickWrap} id={`pick-${side}`}>
      <div className={styles.pickHead}>
        <span className={styles.pickLabel}>
          {q
            ? `${matches.length} of ${all.length} match “${query}”`
            : all.length === 1
              ? `${artist.name} · 1 certified\u00a0${noun(mode)}`
              : `${artist.name} · all ${all.length} certified\u00a0${noun(mode, true)}`}
        </span>
        <Link
          href={href(sp, { [side]: null, [target]: null, [field]: null })}
          className={styles.pickChange}
        >
          Change artist
        </Link>
        {/* The action carries the picker's fragment: a GET form keeps it when
            it builds the query, so the reload lands on the results, not the
            title. */}
        <form method="get" action={`/compare#pick-${side}`} className={styles.search} role="search">
          {kept.map(([k, v]) => (
            <input key={k} type="hidden" name={k} value={v} />
          ))}
          <input
            type="search"
            name={field}
            defaultValue={query}
            className={styles.searchInput}
            placeholder={`Search ${all.length} ${noun(mode, all.length !== 1)}`}
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
          least one certification appear here — a {noun(mode)} with none has nothing to price.
        </p>
      )}
    </div>
  );
}

/** A tier's dot in the tier's ink — the inks, not the fills, because they
 *  hold 4.8:1 on the page (fix 62's reason) — mapped as the chips' tierClass. */
const dotClass = (level: string) =>
  level === "Diamond" ? styles.bfDotDiamond
  : level === "Platinum" ? styles.bfDotPlatinum
  : level === "Gold" ? styles.bfDotGold
  : styles.bfDotSilver;

/**
 * One side of a butterfly row (J2-4, fixes 40–42, 50, 52): the figure, then
 * the pill — the tier dot, the top plaque's words, and its marks and issuer
 * as one tail — then the bar toward the centre and, in artist mode, how many
 * certifications the line sums. One DOM order on both sides; side A mirrors
 * it in CSS, so the figure always sits innermost, beside the bars.
 *
 * The side with the larger counted units leads: a solid ink bar and a bold
 * ink figure. The other trails: an outlined bar and a muted figure. A tie
 * styles both as leading, naming no leader. Neither side is ever gold (fix
 * 52): the leader is whoever leads. Each bar is that side's units over the
 * row's larger figure; a side with no priced units draws none.
 */
function Side({ side, line, other, artistMode }: { side: "a" | "b"; line: CountryLine | null; other: CountryLine | null; artistMode: boolean }) {
  const cls = `${styles.bfSide} ${side === "a" ? styles.bfSideA : styles.bfSideB}`;
  // A blank cell reads as a rendering fault, so the words are the value
  // (J2-6): "No cert", muted, in the figure's own slot, with no pill, no
  // count and no bar. "cert", the short form of the site's one noun where
  // space is tight (owner's default, design review B-10).
  if (!line) {
    return (
      <div className={cls}>
        <div className={styles.bfLine}><span className={`${styles.bfFigure} ${styles.bfNone}`}>No cert</span></div>
      </div>
    );
  }
  // No-break spaces between the marks, so the group never splits; the
  // group and the issuer ride together as the pill's tail, after the
  // ordinary space PlaqueWords puts before it (compareChipMarksWrap). The
  // marks share one face (.mark): Space Mono has no ‡, and its † pulled a
  // latin-ext subset the site never preloads.
  const markList = line.counted
    ? [line.caveat ? "†" : null, line.vintage ? "‡" : null, line.assumed ? "§" : null, line.historic ? "¶" : null].filter(Boolean)
    : [];
  const marks = markList.length ? <span className={styles.mark}>{markList.join("\u00a0")}</span> : null;
  // The issuer marker as built (fix 50): the full issuer on desktop, its first
  // word on a phone. A programme line already says which programme it is, in
  // the country column, so it carries none ("US · LATIN").
  const prog = line.program ? null : program(line.top, line.country);
  const tail = marks || prog ? (
    <span className={styles.bfTail}>
      {marks}
      {marks && prog ? " " : ""}
      {prog && (
        <span className={styles.chipProgram} title={prog}>
          <span className={styles.progLong}>{prog}</span>
          <span className={styles.progShort} aria-hidden="true">{shortProgram(prog)}</span>
        </span>
      )}
    </span>
  ) : null;
  // The tier dot opens the first run of words, inside it, so the pill wraps
  // between its runs and its tail and never leaves the dot alone on line 1.
  const pill = (
    <span className={styles.bfPill}>
      <PlaqueWords
        top={line.top}
        after={!line.counted && line.releases > 1 ? `\u00a0+${line.releases - 1}` : ""}
        marks={tail}
        lead={<span className={`${styles.bfDot} ${dotClass(line.top?.level ?? "Gold")}`} aria-hidden="true" />}
      />
    </span>
  );
  // Listed, never summed (J2-6): the plaque keeps its pill and its issuer,
  // the figure's slot says "Not counted ¹", and there is no count and no bar
  // on either side — the row stays, priced by nobody.
  if (!line.counted) {
    return (
      <div className={cls}>
        <div className={styles.bfLine}>
          <span className={`${styles.bfFigure} ${styles.bfNone}`}>Not counted{"\u00a0"}<span className={styles.mark}>¹</span></span>
          {pill}
        </div>
      </div>
    );
  }
  const mine = line.units;
  const theirs = other?.counted ? other.units : 0;
  const lead = mine >= theirs;
  return (
    <div className={cls}>
      <div className={styles.bfLine}>
        <span className={`${styles.bfFigure} ${lead ? styles.bfLead : styles.bfTrail}`}>{fmt(line.units)}</span>
        {pill}
      </div>
      <div className={styles.bfFoot}>
        {mine > 0 && (
          <span className={styles.bfTrack} aria-hidden="true">
            <span
              className={`${styles.bfBar} ${lead ? styles.bfBarLead : styles.bfBarTrail}`}
              style={{ "--pct": mine / Math.max(mine, theirs) } as React.CSSProperties}
            />
          </span>
        )}
        {/* In artist mode a pill stands for a sum: how many certifications,
            glued so the count never splits. The legend says "top" once. */}
        {artistMode && (
          <span className={styles.bfCount}>
            {line.releases}{"\u00a0"}{line.releases === 1 ? "cert" : "certs"}
          </span>
        )}
      </div>
      {/* The same country's unpriced plaques, which used to vanish here. */}
      {line.notCounted && (
        <span className={`${styles.notCounted} ${styles.bfMore}`}>
          +{line.notCounted.plaques} {plaque(line.notCounted.top)} not counted{"\u00a0"}<span className={styles.mark}>¹</span>
        </span>
      )}
    </div>
  );
}

export default async function ComparePage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const head = compareMetadata(sp);
  // Country mode on the query string is the board /compare/in(/<country>)
  // renders, with a switch the pretty route cannot hold (features off, and
  // "Change country" with features off) — the canonical above already says
  // so. Its breadcrumb is the pretty route's too: Compare / By country /
  // Canada. It was always "/compare", so a features-off board dropped the two
  // crumbs back to the index under a "Certified units in Canada" h1
  // (V-compareIn-04, debug pass 7 Oct 2026). The leaf is the name the pretty
  // route prints (priceCountry's name is countryMeta's), read without pricing
  // the board a second time.
  const countryMode = readMode(one(sp.mode)) === "country";
  const countryCode = countryMode ? countryFromSlug(one(sp.country) ?? "") : null;
  const crumbs =
    !countryMode
      ? { path: "/compare" }
      : countryCode
        ? { path: `/compare/in/${countrySlug(countryCode)}`, leaf: countryMeta(countryCode).name }
        : { path: "/compare/in" };
  // Called, not rendered as an element: the awaited tree is plain markup,
  // which is what the tests (renderToStaticMarkup) and Next both want.
  // HeadSync only here: the pair, board and /compare/in routes have metadata
  // of their own that never reads the query, and the client caches it right.
  return (
    <>
      <HeadSync title={String(head.title)} canonical={new URL(String(head.alternates?.canonical ?? "/compare"), siteUrl).href} />
      {await CompareView({ sp, ...crumbs })}
    </>
  );
}

/**
 * The page itself, shared with /compare/<a>-vs-<b>: the same tree with both
 * sides filled, a path of its own for the breadcrumb and a leaf label the
 * slug cannot spell ("Burna Boy vs Wizkid").
 */
// Every market with a board of its own (/compare/in/<country>), for the
// table's country links (CC-09). Read once: the roster does not change
// between the 190 pair pages a build renders.
const boardCodes = new Set(certCountryCodes());

export async function CompareView({ sp, path, leaf, pairTitle }: { sp: SP; path: string; leaf?: string; pairTitle?: string }) {
  const mode = readMode(one(sp.mode));
  const record = isRecordMode(mode);
  const format = formatOf(mode);
  // COUNTRY MODE. One market, every artist — the pivot of the rest of the page.
  // The param takes the country's NAME ("canada"), which is what the pretty
  // route spells, and its ISO code as well, so a hand-edited ?country=CA
  // resolves rather than dropping the reader back at the picker.
  const countryMode = mode === "country";
  const countryCode = countryMode ? countryFromSlug(one(sp.country) ?? "") : null;
  const countryBoard = countryCode ? priceCountry(countryCode, { includeNigeria: true, includeFeatures: one(sp.feat) !== "0" }) : null;
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
  // Same title, and the country boards' own evidence that it is one record
  // (certCountry.sameRecord: a credit or title naming the other artist, one
  // sleeve, or a register row naming both): refuse and say so. It asked
  // whether either side was a featured appearance until 7 Oct 2026, when
  // Rule C made "Essence" a lead for both Wizkid and Tems (its singles are in
  // both discographies) — and two artists' leads can be one record as much as
  // a lead and a feature.
  const sameRecording =
    record && songA && songB && a && b && a.slug !== b.slug &&
    songA.title.toLowerCase() === songB.title.toLowerCase() &&
    sameRecord({ artist: a, plaque: songA }, { artist: b, plaque: songB });
  // An artist against themselves is not a comparison either. The picker no
  // longer offers it, but a URL can still say so.
  const sameArtist = Boolean(a && b && a.slug === b.slug);
  // The design review's views (8 Oct 2026, Job 2). A PAIR VIEW is two artists
  // compared in artist mode — the pretty /compare/<a>-vs-<b> route and every
  // /compare?a=&b= toggle of it (compareUrl.ts), so a switch never flips the
  // layout. Everything else is the tool (arrival, one side, the record modes,
  // the refusals) or a country view.
  const pairView = mode === "artists" && Boolean(a && b) && !sameArtist && !countryMode;

  // Country mode never computes a pairwise comparison, whatever the URL says.
  // `/compare?mode=country&country=canada&a=burna-boy&b=wizkid` — a hand-edited
  // URL, or an old link that predates the mode — rendered the whole Burna vs
  // Wizkid page UNDER the Canadian board: two headline cards, a second
  // country-by-country table and a second exit.
  const c = !countryMode && both && !sameRecording && !sameArtist
    ? compare(a!, b!, {
        ...(ngParam ? { includeNigeria: ngParam === "1" } : {}),
        includeFeatures,
      })
    : null;

  // Solo pricing also backs the slots on a REFUSED pairing (same artist twice),
  // so they never print "· · 0 countries" for an artist with a real catalogue.
  // The one filled side is priced WHICHEVER slot holds it: side B alone (every
  // pair page's side-A "Change ✕" lands there) printed "Davido · artist totals"
  // with no counts and no headline, where side A alone printed both (debug
  // pass, 6 Oct 2026).
  const solo = a ?? b;
  const soloSide = solo && !countryMode && (!both || sameArtist) ? solo : null;
  // One side filled: the solo figure honours the Nigeria switch too. It used to
  // hardcode Nigeria off, so the switch it rendered was inert and Seyi Vibez
  // landed on "at least 0" with no way to see his 7,750,000. ...and with no
  // `ng` it takes the artist's own default, the one every pairing of theirs
  // opens on: Seyi Vibez alone still read "at least 0 · 0 of 0 plaques
  // counted · 0 countries" where each of his pair pages reads 11,125,000
  // (debug pass, 6 Oct 2026). Tap him first, or "Change ✕" off side B of any
  // seyi-vibez-vs-* page, and that is where you landed.
  const soloDefault = soloSide ? nigeriaDefaultSolo(soloSide, includeFeatures) : null;
  const soloNg = ngParam ? ngParam === "1" : Boolean(soloDefault?.on);
  const soloPriced = soloSide ? priceArtist(soloSide, { includeNigeria: soloNg, includeFeatures }) : null;
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
  const ready = countryMode ? false : record ? useSongs : both && !refused;
  // A refused pairing renders its refusal and nothing else — no card, no hint.
  // It was printing "at least 0 certified units" beneath "That is Burna Boy on
  // both sides", which is a number the page never established.
  const partial = countryMode || refused ? false : record ? Boolean(spa || spb) : Boolean(solo);

  // The side being described, whichever mode is on — and in song mode with one
  // song chosen, that side is the SONG, never the artist. The header card was
  // printing "Essence · 6,340,000 · 47 of 47 plaques counted": the song's figure
  // beside the artist's plaque count.
  // With only side B's record picked, the one header card describes THAT
  // record: it read "Burna Boy · at least 0 certified units" beside a Smooth
  // Criminal chosen on the right (review, 23 Sep 2026). Artist totals do the
  // same with only side B's artist chosen: the card is that artist's.
  const sideA: ArtistUnits | null = record ? spa ?? (ready ? null : spb) : c?.a ?? soloPriced ?? null;
  const sideB: ArtistUnits | null = record ? spb : c?.b ?? null;
  const totalA = sideA?.total ?? 0;
  const totalB = sideB?.total ?? 0;
  const nameA = record && songA ? songA.title : record && songB && !spa ? songB.title : solo?.name ?? "";
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
        // Rule 5 applies here too: "Dai Dai" holds a RIAA Latin Platino and a
        // song table keyed on the country would have summed it into a US line
        // the RIAA never awarded.
        const keyOf = (l: CountryLine) => marketKey(l.country, l.program);
        const codes = [...new Set([
          ...spa!.byCountry.map(keyOf), ...spa!.listed.map(keyOf),
          ...spb!.byCountry.map(keyOf), ...spb!.listed.map(keyOf),
        ])];
        const find = (p: typeof spa, key: string) =>
          p!.byCountry.find((l) => keyOf(l) === key) ?? p!.listed.find((l) => keyOf(l) === key) ?? null;
        return pinNg(
          codes
            .map((key) => {
              const la = find(spa, key);
              const lb = find(spb, key);
              const line = (la ?? lb)!;
              return { country: line.country, program: line.program, body: line.body, a: la, b: lb, contested: Boolean(la && lb) };
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

  // The summary above the table (J2-5, fix 35) counts every priced market of
  // the pair, the folded tail included — never the rows on screen alone, so
  // "Show all" changes nothing in it. A record pair has no fold.
  const summary = marketSummary(useSongs ? rows : c ? [...c.rows, ...c.collapsed.flatMap((t) => t.rows)] : []);
  const summaryText = summaryWords(nameA, nameB, summary);
  // The markets on the page priced by nobody (Colombia today), by name: the
  // clause prints only when one is on screen.
  const listedNames = [...new Set(listedOnly(rows).map((r) => countryMeta(r.country).name))];

  // Footnotes describe what is ON SCREEN. In song mode they were being read off
  // the artist comparison, so footnote 1 named six bodies absent from a ten-row
  // table and the dagger had no footnote at all.
  const noteSource = useSongs
    ? {
        // One per country, every issuer named — the engine's own rule.
        notCounted: notCountedNotes([...spa!.listed, ...spb!.listed, ...spa!.byCountry.filter((l) => l.notCounted), ...spb!.byCountry.filter((l) => l.notCounted)]),
        caveats: [...new Set([...spa!.caveats, ...spb!.caveats])],
        vintages: [...new Set([...spa!.vintages, ...spb!.vintages])],
        assumptions: [...new Set([...spa!.assumptions, ...spb!.assumptions])],
        historics: [...new Set([...spa!.historics, ...spb!.historics])],
      }
    : c
      ? { notCounted: c.notCounted, caveats: c.caveats, vintages: c.vintages, assumptions: c.assumptions, historics: c.historics }
      : { notCounted: [], caveats: [], vintages: [], assumptions: [], historics: [] };
  // ...and only the markers that are actually visible earn their footnote. With
  // every not-counted row folded into the tail, footnote 1 was naming six
  // countries under a four-row table that carried no marker anywhere.
  const visibleNotCounted = rows.some((r) => (r.a && !r.a.counted) || (r.b && !r.b.counted) || r.a?.notCounted || r.b?.notCounted);
  const visibleCaveat = rows.some((r) => r.a?.caveat || r.b?.caveat);
  const visibleVintage = rows.some((r) => r.a?.vintage || r.b?.vintage);
  const visibleAssumed = rows.some((r) => r.a?.assumed || r.b?.assumed);
  const visibleHistoric = rows.some((r) => r.a?.historic || r.b?.historic);
  // ...and each footnote prints only the notes of the rows on screen. With
  // Greece the only ¶ body, "a ¶ is visible" meant "the Greek row is visible";
  // once Poland's singles joined ¶ (23 Sep 2026) a visible Polish row printed
  // Greece's note under a table whose Greek row was folded (Burna Boy vs CKay).
  const shown = (k: "caveat" | "assumed" | "historic") =>
    new Set(rows.flatMap((r) => [r.a?.[k], r.b?.[k]]).filter(Boolean) as string[]);
  const shownCaveats = noteSource.caveats.filter((x) => shown("caveat").has(x));
  const shownAssumptions = noteSource.assumptions.filter((x) => shown("assumed").has(x));
  const shownHistorics = noteSource.historics.filter((x) => shown("historic").has(x));
  // The collapse row counts PLAQUES it hides, not rows: a listed-only line is
  // every plaque on it, a priced line hides the unpriced half riding on it. It
  // was counting rows, so it said 3 beneath a header that said 8. Counted per
  // group, because each side's fold is its own row.
  const unpricedIn = (l: CountryLine | null) => (!l ? 0 : !l.counted ? l.releases : l.notCounted?.plaques ?? 0);
  const foldedIn = (rowsIn: ComparisonRow[]) => rowsIn.reduce((m, r) => m + unpricedIn(r.a) + unpricedIn(r.b), 0);
  const foldedNotCounted = c && !showAll ? c.collapsed.reduce((n, t) => n + foldedIn(t.rows), 0) : 0;

  // "1 of 1 plaque counted", not "plaques" (Tiwa Savage's one NZ Gold outside
  // Nigeria, 5 Oct 2026): plural on the denominator.
  const plaquesOf = (x: ArtistUnits) => {
    const n = x.pricedPlaques + x.excludedPlaques;
    return `${n} cert${n === 1 ? "" : "s"}`;
  };
  // The phone's line under each total on a pair view (J2-1, Q8): the counts
  // the slot cards carry, which the phone's change row replaces — "178 of
  // 179 certs · 26 countries", the slot meta's own figures. Each segment is
  // glued, so a line breaks only after the "·". The head's meta, which says
  // the same for assistive tech, stays off-screen; this copy is for the eye.
  const countriesHeld = (x: ArtistUnits) => new Set([...x.byCountry, ...x.listed].map((l) => l.country)).size;
  const headSub = (x: ArtistUnits) => {
    const n = countriesHeld(x);
    return (
      <>
        <span className={styles.nowrap}>{`${x.pricedPlaques} of ${plaquesOf(x)}\u00a0·`}</span>{" "}
        <span className={styles.nowrap}>{`${n} ${n === 1 ? "country" : "countries"}`}</span>
      </>
    );
  };
  const tie = ready && totalA === totalB;
  const leadA = totalA >= totalB;
  // A side is styled behind only when it trails: level totals ("Level — both
  // at least 0") muted B's figure and bar as if A led (debug pass, 5 Oct 2026).
  const behindA = totalA < totalB;
  const behindB = totalB < totalA;
  const max = Math.max(totalA, totalB, 1);
  const diff = Math.abs(totalA - totalB);
  const ratio = Math.min(totalA, totalB) > 0 ? Math.max(totalA, totalB) / Math.min(totalA, totalB) : null;
  // "1,848×", not "1848.0×": a separator like every other figure here, and no
  // decimal once it means nothing (debug pass, 5 Oct 2026). Under 10 the
  // tenth still says something — 1.4× is not 1×.
  const ratioWords = (r: number) => (r >= 10 ? Math.round(r).toLocaleString("en-US") : r.toFixed(1));
  const ngOn = c?.options.includeNigeria ?? soloNg;
  // What the switch returns to when turned back: the pair's own default (with
  // one side filled, that artist's). It used to write ng=0 / feat=0 into every
  // shared URL, and on a default-included pair the round trip left ng=1,
  // hiding the "by default" label and the why-line.
  const ngDefault = a && b && !refused && !record ? nigeriaDefault(a, b, includeFeatures).on : Boolean(soloDefault?.on);
  // The why-line, for a pair and for one side alone: a default that flips
  // Nigeria in is always said on screen.
  const ngWhy = ngParam || refused ? null : c ? (c.nigeria.on ? c.nigeria.reason : null) : soloDefault?.on ? soloDefault.reason : null;
  // "outside Nigeria", not "international": Nigeria is the only home split on
  // /compare, and a non-Nigerian artist's home plaques (Tyla's ten in South
  // Africa) are inside the separated total (debug pass, 3 Oct 2026).
  // "countries checked": the coverage, labelled, so it does not read as the
  // pair's own spread beside a one-row table (Paul, 6 Oct 2026, compareA-02).
  const scope = ngOn ? `${coveredBodies.length} countries checked · Nigeria included` : `${coveredBodies.filter((c) => c !== "NG").length} countries checked · outside Nigeria`;
  const trailing = (n: string) => (n.endsWith("s") ? `${n}'` : `${n}'s`);
  // The page's generic lede: what a certification is worth and what this page
  // adds up. Under the h1 of the tool; on a pair view it opens "How this is
  // counted" at the foot instead (J2-2), where the pair line has its place.
  // Its first sentence alone is a country view's "How this is counted" (J2-8,
  // Q7): the rest speaks of two records or two artists, which a board is not.
  const ledeFloor = (
    <>
      Every certification is a floor — a Platinum single in the UK means <em>at least</em> {fmt(ukPlatinum)}, and could
      be {fmt(ukPlatinum * 2 - 10_000)}.
    </>
  );
  const genericLede = (
    <>
      {ledeFloor} This page adds those floors up for two records or two artists, at each certifying
      body&apos;s own published threshold, under identical rules.
    </>
  );

  // The ONE breadcrumb trail this page emits (the site-wide one stands down
  // for /compare — see OWN_BREADCRUMB): Home › Certifications › Compare, and
  // on a pair page the pair itself as the leaf.
  // Derived from the same path and the same label map the visible bar reads,
  // rather than typed at three levels deep: /compare/in/<country> is four, and
  // the typed version silently dropped "By country" out of the structured
  // trail while the bar above it showed five crumbs.
  const trail: { name: string; item: string }[] = [
    { name: "Home", item: siteUrl },
    { name: "Certifications", item: `${siteUrl}/certifications` },
  ];
  let acc = "";
  for (const seg of path.split("/").filter(Boolean)) {
    acc += `/${seg}`;
    trail.push({ name: SEGMENT_LABELS[seg] ?? seg, item: `${siteUrl}${acc}` });
  }
  if (leaf) trail[trail.length - 1].name = leaf;
  // The phone back bar (J2-12, fixes 48 and 49): the page's own name, and the
  // page above it. A pair in artist mode — its pretty route, or any toggle of
  // it on the query string — is "{A} vs {B}" back to /compare; the index is
  // "By country" back to /compare; a board names its country, back to the
  // index; every other state of the tool is "Compare", back to
  // /certifications, where the trail files it. Labels in title case: the bar
  // uppercases them.
  const backBar =
    countryMode
      ? countryCode
        ? { label: countryMeta(countryCode).name, href: "/compare/in" }
        : { label: SEGMENT_LABELS.in, href: "/compare" }
      : mode === "artists" && a && b && !sameArtist
        ? { label: `${a.name} vs ${b.name}`, href: "/compare" }
        : { label: SEGMENT_LABELS.compare, href: "/certifications" };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: t.item })),
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
        // Both artists, one node each: Burna Boy as the pointer to his node,
        // a board artist with the profiles the board already cites for them.
        about: [a, b].map((x) => {
          const board = boardArtist(x.slug);
          return board ? { name: x.name, sameAs: [board.wikipedia, `https://open.spotify.com/artist/${board.spotifyId}`] } : { name: x.name };
        }),
        // The newer of the two sides' stamps — a register read, or an edit
        // made without one (pageStamp) — the day the comparison last changed;
        // the sitemap stamps the pair with the same helper. verifiedOn alone
        // left 48 Tems, Olamide and CKay pairs a day or more behind their
        // sitemap rows (debug pass 5 Oct 2026).
        dateModified: [pageStamp(a), pageStamp(b)].sort().at(-1)!,
      })
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {dataset && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />}
      {/* The toggles below are links, and on a pair page or a board they
          leave the route: this hands focus back to the one that was used. */}
      <KeepFocus />
      <CompareBackBar {...backBar} />
      {/* Desktop only: below 900px the back bar above stands in for it. */}
      <div className={styles.crumbs}>
        <BreadcrumbBar path={path} leaf={leaf} parents={[{ label: "Certifications", href: "/certifications" }]} />
      </div>
      <main id="content" className={styles.wrap}>
        {/* A pair page (/compare/<a>-vs-<b>) is its own page for search, so its
            <h1> names the pair; the shared title every one of the 120 carried
            moves up to be its kicker. /compare itself is unchanged. */}
        <p className={styles.kicker}>{pairTitle ? "Certified units, compared" : "Certifications › Compare"}</p>
        <h1 className={styles.h1}>
          {pairTitle ?? (countryBoard ? `Certified units in ${countryBoard.inSentence}` : countryMode ? "Certified units by country" : "Certified units, compared")}
        </h1>
        {/* A pair view's one derived line in the lede's place (J2-3, fix 45):
            every certification each side holds under the switches on screen
            — priced and not comparable — and the two totals the head prints. */}
        {pairView && c && (
          <p className={styles.pairLine}>
            {pairLine({
              nameA: a!.name,
              nameB: b!.name,
              plaquesA: c.a.pricedPlaques + c.a.excludedPlaques,
              plaquesB: c.b.pricedPlaques + c.b.excludedPlaques,
              totalA: c.a.total,
              totalB: c.b.total,
            })}
          </p>
        )}
        {/* One tree, two orders (J2-1). Above 900 the wrapper is not a box
            (display: contents) and the page reads in DOM order, as it always
            has (fix 47). On a phone pair view it is a column that orders its
            parts: both totals, the verdict and the coverage line, then the
            switches, the Nigeria strip and the change row; the segment, the
            slots and the by-default line give way to the change row and the
            strip. Only the head and the verdict move, and neither holds a
            control, so focus still follows what the eye reads. */}
        <div className={`${styles.flow} ${pairView ? styles.flowPair : ""}`}>
        {!pairView && (
        <p className={styles.lede}>
          {countryBoard ? (
            countryBoard.counted ? (
              <>
                Every certification the {numberWord(comparableArtists.length).toLowerCase()} artists hold in {countryBoard.inSentence}, priced at{" "}
                {pricingPhrase(countryBoard, "own published threshold")} and ranked. Each figure is a floor — a certification
                says <em>at least</em>, never what a record sold.
              </>
            ) : (
              // A body that publishes no threshold cannot have "its own
              // published threshold" quoted back at it, which is what the
              // one-size lede was doing on Colombia.
              <>
                Every certification the {numberWord(comparableArtists.length).toLowerCase()} artists hold in {countryBoard.inSentence}. {countryBoard.body} publishes
                no unit threshold, so these certifications are listed here and never summed — each is real, the
                scale is not published.
              </>
            )
          ) : countryMode ? (
            // Fix 53: who leads where. No own-body promise — Turkey has no
            // certifying body and Colombia no threshold, so neither is "a
            // published register" or summed. Both numbers are derived: the
            // markets the table below lists, from its own call, and the
            // roster. "Certifications", the site's noun (Copy 2, B-10), where
            // the fix wrote "plaques".
            <>
              Who leads where — the {countryBoards({ includeNigeria: true, includeFeatures }).length} countries where the
              board&apos;s {numberWord(comparableArtists.length).toLowerCase()} artists hold a certification, the artist on top in
              each, and the certified units its priced certifications add up to.
            </>
          ) : (
            genericLede
          )}
        </p>
        )}

        <nav className={styles.seg} aria-label="Comparison mode">
          {/* The selected segment is not a link: a self-link that also dropped
              `all` collapsed the table when you clicked the mode you were in.
              The hrefs are modeLinks', which the phone's mode menu reads. */}
          {modeLinks(sp, includeFeatures).map((m) =>
            mode === m.key ? (
              <span key={m.key} className={`${styles.segItem} ${styles.segOn}`} aria-current="page">
                <span className={styles.segLong}>{m.long}</span>
                <span className={styles.segShort} aria-hidden="true">{m.short}</span>
              </span>
            ) : (
              <Link key={m.key} href={m.href} className={styles.segItem}>
                <span className={styles.segLong}>{m.long}</span>
                <span className={styles.segShort} aria-hidden="true">{m.short}</span>
              </Link>
            ),
          )}
        </nav>

        {/* The two slots are the pairwise modes' control. Country mode has one
            subject, not two, and carries its own picker below. */}
        {!countryMode && (
          <div className={styles.slots}>
            <Slot artist={a} release={songA} priced={c?.a ?? soloPriced ?? null} sp={sp} side="a" mode={mode} refused={sameArtist} />
            <span className={styles.vs}>vs</span>
            <Slot artist={b} release={songB} priced={c?.b ?? (sameArtist || !a ? soloPriced : null) ?? null} sp={sp} side="b" mode={mode} refused={sameArtist} />
          </div>
        )}

        {record && a && !songA && (
          <SongPicker artist={a} side="a" sp={sp} query={one(sp.qa) ?? ""} mode={mode} landing={songB ? "result" : b ? "pick-b" : "slot-b"} />
        )}
        {record && b && !songB && (
          <SongPicker artist={b} side="b" sp={sp} query={one(sp.qb) ?? ""} mode={mode} landing={songA ? "result" : a ? "pick-a" : "slot-a"} />
        )}

        {/* Refusals come first: on a phone they were explaining themselves
            below the fold, under controls that had nothing to switch. They
            are the neutral note, not the gold why-line: a refusal is neither
            live nor an action. */}
        {sameArtist && !countryMode && (
          <p className={`${styles.why} ${styles.whyRefusal}`}>
            <span className={styles.whyText}>
              <strong>That is {a!.name} on both sides.</strong> Pick a different artist for one of them.
            </span>
          </p>
        )}
        {sameRecording && (
          <p className={`${styles.why} ${styles.whyRefusal}`}>
            <span className={styles.whyText}>
              <strong>That is the same recording on both sides.</strong> “{songA!.title}” is one record with
              one set of certifications; pick a different {noun(mode)} for one of them.
            </span>
          </p>
        )}

        {(!refused || countryMode) && (
        <div className={styles.controls}>
          {/* Country mode honours the features switch — a plaque the artist
              holds is a plaque — and has no Nigeria switch: there Nigeria is
              the subject of the page rather than a term in a sum. */}
          {(mode === "artists" || countryMode) && (
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
                data-keep-focus="feat"
                className={`${styles.switch} ${includeFeatures ? styles.switchOn : ""}`}
              >
                <span className={`${styles.dot} ${includeFeatures ? styles.dotOn : ""}`} />
                <span className="visuallyHidden">Featured appearances: </span>
                {includeFeatures ? "on · every cert held" : "off · lead credits only"}
              </Link>
            </span>
          )}
          {!countryMode && (
            <span className={styles.control}>
              <span className={styles.controlName}>Nigeria</span>
              <Link href={href(sp, { ng: ngOn ? (ngDefault ? "0" : null) : ngDefault ? null : "1" })} scroll={false} data-keep-focus="ng" className={`${styles.switch} ${ngOn ? styles.switchOn : ""}`}>
                <span className={`${styles.dot} ${ngOn ? styles.dotOn : ""}`} />
                <span className="visuallyHidden">Nigeria: </span>
                {ngOn ? (ngParam ? "included" : "included · by default") : "separated"}
              </Link>
            </span>
          )}
          {/* A pair view and a country view say how they count once, at
              their foot (J2-2, J2-8). */}
          {!pairView && !countryMode && (
            <Link href="/methodology#certified-units" className={`${styles.howLink} ${styles.howLinkTop}`}>How this is counted <span aria-hidden="true">↗</span></Link>
          )}
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
            {/* The other way into the same corpus, and the crawl path to the
                27 country boards. */}
            <p className={styles.featuredAside}>
              Or pick a market — <Link href="/compare/in" className={`${styles.noteLink} proseLink`}>certified units country by country ↗</Link>
            </p>
          </section>
        )}

        {ngWhy && (
          <p className={`${styles.why} ${styles.whyDefault}`}>
            <span className={styles.whyMark} aria-hidden="true">i</span>
            <span className={styles.whyText}>
              <strong>Nigeria included by default</strong> — {ngWhy.replace(/^Nigeria included: /, "")}
            </span>
          </p>
        )}

        {(ready || partial) && (
          <>
            <div className={`${styles.head} ${ready ? "" : styles.headSolo}`} id="result">
              <div className={styles.headCell}>
                <p className={styles.headName}><span className={styles.headNameName}>{nameA || a?.name}{"\u00a0"}</span><span className={styles.headNameQual}>{"·\u00a0at least"}</span></p>
                <p className={`${styles.figure} ${behindA ? styles.figureBehind : styles.figureLead}`}>{fmt(totalA)}</p>
                <p className={styles.headMeta}>
                  certified units · {ngOn ? "Nigeria included" : "outside Nigeria"}
                  {sideA ? ` · ${sideA.pricedPlaques} of ${plaquesOf(sideA)} counted` : ""}
                  {sideA?.excludedPlaques ? ` · ${sideA.excludedPlaques} not comparable` : ""}
                </p>
                <div className={styles.bar}>
                  <div className={`${styles.barFill} ${behindA ? styles.barFillBehind : ""}`} style={{ width: `${(totalA / max) * 100}%` }} />
                </div>
                {pairView && sideA && <p className={styles.headSub} aria-hidden="true">{headSub(sideA)}</p>}
              </div>
              {ready && (
                <div className={styles.headCell}>
                  <p className={styles.headName}><span className={styles.headNameName}>{nameB}{"\u00a0"}</span><span className={styles.headNameQual}>{"·\u00a0at least"}</span></p>
                  <p className={`${styles.figure} ${behindB ? styles.figureBehind : styles.figureLead}`}>{fmt(totalB)}</p>
                  <p className={styles.headMeta}>
                    certified units · {ngOn ? "Nigeria included" : "outside Nigeria"}
                    {sideB ? ` · ${sideB.pricedPlaques} of ${plaquesOf(sideB)} counted` : ""}
                    {sideB?.excludedPlaques ? ` · ${sideB.excludedPlaques} not comparable` : ""}
                  </p>
                  <div className={styles.bar}>
                    <div className={`${styles.barFill} ${behindB ? styles.barFillBehind : ""}`} style={{ width: `${(totalB / max) * 100}%` }} />
                  </div>
                  {pairView && sideB && <p className={styles.headSub} aria-hidden="true">{headSub(sideB)}</p>}
                </div>
              )}
            </div>

            <div className={`${styles.diffRow} ${ready ? "" : styles.diffRowSolo}`}>
              {ready && tie ? (
                <p className={styles.diff}>
                  {/* The zero case says nothing more here: the note under the
                      Nigeria strip names both artists and the action, and the
                      page said it twice (debug pass, 5 Oct 2026). */}
                  <strong>Level</strong> — both {"at\u00a0least\u00a0"}{fmt(totalA)} certified units.
                </p>
              ) : ready ? (
                <p className={styles.diff}>
                  <strong>{leadA ? nameA : nameB}</strong> leads by {"at\u00a0least\u00a0"}{fmt(diff)} certified units
                  {ratio && ratio >= 1.05
                    ? `\u00a0— a floor ${ratioWords(ratio)}× the size of ${trailing(leadA ? nameB : nameA)}`
                    : ""}.
                </p>
              ) : (
                <p className={styles.diff}>
                  {record
                    ? `Pick ${mode === "albums" ? "an album" : "a song"} on each side — the country-by-country table appears once both are chosen.`
                    : includeFeatures
                      ? "The country-by-country table appears when both sides are filled. Every certification the artist holds counts, featured appearances included."
                      : "The country-by-country table appears when both sides are filled. Featured appearances are off — lead credits only."}
                </p>
              )}
              <span className={styles.scope}>
                {scope}
                {ready && a && b && !record
                  ? a.registersReadOn === b.registersReadOn
                    ? ` · both registers read ${longDate(a.registersReadOn)}`
                    : ` · registers read ${longDate(a.registersReadOn)} (${a.name}) and ${longDate(b.registersReadOn)} (${b.name})`
                  : ""}
              </span>
            </div>
          </>
        )}

        {/* Only when a side on screen holds a Nigerian plaque. Two records
            without one ("Dai Dai" and "One Dance", 85 of the 831 on the board)
            printed "Dai Dai — 0 plaques · at least 0 / One Dance — 0 plaques ·
            at least 0" over an "Include Nigeria" that changed nothing but the
            labels: same figures, same 23 rows (debug pass, 6 Oct 2026). Every
            artist holds some, so artist totals keep the strip. */}
        {c && ready && (sideA?.nigeria.plaques ?? 0) + (sideB?.nigeria.plaques ?? 0) > 0 && (
          <section className={styles.ngStrip} aria-label="Nigeria">
            <h2 className={styles.ngHead}><span aria-hidden="true">🇳🇬</span> Nigeria — {ngOn ? "included" : "separated"}.</h2>
            {/* The phone's word for a default that flips Nigeria in (fix 36):
                the reason, in the strip, where the desktop says it in the
                why-line above the totals. */}
            {ngWhy && (
              <p className={`${styles.ngText} ${styles.ngDefault}`}>
                Nigeria included by default — {ngWhy.replace(/^Nigeria included: /, "")}
              </p>
            )}
            {/* The TCSN sentence shows on the phone too, in every state (fix
                36, which reverses the 23 Sep 2026 ruling that kept the whole
                paragraph desktop-only); its second sentence stays a desktop
                thing. */}
            <p className={`${styles.ngText} ${styles.ngWhy}`}>
              <span>
                TCSN&apos;s register is request-based, so a title missing from it proves nothing about what it
                sold — only that nobody applied.
              </span>{" "}
              <span className={styles.ngWhyMore}>
                A gap between two artists there can measure paperwork rather than sales, which is why it is counted
                on its own line.
              </span>
            </p>
            {/* "at least N" is one unit and the "·" ends the segment before it,
                so a phone breaks after the dot, never between "at" and "least"
                and never with a line that opens on "·" — the slot meta's rule
                (debug pass, 7 Oct 2026). */}
            <div className={styles.ngFigures}>
              <span>{nameA} — {sideA?.nigeria.plaques ?? 0} cert{(sideA?.nigeria.plaques ?? 0) === 1 ? "" : "s"}{"\u00a0·"} {"at\u00a0least\u00a0"}{fmt(sideA?.nigeria.units ?? 0)}</span>
              <span>{nameB} — {sideB?.nigeria.plaques ?? 0} cert{(sideB?.nigeria.plaques ?? 0) === 1 ? "" : "s"}{"\u00a0·"} {"at\u00a0least\u00a0"}{fmt(sideB?.nigeria.units ?? 0)}</span>
            </div>
            <Link href={href(sp, { ng: ngOn ? (ngDefault ? "0" : null) : ngDefault ? null : "1" })} scroll={false} data-keep-focus="ng-strip" className={styles.ngAction}>
              {ngOn ? "Separate Nigeria" : "Include Nigeria"}
            </Link>
          </section>
        )}

        {/* The phone's compact controls, after the strip so focus reaches
            them where the eye does: both changes, then the mode menu. */}
        {pairView && c && (
          <ChangeRow
            sides={[
              { name: a!.name, href: clearHref(sp, "a", false, false) },
              { name: b!.name, href: clearHref(sp, "b", false, false) },
            ]}
            items={modeLinks(sp, includeFeatures)}
            mode={mode}
          />
        )}
        </div>

        {countryMode && <CountryBoardView sp={sp} code={countryCode} includeFeatures={includeFeatures} />}

        {ready && rows.length === 0 && (
          <p className={styles.why}>
            <span className={styles.whyMark} aria-hidden="true">i</span>
            <span className={styles.whyText}>
              Neither {nameA} nor {nameB} holds a certification {ngOn ? "anywhere on the board" : "outside Nigeria"}
              {!ngOn ? " — include Nigeria to compare them" : ""}.
            </span>
          </p>
        )}

        {ready && rows.length > 0 && (
          <>
            {/* The answer before the rows (J2-5, fix 35), and what the pill
                and the bars mean, said once: the desktop's one line, the
                phone's two sentences (the frames' own words). One shows per
                layout, so assistive tech reads one. A record pair's pill is
                its one certification there, not a top one. */}
            <div className={styles.summaryRow}>
              <p className={styles.summary}>
                {summary.priced > 0 && (
                  <>
                    <strong>{summaryText.lead}</strong>
                    {summaryText.rest}
                  </>
                )}
                {listedNames.length > 0 && (
                  <>
                    {summary.priced > 0 ? ". " : ""}
                    {joinListed(listedNames)} {listedNames.length === 1 ? "is" : "are"} listed, not priced{"\u00a0"}<span className={styles.mark}>¹</span>
                  </>
                )}
                .
              </p>
              <p className={styles.legend}>
                <span className={styles.legendLong}>
                  Pill = the {useSongs ? "" : "top "}certification there · bar = units, scaled to the row&apos;s larger figure ·{" "}
                  <strong>solid leads</strong>, outlined trails
                </span>
                <span className={styles.legendShort}>
                  The pill is the {useSongs ? "" : "top "}certification in that market. Each bar is that side&apos;s units, scaled
                  to the row&apos;s larger figure: <strong>solid leads</strong>, outlined trails.
                </span>
              </p>
            </div>
            <h2 className="visuallyHidden" id="country-table">Country by country</h2>
            <div className={styles.tableWrap}>
              {/* Explicit roles: under 900px the table is displayed as a grid,
                  and WebKit can drop table semantics from a <table> whose
                  display is not table-*. No-ops where the heuristics hold. */}
              <table className={styles.table} role="table">
                <thead role="rowgroup">
                  <tr role="row">
                    {/* "Country · {distinct countries}" (fix 55a): the US and its
                        RIAA Latin line are two rows and one country. The sides'
                        heads stand over their figures, mirrored. */}
                    <th scope="col" role="columnheader">Country<span className={styles.thSep}> · </span><span className={styles.thCount}>{new Set(rows.map((r) => r.country)).size}</span></th>
                    <th scope="col" role="columnheader" className={`${styles.thNum} ${styles.bfThA}`}>{nameA}</th>
                    <th scope="col" role="columnheader" className={styles.bfThB}>{nameB}</th>
                  </tr>
                </thead>
                <tbody role="rowgroup">
                  {rows.map((r) => {
                    const m = countryMeta(r.country);
                    // The country's own board, when it has one: the rows named
                    // 23 markets and linked none of them (CC-09, 8 Oct 2026).
                    const board = boardCodes.has(r.country) ? `/compare/in/${countrySlug(r.country)}` : null;
                    return (
                      <tr key={marketKey(r.country, r.program)} role="row" className={r.country === "NG" && ngOn ? styles.ngRow : undefined}>
                        <td role="cell" className={styles.bfCountry}>
                          {/* The underlined name is the link (fix 51): on desktop
                              the name alone; on a phone its ::after spans the
                              whole row, with a muted → at the row's end. The
                              flag and the code sit beside it, outside it. */}
                          <span className={styles.country}>
                            <span className={styles.flag} aria-hidden="true">{m.flag}</span>
                            {board ? (
                              <Link href={board} className={styles.countryLink}>
                                <span className={styles.countryName}>{m.name}</span>
                              </Link>
                            ) : (
                              <span className={styles.countryName}>{m.name}</span>
                            )}
                            {/* A programme row is the programme's, so the code
                                column says which one: two US rows that both
                                read "US" would look like a duplicate. */}
                            <span className={styles.countryCode}>{r.program ? programShort(r.program, r.country) : r.country}</span>
                            {board && <span className={styles.rowGo} aria-hidden="true">→</span>}
                          </span>
                        </td>
                        <td role="cell" className={styles.bfCell}><Side side="a" line={r.a} other={r.b} artistMode={!useSongs} /></td>
                        <td role="cell" className={styles.bfCell}><Side side="b" line={r.b} other={r.a} artistMode={!useSongs} /></td>
                      </tr>
                    );
                  })}
                  {!useSongs && showAll && c && c.collapsed.length > 0 && (
                    <tr role="row" className={styles.collapseRow}>
                      <td role="cell" colSpan={3}>
                        {/* Not scroll={false}: collapsing the table above the reader
                            clamped the page to its new bottom with this link under the
                            header. The fragment lands them at the top of the folded table. */}
                        <Link href={`${href(sp, { all: null })}#country-table`} data-keep-focus="all" className={styles.showAll}>Show fewer</Link>
                      </td>
                    </tr>
                  )}
                  {!useSongs && !showAll && c?.collapsed.map((t) => (
                    <tr key={t.side} role="row" className={styles.collapseRow}>
                      <td role="cell" colSpan={3}>
                        <span className={styles.collapseText}>
                          {/* Each "·" is bound to the word before it, so it ends a line
                              and never opens one (803a803e): a phone pair page broke
                              "…is certified" / "·at least 89,095" (design review CC-15). */}
                          + {t.countries} further {t.countries === 1 ? "country" : "countries"} where only {t.artist} is certified{"\u00a0"}·{" "}
                          <span className={styles.collapseUnits}>at least{"\u00a0"}{fmt(t.units)}</span>
                          {foldedIn(t.rows) > 0 ? <>{"\u00a0"}· {foldedIn(t.rows)} certification{foldedIn(t.rows) === 1 ? "" : "s"} not counted{"\u00a0"}<span className={styles.mark}>¹</span></> : null}
                          {/* "· Show all", in-page, no glyph (fix 46): the dot is
                              bound to the figure before it, as above. */}
                          {"\u00a0"}·{" "}
                        </span>
                        {/* scroll={false}: this sits at the foot of the table, and the
                            default navigation put the reader back at the top of
                            the page (scrollY 1600 → 43), losing the rows they
                            had just asked for. */}
                        <Link href={href(sp, { all: "1" })} scroll={false} data-keep-focus="all" className={styles.showAll}>Show all</Link>
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
                  {noteSource.notCounted.map((n) => `${countryMeta(n.country).name} (${n.issuer ?? countryMeta(n.country).body})`).join(" · ")}.
                  Listed, never summed: these bodies publish no threshold this page can put on the same scale
                  as the rest.
                </p>
              )}
              {visibleCaveat && shownCaveats.length > 0 && (
                <p><strong><span className={styles.mark}>†</span> {PLAQUE_NOTE_HEADINGS.caveat}</strong> — {caveatParagraph(shownCaveats)}</p>
              )}
              {visibleVintage && noteSource.vintages.length > 0 && (
                <p>
                  <strong><span className={styles.mark}>‡</span> {PLAQUE_NOTE_HEADINGS.vintage}</strong> — the figure is today&apos;s level, and a
                  certification awarded before the rise may have cleared a lower bar.{" "}
                  {/* The body-by-body record lives on the methodology page (Paul, 11
                      Sep): twelve of them here were a 40-line wall on a phone. */}
                  <Link href="/methodology#threshold-history" className={`${styles.noteLink} proseLink`}>
                    Which bodies, and when ↗
                  </Link>
                </p>
              )}
              {visibleAssumed && shownAssumptions.length > 0 && (
                <p>
                  {/* Each body's own note already gives the ratio and where it
                      comes from; a generic lead before them said it a third
                      time (debug pass, 5 Oct 2026). */}
                  <strong><span className={styles.mark}>§</span> {PLAQUE_NOTE_HEADINGS.assumed}</strong> — {shownAssumptions.join(" ")}
                </p>
              )}
              {visibleHistoric && shownHistorics.length > 0 && (
                <p>
                  <strong><span className={styles.mark}>¶</span> {PLAQUE_NOTE_HEADINGS.historic}</strong> — the line rests on a
                  figure the body published once and no longer prints, so the bar a certification cleared may differ
                  from it. {shownHistorics.join(" ")}
                </p>
              )}
            </div>
          </>
        )}

        {/* A pair view's foot says how it counts in one paragraph and one
            link, once (J2-2): the generic lede, which left the head for the
            pair line, and "The full method ↗" to /methodology's own section
            (fix 11). A country view's says it the same way, with the lede's
            first sentence (J2-8). The three-card method block stays on the
            tool and its record modes, and on /methodology. */}
        {pairView || countryMode ? (
          <section className={styles.how} aria-labelledby="how-counted">
            <div className={styles.howText}>
              <h2 id="how-counted" className={styles.howHead}>How this is counted</h2>
              <p className={styles.howBody}>{pairView ? genericLede : ledeFloor}</p>
            </div>
            <Link href="/methodology#certified-units" className={styles.howFull}>
              The full method <span aria-hidden="true">↗</span>
            </Link>
          </section>
        ) : (
        <>
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
              Streams-based bodies — {streamRatioBodies} — are converted with the
              body&apos;s own published download-equivalence, never an estimate.
            </p>
          </div>
          <div>
            <p className={styles.methodTitle}>Not quite everything can be priced</p>
            <p className={styles.methodBody}>
              {joinNames(assumedNames)} publish their song levels in streams and no download-equivalence — those
              certifications are converted at {assumedRatio} streams to a unit, the ratio Denmark and Norway publish, and marked §.
              {revenueNames.length > 0 && (
                <>{" "}{joinNames(revenueNames)} {revenueNames.length === 1 ? "measures" : "measure"} singles in revenue and</>
              )}
              {" "}{joinNames(noThresholdNames)} {noThresholdNames.length === 1 ? "publishes" : "publish"} no thresholds.
              {/* The ¶ clause sits BEFORE "never hidden": tests/comparePage.test.tsx
                  slices the card there. Greece, from 20 Sep 2026. */}
              {historicNames.length > 0 && (
                <>
                  {" "}{joinNames(historicNames)} {historicNames.length === 1 ? "is" : "are"} priced at IFPI&apos;s June 2013
                  level — the last the umbrella body ever published for {historicNames.length === 1 ? "it" : "them"} — and
                  marked ¶.
                </>
              )}
              {/* Poland, from 23 Sep 2026: its level is today's, its rate is not. */}
              {plnBodies.length > 0 && (
                <>
                  {" "}{joinNames(plnBodies.map((t) => nameOf(t.code)))} {plnBodies.length === 1 ? "sets its" : "set their"} single
                  levels in złoty of revenue and {plnBodies.length === 1 ? "states" : "state"} no rate; they are converted at{" "}
                  {plnBodies[0].plnPerSingle} zł a single, the rate {plnBodies.length === 1 ? "its" : "their"} own single tables used
                  until the end of 2024, and marked ¶.
                </>
              )}
              {/* Turkey, from 7 Oct 2026: no certifying body, a label's own level. */}
              {labelNames.length > 0 && (
                <>
                  {" "}{joinNames(labelNames)} {labelNames.length === 1 ? "has" : "have"} no certifying body: {labelNames.length === 1 ? "its" : "their"}{" "}
                  certifications are issued by labels, priced at the one level a label there has published.
                </>
              )}
              {" "}The unpriced certifications are listed, never summed, and never hidden.
            </p>
          </div>
        </div>

        {/* The design's phone frame ends on this row; the controls-row copy
            above hides under 900px. */}
        {!refused && (
          <Link href="/methodology#certified-units" className={`${styles.howLink} ${styles.howLinkFoot}`}>
            How this is counted <span aria-hidden="true">↗</span>
          </Link>
        )}
        </>
        )}

        {/* More pairs with each side, above Next (J2-7, fixes 51 and 55f):
            the first six of that artist's own compare-with list, in picker
            order, without the pair on screen — each a static pair page, so
            no new query link — then "All {n} pairs ↗" to the artist's page,
            which carries the whole list (n = the roster less one). Nothing
            folds. */}
        {pairView &&
          [a!, b!].map((x) => {
            const other = x.slug === a!.slug ? b! : a!;
            const all = compareWithLinks(x.slug);
            return (
              <nav key={x.slug} aria-label={`More pairs with ${x.name}`} className={styles.moreWith}>
                <h2 className={styles.moreWithHead}>More with {x.name}</h2>
                <ul className={styles.moreChips}>
                  {all
                    .filter((l) => l.slug !== other.slug)
                    .slice(0, 6)
                    .map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className={styles.chip}>vs {l.name}</Link>
                      </li>
                    ))}
                </ul>
                <Link href={x.href} className={styles.allPairs}>
                  All {all.length} pairs <span aria-hidden="true">↗</span>
                </Link>
              </nav>
            );
          })}

        {/* No "Keep exploring" here (Paul, 11 Sep): the Afrobeats Board action
            is the one way onward this page offers. It shows at every width:
            the phone's fixed board bar is gone from the compare family (J2-13),
            and this strip's button is the screen's one gold fill. The lead
            stays the live, derived sentence (fix 55e). */}
        {ready && (
          <section className={styles.exit} aria-label="Next">
            <h2 className={styles.exitKicker}>Next</h2>
            <p className={styles.exitLead}>
              Two artists priced against each other — the other {numberWord(comparableArtists.length - 2).toLowerCase()} are one tap
              away, each with a ledger you can bring back here.
            </p>
            <Link href="/afrobeats" className="btn btnPrimary">The Afrobeats Board <span aria-hidden="true">↗</span></Link>
          </section>
        )}
      </main>
    </>
  );
}
