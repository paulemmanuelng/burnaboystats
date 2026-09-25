import { act, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const push = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));

import SearchPalette from "../../app/components/SearchPalette";

/**
 * The ⌘K palette, as the debug pass of 24 Sep 2026 found it on the live site:
 *
 *   C-01  ⌘K over an open tracklist or stat card opened the palette UNDER the
 *         dialog and took its focus; the two scroll locks then restored each
 *         other's saved `overflow`, and the page stayed unscrollable after
 *         both had closed ("38 -> 38 PAGE DID NOT SCROLL").
 *   C-02  on screens with their own mobile chrome the whole header is
 *         display:none, and ⌘K opened the palette inside it — invisible,
 *         holding the scroll lock, eating keystrokes.
 *   C-13  Esc closed the palette without clearing it, so ⌘K reopened on the
 *         old query ("gbo") instead of the suggestions.
 *   C-04  a search result on the page you are already on changed only the
 *         fragment, through a router push that fires no hashchange.
 *
 * jsdom does no layout, so getClientRects() is empty for everything. It is
 * stubbed to follow `hidden` and a test-only `data-test-undisplayed`, which
 * stands in for the display:none a stylesheet would apply.
 */
beforeEach(() => {
  vi.spyOn(Element.prototype, "getClientRects").mockImplementation(function (this: Element) {
    const gone = this.closest("[hidden], [data-test-undisplayed]");
    return (gone ? [] : [{}]) as unknown as DOMRectList;
  });
  push.mockClear();
  window.history.replaceState({}, "", "/");
  document.body.style.overflow = "";
});
afterEach(() => vi.restoreAllMocks());

const cmdK = () => fireEvent.keyDown(window, { key: "k", metaKey: true });
const palette = () => screen.queryByRole("dialog", { name: "Search the site" });

describe("⌘K opens the palette only where it can be seen and used", () => {
  it("opens on an ordinary page (control)", () => {
    render(<SearchPalette />);
    cmdK();
    expect(palette()).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Search query" })).toHaveFocus();
  });

  it("C-01: stays shut while another modal is open, which keeps its focus", () => {
    render(
      <>
        <SearchPalette />
        <div role="dialog" aria-modal="true" aria-label="No Sign of Weakness tracklist">
          <button type="button">Close dialog</button>
        </div>
      </>
    );
    screen.getByRole("button", { name: "Close dialog" }).focus();
    document.body.style.overflow = "hidden"; // the tracklist's own lock

    cmdK();

    expect(palette()).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close dialog" })).toHaveFocus();
    // The keystroke is left to the page, not swallowed.
    expect(fireEvent.keyDown(window, { key: "k", metaKey: true })).toBe(true);
  });

  it("C-01: a closed menu sheet (mounted with `hidden`) does not count as open", () => {
    render(
      <>
        <SearchPalette />
        <div role="dialog" aria-modal="true" aria-label="Site menu" hidden />
      </>
    );
    cmdK();
    expect(palette()).toBeInTheDocument();
  });

  it("C-02: stays shut when its own trigger is not displayed", () => {
    render(
      <header data-test-undisplayed="">
        <SearchPalette />
      </header>
    );
    cmdK();
    expect(palette()).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");

    act(() => {
      window.dispatchEvent(new Event("open-search"));
    });
    expect(palette()).not.toBeInTheDocument();
  });
});

describe("C-13: every way out clears the query", () => {
  it("reopens on the suggestions after Esc, not on the last query", async () => {
    render(<SearchPalette />);
    cmdK();
    await userEvent.type(screen.getByRole("combobox", { name: "Search query" }), "gbo");
    // Gbona is what "gbo" found on the live site.
    expect(screen.getByRole("option", { name: /Gbona/ })).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(palette()).not.toBeInTheDocument();

    cmdK();
    expect(screen.getByRole("combobox", { name: "Search query" })).toHaveValue("");
    expect(screen.getByText("Popular pages")).toBeInTheDocument();
  });

  it("reopens empty after ⌘K toggled it shut", async () => {
    render(<SearchPalette />);
    cmdK();
    await userEvent.type(screen.getByRole("combobox", { name: "Search query" }), "gbo");
    cmdK();
    expect(palette()).not.toBeInTheDocument();
    cmdK();
    expect(screen.getByRole("combobox", { name: "Search query" })).toHaveValue("");
  });
});

describe("C-04: a result on the page you are on moves the fragment itself", () => {
  it("assigns /certifications#release=Gbona in place of a router push", async () => {
    window.history.replaceState({}, "", "/certifications");
    const heard = vi.fn();
    window.addEventListener("hashchange", heard);

    render(<SearchPalette />);
    cmdK();
    await userEvent.type(screen.getByRole("combobox", { name: "Search query" }), "gbona{Enter}");

    expect(push).not.toHaveBeenCalled();
    expect(window.location.pathname + window.location.hash).toBe("/certifications#release=Gbona");
    await vi.waitFor(() => expect(heard).toHaveBeenCalled());
    window.removeEventListener("hashchange", heard);
  });

  it("still pushes through the router to another page", async () => {
    render(<SearchPalette />);
    cmdK();
    await userEvent.type(screen.getByRole("combobox", { name: "Search query" }), "gbona{Enter}");
    expect(push).toHaveBeenCalledWith("/certifications#release=Gbona");
  });
});
