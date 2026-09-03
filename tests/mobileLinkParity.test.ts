import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Routes the desktop layout offers and the mobile layout did not.
 *
 * Every page on this site renders both layouts into the same document — the
 * desktop half inside a `.desktopOnly` div, the mobile screen beside it. A link
 * added to one half is therefore invisibly absent from the other: the markup is
 * valid, the href is spelled correctly, and on a laptop it works. Four of them
 * had drifted, and each was a dead end rather than a cosmetic gap — the full
 * timeline, the definitions the analysis argues from, and the licence that is
 * the whole condition of using the API.
 *
 * These are asserted as text rather than by rendering because three of the four
 * are static markup, and the fourth (analysis) is a prop built in the page and
 * passed down — there is no single component to render that would see them all.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

/** The mobile half of a page: everything the `.desktopOnly` wrapper excludes. */
const MOBILE_ABOUT = read("app/components/MobileAbout.tsx");
const MOBILE_API = read("app/components/MobileApi.tsx");
const ANALYSIS_PAGE = read("app/analysis/page.tsx");

describe("routes the mobile layout was missing", () => {
  it("/about's mobile screen links the full timeline", () => {
    // Both layouts render the same abridged nine milestones; only the desktop
    // column said where the other 40-odd live.
    expect(MOBILE_ABOUT).toMatch(/href="\/timeline"/);
  });

  it("/analysis's mobile 'How to check this' links the methodology", () => {
    // The note is built in the page and handed to MobileAnalysis as checkNote,
    // so it is asserted on that prop block, not on the component.
    const checkNote = ANALYSIS_PAGE.match(/checkNote=\{[\s\S]*?\n {8}\}/)?.[0] ?? "";
    expect(checkNote, "checkNote prop block not found — the regex is stale").not.toBe("");
    expect(checkNote).toMatch(/href="\/methodology"/);
    // The /api link was already there; pinned so a rewrite can't drop it.
    expect(checkNote).toMatch(/href="\/api"/);
  });

  it("/api's mobile licence block links the licence, methodology and updates", () => {
    // "CC BY 4.0" as plain text is not a licence a reader can read. The other
    // two are the desktop block's own onward routes.
    expect(MOBILE_API).toMatch(/href="https:\/\/creativecommons\.org\/licenses\/by\/4\.0\/"/);
    expect(MOBILE_API).toMatch(/href="\/methodology"/);
    expect(MOBILE_API).toMatch(/href="\/updates"/);
  });

  it("/api's mobile endpoint links open in a new tab, as the desktop list does", () => {
    // Without target/rel a tap replaced the documentation with raw JSON and
    // left nothing but Back.
    const endpointLink =
      MOBILE_API.match(/\{endpoints\.map\(\(e\) => \([\s\S]*?\n {10}>/)?.[0] ?? "";
    expect(endpointLink, "endpoint anchor not found — the regex is stale").not.toBe("");
    expect(endpointLink).toMatch(/target="_blank"/);
    expect(endpointLink).toMatch(/rel="noreferrer"/);
  });
});
