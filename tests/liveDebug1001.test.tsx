import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

/** The pathname usePathname() returns; a test moves it. */
const nav = vi.hoisted(() => ({ path: "/" }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => nav.path,
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../app/records/africas-biggest/page";
import desk from "../app/records/africas-biggest/africas-biggest.module.css";
import { statBoxes } from "../app/data/africasBiggest";
import CarsPage from "../app/records/cars/page";
import { totalValueFormatted, totalValueReported } from "../app/data/cars";
import { searchStats } from "../app/lib/searchStats";
import MethodologyPage from "../app/methodology/page";
import Breadcrumbs from "../app/components/Breadcrumbs";
import FooterNav from "../app/components/FooterNav";
import Nav from "../app/components/Nav";
import MobileTabBar from "../app/components/MobileTabBar";
import MobileNavSheet from "../app/components/MobileNavSheet";
import { navGroups, navUpdated, navSearchHint } from "../app/lib/navGroups";
import { suggestedSearchDocs } from "../app/lib/searchSuggested";
import { breadcrumbList } from "../app/lib/seo";
import { pagePath } from "../app/lib/pagePath";

/**
 * The live-site debug of 1 Oct 2026: problems measured on burnaboystats.com at
 * the width and theme named in each block. Layout needs a browser, so the CSS
 * guards resolve the cascade the way a browser does — media query, then
 * specificity, then source order — over a stand-in DOM built from the page's
 * own markup. Each negative control is the rule, line or string the live site
 * shipped.
 */

// ── A small cascade ─────────────────────────────────────────────────────────

type Rule = { media: string | null; selector: string; body: string };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head);
      else if (!head.startsWith("@")) out.push({ media, selector: head, body });
      i = j;
    }
  };
  walk(src, null);
  return out;
}

const read = (p: string) => readFileSync(p, "utf8");
const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();

/** Does a media query hold at this viewport width? Width queries only; any
 *  other feature (hover, colour scheme, print) is treated as not holding. */
function holds(media: string | null, width: number): boolean {
  if (media === null) return true;
  const parts = media.replace(/^@media\s*/, "").split(/\s+and\s+/);
  return parts.every((p) => {
    const m = p.match(/^\((max|min)-width:\s*(\d+)px\)$/);
    if (!m) return false;
    return m[1] === "max" ? width <= Number(m[2]) : width >= Number(m[2]);
  });
}

/** Selector specificity as [ids, classes + attributes + pseudo-classes, types]. */
function specificity(selector: string): [number, number, number] {
  let s = selector
    .replace(/:global\(([^)]*)\)/g, "$1")
    .replace(/:where\([^)]*\)/g, "")
    .replace(/:(?:not|is|has)\(([^)]*)\)/g, " $1")
    .replace(/::[\w-]+(\([^)]*\))?/g, " ");
  const attrs = (s.match(/\[[^\]]*\]/g) ?? []).length;
  s = s.replace(/\[[^\]]*\]/g, " ");
  const pseudos = (s.match(/:[\w-]+(\([^)]*\))?/g) ?? []).length;
  s = s.replace(/:[\w-]+(\([^)]*\))?/g, " ");
  const ids = (s.match(/#[\w-]+/g) ?? []).length;
  const classes = (s.match(/\.[\w-]+/g) ?? []).length;
  s = s.replace(/[#.][\w-]+/g, " ");
  const types = (s.match(/(^|[\s>+~])[a-zA-Z][\w-]*/g) ?? []).length;
  return [ids, classes + attrs + pseudos, types];
}
const beats = (a: [number, number, number], b: [number, number, number]) =>
  a[0] !== b[0] ? a[0] > b[0] : a[1] !== b[1] ? a[1] > b[1] : a[2] > b[2];

/**
 * The value of `prop` that wins on `el` at `width`. `sheets` go in the order
 * the browser loads them; `states` are the dynamic pseudo-classes the element
 * is in (e.g. "focus-visible") — any other dynamic state does not match.
 */
function computed(sheets: string[], el: Element, prop: string, width: number, states: string[] = []) {
  let win: { spec: [number, number, number]; value: string } | undefined;
  for (const css of sheets) {
    for (const r of rules(css)) {
      if (!holds(r.media, width)) continue;
      const value = decl(r.body, prop);
      if (value === undefined) continue;
      for (const sel of r.selector.split(",").map((x) => x.trim())) {
        let test = sel.replace(/:global\(([^)]*)\)/g, "$1");
        for (const st of states) test = test.split(`:${st}`).join("");
        if (/:(hover|active|focus|focus-visible|focus-within|visited|checked)\b/.test(test)) continue;
        let hit = false;
        try {
          hit = el.matches(test);
        } catch {
          hit = false;
        }
        if (!hit) continue;
        const spec = specificity(sel);
        // Equal specificity: the later rule wins, so ">=" keeps source order.
        if (!win || !beats(win.spec, spec)) win = { spec, value };
      }
    }
  }
  return win?.value;
}

/** A stand-in element tree, with the stylesheet's own (un-hashed) class names. */
function dom(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

// ── 1. /records/africas-biggest: the Billboard grid at 901–1239 ─────────────

describe("africas-biggest: the board grids have no invented track at any desktop width", () => {
  const SHEET = read("app/records/africas-biggest/africas-biggest.module.css");

  // The grids as the page renders them: each section's boxes, featured or not,
  // and wide or not (a board that takes the row at two tracks, 7 Oct 2026).
  const served = (() => {
    const host = dom(renderToStaticMarkup(<AfricasBiggestPage />));
    return [...host.querySelectorAll(`section[id] > .${desk.boxGrid}`)].map((g) => ({
      id: g.parentElement!.id,
      featured: [...g.children].map((c) => c.classList.contains(desk.boxFeatured)),
      wide: [...g.children].map((c) => c.classList.contains(desk.boxWide)),
    }));
  })();

  /** The grid rebuilt with the sheet's own class names. */
  const standIn = (featured: boolean[], wide: boolean[] = []) =>
    dom(
      `<section><div class="boxGrid">${featured
        .map((f, i) => `<div class="box${f ? " boxFeatured" : wide[i] ? " boxWide" : ""}"></div>`)
        .join("")}</div></section>`,
    ).querySelector(".boxGrid")!;

  const tracks = (css: string, grid: Element, width: number) =>
    (computed([css], grid, "grid-template-columns", width) ?? "").split(/\s+(?![^(]*\))/).filter(Boolean).length;

  /** Columns each box asks for: "span N" is N, the featured "1 / -1" is the row. */
  const spans = (css: string, grid: Element, width: number) =>
    [...grid.children].map((c) => {
      const v = computed([css], c, "grid-column", width) ?? "auto";
      const m = v.match(/^span (\d+)$/);
      return m ? Number(m[1]) : v === "1 / -1" ? "row" : 1;
    });

  /** No box asks for more tracks than the grid has, and every row is full.
   *  The boxes are placed the way the browser's sparse auto-placement does: a
   *  full-row box ("1 / -1") starts a new row, and a box too wide for what is
   *  left of a row moves to the next — either way leaving a hole, which a sum
   *  of cells would not see (a wide box after an odd count balances the sum). */
  const sound = (css: string, featured: boolean[], width: number, wide: boolean[] = []) => {
    const grid = standIn(featured, wide);
    const n = tracks(css, grid, width);
    const s = spans(css, grid, width);
    const fits = s.every((x) => x === "row" || x <= n);
    let col = 0;
    let holes = 0;
    for (const x of s) {
      const w = x === "row" ? n : Math.min(x, n);
      if (col > 0 && (x === "row" || col + w > n)) {
        holes += n - col;
        col = 0;
      }
      col = (col + w) % n;
    }
    if (col > 0) holes += n - col;
    return fits && holes === 0;
  };

  it("reads the grids off the page: Billboard leads with the featured Global 200 box", () => {
    const billboard = served.find((g) => g.id === "billboard");
    expect(billboard?.featured[0]).toBe(true);
    expect(billboard?.featured.length).toBe(4);
    expect(served.reduce((n, g) => n + g.featured.length, 0)).toBe(statBoxes.length);
  });

  it("is one track between 901 and 1239, and no box spans a second", () => {
    for (const width of [901, 1024, 1180, 1239]) {
      for (const g of served) {
        expect(tracks(SHEET, standIn(g.featured, g.wide), width), `${g.id} @${width}`).toBe(1);
        expect(sound(SHEET, g.featured, width, g.wide), `${g.id} @${width}`).toBe(true);
      }
    }
  });

  it("still fills the last row at two tracks (1240 and up)", () => {
    for (const width of [1240, 1440]) {
      for (const g of served) {
        expect(tracks(SHEET, standIn(g.featured, g.wide), width), `${g.id} @${width}`).toBe(2);
        expect(sound(SHEET, g.featured, width, g.wide), `${g.id} @${width}`).toBe(true);
      }
    }
    // The Billboard weeks board is the one that needs the stretch at two tracks.
    const billboard = served.find((g) => g.id === "billboard")!;
    expect(spans(SHEET, standIn(billboard.featured), 1440).at(-1)).toBe(2);
  });

  it("the 500M board takes the whole row at two tracks, one cell at one, and the grid after it still fills (7 Oct 2026)", () => {
    // Review of 7 Oct 2026: in one cell it stood 1,234px tall beside the
    // followers board's ~490px, a 745px empty cell at 1240 and up.
    const g = served.find((x) => x.wide.some(Boolean))!;
    expect(g?.id).toBe("streaming");
    expect(g.wide.filter(Boolean).length, "one full-row box per grid: a second flips the parity back").toBe(1);
    const at = g.wide.indexOf(true);
    expect(statBoxes.filter((b) => b.wide).map((b) => b.id)).toEqual(["most-500m-stream-songs"]);
    expect(spans(SHEET, standIn(g.featured, g.wide), 1440)[at]).toBe("row");
    expect(spans(SHEET, standIn(g.featured, g.wide), 1024)[at]).toBe(1);
    // Negative control: the same sheet without the wide box's parity rules
    // leaves the grid's last cell empty — the "phantom cell" the stretch
    // rules exist to prevent.
    const noParity = SHEET.replace(/,\s*\.boxGrid > \.boxWide ~ :last-child:nth-child\([^)]*\)/g, "");
    expect(noParity).not.toBe(SHEET);
    expect(sound(noParity, g.featured, 1440, g.wide)).toBe(false);
    expect(sound(SHEET, g.featured, 1440, g.wide)).toBe(true);
  });

  it("negative control: the shipped sheet spanned the weeks board across a 1-track grid at 1024", () => {
    const SHIPPED = `.boxGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--rule);
  margin-top: 22px;
  border: 1px solid var(--rule-soft);
}
.boxGrid > :last-child:nth-child(2n + 1) { grid-column: span 2; }
.boxGrid > .boxFeatured ~ :last-child:nth-child(2n + 1) { grid-column: auto; }
.boxGrid > .boxFeatured ~ :last-child:nth-child(2n) { grid-column: span 2;
}
.boxFeatured {
  grid-column: 1 / -1;
}
@media (max-width: 1239px) {
  .boxGrid { grid-template-columns: 1fr; }
  .boxGrid > :last-child, .boxGrid > .boxFeatured ~ :last-child { grid-column: auto; }
}`;
    const billboard = served.find((g) => g.id === "billboard")!;
    expect(spans(SHIPPED, standIn(billboard.featured), 1024)).toEqual(["row", 1, 1, 2]);
    expect(sound(SHIPPED, billboard.featured, 1024)).toBe(false);
    // ...and it was right at 1240, which is why only the narrower band broke.
    expect(sound(SHIPPED, billboard.featured, 1240)).toBe(true);
  });
});

// ── 2. /records/africas-biggest: the best-selling board's public source ─────

describe("africas-biggest: board sources are written for visitors, not for the re-reader", () => {
  /** Maintainer notes: shouted instructions, method memos, an owner's ruling. */
  const memo = (s: string) =>
    [
      /\b[A-Z]{3,}(?:\s+[A-Z#]{2,}){2,}/, // a shouted phrase: "READ THE RANK FROM THE g#"
      /\bPaul\b/,
      /\bruling\b/i,
      // Not "re-read": "Re-read at Billboard's own chart histories" is a
      // visitor-facing provenance line on the Global 200 board.
      /\bnegative control\b/i,
    ].filter((re) => re.test(s));

  it("no board's source line carries a maintainer note", () => {
    for (const b of statBoxes) expect(memo(b.source), b.id).toEqual([]);
  });

  it("the best-selling source keeps the public facts: board, date, ranks, method, nationality", () => {
    const src = statBoxes.find((b) => b.id === "best-selling-african-artist-eas")!.source;
    expect(src).toContain("ChartMasters' daily Best-Selling Artists of All-Time board");
    expect(src).toContain("read 30 September 2026");
    for (const e of statBoxes.find((b) => b.id === "best-selling-african-artist-eas")!.entries!) {
      expect(src).toMatch(new RegExp(`${e.name} [\\d,]+ \\(rank \\d+\\)`));
    }
    expect(src).toContain("CSPC");
    expect(src).toContain("streaming-only");
    expect(src).toMatch(/Akon .* American artist/);
  });

  it("negative control: the source the live page shipped fails", () => {
    const SHIPPED = [
      "READ THE RANK FROM THE g# COLUMN, NOT THE # COLUMN: the leading # is a client-side row counter that resets to 1 under any search or filter, so a re-read that searches for a name and copies the first number will publish a rank of 1.",
      "IMPORTANT ON METHOD, still true: ChartMasters has not completed a CSPC study for any of the three",
      "THE NAME ANYONE WILL RAISE: Akon sits at rank 501 on 16,736,000 EAS, ahead of Burna Boy. ChartMasters tags his country as the United States, and so does this site — Paul's ruling of 17 September 2026",
    ];
    for (const line of SHIPPED) expect(memo(line).length, line.slice(0, 40)).toBeGreaterThan(0);
  });
});

// ── 3. /records/cars: every surface prints the total with its "+" ───────────

describe("cars: the collection total reads $X+ on every surface", () => {
  /** Printings of `total` with no "+" after them. */
  const bare = (text: string, total = totalValueFormatted) =>
    [...text.matchAll(new RegExp(total.replace(/[$.]/g, "\\$&") + "(?!\\+)", "g"))].length;

  it("is one constant: the formatted total and its +", () => {
    expect(totalValueReported).toBe(`${totalValueFormatted}+`);
  });

  it("the page, phone hero and desktop alike, never prints it bare", () => {
    nav.path = "/records/cars";
    const html = renderToStaticMarkup(<CarsPage />);
    expect(html.split(totalValueReported).length - 1).toBeGreaterThanOrEqual(4);
    expect(bare(html)).toBe(0);
  });

  it("the /search row reads it with the +", () => {
    expect(searchStats["/records/cars"]).toBe(totalValueReported);
  });

  it("negative control: the phone lede and stat the live page shipped are bare", () => {
    // The total the live page carried on 1 Oct 2026, as it printed it.
    expect(bare("Sixteen confirmed cars worth a reported $17.54M — led by a one-of-one ₦9bn Bugatti.", "$17.54M")).toBe(1);
    expect(bare("$17.54M", "$17.54M")).toBe(1);
  });
});

// ── 4. /methodology: no source-file names in reader copy ────────────────────

describe("methodology: reader copy names no source file", () => {
  const FILE = /\b[\w-]+\.(?:tsx?|mjs|jsx?)\b/;
  const text = (html: string) =>
    dom(html.replace(/<script[\s\S]*?<\/script>/g, "")).textContent ?? "";

  it("both layouts describe the streaming method in plain words", () => {
    nav.path = "/methodology";
    const t = text(renderToStaticMarkup(<MethodologyPage />));
    expect(t).not.toMatch(FILE);
    expect(t.split("re-measured at each dated read").length - 1).toBe(2);
  });

  it("negative control: the line the live page shipped names one", () => {
    expect(
      "anchored to a dated read of ChartMasters' Playcounts Tool (last 30 September 2026), the method streamingTotals.ts documents.",
    ).toMatch(FILE);
  });
});

// ── 5. /records/tours: the paired cards line up at 1024 ─────────────────────

describe("tours: the two cards in the row line up their titles and their figure lines", () => {
  const SHEET = read("app/records/tours/tours.module.css");
  const card = () =>
    dom(
      `<div class="cardsRow"><a class="jumpCard" href="#"><span class="cardText"><span class="cardTitle"></span><span class="cardDesc"></span><span class="cardSub"></span></span><span class="jumpArrow"></span></a></div>`,
    );

  /** Where a flex item sits on the cross axis: its own align-self, else the card's align-items. */
  const crossAxis = (css: string, item: string, width: number) => {
    const host = card();
    const own = computed([css], host.querySelector(item)!, "align-self", width);
    return own && own !== "auto" ? own : computed([css], host.querySelector(".jumpCard")!, "align-items", width);
  };
  /** The text block fills the card's height, and the description takes the slack. */
  const lined = (css: string, width: number) =>
    crossAxis(css, ".cardText", width) === "stretch" &&
    computed([css], card().querySelector(".cardDesc")!, "flex-grow", width) === "1";

  it("lines the pair up at every desktop width, and keeps the arrow centred", () => {
    for (const width of [901, 1024, 1180, 1440]) {
      expect(lined(SHEET, width), `@${width}`).toBe(true);
      expect(crossAxis(SHEET, ".jumpArrow", width), `@${width}`).toBe("center");
    }
  });

  it("negative control: the shipped rules centred the text block, which drops the shorter one", () => {
    const SHIPPED = `.jumpCard,
.jumpCardAlt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 26px;
}
.cardText { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
.cardDesc { color: var(--text-muted); font-size: 13.5px; line-height: 1.45; }`;
    expect(crossAxis(SHIPPED, ".cardText", 1024)).toBe("center");
    expect(lined(SHIPPED, 1024)).toBe(false);
  });
});

// ── 6. Keyboard focus keeps the pill and the card corners ───────────────────

describe("focus: the new links keep their own radius under the site's focus ring", () => {
  const GLOBALS = read("app/globals.css");
  const radius = (sheet: string, html: string, sel: string, width: number, states: string[]) =>
    computed([GLOBALS, sheet], dom(html).querySelector(sel)!, "border-radius", width, states);

  const PILL = `<a class="mapLink" href="#">Where he's performed</a>`;
  const CARDS = `<div class="cardsRow"><a class="jumpCard" href="#"></a></div><a class="jumpCardAlt" href="#"></a>`;

  it("the festivals map pill stays a pill, desktop and phone", () => {
    for (const [file, width] of [
      ["app/records/tours/festivals/festivals.module.css", 1440],
      ["app/components/mobileFestivals.module.css", 390],
    ] as const) {
      const sheet = read(file);
      expect(radius(sheet, PILL, ".mapLink", width, []), file).toBe("999px");
      expect(radius(sheet, PILL, ".mapLink", width, ["focus-visible"]), file).toBe("999px");
    }
  });

  it("the tours cards keep their corner", () => {
    const sheet = read("app/records/tours/tours.module.css");
    for (const sel of [".jumpCard", ".jumpCardAlt"]) {
      expect(radius(sheet, CARDS, sel, 1440, ["focus-visible"]), sel).toBe(radius(sheet, CARDS, sel, 1440, []));
    }
  });

  it("negative control: the shipped pill rule lost to the global ring and squared off", () => {
    const SHIPPED = `.mapLink {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 20px;
  margin-bottom: 4px;
  border-radius: 999px;
}
.mapLink:hover { background: var(--bg-raised); }`;
    // The global ring as it shipped then: it carried the 3px itself until
    // V-global-09 (7 Oct 2026) moved that into a zero-specificity :where().
    const SHIPPED_RING = `a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
summary:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
  border-radius: 3px;
}`;
    const pill = dom(PILL).querySelector(".mapLink")!;
    expect(computed([SHIPPED_RING, SHIPPED], pill, "border-radius", 1440, ["focus-visible"])).toBe("3px");
  });
});

// ── 7. The home page rebuilt as "/index" ────────────────────────────────────

describe("home: the hourly rebuild's \"/index\" renders exactly what the browser renders for \"/\"", () => {
  const chrome = () =>
    renderToStaticMarkup(
      <>
        <Breadcrumbs />
        <Nav suggested={suggestedSearchDocs()} />
        <MobileNavSheet groups={navGroups} updated={navUpdated} searchHint={navSearchHint} />
        <MobileTabBar />
        <FooterNav />
      </>,
    );
  const at = (path: string) => {
    nav.path = path;
    return chrome();
  };

  it("maps the regeneration's name for the root, and nothing else", () => {
    expect(pagePath("/index")).toBe("/");
    expect(pagePath("/")).toBe("/");
    expect(pagePath("/records/cars")).toBe("/records/cars");
    expect(pagePath("/index/x")).toBe("/index/x");
  });

  it("the header, sheet, tab bar, footer and breadcrumbs are the same markup at both", () => {
    const home = at("/");
    expect(home).toContain("footerGrid");
    expect(home).toContain("navActive");
    expect(at("/index")).toBe(home);
    expect(at("/index")).not.toContain("BreadcrumbList");
  });

  it("negative control: the raw path built the BreadcrumbList item the cached home page served", () => {
    const SHIPPED = `{"@type":"ListItem","position":2,"name":"index","item":"https://burnaboystats.com/index"}`;
    expect(JSON.stringify(breadcrumbList("/index"))).toContain(SHIPPED);
    expect(breadcrumbList(pagePath("/index"))).toBeNull();
  });
});
