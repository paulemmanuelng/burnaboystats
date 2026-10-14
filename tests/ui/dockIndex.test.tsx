import { act, cleanup, render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import DockIndex from "../../app/components/DockIndex";
import JumpSpy from "../../app/components/JumpSpy";
import IndexBar from "../../app/components/IndexBar";
import { pickCurrent } from "../../app/lib/spy";
import dockStyles from "../../app/components/dockIndex.module.css";
import barStyles from "../../app/components/indexBar.module.css";
import { decl, read, rules, winning } from "../fixtures/cssRules";

/**
 * Job 4 · J4-6: one docking index per layout (Wayfinding §6).
 *
 * DockIndex (phone): the countries page's 52px chip row, docked under the
 * 69px back bar; the section in view is N2's selected chip. IndexBar
 * (desktop): a 44px bar under the 69px masthead — kicker, the sections as
 * text links (the one in view ink over a 2px ember rule), "{k} of {N}" and
 * "Top" (no glyph, fix 83). Both mark the current entry with lib/spy's
 * pickCurrent: the target that most recently passed the line, so a second
 * column cannot jump the queue (/methodology's sources, level with
 * "accessibility" but fourth in the list).
 */

const DOCK_CSS = read("app/components/dockIndex.module.css");
const BAR_CSS = read("app/components/indexBar.module.css");
const at = (w: number) => (m: string | null) =>
  m === null ||
  m
    .replace(/^@media\s*/, "")
    .split(/\s+and\s+/)
    .every((part) => {
      const min = part.match(/min-width:\s*(\d+)px/);
      if (min) return w >= Number(min[1]);
      const max = part.match(/max-width:\s*(\d+)px/);
      if (max) return w <= Number(max[1]);
      throw new Error(`unhandled media: ${m}`);
    });
const body = (css: string, sel: string) =>
  rules(css)
    .filter((r) => r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");

/**
 * main e85e6efe, app/components/JumpSpy.tsx:56–57, the pick as it shipped:
 *   let next = pairs[0].a;
 *   for (const p of pairs) if (p.t.getBoundingClientRect().top - offset <= 1) next = p.a;
 * the last entry IN LIST ORDER whose target has passed the line.
 */
function shippedPick(tops: number[], offset: number) {
  let next = 0;
  tops.forEach((t, i) => {
    if (t - offset <= 1) next = i;
  });
  return next;
}

/** /methodology at ≥1240, schematically: the sources column (list entry 4)
 *  starts level with "accessibility" (entry 1), above "rejected" and
 *  "registers", which come before it in the list. */
const SIDE = [0, 400, 900, 1400, 410, 1900];

describe("J4-6: pickCurrent", () => {
  it("a list that runs down the page: the last target past the line, the first before any", () => {
    expect(pickCurrent([0, 100, 200, 300], 150)).toBe(1);
    expect(pickCurrent([0, 100, 200, 300], 201)).toBe(2);
    expect(pickCurrent([0, 100, 200, 300], 1000)).toBe(3);
    expect(pickCurrent([500, 600], 150)).toBe(0);
    // within 1px of the line counts as reached, as JumpSpy always had it
    expect(pickCurrent([0, 151], 150)).toBe(1);
  });

  it("two targets at the same top: the later entry", () => {
    expect(pickCurrent([0, 100, 100, 300], 150)).toBe(2);
  });

  it("a side column is current only once its own top is the latest passed, never before its turn", () => {
    expect(pickCurrent(SIDE, 405)).toBe(1); // reading accessibility
    expect(pickCurrent(SIDE, 415)).toBe(4); // the sources column's head has just passed
    expect(pickCurrent(SIDE, 1000)).toBe(2); // reading rejected
    expect(pickCurrent(SIDE, 1500)).toBe(3); // reading registers
    expect(pickCurrent(SIDE, 2000)).toBe(5);
  });

  it("negative control: the shipped pick marks the sources column while the reader is in rejected and registers", () => {
    expect(shippedPick(SIDE, 1000)).toBe(4);
    expect(shippedPick(SIDE, 1500)).toBe(4);
    // and agrees with pickCurrent on a list that runs down the page
    expect(shippedPick([0, 100, 200, 300], 150)).toBe(pickCurrent([0, 100, 200, 300], 150));
  });
});

/** Mid-page, so the foot-of-page rule (the lowest target on screen) stays out of it. */
const midPage = () => {
  beforeEach(() => Object.defineProperty(document.documentElement, "scrollHeight", { value: 5000, configurable: true }));
  afterEach(() => {
    delete (document.documentElement as unknown as { scrollHeight?: number }).scrollHeight;
  });
};

const ITEMS = [
  { id: "one", label: "One", count: 9 },
  { id: "two", label: "Two", count: 6 },
  { id: "three", label: "Three" },
];

describe("J4-6: DockIndex, the phone's dock", () => {
  afterEach(cleanup);
  midPage();

  it("one in-page chip per item, with its count; no glyph; data-dock=phone", () => {
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(<DockIndex label="Jump to a category" items={ITEMS} />);
    const dock = host.firstElementChild as HTMLElement;
    expect(dock.getAttribute("data-dock")).toBe("phone");
    expect(dock.classList.contains(dockStyles.dock)).toBe(true);
    const chips = [...dock.querySelectorAll("a")];
    expect(chips.map((a) => a.getAttribute("href"))).toEqual(["#one", "#two", "#three"]);
    expect(chips.map((a) => a.textContent)).toEqual(["One9", "Two6", "Three"]);
    expect(chips.every((a) => a.classList.contains(dockStyles.dockChip))).toBe(true);
    expect(chips.map((a) => a.querySelector(`.${dockStyles.dockCount}`)?.textContent ?? null)).toEqual(["9", "6", null]);
    expect(dock.textContent).not.toMatch(/[↗→↓←↑]/);
    expect(dock.querySelector("nav")?.getAttribute("aria-label")).toBe("Jump to a category");
  });

  it("`top` moves where it docks (a back bar with no safe-area inset)", () => {
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(<DockIndex label="Jump to an era" items={ITEMS} top="69px" />);
    expect((host.firstElementChild as HTMLElement).style.getPropertyValue("--dock-top")).toBe("69px");
  });

  it("a 52px strip, sticky under the 69px back bar and its safe area, phones only", () => {
    expect(winning(DOCK_CSS, ".dock", "position", at(402))).toBe("sticky");
    expect(winning(DOCK_CSS, ".dock", "top", at(402))).toBe("var(--dock-top, calc(69px + env(safe-area-inset-top, 0px)))");
    const pad = decl(body(DOCK_CSS, ".dockRail"), "padding")!.split(/\s+/).map(parseFloat);
    const chip = parseFloat(decl(body(DOCK_CSS, ".dockChip"), "min-height")!);
    expect(pad[0] + chip + (pad[2] ?? pad[0])).toBe(52);
    expect(winning(DOCK_CSS, ".dock", "display", at(901))).toBe("none");
    expect(winning(DOCK_CSS, ".dock", "display", at(900))).toBeUndefined();
  });

  it("the chip in view takes N2's tokens, hover included; a chip at rest is on the control edge", () => {
    const on = body(DOCK_CSS, ".dockChip[aria-current]");
    expect(decl(on, "border-color")).toBe("var(--chip-on-edge)");
    expect(decl(on, "background")).toBe("var(--chip-on-wash)");
    expect(decl(on, "color")).toBe("var(--chip-on-ink)");
    expect(body(DOCK_CSS, ".dockChip[aria-current]:hover")).toBe(on);
    expect(decl(body(DOCK_CSS, ".dockChip"), "border")).toBe("1px solid var(--btn-edge)");
    expect(on).not.toMatch(/--gold/);
  });

  it("marks the section in view at the 136px line", async () => {
    document.body.innerHTML = `<div id="one"></div><div id="two"></div><div id="three"></div>`;
    const tops: Record<string, number> = { one: -300, two: 120, three: 700 };
    for (const id of Object.keys(tops)) document.getElementById(id)!.getBoundingClientRect = () => ({ top: tops[id] }) as DOMRect;
    const { container } = render(<DockIndex label="Jump" items={ITEMS} />, {
      container: document.body.appendChild(document.createElement("div")),
    });
    const nav = container.querySelector("nav")!;
    Object.defineProperty(nav, "offsetParent", { get: () => document.body, configurable: true });
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
    expect([...nav.querySelectorAll("a[aria-current]")].map((a) => a.getAttribute("href"))).toEqual(["#two"]);
  });
});

describe("J4-6: JumpSpy leaves one current link when its effect runs again", () => {
  afterEach(cleanup);
  midPage();

  it("a re-run (here a new offset) clears the link the last run marked", async () => {
    document.body.innerHTML = `<div id="one"></div><div id="two"></div><div id="three"></div>`;
    const tops: Record<string, number> = { one: -300, two: 120, three: 700 };
    for (const id of Object.keys(tops)) document.getElementById(id)!.getBoundingClientRect = () => ({ top: tops[id] }) as DOMRect;
    const spy = (offset: number) => (
      <JumpSpy as="nav" label="Jump" offset={offset}>
        {ITEMS.map((it) => (
          <a key={it.id} href={`#${it.id}`}>
            {it.label}
          </a>
        ))}
      </JumpSpy>
    );
    const { container, rerender } = render(spy(136), { container: document.body.appendChild(document.createElement("div")) });
    const nav = container.querySelector("nav")!;
    Object.defineProperty(nav, "offsetParent", { get: () => document.body, configurable: true });
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
    const marked = () => [...nav.querySelectorAll("a[aria-current]")].map((a) => a.getAttribute("href"));
    expect(marked()).toEqual(["#two"]);
    // The effect runs again; its new pick is "three". The first build's
    // cleanup left "two" marked too (review, 14 Oct: Grammy and AFRIMA both
    // current on a fresh /records/awards#body= landing in dev).
    rerender(spy(800));
    expect(marked()).toEqual(["#three"]);
  });
});

describe("J4-6: IndexBar, the desktop's dock", () => {
  afterEach(cleanup);
  midPage();

  it("on the server: the kicker, one link per section, '1 of N' and 'Top' to #content with no glyph", () => {
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(<IndexBar kicker="Methodology" items={ITEMS} />);
    const bar = host.firstElementChild as HTMLElement;
    expect(bar.getAttribute("data-dock")).toBe("desk");
    expect(bar.querySelector(`.${barStyles.dockKicker}`)?.textContent).toBe("Methodology");
    const links = [...bar.querySelectorAll(`a.${barStyles.dockLink}`)];
    expect(links.map((a) => [a.getAttribute("href"), a.textContent])).toEqual([
      ["#one", "One"],
      ["#two", "Two"],
      ["#three", "Three"],
    ]);
    expect(bar.querySelector(`.${barStyles.dockPos}`)?.textContent).toBe(`1 of ${ITEMS.length}`);
    const top = bar.querySelector(`a.${barStyles.dockTop}`)!;
    expect(top.getAttribute("href")).toBe("#content");
    expect(top.textContent).toBe("Top");
    expect(bar.querySelector("nav")?.getAttribute("aria-label")).toBe("Methodology: sections");
  });

  it("'{k} of {N}' follows the section in view", async () => {
    document.body.innerHTML = `<div id="one"></div><div id="two"></div><div id="three"></div>`;
    const tops: Record<string, number> = { one: -900, two: -300, three: 60 };
    for (const id of Object.keys(tops)) document.getElementById(id)!.getBoundingClientRect = () => ({ top: tops[id] }) as DOMRect;
    const { container } = render(<IndexBar kicker="Methodology" items={ITEMS} />, {
      container: document.body.appendChild(document.createElement("div")),
    });
    const nav = container.querySelector("nav")!;
    Object.defineProperty(nav, "offsetParent", { get: () => document.body, configurable: true });
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
    expect(container.querySelector(`.${barStyles.dockPos}`)?.textContent).toBe("3 of 3");
    expect([...nav.querySelectorAll("a[aria-current]")].map((a) => a.textContent)).toEqual(["Three"]);
    tops.three = 600;
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
    expect(container.querySelector(`.${barStyles.dockPos}`)?.textContent).toBe("2 of 3");
  });

  it("44px, sticky at 69, on --bg with a --rule-soft rule; the 1360 frame; desktop only", () => {
    expect(winning(BAR_CSS, ".dockBar", "position", at(1440))).toBe("sticky");
    expect(winning(BAR_CSS, ".dockBar", "top", at(1440))).toBe("69px");
    expect(winning(BAR_CSS, ".dockBar", "height", at(1440))).toBe("44px");
    expect(winning(BAR_CSS, ".dockBar", "background", at(1440))).toBe("var(--bg)");
    expect(winning(BAR_CSS, ".dockBar", "border-bottom", at(1440))).toBe("1px solid var(--rule-soft)");
    expect(winning(BAR_CSS, ".dockInner", "max-width", at(1440))).toBe("1360px");
    expect(winning(BAR_CSS, ".dockInner", "padding-inline", at(1440))).toBe("40px");
    expect(winning(BAR_CSS, ".dockInner", "padding-inline", at(1024))).toBe("32px");
    expect(winning(BAR_CSS, ".dockBar", "display", at(900))).toBe("none");
    expect(winning(BAR_CSS, ".dockBar", "display", at(901))).toBeUndefined();
  });

  it("the link in view is ink over a 2px ember rule, the rest muted; Top is gold; every label 11px", () => {
    const on = body(BAR_CSS, ".dockLink[aria-current]");
    expect(decl(on, "color")).toBe("var(--text)");
    expect(decl(on, "box-shadow")).toBe("inset 0 -2px 0 var(--ember)");
    expect(winning(BAR_CSS, ".dockLink", "color", at(1440))).toBe("var(--text-muted)");
    expect(winning(BAR_CSS, ".dockTop", "color", at(1440))).toBe("var(--gold)");
    for (const sel of [".dockKicker", ".dockLink", ".dockPos", ".dockTop"]) expect(winning(BAR_CSS, sel, "font-size", at(1440)), sel).toBe("11px");
  });
});
