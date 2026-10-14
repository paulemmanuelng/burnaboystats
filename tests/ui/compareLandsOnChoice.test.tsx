import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../../app/compare/page";
import styles from "../../app/compare/compare.module.css";
import { featuredPairs, pairSlug } from "../../app/lib/comparePairs";
import { winning } from "../fixtures/cssRules";

/**
 * Paul, 14 Oct 2026, 23:22, on J2-9 (aa4eb386, PR #479): "i dont like the new
 * compare that starts with h2h, i want it to be the way it was, with the 4
 * diiferent options, once someone cones on the page, they sjould now be able
 * to choose what they want".
 *
 * So /compare with no query lands on the choice, as it did on 8 Oct: the four
 * modes (Song vs song, Album vs album, Artist totals, By country; Songs,
 * Albums, Artists, Country on a phone) and two empty pickers. No pair is
 * filled in for the visitor: no totals, no verdict, no "Change", no
 * head-to-head marked as the one on screen, no "The full table". Nothing on
 * either layout puts the mode control or the pickers away.
 *
 * The negative control is the render J2-9 shipped, verbatim: the dev
 * server's SSR of /compare on main 75182c84 (14 Oct 2026), from the flow
 * wrapper to the method cards, and the phone rule it shipped in
 * compare.module.css.
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const SHIPPED_J2_9 = readFileSync("tests/fixtures/compare-hub-shipped-j2-9-2026-10-14.html", "utf8");
// aa4eb386:app/compare/compare.module.css, its line under `@media (max-width: 900px)`, verbatim.
const SHIPPED_J2_9_PHONE_RULE = `@media (max-width: 900px) {
  .flowHub > .seg, .flowHub > .slots { display: none; }
}`;

const MODES = [
  ["Song vs song", "Songs"],
  ["Album vs album", "Albums"],
  ["Artist totals", "Artists"],
  ["By country", "Country"],
];
const WIDTHS = [375, 402, 1024, 1440];

const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
/** A class's name in the stylesheet: this build's (the styles map) or the Next dev build's ("compare_<name>__<hash>"). */
const SOURCE = new Map([...new Set([...CSS.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((m) => m[1]))].map((n) => [String((styles as Record<string, string>)[n]), n]));
const sourceName = (c: string) => SOURCE.get(c) ?? /^compare_(.+?)__/.exec(c)?.[1] ?? c;
const named = (root: Element, n: string) => [...root.querySelectorAll("[class]")].filter((el) => [...el.classList].some((c) => sourceName(c) === n));
/** A width-only media test; anything else (hover, print, motion) is left out. */
const at = (w: number) => (m: string | null) => {
  if (m === null) return true;
  const conds = [...m.matchAll(/\((max|min)-width:\s*(\d+)px\)/g)];
  return conds.length > 0 && conds.every(([, k, v]) => (k === "max" ? w <= Number(v) : w >= Number(v)));
};

/** Everything that says /compare did not land on the choice; [] when it did. */
function landingFaults(markup: string, css: string): string[] {
  const root = document.createElement("div");
  root.innerHTML = markup;
  const faults: string[] = [];
  if (root.querySelector("#result")) faults.push("a result is rendered (#result)");
  const figures = named(root, "figure");
  if (figures.length) faults.push(`totals are printed: ${figures.map((f) => norm(f.textContent)).join(" vs ")}`);
  if (named(root, "diffRow").length) faults.push(`a verdict is printed: ${norm(named(root, "diffRow")[0].textContent)}`);
  if (named(root, "changeRow").length) faults.push("a change row is drawn");
  if (/The full table:/.test(norm(root.textContent))) faults.push("a full-table link is drawn");
  if (root.querySelector('section[aria-labelledby="featured-pairs"] a[aria-current]')) faults.push("a head-to-head is marked as the one on screen");
  for (const side of ["a", "b"]) {
    const slot = root.querySelector(`#slot-${side}`);
    if (!slot) faults.push(`no slot ${side}`);
    else if (!norm(slot.textContent).includes("Choose an artist")) faults.push(`slot ${side} is filled: ${norm(named(slot, "slotTitle")[0]?.textContent)}`);
  }
  const nav = root.querySelector('nav[aria-label="Comparison mode"]');
  if (!nav) {
    faults.push("no mode choice");
    return faults;
  }
  const items = [...nav.children].map((el) => [norm(named(el, "segLong")[0]?.textContent), norm(named(el, "segShort")[0]?.textContent)]);
  if (JSON.stringify(items) !== JSON.stringify(MODES)) faults.push(`the mode choice reads ${JSON.stringify(items)}`);
  // Nothing around the control puts it, or the pickers, away on either layout.
  const around = [...(nav.parentElement?.classList ?? [])].map(sourceName);
  for (const w of WIDTHS)
    for (const part of ["seg", "slots"])
      for (const f of around) if (winning(css, `.${f} > .${part}`, "display", at(w)) === "none") faults.push(`.${f} hides .${part} at ${w}`);
  return faults;
}

const landing = async (sp: Record<string, string> = {}) => renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) }));

describe("/compare lands on the choice (Paul, 14 Oct 2026: J2-9 undone)", () => {
  it("no pair is filled in: no totals, no verdict; the four modes and both empty pickers are there, on both layouts", async () => {
    expect(landingFaults(await landing(), CSS)).toEqual([]);
  });

  it("Artist totals is the mode it lands in, and each other mode is one tap: Songs, Albums, Country", async () => {
    const root = document.createElement("div");
    root.innerHTML = await landing();
    const nav = root.querySelector('nav[aria-label="Comparison mode"]')!;
    const current = [...nav.children].filter((el) => el.getAttribute("aria-current") === "page");
    expect(current.map((el) => norm(named(el, "segShort")[0]?.textContent))).toEqual(["Artists"]);
    expect([...nav.querySelectorAll("a")].map((a) => a.getAttribute("href"))).toEqual(["/compare?mode=songs", "/compare?mode=albums", "/compare/in"]);
  });

  it("the head-to-heads stay, below the pickers, every one a static pair page and none current", async () => {
    const root = document.createElement("div");
    root.innerHTML = await landing();
    const links = [...root.querySelectorAll('section[aria-labelledby="featured-pairs"] a')].filter((a) => a.getAttribute("href")?.startsWith("/compare/") && a.getAttribute("href") !== "/compare/in");
    expect(links.map((a) => a.getAttribute("href"))).toEqual(featuredPairs().map(([x, y]) => `/compare/${pairSlug(x, y)}`));
    const slots = root.querySelector("#slot-b")!;
    const featured = root.querySelector('section[aria-labelledby="featured-pairs"]')!;
    expect(slots.compareDocumentPosition(featured) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("a chosen pair still renders its totals and verdict", async () => {
    const faults = landingFaults(await landing({ a: "burna-boy", b: "wizkid" }), CSS);
    expect(faults).toEqual(expect.arrayContaining([expect.stringMatching(/^a result is rendered/), expect.stringMatching(/^totals are printed/), expect.stringMatching(/^a verdict is printed/)]));
  });
});

describe("negative control: the /compare J2-9 shipped (main 75182c84, 14 Oct 2026)", () => {
  it("the guard catches the shipped render: Burna Boy vs Wizkid filled in, its totals and verdict, the pair chip current", () => {
    const faults = landingFaults(SHIPPED_J2_9, CSS);
    expect(faults).toEqual(
      expect.arrayContaining([
        "a result is rendered (#result)",
        "totals are printed: 32,297,660 vs 42,290,770",
        expect.stringMatching(/^a verdict is printed: Wizkid leads by at least 9,993,110 certified units/),
        "a change row is drawn",
        "a full-table link is drawn",
        "a head-to-head is marked as the one on screen",
        "slot a is filled: Burna Boy",
        "slot b is filled: Wizkid",
      ]),
    );
  });

  it("and the phone rule it shipped, which put the four modes and the pickers away under 901px", () => {
    const faults = landingFaults(SHIPPED_J2_9, `${CSS}\n${SHIPPED_J2_9_PHONE_RULE}`);
    for (const w of [375, 402]) {
      expect(faults).toContain(`.flowHub hides .seg at ${w}`);
      expect(faults).toContain(`.flowHub hides .slots at ${w}`);
    }
    expect(faults.filter((f) => / at (1024|1440)$/.test(f))).toEqual([]);
  });
});
