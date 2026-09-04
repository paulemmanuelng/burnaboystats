import { describe, it, expect } from "vitest";
import { GET } from "../app/llms.txt/route";
import { faqs } from "../app/faq/page";
import { albums } from "../app/data/albums";

/**
 * /llms.txt is the site's map for answer engines, and its "Key pages" list is
 * the part that decides which page a model opens first. It shipped listing the
 * ledgers only — /certifications, /records/charts, /live-charts, /records,
 * /records/africas-biggest, /methodology, /analysis, /dai-dai — and omitting
 * every page that actually holds a quotable ANSWER:
 *
 *   /faq                     one self-contained answer per question, the most
 *                            liftable content on the site
 *   /about                   answers "burna boy real name", the site's single
 *                            biggest search query
 *   /records/by-the-numbers  the headline figures, each linked to its proof
 *   /music                   the discography — nothing pointed at it at all
 *
 * A model asked "how many albums does Burna Boy have" was handed a map to raw
 * chart tables and no route to the sentence that answers it.
 *
 * This test pins the whole list rather than just the four additions: a page
 * dropped from the map is exactly as invisible as one never added, and it is
 * the kind of edit that leaves every other test green.
 */
const body = () => GET().text();

const KEY_PAGES = [
  "/faq",
  "/about",
  "/certifications",
  "/records/charts",
  "/live-charts",
  "/music",
  "/dai-dai",
  "/records/by-the-numbers",
  "/records",
  "/records/africas-biggest",
  "/methodology",
  "/analysis",
];

/** The "## Key pages" section only, so a mention elsewhere doesn't count. */
async function keyPagesSection() {
  const text = await body();
  const start = text.indexOf("## Key pages");
  expect(start, "llms.txt has no '## Key pages' section").toBeGreaterThan(-1);
  const end = text.indexOf("\n## ", start + 1);
  return text.slice(start, end === -1 ? undefined : end);
}

describe("llms.txt key pages", () => {
  it("links every page an answer engine would quote from", async () => {
    const section = await keyPagesSection();
    const missing = KEY_PAGES.filter(
      // Match the markdown link target exactly — "(https://…/faq)" — so that
      // "/records" is not satisfied by the "/records/charts" line above it,
      // and a bare prose mention is not mistaken for a link.
      (p) => !section.includes(`(https://burnaboystats.com${p})`)
    );
    expect(missing, `llms.txt Key pages no longer links: ${missing.join(", ")}`).toEqual([]);
  });

  it("derives the FAQ and album counts rather than typing them", async () => {
    const section = await keyPagesSection();
    // The counts are the reason a model trusts the map. Typed literals go
    // stale silently — llms.txt already carries that warning for the figures
    // in "How the headline figures are counted"; the same rule applies here.
    expect(section).toContain(`${faqs.length} questions`);
    expect(section).toContain(`${albums.length} studio albums`);
  });
});
