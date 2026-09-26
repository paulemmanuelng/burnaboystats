import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

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

// The story's two typed rail notes ("Daily & Weekly · 37 days as Earth's
// most-streamed song" and its Spanish twin) went with the redesign of 26 Sep
// 2026: chapter 04's figure is now the six-spell strip, and it prints the
// constant itself. Held here by name, like the home layouts above, and the
// spells it draws are held to the same constant in daiDaiStoryFigures.test.tsx.
const FIGURE: Home = {
  file: "app/components/DaiDaiFigures.tsx",
  label: "story chapter 04 figure",
  re: /\{DAI_DAI_SPOTIFY_NO1_DAYS\}/,
};

const HOMES: Home[] = [
  { file: "app/components/DaiDaiStory.tsx", label: "story rail body", re: /(\d+) days as the single most-streamed/ },
  { file: "app/data/faqs.ts", label: "FAQ answer", re: /spent (\d+) days at No\. 1/ },
  { file: "app/dai-dai/page.tsx", label: "EN page description", re: /anthem: (\d+) days as Earth/ },
  { file: "app/dai-dai/page.tsx", label: "EN hero card", re: /after (\d+) days as the most-streamed/ },
  { file: "app/dai-dai/page.tsx", label: "EN streak card", re: /\{ v: "(\d+) days", l: ["`]in total at No\. 1 on Spotify/ },
  // The figure's home is now app/data/daiDai.ts, beside its three siblings and
  // with a reading date of its own. ogId re-exports it for the share card's
  // cache id; the seventeen prose statements below still spell it out, and this
  // list is what holds them to the constant.
  { file: "app/data/daiDai.ts", label: "the constant", re: /export const DAI_DAI_SPOTIFY_NO1_DAYS = (\d+);/ },
  // Moved out of the route on 8 Sep 2026, so the ES page's Article JSON-LD
  // could cite the same card id and stop pointing at a bare 404.
  { file: "app/dai-dai/es/ogId.ts", label: "ES share card", re: /— (\d+) días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES page description", re: /Burna Boy: (\d+) días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES story body", re: /la semanal: (\d+) días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES hero card", re: /tras (\d+) días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES streak card", re: /\{ v: "(\d+) días", l: ["`]en total en el número 1/ },
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

  it("the story's chapter 04 figure prints the constant, not a typed copy", () => {
    const src = read(FIGURE.file);
    expect(FIGURE.re.test(src), `${FIGURE.file} — ${FIGURE.label} no longer reads DAI_DAI_SPOTIFY_NO1_DAYS`).toBe(true);
    expect(/\b\d+ days (?:as|at No\. 1)/.test(src), `${FIGURE.file} types a days figure`).toBe(false);
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
