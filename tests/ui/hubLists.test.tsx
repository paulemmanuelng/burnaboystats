import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats",
}));

import AfrobeatsPage from "../../app/afrobeats/page";
import hubStyles from "../../app/afrobeats/afrobeats.module.css";
import listStyles from "../../app/components/hubLists.module.css";
import phoneStyles from "../../app/components/mobileAfrobeatsHub.module.css";
import { sweptArtists, BURNA } from "../../app/data/afrobeats";
import { allItems } from "../../app/data/certifications";
import { trees, text, dom } from "../fixtures/phoneTrees";
import { rules, decl } from "../fixtures/cssRules";

/**
 * hubLists (site review 8 Oct 2026, Job 5 · J5-4 (e), fixes 97, 102, 115,
 * 117): "Widest reach" and "Deepest at home" under the wall — on the phone,
 * and on the desktop page at 901–1239 where the scatter is not drawn. Each is
 * the top five and any tied with the fifth, recomputed here from the
 * certifications themselves.
 */
const { main, phone } = trees(renderToStaticMarkup(<AfrobeatsPage />));
const desktop = main.querySelector(`.${hubStyles.desktopBody}`)!;
const CSS = readFileSync("app/components/hubLists.module.css", "utf8");
const bodyOf = (sel: string, media: (m: string | null) => boolean = (m) => m === null) =>
  rules(CSS)
    .filter((r) => media(r.media) && r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");

/** Each artist's certifications by country, Burna Boy's from his own ledger. */
const certCountries = [
  { name: BURNA.name, codes: allItems.flatMap((i) => i.certs.map((c) => c.c)) },
  ...sweptArtists.map((a) => ({ name: a.name, codes: a.releases.flatMap((r) => r.certs.map((c) => c.c)) })),
];
const widest = certCountries.map((a) => ({ name: a.name, v: new Set(a.codes).size }));
const deepest = certCountries.map((a) => {
  const by = new Map<string, number>();
  for (const c of a.codes) by.set(c, (by.get(c) ?? 0) + 1);
  return { name: a.name, v: Math.max(...by.values()) };
});
/** The top five by v, and every one tied with the fifth. */
const topFive = (xs: { name: string; v: number }[]) => {
  const sorted = [...xs].sort((a, b) => b.v - a.v);
  const fifth = sorted[4].v;
  return sorted.filter((x, i) => i < 5 || x.v === fifth);
};

const listsIn = (root: Element) =>
  [...root.querySelectorAll(`.${listStyles.list}`)].map((l) => ({
    title: text(l.querySelector(`.${listStyles.title}`)),
    sub: text(l.querySelector(`.${listStyles.sub}`)),
    rows: [...l.querySelectorAll(`.${listStyles.row}`)].map((r) => ({
      el: r,
      rank: text(r.querySelector(`.${listStyles.rank}`)),
      name: text(r.querySelector(`.${listStyles.name}`)),
      value: Number(text(r.querySelector(`.${listStyles.value}`))),
    })),
  }));

describe("hubLists: the two ranked lists", () => {
  it.each([
    ["phone", () => phone!],
    ["desktop", () => desktop],
  ])("%s: Widest reach and Deepest at home, top five plus ties, from the certifications", (_, tree) => {
    const lists = listsIn(tree());
    expect(lists.map((l) => [l.title, l.sub])).toEqual([
      ["Widest reach", "Most countries with a certification"],
      ["Deepest at home", "Most certifications in one country"],
    ]);
    for (const [list, want] of [
      [lists[0], topFive(widest)],
      [lists[1], topFive(deepest)],
    ] as const) {
      expect(list.rows.map((r) => r.value)).toEqual(want.map((w) => w.v));
      expect(new Set(list.rows.map((r) => r.name))).toEqual(new Set(want.map((w) => w.name)));
      for (const r of list.rows) {
        const above = list.rows.filter((o) => o.value > r.value).length;
        const tied = list.rows.filter((o) => o.value === r.value).length > 1;
        expect(r.rank).toBe(`${tied ? "=" : ""}${above + 1}`);
      }
    }
  });

  it("his row is N4 and every bar is the single-series --other on --bg-soft-2", () => {
    for (const l of listsIn(phone!)) {
      for (const r of l.rows) {
        const his = r.name === BURNA.name;
        expect(r.el.classList.contains(listStyles.rowHis)).toBe(his);
        expect(r.el.querySelector(`.${listStyles.value}`)!.classList.contains(listStyles.valueHis)).toBe(his);
      }
    }
    expect(decl(bodyOf(".bar"), "background")).toBe("var(--other)");
    expect(decl(bodyOf(".track"), "background")).toBe("var(--bg-soft-2)");
    expect(decl(bodyOf(".valueHis"), "color")).toBe("var(--gold)");
    expect(decl(bodyOf(".name"), "color")).toBe("var(--text)");
    expect(decl(bodyOf(".rowHis"), "background")).toMatch(/--gold-wash-base/);
  });

  it("shown on the phone and at 901–1239; hidden from 1240, where the scatter says it", () => {
    expect(bodyOf(".desktop", (m) => m === "@media (min-width: 1240px)")).toMatch(/display:\s*none/);
    expect(phone!.querySelector(`.${listStyles.phone}`)).not.toBeNull();
    expect(desktop.querySelector(`.${listStyles.desktop}`)).not.toBeNull();
    // The phone's lists sit after the wall and before the rails.
    const wallPad = phone!.querySelector(`.${phoneStyles.wallPad}`)!;
    expect(wallPad.nextElementSibling?.classList.contains(listStyles.lists)).toBe(true);
  });

  /** A name rule's cue at rest and on hover, read the way the cascade does. */
  const cueOf = (css: string) => {
    const at = (sel: string) => rules(css).filter((r) => r.media === null && r.selector === sel).map((r) => r.body).join(";");
    return {
      line: decl(at(".name"), "text-decoration") ?? "",
      colour: decl(at(".name"), "text-decoration-color") ?? "",
      hover: decl(at(".name:hover"), "text-decoration-color") ?? "",
    };
  };
  /** R-12's cue, as every other board name carries it (africas-biggest .entryLink). */
  const isCue = (c: ReturnType<typeof cueOf>) =>
    c.line === "underline" && /color-mix\(in srgb, currentColor 35%, transparent\)/.test(c.colour) && c.hover === "currentColor";

  it("the hub's names look like links at rest (R-12): the board's 35% underline, full on hover", () => {
    // The table's names and the two lists' names; the phone has no hover.
    for (const file of ["app/components/hubBoardView.module.css", "app/components/hubLists.module.css"])
      expect(isCue(cueOf(readFileSync(file, "utf8"))), file).toBe(true);
    expect(isCue(cueOf(readFileSync("app/records/africas-biggest/africas-biggest.module.css", "utf8").replace(/\.entryLink/g, ".name")))).toBe(true);
  });

  it("negative control: the hub's names as first built carried no underline until hovered", () => {
    // hubLists.module.css and hubBoardView.module.css on 299ebba4 (J5-4).
    const built = `.name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
}
.name:hover { text-decoration: underline; }`;
    expect(isCue(cueOf(built))).toBe(false);
  });

  it("negative control: the shipped phone wall ran straight into the rails", () => {
    // MobileAfrobeatsHub.tsx:214–219 on main e85e6efe.
    const shipped = dom(
      `<div><div class="${phoneStyles.wallPad}"><div class="${phoneStyles.wall}"></div></div><div class="${phoneStyles.rails}"></div></div>`,
    );
    expect(listsIn(shipped.body).length).toBe(0);
  });
});
