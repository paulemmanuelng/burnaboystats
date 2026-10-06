import { act, render, screen, fireEvent } from "@testing-library/react";

/** The pathname usePathname() returns. It stays put here on purpose: the
 *  traversal itself must close the overlays, including a Back that moves only
 *  the fragment and leaves the path as it was. */
const nav = vi.hoisted(() => ({ path: "/certifications" }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => nav.path,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileNavSheet from "../../app/components/MobileNavSheet";
import SearchPalette from "../../app/components/SearchPalette";
import { navGroups, navSearchHint } from "../../app/lib/navGroups";
import { suggestedSearchDocs } from "../../app/lib/searchSuggested";

/**
 * V-global-02, the full-site debug of 5 Oct 2026. Both overlays live in the
 * layout and stay mounted across navigation, and neither listened for Back:
 *
 *   - the menu sheet (phone, and 901-1239 on a laptop): Back from /music took
 *     the page to / underneath and left the sheet over it, body.navSheetOpen
 *     set, the tab bar hidden and Home now marked as the current row
 *     (measured live at 390, 320 and 1024, both themes).
 *   - the search palette: a Back to another page already closed it (V-global-01
 *     shuts it on a route change), but a Back that moves only the fragment,
 *     /certifications#country=BE to /certifications, unfiltered the ledger
 *     under the open palette and left it holding the scroll lock.
 *
 * The history moves for real here (pushState, then history.back()), so the
 * popstate is the one the browser fires.
 */
const traverseBack = () =>
  act(
    () =>
      new Promise<void>((resolve) => {
        window.addEventListener("popstate", () => setTimeout(resolve, 0), { once: true });
        window.history.back();
      })
  );

beforeEach(() => {
  // jsdom does no layout: the palette's trigger must read as displayed, and
  // anything under `hidden` as not, for ⌘K's canOpen() test.
  vi.spyOn(Element.prototype, "getClientRects").mockImplementation(function (this: Element) {
    return (this.closest("[hidden]") ? [] : [{}]) as unknown as DOMRectList;
  });
  window.history.replaceState({}, "", "/certifications");
  document.body.className = "";
  document.body.style.overflow = "";
});
afterEach(() => vi.restoreAllMocks());

// By its label rather than getByRole: a closed sheet is `hidden`, outside
// the accessibility tree, and has no accessible name to find it by.
const sheet = () => document.querySelector('[role="dialog"][aria-label="Site menu"]');
const openSheet = () =>
  act(() => {
    window.dispatchEvent(new CustomEvent("mobile-nav-open", { detail: null }));
  });

describe("V-global-02: Back closes the menu sheet", () => {
  it("closes it, gives the tab bar back and drops the body class on a Back to another page", async () => {
    window.history.pushState({}, "", "/music");
    render(<MobileNavSheet groups={navGroups} updated="6 Oct 2026" searchHint={navSearchHint} />);
    openSheet();
    expect(sheet()).not.toHaveAttribute("hidden");
    expect(document.body).toHaveClass("navSheetOpen");

    await traverseBack();

    expect(window.location.pathname).toBe("/certifications");
    expect(sheet()).toHaveAttribute("hidden");
    expect(document.body).not.toHaveClass("navSheetOpen");
  });

  it("closes it on a Back that moves only the fragment", async () => {
    window.history.pushState({}, "", "/certifications#country=BE");
    render(<MobileNavSheet groups={navGroups} updated="6 Oct 2026" searchHint={navSearchHint} />);
    openSheet();

    await traverseBack();

    expect(window.location.pathname + window.location.hash).toBe("/certifications");
    expect(sheet()).toHaveAttribute("hidden");
    expect(document.body).not.toHaveClass("navSheetOpen");
  });

  it("stays open while nobody goes back (control)", async () => {
    render(<MobileNavSheet groups={navGroups} updated="6 Oct 2026" searchHint={navSearchHint} />);
    openSheet();
    await act(() => new Promise<void>((r) => setTimeout(r, 0)));
    expect(sheet()).not.toHaveAttribute("hidden");
  });
});

describe("V-global-02: Back closes the search palette", () => {
  const palette = () => screen.queryByRole("dialog", { name: "Search the site" });
  const cmdK = () => fireEvent.keyDown(window, { key: "k", metaKey: true });

  it("closes it and hands the scroll back on a Back that moves only the fragment", async () => {
    window.history.pushState({}, "", "/certifications#country=BE");
    render(<SearchPalette suggested={suggestedSearchDocs()} />);
    cmdK();
    expect(palette()).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");

    await traverseBack();

    expect(window.location.hash).toBe("");
    expect(palette()).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });

  it("opens fresh afterwards, on the suggestions rather than the old query", async () => {
    window.history.pushState({}, "", "/certifications#country=BE");
    render(<SearchPalette suggested={suggestedSearchDocs()} />);
    cmdK();
    fireEvent.change(screen.getByRole("combobox", { name: "Search query" }), { target: { value: "gbona" } });

    await traverseBack();
    cmdK();

    expect(screen.getByRole("combobox", { name: "Search query" })).toHaveValue("");
  });
});
