import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { updates } from "../app/data/updates";
import {
  DAI_DAI_ITUNES_NO1_COUNTRIES,
  DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF,
  DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS,
  DAI_DAI_APPLE_EUROPE_NO1_DAYS,
  DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS,
  DAI_DAI_UWC_NO1_WEEKS,
  DAI_DAI_DEEZER_WORLDWIDE_PEAK,
  DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS,
  BURNA_GLOBAL_DIGITAL_ARTIST_POSITION,
} from "../app/data/daiDai";

// "Dai Dai"'s days-at-No.1 figure is the most-quoted number on this site and
// has by far the widest spread: every statement of it listed below, across nine
// files, in two
// languages, including both share cards. On 22 Aug 2026 it moved from 35 to 36
// and every one of them had to be hunted down by grep — which is a
// procedure, not a guarantee. Miss one and the site contradicts itself, which
// reads far worse than simply being a day behind everywhere at once.
//
// This does NOT assert a particular value. The figure climbs most days, so a
// test hardcoding 36 would just become a sixteenth home to remember. It
// asserts only that every home says the SAME thing — which is the property
// that actually breaks.

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

interface Home {
  file: string;
  label: string;
  re: RegExp;
}

// Both home layouts read the constant since 24 Sep 2026 instead of typing it
// (the desktop one also said "has now spent" about a closed run), so they are
// held to the constant by name below rather than compared as typed numbers.
const DERIVED: Home[] = [
  { file: "app/page.tsx", label: "home hero", re: /spent \{DAI_DAI_SPOTIFY_NO1_DAYS\} days as the most-streamed song on Earth/ },
  { file: "app/components/MobileHome.tsx", label: "mobile home", re: /\{DAI_DAI_SPOTIFY_NO1_DAYS\} days as the most-streamed song on Earth/ },
];

// The two hero-card homes ("…after 37 days as the most-streamed song on Earth"
// and "…tras 37 días como…") went with the record's redesign the same day: the
// Spotify-streams card became a lead figure captioned with its chart, and the
// figure is said once on that page — chapter 04 and the streak row below,
// both still listed here.
//
// The story's two typed rail notes ("Daily & Weekly · 37 days as Earth's
// most-streamed song" and its Spanish twin) went with the redesign of 26 Sep
// 2026: chapter 04's figure is now the six-spell strip, and it prints the
// constant itself. Held here by name, like the home layouts above, and the
// spells it draws are held to the same constant in daiDaiStoryFigures.test.tsx.
// The record's two streak rows (EN and ES) typed "37 days" / "37 días" as
// their value until the review of 26 Sep 2026 — rows the redesign had just
// rewritten, beside a constant that already held the figure. They read it now,
// and are held here by name like the home layouts.
const ROWS: Home[] = [
  { file: "app/dai-dai/page.tsx", label: "EN streak row", re: /\{ v: `\$\{DAI_DAI_SPOTIFY_NO1_DAYS\} days`, l: `in total at No\. 1 on Spotify/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES streak row", re: /\{ v: `\$\{DAI_DAI_SPOTIFY_NO1_DAYS\} días`, l: `en total en el número 1/ },
];

const FIGURE: Home = {
  file: "app/components/DaiDaiFigures.tsx",
  label: "story chapter 04 figure",
  re: /\{DAI_DAI_SPOTIFY_NO1_DAYS\}/,
};

// Five more homes read the constant since 26 Sep 2026 — the story's chapter 04
// sentence in both editions, both page descriptions (metadata, so also the
// search snippet) and the Spanish share card — and are held to it by name.
const DERIVED_PROSE: Home[] = [
  { file: "app/components/DaiDaiStory.tsx", label: "story chapter 04 sentence", re: /— \$\{DAI_DAI_SPOTIFY_NO1_DAYS\} days as the single most-streamed/ },
  { file: "app/dai-dai/page.tsx", label: "EN page description", re: /anthem: \$\{DAI_DAI_SPOTIFY_NO1_DAYS\} days as Earth/ },
  { file: "app/dai-dai/es/ogId.ts", label: "ES share card", re: /— \$\{DAI_DAI_SPOTIFY_NO1_DAYS\} días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES page description", re: /Burna Boy: \$\{DAI_DAI_SPOTIFY_NO1_DAYS\} días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES story chapter 04 sentence", re: /la semanal: \$\{DAI_DAI_SPOTIFY_NO1_DAYS\} días como/ },
];

const HOMES: Home[] = [
  { file: "app/data/faqs.ts", label: "FAQ answer", re: /spent (\d+) days at No\. 1/ },
  // The figure's home is now app/data/daiDai.ts, beside its three siblings and
  // with a reading date of its own. ogId re-exports it for the share card's
  // cache id; the seventeen prose statements below still spell it out, and this
  // list is what holds them to the constant.
  { file: "app/data/daiDai.ts", label: "the constant", re: /export const DAI_DAI_SPOTIFY_NO1_DAYS = (\d+);/ },
  // The sixteenth home, and the one that was missing: Africa's Biggest carries
  // the same figure in a board note, in a file this list did not cover at all.
  { file: "app/data/africasBiggest.ts", label: "Africa's Biggest board note", re: /held that No\. 1 for (\d+) days/ },
];

describe("the days-at-No.1 figure agrees with itself everywhere", () => {
  it("is still stated in every home the site publishes it in", () => {
    // A pattern that stops matching is the dangerous case, not a loud one: the
    // figure silently drops out of the comparison and the remaining homes
    // agree with each other while the missing one drifts. Fail on absence.
    const missing = HOMES.filter((h) => !h.re.test(read(h.file)));
    expect(
      missing.map((h) => `${h.file} — ${h.label}`),
      "a home stopped matching: either its sentence was reworded (update the pattern here) or the figure was dropped from it",
    ).toEqual([]);
  });

  it(`says the same number in all ${HOMES.length}`, () => {
    const seen = HOMES.map((h) => ({
      where: `${h.file} — ${h.label}`,
      n: Number(read(h.file).match(h.re)![1]),
    }));
    const values = [...new Set(seen.map((s) => s.n))];
    expect(
      values.length === 1 ? [] : seen.map((s) => `${s.n}  ←  ${s.where}`),
      `the figure disagrees with itself (${values.join(" vs ")}). Every home has to move in the same commit.`,
    ).toEqual([]);
  });

  it("the descriptions, the story sentences and the Spanish card read the constant, not a typed copy", () => {
    const notDerived = DERIVED_PROSE.filter((h) => !h.re.test(read(h.file)));
    expect(notDerived.map((h) => `${h.file} — ${h.label}`), "a home types the days figure again").toEqual([]);
    // The five as they shipped until 26 Sep 2026.
    const SHIPPED = [
      "Global Top Songs chart on both the Daily and Weekly lists — 37 days as the single most-streamed song on the planet",
      "description: `Shakira & Burna Boy's “Dai Dai” — the World Cup anthem: 37 days as Earth's most-streamed song",
      'sub: "El himno de Shakira y Burna Boy — 37 días como la canción más escuchada del mundo",',
      "description: `“Dai Dai”, de Shakira y Burna Boy: 37 días como la canción más escuchada del mundo",
      "tanto en su versión diaria como en la semanal: 37 días como la canción más escuchada del mundo",
    ];
    const typed = /\b\d+ (?:days as (?:the single most-streamed|Earth)|días como la canción más escuchada)/;
    for (const line of SHIPPED) expect(typed.test(line), `the check no longer catches: ${line}`).toBe(true);
    for (const h of DERIVED_PROSE) expect(typed.test(read(h.file)), `${h.file} types the days figure`).toBe(false);
  });

  it("the story's chapter 04 figure prints the constant, not a typed copy", () => {
    const src = read(FIGURE.file);
    expect(FIGURE.re.test(src), `${FIGURE.file} — ${FIGURE.label} no longer reads DAI_DAI_SPOTIFY_NO1_DAYS`).toBe(true);
    expect(/\b\d+ days (?:as|at No\. 1)/.test(src), `${FIGURE.file} types a days figure`).toBe(false);
  });

  it("the record's streak rows read the figure from the constant", () => {
    const notDerived = ROWS.filter((h) => !h.re.test(read(h.file)));
    expect(notDerived.map((h) => `${h.file} — ${h.label}`), "a streak row types the days figure again").toEqual([]);
    // The rows as the redesign first shipped them (PR 350, 26 Sep 2026).
    const SHIPPED = [
      '{ v: "37 days", l: `in total at No. 1 on Spotify',
      '{ v: "37 días", l: `en total en el número 1',
    ];
    const typed = /\{ v: "\d+ (?:days|días)", l: `(?:in total at No\. 1 on Spotify|en total en el número 1)/;
    for (const line of SHIPPED) expect(typed.test(line), `the check no longer catches: ${line}`).toBe(true);
    for (const h of ROWS) expect(typed.test(read(h.file)), `${h.file} types the days figure`).toBe(false);
  });

  it("the two home layouts read the figure from the constant, in the past tense", () => {
    const notDerived = DERIVED.filter((h) => !h.re.test(read(h.file)));
    expect(notDerived.map((h) => `${h.file} — ${h.label}`), "a home layout types the days figure again").toEqual([]);
    // The desktop sentence that shipped until 24 Sep 2026: a typed figure, and
    // "has now spent" about a run that closed on 22 August.
    const SHIPPED = "Their anthem has now spent 37 days as the most-streamed song on Earth — back on top in August.";
    const typed = /\d+ days as the most-streamed song on Earth/;
    const presentPerfect = /has now spent/;
    expect(typed.test(SHIPPED) && presentPerfect.test(SHIPPED), "the checks below no longer catch the shipped line").toBe(true);
    for (const h of DERIVED) {
      const src = read(h.file);
      expect(typed.test(src), `${h.file} types the figure`).toBe(false);
      expect(presentPerfect.test(src), `${h.file} writes the closed run as ongoing`).toBe(false);
    }
  });

  it("keeps the English share card's cache id tied to the figure", () => {
    // The days figure is not one of `stats`, so if the id stops folding it in,
    // the card freezes at whatever number was live when a scraper first cached
    // it: the page updates, the link preview does not, and nothing fails.
    // The id derivation moved to ./ogId on 8 Sep 2026, so the page's MusicEvent
    // JSON-LD could cite the same card URL. Check it where it now lives, and
    // check the route still uses that id rather than computing its own.
    const id = read("app/dai-dai/ogId.ts");
    expect(id, "the share card's id no longer folds in DAYS_AT_NO1, so its preview can go stale").toMatch(
      /ogId\(\[[^\]]*DAYS_AT_NO1[^\]]*\]\.join/,
    );
    const og = read("app/dai-dai/opengraph-image.tsx");
    expect(og, "the share-card route must use the shared id, not one of its own").toMatch(
      /generateImageMetadata\s*=\s*\(\)\s*=>\s*\[\{\s*id:\s*daiDaiOgId/,
    );
  });
});

// The iTunes sweep: how many countries' iTunes songs chart "Dai Dai" has led.
// Prose only until the redesign of 26 Sep 2026 gave it a row of its own in the
// world rankings list, where it was typed as the row's value ("73") and again
// in its sentence, in both editions. It has one home now,
// DAI_DAI_ITUNES_NO1_COUNTRIES, and the anchor that is not that constant is
// the site's own dated log: the page may run ahead of updates.ts, never behind.
describe("the iTunes countries figure has one home", () => {
  const ROWS: Home[] = [
    { file: "app/dai-dai/page.tsx", label: "EN world-rankings row", re: /\{ v: `\$\{DAI_DAI_ITUNES_NO1_COUNTRIES\}`, l: `iTunes song chart in \$\{DAI_DAI_ITUNES_NO1_COUNTRIES\} countries/ },
    { file: "app/dai-dai/es/page.tsx", label: "ES world-rankings row", re: /\{ v: `\$\{DAI_DAI_ITUNES_NO1_COUNTRIES\}`, l: `en la lista de canciones de iTunes en \$\{DAI_DAI_ITUNES_NO1_COUNTRIES\} países/ },
  ];
  // The rows as PR 350 first shipped them, value and sentence both typed.
  const SHIPPED = [
    '{ v: "73", l: "iTunes song chart in 73 countries — the US, UK, Canada',
    '{ v: "73", l: "en la lista de canciones de iTunes en 73 países — Estados Unidos',
  ];
  const typed = /iTunes song chart in \d+ countries|canciones de iTunes en \d+ países|\{ v: "\d+", l: ["`](?:iTunes song chart|en la lista de canciones de iTunes)/;

  it("both editions read the value and the sentence from the constant", () => {
    const notDerived = ROWS.filter((h) => !h.re.test(read(h.file)));
    expect(notDerived.map((h) => `${h.file} — ${h.label}`), "a row types the iTunes figure again").toEqual([]);
    for (const line of SHIPPED) expect(typed.test(line), `the check no longer catches: ${line}`).toBe(true);
    for (const h of ROWS) expect(typed.test(read(h.file)), `${h.file} types the iTunes figure`).toBe(false);
  });

  it("never falls behind the updates feed's own statement of it", () => {
    const FEED = [/iTunes sweep reaches (\d+) countries/, /iTunes in (\d+) countries/, /led the iTunes songs chart in (\d+) territories/];
    const said = updates.flatMap((u) =>
      FEED.flatMap((re) => {
        const m = u.text.match(re);
        return m ? [{ n: Number(m[1]), date: u.date }] : [];
      }),
    );
    expect(said.length, "no updates.ts entry states the iTunes countries figure in a shape this test reads").toBeGreaterThan(0);
    const newest = said.reduce((a, b) => (b.date > a.date ? b : a));
    const most = Math.max(...said.map((s) => s.n));
    expect(DAI_DAI_ITUNES_NO1_COUNTRIES, `updates.ts already published ${most}`).toBeGreaterThanOrEqual(most);
    expect(DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF >= newest.date, "the feed states the figure after the constant's reading date").toBe(true);
  });
});

// The record's ruled lists typed seven values into both editions until
// 26 Sep 2026. Each has one home now in app/data/daiDai.ts, and each is held
// here to the line that states it: the site's own dated log, which is the
// external anchor (a constant checked against itself balances for any value).
// "equal" where the log states the figure; "floor" where the page published a
// later count the log never recorded (it may run ahead, never behind — the
// rule tests/streakParity.test.ts applies to the day counts); and "not better
// than" for a ranking position the log has a better reading of.
describe("the record's ruled-list values each read a constant held to its line", () => {
  const ROWS: { name: string; en: RegExp; es: RegExp }[] = [
    { name: "DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS", en: /v: `\$\{DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS\} weeks`/, es: /v: `\$\{DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS\} semanas`/ },
    { name: "DAI_DAI_APPLE_EUROPE_NO1_DAYS", en: /v: `\$\{DAI_DAI_APPLE_EUROPE_NO1_DAYS\} days`/, es: /v: `\$\{DAI_DAI_APPLE_EUROPE_NO1_DAYS\} días`/ },
    { name: "DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS", en: /v: `\$\{DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS\} days`/, es: /v: `\$\{DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS\} días`/ },
    { name: "DAI_DAI_UWC_NO1_WEEKS", en: /v: `\$\{DAI_DAI_UWC_NO1_WEEKS\} weeks`/, es: /v: `\$\{DAI_DAI_UWC_NO1_WEEKS\} semanas`/ },
    { name: "DAI_DAI_DEEZER_WORLDWIDE_PEAK", en: /v: `No\. \$\{DAI_DAI_DEEZER_WORLDWIDE_PEAK\}`/, es: /v: `N\.º \$\{DAI_DAI_DEEZER_WORLDWIDE_PEAK\}`/ },
    { name: "DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS", en: /v: `\$\{DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS\} days`/, es: /v: `\$\{DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS\} días`/ },
    { name: "BURNA_GLOBAL_DIGITAL_ARTIST_POSITION", en: /v: `No\. \$\{BURNA_GLOBAL_DIGITAL_ARTIST_POSITION\}`/, es: /v: `N\.º \$\{BURNA_GLOBAL_DIGITAL_ARTIST_POSITION\}`/ },
  ];
  // The rows as PR 350 shipped them (c1e3a9aa), both editions.
  const SHIPPED = [
    '{ v: "6 weeks", l: "at No. 1 on Spotify\'s Global Weekly Top',
    '{ v: "58 days", l: "at No. 1 on Apple Music\'s European songs',
    '{ v: "40 days", l: "at No. 1 on the worldwide iTunes songs c',
    '{ v: "13 weeks", l: "at No. 1 on Mediatraffic\'s United World',
    '{ v: "No. 13", l: "Deezer Worldwide Top 100 — its peak, rea',
    '{ v: "29 days", l: "at No. 1 on Spotify\'s Global Music Video',
    '{ v: "No. 14", l: "Burna Boy\'s position on the Global Digit',
    '{ v: "6 semanas", l: "en el número 1 de la lista Global Weekly',
    '{ v: "58 días", l: "en el número 1 de la lista europea de Ap',
    '{ v: "40 días", l: "en el número 1 de la lista mundial de ca',
    '{ v: "13 semanas", l: "en el número 1 del United World Chart de',
    '{ v: "N.º 13", l: "en el Deezer Worldwide Top 100 — su pico',
    '{ v: "29 días", l: "en el número 1 de la lista Global Music',
    '{ v: "N.º 14", l: "la posición de Burna Boy en el ranking G',
  ];
  const typed = /\{ v: "(?:\d+ (?:weeks|days|semanas|días)|No\. \d+|N\.º \d+)", l: "/;

  it("both editions read all seven from the constants, and type none of them", () => {
    const EN = read("app/dai-dai/page.tsx");
    const ES = read("app/dai-dai/es/page.tsx");
    for (const r of ROWS) {
      expect(r.en.test(EN), `EN row for ${r.name}`).toBe(true);
      expect(r.es.test(ES), `ES row for ${r.name}`).toBe(true);
    }
    for (const line of SHIPPED) expect(typed.test(line), `the check no longer catches: ${line}`).toBe(true);
    expect(EN.match(new RegExp(typed, "g")) ?? [], "EN types a ruled-list value").toEqual([]);
    expect(ES.match(new RegExp(typed, "g")) ?? [], "ES types a ruled-list value").toEqual([]);
  });

  /** Every number `re` reads out of the feed, with its entry's date. */
  const said = (re: RegExp) =>
    updates.flatMap((u) => [...u.text.matchAll(new RegExp(re, "g"))].map((m) => ({ n: Number(m[1]), date: u.date })));
  const newest = (hits: { n: number; date: string }[]) => hits.reduce((a, b) => (b.date >= a.date ? b : a));

  it.each([
    ["DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS", DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS, /(\d+)th week atop the weekly list/, "equal"],
    ["DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS", DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS, /reached a (\d+)th on the worldwide iTunes songs chart/, "equal"],
    ["DAI_DAI_UWC_NO1_WEEKS", DAI_DAI_UWC_NO1_WEEKS, /A (\d+)th week atop Mediatraffic[’']s United World Chart/, "equal"],
    ["DAI_DAI_DEEZER_WORLDWIDE_PEAK", DAI_DAI_DEEZER_WORLDWIDE_PEAK, /new Deezer Worldwide Top 100 peak of No\. (\d+)/, "equal"],
    ["DAI_DAI_APPLE_EUROPE_NO1_DAYS", DAI_DAI_APPLE_EUROPE_NO1_DAYS, /at No\. 1 for (\d+) days, closing on two full months/, "floor"],
    ["DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS", DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS, /A (\d+)th day at the top of Spotify[’']s Global Music Video chart/, "floor"],
    ["BURNA_GLOBAL_DIGITAL_ARTIST_POSITION", BURNA_GLOBAL_DIGITAL_ARTIST_POSITION, /new peak on the Global Digital Artist ranking: Burna Boy lifts two places to No\. (\d+)/, "not better"],
  ] as const)("%s against its line in updates.ts", (name, value, re, rel) => {
    const hits = said(re);
    expect(hits.length, `no updates.ts entry states ${name} in the shape its comment names`).toBeGreaterThan(0);
    const line = newest(hits);
    if (rel === "equal") expect(value, `updates.ts (${line.date}) states ${line.n}`).toBe(line.n);
    // Runs ahead of the log by what the page published after it; never behind.
    else if (rel === "floor") expect(value, `updates.ts (${line.date}) already published ${line.n}`).toBeGreaterThanOrEqual(line.n);
    // A position "during the run" can be no better than the peak the log records.
    else expect(value, `updates.ts (${line.date}) logs a peak of No. ${line.n}`).toBeGreaterThanOrEqual(line.n);
  });

  it("negative control: the checks fail the values they are meant to catch", () => {
    // A weekly count one behind the log, and a Deezer peak the log never had.
    const weekly = newest(said(/(\d+)th week atop the weekly list/));
    expect(5).not.toBe(weekly.n);
    expect(newest(said(/new Deezer Worldwide Top 100 peak of No\. (\d+)/)).n).not.toBe(14);
    // Apple Europe at the log's 56th would be behind it.
    expect(56).toBeLessThan(newest(said(/at No\. 1 for (\d+) days, closing on two full months/)).n);
  });
});
