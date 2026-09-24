import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { allFirsts } from "../app/data/firsts";
import { honours } from "../app/data/awards";
import { timelineEras } from "../app/data/timeline";
import { updates } from "../app/data/updates";

// Two UK claims the site printed wrong, corrected 24 Sep 2026 (RETRACTIONS #13):
//
//   * "First African artist to surpass 1 billion UK streams", dated 2024. The
//     BPI verified Wizkid past 1 billion when it presented his BRIT Billion on
//     30 Jul 2023, so a 2024 crossing was not first, and no body publishes
//     crossing dates to show an earlier one. Paul chose the provable line:
//     past 2 billion (Atlantic UK, Sep 2023) before his first plaque (Jun 2024).
//   * "Own It" topping the UK Singles Chart "in 2019". It reached No. 1 on the
//     chart dated 3 Jan 2020; its 2019 peak was No. 2.
//
// Each check is a function so the negative controls below can run it against
// the exact strings the site shipped.

const ONE_BILLION_FIRST = /first african artist to surpass (both )?1 billion/i;
const OWN_IT_2019 = /Own It.{0,80}topped the UK Singles Chart in 2019/;
const read = (p: string) => readFileSync(join(__dirname, "..", p), "utf8");

describe("UK streams and UK No. 1 firsts", () => {
  it("claims no 1-billion UK streams first anywhere it was printed", () => {
    for (const f of allFirsts) expect(`${f.title} ${f.text}`).not.toMatch(ONE_BILLION_FIRST);
    for (const h of honours) expect(h.note ?? "").not.toMatch(ONE_BILLION_FIRST);
    for (const u of updates) expect(u.text).not.toMatch(ONE_BILLION_FIRST);
    const faq = read("app/faq/page.tsx");
    expect(faq).not.toMatch(ONE_BILLION_FIRST);
    expect(faq).not.toMatch(/both 1 billion and 2 billion/);
  });

  it("dates each BRIT Billion plaque on its own row", () => {
    const brits = honours.filter((h) => h.title === "BRIT Billion Award");
    expect(brits).toHaveLength(2);
    const one = brits.find((h) => /1 billion/.test(h.note ?? ""));
    const two = brits.find((h) => /2 billion/.test(h.note ?? ""));
    expect(one?.note).toMatch(/London Stadium.*29 June 2024/);
    expect(two?.note).toMatch(/KOKO Camden.*15 July 2024/);
  });

  it("puts the 'Own It' No. 1 in January 2020, in the 2020–2021 era", () => {
    for (const f of allFirsts) expect(f.text).not.toMatch(OWN_IT_2019);
    const era = timelineEras.find((e) => e.entries.some((x) => /Own It/.test(x.title)));
    expect(era?.span).toBe("2020 – 2021");
    const at = era!.entries.findIndex((x) => /Own It/.test(x.title));
    expect(era!.entries[at].date).toBe("Jan 2020");
    expect(era!.entries.findIndex((x) => x.date === "Aug 2020")).toBeGreaterThan(at);
    expect(timelineEras.flatMap((e) => e.entries).filter((x) => /Own It/.test(x.title))).toHaveLength(1);
  });

  it("negative controls: the shipped strings fail these checks", () => {
    expect("First African artist to surpass 1 billion UK streams Awarded his first BRIT Billion plaque.").toMatch(ONE_BILLION_FIRST);
    expect(
      "“Own It” (with Stormzy & Ed Sheeran) topped the UK Singles Chart in 2019, and I Told Them… topped the UK Albums Chart in 2023"
    ).toMatch(OWN_IT_2019);
    expect(
      "and the first African artist to surpass both 1 billion and 2 billion UK streams."
    ).toMatch(ONE_BILLION_FIRST);
  });
});
