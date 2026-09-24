import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Prose that reads wrong once rendered, although every word in the source is
 * right. Found by the full-site debug of 24 Sep 2026; the snippets used as
 * negative controls below are the source lines that shipped.
 */

const ROOT = process.cwd();
const read = (p: string) => readFileSync(join(ROOT, p), "utf8");

function tsxFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) tsxFiles(p, out);
    else if (e.endsWith(".tsx")) out.push(p);
  }
  return out;
}

/**
 * JSX drops whitespace that contains a line break. A closing inline tag at the
 * end of a line followed by a line of text renders the two jammed together:
 * "…at its current tier.Gold → Platinum…" on /methodology.
 */
const INLINE_CLOSE_AT_EOL = /<\/(strong|em|b|i|a|Link|span|abbr|code)>\s*$/;
const TEXT_LINE = /^\s*[A-Za-z0-9“"(]/;
function jammed(src: string): string[] {
  const lines = src.split("\n");
  const hits: string[] = [];
  for (let i = 0; i + 1 < lines.length; i++) {
    if (INLINE_CLOSE_AT_EOL.test(lines[i]) && TEXT_LINE.test(lines[i + 1])) hits.push(`${i + 1}: ${lines[i].trim()}`);
  }
  return hits;
}

describe("no inline tag runs into the text on the next line", () => {
  it("catches the line /methodology shipped", () => {
    const shipped = [
      "            <strong>One plaque per release per country, at its current tier.</strong>",
      "            Gold → Platinum → 2× Platinum is the same sales recertified, not three",
    ].join("\n");
    expect(jammed(shipped)).toHaveLength(1);
  });

  it("finds none anywhere under app/", () => {
    const hits = tsxFiles(join(ROOT, "app")).flatMap((f) => jammed(readFileSync(f, "utf8")).map((h) => `${f.slice(ROOT.length + 1)}:${h}`));
    expect(hits).toEqual([]);
  });

  it("keeps the space after the colon on /records/visualized", () => {
    // "…higher-priced rooms sit above the line:London Stadium turned ~59,000…"
    expect(read("app/records/visualized/page.tsx")).toContain('sit above the line:{" "}');
  });
});

describe("figures print the way the rest of the site prints them", () => {
  it("the Afrobeats share card groups its plaque total", () => {
    // The footer read "1238 plaques"; every other surface says 1,238.
    const src = read("app/afrobeats/opengraph-image.tsx");
    expect(src).toContain('(boardTotal + totalAwards()).toLocaleString("en-US")} plaques');
  });

  it("the phone Tours lede keeps tours and countries performed in apart", () => {
    // "Six tours across 57 countries" — the 57 is every country he has played,
    // festivals and one-offs included; the six tours' own dates cover far fewer.
    const src = read("app/components/MobileTours.tsx");
    expect(src).not.toMatch(/tours across \{countryCount\} countries/);
    expect(src).toContain("tours, and live shows in {countryCount} countries");
  });

  it("the tours page is not stamped a month older than its data", () => {
    // The ranking changed on 17 Sep 2026; the page said "as of August 2026" twice.
    expect(read("app/records/tours/page.tsx")).not.toMatch(/as of\s+August\s+2026/);
  });
});
