// The <title> and meta description of the pages the top searches land on.
//
// Search Console, three months to 4 Oct 2026: the site sits at positions 2–8
// for its biggest searches and is clicked on a fraction of a per cent of them —
// "who is the biggest artist in africa" 2,998 impressions at 0.5%, "burna boy
// real name" 2,225 at 0.1%, "burna boy albums" 2,819 at 1% — and for the bare
// name "burna boy" Google shows /music, /faq and /about, the home page only six
// times at position 12. So every snippet here leads with the answer the search
// asks for, and the home page's leads with who he is.
//
// Every builder is pure: it takes the figures and returns the string, and each
// page passes its live data. A test can then move a figure and watch the
// string move (tests/searchSnippets.test.tsx), which is the only proof that a
// title is derived rather than typed — a typed number is the defect this site
// has shipped most often. Each builder offers its fullest wording first and
// shorter ones after, and takes the first inside Google's limits, so a figure
// that grows a digit shortens the line instead of truncating it.

/** What the post-build gate allows (scripts/check-seo.mjs). */
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

/** The first candidate inside `max` characters; the last is the floor. */
export function firstThatFits(candidates: string[], max: number): string {
  return candidates.find((c) => c.length <= max) ?? candidates[candidates.length - 1];
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/** "1991-07-02" → "2 July 1991", read off the digits so no timezone can move it. */
export const longDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

const andList = (xs: string[]) =>
  xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;

/* ── Home ─────────────────────────────────────────────────────────────── */

export type HomeFigures = {
  /** Certifications, every country (lib/homeData certTotal). */
  certifications: number;
  /** Chart No. 1 placements, as the home page's No. 1 board counts them. */
  numberOnes: number;
  /** Award wins (data/awards totalWins). */
  awardWins: number;
  /** Grammy wins, so "Grammy-winning" is read rather than assumed. */
  grammyWins: number;
  realName: string;
};

/** Leads with his name and what the site holds, counted. */
export const homeTitle = (f: HomeFigures) =>
  firstThatFits(
    [
      `Burna Boy — ${f.certifications} Certifications, ${f.numberOnes} No. 1s & ${f.awardWins} Award Wins`,
      `Burna Boy — ${f.certifications} Certifications & ${f.numberOnes} No. 1s`,
      "Burna Boy — Every Certification, Chart Peak & Award",
    ],
    TITLE_MAX,
  );

/** Who he is first, then what the site holds. */
export const homeDescription = (f: HomeFigures) => {
  const who = `Burna Boy is the ${f.grammyWins > 0 ? "Grammy-winning " : ""}Nigerian singer born ${f.realName}.`;
  return firstThatFits(
    [
      `${who} His ${f.certifications} certifications, ${f.numberOnes} chart No. 1s, awards and tours — every figure sourced.`,
      `${who} His ${f.certifications} certifications, ${f.numberOnes} No. 1s, awards and tours, sourced.`,
      `${who} Every certification, chart peak, award and tour, sourced.`,
    ],
    DESCRIPTION_MAX,
  );
};

/* ── /about ───────────────────────────────────────────────────────────── */

export type BioFigures = { realName: string; birthDate: string; birthplace: string; grammyWins: number };

/** "burna boy real name", answered in the title itself. */
export const aboutTitle = (f: Pick<BioFigures, "realName">) =>
  firstThatFits([`Burna Boy's Real Name: ${f.realName} — Biography`, `Burna Boy's Real Name: ${f.realName}`], TITLE_MAX);

export const aboutDescription = (f: BioFigures) => {
  const lead = `Burna Boy's real name is ${f.realName}. He was born on ${longDate(f.birthDate)} in ${f.birthplace}`;
  return firstThatFits(
    [
      ...(f.grammyWins > 0 ? [`${lead} — the Grammy winner's full biography and career timeline.`] : []),
      `${lead} — his biography and career timeline.`,
      `${lead}.`,
    ],
    DESCRIPTION_MAX,
  );
};

/* ── /faq ─────────────────────────────────────────────────────────────── */

/** The four things the FAQ is searched for, in the order they are searched. */
export const FAQ_TITLE = "Burna Boy FAQ — Real Name, Albums, Cars, Awards & Records";

export type FaqFigures = {
  realName: string;
  albums: number;
  cars: number;
  certifications: number;
  awardWins: number;
  questions: number;
};

export const faqDescription = (f: FaqFigures) => {
  const lead = `Burna Boy's real name is ${f.realName}.`;
  return firstThatFits(
    [
      `${lead} He has ${f.albums} studio albums, ${f.cars} confirmed cars, ${f.certifications} certifications and ${f.awardWins} award wins — ${f.questions} quick answers.`,
      `${lead} He has ${f.albums} studio albums, ${f.cars} cars, ${f.certifications} certifications and ${f.awardWins} award wins — ${f.questions} quick answers.`,
      `${lead} He has ${f.albums} studio albums, ${f.cars} cars and ${f.certifications} certifications — ${f.questions} quick answers.`,
      `${lead} Plus ${f.questions} quick answers on his albums, cars, awards and records.`,
    ],
    DESCRIPTION_MAX,
  );
};

/* ── /music ───────────────────────────────────────────────────────────── */

export type Release = { title: string; year: number };

/** "burna boy albums", "… album", "… discography". */
export const musicTitle = (albumCount: number) =>
  firstThatFits(
    [
      `Burna Boy Albums in Order: All ${albumCount} Studio Albums & Discography`,
      `Burna Boy Albums in Order — All ${albumCount} Studio Albums & EPs`,
      "Burna Boy Albums in Order & Full Discography",
    ],
    TITLE_MAX,
  );

/** The albums themselves, in release order — the list the search asks for. */
export const musicDescription = (albums: Release[], epCount: number) => {
  const n = albums.length;
  const first = albums[0];
  const last = albums[n - 1];
  const eps = epCount === 1 ? "1 EP" : `${epCount} EPs`;
  const plain = albums.map((a) => a.title).join(" → ");
  const dated = albums.map((a, i) => (i === 0 || i === n - 1 ? `${a.title} (${a.year})` : a.title)).join(" → ");
  return firstThatFits(
    [
      `Burna Boy has ${n} studio albums: ${dated}, plus ${eps}.`,
      `Burna Boy has ${n} studio albums: ${plain}, plus ${eps}.`,
      `Burna Boy's ${n} studio albums: ${plain}, plus ${eps}.`,
      `Burna Boy has ${n} studio albums: ${plain}.`,
      `Burna Boy has ${n} studio albums, from ${first.title} (${first.year}) to ${last.title} (${last.year}), plus ${eps}.`,
    ],
    DESCRIPTION_MAX,
  );
};

/* ── /records/africas-biggest ─────────────────────────────────────────── */

export type BiggestFigures = {
  /** Leaderboards on the page. */
  boards: number;
  /** The measures the biggest-artist answer reads (lib/biggestArtist.ts). */
  measures: number;
  /** Who leads the most of them outright, when the measures single one out. */
  leader: { name: string; leads: number } | null;
  /** Everyone else who leads or shares at least one measure, most first. */
  others: string[];
};

/** "who is the biggest artist in africa", asked and — only when the counts
 *  single one artist out — answered with the count. */
export const africasBiggestTitle = (f: BiggestFigures) =>
  firstThatFits(
    [
      ...(f.leader ? [`Biggest Artist in Africa? ${f.leader.name} Leads ${f.leader.leads} of ${f.measures} Measures`] : []),
      `Who Is the Biggest Artist in Africa? ${f.boards} Leaderboards`,
      "Who Is the Biggest Artist in Africa? The Leaderboards",
    ],
    TITLE_MAX,
  );

export const africasBiggestDescription = (f: BiggestFigures) => {
  const q = "Who is the biggest artist in Africa? No single measure decides it:";
  // The measures the leader does not lead alone, and who leads or shares them:
  // the two with the most, then "others" — never a list that reads as all.
  const left = f.leader ? f.measures - f.leader.leads : 0;
  const who = f.others.length > 2 ? `${f.others[0]}, ${f.others[1]} and others` : andList(f.others);
  const rest = left > 0 && f.others.length ? `; ${who} lead or share the other ${left}` : "";
  return firstThatFits(
    [
      ...(f.leader
        ? [
            `${q} ${f.leader.name} leads ${f.leader.leads} of the ${f.measures} I count${rest}. All ${f.boards} boards, ranked.`,
            `${q} ${f.leader.name} leads ${f.leader.leads} of the ${f.measures} I count${rest}.`,
            `${q} ${f.leader.name} leads ${f.leader.leads} of the ${f.measures} I count. All ${f.boards} boards, ranked.`,
          ]
        : []),
      `${q} ${f.boards} leaderboards rank Africa's biggest artists on Billboard, Spotify and YouTube.`,
      "Who is the biggest artist in Africa? The leaderboards that rank Africa's biggest artists on Billboard, Spotify and YouTube.",
    ],
    DESCRIPTION_MAX,
  );
};

/* ── /records/cars ────────────────────────────────────────────────────── */

export type GarageFigures = { cars: number; total: string; topCar: string; topCarPrice: string };

/** "how many cars does burna boy have", answered first. */
export const carsDescription = (f: GarageFigures) =>
  firstThatFits(
    [
      `Burna Boy owns ${f.cars} confirmed cars worth a reported ${f.total}, led by his ${f.topCarPrice} ${f.topCar} — every car in his garage, priced and sourced.`,
      `Burna Boy owns ${f.cars} confirmed cars worth a reported ${f.total}, led by his ${f.topCarPrice} ${f.topCar}.`,
      `Burna Boy owns ${f.cars} confirmed cars worth a reported ${f.total} — every car in his garage, priced and sourced.`,
    ],
    DESCRIPTION_MAX,
  );

/* ── A song page ──────────────────────────────────────────────────────── */

export type SongChartFigures = {
  /** "Burna Boy's “Alone”" — the song as the line names it. */
  song: string;
  /** Where it is from, fullest first: "Black Panther: Wakanda Forever". */
  from: string[];
  year: number;
  /** Countries it charted in, as a word ("eight"). */
  countries: string;
  /** Its best national peaks, best first, already in prose ("No. 17 in Nigeria"). */
  peaks: string[];
  /** Countries that certify it, as a word ("six"). */
  certified: string;
};

/** What a song page holds — the peaks and the plaques — from its own data. */
export const songChartDescription = (f: SongChartFigures) =>
  firstThatFits(
    f.from.flatMap((from) => [3, 2].map((k) => {
      const peaks = f.peaks.slice(0, k).join(", ");
      return `${f.song} (${from}, ${f.year}): charted in ${f.countries} countries — ${peaks} — and certified in ${f.certified}.`;
    })).concat(`${f.song} (${f.year}): every chart peak and certification.`),
    DESCRIPTION_MAX,
  );
