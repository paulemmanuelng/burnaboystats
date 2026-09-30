import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentType } from "react";
import { searchDocs } from "../../app/lib/searchIndex";
import { suggestedSearchDocs, type SuggestedDoc } from "../../app/lib/searchSuggested";

const push = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));

/**
 * The palette before its search index has arrived (speed pass, 30 Sep 2026).
 *
 * The index no longer ships with every page: the palette imports it when it
 * opens (or earlier, when idle). So there is a moment when somebody has typed
 * and the index is still on its way. In that moment the palette must not say
 * "No pages match" — nobody knows yet — and Enter must still open the page it
 * would have opened with the index already there.
 *
 * The arrow keys too: an ArrowDown in that moment found no rows, and the
 * shipped `Math.min(i + 1, results.length - 1)` set the highlight to -1, so
 * the list landed with nothing highlighted and Enter went to /search?q=gbo
 * (review of 30 Sep 2026, reproduced in the browser by holding the index
 * chunk for 4 s on /analysis at 1440). The last block covers it, with the
 * shipped line put back as a negative control.
 *
 * Each test gets a fresh copy of the palette whose `import("../lib/searchIndex")`
 * waits until the test calls release(). The real index is behind it.
 */
const suggested = suggestedSearchDocs();

async function paletteWithHeldIndex({ shippedArrows = false } = {}) {
  vi.resetModules();
  let release!: () => void;
  const held = new Promise<void>((r) => (release = r));
  vi.doMock("../../app/lib/searchIndex", async (importOriginal) => {
    await held;
    return importOriginal();
  });
  if (shippedArrows) {
    // Negative control: the arrow-key lines as SearchPalette.tsx shipped them
    // in 1653dae8, verbatim, put back into the real palette:
    //   setActive((i) => Math.min(i + 1, results.length - 1));
    //   setActive((i) => Math.max(i - 1, 0));
    vi.doMock("../../app/components/searchPaletteActive", () => ({
      nextActive: (i: number, key: string, count: number) => {
        const results = { length: count };
        return key === "ArrowDown" ? Math.min(i + 1, results.length - 1) : Math.max(i - 1, 0);
      },
    }));
  }
  const mod = await import("../../app/components/SearchPalette");
  const SearchPalette = mod.default as ComponentType<{ suggested: readonly SuggestedDoc[] }>;
  return { SearchPalette, release };
}

beforeEach(() => {
  vi.spyOn(Element.prototype, "getClientRects").mockImplementation(function (this: Element) {
    return (this.closest("[hidden]") ? [] : [{}]) as unknown as DOMRectList;
  });
  push.mockClear();
  window.history.replaceState({}, "", "/");
  document.body.style.overflow = "";
});
afterEach(() => {
  vi.doUnmock("../../app/lib/searchIndex");
  vi.doUnmock("../../app/components/searchPaletteActive");
  vi.restoreAllMocks();
});

const cmdK = () => fireEvent.keyDown(window, { key: "k", metaKey: true });
const box = () => screen.getByRole("combobox", { name: "Search query" });

describe("typing before the index has loaded", () => {
  it("shows the suggestions at once, index or not", async () => {
    const { SearchPalette } = await paletteWithHeldIndex();
    render(<SearchPalette suggested={suggested} />);
    cmdK();
    expect(screen.getByText("Popular pages")).toBeInTheDocument();
    expect(screen.getAllByRole("option").map((o) => o.textContent)).toHaveLength(4);
  });

  it("\"gbo\" shows no \"No pages match\" while pending, then Gbona when the index lands", async () => {
    const { SearchPalette, release } = await paletteWithHeldIndex();
    render(<SearchPalette suggested={suggested} />);
    cmdK();
    await userEvent.type(box(), "gbo");

    expect(screen.queryByText(/No pages match/)).not.toBeInTheDocument();
    expect(screen.queryByRole("option")).not.toBeInTheDocument();

    release();
    expect(await screen.findByRole("option", { name: /Gbona/ })).toBeInTheDocument();
    expect(screen.queryByText(/No pages match/)).not.toBeInTheDocument();

    // Control: once loaded, a query with no match does print the block, so
    // the absence above was the pending state and not a broken query.
    await userEvent.clear(box());
    await userEvent.type(box(), "zzqqxx");
    expect(screen.getByText(/No pages match/)).toBeInTheDocument();
  });
});

describe("Enter before the index has loaded", () => {
  // Today's target for "gbona": the first result the real index gives.
  const target = searchDocs("gbona", 8)[0].path;

  it("opens the same page as it would with the index loaded", async () => {
    expect(target).toBe("/certifications#release=Gbona");
    const { SearchPalette, release } = await paletteWithHeldIndex();
    render(<SearchPalette suggested={suggested} />);
    cmdK();
    await userEvent.type(box(), "gbona{Enter}");
    expect(push).not.toHaveBeenCalled();

    release();
    await vi.waitFor(() => expect(push).toHaveBeenCalledWith(target));
    expect(push).toHaveBeenCalledTimes(1);
  });

  it("goes nowhere if the palette was closed before the index landed", async () => {
    const { SearchPalette, release } = await paletteWithHeldIndex();
    render(<SearchPalette suggested={suggested} />);
    cmdK();
    await userEvent.type(box(), "gbona{Enter}");
    fireEvent.keyDown(window, { key: "Escape" });

    release();
    // Let the held import and its callbacks settle.
    await new Promise((r) => setTimeout(r, 50));
    expect(push).not.toHaveBeenCalled();
  });
});

describe("arrow keys before the index has loaded", () => {
  // Today's results for "gbo" from the real index; the test reads them rather
  // than typing a title or a path.
  const gbo = searchDocs("gbo", 8);
  const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  /** ⌘K, "gbo", ArrowDown while the index is held, then let it land. */
  async function arrowDownWhilePending(opts?: { shippedArrows?: boolean }) {
    const { SearchPalette, release } = await paletteWithHeldIndex(opts);
    render(<SearchPalette suggested={suggested} />);
    cmdK();
    await userEvent.type(box(), "gbo");
    await userEvent.keyboard("{ArrowDown}");
    // Still pending: no rows to move through yet.
    expect(screen.queryByRole("option")).not.toBeInTheDocument();
    release();
    await screen.findByRole("option", { name: new RegExp(escapeRe(gbo[0].title)) });
    return screen.getAllByRole("option");
  }

  it("the index has at least two results for \"gbo\", so row 0 vs row 1 is a real difference", () => {
    expect(gbo.length).toBeGreaterThan(1);
    // Enter on row 0 goes through router.push (a different page from /), not
    // a same-page fragment assign.
    expect(new URL(gbo[0].path, "http://x/").pathname).not.toBe("/");
  });

  it("ArrowDown while pending leaves row 0 highlighted when the index lands, and Enter opens it", async () => {
    const options = await arrowDownWhilePending();
    expect(options[0]).toHaveAttribute("aria-selected", "true");
    expect(options.filter((o) => o.getAttribute("aria-selected") === "true")).toHaveLength(1);
    expect(box()).toHaveAttribute("aria-activedescendant", "search-opt-0");

    await userEvent.keyboard("{Enter}");
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(gbo[0].path);
  });

  it("control: with the index already loaded, the arrows move and stop at both ends", async () => {
    const { SearchPalette, release } = await paletteWithHeldIndex();
    release();
    render(<SearchPalette suggested={suggested} />);
    cmdK();
    await userEvent.type(box(), "gbo");
    await screen.findByRole("option", { name: new RegExp(escapeRe(gbo[0].title)) });
    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowDown}");
    expect(options[1]).toHaveAttribute("aria-selected", "true");
    expect(box()).toHaveAttribute("aria-activedescendant", "search-opt-1");
    await userEvent.keyboard("{ArrowUp}{ArrowUp}");
    expect(options[0]).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowDown>20/}");
    const last = options.length - 1;
    expect(options[last]).toHaveAttribute("aria-selected", "true");
    expect(box()).toHaveAttribute("aria-activedescendant", `search-opt-${last}`);
  });

  it("negative control: with the shipped ArrowDown line the list lands with nothing highlighted and Enter goes to /search?q=gbo", async () => {
    const options = await arrowDownWhilePending({ shippedArrows: true });
    expect(options.filter((o) => o.getAttribute("aria-selected") === "true")).toHaveLength(0);
    expect(box()).not.toHaveAttribute("aria-activedescendant");

    await userEvent.keyboard("{Enter}");
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith("/search?q=gbo");
    expect(push).not.toHaveBeenCalledWith(gbo[0].path);
  });
});
