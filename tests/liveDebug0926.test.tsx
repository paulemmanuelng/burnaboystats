import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
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
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../app/compare/page";
import ApiPage from "../app/api/page";
import styles from "../app/compare/compare.module.css";
import { afterHitBox } from "./fixtures/cssRules";

/**
 * The live-site debug of 26 Sep 2026: bugs measured on burnaboystats.com at the
 * width and theme named in each block. Layout needs a browser, so these read the
 * CSS the way the cascade will — rule, media block and order — and the pages'
 * own markup. Each negative control is the rule, markup or line that shipped.
 */

type Rule = { media: string | null; selector: string; body: string; at: number };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null, base: number) => {
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
      if (head.startsWith("@media")) walk(body, head, base + open + 1);
      else out.push({ media, selector: head, body, at: base + i });
      i = j;
    }
  };
  walk(src, null, 0);
  return out;
}

const read = (p: string) => readFileSync(p, "utf8");
const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();

/** A rule that applies at `width`: no media, or a max-width media at or above it. */
const appliesAt = (width: number) => (media: string | null) => {
  if (media === null) return true;
  const m = media.match(/^@media \(max-width: (\d+)px\)$/);
  return Boolean(m && Number(m[1]) >= width);
};

/** The winning value of `prop` for exactly `selector` at `width`: last in source order. */
function valueAt(css: string, selector: string, prop: string, width: number): string | undefined {
  let win: string | undefined;
  for (const r of rules(css)) {
    if (!appliesAt(width)(r.media)) continue;
    if (!r.selector.split(",").map((s) => s.trim()).includes(selector)) continue;
    const v = decl(r.body, prop);
    if (v !== undefined) win = v;
  }
  return win;
}

/** A font-size in px: px, the --type-label token, em against the parent, or max() of those. */
const LABEL_PX = Number(/--type-label:\s*(\d+(?:\.\d+)?)px/.exec(read("app/globals.css"))![1]);
function px(v: string | undefined, parentPx: number): number {
  if (v === undefined) return NaN;
  const t = v.trim();
  const max = /^max\((.*)\)$/.exec(t);
  if (max) return Math.max(...max[1].split(",").map((p) => px(p, parentPx)));
  if (t === "var(--type-label)") return LABEL_PX;
  if (t.endsWith("px")) return parseFloat(t);
  if (t.endsWith("em")) return parseFloat(t) * parentPx;
  return NaN;
}

const COMPARE = "app/compare/compare.module.css";

describe("compare-1: a focused mode segment keeps its whole ring on a phone", () => {
  // Live at 320 and 390: .seg clips its segments (overflow: hidden) and the
  // site ring sits 2px OUTSIDE the element, so SONGS kept only its right-hand
  // arc and ALBUMS its two sides.
  const ringInside = (css: string) => {
    const clips = valueAt(css, ".seg", "overflow", 390) === "hidden";
    const outline = valueAt(css, ".segItem:focus-visible", "outline", 390);
    const shadow = valueAt(css, ".segItem:focus-visible", "box-shadow", 390) ?? "";
    return !clips || (outline === "none" && /^inset\b/.test(shadow));
  };

  it("the phone pill clips, so the ring is drawn inside the segment", () => {
    expect(valueAt(read(COMPARE), ".seg", "overflow", 390)).toBe("hidden");
    expect(ringInside(read(COMPARE))).toBe(true);
    // Desktop keeps the site's outside ring: the pill does not clip there.
    expect(valueAt(read(COMPARE), ".segItem:focus-visible", "box-shadow", 1440)).toBeUndefined();
  });

  it("negative control: the rules that shipped", () => {
    const shipped = `@media (max-width: 760px) {\n  .seg { padding: 0; gap: 0; overflow: hidden; }\n  .segItem { border-radius: 0; }\n  .segItem + .segItem { border-left: 1px solid var(--rule); }\n}\n.searchInput:focus-visible, .searchBtn:focus-visible, .chip:focus-visible, .segItem:focus-visible,\n.switch:focus-visible { border-radius: 999px; }`;
    expect(ringInside(shipped)).toBe(false);
  });
});

describe("compare-2: a headline name is never cut to make room for '· at least'", () => {
  // Live: at 390 "KIZZ DANI…" and "TIWA SAVA…" (1px short), at 360 "BURNA BO…",
  // at 320 "BURNA…", "SEYI …", "LOVE,…". The qualifier now takes the next line.
  const wraps = (css: string) => valueAt(css, ".headName", "flex-wrap", 390) === "wrap";
  const level = (css: string) =>
    rules(css).some(
      (r) =>
        appliesAt(390)(r.media) &&
        r.selector === ".head:not(.headSolo) .headCell" &&
        decl(r.body, "display") === "flex" &&
        decl(r.body, "flex-direction") === "column" &&
        decl(r.body, "justify-content") === "flex-end",
    );

  it("the label wraps on a phone, and both cells stack from the foot so the figures stay level", () => {
    expect(wraps(read(COMPARE))).toBe(true);
    expect(level(read(COMPARE))).toBe(true);
    // The design review's tracking is kept (tests/compareMobileReview.test.tsx, item 4).
    expect(valueAt(read(COMPARE), ".headName", "letter-spacing", 390)).toBe("0.08em");
  });

  it("negative control: the shipped phone rule did not wrap", () => {
    expect(wraps(`@media (max-width: 760px) {\n  .headName { letter-spacing: 0.08em; }\n}`)).toBe(false);
  });

  // The space between name and qualifier ends the NAME, so a wrapped "· at
  // least" starts flush with the name rather than one space in.
  const qualifiers = (h: string) =>
    [...h.matchAll(new RegExp(`<span class="${styles.headNameQual}">([^<]*)</span>`, "g"))].map((m) => m[1]);
  const flush = (q: string) => q.startsWith("·");

  it("both qualifiers start with the dot, and the text still reads 'Kizz Daniel · at least'", async () => {
    const h = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve({ a: "kizz-daniel", b: "tiwa-savage" }) }));
    const q = qualifiers(h);
    expect(q.length).toBe(2);
    expect(q.every(flush)).toBe(true);
    const text = h.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ");
    expect(text).toContain("Kizz Daniel · at least");
    expect(text).toContain("Tiwa Savage · at least");
  });

  it("negative control: the shipped qualifier began with a space", () => {
    expect(flush(" · at least")).toBe(false);
  });
});

describe("compare-4 / plaques-5: the programme badge is on the 11px floor", () => {
  // Live on /afrobeats/rema: "Latin" was 9.02px on the phone (0.82em of 11px)
  // and 9.45px on desktop (0.82em of 11.52px).
  const FILES: [string, number][] = [
    ["app/components/mobileCerts.module.css", 11],
    ["app/afrobeats/[artist]/artist.module.css", 11],
    ["app/certifications/certifications.module.css", 11.52],
  ];
  it("in all three stylesheets", () => {
    for (const [f, parent] of FILES) expect(px(valueAt(read(f), ".badgeProgram", "font-size", 390), parent), f).toBeGreaterThanOrEqual(11);
  });
  it("negative control: the shipped 0.82em", () => {
    expect(px("0.82em", 11)).toBeCloseTo(9.02, 2);
    expect(px("0.82em", 11.52)).toBeLessThan(11);
  });

  // The ONE exemption: the issuer modifier, .badgeIssuer — a label's own award
  // ("Sony Music Africa" on Tyla's ZA plaques), never a programme. The owner
  // asked for it on 3 Oct 2026: "reduce the text size of sony music africa so
  // it fit perfectly". Every other rule that sizes a marker stays on the floor;
  // "Latin" never takes the modifier (tests/labelMarker.test.tsx).
  const EXEMPT = ".badgeIssuer";
  const underFloor = (css: string, parent: number) =>
    rules(css)
      .filter((r) => /\.badge(Program|Issuer)\b/.test(r.selector) && r.selector.trim() !== EXEMPT)
      .filter((r) => decl(r.body, "font-size") !== undefined && !(px(decl(r.body, "font-size"), parent) >= 11))
      .map((r) => r.selector);
  it("no other marker rule goes under it — only the issuer modifier is exempt, and only to 9px", () => {
    for (const [f, parent] of FILES) {
      const css = read(f);
      expect(underFloor(css, parent), f).toEqual([]);
      const exempt = rules(css).filter((r) => r.selector.trim() === EXEMPT);
      expect(exempt, f).toHaveLength(1);
      expect(px(decl(exempt[0].body, "font-size"), parent), f).toBeGreaterThanOrEqual(9);
    }
  });
  it("negative control: the exemption does not cover the programme marker at the size that shipped", () => {
    expect(underFloor(".badgeProgram { font-size: 0.82em; }\n.badgeIssuer { font-size: 9px; }", 11)).toEqual([".badgeProgram"]);
  });
});

describe("plaques-3: the phone board's tiles, cadence and door are on the 11px floor", () => {
  const HUB = "app/components/mobileAfrobeatsHub.module.css";
  const SELECTORS = [".tileStat", ".badge", ".badgeBound", ".cadence", ".doorLink", ".anchorTag"];
  const under = (css: string) =>
    [320, 390].flatMap((w) =>
      SELECTORS.filter((s) => !(px(valueAt(css, s, "font-size", w), 16) >= 11)).map((s) => `${s} at ${w}`),
    );
  it("every one of them, at 320 and 390", () => {
    expect(under(read(HUB))).toEqual([]);
  });
  it("negative control: the sizes that shipped", () => {
    const shipped = `.cadence { font-size: 10.5px; }\n.doorLink { font-size: 10.5px; }\n.anchorTag { font-size: 10px; }\n.tileStat { font-size: 10px; }\n.badge { font-size: 9.5px; }\n.badgeBound { font-size: 9.5px; }`;
    expect(under(shipped).length).toBe(12);
  });
});

describe("plaques-4: the scatter's HTML legend is on the 11px floor", () => {
  it("the legend under the plot", () => {
    expect(px(valueAt(read("app/components/hubScatter.module.css"), ".legend", "font-size", 1440), 16)).toBeGreaterThanOrEqual(11);
  });
  it("negative control: the shipped 10.5px", () => {
    expect(px("10.5px", 16)).toBeLessThan(11);
  });
});

describe("plaques-6: phone targets on the country boards and the breadcrumb reach 44px", () => {
  // Live at 320 and 390: every .cbArtistLink was 36px tall with nothing
  // extending it, and the breadcrumb links were 24px (HOME 32×24).
  const artistTarget = (css: string) => {
    const after = rules(css).find((r) => r.selector === ".cbArtistLink::after");
    const inset = after ? decl(after.body, "inset") : undefined;
    const grow = inset ? -2 * parseFloat(inset.split(/\s+/)[0]) : 0;
    const positioned = valueAt(css, ".cbArtistLink", "position", 390) === "relative";
    return 36 + (positioned ? grow : 0);
  };
  it("a country board's artist link: 36px face plus its ::after", () => {
    expect(artistTarget(read(COMPARE))).toBeGreaterThanOrEqual(44);
  });
  it("negative control: the shipped link", () => {
    expect(artistTarget(`.cbArtistLink { display: inline-flex; align-items: center; gap: 11px; min-width: 0; }`)).toBe(36);
  });

  const BAR = "app/components/breadcrumbBar.module.css";
  const crumb = (css: string) => parseFloat(valueAt(css, ".inner a", "min-height", 390) ?? "0");
  it("a phone breadcrumb link", () => {
    expect(crumb(read(BAR))).toBeGreaterThanOrEqual(44);
    // And the bar keeps its height: the padding moved into the links.
    expect(valueAt(read(BAR), ".inner", "min-height", 390)).toBe("44px");
  });
  it("negative control: the shipped 24px", () => {
    expect(crumb(`.inner a {\n  min-height: 24px;\n}\n@media (max-width: 900px) {\n  .inner { padding: 10px 18px; gap: 8px; font-size: 11px; }\n}`)).toBe(24);
  });

  it("the '+10' badge fold: its ::after makes the target 44px", () => {
    // An absolute ::after is placed against the padding box: the button is
    // 27.6px tall with a 1px border, so 25.6px, measured live on /afrobeats/rema.
    // Since 8 Oct 2026 (design review CC-14) the box is centred and at least
    // 44px each way, so it is read with afterHitBox rather than as an inset.
    const PADDING_BOX = 25.6;
    const after = rules(read("app/components/mobileCerts.module.css")).find((r) => r.selector === ".badgeMore::after")!.body;
    expect(afterHitBox(after, [39.2, PADDING_BOX])[1]).toBeGreaterThanOrEqual(44);
    expect(PADDING_BOX - 2 * parseFloat("-8px")).toBeCloseTo(41.6, 5); // the shipped inset, as measured
  });
});

describe("updates-4: /api promises the feed logs Burna Boy's figures, not every change", () => {
  // Since PR #340 the feed carries Burna Boy only, while the same licence covers
  // /api/v1/afrobeats and certifications.csv for the whole board.
  const SHIPPED = "every change is logged on the updates feed";
  const text = () => renderToStaticMarkup(ApiPage()).replace(/<[^>]+>/g, " ").replace(/&#x27;|&apos;/g, "'").replace(/\s+/g, " ");
  it("both layouts scope the line", () => {
    const t = text();
    expect(t).not.toContain(SHIPPED);
    expect(t.split("every change to Burna Boy's figures is logged on the updates feed").length - 1).toBe(2);
  });
  it("negative control: the shipped line", () => {
    expect(`How each figure is verified is set out on the methodology page, and ${SHIPPED}.`).toContain(SHIPPED);
  });
});

describe("radar-docs-4: every file a design brief names is in the repo, or the line says it is not", () => {
  // Live on GitHub, 26 Sep 2026: the briefs named images/og-day-16-august.png,
  // shots/home-desktop-band-dark.png and ~/burnaboy-work/… paths a designer
  // cannot open. The shots were committed as JPGs under other names.
  const BRIEFS = ["docs/design/on-this-day", "docs/design/dai-dai-redesign"];
  const md = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? md(p) : p.endsWith(".md") ? [p] : [];
    });
  // The card's download filename, which the page names; not a file in the brief.
  const DOWNLOAD = /^burna-boy-on-this-day-/;
  const broken = (brief: string, file: string, text: string) => {
    const shots = new Set(readdirSync(join(brief, "shots")));
    return text.split("\n").flatMap((line, i) => {
      if (/not in the repo/.test(line)) return [];
      const refs = [...line.matchAll(/[\w./~-]+\.(?:png|jpg)\b/g)].map((m) => m[0]);
      const bad = refs.filter((r) => !shots.has(r.split("/").pop()!) && !DOWNLOAD.test(r.split("/").pop()!));
      if (/~\/burnaboy-work\//.test(line)) bad.push("~/burnaboy-work/…");
      return bad.map((b) => `${file}:${i + 1} ${b}`);
    });
  };
  it("for both briefs", () => {
    const all = BRIEFS.flatMap((b) => md(b).map((f) => broken(b, f, read(f)))).flat();
    expect(md(BRIEFS[0]).length).toBeGreaterThan(3);
    expect(all).toEqual([]);
  });
  it("negative control: the lines that shipped", () => {
    const shipped = [
      "| `images/og-day-16-august.png` | day OG, busy day (5) |",
      "| `shots/home-desktop-band-dark.png` / `-light.png` | 1440×900 | The scoreboard's foot |",
      "Reference renders of the live cards are in `~/burnaboy-work/otd-handoff/ref/`, fetched from burnaboystats.com on 26 Sep 2026 (see §2.13).",
    ].join("\n");
    // The og image, both halves of the home-band pair, and the Mac path.
    expect(broken(BRIEFS[0], "inventory.md", shipped).length).toBe(4);
  });
});
