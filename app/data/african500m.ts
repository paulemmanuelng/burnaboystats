import rosterJson from "./african500m.artists.json";
import snapshotJson from "./african500m.snapshot.json";
import { afrobeatsArtists } from "./afrobeats";
import { cardinalWord } from "../lib/plural";

/**
 * "Most 500M-stream songs on Spotify" — African artists ranked by how many
 * Spotify songs they are credited on that have passed 500 million plays.
 *
 * Paul, 7 Oct 2026: "build a leaderboard for the 500m, tie others, put flags".
 * The board lives on /records/africas-biggest (data/africasBiggest.ts builds its
 * rows from this file), and nothing in it is typed:
 *
 *  - african500m.artists.json is WHO is read: each artist's Spotify id,
 *    nationality and flag, and the lead/featured filing of their big songs.
 *  - african500m.snapshot.json is WHAT kworb shows: every song of theirs at or
 *    past the roster's watch floor, with the date each kworb page is stamped.
 *    scripts/build-african-500m.mjs rewrites it on every Stats live run
 *    (.github/workflows/stats-live.yml), so a song crossing 500M — "Dai Dai",
 *    499.4M on kworb's 6 Oct 2026 page — joins the board with no hand edit.
 *  - This file counts, ranks and words it.
 *
 * Ties share a rank and the next rank skips (1, 1, 3), the competition ranking
 * every other board on the page uses (rankOf in africasBiggest.ts, and the Hot
 * 100 boards in hot100Weeks.ts). Inside a tie, the artist whose qualifying songs
 * add up to more streams is listed first, then by name.
 *
 * NATIONALITY (Paul, 17 Sep 2026: by nationality and where the career sits, not
 * birthplace or parentage). The calls follow the ones this page's Hot 100
 * boards already publish (hot100Weeks.ts; tests/african500m.test.tsx holds the
 * two lists together): Moliy and Amaarae count as Ghanaian and Libianca as
 * Cameroonian, as hot100Artists has them, though each also has an American
 * side (Moliy, born and raised in Accra, and Amaarae, born in the Bronx with
 * her career built in Accra — the closer call — are called Ghanaian-American
 * on Wikipedia; Libianca, born in Minneapolis and raised in Bamenda, holds
 * both citizenships). Removing one is deleting their roster entry. Left out,
 * each with a song past 500M (counts as kworb read them, 6 Oct 2026):
 *   - French Montana (1, "Unforgettable"): born in Rabat, raised in Morocco to
 *     13, US citizen since 2018, US career. American on hot100NotCounted; the
 *     closest call, so the board's source names him.
 *   - Troye Sivan (7): born in Johannesburg, Australian (hot100NotCounted).
 *   - Sade (2): British band; Sade Adu was born in Ibadan (hot100NotCounted).
 *   - Queen (13): British band; Freddie Mercury was born in Zanzibar.
 *   - Kenya Grace (1, "Strangers"): born in South Africa, British.
 *   - Daecolm (1, on "I Adore You"): born in Zimbabwe, raised in London.
 *   - Fuse ODG (1, Major Lazer's "Light It Up" remix): born in London, raised
 *     in Ghana until about 11, British career.
 *   The last four are not on that list; they are left out by the same rule.
 * Akon (American), GIMS and Aya Nakamura (French) are out by Paul's ruling, and
 * acts with African parents but another nationality (The Weeknd, Doja Cat,
 * Dave, RAYE, Stromae…) are out by the same rule. The roster's `excluded` list
 * holds the contested names, and tests/african500m.test.tsx keeps them off.
 */

export type Role500 = "lead" | "featured";

export interface Roster500Artist {
  name: string;
  spotifyId: string;
  /** ISO 3166 alpha-2. The flag is the same two letters as regional indicators. */
  country: string;
  nationality: string;
  flag: string;
  /** Read off this kworb page instead of the artist's own (none exists). */
  page?: string;
  tracks?: string[];
  /** kworb title → filing by ChartMasters' rule. (`undefined` because a JSON
   *  import types every other artist's titles as absent keys.) */
  roles?: Record<string, string | undefined>;
  note?: string;
}

export interface Kworb500Song {
  id: string;
  title: string;
  streams: number;
  /** kworb's "*": the page's artist is not billed first on the track. */
  kworbStar: boolean;
}

export interface Kworb500Reading {
  page?: string;
  /** The kworb page's own "Last updated" stamp, ISO. */
  updated: string;
  songs: Kworb500Song[];
}

export interface Roster500 {
  threshold: number;
  watchFloor: number;
  artists: Roster500Artist[];
  excluded: { name: string; spotifyId: string; reason: string }[];
}

export interface Snapshot500 {
  pages: Record<string, Kworb500Reading>;
}

export const roster500: Roster500 = rosterJson;
export const snapshot500: Snapshot500 = snapshotJson;

/** 500,000,000 — the roster's, so the board, its note and the bot share one line. */
export const THRESHOLD_500M = roster500.threshold;

export interface Song500 {
  id: string;
  title: string;
  streams: number;
  role: Role500;
  /** "filed": the roster files it (ChartMasters' rule). "kworb": kworb's mark. */
  roleFrom: "filed" | "kworb";
}

export interface Standing500 {
  name: string;
  spotifyId: string;
  country: string;
  flag: string;
  /** /afrobeats/<slug> when the artist has a page on the Afrobeats Board. */
  href?: string;
  /** The date stamped on the kworb page this artist was read from. */
  updated: string;
  /** Read off another artist's page (Freshlyground off Shakira's). */
  page?: string;
  songs: Song500[];
  count: number;
  /** The qualifying songs' streams added up — orders a tie, nothing else. */
  total: number;
  /** Competition rank: 1 + the number of artists with more songs. */
  rank: number;
}

const roleOf = (artist: Roster500Artist, song: Kworb500Song): Pick<Song500, "role" | "roleFrom"> => {
  const filed = artist.roles?.[song.title];
  if (filed === "lead" || filed === "featured") return { role: filed, roleFrom: "filed" };
  // kworb's "*" belongs to the page's own artist. Read off someone else's page,
  // the artist is never the one billed first there, so the song is a feature.
  if (artist.page) return { role: "featured", roleFrom: "kworb" };
  return { role: song.kworbStar ? "featured" : "lead", roleFrom: "kworb" };
};

/** Every artist with at least one song past the threshold, ranked. Pure, so the
 *  tests can run it on a reading the board has not seen yet. */
export function rank500(
  roster: Roster500,
  snapshot: Snapshot500,
  slugOf: (name: string) => string | undefined = () => undefined,
): Standing500[] {
  const rows = roster.artists
    .map((a) => {
      const reading = snapshot.pages[a.spotifyId];
      const songs: Song500[] = (reading?.songs ?? [])
        .filter((s) => s.streams >= roster.threshold)
        .map((s) => ({ id: s.id, title: s.title, streams: s.streams, ...roleOf(a, s) }))
        .sort((x, y) => y.streams - x.streams);
      const slug = slugOf(a.name);
      return {
        name: a.name,
        spotifyId: a.spotifyId,
        country: a.country,
        flag: a.flag,
        ...(slug ? { href: `/afrobeats/${slug}` } : {}),
        updated: reading?.updated ?? "",
        ...(reading?.page ? { page: reading.page } : {}),
        songs,
        count: songs.length,
        total: songs.reduce((n, s) => n + s.streams, 0),
        rank: 0,
      };
    })
    .filter((r) => r.count > 0)
    .sort((x, y) => y.count - x.count || y.total - x.total || x.name.localeCompare(y.name));
  return rows.map((r) => ({ ...r, rank: 1 + rows.filter((o) => o.count > r.count).length }));
}

const boardSlug = (name: string) => afrobeatsArtists.find((a) => a.name === name)?.slug;

export const standings500 = rank500(roster500, snapshot500, boardSlug);

// ── Words ──────────────────────────────────────────────────────────────────

const longDate = (iso: string, withYear = true) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    ...(withYear ? { year: "numeric" as const } : {}),
    timeZone: "UTC",
  });
const andList = (xs: string[]) =>
  xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
const possessive = (name: string) => (name.endsWith("s") ? `${name}'` : `${name}'s`);
const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** The newest kworb stamp among the pages a board counts from: the board's
 *  "as of". Pure, like rank500, so the tests can run it on any reading. */
export const asOf500 = (rows: Standing500[]): string => rows.reduce((d, r) => (r.updated > d ? r.updated : d), "");

export const AS_OF_500M = asOf500(standings500);
export const AS_OF_500M_LONG = AS_OF_500M ? longDate(AS_OF_500M) : "";

/** "1.97B" / "758M" — a qualifying song's count, at the precision a row needs. */
export const streams500 = (n: number): string =>
  n >= 1e9 ? `${(n / 1e9).toFixed(2)}B` : `${Math.round(n / 1e6)}M`;
/** "499.4M" — rounded DOWN, so a song still short of the line never prints 500M. */
const streamsBelow = (n: number): string => `${(Math.floor(n / 1e5) / 10).toFixed(1)}M`;

/** The title as Spotify lists it, less a bracketed "[The Official … Song]"
 *  tag, which names no version — "Waka Waka (This Time for Africa) [The
 *  Official 2010 FIFA World Cup (TM) Song] (feat. Freshlyground)". */
export const songTitle500 = (title: string): string =>
  title.replace(/\s*\[[^\]]*\bOfficial\b[^\]]*\]/g, "").replace(/\s{2,}/g, " ").trim();

/** One song in a row's detail line. A featured credit says so. */
export const songLine500 = (s: Song500): string =>
  `${s.role === "featured" ? "featured on " : ""}“${songTitle500(s.title)}” ${streams500(s.streams)}`;

const thresholdWords = `${cardinalWord(THRESHOLD_500M / 1e8)} hundred million`;
const thresholdShort = `${THRESHOLD_500M / 1e6}M`;

/** The counting rule, in one line. */
export const RULE_500M =
  `Every Spotify song with ${thresholdShort}+ plays the artist is credited on, lead or featured; ` +
  `versions count separately, as Spotify lists them.`;

/** Artists grouped by song count, top first. */
const tiers = (() => {
  const out: Standing500[][] = [];
  for (const r of standings500) {
    const last = out[out.length - 1];
    if (last && last[0].count === r.count) last.push(r);
    else out.push([r]);
  }
  return out;
})();

/** Who leads, from the rows: one name, or every name tied at the top. */
export const leaderLine500 = (() => {
  const [top] = tiers;
  if (!top) return "";
  const n = top[0].count;
  return top.length === 1
    ? `${top[0].name} leads with ${cardinalWord(n)}.`
    : `${capitalise(cardinalWord(top.length))} artists share first place with ${cardinalWord(n)} each.`;
})();

export interface Near500 {
  title: string;
  streams: number;
  /** Every roster artist credited on it, each filed as on the board. */
  credits: { name: string; role: Role500 }[];
}

/** The songs nearest the line, among the artists the board reads — one song
 *  once, however many of them are credited on it ("Essence" is on Wizkid's page
 *  and Tems'). Each credit is filed the way the board files it (roleOf), so a
 *  song an artist is featured on is never worded as theirs. Pure, so the tests
 *  can run it on a reading the board has not seen. */
export function closestOf500(roster: Roster500, snapshot: Snapshot500): Near500[] {
  const near = new Map<string, Near500>();
  for (const a of roster.artists) {
    for (const s of snapshot.pages[a.spotifyId]?.songs ?? []) {
      if (s.streams >= roster.threshold) continue;
      const key = songTitle500(s.title);
      const credit = { name: a.name, role: roleOf(a, s).role };
      const seen = near.get(key);
      if (seen) {
        if (!seen.credits.some((c) => c.name === a.name)) seen.credits.push(credit);
        seen.streams = Math.max(seen.streams, s.streams);
      } else near.set(key, { title: key, streams: s.streams, credits: [credit] });
    }
  }
  return [...near.values()].sort((x, y) => y.streams - x.streams);
}

export const closest500 = closestOf500(roster500, snapshot500);

/** One near song, credited the way the board's rows credit it: an artist's own
 *  song is theirs ("Oxlade's “KU LO SA”"), a feature says so ("“Get It
 *  Together” featuring Black Coffee" — Drake's song, not Black Coffee's). */
export const nearLine500 = (n: Near500): string => {
  const leads = n.credits.filter((c) => c.role === "lead").map((c) => c.name);
  const feats = n.credits.filter((c) => c.role === "featured").map((c) => c.name);
  const song = leads.length ? `${andList(leads.map(possessive))} “${n.title}”` : `“${n.title}”`;
  return `${song}${feats.length ? ` featuring ${andList(feats)}` : ""} (${streamsBelow(n.streams)})`;
};

/** The first three near songs, as a sentence. */
export const closestLineOf500 = (near: Near500[]): string => {
  const next = near.slice(0, 3);
  return next.length ? `Closest to joining: ${andList(next.map(nearLine500))}.` : "";
};

export const closestLine500 = closestLineOf500(closest500);

/** The board's note: the rule, the lead, the next in line. */
export const NOTE_500M = [RULE_500M, leaderLine500, closestLine500].filter(Boolean).join(" ");

/** The pages a board counts from that are stamped before its "as of",
 *  grouped by their own date, newest first, names A–Z inside a date. kworb
 *  regenerates each page on its own schedule, so on any run some pages may
 *  trail the newest by a day (Burna Boy's reading 7 Oct while Rema's and
 *  Tems' still read 6 Oct) and the less-streamed acts' by more. */
export function olderPages500(rows: Standing500[]): { date: string; names: string[] }[] {
  const asOf = asOf500(rows);
  const byDate = new Map<string, string[]>();
  for (const r of rows) if (r.updated && r.updated < asOf) byDate.set(r.updated, [...(byDate.get(r.updated) ?? []), r.name]);
  return [...byDate.entries()]
    .sort(([x], [y]) => y.localeCompare(x))
    .map(([date, names]) => ({ date, names: names.sort((x, y) => x.localeCompare(y)) }));
}

/** The board's source line, from its rows. Each older date is printed once,
 *  beside every page that carries it, and no reason is given for a page's
 *  date: the pages a day behind are often the most-streamed. Pure, so the
 *  tests can run it on a reading where kworb's pages straddle two days. */
export function source500(rows: Standing500[]): string {
  const asOf = asOf500(rows);
  const when = (iso: string) => longDate(iso, iso.slice(0, 4) !== asOf.slice(0, 4));
  const groups = olderPages500(rows);
  const older = groups.length
    ? ` Each artist's kworb page is regenerated on its own schedule, so not every page is from that day: ${groups
        .map(
          (g, i) =>
            `${andList(g.names.map(possessive))}${i > 0 ? "," : g.names.length === 1 ? " page is dated" : " pages are dated"} ${when(g.date)}`,
        )
        .join("; ")}.`
    : "";
  const borrowed = rows.filter((r) => r.page);
  const one = borrowed.length === 1;
  const songs = borrowed.reduce((n, r) => n + r.count, 0);
  const borrowedLine = borrowed.length
    ? ` ${andList(borrowed.map((r) => r.name))} ${one ? "has" : "have"} no kworb page of ${one ? "its" : "their"} own, so ${one ? "its" : "their"} ${songs === 1 ? "song is" : "songs are"} read off the page of the act billed first.`
    : "";
  return (
    `Songs past ${thresholdWords} Spotify plays, counted from each artist's kworb.net songs page — every Spotify track the artist is credited on, with Spotify's own play count — as of ${asOf ? longDate(asOf) : ""}.` +
    older +
    borrowedLine +
    ` Lead or featured is filed by ChartMasters' rule: lead when the song is on one of the artist's own releases or the artist is billed first, otherwise featured; a song not yet filed that way goes by kworb's own mark for a credit where the artist is not billed first.` +
    // The names are the roster's `excluded` list (the test holds them to it):
    // the three of Paul's 17 Sep 2026 ruling, and French Montana, whose
    // "Unforgettable" is the omission a reader will ask about — American on
    // the Hot 100 boards' list too (hot100NotCounted).
    ` African artists are counted by nationality: Akon and French Montana, who was born in Morocco, are American artists, and GIMS and Aya Nakamura are French, so none of them is on the board.` +
    ` Tied artists share a rank and the next rank skips; inside a tie, the artist whose qualifying songs add up to more streams is listed first.` +
    ` The counts refresh automatically with the site's live figures, so a song joins the board once kworb shows it past the line.`
  );
}

export const SOURCE_500M = source500(standings500);

/** The FAQ answer: who leads, who is next, the rule and the date. */
export const FAQ_500M = (() => {
  const [top, next] = tiers;
  if (!top) return "";
  const n = top[0].count;
  const lead =
    top.length === 1
      ? `${top[0].name}, with ${cardinalWord(n)} songs past ${thresholdWords} Spotify streams — the most of any African artist.`
      : `${andList(top.map((r) => r.name))} share the most among African artists, with ${cardinalWord(n)} songs each past ${thresholdWords} Spotify streams.`;
  const second = next
    ? ` ${andList(next.map((r) => r.name))} ${next.length === 1 ? "has" : "have"} ${cardinalWord(next[0].count)}${next.length === 1 ? "" : " each"}.`
    : "";
  return (
    `${lead}${second} Every Spotify song an artist is credited on counts, lead or featured, and versions count separately, as Spotify lists them — ` +
    `on kworb's counts of Spotify's own plays, as of ${AS_OF_500M_LONG}.`
  );
})();
