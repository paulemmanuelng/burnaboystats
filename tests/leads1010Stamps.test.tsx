import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/awards",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AwardsPage from "../app/records/awards/page";
import sitemap from "../app/sitemap";
import { siteUrl } from "../app/site";
import { updates } from "../app/data/updates";
import { AWARDS_EDITED_ON, AWARDS_EDITED_MONTH } from "../app/data/awards";
import { REJECTED_CLAIMS_EDITED_ON } from "../app/data/rejectedClaims";
import { BURNA_LAST_CHART_SWEEP, CHARTS_STAMP } from "../app/data/charts";

/**
 * The dates the 10 Oct 2026 leads left behind (review of data/leads-1010).
 *
 *   1. /records/awards' source note typed "last updated September 2026", and
 *      the page went on printing it over a nomination added on 10 Oct. It now
 *      prints the month of AWARDS_EDITED_ON, a stamp in the awards data.
 *   2. The sitemap dated three changed routes before their change: /methodology
 *      said 7 Oct over the "Dai Dai" units row's 10 Oct wording (and the body
 *      count's 48 to 49), and /dai-dai and /dai-dai/es said 8 Oct over the
 *      Germany row's 10 Oct "19 weeks".
 *
 * Every stamp is anchored OUTSIDE itself: to the dated notes its own data file
 * carries, to the feed, and to the calendar. A check built from the constant
 * alone would balance for any value (feedback: constant on both sides).
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MON = MONTHS.map((m) => m.slice(0, 3)).join("|");
const iso = (d: string, mon: string, y: string) =>
  `${y}-${String(MONTHS.findIndex((m) => m.startsWith(mon)) + 1).padStart(2, "0")}-${d.padStart(2, "0")}`;

/** "September 2026" -> "2026-09". */
const monthKey = (printed: string) => {
  const m = printed.match(new RegExp(`^(${MONTHS.join("|")}) (20\\d\\d)$`));
  if (!m) throw new Error(`not a printed month: ${printed}`);
  return `${m[2]}-${String(MONTHS.indexOf(m[1]) + 1).padStart(2, "0")}`;
};

// London's date, where the reads are dated (as tests/sitemapLastmod.test.ts).
const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/London",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

describe("/records/awards: the 'last updated' month comes from the awards data", () => {
  const newestAwardsLine = updates
    .filter((u) => u.category === "Awards")
    .map((u) => u.date)
    .sort()
    .at(-1)!;

  /** A printed month older than the newest Awards line in the feed. */
  const behindTheFeed = (printed: string) => monthKey(printed) < newestAwardsLine.slice(0, 7);

  it("prints the stamp's own month on the desktop source note", () => {
    const src = read("app/records/awards/page.tsx");
    expect(src).toContain("last updated {AWARDS_EDITED_MONTH};");
    expect(src).not.toMatch(/last updated (January|February|March|April|May|June|July|August|September|October|November|December) 20\d\d/);
    // The month is AWARDS_EDITED_ON's, derived here from its digits rather than
    // from the formatter the data file uses.
    expect(AWARDS_EDITED_MONTH).toBe(`${MONTHS[Number(AWARDS_EDITED_ON.slice(5, 7)) - 1]} ${AWARDS_EDITED_ON.slice(0, 4)}`);
    const { container } = render(<AwardsPage />);
    expect(container.textContent).toContain(`each ceremony's results, last updated ${AWARDS_EDITED_MONTH};`);
  });

  it("the stamp is no older than any read noted in awards.ts or any Awards line in the feed, and not in the future", () => {
    const reads = [...read("app/data/awards.ts").matchAll(new RegExp(`\\b[Rr]ead (\\d{1,2}) (${MON})[a-z]* (20\\d\\d)`, "g"))].map((m) =>
      iso(m[1], m[2], m[3]),
    );
    expect(reads.length).toBeGreaterThan(0);
    expect(reads.filter((r) => r > AWARDS_EDITED_ON)).toEqual([]);
    expect(newestAwardsLine <= AWARDS_EDITED_ON, `newest Awards line ${newestAwardsLine}`).toBe(true);
    expect(AWARDS_EDITED_ON <= today, `today is ${today}`).toBe(true);
    expect(behindTheFeed(AWARDS_EDITED_MONTH)).toBe(false);
  });

  it("negative control: the month the page shipped is caught", () => {
    // origin/main's app/records/awards/page.tsx: "… each ceremony's results,
    // last updated September 2026; …", under the 8 Oct Kids' Choice line.
    expect(behindTheFeed("September 2026")).toBe(true);
  });
});

describe("the rejected-claims lists carry their own stamp", () => {
  /** Every day a note in rejectedClaims.ts names, up to today. */
  const notedDays = () =>
    [...read("app/data/rejectedClaims.ts").matchAll(new RegExp(`\\b(\\d{1,2}) (${MON})[a-z]* (20\\d\\d)\\b`, "g"))]
      .map((m) => iso(m[1], m[2], m[3]))
      .filter((d) => d <= today);
  const behindItsNotes = (stamp: string) => notedDays().some((d) => d > stamp);

  it("is no older than any dated note in the file, and not in the future", () => {
    expect(notedDays().length).toBeGreaterThan(0);
    expect(behindItsNotes(REJECTED_CLAIMS_EDITED_ON)).toBe(false);
    expect(REJECTED_CLAIMS_EDITED_ON <= today).toBe(true);
  });

  it("negative control: the date /methodology's lastmod said before the fix is behind the file's notes", () => {
    expect(behindItsNotes("2026-10-07")).toBe(true);
  });
});

describe("sitemap: the routes the 10 Oct changes touched are dated at least by them", () => {
  const rows = sitemap();
  const day = (path: string) => {
    const r = rows.find((x) => x.url === `${siteUrl}${path}`);
    if (!r) throw new Error(`no sitemap row for ${path}`);
    return r.lastModified ? new Date(r.lastModified).toISOString().slice(0, 10) : undefined;
  };

  /** What each route prints that moved on 10 Oct, and the stamp that moved with it. */
  const floors: Record<string, string[]> = {
    // The "Dai Dai" units row's wording; the award-body count, 48 to 49.
    "/methodology": [REJECTED_CLAIMS_EDITED_ON, AWARDS_EDITED_ON],
    // The Kids' Choice nomination and the source note's month.
    "/records/awards": [AWARDS_EDITED_ON],
    // The Germany row, 18 to 19 weeks on chart, read at the chart bodies.
    "/dai-dai": [BURNA_LAST_CHART_SWEEP, CHARTS_STAMP],
    "/dai-dai/es": [BURNA_LAST_CHART_SWEEP, CHARTS_STAMP],
  };
  const behind = (said: string | undefined, path: string) => said === undefined || floors[path].some((f) => said < f);

  it("no route is dated before the data it prints", () => {
    const stale = Object.keys(floors)
      .filter((p) => behind(day(p), p))
      .map((p) => `${p}: says ${day(p) ?? "nothing"}, its data moved ${[...floors[p]].sort().at(-1)}`);
    expect(stale).toEqual([]);
  });

  it("negative control: the lastmods the branch served before the fix", () => {
    expect(behind("2026-10-07", "/methodology")).toBe(true);
    expect(behind("2026-10-08", "/dai-dai")).toBe(true);
    expect(behind("2026-10-08", "/dai-dai/es")).toBe(true);
    // /records/awards took the feed's 8 Oct, the day the nomination was
    // announced, not the 10th it was added.
    expect(behind("2026-10-08", "/records/awards")).toBe(true);
  });
});
