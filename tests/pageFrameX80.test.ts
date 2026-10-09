import { readFileSync } from "node:fs";

/**
 * J0-10 (design review 8 Oct 2026, fixes 3 and 17): one left edge for every
 * page. The frame is the site's 1360 with a 40px gutter, so content starts at
 * x 80 at 1440, x 110 at 1500 and x 40 at 1240, the masthead's, the footer's
 * and Keep exploring's; at 901–1239 the edge is the 32px gutter (C-15); the
 * phone layouts do not move.
 *
 * Measured live in headless Chrome on the dev server, 8 Oct 2026, every page
 * below at 1440 and 1024: before, the bodies started at x 120 (the car page),
 * 140 (Africa's Biggest, visualized, By the numbers, cars, /records/charts,
 * song and album pages, listeners), 170 (/methodology, /api, /embed, /share,
 * /analysis, spotify-unmerge), 184 (the compare family), 230 (/search) and 310
 * (/press, /curator); after, every h1 and breadcrumb sits at x 80 at 1440 and
 * x 32 at 1024. The tour map keeps its 1160 content box and moves from x 140
 * to x 80, so its foot stays at y 905 (fix 3).
 *
 * jsdom does no layout, so this reads the stylesheets the way the cascade
 * does for each frame block: the rules naming its classes (a compound of
 * them, like .wrap.wrap, counts each), by specificity then source order, at
 * the media that apply at that width. border-box, as globals.css sets.
 */

type Rule = { selectors: string[]; decls: [string, string][]; min: number | null; max: number | null; order: number };

function parse(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, min: number | null, max: number | null) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).split(";").pop()!.trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) {
        // Width queries only; a block that also tests pointer, scheme or motion never applies here.
        const rest = head.replace(/^@media\s*/, "").replace(/\((min|max)-width:\s*\d+px\)/g, "").replace(/\band\b/g, "").trim();
        if (rest === "") {
          const lo = head.match(/min-width:\s*(\d+)px/);
          const hi = head.match(/max-width:\s*(\d+)px/);
          walk(body, lo ? Number(lo[1]) : min, hi ? Number(hi[1]) : max);
        }
      } else if (!head.startsWith("@")) {
        const decls: [string, string][] = [];
        for (const part of body.split(";")) {
          const k = part.indexOf(":");
          if (k > 0) decls.push([part.slice(0, k).trim(), part.slice(k + 1).trim()]);
        }
        out.push({ selectors: head.split(",").map((s) => s.trim()), decls, min, max, order: out.length });
      }
      i = j;
    }
  };
  walk(src, null, null);
  return out;
}

const sheets = new Map<string, Rule[]>();
const sheet = (path: string, css?: string) => {
  const key = css === undefined ? path : `${path}#${css}`;
  if (!sheets.has(key)) sheets.set(key, parse(css ?? readFileSync(path, "utf8")));
  return sheets.get(key)!;
};

/** A frame block: the classes it carries in each stylesheet, and (for a
 *  ".band .wide" rule) the classes of the ancestors it sits in. */
type Part = { css: string; classes: string[]; ancestors?: string[]; source?: string };

/** The specificity of `selector` if it matches the element, else 0: a compound
 *  of classes it carries, optionally after compounds its ancestors carry. */
function matches(selector: string, classes: string[], ancestors: string[] = []): number {
  const compounds = selector.split(/\s+/);
  if (!compounds.every((c) => /^(\.[A-Za-z][\w-]*)+$/.test(c))) return 0;
  const own = compounds.pop()!.slice(1).split(".");
  if (!own.every((p) => classes.includes(p))) return 0;
  const up = compounds.map((c) => c.slice(1).split("."));
  if (!up.every((c) => c.every((p) => ancestors.includes(p)))) return 0;
  return own.length + up.reduce((n, c) => n + c.length, 0);
}

/** A value's top-level words: spaces inside calc()/max() do not split. */
const words = (v: string): string[] => {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of v.trim()) {
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (/\s/.test(ch) && depth === 0) {
      if (cur) out.push(cur);
      cur = "";
    } else cur += ch;
  }
  if (cur) out.push(cur);
  return out;
};

/** Four-value shorthand → [left, right]. */
const sides = (v: string): [string, string] => {
  const p = words(v);
  if (p.length === 1) return [p[0], p[0]];
  if (p.length === 2 || p.length === 3) return [p[1], p[1]];
  return [p[3], p[1]];
};

/** The box properties the cascade leaves on the element at `width`. */
function cascade(parts: Part[], width: number) {
  const hits: { spec: number; sheet: number; order: number; decls: [string, string][] }[] = [];
  parts.forEach((part, s) => {
    for (const r of sheet(part.css, part.source)) {
      if (r.min !== null && width < r.min) continue;
      if (r.max !== null && width > r.max) continue;
      const spec = Math.max(0, ...r.selectors.map((sel) => matches(sel, part.classes, part.ancestors)));
      if (spec > 0) hits.push({ spec, sheet: s, order: r.order, decls: r.decls });
    }
  });
  hits.sort((a, b) => a.spec - b.spec || a.sheet - b.sheet || a.order - b.order);
  const d: Record<string, string> = {};
  for (const h of hits)
    for (const [k, v] of h.decls) {
      if (k === "padding" || k === "margin") [d[`${k}-left`], d[`${k}-right`]] = sides(v);
      else if (k === "padding-inline" || k === "margin-inline") {
        const p = words(v);
        const base = k.replace("-inline", "");
        [d[`${base}-left`], d[`${base}-right`]] = [p[0], p[1] ?? p[0]];
      } else d[k] = v;
    }
  return d;
}

/** The :root custom properties a frame reads (.container's max-width is var(--max-width)). */
const ROOT_VARS = Object.fromEntries(
  [...readFileSync("app/globals.css", "utf8").matchAll(/^\s*(--max-width):\s*([^;]+);/gm)].map(([, k, v]) => [k, v.trim()]),
);

/** A length: px, %, and calc/min/max over them, against a containing block `cb` px wide. */
function len(raw: string | undefined, cb: number): number {
  const value = raw?.replace(/var\((--[\w-]+)\)/g, (_, name: string) => {
    if (!(name in ROOT_VARS)) throw new Error(`${name} is not read`);
    return ROOT_VARS[name];
  });
  if (value === undefined || value === "0" || value === "auto" || value === "none") return value === "none" ? Infinity : 0;
  const toks = value.match(/-?\d*\.?\d+(?:px|%)?|[a-z]+\(|[()+\-*/,]/g) ?? [];
  let i = 0;
  const num = (t: string) => {
    const m = /^(-?\d*\.?\d+)(px|%)?$/.exec(t);
    if (!m) throw new Error(`cannot read ${t} in ${value}`);
    return m[2] === "%" ? (Number(m[1]) / 100) * cb : Number(m[1]);
  };
  const list = (): number[] => {
    const xs = [sum()];
    while (toks[i] === ",") {
      i++;
      xs.push(sum());
    }
    i++;
    return xs;
  };
  const factor = (): number => {
    const t = toks[i++];
    if (t === "(" || t === "calc(") return list()[0];
    if (t === "min(") return Math.min(...list());
    if (t === "max(") return Math.max(...list());
    return num(t);
  };
  const product = (): number => {
    let x = factor();
    while (toks[i] === "*" || toks[i] === "/") x = toks[i++] === "*" ? x * factor() : x / factor();
    return x;
  };
  const sum = (): number => {
    let x = product();
    while (toks[i] === "+" || toks[i] === "-") x = toks[i++] === "+" ? x + product() : x - product();
    return x;
  };
  return sum();
}

/** The element's content box [left, width] in a containing block at `x`, `cb` px wide. */
function box(parts: Part[], width: number, x = 0, cb = width): [number, number] {
  const d = cascade(parts, width);
  const outer = Math.min(cb, len(d["max-width"] ?? "none", cb));
  const ml = d["margin-left"] === "auto" ? (d["margin-right"] === "auto" ? (cb - outer) / 2 : cb - outer - len(d["margin-right"], cb)) : len(d["margin-left"], cb);
  const pl = len(d["padding-left"], cb);
  const pr = len(d["padding-right"], cb);
  return [x + ml + pl, outer - pl - pr];
}
const leftOf = (parts: Part[], width: number) => box(parts, width)[0];

/** The frame rule: x 80 at 1440 (centred 1360, 40px gutter) from 1240 up; 32 at 901–1239. */
const frameLeft = (w: number) => (w >= 1240 ? (w - Math.min(w, 1360)) / 2 + 40 : w > 900 ? 32 : NaN);

const G = "app/globals.css";
const one = (css: string, ...classes: string[]): Part[] => [{ css, classes }];
const withWrap = (css: string, ...pads: string[]) => pads.map((p) => one(css, "wrap", p));

const AB = "app/records/africas-biggest/africas-biggest.module.css";
const VIS = "app/records/visualized/visualized.module.css";
const BTN = "app/records/by-the-numbers/byTheNumbers.module.css";
const CARS = "app/records/cars/cars.module.css";
const CAR = "app/records/cars/[car]/car.module.css";
const CHARTS = "app/records/charts/charts.module.css";
const METH = "app/methodology/methodology.module.css";
const API = "app/api/api.module.css";
const EMBED = "app/embed/embed.module.css";
const SHARE = "app/share/share.module.css";
const MAKER = "app/components/StatCardMaker.module.css";
const ANALYSIS = "app/analysis/analysis.module.css";
const COMPARE = "app/compare/compare.module.css";
const PRESS = "app/press/press.module.css";
const CURATOR = "app/curator/curator.module.css";
const SONG = "app/music/[song]/song.module.css";
const LISTENERS = "app/music/listeners/listeners.module.css";
const SEARCH = "app/search/search.module.css";
const SEARCH_LOADING = "app/search/loading.module.css";
const UNMERGE = "app/analysis/spotify-unmerge/unmerge.module.css";
const ARTIST = "app/afrobeats/[artist]/artist.module.css";
const MAP = "app/records/tours/map/map.module.css";
const KE = "app/components/KeepExploring.module.css";

/** Every frame block J0-10 moves, by page (fix 17's list and the bodies J0-10's own wording covers). */
const FRAMES: Record<string, Part[][]> = {
  "/records/cars/[car]": [one(CAR, "crumbs"), one(CAR, "stage")],
  "/records/africas-biggest": withWrap(AB, "heroPad", "groupPad", "faqPad", "pills"),
  "/records/visualized": withWrap(VIS, "heroPad", "sectionPad", "pills"),
  "/records/by-the-numbers": withWrap(BTN, "heroPad", "gridPad", "sharePad", "pills"),
  "/records/cars": ["heroWrap", "listWrap", "formerWrap", "noteWrap", "faqWrap", "actionWrap", "garageWrap"].map((c) => one(CARS, c)),
  "/records/charts": ["heroWrap", "explorerWrap", "sourceWrap", "actionWrap"].map((c) => one(CHARTS, c)),
  "/methodology": [...withWrap(METH, "heroPad", "countsPad", "sectionPad", "pills"), one(METH, "shared")],
  "/api": withWrap(API, "heroPad", "sectionPad", "pills"),
  "/embed": withWrap(EMBED, "heroPad", "sectionPad"),
  "/share": [...withWrap(SHARE, "heroPad"), ...withWrap(MAKER, "pickerPad", "mainPad", "pills")],
  "/analysis": withWrap(ANALYSIS, "heroPad", "tocPad", "findingPad", "sectionPad", "methodPad", "pills"),
  "/compare (every compare page)": [one(COMPARE, "wrap")],
  "/press": withWrap(PRESS, "heroPad", "sectionPad"),
  "/curator": withWrap(CURATOR, "heroPad", "sectionPad"),
  "/music/[song] and /music/albums/[album]": ["crumbs", "pickerPad", "heroPad", "sectionPad", "onward"].map((c) => one(SONG, c)),
  "/music/listeners": withWrap(LISTENERS, "head", "figure", "breakdown", "pills"),
  "/search (and its skeleton)": [...withWrap(SEARCH, "heroPad", "resultsPad", "pills"), one(SEARCH_LOADING, "wrap")],
  "/analysis/spotify-unmerge": withWrap(UNMERGE, "heroPad", "sectionPad"),
  "Keep exploring (every page)": [[{ css: G, classes: ["container"] }, { css: KE, classes: ["wrap"] }]],
  "the footer (every page)": [one(G, "footer")],
};

/**
 * The rest of the 901–1239 band (C-15; review, 8 Oct 2026). Every page body
 * below already sat at x 80 from 1240, but kept 40 at 901–1239 while the
 * footer and Keep exploring moved to the band's 32: the breadcrumb bar on
 * every page, the pages outside fix 17's list, and the bands whose compound
 * ".x .wide" outranked their own 1239 block's ".wide" (records, awards,
 * firsts, live charts, certifications, music). The story pages (/dai-dai,
 * /on-this-day) keep their geometry at every width (C-11), and the home
 * scoreboard strip its 24 (#238).
 */
const BC = "app/components/breadcrumbBar.module.css";
const HOME = "app/page.module.css";
const LIVEBAND = "app/components/liveBand.module.css";
const TOURS = "app/records/tours/tours.module.css";
const REV = "app/records/tours/revenue/revenue.module.css";
const FEST = "app/records/tours/festivals/festivals.module.css";
const HUB = "app/afrobeats/afrobeats.module.css";
const UPD = "app/updates/updates.module.css";
const REC = "app/records/records.module.css";
const AWARDS = "app/records/awards/awards.module.css";
const FIRSTS = "app/records/firsts/firsts.module.css";
const LIVE = "app/live-charts/liveCharts.module.css";
const CERTS = "app/certifications/certifications.module.css";
const MUSIC = "app/music/music.module.css";
const ABOUT = "app/about/about.module.css";
const FAQ = "app/faq/faq.module.css";
const CONTACT = "app/contact/contact.module.css";
const TL = "app/timeline/timeline.module.css";
const N66 = "app/naija66/naija66.module.css";
const withWide = (css: string, ...pads: string[]) => pads.map((p) => one(css, "wide", p));
/** A ".wide" inside each named band: the ".band .wide" rule is the one that sets its sides. */
const inBand = (css: string, ...bands: string[]): Part[][] => bands.map((b) => [{ css, classes: ["wide"], ancestors: [b] }]);

const BAND_FRAMES: Record<string, Part[][]> = {
  "the breadcrumb bar (every page that has one)": [one(BC, "inner")],
  "/ (the hero and the live band)": [one(HOME, "heroGrid"), one(LIVEBAND, "inner")],
  "/records/tours": withWide(TOURS, "heroPad", "sectionPad", "revenuePad", "momentsPad", "sourcePad"),
  "/records/tours/revenue and /countries": [one(REV, "page")],
  "/records/tours/festivals": withWide(FEST, "heroPad", "groupPad", "sourcePad"),
  "/afrobeats": [one(HUB, "hero"), one(HUB, "gridPad")],
  "/afrobeats/[artist] (and the crumbs of its charts and live pages)": ["crumbs", "heroPad", "sectionPad", "chartPad", "compare", "onward", "faqPad"].map((c) => one(ARTIST, c)),
  "/updates": withWide(UPD, "heroPad", "filterPad", "feedPad", "followPad", "sourcePad"),
  "/records": [...inBand(REC, "hero", "section", "boxBand"), one(REC, "headlineGrid")],
  "/records/awards": [...inBand(AWARDS, "hero", "honoursBand", "faqBand", "sourceBand"), one(AWARDS, "headlineGrid"), one(AWARDS, "ceremonyGrid")],
  "/records/firsts": [...inBand(FIRSTS, "hero", "groupSection", "sourceBand"), one(FIRSTS, "headlineGrid"), one(FIRSTS, "jumpInner")],
  "/live-charts (and the board artists' live pages)": [...inBand(LIVE, "hero", "section", "sourceBand"), one(LIVE, "summaryGrid")],
  "/certifications (and the board artists' certifications)": [...inBand(CERTS, "filterBand", "groupSection", "sourceBand", "logBand"), one(CERTS, "heroGrid"), one(CERTS, "summaryGrid")],
  "/music": [...inBand(MUSIC, "section", "altSection"), one(MUSIC, "heroGrid")],
  "/about": withWide(ABOUT, "heroPad", "split", "timelinePad"),
  "/faq": withWide(FAQ, "heroPad", "jumpPad", "groupPad", "sourcePad"),
  "/contact": withWide(CONTACT, "heroPad", "split"),
  "/timeline": ["hero", "era", "today"].map((c) => one(TL, c)),
  "/naija66": withWide(N66, "hero", "section"),
};

/**
 * Left edges at 402 and 900 on main (d3c39eda), computed by this file's own
 * cascade from main's stylesheets (git show origin/main:<file>), not from the
 * ones under test. One exception: /music/listeners' pills, whose 0 sides were
 * the fault fixed here (they sat at x 100 at 1440, 40px left of the page); the
 * block is in the desktop tree, display:none below 901 (the phone draws
 * MobileListeners).
 */
const PHONE_ON_MAIN: Record<string, [number, number][]> = {
  "/records/cars/[car]": [[32, 32], [0, 0]],
  "/records/africas-biggest": [[40, 40], [40, 40], [40, 40], [40, 40]],
  "/records/visualized": [[40, 40], [40, 40], [40, 40]],
  "/records/by-the-numbers": [[40, 40], [40, 40], [40, 40], [40, 40]],
  "/records/cars": [[32, 32], [32, 32], [32, 32], [32, 32], [32, 32], [32, 32], [32, 32]],
  "/records/charts": [[32, 32], [32, 32], [32, 32], [32, 32]],
  "/methodology": [[40, 40], [40, 40], [40, 40], [40, 40], [18, 18]],
  "/api": [[40, 40], [40, 40], [40, 40]],
  "/embed": [[40, 40], [40, 40]],
  "/share": [[18, 18], [18, 18], [18, 18], [18, 18]],
  "/analysis": [[40, 40], [40, 40], [40, 40], [18, 18], [40, 40], [40, 40]],
  "/compare (every compare page)": [[16, 24]],
  "/press": [[40, 40], [40, 40]],
  "/curator": [[40, 40], [40, 40]],
  "/music/[song] and /music/albums/[album]": [[18, 18], [18, 18], [18, 18], [18, 18], [18, 18]],
  "/music/listeners": [[40, 40], [40, 40], [40, 40], [0, 0]],
  "/search (and its skeleton)": [[18, 18], [18, 18], [18, 18], [18, 18]],
  "/analysis/spotify-unmerge": [[40, 40], [40, 40]],
  "Keep exploring (every page)": [[24, 24]],
  "the footer (every page)": [[40, 40]],
};
const PHONE_FIXED: Record<string, [number, number][]> = { "/music/listeners": [[40, 40], [40, 40], [40, 40], [40, 40]] };
/** Left edges at 402 and 900 on main (d3c39eda), computed as PHONE_ON_MAIN is. */
const BAND_PHONE_ON_MAIN: Record<string, [number, number][]> = {
  "the breadcrumb bar (every page that has one)": [[18, 18]],
  "/ (the hero and the live band)": [[40, 40], [18, 40]],
  "/records/tours": [[40, 40], [40, 40], [40, 40], [40, 40], [40, 40]],
  "/records/tours/revenue and /countries": [[40, 40]],
  "/records/tours/festivals": [[40, 40], [40, 40], [40, 40]],
  "/afrobeats": [[18, 40], [18, 40]],
  "/afrobeats/[artist] (and the crumbs of its charts and live pages)": [[40, 40], [18, 18], [18, 18], [18, 40], [18, 18], [18, 18], [18, 18]],
  "/updates": [[40, 40], [40, 40], [40, 40], [40, 40], [40, 40]],
  "/records": [[40, 40], [40, 40], [40, 40], [32, 32]],
  "/records/awards": [[40, 40], [40, 40], [40, 40], [40, 40], [32, 32], [32, 32]],
  "/records/firsts": [[40, 40], [40, 40], [40, 40], [32, 32], [32, 32]],
  "/live-charts (and the board artists' live pages)": [[40, 40], [40, 40], [40, 40], [32, 32]],
  "/certifications (and the board artists' certifications)": [[40, 40], [40, 40], [40, 40], [32, 32], [32, 32], [32, 32]],
  "/music": [[40, 40], [40, 40], [32, 32]],
  "/about": [[40, 40], [40, 40], [40, 40]],
  "/faq": [[40, 40], [40, 40], [40, 40], [40, 40]],
  "/contact": [[40, 40], [40, 40]],
  "/timeline": [[18, 40], [18, 40], [18, 40]],
  "/naija66": [[40, 40], [40, 40]],
};

describe("J0-10: every page body starts on the site's one left edge", () => {
  for (const [page, blocks] of Object.entries(FRAMES)) {
    it(`${page}: x 80 at 1440, 110 at 1500, 40 at 1240, 32 at 1024`, () => {
      for (const w of [1240, 1280, 1440, 1500, 1920, 1024, 901, 1239]) {
        expect(blocks.map((b) => leftOf(b, w)), `${page} at ${w}`).toEqual(blocks.map(() => frameLeft(w)));
      }
    });
  }

  it("the phone layouts do not move: every block's edge at 402 and 900 is main's", () => {
    const now = Object.fromEntries(Object.entries(FRAMES).map(([page, blocks]) => [page, blocks.map((b) => [leftOf(b, 402), leftOf(b, 900)])]));
    expect(now).toEqual({ ...PHONE_ON_MAIN, ...PHONE_FIXED });
  });

  it("the car page joins the band at 1200–1239 too, where its own tablet breakpoint (1199) does not reach", () => {
    for (const b of FRAMES["/records/cars/[car]"]) for (const w of [1200, 1239]) expect(leftOf(b, w), `${w}`).toBe(32);
  });

  it("the board-artist FAQ block joins the rest of its page at x 80 (it was 1180 wide, at x 170)", () => {
    const faq = one(ARTIST, "faqPad");
    const hero = one(ARTIST, "heroPad");
    for (const w of [1240, 1440, 1500, 1920]) expect(leftOf(faq, w), `${w}`).toBe(leftOf(hero, w));
    expect(leftOf(faq, 1440)).toBe(80);
  });
});

describe("C-15: the rest of the 901–1239 band — every page body and the breadcrumb bar at 32 (review, 8 Oct 2026)", () => {
  for (const [page, blocks] of Object.entries(BAND_FRAMES)) {
    it(`${page}: 32 at 901–1239, and the frame's x 80 at 1440 as before`, () => {
      for (const w of [901, 1024, 1239, 1240, 1280, 1440, 1500, 1920])
        expect(blocks.map((b) => leftOf(b, w)), `${page} at ${w}`).toEqual(blocks.map(() => frameLeft(w)));
    });
  }

  it("the phone layouts do not move: every block's edge at 402 and 900 is main's", () => {
    const now = Object.fromEntries(Object.entries(BAND_FRAMES).map(([page, blocks]) => [page, blocks.map((b) => [leftOf(b, 402), leftOf(b, 900)])]));
    expect(now).toEqual(BAND_PHONE_ON_MAIN);
  });

  it("the home scoreboard strip keeps its 24 at 901–1239 (#238)", () => {
    expect(leftOf([{ css: HOME, classes: ["wide"], ancestors: ["scoreStrip"] }], 1024)).toBe(24);
  });

  it("negative control: /records' hero band as shipped (d3c39eda) sat at 40 under its own 1239 block", () => {
    // app/records/records.module.css on d3c39eda: lines 49 and 53, and the
    // whole 1239 block (223–233), verbatim.
    const shipped = `.wide { max-width: 1360px; margin: 0 auto; padding: 0 40px; }
.hero .wide { padding: 54px 40px 46px; }
@media (max-width: 1239px) {
  .wide, .headlineGrid { padding-inline: 32px; }
  .h1 { font-size: 70px; }
  /* The strip keeps its four columns and the record books their two down to
     901px (the phone screen takes over below): at three, "2021 Grammy winner"
     sat alone on a second row, and at one the sixteen cards ran 944px wide
     at 1024 (design review 8 Oct 2026, R-14). */
  .head { flex-wrap: wrap; gap: 16px; }
  .headBtn { margin-left: 0; }
}`;
    const b: Part[] = [{ css: "records-on-main", source: shipped, classes: ["wide"], ancestors: ["hero"] }];
    expect(leftOf(b, 1024)).toBe(40);
    expect(leftOf(b, 1024)).not.toBe(frameLeft(1024));
  });

  it("negative control: the breadcrumb bar as shipped (d3c39eda) kept 40 at 1024", () => {
    // app/components/breadcrumbBar.module.css .inner on d3c39eda, verbatim.
    const shipped = `.inner {
  max-width: 1360px;
  margin: 0 auto;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono), monospace;
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  flex-wrap: wrap;
}`;
    expect(leftOf([{ css: "crumbs-on-main", source: shipped, classes: ["inner"] }], 1024)).toBe(40);
  });
});

describe("fix 3: the tour map keeps its 1160 content box and moves to x 80", () => {
  const blocks = ["head", "figure", "breakdown", "pills"].map((c) => one(MAP, "wrap", c));

  it("x 80–1240 at 1440, x 110 at 1500; 1160 wide, so the 900/405 frame and its y-905 foot do not change", () => {
    for (const [w, left] of [
      [1440, 80],
      [1500, 110],
      [1920, 320],
    ])
      for (const b of blocks) expect(box(b, w), `${w}`).toEqual([left, 1160]);
  });

  it("up to 1360 its edge is the frame's 40px; in the 901–1239 band it is the band's 32 (C-15), the page's and its breadcrumb bar's", () => {
    for (const b of blocks) {
      expect(box(b, 1240)).toEqual([40, 1160]);
      expect(box(b, 1300)).toEqual([40, 1160]);
      expect(box(b, 1024)).toEqual([32, 960]);
      expect(box(b, 901)).toEqual([32, 837]);
    }
  });

  it("the skip link lines up with it", () => {
    const skip = sheet(MAP).find((r) => r.selectors.includes(".skip") && r.min === null && r.max === null)!;
    const left = skip.decls.find(([k]) => k === "left")![1];
    expect(len(left, 1440)).toBe(80);
    expect(len(left, 1500)).toBe(110);
    expect(len(left, 1240)).toBe(40);
    const band = sheet(MAP).filter((r) => r.selectors.includes(".skip") && r.min === 901 && r.max === 1239);
    expect(band.flatMap((r) => r.decls).filter(([k]) => k === "left").map(([, v]) => v)).toEqual(["32px"]);
  });

  it("the lede keeps max-width 430px (two lines at 1440)", () => {
    const lede = sheet(MAP).filter((r) => r.selectors.includes(".lede") && r.min === null && r.max === null);
    expect(lede.flatMap((r) => r.decls).filter(([k]) => k === "max-width").map(([, v]) => v)).toEqual(["430px"]);
  });
});

describe("the second column goes to the right (panel 6): /methodology's sources, /press's downloads", () => {
  const rulesAt = (css: string, sel: string, w: number) =>
    sheet(css)
      .filter((r) => r.selectors.includes(sel) && (r.min === null || w >= r.min) && (r.max === null || w <= r.max))
      .flatMap((r) => r.decls);
  const value = (css: string, sel: string, prop: string, w: number) => rulesAt(css, sel, w).filter(([k]) => k === prop).pop()?.[1];

  it("/methodology: from 1240 a 340px sources column beside the reading column, inside the frame (fix 86)", () => {
    expect(value(METH, ".split", "grid-template-columns", 1440)).toBe("minmax(0, 1fr) 340px");
    expect(value(METH, ".split", "display", 1440)).toBe("grid");
    expect(box(one(METH, "split"), 1440)).toEqual([80, 1280]);
    expect(value(METH, ".split", "display", 1239)).toBeUndefined();
    const tsx = readFileSync("app/methodology/page.tsx", "utf8");
    // Source order unchanged: the three shared sections, then the sources, then the closing blocks.
    const ids = ["accessibility", "rejected", "registers", "sources"].map((id) => tsx.indexOf(`aria-labelledby="${id}"`));
    expect(ids.every((x, k) => x > 0 && (k === 0 || x > ids[k - 1]))).toBe(true);
    expect(tsx.slice(tsx.indexOf("styles.splitSide"), tsx.indexOf('aria-labelledby="sources"'))).not.toMatch(/aria-labelledby/);
  });

  it("/press: from 1240 a 420px downloads column beside the reading column (C-10)", () => {
    expect(value(PRESS, ".split", "grid-template-columns", 1440)).toBe("minmax(0, 1fr) 420px");
    expect(box(one(PRESS, "split"), 1440)).toEqual([80, 1280]);
    expect(value(PRESS, ".split", "display", 1239)).toBeUndefined();
    const tsx = readFileSync("app/press/page.tsx", "utf8");
    expect(tsx).toMatch(/className=\{`\$\{styles\.wrap\} \$\{styles\.sectionPad\} \$\{styles\.splitSide\}`\} aria-labelledby="downloads"/);
    // The left sections take one auto row each, and there are fewer of them than the rows the grid declares.
    const split = tsx.slice(tsx.indexOf("styles.split}"), tsx.indexOf("<KeepExploring"));
    const left = (split.match(/aria-labelledby="/g) ?? []).length - 1;
    expect(left).toBeLessThanOrEqual(12);
    expect(value(PRESS, ".split", "grid-template-rows", 1440)).toBe("repeat(12, auto) 1fr");
  });
});

describe("negative controls: the frames main shipped", () => {
  it("compare's 1120/24 box put every compare page at x 184", () => {
    const shipped = `.wrap {\n  width: 100%;\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 0 24px 96px;\n}`;
    const b: Part[] = [{ css: "compare-on-main", source: shipped, classes: ["wrap"] }];
    expect(leftOf(b, 1440)).toBe(184);
    expect(leftOf(b, 1440)).not.toBe(frameLeft(1440));
  });

  it("/press's 900/40 put it at x 310", () => {
    const shipped = `.wrap { max-width: 900px; margin: 0 auto; padding: 0 40px; }\n.heroPad { padding: 44px 40px 0; }`;
    expect(leftOf([{ css: "press-on-main", source: shipped, classes: ["wrap", "heroPad"] }], 1440)).toBe(310);
  });

  it("Keep exploring on .container's 1280/24 sat at x 104", () => {
    const shipped = `.wrap.wrap {\n  margin: 64px auto 80px;\n}\n@media (max-width: 760px) {\n  .wrap.wrap {\n    margin: 36px auto 56px;\n  }\n}`;
    const b: Part[] = [{ css: G, classes: ["container"] }, { css: "ke-on-main", source: shipped, classes: ["wrap"] }];
    expect(leftOf(b, 1440)).toBe(104);
  });

  it("the tour map centred in a 1240 box sat at x 140", () => {
    const shipped = `.wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; }`;
    expect(box([{ css: "map-on-main", source: shipped, classes: ["wrap"] }], 1440)).toEqual([140, 1160]);
  });
});
