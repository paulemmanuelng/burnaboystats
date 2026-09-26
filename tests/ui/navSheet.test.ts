import { recordBooks } from "../../app/lib/recordBooks";
import { describe, it, expect } from "vitest";
import { navGroups, navRoutes, navSearchHint } from "../../app/lib/navGroups";

/**
 * The nav sheet is the ONLY route into most of the site on a phone — the tab
 * bar reaches five pages. A row silently going missing would strand a page,
 * so its coverage is pinned here rather than left to a visual check.
 */
describe("mobile nav sheet", () => {
  it("keeps the three groups the design specifies", () => {
    expect(navGroups.map((g) => g.name)).toEqual(["Browse", "Deep data", "The site"]);
  });

  it("lists 29 routes — 8 browse, 8 record books, 13 site", () => {
    // 8 Aug 2026: +2 site routes — /curator and /press.
    // 11 Aug 2026: +/dai-dai/es. The Spanish edition had one inbound link in
    // the whole site; the sheet now carries it on every page.
    // 17 Aug 2026: +/afrobeats, the genre board — Browse, not The site: it is a
    // top-level section of its own, and Paul put it in the desktop nav too.
    // 16 Aug 2026: +/timeline. Search Console showed it with 2 inbound links
    // against 50 for every established page — the sheet fixes that site-wide.
    // 12 Sep 2026: +/compare, Browse — Paul asked for the compare page in the
    // mobile nav; it is a top-level tool, not a record book.
    // 26 Sep 2026: +/embed, The site — the home footer's "The site" column
    // links it, and that footer is hidden on phones.
    expect(navGroups.map((g) => g.items.length)).toEqual([8, 8, 13]);
    expect(navRoutes).toHaveLength(29);
  });

  it("links every route exactly once", () => {
    expect(new Set(navRoutes).size).toBe(navRoutes.length);
  });

  it("omits only the third-level routes and /search", () => {
    // Third-level pages are reached from their parent; /search is the field at
    // the top of the sheet, not a row in it.
    for (const href of navRoutes) {
      expect(href).not.toMatch(/^\/records\/tours\/./);
      expect(href).not.toMatch(/^\/music\/./);
      expect(href).not.toBe("/search");
    }
  });

  it("derives its counts rather than carrying the mockup's snapshot", () => {
    const metas = Object.fromEntries(
      navGroups.flatMap((g) => g.items.map((i) => [i.href, i.meta]))
    );
    // The handoff's mockup showed 22 updates and 65 live No. 1s. Those were a
    // snapshot for checking against — the live figures are both higher now, so
    // seeing them here would mean someone had typed the number in.
    expect(metas["/updates"]).not.toBe("22");
    expect(metas["/live-charts"]).not.toBe("65 No. 1s");
    // The Records row advertises the hub's own record-book list (14), not the
    // sheet's Deep data group (8) — the two disagreed until 17 Sep 2026.
    expect(metas["/records"]).toBe(`${recordBooks.length} books`);
  });

  it("builds the search hint from the two headline datasets", () => {
    expect(navSearchHint).toMatch(/^\d+ certs, \d+ entries$/);
  });
});
