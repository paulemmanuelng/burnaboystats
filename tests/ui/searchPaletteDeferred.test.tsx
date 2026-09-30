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
 * Each test gets a fresh copy of the palette whose `import("../lib/searchIndex")`
 * waits until the test calls release(). The real index is behind it.
 */
const suggested = suggestedSearchDocs();

async function paletteWithHeldIndex() {
  vi.resetModules();
  let release!: () => void;
  const held = new Promise<void>((r) => (release = r));
  vi.doMock("../../app/lib/searchIndex", async (importOriginal) => {
    await held;
    return importOriginal();
  });
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
