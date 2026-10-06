import { act, fireEvent } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RevenuePage from "../../app/records/tours/revenue/page";
import { revenueShows } from "../../app/data/tourRevenue";
import { nightCounts } from "../../app/lib/showsChips";
import { SHOWS_MARK, SHOWS_PRE_PAINT, SHOWS_ROW, artistSlug } from "../../app/lib/showsDeepLink";

/**
 * A "Biggest shows" link paints the board once (debug pass 5 Oct 2026,
 * V-tourscars-02).
 *
 * The page is static, so its HTML is the whole board, and both boards read
 * ?artist= only once hydrated. On the live site every link from a
 * certifications page painted all 82 nights, then — in the frame of the A-10
 * scroll to the filter box — swapped them for the artist's, and the method
 * note and the footer leapt up into view: CLS 0.5917 (Tems), 0.6362 (Tiwa
 * Savage), 0.6152 (Davido at 1024), 0.597 (#artist=wizkid), and 0.5149 on the
 * phone layout (measured in headless Chrome, fresh profile, 6 Oct 2026; the
 * sweep's "phone 0" was mobile emulation flagging the shift as input).
 *
 * Here the server's HTML is loaded the way a browser first paints it — its
 * inline scripts run, no React — and the rows on show must be the rows the
 * hydrated board renders, on both layouts, for every kind of link. The
 * shipped page painted all 82 for every artist. Then the mark that does it
 * must go only once the board has dropped the other nights, and never linger
 * to hide them from a later "All".
 */

const at = (url: string) => window.history.replaceState({}, "", url);
const counts = nightCounts(revenueShows.map((s) => s.artist));
const ARTISTS = Object.keys(counts);
const TOTAL = revenueShows.length;
const ALL_RANKS = revenueShows.map((_, i) => String(i + 1).padStart(2, "0"));
const ranksOf = (artist: string) =>
  revenueShows.flatMap((s, i) => (s.artist === artist ? [String(i + 1).padStart(2, "0")] : []));

afterEach(() => {
  document.documentElement.removeAttribute(SHOWS_MARK);
  document.body.innerHTML = "";
  at("/");
});

/** Each layout's subtree: the desktop's wrapper and the phone's screen. */
function layouts(host: HTMLElement) {
  const desktop = host.querySelector('[class*="desktopOnly"]') as HTMLElement;
  const phone = [...host.querySelectorAll("main > div")].find((d) => /screen/.test(d.className)) as HTMLElement;
  return { desktop, phone };
}
/** The ranks of the nights a layout shows: in the DOM and not hidden. */
const shownRanks = (tree: HTMLElement) =>
  [...tree.querySelectorAll(`[${SHOWS_ROW}]`)]
    .filter((r) => getComputedStyle(r).display !== "none")
    .map((r) => (r.firstElementChild?.textContent ?? "").trim());

/** The static page at `url` as the browser first paints it. */
function firstPaint(url: string) {
  at(url);
  const html = renderToString(<RevenuePage />);
  const host = document.body.appendChild(document.createElement("div"));
  host.innerHTML = html;
  // innerHTML never runs a script; the browser runs the page's own as it parses.
  for (const s of host.querySelectorAll("script:not([type])")) new Function(s.textContent ?? "")();
  return host;
}

/** Then React takes the same HTML over, as the browser does. */
async function hydrate(host: HTMLElement) {
  const errors: unknown[] = [];
  await act(async () => {
    hydrateRoot(host, <RevenuePage />, { onRecoverableError: (e) => errors.push(e) });
  });
  return errors;
}

describe("a deep link's first paint is the board the client renders", () => {
  it("the script and its rules come before both boards, so they apply as the rows are parsed", () => {
    const host = firstPaint("/records/tours/revenue?artist=tems");
    const script = [...host.querySelectorAll("script:not([type])")].find((s) => s.textContent === SHOWS_PRE_PAINT);
    const style = host.querySelector("style");
    const firstRow = host.querySelector(`[${SHOWS_ROW}]`)!;
    expect(script).toBeTruthy();
    expect(style).toBeTruthy();
    expect(firstRow).toBeTruthy();
    for (const el of [script!, style!]) {
      expect(el.compareDocumentPosition(firstRow) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
    // One rule per artist holding a chip, the boards' own list.
    for (const a of ARTISTS) expect(style!.textContent).toContain(`[${SHOWS_MARK}="${artistSlug(a)}"]`);
  });

  it.each(ARTISTS)("%s — the first paint shows their nights only, on both layouts, and hydrating changes none", async (artist) => {
    const host = firstPaint(`/records/tours/revenue?artist=${artistSlug(artist)}`);
    const { desktop, phone } = layouts(host);
    // The shipped page painted all 82 here, for every artist.
    expect(shownRanks(desktop)).toEqual(ranksOf(artist));
    expect(shownRanks(phone)).toEqual(ranksOf(artist));

    expect(await hydrate(host)).toEqual([]);
    expect(document.documentElement.hasAttribute(SHOWS_MARK)).toBe(false);
    // The hydrated boards render exactly the nights that were painted.
    expect([...desktop.querySelectorAll(`[${SHOWS_ROW}]`)].map((r) => r.firstElementChild?.textContent)).toEqual(ranksOf(artist));
    expect([...phone.querySelectorAll(`[${SHOWS_ROW}]`)].map((r) => r.firstElementChild?.textContent)).toEqual(ranksOf(artist));
  });

  // Every other shape of link reads as the boards read it (readDeepLink, then
  // artistForSlug): the fragment first, an empty one meaning nobody; case and
  // spaces folded; anything no chip has is All.
  it.each([
    ["the fragment", "/records/tours/revenue#artist=wizkid", "Wizkid"],
    ["capitals and spaces", "/records/tours/revenue?artist=%20TIWA-SAVAGE%20", "Tiwa Savage"],
    ["the fragment over the query", "/records/tours/revenue?artist=tems#artist=davido", "Davido"],
    ["an empty fragment over the query (nobody)", "/records/tours/revenue?artist=tems#artist=", null],
    ["a plain anchor leaves the query", "/records/tours/revenue?artist=rema#content", "Rema"],
    ["an unknown slug", "/records/tours/revenue?artist=ayra-starr", null],
    ["a partial name", "/records/tours/revenue?artist=tiwa", null],
    ["an empty value", "/records/tours/revenue?artist=", null],
    ["no parameter", "/records/tours/revenue", null],
  ])("%s", async (_, url, artist) => {
    const host = firstPaint(url);
    const { desktop, phone } = layouts(host);
    const want = artist === null ? ALL_RANKS : ranksOf(artist);
    expect(shownRanks(desktop)).toEqual(want);
    expect(shownRanks(phone)).toEqual(want);
    expect(await hydrate(host)).toEqual([]);
    expect(document.documentElement.hasAttribute(SHOWS_MARK)).toBe(false);
    expect(shownRanks(desktop)).toEqual(want);
    expect(shownRanks(phone)).toEqual(want);
  });
});

describe("the mark goes once the boards show the same rows, and only then", () => {
  it("hydration (All, from the server snapshot) keeps it; the client's render drops it with no other night left", async () => {
    const slug = "tiwa-savage";
    const host = firstPaint(`/records/tours/revenue?artist=${slug}`);
    const root = document.documentElement;
    expect(root.getAttribute(SHOWS_MARK)).toBe(slug);
    const original = root.removeAttribute.bind(root);
    // Every removal records how many other artists' nights were still in the
    // DOM — each would show the moment the mark went.
    const othersAtRemoval: number[] = [];
    const spy = vi.spyOn(root, "removeAttribute").mockImplementation((name: string) => {
      if (name === SHOWS_MARK && root.hasAttribute(SHOWS_MARK)) {
        othersAtRemoval.push(host.querySelectorAll(`[${SHOWS_ROW}]:not([${SHOWS_ROW}="${slug}"])`).length);
      }
      original(name);
    });
    try {
      expect(await hydrate(host)).toEqual([]);
    } finally {
      spy.mockRestore();
    }
    expect(othersAtRemoval).toEqual([0]);
    expect(root.hasAttribute(SHOWS_MARK)).toBe(false);
  });

  it("after it, All shows every night on both layouts — nothing left hidden", async () => {
    const host = firstPaint("/records/tours/revenue?artist=davido");
    await hydrate(host);
    const { desktop, phone } = layouts(host);
    const chip = (tree: HTMLElement, name: string) =>
      [...tree.querySelectorAll("button[aria-pressed]")].find((b) => b.childNodes[0].textContent === name) as HTMLElement;
    fireEvent.click(chip(desktop, "All artists"));
    fireEvent.click(chip(phone, "All"));
    expect(shownRanks(desktop)).toEqual(ALL_RANKS);
    expect(shownRanks(phone)).toEqual(ALL_RANKS);
    expect(TOTAL).toBe(ALL_RANKS.length);
  });
});
