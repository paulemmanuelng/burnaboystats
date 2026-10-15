import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { fireEvent, render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MusicPage from "../../app/music/page";
import MobileMusic from "../../app/components/MobileMusic";
import phone from "../../app/components/mobileMusic.module.css";
import { albums, eps, compilations } from "../../app/data/albums";
import { albumPages } from "../../app/data/albumPages";
import { sameTitle } from "../../app/lib/titleKey";
import { opensDialog } from "../../app/lib/clickIntent";
import { winning } from "../fixtures/cssRules";

/**
 * musicPhoneGrid (Paul, 15 Oct 2026: "revert this music page to that grid
 * style...the albums").
 *
 * The phone /music shows its releases as the two-up cover grid it had before
 * Job 4's J4-4 (4c60d219) turned them into dense rows: one `.albumGrid` of two
 * columns for the studio albums, newest first, and one for the EPs and the
 * compilation; one `.albumCard` per release, each a cover, a title and
 * "{year} {n} trk". A studio album's card is a link to its album page whose
 * plain tap opens the tracklist sheet (a modified or middle click goes to the
 * page); an EP's or the compilation's card is a button that opens it. Both
 * heads say "Tap for tracks". Desktop keeps J4-4's cards
 * (tests/ui/albumCardHref.test.tsx).
 *
 * The negative control is the phone markup J4-4 shipped, verbatim: the dev
 * server's SSR of /music on main 51ad46b1 (15 Oct 2026), its studio-albums
 * and "Also released" sections, and its rows rule in mobileMusic.module.css.
 */

const CSS = readFileSync("app/components/mobileMusic.module.css", "utf8");
const SHIPPED_J4_4 = readFileSync("tests/fixtures/music-phone-rows-shipped-j4-4-2026-10-14.html", "utf8");
// 4c60d219:app/components/mobileMusic.module.css, the rows container, verbatim.
const SHIPPED_J4_4_CSS = `.albumList {
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  border-top: 1px solid var(--rule-soft);
}`;

const PHONE_WIDTHS = [320, 375, 390, 402];
/** A width-only media test; anything else (hover, print, motion) is left out. */
const at = (w: number) => (m: string | null) => {
  if (m === null) return true;
  const conds = [...m.matchAll(/\((max|min)-width:\s*(\d+)px\)/g)];
  return conds.length > 0 && conds.every(([, k, v]) => (k === "max" ? w <= Number(v) : w >= Number(v)));
};

const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
/** A class's name in the stylesheet: this build's ("_<name>_<hash>") or the Next dev build's ("mobileMusic_<name>__<hash>"). */
const sourceName = (c: string) => /^_([A-Za-z][\w-]*?)_[0-9a-f]+$/.exec(c)?.[1] ?? /^mobileMusic_(.+?)__/.exec(c)?.[1] ?? c;
const is = (el: Element, n: string) => [...el.classList].some((c) => sourceName(c) === n);

const newestFirst = [...albums].sort((a, b) => b.year - a.year);
const also = [...eps, ...compilations];
const slugOf = (title: string) => albumPages.find((p) => sameTitle(p.title, title))?.slug;

/** The section whose h2 starts with `head`, inside the phone screen. */
const sectionOf = (root: Element, head: RegExp) =>
  [...root.querySelectorAll("section")].find((s) => head.test(text(s.querySelector("h2"))));

/** Everything that says the phone albums are not the two-up grid; [] when they are. */
function gridFaults(root: Element, css: string): string[] {
  const faults: string[] = [];
  const lists: [string, RegExp, typeof albums, "a" | "button"][] = [
    ["studio", /^Studio albums$/, newestFirst, "a"],
    ["also", /^EPs? & compilations?$/, also, "button"],
  ];
  for (const [name, head, expected, tag] of lists) {
    const section = sectionOf(root, head);
    if (!section) {
      faults.push(`${name}: no section`);
      continue;
    }
    const note = [...section.querySelectorAll("span")].find((s) => is(s, "headNote"));
    if (!/Tap for tracks/.test(text(note))) faults.push(`${name}: the head does not say "Tap for tracks"`);
    const grid = [...section.children].find((c) => is(c, "albumGrid"));
    if (!grid) {
      const other = [...section.children].find((c) => !is(c, "sectionHead"));
      faults.push(`${name}: no two-up grid (.albumGrid); found .${other ? [...other.classList].map(sourceName).join(".") : "nothing"}`);
      continue;
    }
    const cards = [...grid.children];
    const notCards = cards.filter((c) => !is(c, "albumCard"));
    if (notCards.length) faults.push(`${name}: ${notCards.length} grid children are not .albumCard`);
    const titles = cards.map((c) => text([...c.querySelectorAll("span")].find((s) => is(s, "albumTitle"))));
    if (JSON.stringify(titles) !== JSON.stringify(expected.map((a) => a.title)))
      faults.push(`${name}: cards ${JSON.stringify(titles)}, not one per release in order`);
    for (const [i, c] of cards.entries()) {
      const a = expected[i];
      if (!a) break;
      if (c.tagName.toLowerCase() !== tag) faults.push(`${name}: ${a.title} is a <${c.tagName.toLowerCase()}>, not a <${tag}>`);
      if (tag === "a" && c.getAttribute("href") !== `/music/albums/${slugOf(a.title)}`) faults.push(`${name}: ${a.title} links ${c.getAttribute("href")}`);
      if (c.getAttribute("aria-label") !== `View the tracklist for ${a.title}`) faults.push(`${name}: ${a.title} does not name the tracklist it opens`);
      const cover = [...c.querySelectorAll("span")].find((s) => is(s, "albumCover"));
      if (!cover || !/background-image:\s*url\(https:\/\/i\.scdn\.co\//.test(cover.getAttribute("style") ?? "")) faults.push(`${name}: ${a.title} has no cover art`);
      const meta = text([...c.querySelectorAll("span")].find((s) => is(s, "albumMeta")));
      const trk = `${a.tracks.length} trk${a.editionNote ? " · std" : ""}`;
      if (meta.replace(/\s/g, "") !== `${a.year}${trk}`.replace(/\s/g, "")) faults.push(`${name}: ${a.title} meta "${meta}", not "${a.year} ${trk}"`);
    }
  }
  for (const w of PHONE_WIDTHS) {
    const display = winning(css, ".albumGrid", "display", at(w));
    const cols = winning(css, ".albumGrid", "grid-template-columns", at(w));
    if (display !== "grid" || cols !== "1fr 1fr") faults.push(`${w}px: .albumGrid is ${display ?? "absent"} / ${cols ?? "no columns"}, not a two-up grid`);
  }
  return faults;
}

const page = document.createElement("div");
page.innerHTML = renderToStaticMarkup(<MusicPage />);
const phoneTree = page.querySelector(`.${phone.screen}`)!;

describe("musicPhoneGrid · the two-up cover grid is back on the phone", () => {
  it("the studio albums and the EPs/compilation each sit in a two-up grid, one card per release, in the pre-J4-4 order", () => {
    expect(phoneTree).not.toBeNull();
    expect(gridFaults(phoneTree, CSS)).toEqual([]);
  });

  it("two grids and no J4-4 rows: no row, no separate tracks button on the phone", () => {
    const grids = [...phoneTree.querySelectorAll(`.${phone.albumGrid}`)];
    expect(grids).toHaveLength(2);
    expect(grids.map((g) => g.children.length)).toEqual([albums.length, also.length]);
    for (const n of ["albumList", "albumItem", "albumRow", "albumRowStatic", "albumMain", "tracksBtn", "metaPart"]) {
      expect([...phoneTree.querySelectorAll("[class]")].filter((el) => is(el, n)), n).toHaveLength(0);
      expect(CSS, n).not.toMatch(new RegExp(`\\.${n}\\b`));
    }
  });

  it("the grid's seams: each card draws its own, the second column has none on its right; square covers, an ink count", () => {
    expect(winning(CSS, ".albumCard", "border-right", () => true)).toBe("1px solid var(--rule)");
    expect(winning(CSS, ".albumCard:nth-child(2n)", "border-right", () => true)).toBe("0");
    expect(winning(CSS, ".albumCover", "aspect-ratio", () => true)).toBe("1");
    // the track count at rest is ink, like the desktop wall's (J0-1), as J4-4's pill kept it
    expect(winning(CSS, ".albumTracks", "color", () => true)).toBe("var(--text)");
  });
});

describe("musicPhoneGrid · tapping a card behaves as it did before J4-4", () => {
  const props = { albums, eps, compilations, songs: [] };
  const listen = () => {
    const opened: string[] = [];
    const onOpen = (e: Event) => opened.push((e as CustomEvent<string>).detail);
    window.addEventListener("open-tracklist", onOpen);
    return { opened, done: () => window.removeEventListener("open-tracklist", onOpen) };
  };

  it("a plain tap on a studio album opens its tracklist sheet and stays on /music", () => {
    const { opened, done } = listen();
    try {
      const { container } = render(<MobileMusic {...props} />);
      const card = container.querySelector(`a.${phone.albumCard}`)!;
      expect(card.getAttribute("aria-haspopup")).toBe("dialog");
      const ev = new MouseEvent("click", { bubbles: true, cancelable: true, button: 0 });
      card.querySelector(`.${phone.albumTitle}`)!.dispatchEvent(ev);
      expect(ev.defaultPrevented).toBe(true);
      expect(opened).toEqual([newestFirst[0].title]);
    } finally {
      done();
    }
  });

  it("a modified click is left to the browser: the album page, no sheet", () => {
    const { opened, done } = listen();
    const stop = (e: Event) => e.preventDefault(); // jsdom cannot navigate
    let prevented: boolean | undefined;
    const seen = (e: Event) => (prevented = e.defaultPrevented);
    document.addEventListener("click", seen);
    window.addEventListener("click", stop);
    try {
      const { container } = render(<MobileMusic {...props} />);
      fireEvent.click(container.querySelector(`a.${phone.albumCard}`)!, { metaKey: true });
      expect(prevented).toBe(false);
      expect(opened).toEqual([]);
    } finally {
      done();
      document.removeEventListener("click", seen);
      window.removeEventListener("click", stop);
    }
  });

  it("an EP's card is a button that opens its tracklist sheet", () => {
    const { opened, done } = listen();
    try {
      const { container } = render(<MobileMusic {...props} />);
      const epCard = [...container.querySelectorAll(`button.${phone.albumCard}`)][0];
      fireEvent.click(epCard);
      expect(opened).toEqual([also[0].title]);
    } finally {
      done();
    }
  });

  it("opensDialog: a plain primary click only", () => {
    const k = { metaKey: false, ctrlKey: false, shiftKey: false, altKey: false };
    expect(opensDialog({ button: 0, ...k })).toBe(true);
    expect(opensDialog({ button: 0, ...k, metaKey: true })).toBe(false);
    expect(opensDialog({ button: 0, ...k, ctrlKey: true })).toBe(false);
    expect(opensDialog({ button: 1, ...k })).toBe(false);
  });
});

describe("musicPhoneGrid · negative control", () => {
  it("J4-4's shipped phone rows (SSR of main 51ad46b1) fail the guard", () => {
    const shipped = document.createElement("div");
    shipped.innerHTML = SHIPPED_J4_4;
    expect(gridFaults(shipped, SHIPPED_J4_4_CSS)).toEqual([
      'studio: the head does not say "Tap for tracks"',
      "studio: no two-up grid (.albumGrid); found .albumList",
      "also: no two-up grid (.albumGrid); found .albumList",
      "320px: .albumGrid is absent / no columns, not a two-up grid",
      "375px: .albumGrid is absent / no columns, not a two-up grid",
      "390px: .albumGrid is absent / no columns, not a two-up grid",
      "402px: .albumGrid is absent / no columns, not a two-up grid",
    ]);
  });

  it("the guard reads the fixture's class names: the shipped rows are there to be found", () => {
    const shipped = document.createElement("div");
    shipped.innerHTML = SHIPPED_J4_4;
    const rows = [...shipped.querySelectorAll("[class]")].filter((el) => is(el, "albumItem"));
    expect(rows).toHaveLength(albums.length + also.length);
  });
});
