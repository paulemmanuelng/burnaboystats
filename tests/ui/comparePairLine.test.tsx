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
import PairPage from "../../app/compare/[pair]/page";
import CountryIndexPage from "../../app/compare/in/page";
import styles from "../../app/compare/compare.module.css";
import { pairLine } from "../../app/lib/comparePairLine";
import { artistBySlug, nigeriaDefault, priceArtist } from "../../app/lib/certUnits";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { winning } from "../fixtures/cssRules";

/**
 * J2-3, fix 45 (design review 8 Oct 2026): one derived line under a pair
 * page's h1. "Plaques" means every certification held — priced plus not
 * comparable — and the bands are 1.95 ≤ r < 2.05 "twice", r ≥ 2.05 "{r}×",
 * lower "more", equal "Both hold {n}". The second clause says whose
 * certifications are worth more units. The site's noun is "certifications"
 * (Copy 2, B-10), so the sentence says so.
 */

const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const lineOf = (page: Element) => page.querySelector(`.${styles.pairLine}`)?.textContent ?? null;
const pairPage = async (slug: string) => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
const query = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));

/** Every certification a side holds under the switches on screen (the pair's own defaults unless set), read from the engine directly. */
const held = (aSlug: string, bSlug: string, view: { ng?: boolean; feat?: boolean } = {}) => {
  const a = artistBySlug(aSlug)!;
  const b = artistBySlug(bSlug)!;
  const includeFeatures = view.feat ?? true;
  const includeNigeria = view.ng ?? nigeriaDefault(a, b, includeFeatures).on;
  const pa = priceArtist(a, { includeNigeria, includeFeatures });
  const pb = priceArtist(b, { includeNigeria, includeFeatures });
  return { a: pa.pricedPlaques + pa.excludedPlaques, b: pb.pricedPlaques + pb.excludedPlaques, ta: pa.total, tb: pb.total };
};

describe("the rule (synthetic counts)", () => {
  const at = (plaquesA: number, plaquesB: number, totalA = 10, totalB = 5) => pairLine({ nameA: "A", nameB: "B", plaquesA, plaquesB, totalA, totalB });

  it("the band edges are whole-number comparisons", () => {
    expect(at(39, 20)).toBe("A holds twice the certifications (39 vs 20), and they are worth more units."); // 1.95
    expect(at(40, 20)).toBe("A holds twice the certifications (40 vs 20), and they are worth more units.");
    expect(at(41, 20)).toBe("A holds 2.1× the certifications (41 vs 20), and they are worth more units."); // 2.05
    expect(at(38, 20)).toBe("A holds more certifications (38 vs 20), and they are worth more units."); // 1.90
    expect(at(19, 20)).toBe("B holds more certifications (20 vs 19); A's are worth more units.");
  });

  it("a tenth below ten, whole from ten, with the page's separators", () => {
    expect(at(179, 47)).toContain("3.8× the certifications");
    expect(at(199, 20)).toContain("10× the certifications"); // 9.95 rounds to ten
    expect(at(199, 10)).toContain("20× the certifications");
    expect(at(1848, 1)).toContain("1,848× the certifications (1,848 vs 1)");
  });

  it("the second clause: the holder's units lead, trail, or tie", () => {
    // A tenth below ten, as the verdict prints it ("a floor 3.0× the size").
    expect(at(30, 10, 5, 9)).toBe("A holds 3.0× the certifications (30 vs 10); B's are worth more units.");
    expect(at(30, 10, 9, 9)).toBe("A holds 3.0× the certifications (30 vs 10); their units are level.");
    expect(pairLine({ nameA: "Tems", nameB: "A", plaquesA: 4, plaquesB: 10, totalA: 9, totalB: 1 })).toBe("A holds 2.5× the certifications (10 vs 4); Tems' are worth more units.");
  });

  it("equal counts: both hold n, then whose units lead", () => {
    expect(at(19, 19, 1, 2)).toBe("Both hold 19 certifications; B's are worth more units.");
    expect(at(19, 19, 2, 2)).toBe("Both hold 19 certifications; their units are level.");
    expect(at(1, 1, 2, 1)).toBe("Both hold 1 certification; A's are worth more units.");
  });

  it("a side holding none is 'more', never an infinite ratio", () => {
    expect(at(5, 0)).toBe("A holds more certifications (5 vs 0), and they are worth more units.");
  });
});

describe("the line on the pages", () => {
  it("the pages' lines: the rule on every certification held under the switches on screen, never a typed count", async () => {
    // Pairs whose lines sat in four different bands on 14 Oct 2026 ("twice",
    // "3.8×", "Both hold", "more"); the band words themselves are the
    // synthetic tests' job, so a cert sweep that moves a count moves nothing here.
    const cases: [string, Element, string, string, { ng?: boolean; feat?: boolean }][] = [
      ["burna-boy-vs-wizkid", await pairPage("burna-boy-vs-wizkid"), "burna-boy", "wizkid", {}],
      ["burna-boy-vs-rema", await pairPage("burna-boy-vs-rema"), "burna-boy", "rema", {}],
      ["omah-lay-vs-ckay", await pairPage("omah-lay-vs-ckay"), "omah-lay", "ckay", {}],
      ["victony-vs-tiwa-savage", await pairPage("victony-vs-tiwa-savage"), "victony", "tiwa-savage", {}],
      // The switches are the page's: Nigeria in, then features off.
      ["ng=1", await query({ a: "burna-boy", b: "wizkid", ng: "1" }), "burna-boy", "wizkid", { ng: true }],
      ["feat=0", await query({ a: "burna-boy", b: "wizkid", feat: "0" }), "burna-boy", "wizkid", { feat: false }],
    ];
    for (const [label, page, a, b, view] of cases) {
      const h = held(a, b, view);
      expect(lineOf(page), label).toBe(pairLine({ nameA: artistBySlug(a)!.name, nameB: artistBySlug(b)!.name, plaquesA: h.a, plaquesB: h.b, totalA: h.ta, totalB: h.tb }));
    }
    // The switches reach the line: each changes what Burna Boy vs Wizkid counts.
    const base = held("burna-boy", "wizkid");
    expect(held("burna-boy", "wizkid", { ng: true })).not.toEqual(base);
    expect(held("burna-boy", "wizkid", { feat: false })).not.toEqual(base);
  });

  it("on every 10th pair the counts are every certification held, read from the engine, and the line sits under the h1 in the lede's place", async () => {
    const pairs = allPairs().filter((_, i) => i % 10 === 0);
    expect(pairs.length).toBe(Math.ceil(allPairs().length / 10));
    for (const [a, b] of pairs) {
      const page = await pairPage(pairSlug(a, b));
      const line = lineOf(page)!;
      const h = held(a.slug, b.slug);
      const [more, fewer] = h.a >= h.b ? [h.a, h.b] : [h.b, h.a];
      expect(line, pairSlug(a, b)).toContain(h.a === h.b ? `Both hold ${h.a.toLocaleString("en-US")} ` : `(${more.toLocaleString("en-US")} vs ${fewer.toLocaleString("en-US")})`);
      expect(line).toBe(pairLine({ nameA: a.name, nameB: b.name, plaquesA: h.a, plaquesB: h.b, totalA: h.ta, totalB: h.tb }));
      expect(page.querySelector("h1")!.nextElementSibling?.classList.contains(styles.pairLine), pairSlug(a, b)).toBe(true);
      expect(page.querySelector(`.${styles.lede}`), pairSlug(a, b)).toBeNull();
      expect(line).not.toMatch(/\bplaques?\b|\bawards?\b/);
    }
  }, 30000);

  it("only a pair view carries it: the tool, a record pair and the country views keep their ledes", async () => {
    for (const page of [
      await query({}),
      await query({ a: "burna-boy" }),
      await query({ a: "burna-boy", b: "burna-boy" }),
      await query({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" }),
      root(renderToStaticMarkup(await CountryIndexPage())),
    ]) {
      expect(page.querySelector(`.${styles.pairLine}`)).toBeNull();
    }
    expect((await query({})).querySelector(`.${styles.lede}`)).not.toBeNull();
  });

  it("ink, not gold: body text at the lede's size, 15px on the phone", () => {
    const css = readFileSync("app/compare/compare.module.css", "utf8");
    const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /min-width: 901px/.test(m) ? w > 900 : false);
    expect(winning(css, ".pairLine", "color", at(1440))).toBe("var(--text-body)");
    expect(winning(css, ".pairLine", "font-size", at(1440))).toBe("var(--type-lede)");
    expect(winning(css, ".pairLine", "font-size", at(390))).toBe("15px");
  });

  it("negative control: the counted figure the sample used is not the held one", async () => {
    // The live slot meta on /compare/burna-boy-vs-wizkid, 8 Oct 2026: the
    // PRICED count, which J2-3's "(178 vs 88)" sample read.
    const live = root('<span class="compare-module__-ZWgpW__metaSeg">178 counted<!-- --> ·</span>').textContent!;
    const counted = Number(live.match(/^(\d+) counted/)![1]);
    const h = held("burna-boy", "wizkid");
    expect(counted).toBe(priceArtist(artistBySlug("burna-boy")!, { includeNigeria: false, includeFeatures: true }).pricedPlaques);
    expect(counted).not.toBe(h.a);
    for (const [a, b] of allPairs().filter(([x, y]) => x.slug === "burna-boy" && y.slug === "wizkid")) {
      expect(lineOf(await pairPage(pairSlug(a, b)))).not.toContain(`(${counted} vs ${h.b})`);
    }
  });
});
