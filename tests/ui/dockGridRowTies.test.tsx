import { act, cleanup, render } from "@testing-library/react";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import JumpSpy from "../../app/components/JumpSpy";
import IndexBar from "../../app/components/IndexBar";
import { pickCurrent } from "../../app/lib/spy";
import barStyles from "../../app/components/indexBar.module.css";

/**
 * dockGridRowTies (Paul, 15 Oct 2026: "yes to Job 4", call 1). Africa's
 * Biggest's desktop boards sit two to a row, and its IndexBar marked the
 * RIGHT-hand board whenever a row was at the line (pickCurrent's tie went to
 * the later entry, J4-6/C-4), so a row's left board was never current: at
 * 1440 on next dev, "Most-streamed African artist" (5 of 21) at y 128 read
 * "6 of 21", and clicking it changed nothing.
 *
 * Now, on that dock only (`grid`): a tie goes to the earlier, left board;
 * a clicked link is current while its target is on the line's row, so the
 * right-hand board can be current when chosen, until the next scroll moves
 * the line to another row. Every other dock keeps the later entry and marks
 * nothing on a click (their own suites: dockIndex, dockPages, anchorClearance,
 * grossCountriesDesign).
 */

/** Mid-page, so the foot-of-page rule (the lowest target on screen) stays out of it. */
beforeEach(() => Object.defineProperty(document.documentElement, "scrollHeight", { value: 5000, configurable: true }));
afterEach(() => {
  cleanup();
  delete (document.documentElement as unknown as { scrollHeight?: number }).scrollHeight;
});

/** A row at the 128px line: `left` and `right` share a top; `prev` above, `next` below. */
const IDS = ["prev", "left", "right", "next"] as const;
type Tops = Record<(typeof IDS)[number], number>;

function page(tops: Tops) {
  document.body.innerHTML = IDS.map((id) => `<div id="${id}"></div>`).join("");
  for (const id of IDS) document.getElementById(id)!.getBoundingClientRect = () => ({ top: tops[id] }) as DOMRect;
}

const tick = () =>
  act(async () => {
    window.dispatchEvent(new Event("scroll"));
    await new Promise((r) => requestAnimationFrame(() => r(null)));
  });

async function mount(tops: Tops, grid: boolean) {
  page(tops);
  const told: number[] = [];
  const { container } = render(
    <JumpSpy as="nav" label="Jump" offset={128} onCurrent={(i) => told.push(i)} grid={grid}>
      {IDS.map((id) => (
        <a key={id} href={`#${id}`}>
          {id}
        </a>
      ))}
    </JumpSpy>,
    { container: document.body.appendChild(document.createElement("div")) },
  );
  const nav = container.querySelector("nav")!;
  Object.defineProperty(nav, "offsetParent", { get: () => document.body, configurable: true });
  await tick();
  const link = (id: string) => nav.querySelector<HTMLAnchorElement>(`a[href="#${id}"]`)!;
  const marked = () => [...nav.querySelectorAll("a[aria-current]")].map((a) => a.textContent);
  /** Move every target by `dy` (a scroll of -dy), then let the spy read the page. */
  const scroll = async (dy: number) => {
    for (const id of IDS) tops[id] += dy;
    await tick();
  };
  const click = async (id: string, init: MouseEventInit = {}) => {
    await act(async () => {
      link(id).dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, button: 0, ...init }));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
  };
  return { marked, scroll, click, told };
}

/** The row at the line: prev passed, left and right level at 128, next below. */
const atRow = (): Tops => ({ prev: -700, left: 128, right: 128, next: 900 });

describe("pickCurrent: a tie can go to the earlier entry", () => {
  it("'earlier' takes the first of two targets at one top; the default stays the later", () => {
    expect(pickCurrent([0, 100, 100, 300], 150, "earlier")).toBe(1);
    expect(pickCurrent([0, 100, 100, 300], 150)).toBe(2);
    expect(pickCurrent([0, 100, 100, 300], 150, "later")).toBe(2);
  });

  it("only a tie moves: a list that runs down the page, or a side column, reads as before", () => {
    const SIDE = [0, 400, 900, 1400, 410, 1900]; // dockIndex's /methodology schematic
    for (const offset of [-50, 150, 405, 415, 1000, 1500, 2000, Infinity]) {
      expect(pickCurrent([0, 100, 200, 300], offset, "earlier"), `list @${offset}`).toBe(pickCurrent([0, 100, 200, 300], offset));
      expect(pickCurrent(SIDE, offset, "earlier"), `side @${offset}`).toBe(pickCurrent(SIDE, offset));
    }
  });
});

describe("JumpSpy grid: a row is current at its left board", () => {
  it("the row at the line marks the left board", async () => {
    const s = await mount(atRow(), true);
    expect(s.marked()).toEqual(["left"]);
    expect(s.told.at(-1)).toBe(1);
  });

  it("negative control: without grid (main's IndexBar on Africa's Biggest) the row marks the right board", async () => {
    const s = await mount(atRow(), false);
    expect(s.marked()).toEqual(["right"]);
  });
});

describe("JumpSpy grid: a clicked board is current until the line moves to another row", () => {
  it("click the right board on its row: it is current, and stays through a scroll inside the row", async () => {
    const s = await mount(atRow(), true);
    await s.click("right");
    expect(s.marked()).toEqual(["right"]);
    expect(s.told.at(-1)).toBe(2);
    await s.scroll(-40); // the line still in the row
    expect(s.marked()).toEqual(["right"]);
  });

  it("the next scroll that moves the line to another row ends it; back on the row, the left board again", async () => {
    const s = await mount(atRow(), true);
    await s.click("right");
    await s.scroll(-800); // next passes the line
    expect(s.marked()).toEqual(["next"]);
    await s.scroll(800); // back to the row
    expect(s.marked()).toEqual(["left"]);
  });

  it("clicked from above: the jump on its way follows the line, and lands on the right board", async () => {
    const tops: Tops = { prev: 0, left: 2000, right: 2000, next: 2800 };
    const s = await mount(tops, true);
    expect(s.marked()).toEqual(["prev"]);
    await s.click("right");
    expect(s.marked()).toEqual(["prev"]); // in flight, the line has not reached the row
    await s.scroll(-1000);
    expect(s.marked()).toEqual(["prev"]);
    await s.scroll(-872); // landed: right at 128
    expect(s.marked()).toEqual(["right"]);
  });

  it("the reader's own input before the jump reaches the row drops the choice", async () => {
    const tops: Tops = { prev: 0, left: 2000, right: 2000, next: 2800 };
    const s = await mount(tops, true);
    await s.click("right");
    window.dispatchEvent(new WheelEvent("wheel", { deltaY: 100 }));
    await s.scroll(-1872);
    expect(s.marked()).toEqual(["left"]);
  });

  it("clicking the left board after the right one marks the left", async () => {
    const s = await mount(atRow(), true);
    await s.click("right");
    await s.click("left");
    expect(s.marked()).toEqual(["left"]);
  });

  it("a modified click (a new tab: the page does not move) chooses nothing", async () => {
    const s = await mount(atRow(), true);
    await s.click("right", { ctrlKey: true });
    await s.click("right", { metaKey: true });
    expect(s.marked()).toEqual(["left"]);
  });

  it("negative control: without grid a click marks nothing; the row stays at its later entry", async () => {
    const s = await mount(atRow(), false);
    await s.click("left");
    expect(s.marked()).toEqual(["right"]);
  });
});

describe("IndexBar grid: '{k} of {N}' follows the row and the click", () => {
  it("the left board's place, then the clicked right board's", async () => {
    const tops = atRow();
    page(tops);
    const items = IDS.map((id) => ({ id, label: id }));
    const { container } = render(<IndexBar kicker="Africa's Biggest" items={items} grid />, {
      container: document.body.appendChild(document.createElement("div")),
    });
    const nav = container.querySelector("nav")!;
    Object.defineProperty(nav, "offsetParent", { get: () => document.body, configurable: true });
    await tick();
    const pos = () => container.querySelector(`.${barStyles.dockPos}`)?.textContent;
    expect(pos()).toBe("2 of 4");
    await act(async () => {
      nav.querySelector<HTMLAnchorElement>('a[href="#right"]')!.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, button: 0 }));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
    expect(pos()).toBe("3 of 4");
  });
});

describe("only Africa's Biggest's desktop dock takes grid", () => {
  const files = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? files(p) : /\.tsx$/.test(p) ? [p] : [];
    });
  /** Every <IndexBar …>, <DockIndex …> and <JumpSpy …> opening tag in app/, by file. */
  const uses = files("app")
    .filter((f) => !/components\/(IndexBar|DockIndex|JumpSpy)\.tsx$/.test(f))
    .flatMap((f) => [...readFileSync(f, "utf8").matchAll(/<(IndexBar|DockIndex|JumpSpy)\b[^>]*>/g)].map((m) => ({ f, tag: m[0] })));

  it("every dock is found, and one tag passes grid: Africa's Biggest's IndexBar", () => {
    expect(uses.length).toBeGreaterThanOrEqual(13);
    const grid = uses.filter((u) => /\sgrid(\s|=|\/|>)/.test(u.tag));
    expect(grid.map((u) => u.f)).toEqual(["app/records/africas-biggest/page.tsx"]);
    expect(grid[0].tag).toMatch(/^<IndexBar kicker="Africa's Biggest"/);
  });

  it("negative control: main's Africa's Biggest IndexBar has no grid", () => {
    // app/records/africas-biggest/page.tsx:419 on 51ad46b1.
    expect(/\sgrid(\s|=|\/|>)/.test(`<IndexBar kicker="Africa's Biggest" items={abIndex} />`)).toBe(false);
  });
});
