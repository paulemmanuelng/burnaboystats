import { describe, it, expect } from "vitest";
import { updates } from "../app/data/updates";

/**
 * An updates entry is a log line, not an article.
 *
 * July 2026's entries had a median of 177 characters and a longest of 298;
 * by mid-September the median had crept to 499 and the longest to 935,
 * carrying method, correction history and comparisons that belong on the page
 * the entry links to. Paul, 16 Sep 2026: "the details you put in per update
 * seems way too long". The fifty entries over 300 were rewritten that day; this
 * is the cap that keeps the next fifty from growing back. The band on the home
 * page, the phone feed and the Saturday digest all print these whole.
 */
const CAP = 300;

describe("updates entries stay log lines", () => {
  it(`no entry runs past ${CAP} characters`, () => {
    const long = updates.filter((u) => u.text.length > CAP).map((u) => `${u.date} (${u.text.length}): ${u.text.slice(0, 70)}…`);
    expect(long, "shorten the entry — the detail goes on the page it links to").toEqual([]);
  });
});
