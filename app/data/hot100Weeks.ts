// Most weeks on the Billboard Hot 100 — African artists, counted by nationality.
// Published as one of the boards on /records/africas-biggest, and nowhere else.
//
// One row per Hot 100 song whose Billboard credit line names the act, lead or
// featured. Nothing here is a total: weeks, song counts, best peaks and ranks
// are all computed from the rows below, so a re-read changes a row and every
// figure on the page follows it.
//
// WHERE THE ROWS WERE READ. Three routes, recorded on each act as `read`:
//  - "own-page": the act's own chart-history page
//    (billboard.com/artist/<slug>/chart-history/hsi/). The page prints a summary
//    line ("8 Songs, 1 No. 1 Hit, 2 Top 10 Hits") and the rows are held to it.
//  - "co-artist-page": Billboard gives the act no chart module, so the row was
//    read off the chart history of an artist credited on the same song — Sting
//    for Cheb Mami, Davido for Lojay, ScHoolboy Q for Saudi, Kali Uchis for
//    Amaarae (and Moliy's second song).
//  - "weekly-charts": no chart module and no co-artist page. Each song's weeks
//    are the "weeks on chart" figure printed on its last week's Hot 100, and the
//    following issues were checked for its absence (`lastWeek`, `goneBy`). The
//    debut is derived from that figure, which assumes one unbroken run; the
//    tests hold the derivation. For CKay (29 weeks) and Kongos (21), Billboard's
//    rule of removing songs below No. 50 after 20 weeks makes a re-entry very
//    unlikely.
// A missing chart module proves nothing either way: Amaarae has a lead credit on
// a Hot 100 song and no module, and so does CKay.
//
// A song credited to two counted acts counts for both. "Essence" (Wizkid
// Featuring Justin Bieber & Tems) is in Wizkid's rows and in Tems's; "Sad Girlz
// Luv Money" in Amaarae's and Moliy's; "Sensational" in Davido's and Lojay's.
//
// Songwriting credits do not count. Rihanna's "Lift Me Up" was co-written by
// Tems, but the credit line reads "Rihanna", and it is not on her Hot 100 page.
//
// WHO COUNTS. The site's rule for "African artist" (Paul, 17 Sep 2026): an
// artist's nationality and where the career sits, not birthplace or parentage.
// The calls that needed making are on the acts themselves (`nationality`), and
// the acts left out are in `hot100NotCounted` below, each with the reason.
//
// Checked and not on the Hot 100 at all: the other Black Panther South Africans
// (Sjava, Babes Wodumo, Yugen Blakrok — the chart dated 24 Feb 2018), Master KG
// and "Jerusalema", and Amaarae's "In the Night". Osibisa reached the Billboard
// 200 with albums only, and is a London-formed band anyway.
//
// RE-READING. Billboard publishes a new Hot 100 every week, and a song still on
// it adds a week each time — the rows with `stillCharting: true` move weekly.
// scripts/check-stats.mjs (HAND_READS) raises it in the weekly monitor issue
// once HOT100_CHART_DATE is more than eight days old, and
// tests/hot100Weeks.test.tsx goes red in CI past ten. To re-read: open the
// latest Hot 100, add a week to each row still on it (and add a row for any
// African act that has entered it, credit copied as Billboard prints it), set
// `stillCharting` from that week's chart, then move both dates below.

/** The Hot 100 issue the counts reflect — the chart's own date, a Saturday, as
 *  Billboard prints it ("Week of October 10, 2026"). Moved from 3 Oct on 10 Oct
 *  2026 on Paul's hand read of that chart (billboard.com answers AI tools with
 *  402 via TollBit, so the site cannot read it directly): Tems's "What You Need"
 *  and Burna Boy's "Dai Dai" are the only counted African songs still on it, so
 *  each adds a week — 28 and 16. Peaks were not re-read that week. Before that,
 *  30 Sep moved it from 26 Sep off both acts' own chart-history pages on Paul's
 *  screen ("Dai Dai" week 15, "What You Need" week 27). On the 26 Sep chart
 *  F3miii's "Noble" (No. 60, week 19) and Shaboozey's "Cowgirl" (No. 49) were
 *  on it too, and are not counted — see `hot100NotCounted`. */
export const HOT100_CHART_DATE = "2026-10-10";

/** The day the pages were read. */
export const HOT100_READ_ON = "2026-10-10";

/** Where the chart itself lives. */
export const HOT100_CHART_URL = "https://www.billboard.com/charts/hot-100/";

/** The countries of the acts counted. Flags, like every board on the page,
 *  open each row's sub-line. */
export const HOT100_COUNTRIES = {
  NG: { name: "Nigeria", flag: "🇳🇬" },
  ZA: { name: "South Africa", flag: "🇿🇦" },
  GH: { name: "Ghana", flag: "🇬🇭" },
  CM: { name: "Cameroon", flag: "🇨🇲" },
  DZ: { name: "Algeria", flag: "🇩🇿" },
  SN: { name: "Senegal", flag: "🇸🇳" },
} as const;
export type Hot100Country = keyof typeof HOT100_COUNTRIES;

export interface Hot100Song {
  title: string;
  /** Billboard's credit line, verbatim — including its spellings ("WizKid",
   *  "Beyonce", "KONGOS"). Every row's credit must name the act it is filed
   *  under. */
  credit: string;
  /** Chart dates, ISO. Billboard's issues are dated Saturdays. */
  debut: string;
  peak: number;
  /** Absent where the page it was read on does not print one. */
  peakDate?: string;
  /** Weeks on the Hot 100 in total — not necessarily consecutive. */
  weeks: number;
  /** On the chart dated HOT100_CHART_DATE, so this row grows next week. */
  stillCharting: boolean;
  /** Where this row was read, when it is not the act's own `source`. */
  source?: string;
  /** A row read off the weekly charts: the issue whose "weeks on chart" figure
   *  it carries — the song's last week — and the issues after it checked for
   *  its absence. */
  lastWeek?: string;
  goneBy?: string[];
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
  /** The board's slug for a board artist ("burna-boy" for him); otherwise
   *  Billboard's, or the name in the same shape. */
  slug: string;
  name: string;
  country: Hot100Country;
  /** The page to re-read this act from: its own chart-history page when it has
   *  one, otherwise the page its main row was read on. */
  source: string;
  /** How the rows were read — see the header. "unreadable": Billboard serves a
   *  page with no chart module and there was no other route to the rows. That
   *  is NOT zero weeks, and such an act is never ranked. */
  read: "own-page" | "co-artist-page" | "weekly-charts" | "unreadable";
  summary?: Hot100Summary;
  songs: Hot100Song[];
  /** The nationality call, wherever one had to be made — a band formed in one
   *  country and based in another, an artist in exile, a dual heritage. */
  nationality?: string;
  /** Counted, but a call the owner may yet overrule. Neither can reach the top
   *  five. */
  rulingOpen?: true;
  note?: string;
}

const src = (slug: string) => `https://www.billboard.com/artist/${slug}/chart-history/hsi/`;
const week = (iso: string) => `https://www.billboard.com/charts/hot-100/${iso}/`;

export const hot100Artists: Hot100Artist[] = [
  {
    slug: "tems",
    name: "Tems",
    country: "NG",
    source: src("tems"),
    read: "own-page",
    summary: { songs: 8, no1s: 1, top10s: 2 },
    songs: [
      { title: "Wait For U", credit: "Future Featuring Drake & Tems", debut: "2022-05-14", peak: 1, peakDate: "2022-05-14", weeks: 41, stillCharting: false },
      { title: "Essence", credit: "Wizkid Featuring Justin Bieber & Tems", debut: "2021-07-17", peak: 9, peakDate: "2021-10-23", weeks: 35, stillCharting: false },
      { title: "Fountains", credit: "Drake Featuring Tems", debut: "2021-09-18", peak: 26, peakDate: "2021-09-18", weeks: 2, stillCharting: false },
      // No. 29 on the 26 Sep 2026 chart (32 the week before). Not consecutive:
      // 26 weeks between a 14 Feb debut and 26 Sep.
      { title: "What You Need", credit: "Tems", debut: "2026-02-14", peak: 29, peakDate: "2026-08-08", weeks: 28, stillCharting: true },
      { title: "Bunce Road Blues", credit: "J. Cole, Tems & Future", debut: "2026-02-21", peak: 34, peakDate: "2026-02-21", weeks: 2, stillCharting: false },
      { title: "Raindance", credit: "Dave & Tems", debut: "2026-02-07", peak: 42, peakDate: "2026-08-29", weeks: 30, stillCharting: false },
      { title: "Free Mind", credit: "Tems", debut: "2022-07-30", peak: 46, peakDate: "2022-10-15", weeks: 21, stillCharting: false },
      { title: "Move", credit: "Beyonce Featuring Grace Jones & Tems", debut: "2022-08-13", peak: 55, peakDate: "2022-08-13", weeks: 1, stillCharting: false },
    ],
    note: "Billboard page id 194594.",
  },
  {
    slug: "seether",
    name: "Seether",
    country: "ZA",
    source: src("seether"),
    read: "own-page",
    summary: { songs: 7, no1s: 0, top10s: 0 },
    songs: [
      { title: "Broken", credit: "Seether Featuring Amy Lee", debut: "2004-09-04", peak: 20, peakDate: "2004-12-18", weeks: 21, stillCharting: false },
      { title: "Fake It", credit: "Seether", debut: "2007-10-13", peak: 56, peakDate: "2008-01-05", weeks: 20, stillCharting: false },
      { title: "Fine Again", credit: "Seether", debut: "2002-12-28", peak: 61, peakDate: "2003-01-25", weeks: 20, stillCharting: false },
      { title: "Careless Whisper", credit: "Seether", debut: "2009-02-21", peak: 63, peakDate: "2009-05-30", weeks: 18, stillCharting: false },
      { title: "Remedy", credit: "Seether", debut: "2005-07-30", peak: 70, peakDate: "2006-01-14", weeks: 6, stillCharting: false },
      { title: "Country Song", credit: "Seether", debut: "2011-03-26", peak: 72, peakDate: "2011-06-04", weeks: 18, stillCharting: false },
      { title: "Rise Above This", credit: "Seether", debut: "2008-05-03", peak: 91, peakDate: "2008-06-21", weeks: 11, stillCharting: false },
    ],
    nationality:
      "South African: formed in Pretoria in 1999, and moved to the US later. The page's board of most Hot 100 songs already counts them.",
    note: "Billboard page id 83351.",
  },
  {
    slug: "wizkid",
    name: "Wizkid",
    country: "NG",
    source: src("wizkid"),
    read: "own-page",
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
    country: "NG",
    source: src("burna-boy"),
    read: "own-page",
    summary: { songs: 9, no1s: 0, top10s: 0 },
    songs: [
      { title: "wgft", credit: "Gunna Featuring Burna Boy", debut: "2025-08-23", peak: 16, peakDate: "2026-01-31", weeks: 26, stillCharting: false },
      // No. 32 on the 26 Sep 2026 chart (29 the week before).
      { title: "Dai Dai (FIFA World Cup Official Song 2026)", credit: "Shakira X Burna Boy", debut: "2026-06-27", peak: 17, peakDate: "2026-08-01", weeks: 16, stillCharting: true },
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
    country: "NG",
    source: src("rema"),
    read: "own-page",
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
    country: "ZA",
    source: src("tyla"),
    read: "own-page",
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
    slug: "hugh-masekela",
    name: "Hugh Masekela",
    country: "ZA",
    source: week("1968-08-24"),
    read: "weekly-charts",
    songs: [
      // Debut row read on the chart dated 8 Jun 1968.
      { title: "Grazing In The Grass", credit: "Hugh Masekela", debut: "1968-06-08", peak: 1, peakDate: "1968-07-20", weeks: 12, stillCharting: false, lastWeek: "1968-08-24", goneBy: ["1968-08-31", "1968-09-07"] },
      { title: "Up-Up And Away", credit: "Hugh Masekela", debut: "1967-12-09", peak: 71, peakDate: "1968-01-20", weeks: 8, stillCharting: false, source: week("1968-01-27"), lastWeek: "1968-01-27", goneBy: ["1968-02-03", "1968-02-10", "1968-02-17"] },
      { title: "Riot", credit: "Hugh Masekela", debut: "1969-01-11", peak: 55, peakDate: "1969-02-15", weeks: 8, stillCharting: false, source: week("1969-03-01"), lastWeek: "1969-03-01", goneBy: ["1969-03-08", "1969-03-15"] },
      { title: "Puffin' On Down The Track", credit: "Hugh Masekela", debut: "1968-09-28", peak: 71, peakDate: "1968-10-12", weeks: 5, stillCharting: false, source: week("1968-10-26"), lastWeek: "1968-10-26", goneBy: ["1968-11-02", "1968-11-09"] },
    ],
    nationality: "South African; the records were made in the US during his exile.",
    note: "Billboard's page for him carries no chart module.",
  },
  {
    slug: "ckay",
    name: "CKay",
    country: "NG",
    source: week("2022-04-16"),
    read: "weekly-charts",
    songs: [
      // Also read: week 19 on 5 Feb 2022 (the peak, No. 26) and week 25 on 19 Mar.
      { title: "Love Nwantiti (Ah Ah Ah)", credit: "CKay", debut: "2021-10-02", peak: 26, peakDate: "2022-02-05", weeks: 29, stillCharting: false, lastWeek: "2022-04-16", goneBy: ["2022-04-23"] },
    ],
    note: "Billboard's page for him carries no chart module; No. 48 in his last week.",
  },
  {
    slug: "cheb-mami",
    name: "Cheb Mami",
    country: "DZ",
    source: src("sting"),
    read: "co-artist-page",
    songs: [
      { title: "Desert Rose", credit: "Sting Featuring Cheb Mami", debut: "2000-05-13", peak: 17, peakDate: "2000-08-26", weeks: 26, stillCharting: false },
    ],
    nationality: "Algerian, based in France.",
  },
  {
    slug: "kongos",
    name: "Kongos",
    country: "ZA",
    source: week("2014-09-06"),
    read: "weekly-charts",
    songs: [
      // Also read: week 18 on 16 Aug 2014. No. 44 in its last week.
      { title: "Come With Me Now", credit: "KONGOS", debut: "2014-04-19", peak: 31, weeks: 21, stillCharting: false, lastWeek: "2014-09-06", goneBy: ["2014-09-13", "2014-09-20", "2014-10-04"] },
    ],
    nationality:
      "Counted as South African. Wikipedia calls them a \"South African band\" and also \"South African-American\", based in Austin. The brothers grew up in East London, South Africa, and broke first on South African radio; their one Hot 100 hit came after they were US-based.",
    rulingOpen: true,
  },
  {
    slug: "moliy",
    name: "Moliy",
    country: "GH",
    source: week("2025-09-27"),
    read: "weekly-charts",
    songs: [
      // Also read: week 6 on 5 Jul 2025 (the peak), 13 on 23 Aug, 17 on 20 Sep.
      // No. 92 in its last week.
      { title: "Shake It To The Max (Fly)", credit: "MOLIY, Silent Addy, Skillibeng & Shenseea", debut: "2025-05-31", peak: 44, peakDate: "2025-07-05", weeks: 18, stillCharting: false, lastWeek: "2025-09-27", goneBy: ["2025-10-04", "2025-10-11"] },
      { title: "Sad Girlz Luv Money", credit: "Amaarae & Moliy Featuring Kali Uchis", debut: "2021-11-20", peak: 80, peakDate: "2021-11-20", weeks: 3, stillCharting: false, source: src("kali-uchis") },
    ],
    nationality: "Ghanaian: born and raised in Accra, with her career in Ghana. The site's YouTube board already shows her as Ghanaian.",
  },
  {
    slug: "freshlyground",
    name: "Freshlyground",
    country: "ZA",
    source: src("freshlyground"),
    read: "own-page",
    summary: { songs: 1, no1s: 0, top10s: 0 },
    songs: [
      { title: "Waka Waka (This Time For Africa)", credit: "Shakira Featuring Freshlyground", debut: "2010-06-26", peak: 38, peakDate: "2010-07-03", weeks: 18, stillCharting: false },
    ],
  },
  {
    slug: "four-jacks-and-a-jill",
    name: "Four Jacks and a Jill",
    country: "ZA",
    source: week("1968-06-29"),
    read: "weekly-charts",
    songs: [
      // Also read: week 11 on 8 Jun 1968, the peak.
      { title: "Master Jack", credit: "Four Jacks And A Jill", debut: "1968-03-30", peak: 18, peakDate: "1968-06-08", weeks: 14, stillCharting: false, lastWeek: "1968-06-29", goneBy: ["1968-07-06", "1968-07-13"] },
      // Wikipedia gives a peak of No. 98; Billboard's chart dated 17 Aug 1968
      // prints No. 96.
      { title: "Mister Nico", credit: "Four Jacks And A Jill", debut: "1968-08-10", peak: 96, peakDate: "1968-08-17", weeks: 2, stillCharting: false, source: week("1968-08-17"), lastWeek: "1968-08-17", goneBy: ["1968-08-24"] },
    ],
  },
  {
    slug: "fireboy-dml",
    name: "Fireboy DML",
    country: "NG",
    source: src("fireboy-dml"),
    read: "own-page",
    summary: { songs: 1 },
    songs: [
      { title: "Peru", credit: "Fireboy DML & Ed Sheeran", debut: "2022-02-12", peak: 53, peakDate: "2022-04-09", weeks: 15, stillCharting: false },
    ],
    note: "Billboard page id 177453.",
  },
  {
    slug: "miriam-makeba",
    name: "Miriam Makeba",
    country: "ZA",
    source: week("1967-12-16"),
    read: "weekly-charts",
    songs: [
      // Also read: week 4 on 28 Oct 1967.
      { title: "Pata Pata", credit: "Miriam Makeba", debut: "1967-10-07", peak: 12, weeks: 11, stillCharting: false, lastWeek: "1967-12-16", goneBy: ["1967-12-23", "1967-12-30"] },
      { title: "Malayisha", credit: "Miriam Makeba", debut: "1968-01-27", peak: 85, peakDate: "1968-01-27", weeks: 3, stillCharting: false, source: week("1968-02-10"), lastWeek: "1968-02-10", goneBy: ["1968-02-17"] },
    ],
    nationality: "South African, recording in the US in exile.",
    note: "Two songs on the Hot 100, not one: \"Malayisha\" is easy to miss.",
  },
  {
    slug: "jonathan-butler",
    name: "Jonathan Butler",
    country: "ZA",
    source: week("1987-09-26"),
    read: "weekly-charts",
    songs: [
      // Also read: week 12 on 12 Sep 1987. No. 88 in its last week.
      { title: "Lies", credit: "Jonathan Butler", debut: "1987-06-27", peak: 27, peakDate: "1987-09-05", weeks: 14, stillCharting: false, lastWeek: "1987-09-26", goneBy: ["1987-10-03"] },
    ],
  },
  {
    slug: "clout",
    name: "Clout",
    country: "ZA",
    source: src("clout"),
    read: "own-page",
    summary: { songs: 1, no1s: 0, top10s: 0 },
    songs: [
      { title: "Substitute", credit: "Clout", debut: "1978-09-02", peak: 67, peakDate: "1978-10-14", weeks: 10, stillCharting: false },
    ],
  },
  {
    slug: "manu-dibango",
    name: "Manu Dibango",
    country: "CM",
    source: src("manu-dibango"),
    read: "own-page",
    summary: { songs: 1, no1s: 0, top10s: 0 },
    songs: [
      { title: "Soul Makossa", credit: "Manu Dibango", debut: "1973-06-23", peak: 35, peakDate: "1973-07-28", weeks: 9, stillCharting: false },
    ],
  },
  {
    slug: "davido",
    name: "Davido",
    country: "NG",
    source: src("davido"),
    read: "own-page",
    summary: { songs: 1 },
    songs: [
      { title: "Sensational", credit: "Chris Brown Featuring Davido & Lojay", debut: "2024-02-03", peak: 71, peakDate: "2024-03-16", weeks: 8, stillCharting: false },
    ],
    note: "Billboard page id 132525.",
  },
  {
    slug: "lojay",
    name: "Lojay",
    country: "NG",
    source: src("davido"),
    read: "co-artist-page",
    songs: [
      { title: "Sensational", credit: "Chris Brown Featuring Davido & Lojay", debut: "2024-02-03", peak: 71, peakDate: "2024-03-16", weeks: 8, stillCharting: false },
    ],
  },
  {
    slug: "libianca",
    name: "Libianca",
    country: "CM",
    source: week("2023-07-01"),
    read: "weekly-charts",
    songs: [
      // Also read: week 7 on 24 Jun 2023, the peak. No. 93 in its last week.
      { title: "People", credit: "Libianca", debut: "2023-05-13", peak: 80, peakDate: "2023-06-24", weeks: 8, stillCharting: false, lastWeek: "2023-07-01", goneBy: ["2023-07-08", "2023-07-15", "2023-07-22"] },
    ],
    nationality: "Cameroonian, as Wikipedia has her; the Global 200 board's note on the same page already treats her as African.",
  },
  {
    slug: "john-kongos",
    name: "John Kongos",
    country: "ZA",
    source: src("john-kongos"),
    read: "own-page",
    summary: { songs: 1, no1s: 0, top10s: 0 },
    songs: [
      { title: "He's Gonna Step On You Again", credit: "John Kongos", debut: "1971-07-10", peak: 70, peakDate: "1971-08-07", weeks: 7, stillCharting: false },
    ],
    nationality: "South African, though his career was in the UK.",
    rulingOpen: true,
  },
  {
    slug: "saudi",
    name: "Saudi",
    country: "ZA",
    source: src("schoolboy-q"),
    read: "co-artist-page",
    songs: [
      { title: "X", credit: "ScHoolboy Q, 2 Chainz & Saudi", debut: "2018-02-24", peak: 49, peakDate: "2018-02-24", weeks: 5, stillCharting: false },
    ],
  },
  {
    slug: "youssou-ndour",
    name: "Youssou N'Dour",
    country: "SN",
    source: src("youssou-ndour"),
    read: "own-page",
    summary: { songs: 1, no1s: 0, top10s: 0 },
    songs: [
      { title: "7 Seconds", credit: "Youssou N'Dour & Neneh Cherry", debut: "1994-10-08", peak: 98, peakDate: "1994-10-08", weeks: 4, stillCharting: false },
    ],
  },
  {
    slug: "amaarae",
    name: "Amaarae",
    country: "GH",
    source: src("kali-uchis"),
    read: "co-artist-page",
    songs: [
      { title: "Sad Girlz Luv Money", credit: "Amaarae & Moliy Featuring Kali Uchis", debut: "2021-11-20", peak: 80, peakDate: "2021-11-20", weeks: 3, stillCharting: false },
    ],
    nationality:
      "Counted as Ghanaian. Wikipedia calls her Ghanaian-American, but her career is based in Accra.",
  },
  {
    slug: "black-coffee",
    name: "Black Coffee",
    country: "ZA",
    source: src("black-coffee"),
    read: "own-page",
    summary: { songs: 1, no1s: 0, top10s: 0 },
    songs: [
      { title: "Get It Together", credit: "Drake Featuring Jorja Smith & Black Coffee", debut: "2017-04-08", peak: 45, peakDate: "2017-04-08", weeks: 2, stillCharting: false },
    ],
  },
  {
    slug: "tiwa-savage",
    name: "Tiwa Savage",
    country: "NG",
    source: src("tiwa-savage"),
    read: "own-page",
    songs: [],
    note: "Billboard page id 154898. Her chart list has no Hot 100, so the /hsi/ address falls back to Mainstream R&B/Hip-Hop Airplay; its 'You4Me' row is an airplay entry, not a Hot 100 one.",
  },
  // Board artists Billboard serves as a news-tag page with no chart module (no
  // data-artist-id, no chart selector), with no other chart-linked term in its
  // taxonomy. None has a US Hot 100 peak in the board's own swept chart data
  // (app/data/afrobeats.ts), and none is on the chart dated 26 Sep 2026.
  // Reaching the top five takes more than a year of chart weeks, which could not
  // have been missed. Unreadable, so unranked — never counted as zero.
  ...(
    [
      ["asake", "Asake"],
      ["ayra-starr", "Ayra Starr"],
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
    country: slug === "black-sherif" ? "GH" : "NG",
    source: src(slug),
    read: "unreadable",
    songs: [],
    note: "Billboard's page for this artist carries no chart history.",
  })),
];

/**
 * Acts left out on nationality, with the reason. Several would change the
 * top five if counted (French Montana, Shaboozey, Dave Matthews Band), which is
 * why the call is written down rather than implied by an absence.
 */
export const hot100NotCounted: { name: string; nationality: string; why?: string }[] = [
  {
    name: "F3miii",
    nationality: "Irish",
    why: "Wikipedia calls him Nigerian-Irish, and he releases through Sony UK. Still charting: \"Noble\" was No. 60 in its 19th week on the chart dated 26 Sep 2026.",
  },
  { name: "Akon", nationality: "American", why: "The site's ruling of 17 Sep 2026." },
  { name: "Wale", nationality: "American" },
  { name: "Rotimi", nationality: "American" },
  { name: "Jidenna", nationality: "American" },
  { name: "Shaboozey", nationality: "American", why: "\"Cowgirl\" was No. 49 on the chart dated 26 Sep 2026." },
  { name: "Tinashe", nationality: "American" },
  { name: "French Montana", nationality: "American", why: "Born in Morocco." },
  { name: "Dave Matthews Band", nationality: "American", why: "Dave Matthews was born in Johannesburg; the band is American." },
  { name: "Sade", nationality: "British" },
  { name: "Seal", nationality: "British" },
  { name: "Kyla", nationality: "British" },
  { name: "Dave", nationality: "British" },
  { name: "Manfred Mann", nationality: "British", why: "Manfred Mann was born in Johannesburg; the band is British." },
  { name: "DJ Snake", nationality: "French" },
  { name: "Neneh Cherry", nationality: "Swedish" },
  { name: "Nico & Vinz", nationality: "Norwegian" },
  { name: "K'naan", nationality: "Canadian" },
  { name: "The Weeknd", nationality: "Canadian" },
  { name: "Troye Sivan", nationality: "Australian", why: "An existing site ruling." },
];

/* ── Derived — nothing below is typed ─────────────────────────────────────── */

export const weeksOf = (a: Hot100Artist) => a.songs.reduce((n, s) => n + s.weeks, 0);
export const bestPeakOf = (a: Hot100Artist) =>
  a.songs.length ? Math.min(...a.songs.map((s) => s.peak)) : null;

export interface Hot100Standing {
  slug: string;
  name: string;
  country: Hot100Country;
  weeks: number;
  songs: number;
  bestPeak: number;
  /** Competition ranking: tied totals share a rank, and the next rank skips. */
  rank: number;
  /** Rows still on the chart dated HOT100_CHART_DATE — the totals that move. */
  stillCharting: number;
}

/** Every act with at least one Hot 100 week, most weeks first. Acts that
 *  could not be read are left out rather than ranked at zero. */
export function hot100StandingsOf(artists: Hot100Artist[]): Hot100Standing[] {
  const rows = artists
    .filter((a) => a.read !== "unreadable" && a.songs.length > 0)
    .map((a) => ({
      slug: a.slug,
      name: a.name,
      country: a.country,
      weeks: weeksOf(a),
      songs: a.songs.length,
      bestPeak: bestPeakOf(a)!,
      stillCharting: a.songs.filter((s) => s.stillCharting).length,
    }))
    .sort((x, y) => y.weeks - x.weeks || x.name.localeCompare(y.name));
  return rows.map((r) => ({ ...r, rank: 1 + rows.filter((o) => o.weeks > r.weeks).length }));
}

export const hot100Standings = hot100StandingsOf(hot100Artists);

/** The day a row reached its peak: Billboard's date where the page printed
 *  one, the debut where it did not ("Pata Pata"). */
export const peakReachedOn = (s: Hot100Song) => s.peakDate ?? s.debut;

/** The song an act's best peak comes from — among equal peaks, the one that
 *  got there first. */
export const bestSongOf = (a: Hot100Artist): Hot100Song | undefined =>
  [...a.songs].sort((x, y) => x.peak - y.peak || peakReachedOn(x).localeCompare(peakReachedOn(y)))[0];

/** Named after "Featuring" on Billboard's credit line: a featured turn, not a
 *  lead or joint credit ("Shakira X Burna Boy" is joint). */
export const isFeaturedOn = (s: Hot100Song, name: string) => {
  const credit = s.credit.toLowerCase();
  const feat = credit.indexOf(" featuring ");
  return feat >= 0 && credit.indexOf(name.toLowerCase()) > feat;
};

/** The act a featured turn was on — the credit line before "Featuring". */
export const leadActOf = (s: Hot100Song) => s.credit.split(/ Featuring /i)[0];

/** The other acts on a song's credit line, in Billboard's order and spelling. */
export const coCreditsOf = (s: Hot100Song, name: string) =>
  s.credit
    .split(/ Featuring | & | X |, /i)
    .map((x) => x.trim())
    .filter((x) => x && x.toLowerCase() !== name.toLowerCase());

export interface Hot100PeakStanding {
  slug: string;
  name: string;
  country: Hot100Country;
  peak: number;
  /** The row the peak comes from. */
  song: Hot100Song;
  /** Competition ranking on the peak: acts on the same peak share a rank. */
  rank: number;
}

/**
 * Every ranked act by its best Hot 100 peak, highest first — the rows of the
 * page's peak board, read off the same Billboard rows as the weeks board.
 * Acts on the same peak are listed in the order they reached it, so the first
 * African No. 1 is named first.
 */
export const hot100PeakStandings: Hot100PeakStanding[] = (() => {
  const rows = hot100Artists
    .filter((a) => a.read !== "unreadable" && a.songs.length > 0)
    .map((a) => ({ slug: a.slug, name: a.name, country: a.country, peak: bestPeakOf(a)!, song: bestSongOf(a)! }))
    .sort(
      (x, y) =>
        x.peak - y.peak ||
        peakReachedOn(x.song).localeCompare(peakReachedOn(y.song)) ||
        x.name.localeCompare(y.name)
    );
  return rows.map((r) => ({ ...r, rank: 1 + rows.filter((o) => o.peak < r.peak).length }));
})();

/** The published board: rank 5 and above. A tie at fifth shows every act
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
/** The day Billboard published that chart: the Tuesday before the Saturday it is
 *  dated, so a chart "dated 3 October" is out on 29 September. Printed beside
 *  the chart date because a future-looking date reads like a typo (Paul, 30 Sep
 *  2026: "we are not in Oct yet"). */
export const HOT100_PUBLISHED_ON = new Date(Date.parse(`${HOT100_CHART_DATE}T00:00:00Z`) - 4 * 86_400_000).toISOString().slice(0, 10);
export const HOT100_PUBLISHED_ON_LONG = longDate(HOT100_PUBLISHED_ON);

/** The method line, word for word in the board's note and the structured data. */
export const HOT100_METHOD = `Every week a song crediting the artist (lead or featured) spent on the Billboard Hot 100, summed. African artists by nationality. As of the chart dated ${HOT100_CHART_DATE_LONG} (published ${HOT100_PUBLISHED_ON_LONG}).`;

/** "A, B and C" — the page's list style. */
const listed = (xs: string[]) =>
  xs.length < 2 ? (xs[0] ?? "") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;

/** Billboard's parenthetical subtitles off, for prose: "Dai Dai". */
export const shortTitle = (t: string) => t.replace(/\s*\(.*\)\s*$/, "");

/**
 * Which published totals are still moving, in words — from the rows, so the
 * sentence goes when the songs leave the chart. Empty when nothing in the top
 * five is still charting.
 */
export function hot100StillChartingLine(top: Hot100Standing[] = hot100Top): string {
  const moving = top
    .filter((s) => s.stillCharting > 0)
    .map((s) => {
      const titles = hot100Artists
        .find((a) => a.slug === s.slug)!
        .songs.filter((x) => x.stillCharting)
        .map((x) => `“${shortTitle(x.title)}”`);
      return `${s.name} (${listed(titles)})`;
    });
  if (!moving.length) return "";
  return moving.length === 1
    ? `${moving[0]} is still on the chart, so that total grows with each new one.`
    : `${listed(moving)} are still on the chart, so ${moving.length === 2 ? "both" : "those"} totals grow with each new one.`;
}

/** The provenance line: how the rows were read and who counts. The names left
 *  out are listed from `hot100NotCounted`, grouped by nationality. */
export const HOT100_SOURCE = (() => {
  const byNationality = new Map<string, string[]>();
  for (const n of hot100NotCounted)
    byNationality.set(n.nationality, [...(byNationality.get(n.nationality) ?? []), n.name]);
  const left = [...byNationality].map(([nat, names]) => `${listed(names)} (${nat})`).join("; ");
  const via = (r: Hot100Artist["read"]) =>
    listed(hot100Standings.filter((s) => hot100Artists.find((a) => a.slug === s.slug)!.read === r).map((s) => s.name));
  return (
    `Billboard, read ${HOT100_READ_ON_LONG}, as of the chart dated ${HOT100_CHART_DATE_LONG} (published ${HOT100_PUBLISHED_ON_LONG}). ` +
    `Each artist's Hot 100 chart history on billboard.com, one row per song whose credit line names them, lead or featured; songwriting credits do not count. ` +
    `Billboard gives some acts no chart module: ${via("co-artist-page")} were read off a co-credited artist's chart history, ` +
    `and ${via("weekly-charts")} off the weekly Hot 100 itself — each song's weeks-on-chart figure in its last week, with the weeks after it checked for its absence. ` +
    `Nationality decides who counts: an artist's nationality and where the career sits, not birthplace or parentage. ` +
    `Seether and Kongos count as South African, Moliy and Amaarae as Ghanaian. Not counted: ${left}.`
  );
})();
