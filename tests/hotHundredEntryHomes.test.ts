import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { join } from "node:path";
import {
  statBoxes,
  BURNA_HOT_100_ENTRIES,
  BURNA_HOT_100_ENTRIES_WORD,
} from "../app/data/africasBiggest";
import { firstGroups } from "../app/data/firsts";
import { faqs } from "../app/faq/page";
import { stats as byTheNumbers } from "../app/records/by-the-numbers/page";
import { pageFaqs } from "../app/records/africas-biggest/page";

// His career Billboard Hot 100 entry count is published in eight places across
// five files, in three spellings — "9", "nine" and "Nine" — and until this test
// nothing held them together. Every one of them was a hand-typed literal, so
// the tenth entry would have to be found and changed eight times by grep, and
// a miss would show as two answers to one question on pages that link to each
// other (the FAQ and /records/africas-biggest answer nearly the same question).
//
// Like the days-at-No.1 homes test, this does NOT assert the value 9 — that
// would just make the test a ninth home to remember. It asserts two things:
// every home still states the figure and they agree, and no home types it,
// because a single constant is what actually stops the drift.

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const num = String(BURNA_HOT_100_ENTRIES);
const word = BURNA_HOT_100_ENTRIES_WORD;

/** Every published statement of the figure, read from the rendered data. */
const HOMES: { where: string; text: string; spelling: "numeral" | "word" }[] = [
  ...(() => {
    const board = statBoxes.find((b) => b.id === "most-hot-100-entries")!;
    const burna = board.entries!.find((e) => e.name === "Burna Boy")!;
    return [
      { where: "africasBiggest — leaderboard row", text: burna.value!, spelling: "numeral" as const },
      { where: "africasBiggest — leaderboard note", text: board.note!, spelling: "numeral" as const },
      { where: "africasBiggest — leaderboard source", text: board.source, spelling: "numeral" as const },
    ];
  })(),
  {
    where: "africasBiggest — Hot 100 peak board note",
    text: statBoxes.find((b) => b.id === "billboard-hot-100-peak")!.note!,
    spelling: "word",
  },
  {
    where: "firsts — most Hot 100 entries",
    text: firstGroups
      .flatMap((g) => g.items)
      .find((f) => f.title === "Most Billboard Hot 100 entries by an African artist")!.text,
    spelling: "word",
  },
  {
    where: "by-the-numbers — Hot 100 entries stat",
    text: byTheNumbers.find((s) => s.label === "Billboard Hot 100 entries")!.num,
    spelling: "numeral",
  },
  {
    where: "FAQ — how many Hot 100 entries",
    text: faqs.find((f) => f.q === "How many Billboard Hot 100 entries does Burna Boy have?")!.a,
    spelling: "numeral",
  },
  {
    where: "africas-biggest page — most entries Q&A",
    text: pageFaqs.find((f) => f.q === "Which African artist has the most Billboard Hot 100 entries?")!.a,
    spelling: "word",
  },
];

// The files allowed to state it. A new one has to be added here — and to HOMES
// above — deliberately, which is the tripwire the old hand-typed spread had no
// version of.
const PUBLISHING_FILES = [
  "app/data/africasBiggest.ts",
  "app/data/firsts.ts",
  "app/faq/page.tsx",
  "app/records/africas-biggest/page.tsx",
  "app/records/by-the-numbers/page.tsx",
];

/** Files that name the record but state no number, so they cannot drift. */
const MENTIONS_WITHOUT_A_COUNT = ["app/data/updates.ts"];

describe("the Billboard Hot 100 entry count agrees with itself everywhere", () => {
  it("is still stated in every home the site publishes it in", () => {
    // Absence is the dangerous case, not a loud one: a reworded sentence drops
    // silently out of the comparison and then drifts on its own.
    const missing = HOMES.filter((h) =>
      h.spelling === "numeral"
        ? !h.text.includes(num)
        : !h.text.toLowerCase().includes(word.toLowerCase())
    );
    expect(
      missing.map((h) => `${h.where} — "${h.text.slice(0, 60)}…"`),
      "a home no longer states the figure: either it was reworded (update this list) or it drifted to a different number"
    ).toEqual([]);
  });

  it("takes the figure from one constant rather than typing it", () => {
    // The property that actually prevents drift. Every publishing file must
    // read BURNA_HOT_100_ENTRIES (or its word form) from data/africasBiggest.
    const notDerived = PUBLISHING_FILES.filter(
      (f) => !/BURNA_HOT_100_ENTRIES(_WORD)?\b/.test(read(f))
    );
    expect(
      notDerived,
      "this file states the Hot 100 entry count without importing it — that is the eight-copies-by-hand state this test exists to prevent"
    ).toEqual([]);
  });

  it("has no ninth home quoting a count of its own", () => {
    // A new file stating the figure is exactly how it reached eight copies.
    // Any file that talks about Hot 100 entries either takes the number from
    // the constant, or names the record without stating a number at all.
    const mentions = execSync('grep -rl "Hot 100 entries" app', { encoding: "utf8" })
      .trim()
      .split("\n")
      .sort();
    const unaccounted = mentions.filter(
      (f) => !PUBLISHING_FILES.includes(f) && !MENTIONS_WITHOUT_A_COUNT.includes(f)
    );
    expect(
      unaccounted,
      "a new file talks about his Hot 100 entries: import BURNA_HOT_100_ENTRIES and add it to PUBLISHING_FILES + HOMES, or add it here if it states no count"
    ).toEqual([]);
  });
});
