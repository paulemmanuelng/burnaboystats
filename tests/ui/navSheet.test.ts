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

  it("lists 25 routes — 6 browse, 8 record books, 11 site", () => {
    // 8 Aug 2026: +2 site routes — /curator and /press.
    // 11 Aug 2026: +/dai-dai/es. The Spanish edition had one inbound link in
    // the whole site; the sheet now carries it on every page.
    expect(navGroups.map((g) => g.items.length)).toEqual([6, 8, 11]);
    expect(navRoutes).toHaveLength(25);
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
    // The Records row advertises the length of the Deep data group itself.
    expect(metas["/records"]).toBe(`${navGroups[1].items.length} books`);
  });

  it("builds the search hint from the two headline datasets", () => {
    expect(navSearchHint).toMatch(/^\d+ certs, \d+ entries$/);
  });
});
