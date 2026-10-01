import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { CODE1_PAGE, HOW_IT_WORKS, PRIZE, RULES, WINNER_KEEP_LINE, WINNER_LINE } from "../app/lib/naija66/copy";
import { wordsText } from "../app/components/Naija66Words";
import { metadata } from "../app/naija66/page";
import { alt as ogAlt } from "../app/naija66/opengraph-image";
import { searchIndex } from "../app/lib/searchIndex";

/**
 * Naija @ 66's words, held to Paul's two rulings of 30 Sep – 1 Oct 2026.
 *
 * THE PRIZE is a month of Spotify Premium Nigeria, worth ₦3,000, and it is
 * said in one place: lib/naija66/copy.ts PRIZE. Every other hunt file takes it
 * from there, so no file but copy.ts may spell a prize out — and the one line
 * that cannot import it (the search index, which imports no hunt code) is
 * held to it here.
 *
 * NO CLUES. Nothing in the hunt is ever called a clue: five codes are hidden
 * on pages of the site, code 1's page is named, and X says where to look for
 * the rest.
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
  ...walk(join(ROOT, "app/api/naija66")).map(rel),
  ...readdirSync(join(ROOT, "app/components"))
    .filter((f) => /^(Naija66|MobileNaija66|HuntKeySlot|naija66|mobileNaija66|huntKeySlot)/.test(f))
    .map((f) => `app/components/${f}`),
];
const COPY_FILE = "app/lib/naija66/copy.ts";
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");

/** A prize spelled out: Premium, the naira, or "a month of …". */
const PRIZE_WORDS = /Premium|₦|\bmonths? of\b/;
/** "clue" or "clues" — but not "Clueless", a song on the Afrobeats board. */
const CLUE = /\bclues?\b/i;

/** The search doc for /naija66: typed there, so held to the constant here. */
const searchDoc = searchIndex.find((d) => d.path === "/naija66")!;

describe("the prize, said once", () => {
  it("is a month of Spotify Premium Nigeria, worth ₦3,000", () => {
    expect(PRIZE).toEqual({
      long: "a month of Spotify Premium Nigeria (₦3,000)",
      board: "Spotify Premium Nigeria · ₦3,000",
      banner: "five ₦3,000 Spotify Premium prizes",
    });
  });

  it("walks every hunt file, so the checks below are not vacuous", () => {
    for (const f of [
      COPY_FILE,
      "app/naija66/page.tsx",
      "app/naija66/opengraph-image.tsx",
      "app/components/Naija66Play.tsx",
      "app/components/Naija66BannerLive.tsx",
      "app/components/MobileNaija66.tsx",
      "app/components/HuntKeySlot.tsx",
      "app/api/naija66/claim/route.ts",
    ])
      expect(HUNT_FILES).toContain(f);
  });

  it("is spelled out in copy.ts only — every other hunt file takes it from there", () => {
    const spelled = HUNT_FILES.filter((f) => f !== COPY_FILE && PRIZE_WORDS.test(read(f)));
    expect(spelled).toEqual([]);
    // …and the files that print it do take it from there.
    for (const f of [
      "app/naija66/page.tsx",
      "app/naija66/opengraph-image.tsx",
      "app/components/Naija66Play.tsx",
      "app/components/Naija66BannerLive.tsx",
      "app/components/MobileNaija66.tsx",
    ])
      expect(read(f), f).toMatch(/\bPRIZE\.(long|board|banner)\b/);
  });

  it("reaches the page's metadata, its share card, the win card, the rules and the search index", () => {
    expect(metadata.description).toContain(PRIZE.long);
    expect((metadata.openGraph as { description?: string }).description).toContain(PRIZE.long);
    expect(read("app/naija66/opengraph-image.tsx")).toContain("${PRIZE.long}");
    expect(WINNER_LINE).toContain(PRIZE.long);
    expect(RULES).toContain(`Each prize is ${PRIZE.long}.`);
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

describe("where to look", () => {
  it("names code 1's page — and only its — by the page's own title, linked", () => {
    expect(CODE1_PAGE.href).toBe("/music/listeners");
    // The page's own title begins with the name the hunt gives it.
    expect(read("app/music/listeners/page.tsx")).toContain(`shareTitle: "${CODE1_PAGE.name} to Burna Boy"`);
    const step1 = HOW_IT_WORKS[0].words;
    expect(wordsText(step1)).toBe(
      "Code 1 appears at 9am WAT on the Where the World Listens page. For codes 2 to 5, follow @paulemmanuelng on X to find out where to look.",
    );
    expect(step1.filter((w) => typeof w !== "string")).toEqual([{ href: CODE1_PAGE.href, text: CODE1_PAGE.name }]);
    // Every other step is plain words: no other page is linked.
    for (const s of HOW_IT_WORKS.slice(1)) expect(s.words.every((w) => typeof w === "string")).toBe(true);
  });

  it("no hunt file but copy.ts types the named page's route", () => {
    expect(HUNT_FILES.filter((f) => f !== COPY_FILE && read(f).includes(CODE1_PAGE.href))).toEqual([]);
  });

  it("tells a winner not to post the code", () => {
    expect(WINNER_KEEP_LINE).toBe(
      "Only this browser can show this code. Screenshot it, but don't post it: the first DM with the code gets the prize.",
    );
  });
});
