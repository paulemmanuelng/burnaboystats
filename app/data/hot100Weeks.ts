// Most weeks on the Billboard Hot 100 — the Afrobeats Board, Burna Boy included.
//
// One row per Hot 100 song whose Billboard credit line names the artist, lead
// or featured, read off each artist's own chart-history page
// (billboard.com/artist/<slug>/chart-history/hsi/). Nothing here is a total:
// weeks, song counts, best peaks and ranks are all computed from the rows below,
// so a re-read changes a row and every figure on the page follows it.
//
// A song credited to two board artists counts for both. "Essence" (Wizkid
// Featuring Justin Bieber & Tems) is in Wizkid's rows and in Tems's rows,
// because Billboard lists it on both pages and both are credited on it.
//
// Songwriting credits do not count. Rihanna's "Lift Me Up" was co-written by
// Tems, but the credit line reads "Rihanna", and it is not on her Hot 100 page.
//
// RE-READING. Billboard publishes a new Hot 100 every week, and a song still on
// it adds a week each time — the rows with `stillCharting: true` move weekly.
// scripts/check-stats.mjs (HAND_READS) raises it in the weekly monitor issue
// once HOT100_CHART_DATE is more than eight days old, and
// tests/hot100Weeks.test.tsx goes red in CI past ten. To re-read: open each
// artist's `source` page, update the rows (a new song is a new row, credit
// copied as Billboard prints it), set `stillCharting` from that week's chart,
// then move both dates below.

/** The Hot 100 issue the counts reflect — the chart's own date, a Saturday, as
 *  Billboard prints it ("Week of September 26, 2026"). The artist pages were
 *  already on this week when read: "Dai Dai" showed 14 weeks and "What You
 *  Need" 26, the same as the chart page itself. */
export const HOT100_CHART_DATE = "2026-09-26";

/** The day the pages were read. */
export const HOT100_READ_ON = "2026-09-27";

/** Where the chart itself lives, for the page's source line. */
export const HOT100_CHART_URL = "https://www.billboard.com/charts/hot-100/";

export interface Hot100Song {
  title: string;
  /** Billboard's credit line, verbatim — including its spellings ("WizKid",
   *  "Beyonce"). Every row's credit must name the artist it is filed under. */
  credit: string;
  /** Chart dates, ISO. Billboard's issues are dated Saturdays. */
  debut: string;
  peak: number;
  peakDate: string;
  /** Weeks on the Hot 100 in total — not necessarily consecutive. */
  weeks: number;
  /** On the chart dated HOT100_CHART_DATE, so this row grows next week. */
  stillCharting: boolean;
}

/** What Billboard's own page prints above the rows ("8 Songs, 1 No. 1 Hit,
 *  2 Top 10 Hits"). Only the fields the page printed are recorded; the rows are
 *  held to them, which is how a truncated or double-counted parse shows up. */
export interface Hot100Summary {
  songs: number;
  no1s?: number;
  top10s?: number;
}

export interface Hot100Artist {
  /** "burna-boy", or the artist's slug on the board (app/data/afrobeats.ts). */
  slug: string;
  name: string;
  /** The artist's Hot 100 chart-history page on billboard.com. */
  source: string;
  /**
   * "read" — the page was read; `songs` is everything it lists (possibly none).
   * "unreadable" — Billboard serves a news-tag page with no chart module for
   * this artist, so there was nothing to read. That is NOT zero weeks, and
   * such an artist is never ranked.
   */
  status: "read" | "unreadable";
  summary?: Hot100Summary;
  songs: Hot100Song[];
  note?: string;
}

const src = (slug: string) => `https://www.billboard.com/artist/${slug}/chart-history/hsi/`;

export const hot100Artists: Hot100Artist[] = [
  {
    slug: "tems",
    name: "Tems",
    source: src("tems"),
    status: "read",
    summary: { songs: 8, no1s: 1, top10s: 2 },
    songs: [
      { title: "Wait For U", credit: "Future Featuring Drake & Tems", debut: "2022-05-14", peak: 1, peakDate: "2022-05-14", weeks: 41, stillCharting: false },
      { title: "Essence", credit: "Wizkid Featuring Justin Bieber & Tems", debut: "2021-07-17", peak: 9, peakDate: "2021-10-23", weeks: 35, stillCharting: false },
      { title: "Fountains", credit: "Drake Featuring Tems", debut: "2021-09-18", peak: 26, peakDate: "2021-09-18", weeks: 2, stillCharting: false },
      // No. 29 on the 26 Sep 2026 chart (32 the week before). Not consecutive:
      // 26 weeks between a 14 Feb debut and 26 Sep.
      { title: "What You Need", credit: "Tems", debut: "2026-02-14", peak: 29, peakDate: "2026-08-08", weeks: 26, stillCharting: true },
      { title: "Bunce Road Blues", credit: "J. Cole, Tems & Future", debut: "2026-02-21", peak: 34, peakDate: "2026-02-21", weeks: 2, stillCharting: false },
      { title: "Raindance", credit: "Dave & Tems", debut: "2026-02-07", peak: 42, peakDate: "2026-08-29", weeks: 30, stillCharting: false },
      { title: "Free Mind", credit: "Tems", debut: "2022-07-30", peak: 46, peakDate: "2022-10-15", weeks: 21, stillCharting: false },
      { title: "Move", credit: "Beyonce Featuring Grace Jones & Tems", debut: "2022-08-13", peak: 55, peakDate: "2022-08-13", weeks: 1, stillCharting: false },
    ],
    note: "Billboard page id 194594.",
  },
  {
    slug: "wizkid",
    name: "Wizkid",
    source: src("wizkid"),
    status: "read",
    summary: { songs: 5, no1s: 1, top10s: 2 },
    songs: [
      { title: "One Dance", credit: "Drake Featuring WizKid & Kyla", debut: "2016-04-23", peak: 1, peakDate: "2016-05-21", weeks: 36, stillCharting: false },
      { title: "Essence", credit: "Wizkid Featuring Justin Bieber & Tems", debut: "2021-07-17", peak: 9, peakDate: "2021-10-23", weeks: 35, stillCharting: false },
      { title: "Forever Be Mine", credit: "Gunna Featuring Wizkid", debut: "2025-08-23", peak: 68, peakDate: "2025-08-23", weeks: 2, stillCharting: false },
      { title: "Call Me Everyday", credit: "Chris Brown Featuring WizKid", debut: "2022-07-09", peak: 76, peakDate: "2022-07-09", weeks: 1, stillCharting: false },
      { title: "Brown Skin Girl", credit: "Beyonce, SAINt JHN & Wizkid Featuring Blue Ivy Carter", debut: "2019-08-03", peak: 76, peakDate: "2019-08-03", weeks: 1, stillCharting: false },
    ],
    note: "Billboard page id 131720.",
  },
  {
    slug: "burna-boy",
    name: "Burna Boy",
    source: src("burna-boy"),
    status: "read",
    summary: { songs: 9, no1s: 0, top10s: 0 },
    songs: [
      { title: "wgft", credit: "Gunna Featuring Burna Boy", debut: "2025-08-23", peak: 16, peakDate: "2026-01-31", weeks: 26, stillCharting: false },
      // No. 32 on the 26 Sep 2026 chart (29 the week before).
      { title: "Dai Dai (FIFA World Cup Official Song 2026)", credit: "Shakira X Burna Boy", debut: "2026-06-27", peak: 17, peakDate: "2026-08-01", weeks: 14, stillCharting: true },
      { title: "Last Last", credit: "Burna Boy", debut: "2022-07-23", peak: 44, peakDate: "2022-10-15", weeks: 19, stillCharting: false },
      { title: "Just Like Me", credit: "21 Savage, Burna Boy & Metro Boomin", debut: "2024-01-27", peak: 67, peakDate: "2024-01-27", weeks: 1, stillCharting: false },
      { title: "Only You", credit: "J. Cole & Burna Boy", debut: "2026-02-21", peak: 78, peakDate: "2026-02-21", weeks: 1, stillCharting: false },
      { title: "Sittin' On Top Of The World", credit: "Burna Boy", debut: "2023-09-09", peak: 80, peakDate: "2023-09-09", weeks: 3, stillCharting: false },
      { title: "Loved By You", credit: "Justin Bieber Featuring Burna Boy", debut: "2021-04-03", peak: 87, peakDate: "2021-04-03", weeks: 1, stillCharting: false },
      { title: "We Pray", credit: "Coldplay Featuring Little Simz, Burna Boy, Elyanna & TINI", debut: "2024-10-19", peak: 87, peakDate: "2024-10-19", weeks: 1, stillCharting: false },
      { title: "Talibans II", credit: "Burna Boy & Byron Messia", debut: "2023-08-05", peak: 99, peakDate: "2023-08-05", weeks: 1, stillCharting: false },
    ],
    note: "Billboard page id 126023.",
  },
  {
    slug: "rema",
    name: "Rema",
    source: src("rema"),
    status: "read",
    summary: { songs: 2, top10s: 1 },
    songs: [
      { title: "Calm Down", credit: "Rema & Selena Gomez", debut: "2022-09-17", peak: 3, peakDate: "2023-06-17", weeks: 57, stillCharting: false },
      { title: "Secondhand", credit: "Don Toliver Featuring Rema", debut: "2026-02-14", peak: 29, peakDate: "2026-02-14", weeks: 9, stillCharting: false },
    ],
    note: "Billboard page id 180781. \"Oh No\" is on the U.S. Afrobeats Songs chart, not the Hot 100.",
  },
  {
    slug: "tyla",
    name: "Tyla",
    source: src("tyla"),
    status: "read",
    summary: { songs: 4, top10s: 1 },
    songs: [
      { title: "Water", credit: "Tyla", debut: "2023-10-14", peak: 7, peakDate: "2024-01-13", weeks: 29, stillCharting: false },
      { title: "Chanel", credit: "Tyla", debut: "2025-12-27", peak: 43, peakDate: "2026-02-07", weeks: 19, stillCharting: false },
      { title: "She Did It Again", credit: "Tyla Featuring Zara Larsson", debut: "2026-05-02", peak: 59, peakDate: "2026-05-02", weeks: 2, stillCharting: false },
      { title: "Push 2 Start", credit: "Tyla", debut: "2025-02-01", peak: 88, peakDate: "2025-02-01", weeks: 7, stillCharting: false },
    ],
    note: "Billboard page id 210379 — the South African Tyla.",
  },
  {
    slug: "fireboy-dml",
    name: "Fireboy DML",
    source: src("fireboy-dml"),
    status: "read",
    summary: { songs: 1 },
    songs: [
      { title: "Peru", credit: "Fireboy DML & Ed Sheeran", debut: "2022-02-12", peak: 53, peakDate: "2022-04-09", weeks: 15, stillCharting: false },
    ],
    note: "Billboard page id 177453.",
  },
  {
    slug: "davido",
    name: "Davido",
    source: src("davido"),
    status: "read",
    summary: { songs: 1 },
    songs: [
      { title: "Sensational", credit: "Chris Brown Featuring Davido & Lojay", debut: "2024-02-03", peak: 71, peakDate: "2024-03-16", weeks: 8, stillCharting: false },
    ],
    note: "Billboard page id 132525.",
  },
  {
    slug: "tiwa-savage",
    name: "Tiwa Savage",
    source: src("tiwa-savage"),
    status: "read",
    songs: [],
    note: "Billboard page id 154898. Her chart list has no Hot 100, so the /hsi/ address falls back to Mainstream R&B/Hip-Hop Airplay; its 'You4Me' row is an airplay entry, not a Hot 100 one.",
  },
  // Billboard serves each of these as a news-tag page with no chart module (no
  // data-artist-id, no chart selector), and its artist taxonomy holds no other,
  // chart-linked term for any of them. On the U.S. Afrobeats Songs chart for
  // 26 Sep 2026 several of them appear with their names unlinked. Unreadable,
  // so unranked — never counted as zero.
  ...(
    [
      ["asake", "Asake"],
      ["ayra-starr", "Ayra Starr"],
      ["ckay", "CKay"],
      ["olamide", "Olamide"],
      ["black-sherif", "Black Sherif"],
      ["bnxn", "BNXN"],
      ["victony", "Victony"],
      ["kizz-daniel", "Kizz Daniel"],
      ["ruger", "Ruger"],
      ["oxlade", "Oxlade"],
      ["omah-lay", "Omah Lay"],
      ["seyi-vibez", "Seyi Vibez"],
    ] as const
  ).map(([slug, name]): Hot100Artist => ({
    slug,
    name,
    source: src(slug),
    status: "unreadable",
    songs: [],
    note: "Billboard's page for this artist carries no chart history.",
  })),
];

/* ── Derived — nothing below is typed ─────────────────────────────────────── */

export const weeksOf = (a: Hot100Artist) => a.songs.reduce((n, s) => n + s.weeks, 0);
export const bestPeakOf = (a: Hot100Artist) =>
  a.songs.length ? Math.min(...a.songs.map((s) => s.peak)) : null;

export interface Hot100Standing {
  slug: string;
  name: string;
  weeks: number;
  songs: number;
  bestPeak: number;
  /** Competition ranking: tied totals share a rank, and the next rank skips. */
  rank: number;
  /** Rows still on the chart dated HOT100_CHART_DATE — the totals that move. */
  stillCharting: number;
}

/** Every artist with at least one Hot 100 week, most weeks first. Artists who
 *  could not be read are left out rather than ranked at zero. */
export function hot100StandingsOf(artists: Hot100Artist[]): Hot100Standing[] {
  const rows = artists
    .filter((a) => a.status === "read" && a.songs.length > 0)
    .map((a) => ({
      slug: a.slug,
      name: a.name,
      weeks: weeksOf(a),
      songs: a.songs.length,
      bestPeak: bestPeakOf(a)!,
      stillCharting: a.songs.filter((s) => s.stillCharting).length,
    }))
    .sort((x, y) => y.weeks - x.weeks || x.name.localeCompare(y.name));
  return rows.map((r) => ({ ...r, rank: 1 + rows.filter((o) => o.weeks > r.weeks).length }));
}

export const hot100Standings = hot100StandingsOf(hot100Artists);

/** The published board: rank 5 and above. A tie at fifth shows every artist
 *  sharing it, so this can run longer than five but never drops one. */
export const HOT100_TOP = 5;
export const hot100Top = hot100Standings.filter((s) => s.rank <= HOT100_TOP);

/** "26 September 2026" — the one spelling of each date on the page. */
const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
export const HOT100_CHART_DATE_LONG = longDate(HOT100_CHART_DATE);
export const HOT100_READ_ON_LONG = longDate(HOT100_READ_ON);

/** The method line, word for word on both layouts and in the structured data. */
export const HOT100_METHOD = `Every week a song crediting the artist (lead or featured) spent on the Billboard Hot 100, summed. As of the chart dated ${HOT100_CHART_DATE_LONG}.`;
