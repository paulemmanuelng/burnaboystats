import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { DROPPED, ENDED, HOW_IT_WORKS, LEDE, PRIZE, RULES } from "../app/lib/naija66/copy";
import { wordsText } from "../app/components/Naija66Words";
import { metadata } from "../app/naija66/page";
import { alt as ogAlt } from "../app/naija66/opengraph-image";
import { searchIndex } from "../app/lib/searchIndex";

/**
 * Naija @ 66's words, held to Paul's rulings of 30 Sep – 2 Oct 2026.
 *
 * THE PRIZE is a month of Spotify Premium Nigeria, worth ₦3,000, and it is
 * said in one place: lib/naija66/copy.ts PRIZE. Every other hunt file takes it
 * from there, so no file but copy.ts may spell a prize out — and the one line
 * that cannot import it (the search index, which imports no hunt code) is
 * held to it here.
 *
 * NO CLUES. Nothing in the hunt is ever called a clue.
 *
 * THE HUNT HAS ENDED (2 Oct 2026, midnight WAT): every line is past tense,
 * with no call to tap, watch or claim — on the page, in its metadata, on its
 * share card and in its search doc.
 */

const ROOT = process.cwd();
const walk = (dir: string, out: string[] = []): string[] => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};
const rel = (p: string) => p.slice(ROOT.length + 1);

/** Every file the hunt is made of. */
const HUNT_FILES = [
  "app/data/naija66.ts",
  ...walk(join(ROOT, "app/lib/naija66")).map(rel),
  ...walk(join(ROOT, "app/naija66")).map(rel),
  ...readdirSync(join(ROOT, "app/components"))
    .filter((f) => /^(Naija66|MobileNaija66|naija66|mobileNaija66)/.test(f))
    .map((f) => `app/components/${f}`),
];
const COPY_FILE = "app/lib/naija66/copy.ts";
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");

/** A prize spelled out: Premium, the naira, or "a month of …". */
const PRIZE_WORDS = /Premium|₦|\bmonths? of\b/;
/** "clue" or "clues" — but not "Clueless", a song on the Afrobeats board. */
const CLUE = /\bclues?\b/i;
/** A live hunt's words: a call to play, or a time a code "appears". */
const LIVE_WORDS =
  /tap the right word first|tap one first|codes appear|watch the drops|claim your premium|how to win|the code is yours|where to look next|as soon as you get it|be the first to|\band win\b|, win\b|wins;/i;

/** The search doc for /naija66: typed there, so held to the constant here. */
const searchDoc = searchIndex.find((d) => d.path === "/naija66")!;

/** Everything the hunt still says, as one block of text. */
const allWords = () =>
  [
    LEDE,
    ENDED,
    DROPPED,
    ...RULES,
    ...HOW_IT_WORKS.flatMap((s) => [s.title, wordsText(s.words)]),
    String(metadata.description),
    String((metadata.openGraph as { description?: string }).description),
    read("app/naija66/opengraph-image.tsx"),
    ogAlt,
    searchDoc.description,
  ].join("\n");

describe("the prize, said once", () => {
  it("is a month of Spotify Premium Nigeria, worth ₦3,000", () => {
    expect(PRIZE).toEqual({
      long: "a month of Spotify Premium Nigeria (₦3,000)",
      board: "Spotify Premium Nigeria · ₦3,000",
    });
  });

  it("walks every hunt file, so the checks below are not vacuous", () => {
    for (const f of [
      COPY_FILE,
      "app/naija66/page.tsx",
      "app/naija66/opengraph-image.tsx",
      "app/components/Naija66Play.tsx",
      "app/components/MobileNaija66.tsx",
    ])
      expect(HUNT_FILES).toContain(f);
  });

  it("is spelled out in copy.ts only — every other hunt file takes it from there", () => {
    const spelled = HUNT_FILES.filter((f) => f !== COPY_FILE && PRIZE_WORDS.test(read(f)));
    expect(spelled).toEqual([]);
    // …and the files that print it do take it from there.
    for (const f of ["app/naija66/page.tsx", "app/naija66/opengraph-image.tsx", "app/components/Naija66Play.tsx"])
      expect(read(f), f).toMatch(/\bPRIZE\.(long|board)\b/);
  });

  it("reaches the page's metadata, its share card, the hero, the rules, the steps and the search index", () => {
    expect(metadata.description).toContain(PRIZE.long);
    expect((metadata.openGraph as { description?: string }).description).toContain(PRIZE.long);
    expect(read("app/naija66/opengraph-image.tsx")).toContain("${PRIZE.long}");
    expect(LEDE).toContain(PRIZE.long);
    expect(RULES).toContain(`Each prize was ${PRIZE.long}.`);
    expect(wordsText(HOW_IT_WORKS[3].words)).toContain(PRIZE.long);
    expect(searchDoc.description).toContain(PRIZE.long);
  });

  it("leaves no old prize wording anywhere on the site", () => {
    const old = /\b(1|one|five) months? of (Spotify )?Premium\b|month of Premium\b/i;
    const found = walk(join(ROOT, "app"))
      .filter((f) => /\.(tsx?|css|json|md)$/.test(f))
      .filter((f) => old.test(readFileSync(f, "utf8")))
      .map(rel);
    expect(found).toEqual([]);
  });

  it("negative control: a planted prize line fails both checks", () => {
    const planted = `${read("app/components/Naija66Play.tsx")}\nconst x = "1 month of Spotify Premium";`;
    expect(PRIZE_WORDS.test(planted)).toBe(true);
    expect(/\b(1|one|five) months? of (Spotify )?Premium\b/i.test(planted)).toBe(true);
    expect(PRIZE_WORDS.test(read("app/components/Naija66Play.tsx"))).toBe(false);
  });
});

describe("no clues", () => {
  it("in any hunt file, its metadata, its share card or its search doc", () => {
    expect(HUNT_FILES.filter((f) => CLUE.test(read(f)))).toEqual([]);
    expect(JSON.stringify(metadata)).not.toMatch(CLUE);
    expect(ogAlt).not.toMatch(CLUE);
    expect(JSON.stringify(searchDoc)).not.toMatch(CLUE);
  });

  it("negative control: the line the page used to print is caught, and Clueless is not", () => {
    expect(CLUE.test("Too slow — prize 1 has already been claimed. Watch X for the next clue.")).toBe(true);
    expect(CLUE.test("Clues from @paulemmanuelng ↗")).toBe(true);
    expect(CLUE.test("Clueless")).toBe(false);
  });
});

describe("the hunt has ended", () => {
  it("says so, in the past tense, in the words it ships", () => {
    expect(ENDED).toBe("The hunt has ended.");
    expect(DROPPED).toBe("Codes dropped at 9am, 12pm, 3pm, 6pm and 9pm WAT on 1 October.");
    expect(HOW_IT_WORKS.map((s) => wordsText(s.words))).toEqual([
      "Players followed @paulemmanuelng on X for where to look.",
      "At each drop — 9am, 12pm, 3pm, 6pm and 9pm WAT on 1 October — a code hid in a word on one page of the site.",
      "The first tap on the right word won the code. After that it showed as claimed.",
      "Winners DMed their code to @paulemmanuelng on X for a month of Spotify Premium Nigeria (₦3,000).",
    ]);
    expect(metadata.description).toBe(
      "Nigeria turned 66 on 1 October 2026. Five codes hid in words on Burna Boy Stats, each worth a month of Spotify Premium Nigeria (₦3,000). The hunt has ended.",
    );
    expect(searchDoc.description).toContain("The hunt has ended");
    expect(read("app/naija66/opengraph-image.tsx")).toContain("The hunt has ended.");
  });

  it("carries no call to play anywhere: page copy, metadata, share card or search doc", () => {
    expect(allWords()).not.toMatch(LIVE_WORDS);
    for (const s of HOW_IT_WORKS) expect(s.words.every((w) => typeof w === "string"), s.title).toBe(true);
  });

  it("negative control: every live line that shipped is caught", () => {
    // Literal lines from origin/main before the cleanup: copy.ts, page.tsx's
    // metadata, the share card and the search doc.
    for (const shipped of [
      "At each drop (9am, 12pm, 3pm, 6pm, 9pm WAT) a code hides in a word on one page of the site. Follow @paulemmanuelng on X for where to look. Tap the right word first and the code is yours — after that it shows as claimed. DM it to @paulemmanuelng as soon as you get it.",
      "Watch the drops",
      "Claim your Premium",
      "Where to look next: @paulemmanuelng on X",
      "Nigeria turns 66 on 1 October. Five codes hide in words on Burna Boy Stats — tap one first and win a month of Spotify Premium Nigeria (₦3,000). Free to play.",
      "Five codes hidden in words on Burna Boy Stats on 1 October. Be the first to tap the right word and win a month of Spotify Premium Nigeria (₦3,000).",
      "Five codes hidden on pages of the site for Independence Day — find one first, win ${PRIZE.long}",
      "Nigeria at 66: five codes hidden on pages of the site on 1 October, each worth a month of Spotify Premium Nigeria (₦3,000) — the first tap on the right word wins; the rules and the board.",
    ]) {
      expect(LIVE_WORDS.test(shipped), shipped).toBe(true);
    }
  });
});
