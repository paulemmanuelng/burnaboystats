import Link from "next/link";
import styles from "./africas-biggest.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import StatBox from "../../components/StatBox";
import TrendDelta from "../../components/TrendDelta";
import {
  statBoxes,
  HIGHLIGHT,
  BURNA_HOT_100_ENTRIES_WORD,
  BURNA_PEAK_LISTENERS,
  BURNA_PEAK_LISTENERS_RISE,
  BURNA_PEAK_LISTENERS_SET_ON_LONG,
  EAS_STREAMS_COUNTED_TO,
  SPOTIFY_LEAD_STREAMS_READ_ON_LONG,
  spotifyLeadStreams,
  streamsShort,
  asOfLabel,
  type RankEntry,
} from "../../data/africasBiggest";
import { monthlyListenersSeries } from "../../data/trends";
import {
  HOT100_METHOD,
  hot100PeakStandings,
  peakReachedOn,
  shortTitle,
  isFeaturedOn,
  leadActOf,
  coCreditsOf,
  type Hot100PeakStanding,
} from "../../data/hot100Weeks";
import { cardinalWord } from "../../lib/plural";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";
import MobileAfricasBiggest from "../../components/MobileAfricasBiggest";
import {
  africaBoards,
  boardsHeLeads,
  boardsOthersLead,
  youtubeWorldRank,
} from "../../lib/africaBoards";
import { enGbDate } from "../../lib/dates";

// The design draws eight bars showing the climb. The series is logged daily
// rather than monthly, so the last eight readings sit within half a million of
// each other and would draw as a flat block. These are eight readings spaced
// evenly across the whole run — every bar a real logged figure, and the shape
// is the climb the chart is there to show.
const BARS = 8;
const barPoints = Array.from({ length: BARS }, (_, i) =>
  monthlyListenersSeries[
    Math.round((i * (monthlyListenersSeries.length - 1)) / (BARS - 1))
  ]
);
// Bars are drawn against zero, not against the range, so a 25% climb reads as
// a 25% climb.
const barMax = Math.max(...barPoints.map((p) => p.value));
const barDate = (iso: string) =>
  enGbDate(new Date(`${iso}T00:00:00Z`), {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });

// The window the hero's percentage is ACTUALLY measured across, formatted from
// the two readings it is measured between — see BURNA_PEAK_LISTENERS_RISE. The
// label used to be the hardcoded string "this month" on a 40-day window that
// had closed 25 days earlier, which is a label no data could ever contradict.
const riseWindow = `${barDate(BURNA_PEAK_LISTENERS_RISE.from.date)} to ${barDate(
  BURNA_PEAK_LISTENERS_RISE.to.date
)}`;

export const metadata = pageMetadata({
  title: "Africa's Biggest Artists — Charts & Streaming Records",
  description:
    "The biggest African artists by the numbers — Billboard Global 200 peaks, most-streamed on Spotify each year and streaming records, with Burna Boy in context.",
  path: "/records/africas-biggest",
  shareTitle: "Africa's Biggest Artists",
  shareDescription: "Top African artists on the Billboard Global 200 and Spotify — with Burna Boy in context.",
});

// ── The two searches this page is found by ─────────────────────────────────
// Search Console, 28 days to 30 Sep 2026: "biggest artist in africa" (68
// clicks, +258%) and "best selling african artist of all time". Both answers
// are read off the boards below, so they move when a board is re-read.

/** A board by id, or a build that stops — an answer cannot be written from a
 *  board that is not there. */
const board = (id: string) => {
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
function leadersOf(entries: RankEntry[]): RankEntry[] {
  const [top, ...rest] = entries;
  if (!top) return [];
  const group = [top];
  for (const e of rest) {
    if (e.tie || (e.value !== undefined && e.value === top.value)) group.push(e);
    else break;
  }
  return group;
}

const andList = (xs: string[]) =>
  xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
const possessive = (name: string) => (name.endsWith("s") ? `${name}'` : `${name}'s`);

/** "Best-selling" has one measure on this page: ChartMasters' equivalent
 *  album sales. The names, figures, source and date are the board's. */
const bestSellingAnswer = (() => {
  const eas = board("best-selling-african-artist-eas");
  const [first, second] = eas.entries ?? [];
  const source = eas.meta.split(" · ").at(-1) ?? "";
  return (
    `${first.name} is the best-selling African artist of all time by ${possessive(source)} count of ` +
    `equivalent album sales: ${first.value} to ${possessive(second.name)} ${second.value}, with both ` +
    `artists' streams counted to ${asOfLabel(EAS_STREAMS_COUNTED_TO)}. Artists are counted by ` +
    `nationality, which is why Akon, an American artist, is not in the comparison.`
  );
})();

/**
 * "Which African artists have reached No. 1 on the Billboard Hot 100?" — read
 * off the rows the peak board is built from (data/hot100Weeks.ts), so it names
 * every No. 1 the board holds. The typed answer it replaced named Wizkid and
 * Tems alone and called Rema's "Calm Down" the best lead-act peak, leaving out
 * Hugh Masekela, who topped the chart as the lead act.
 */
const hot100No1Answer = (() => {
  const no1s = hot100PeakStandings.filter((s) => s.peak === 1);
  const title = (s: Hot100PeakStanding) => `“${shortTitle(s.song.title)}”`;
  const year = (s: Hot100PeakStanding) => peakReachedOn(s.song).slice(0, 4);
  const featured = (s: Hot100PeakStanding) => isFeaturedOn(s.song, s.name);
  const hit = (s: Hot100PeakStanding) =>
    featured(s)
      ? `${s.name} on ${possessive(leadActOf(s.song))} ${title(s)} (${year(s)})`
      : `${s.name} with ${title(s)} (${year(s)})`;
  const withWho = (s: Hot100PeakStanding) => {
    const others = coCreditsOf(s.song, s.name);
    return others.length ? ` (with ${andList(others)})` : "";
  };
  const [first] = no1s;
  const leads = no1s.filter((s) => !featured(s));
  const feats = no1s.filter(featured);
  const next = hot100PeakStandings.find((s) => s.peak > 1);
  const him = hot100PeakStandings.find((s) => s.name === HIGHLIGHT);
  const howMany = cardinalWord(no1s.length);
  const opener = `${howMany[0].toUpperCase()}${howMany.slice(1)} African ${
    no1s.length === 1 ? "artist has" : "artists have"
  } reached No. 1 on the Billboard Hot 100: ${andList(no1s.map(hit))}.`;
  const firstLine = first
    ? ` ${first.name} was the first${leads.length === 1 && leads[0] === first ? ", and the only one as the lead act" : ""}${
        feats.length ? `; ${andList(feats.map((s) => s.name))} got there on featured credits` : ""
      }.`
    : "";
  const nextLine = next
    ? ` The next-highest African peak is ${possessive(next.name)} ${title(next)}${withWho(next)} at No. ${next.peak}` +
      (him && him !== next && him.peak > 1
        ? `, and ${possessive(HIGHLIGHT)} best is ${title(him)}${withWho(him)} at No. ${him.peak}.`
        : ".")
    : "";
  return `${opener}${firstLine}${nextLine}`;
})();

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
type Measure = { id: string; label: string; leaders: string[]; value?: string; offBoard?: true };
// Streams as a lead artist is not a board on the page, so it is read from its
// own dated list and kept out of BIGGEST_MEASURED_IDS (the boards the answer
// reads). It leads the list because a featured credit is someone else's hit.
const leadRanked = [...spotifyLeadStreams].sort((a, b) => b.lead - a.lead);
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
const biggestMeasures: Measure[] = [
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
/** The boards it does not, each with the reason. */
export const BIGGEST_LEFT_OUT: Record<string, string> = {
  "youtube-audience-world": WORLD,
  "fastest-to-a-billion-youtube": WORLD,
  "daily-peak-streams-ng": NIGERIAN,
  "spotify-top-artists-peak": NIGERIAN,
  "highest-spotify-global-peak": ONE_SERVICE,
  "spotify-global-album-peak": ONE_SERVICE,
  "apple-music-global-no1": ONE_SERVICE,
};

/**
 * "Most-streamed on Spotify" is answered by lead credits first (Paul, 30 Sep
 * 2026): streams on the artist's own songs, not features on someone else's.
 * Every name and figure comes from spotifyLeadStreams; the overall-total line
 * appears only while the overall leader is someone else, and the closing
 * sentence (2024, 2025, the listener peak) is the answer this replaced.
 */
const leadStreamsAnswer = (() => {
  const [top, second, third] = leadRanked;
  const overall = [...spotifyLeadStreams].sort((a, b) => b.lead + b.feat - (a.lead + a.feat))[0];
  const overallLine =
    overall.name !== top.name
      ? ` ${overall.name}'s overall Spotify total is higher, because ${streamsShort(overall.feat)} of it comes from songs where ${overall.name} is the featured artist.`
      : "";
  return (
    `By lead credits (the artist's own songs, not features), it is ${top.name}: ${streamsShort(top.lead)} Spotify streams as a lead artist, the most of any African artist, ahead of ${second.name} (${streamsShort(second.lead)}) and ${third.name} (${streamsShort(third.lead)}) on ChartMasters' count, read ${SPOTIFY_LEAD_STREAMS_READ_ON_LONG}.` +
    overallLine +
    ` Burna Boy was also the most-streamed African artist globally in both 2024 and 2025, and holds the highest Spotify monthly-listener peak of any African artist.`
  );
})();

const biggestAnswer = (() => {
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

// Answer-first Q&A targeting the multi-artist searches this page serves, so it
// can win featured snippets / AI answers for "which / highest African artist on
// Billboard / Spotify" queries. Rendered visibly and as FAQPage structured data.
// The two searched-for questions lead: the phone's list opens on the first.
export const pageFaqs = [
  {
    q: "Who is the biggest artist in Africa?",
    a: biggestAnswer,
  },
  {
    q: "Who is the best-selling African artist of all time?",
    a: bestSellingAnswer,
  },
  {
    q: "What is the highest-charting African song on the Billboard Global 200?",
    a: "Shakira and Burna Boy's “Dai Dai” — the first and only African song to reach No. 1 on Billboard's US-inclusive Global 200. The next-highest are CKay's “Love Nwantiti” and Future's “Wait for U” with Drake and Tems (both No. 2), Rema and Selena Gomez's “Calm Down” (No. 3) and Tyla's “Water” (No. 6).",
  },
  {
    q: "Which African artists have reached No. 1 on the Billboard Hot 100?",
    a: hot100No1Answer,
  },
  {
    q: "Which African artist has the most Billboard Hot 100 entries?",
    a: `Burna Boy, with ${BURNA_HOT_100_ENTRIES_WORD.toLowerCase()} career entries — the record for any African act, ahead of Tems (eight) and the South African rock band Seether (seven). Wizkid is next on five, then Tyla and Hugh Masekela tied on four.`,
  },
  {
    q: "Who is the most-streamed African artist on Spotify?",
    a: leadStreamsAnswer,
  },
  {
    q: "Who was the first African artist to reach No. 1 on the Billboard Global 200?",
    a: "Burna Boy, when “Dai Dai” (with Shakira) topped the chart in July 2026 — no African artist had ever led Billboard's flagship, US-inclusive worldwide chart before.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pageFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Group the leaderboards so the long page reads as two clear sections.
const billboardIds = new Set([
  "billboard-global-200-peak",
  "billboard-hot-100-peak",
  "most-hot-100-entries",
  "most-hot-100-weeks",
]);
const groups = [
  { id: "billboard", label: "On the Billboard charts", boxes: statBoxes.filter((b) => billboardIds.has(b.id)) },
  { id: "streaming", label: "On streaming", boxes: statBoxes.filter((b) => !billboardIds.has(b.id)) },
];

// His all-time YouTube monthly-audience peak — read from the board that ranks
// it, so the stat cell can never drift from the row it summarises.
const youtubePeak =
  statBoxes
    .find((b) => b.id === "youtube-music-audience-peak")
    ?.entries?.find((e) => e.name === HIGHLIGHT)?.value ?? "—";

export default function AfricasBiggestPage() {
  const dataset = datasetJsonLd({
    name: "Africa's biggest artists — Billboard, Spotify & chart records",
    description: "Leaderboards of Africa's biggest artists: the top 5 by Billboard Global 200 peak, the most-streamed on Spotify each year, most Billboard Hot 100 entries and more — with Burna Boy in context.",
    path: "/records/africas-biggest",
    keywords: ["most-streamed African artist", "highest-charting African song", "African artists Billboard Hot 100", "Billboard Global 200", "first African artist Billboard Global 200", "Burna Boy", "Wizkid", "Tems", "Rema", "Tyla", "Afrobeats records"],
    variableMeasured: ["Billboard Global 200 peak", "Billboard Hot 100 peak", "Weeks on the Billboard Hot 100", "Spotify streams", "Artist", "Chart entries"],
  });

  // ItemLists for the Billboard leaderboards so search + AI read the rankings.
  // The weeks board's list carries its method as the description, so the
  // structured data states what the figure counts, as the page does.
  const itemLists = ["billboard-global-200-peak", "billboard-hot-100-peak", "most-hot-100-weeks"]
    .map((id) => statBoxes.find((b) => b.id === id))
    .filter((b): b is (typeof statBoxes)[number] => !!b?.entries?.length)
    .map((b) => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: b.title,
      ...(b.id === "most-hot-100-weeks" ? { description: HOT100_METHOD } : {}),
      numberOfItems: b.entries!.length,
      itemListElement: b.entries!.map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: e.name,
      })),
    }));

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      {itemLists.map((il, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(il) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Mobile is screen 16 — its own screen, not the shared deep-page
          grammar: each board carries a badge and a note the shared rows have
          nowhere to put. Every figure below is derived, including "he leads":
          the design's mock said 8 of 14, which was true only while the stats
          bot had corrupted the monthly-listeners board.
          `faqs` is not decoration. The FAQPage node above goes out at every
          width but its five answers were rendered only in the `.desktopOnly`
          half below, which is display:none on a phone — so the schema promised
          Googlebot (which renders at phone width) and every phone reader an
          answer this page did not show them. The desktop half cannot simply be
          un-hidden here; the answers had to come to the screen. */}
      <MobileAfricasBiggest
        boards={africaBoards}
        leads={boardsHeLeads}
        others={boardsOthersLead}
        faqs={pageFaqs}
        stats={[
          { value: String(statBoxes.length), label: "Leaderboards", note: "African music" },
          { value: String(boardsHeLeads), label: "He leads", note: `of ${statBoxes.length} boards` },
          { value: "1st", label: "Global 200", note: "first African ever" },
          { value: youtubePeak, label: "YouTube peak", note: `${youtubeWorldRank} worldwide` },
        ]}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/africas-biggest" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>African music by the numbers</div>
          <h1 className={styles.h1}>
            Africa&apos;s <span className="inkText">Biggest</span>
          </h1>
          <p className={styles.intro}>
            Burna Boy is the{" "}
            <strong>first African artist ever to reach No. 1 on Billboard&apos;s Global 200</strong>{" "}
            — and the most-streamed African artist on Spotify in both 2024 and 2025, whose
            1.986 billion streams in 2025 set a record for the biggest streaming year by an
            African artist. The leaderboards below rank African music&apos;s biggest by the
            numbers.
          </p>

          {/* Headline number beside its own recent history. */}
          <div className={styles.trendGrid}>
            <div className={styles.trendMain}>
              <div className={styles.trendKicker}>Spotify monthly listeners · peak</div>
              <div className={styles.trendValueRow}>
                {/* The figure is read from the board that ranks it further down
                    this page, not from the tail of the series, so the hero and
                    the leaderboard cannot print two numbers for one peak. */}
                <span className={`${styles.trendValue} inkText`}>{BURNA_PEAK_LISTENERS}</span>
                <TrendDelta value={BURNA_PEAK_LISTENERS_RISE.pct} format="pct" label={riseWindow} />
              </div>
              <p className={styles.trendNote}>
                An all-time high set on {BURNA_PEAK_LISTENERS_SET_ON_LONG}, not a reading of
                today — up from {BURNA_PEAK_LISTENERS_RISE.from.value}M at the start of that
                window, and still the highest peak of any African artist. Monthly listeners
                rise and fall with a release cycle, so this records the high rather than
                where he sits now.
              </p>
            </div>
            <div className={styles.trendChart}>
              <div className={styles.chartLabel}>
                {barDate(barPoints[0].date)} — {barDate(barPoints[barPoints.length - 1].date)}
              </div>
              <div className={styles.bars}>
                {barPoints.map((p, i) => {
                  const now = i === barPoints.length - 1;
                  return (
                    <div key={p.date} className={styles.bar}>
                      <span className={`${styles.barValue} ${now ? styles.barValueNow : ""}`}>
                        {p.value}M
                      </span>
                      <span
                        className={`${styles.barFill} ${now ? styles.barFillNow : ""}`}
                        style={{ height: `${Math.round((p.value / barMax) * 78)}px` }}
                      />
                      <span className={styles.barMonth}>{barDate(p.date)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <nav className={styles.jumpNav} aria-label="Jump to a section">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`}>{g.label}</a>
            ))}
            <a href="#faq">Common questions</a>
          </nav>
        </section>

        {/* ── Leaderboards ───────────────────────────────────── */}
        {groups.map((g) => (
          <section key={g.id} id={g.id} className={`${styles.wrap} ${styles.groupPad}`}>
            <h2 className={styles.groupHead}>
              {g.label} <span className={styles.groupCount}>{g.boxes.length}</span>
            </h2>
            <div className={styles.boxGrid}>
              {g.boxes.map((box) => (
                <StatBox
                  key={box.id}
                  box={box}
                  featured={box.id === "billboard-global-200-peak"}
                />
              ))}
            </div>
          </section>
        ))}

        {/* ── FAQ ────────────────────────────────────────────── */}
        {/* The laptop copy. It stays inside .desktopOnly — this wrapper holds
            the whole desktop page, so un-hiding it the way /music/[song] was
            un-hidden would paint the entire desktop tree on a phone. The phone
            copy is the same `pageFaqs` array, rendered by
            MobileAfricasBiggest at the top of this file, which is what stops
            the FAQPage node above promising a phone reader an answer the page
            withholds. */}
        <section id="faq" className={`${styles.wrap} ${styles.faqPad}`}>
          <h2 className={styles.groupHead}>Common questions</h2>
          <div className={styles.faqList}>
            {pageFaqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Onward ─────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/records" className="btn btnSecondary">← Career records</Link>
          <Link href="/records/charts" className="btn btnPrimary">Official charts ↗</Link>
          <Link href="/music" className="btn btnSecondary">Discography ↗</Link>
        </section>

        <KeepExploring current="/records/africas-biggest" />
      </div>
    </main>
  );
}
