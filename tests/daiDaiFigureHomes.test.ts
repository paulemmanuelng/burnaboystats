import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// "Dai Dai"'s days-at-No.1 figure is the most-quoted number on this site and
// has by far the widest spread: fifteen statements across eight files, in two
// languages, including both share cards. On 22 Aug 2026 it moved from 35 to 36
// and every one of those fifteen had to be hunted down by grep — which is a
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

const HOMES: Home[] = [
  { file: "app/page.tsx", label: "home hero", re: /spent (\d+) days as the most-streamed song on Earth/ },
  { file: "app/components/MobileHome.tsx", label: "mobile home", re: /(\d+) days as the most-streamed song on Earth/ },
  { file: "app/components/DaiDaiStory.tsx", label: "story rail note", re: /(\d+) days as Earth/ },
  { file: "app/components/DaiDaiStory.tsx", label: "story rail body", re: /(\d+) days as the single most-streamed/ },
  { file: "app/faq/page.tsx", label: "FAQ answer", re: /spent (\d+) days at No\. 1/ },
  { file: "app/dai-dai/page.tsx", label: "EN page description", re: /anthem: (\d+) days as Earth/ },
  { file: "app/dai-dai/page.tsx", label: "EN hero card", re: /after (\d+) days as the most-streamed/ },
  { file: "app/dai-dai/page.tsx", label: "EN streak card", re: /\{ v: "(\d+) days", l: ["`]in total at No\. 1 on Spotify/ },
  { file: "app/dai-dai/opengraph-image.tsx", label: "EN share card", re: /const DAYS_AT_NO1 = (\d+);/ },
  { file: "app/dai-dai/es/opengraph-image.tsx", label: "ES share card", re: /— (\d+) días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES page description", re: /Burna Boy: (\d+) días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES story body", re: /la semanal: (\d+) días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES hero card", re: /tras (\d+) días como/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES streak card", re: /\{ v: "(\d+) días", l: ["`]en total en el número 1/ },
  { file: "app/dai-dai/es/page.tsx", label: "ES story rail note", re: /semanal · (\d+) días como/ },
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

  it("says the same number in all fifteen", () => {
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

  it("keeps the English share card's cache id tied to the figure", () => {
    // The days figure is not one of `stats`, so if the id stops folding it in,
    // the card freezes at whatever number was live when a scraper first cached
    // it: the page updates, the link preview does not, and nothing fails.
    const og = read("app/dai-dai/opengraph-image.tsx");
    expect(og, "the share card's id no longer folds in DAYS_AT_NO1, so its preview can go stale").toMatch(
      /ogId\(\[[^\]]*DAYS_AT_NO1[^\]]*\]\.join/,
    );
  });
});
