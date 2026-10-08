// "Who is the biggest artist in Africa?" — the answer /records/africas-biggest
// gives, in a module of its own so the /faq can give the same one.
//
// It lived in app/records/africas-biggest/page.tsx until 8 Oct 2026. The /faq
// answered the same search with a different, typed paragraph ("By several
// measures, yes."), and data/faqs.ts cannot import a page: the root layout
// reaches it through lib/navGroups.ts, so a page import would link that page's
// CSS on every page (tests/rootLayoutCss.test.ts). This module imports data
// only.
import { statBoxes, spotifyLeadStreams, streamsShort, type RankEntry } from "../data/africasBiggest";

/** A board by id, or a build that stops — an answer cannot be written from a
 *  board that is not there. */
export const board = (id: string) => {
  const b = statBoxes.find((x) => x.id === id);
  if (!b) throw new Error(`/records/africas-biggest: no "${id}" board to answer from`);
  return b;
};

/**
 * Everyone sharing first place: the rows the data marks joint, and the rows
 * level with the top on value.
 *
 * The second half is not belt and braces. The Hot 100 peak board listed its
 * No. 1s with no tie mark until 30 Sep 2026 — the order there is simply the
 * order they got there — and a typed board can lose the mark again, so reading
 * entries[0] alone could name one of several No. 1s as the leader.
 */
export function leadersOf(entries: RankEntry[]): RankEntry[] {
  const [top, ...rest] = entries;
  if (!top) return [];
  const group = [top];
  for (const e of rest) {
    if (e.tie || (e.value !== undefined && e.value === top.value)) group.push(e);
    else break;
  }
  return group;
}

export const andList = (xs: string[]) =>
  xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
export const possessive = (name: string) => (name.endsWith("s") ? `${name}'` : `${name}'s`);

/**
 * "Biggest" has no single measure, so the answer names who leads which —
 * computed, so it cannot crown anyone the boards do not.
 *
 * Every board on the page is either a measure below or in BIGGEST_LEFT_OUT
 * with the reason it is out, and tests/topSearchFaqs.test.tsx walks statBoxes
 * to hold that, so a board added later has to be sorted into one or the other.
 * Until 30 Sep 2026 the set was a list with a comment naming what was out, and
 * three African size boards were in neither: Spotify followers, songs past
 * 200M streams and the YouTube audience peak. The measures are the African
 * boards (by nationality) that measure size. Every board in the set that
 * another artist leads stays in — dropping those is how an answer like this
 * turns into a crown, and the test names each leader against the boards.
 */
export type Measure = { id: string; label: string; leaders: string[]; value?: string; offBoard?: true };
// Streams as a lead artist is not a board on the page, so it is read from its
// own dated list and kept out of BIGGEST_MEASURED_IDS (the boards the answer
// reads). It leads the list because a featured credit is someone else's hit.
export const leadRanked = [...spotifyLeadStreams].sort((a, b) => b.lead - a.lead);
const leadMeasure: Measure = {
  id: "spotify-lead-streams",
  label: "Spotify streams as a lead artist",
  leaders: leadRanked.filter((r) => r.lead === leadRanked[0].lead).map((r) => r.name),
  value: streamsShort(leadRanked[0].lead),
  offBoard: true,
};
const listMeasure = (id: string, label: string): Measure => {
  const lead = leadersOf(board(id).entries ?? []);
  return { id, label, leaders: lead.map((e) => e.name), value: lead[0]?.value };
};
// The newest CLOSED year of the streaming board: a running year has a leader,
// not a winner, and the board's own badge counts closed years only.
const STREAMS_BOARD = "most-streamed-african-artist";
const streamYear = board(STREAMS_BOARD).rows?.find((r) => !r.inProgress);
export const biggestMeasures: Measure[] = [
  leadMeasure,
  listMeasure("best-selling-african-artist-eas", "equivalent album sales"),
  ...(streamYear
    ? [
        {
          id: STREAMS_BOARD,
          label: `Spotify streams in ${streamYear.label}`,
          leaders: leadersOf(streamYear.entries).map((e) => e.name),
          value: streamYear.entries[0]?.value,
        },
      ]
    : []),
  listMeasure("monthly-listeners-peak", "peak Spotify monthly listeners"),
  listMeasure("most-followed-spotify", "Spotify followers"),
  listMeasure("youtube-music-audience-peak", "peak monthly audience on YouTube"),
  // "songs over 200M Spotify streams" — the threshold is the board's own.
  listMeasure("most-200m-stream-songs", board("most-200m-stream-songs").title.replace(/^Most /, "")),
  // "the most 500M-stream songs on Spotify" — the board's own title, so a tie
  // reads "… share the most …" and a sole leader "leads on the most …".
  listMeasure("most-500m-stream-songs", `the ${board("most-500m-stream-songs").title.replace(/^M/, "m")}`),
  listMeasure("billboard-global-200-peak", "the highest Billboard Global 200 peak"),
  listMeasure("most-hot-100-entries", "Billboard Hot 100 entries"),
  listMeasure("most-hot-100-weeks", "weeks on the Billboard Hot 100"),
  listMeasure("billboard-hot-100-peak", "the highest Billboard Hot 100 peak"),
  listMeasure("biggest-spotify-debut", "the biggest Spotify album debut"),
];
/** The boards the answer reads. */
export const BIGGEST_MEASURED_IDS = biggestMeasures.filter((m) => !m.offBoard).map((m) => m.id);
const WORLD = "a world board: its leaders are not African artists";
const NIGERIAN = "Nigerian artists only, so it cannot say who leads Africa";
const ONE_SERVICE = "one service's chart, asking what the Billboard peaks already ask across all of them";
const ONE_SERVICE_DAYS = "one service's chart, asking what the Billboard weeks board already asks across all of them";
/** The boards it does not, each with the reason. */
export const BIGGEST_LEFT_OUT: Record<string, string> = {
  "youtube-audience-world": WORLD,
  "fastest-to-a-billion-youtube": WORLD,
  "daily-peak-streams-ng": NIGERIAN,
  "spotify-top-artists-peak": NIGERIAN,
  "spotify-top-artists-days": ONE_SERVICE_DAYS,
  "highest-spotify-global-peak": ONE_SERVICE,
  "spotify-global-album-peak": ONE_SERVICE,
  "apple-music-global-no1": ONE_SERVICE,
};

export const biggestAnswer = (() => {
  // One clause per leader (or joint leaders), most measures first; a stable
  // sort keeps the list's order between equals.
  const groups = new Map<string, { leaders: string[]; measures: Measure[] }>();
  for (const m of biggestMeasures) {
    const key = m.leaders.join("|");
    if (!groups.has(key)) groups.set(key, { leaders: m.leaders, measures: [] });
    groups.get(key)!.measures.push(m);
  }
  const clauses = [...groups.values()]
    .sort((a, b) => b.measures.length - a.measures.length)
    .map((g) => {
      const what = andList(g.measures.map((m) => (m.value ? `${m.label} (${m.value})` : m.label)));
      return g.leaders.length === 1 ? `${g.leaders[0]} leads on ${what}` : `${andList(g.leaders)} share ${what}`;
    });
  const byMeasure =
    clauses.length > 1 ? `${clauses.slice(0, -1).join("; ")}; and ${clauses[clauses.length - 1]}` : clauses[0];
  return `“Biggest” has no single measure, so among African artists it depends on which one you count. ${byMeasure}.`;
})();

/** One artist's standing across the measures: led alone, and led jointly. */
export type MeasureLead = { name: string; alone: number; shared: number };

/** Every leader's count, most outright leads first. */
export function measureLeads(measures: Measure[]): MeasureLead[] {
  const by = new Map<string, MeasureLead>();
  for (const m of measures) {
    for (const name of m.leaders) {
      const row = by.get(name) ?? { name, alone: 0, shared: 0 };
      if (m.leaders.length === 1) row.alone++;
      else row.shared++;
      by.set(name, row);
    }
  }
  return [...by.values()].sort((a, b) => b.alone - a.alone || b.shared - a.shared);
}

/**
 * The artist who leads the most measures outright — and only when nobody else
 * could match it even counting every lead they share. A search snippet can
 * name one artist; this is the condition under which naming one is a count
 * rather than a crown. Null when the measures do not single anyone out.
 */
export function clearMeasureLeader(measures: Measure[]): { name: string; leads: number; of: number } | null {
  const [top, ...rest] = measureLeads(measures);
  if (!top || top.alone === 0) return null;
  if (rest.some((r) => r.alone + r.shared >= top.alone)) return null;
  return { name: top.name, leads: top.alone, of: measures.length };
}

/** Today's: the measures above, read the same way. */
export const biggestMeasureLeader = clearMeasureLeader(biggestMeasures);
