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
 * V-global-03, the full-site debug of 5 Oct 2026: the ⌘K palette's result
 * list is capped at 56vh and scrolls, but the arrow keys never moved it. On
 * the live site "burna" gives 8 rows, 472px of list, and the list shows 430px
 * of them at 1366x768, 403px at 1280x720 and 374px on a 390x667 phone, so
 * ArrowDown highlighted rows 7 and 8 below the list's edge ("Burna Boy vs
 * Davido", selected and cut off at the panel bottom) and Enter then opened a
 * page nobody had seen highlighted. Measured in headless Chrome: the list's
 * scrollTop stayed 0 through every press.
 *
 * jsdom does no layout, so the list is laid out here the way Chrome laid it
 * out: 8px padding, 57px rows, a 26px "Popular pages" label, the list's
 * visible height per screen, and a scrollTop that clamps like a browser's.
 */
const PAD = 8;
const ROW = 57;
const LABEL = 26;
const LIST_TOP = 150;
let view = 430;

const suggested = suggestedSearchDocs();
const scrolls = new WeakMap<Element, number>();
const isList = (el: Element) => el.getAttribute?.("role") === "listbox";
/** Heights of the list's rows, label included, in order. */
const heights = (list: Element) =>
  [...list.children].map((li) => (li.querySelector('[role="option"]') ? ROW : LABEL));
const maxScroll = (list: Element) => Math.max(0, 2 * PAD + heights(list).reduce((a, b) => a + b, 0) - view);
const rect = (top: number, height: number) =>
  ({ top, bottom: top + height, height, left: 0, right: 560, width: 560, x: 0, y: top }) as DOMRect;

beforeEach(() => {
  view = 430;
  vi.spyOn(Element.prototype, "getClientRects").mockImplementation(function (this: Element) {
    return (this.closest("[hidden]") ? [] : [{}]) as unknown as DOMRectList;
  });
  const scrollTop = Object.getOwnPropertyDescriptor(Element.prototype, "scrollTop")!;
  vi.spyOn(Element.prototype, "scrollTop", "get").mockImplementation(function (this: Element) {
    return isList(this) ? (scrolls.get(this) ?? 0) : scrollTop.get!.call(this);
  });
  vi.spyOn(Element.prototype, "scrollTop", "set").mockImplementation(function (this: Element, v: number) {
    if (isList(this)) scrolls.set(this, Math.min(Math.max(0, v), maxScroll(this)));
    else scrollTop.set!.call(this, v);
  });
  const clientHeight = Object.getOwnPropertyDescriptor(Element.prototype, "clientHeight")!;
  vi.spyOn(Element.prototype, "clientHeight", "get").mockImplementation(function (this: Element) {
    return isList(this) ? view : clientHeight.get!.call(this);
  });
  const original = Element.prototype.getBoundingClientRect;
  vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(function (this: Element) {
    if (isList(this)) return rect(LIST_TOP, view);
    const list = this.closest('[role="listbox"]');
    if (list && this.getAttribute("role") === "option") {
      const lis = [...list.children];
      const at = lis.indexOf(this.closest("li")!);
      const above = heights(list).slice(0, at).reduce((a, b) => a + b, 0);
      return rect(LIST_TOP + PAD + above - (scrolls.get(list) ?? 0), ROW);
    }
    return original.call(this);
  });
  const computed = window.getComputedStyle;
  vi.spyOn(window, "getComputedStyle").mockImplementation((el: Element, pseudo?: string | null) => {
    const style = computed.call(window, el, pseudo);
    if (!isList(el)) return style;
    return new Proxy(style, {
      get: (t, p) => {
        if (p === "paddingTop" || p === "paddingBottom") return `${PAD}px`;
        const v = Reflect.get(t, p, t);
        return typeof v === "function" ? v.bind(t) : v;
      },
    });
  });
  push.mockClear();
  window.history.replaceState({}, "", "/");
  document.body.style.overflow = "";
});
afterEach(() => {
  vi.doUnmock("../../app/components/searchPaletteActive");
  vi.restoreAllMocks();
});

async function palette({ shippedList = false } = {}) {
  vi.resetModules();
  if (shippedList) {
    // Negative control: the palette as it shipped, whose list nothing scrolled.
    vi.doMock("../../app/components/searchPaletteActive", async (importOriginal) => ({
      ...(await importOriginal<typeof import("../../app/components/searchPaletteActive")>()),
      revealRow: () => {},
    }));
  }
  const mod = await import("../../app/components/SearchPalette");
  return mod.default as ComponentType<{ suggested: readonly SuggestedDoc[] }>;
}

const cmdK = () => fireEvent.keyDown(window, { key: "k", metaKey: true });
const list = () => screen.getByRole("listbox", { name: "Search results" });
const options = () => screen.getAllByRole("option");
const highlighted = () => options().find((o) => o.getAttribute("aria-selected") === "true")!;
/** Whole, inside the list's padding, as the first row sits at rest. */
const inView = (o: Element) => {
  const r = o.getBoundingClientRect();
  return r.top >= LIST_TOP + PAD && r.bottom <= LIST_TOP + view - PAD;
};

async function burna(SearchPalette: ComponentType<{ suggested: readonly SuggestedDoc[] }>) {
  render(<SearchPalette suggested={suggested} />);
  cmdK();
  await userEvent.keyboard("burna");
  await vi.waitFor(() => expect(options()).toHaveLength(8));
}

describe("V-global-03: the arrow keys keep the highlighted row in the list", () => {
  it.each([
    ["1366x768", 430],
    ["1280x720", 403],
    ["390x667", 374],
    ["1440x900, where all 8 rows fit (control)", 472],
  ])("at %s every row the keys reach is in view, down and back up", async (_, height) => {
    view = height;
    await burna(await palette());

    for (let i = 1; i < 8; i++) {
      await userEvent.keyboard("{ArrowDown}");
      expect(options().indexOf(highlighted())).toBe(i);
      expect(inView(highlighted()), `row ${i + 1} of 8 at ${height}px`).toBe(true);
    }
    expect(list().scrollTop).toBe(maxScroll(list()));
    for (let i = 6; i >= 0; i--) {
      await userEvent.keyboard("{ArrowUp}");
      expect(options().indexOf(highlighted())).toBe(i);
      expect(inView(highlighted()), `row ${i + 1} of 8 on the way up`).toBe(true);
    }
    expect(list().scrollTop).toBe(0);
  });

  it("scrolls only as far as the row needs, not a row early", async () => {
    await burna(await palette());
    await userEvent.keyboard("{ArrowDown>7/}");
    expect(list().scrollTop).toBe(472 - 430);
    // Rows 7 down to 2 are all in view at 42px: going up moves nothing until row 1.
    await userEvent.keyboard("{ArrowUp>6/}");
    expect(options().indexOf(highlighted())).toBe(1);
    expect(list().scrollTop).toBe(472 - 430);
  });

  it("Enter opens the row on screen", async () => {
    await burna(await palette());
    await userEvent.keyboard("{ArrowDown>7/}");
    const eighth = searchDocs("burna", 8)[7];
    expect(highlighted()).toHaveTextContent(eighth.title);
    expect(inView(highlighted())).toBe(true);
    await userEvent.keyboard("{Enter}");
    expect(push).toHaveBeenCalledWith(eighth.path);
  });

  it("a pointer on a part-hidden row highlights it and leaves the list where it is", async () => {
    await burna(await palette());
    fireEvent.mouseEnter(options()[7]);
    expect(highlighted()).toBe(options()[7]);
    expect(list().scrollTop).toBe(0);
  });

  it("a new query starts the list at the top, where row 1 is highlighted", async () => {
    await burna(await palette());
    await userEvent.keyboard("{ArrowDown>7/}");
    expect(list().scrollTop).toBeGreaterThan(0);
    await userEvent.keyboard("{Backspace}");
    await vi.waitFor(() => expect(options().length).toBeGreaterThan(0));
    expect(list().scrollTop).toBe(0);
    expect(options().indexOf(highlighted())).toBe(0);
    expect(inView(highlighted())).toBe(true);
  });

  it("back up to row 1 shows the Popular pages label again", async () => {
    view = 200; // short enough that the 4 suggestions scroll
    const SearchPalette = await palette();
    render(<SearchPalette suggested={suggested} />);
    cmdK();
    await userEvent.keyboard("{ArrowDown>3/}");
    expect(list().scrollTop).toBeGreaterThan(0);
    await userEvent.keyboard("{ArrowUp>3/}");
    expect(list().scrollTop).toBe(0);
    expect(screen.getByText("Popular pages")).toBeInTheDocument();
  });

  it("negative control: with the list as shipped, row 8 is highlighted below the edge at 1366x768", async () => {
    await burna(await palette({ shippedList: true }));
    await userEvent.keyboard("{ArrowDown>7/}");
    expect(options().indexOf(highlighted())).toBe(7);
    expect(inView(highlighted())).toBe(false);
    expect(list().scrollTop).toBe(0);
  });
});
