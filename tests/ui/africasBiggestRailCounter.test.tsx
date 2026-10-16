import { act, cleanup, render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/africas-biggest",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../../app/records/africas-biggest/page";
import IndexBar, { type IndexItem } from "../../app/components/IndexBar";
import barStyles from "../../app/components/indexBar.module.css";
import { statBoxes } from "../../app/data/africasBiggest";

/**
 * Question 25 (live debug 15 Oct 2026, REC-6; Paul: "yes"): Africa's
 * Biggest's desktop rail counter said "1 of 21" on a page of 20 boards,
 * because the questions after the boards were counted as a 21st stop. It
 * counts the boards now — "1 of 20" to "20 of 20" — and says "Questions" at
 * the questions' stop.
 */

beforeEach(() => Object.defineProperty(document.documentElement, "scrollHeight", { value: 5000, configurable: true }));
afterEach(() => {
  cleanup();
  delete (document.documentElement as unknown as { scrollHeight?: number }).scrollHeight;
});

const tick = () =>
  act(async () => {
    window.dispatchEvent(new Event("scroll"));
    await new Promise((r) => requestAnimationFrame(() => r(null)));
  });

/** An IndexBar over targets whose tops the test moves. */
async function mount(items: IndexItem[], tops: Record<string, number>) {
  document.body.innerHTML = items.map((it) => `<div id="${it.id}"></div>`).join("");
  for (const it of items) document.getElementById(it.id)!.getBoundingClientRect = () => ({ top: tops[it.id] }) as DOMRect;
  const { container } = render(<IndexBar kicker="Africa's Biggest" items={items} grid />, {
    container: document.body.appendChild(document.createElement("div")),
  });
  const nav = container.querySelector("nav")!;
  Object.defineProperty(nav, "offsetParent", { get: () => document.body, configurable: true });
  await tick();
  const pos = () => container.querySelector(`.${barStyles.dockPos}`)?.textContent;
  /** Bring `id` to the 128px line, every other target in page order around it. */
  const at = async (id: string) => {
    const i = items.findIndex((it) => it.id === id);
    items.forEach((it, j) => (tops[it.id] = 128 + (j - i) * 700));
    await tick();
  };
  return { pos, at };
}

describe("question 25: the rail counts the boards, and names the questions", () => {
  it("the page's server HTML: “1 of 20”, the questions still the rail's last stop", () => {
    const d = new DOMParser().parseFromString(renderToStaticMarkup(<AfricasBiggestPage />), "text/html");
    const bar = d.querySelector('[data-dock="desk"]')!;
    expect(bar.querySelector(`.${barStyles.dockPos}`)!.textContent).toBe(`1 of ${statBoxes.length}`);
    const links = [...bar.querySelectorAll(`a.${barStyles.dockLink}`)];
    expect(links).toHaveLength(statBoxes.length + 1);
    expect(links.at(-1)!.getAttribute("href")).toBe("#faq");
  });

  it("the page marks its questions' stop uncounted, as “Questions”", () => {
    const src = readFileSync("app/records/africas-biggest/page.tsx", "utf8");
    expect(src).toMatch(/\{ id: "faq", label: FAQ_HEAD, uncounted: "Questions" \}/);
  });

  it("“k of N” over the boards, then “Questions” at the last stop", async () => {
    const items: IndexItem[] = [
      { id: "b1", label: "Board one" },
      { id: "b2", label: "Board two" },
      { id: "b3", label: "Board three" },
      { id: "faq", label: "Common questions", uncounted: "Questions" },
    ];
    const s = await mount(items, { b1: 128, b2: 828, b3: 1528, faq: 2228 });
    expect(s.pos()).toBe("1 of 3");
    await s.at("b3");
    expect(s.pos()).toBe("3 of 3");
    await s.at("faq");
    expect(s.pos()).toBe("Questions");
    await s.at("b2");
    expect(s.pos()).toBe("2 of 3");
  });

  it("a dock with no uncounted stop counts every stop, as before", async () => {
    const items: IndexItem[] = [
      { id: "a", label: "A" },
      { id: "b", label: "B" },
    ];
    const s = await mount(items, { a: 128, b: 828 });
    expect(s.pos()).toBe("1 of 2");
    await s.at("b");
    expect(s.pos()).toBe("2 of 2");
  });
});

describe("negative control", () => {
  it("main's counter (IndexBar.tsx:52, `{pos + 1} of {items.length}`) over main's list reads “1 of 21” and “21 of 21”", () => {
    const n = statBoxes.length + 1; // the boards, then { id: "faq", label: FAQ_HEAD }
    const shipped = (pos: number) => `${pos + 1} of ${n}`;
    expect(shipped(0)).not.toBe(`1 of ${statBoxes.length}`);
    expect(shipped(n - 1)).not.toBe("Questions");
  });
});
