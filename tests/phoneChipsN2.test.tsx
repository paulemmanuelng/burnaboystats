import { describe, it, expect, vi } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { render, screen, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/updates",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileUpdates from "../app/components/MobileUpdates";
import updatesStyles from "../app/components/mobileUpdates.module.css";
import { updates } from "../app/data/updates";

/**
 * The selected chip on every phone rail is N2's (owner, 5 Oct 2026).
 *
 * The certifications rail's active chip became an ember edge, an ember wash
 * and an ink label in #415 (ruling N2, 4 Oct), so the Compare action stayed
 * the screen's one gold fill. The other phone rails still drew their selected
 * chip in gold — /records/charts and the board artists' chart screens, the
 * year pills on /records/africas-biggest (a SOLID gold fill), the deep pages,
 * the stat-card maker, /updates. Asked "should they match?", the owner said
 * "do what is best": they match.
 *
 * The values live once, in globals.css (--chip-on-edge / --chip-on-wash /
 * --chip-on-ink), and every phone on-state rule points at them, so no rail
 * can drift back to gold on its own. This file holds that:
 *   1. every chip on-state rule in a phone stylesheet carries no gold, and
 *      uses the three tokens (bar the four exceptions named below, each with
 *      its reason);
 *   2. the tokens resolve to N2's RULED values, and the certifications rail —
 *      the reference — computes exactly what it computed before;
 *   3. the one chip rail both layouts share (the song picker) takes N2 at
 *      phone width only, and the laptop keeps its gold;
 *   4. no phone screen paints a chip's on-state inline (the /updates rail did).
 * Desktop chips are out of scope: the ruling was about phone screens.
 */

const ROOT = process.cwd();
const read = (p: string) => readFileSync(join(ROOT, p), "utf8");

type Rule = { media: string | null; selectors: string[]; decls: Record<string, string> };

/** Every style rule in a stylesheet, with the @media it sits in. */
function rulesOf(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
  const out: Rule[] = [];
  const stack: { prelude: string; at: number }[] = [];
  let start = 0;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (c === "{") {
      stack.push({ prelude: src.slice(start, i).trim(), at: i });
      start = i + 1;
    } else if (c === "}") {
      const top = stack.pop();
      if (top && !top.prelude.startsWith("@")) {
        const body = src.slice(top.at + 1, i);
        if (!body.includes("{")) {
          const decls: Record<string, string> = {};
          for (const d of body.split(";")) {
            const k = d.indexOf(":");
            if (k < 0) continue;
            decls[d.slice(0, k).trim()] = d.slice(k + 1).replace(/\s+/g, " ").trim();
          }
          const media = stack.filter((s) => s.prelude.startsWith("@media")).map((s) => s.prelude).join(" ") || null;
          out.push({ media, selectors: top.prelude.split(",").map((s) => s.replace(/\s+/g, " ").trim()), decls });
        }
      }
      start = i + 1;
    } else if (c === ";" && stack.length === 0) {
      start = i + 1;
    }
  }
  return out;
}

/**
 * A chip's selected state: a chip / pill / ratio / pick class ending in On, or
 * one carrying an ARIA selected state. Focus rings (:focus-visible, the site's
 * gold ring) and press feedback (:active) are other states, not the selection.
 * Segmented controls (.segOn), the tab bar (.tabOn) and the nav sheet's row
 * are not chips.
 */
const ON_STATE =
  /\.[A-Za-z]*(?:chip|Chip|pill|Pill|ratio|Ratio|pick|Pick)[A-Za-z]*On\b|\.[A-Za-z]*(?:chip|Chip|pill|Pill)[A-Za-z]*\[aria-(?:pressed|current|selected|checked)/;
const isOnState = (r: Rule) =>
  r.selectors.some((s) => ON_STATE.test(s) && !/:focus-visible|:active\b/.test(s));

const GOLD = /var\(--gold|--ink-on-gold|#945e00|#ffb627|#ffd24a|#c98a2e|148,\s*94,\s*0|255,\s*182,\s*39/i;
const hasGold = (r: Rule) => GOLD.test(Object.values(r.decls).join(";"));
const isN2 = (d: Record<string, string>) =>
  d["border-color"] === "var(--chip-on-edge)" &&
  (d["background"] === "var(--chip-on-wash)" || d["background-color"] === "var(--chip-on-wash)") &&
  d["color"] === "var(--chip-on-ink)";

const PHONE_FILES = readdirSync(join(ROOT, "app/components"))
  .filter((f) => /^mobile[A-Z]\w*\.module\.css$/.test(f))
  .map((f) => `app/components/${f}`);

/** Every chip on-state rule on a phone screen, keyed file::selectors. */
function phoneOnStates(): Map<string, Rule> {
  const m = new Map<string, Rule>();
  for (const f of PHONE_FILES)
    for (const r of rulesOf(read(f))) if (isOnState(r)) m.set(`${f}::${r.selectors.join(", ")}`, r);
  return m;
}

/** The rules that point at the shared tokens — every one this change touched. */
const N2_RULES = [
  "app/components/mobileAfricasBiggest.module.css::.chipOn",
  "app/components/mobileAfricasBiggest.module.css::.yearPillOn, .yearPillHis.yearPillOn",
  "app/components/mobileAwards.module.css::.chipOn",
  "app/components/mobileCerts.module.css::.chipOn",
  "app/components/mobileDeepPage.module.css::.chipOn",
  "app/components/mobileOfficialCharts.module.css::.chipOn",
  "app/components/mobileStatCards.module.css::.chipOn",
  "app/components/mobileStatCards.module.css::.ratioOn",
  "app/components/mobileUpdates.module.css::.chipOn",
];

/**
 * The phone on-states that are NOT the shared tokens, each for a reason. None
 * of them is gold; each keeps its own check. A new rail is not added here: it
 * uses the tokens.
 */
const EXCEPTIONS: Record<string, { why: string; check: (d: Record<string, string>) => boolean }> = {
  'app/components/mobileCerts.module.css::[data-brand="starrgirl"] .chipOn': {
    why: "Ayra Starr's screen: N2's shape in her accent ink (owner, 4 Oct)",
    check: (d) => d["border-color"] === "var(--brand-accent-ink)" && d["color"] === "var(--text)",
  },
  "app/components/mobileRevenue.module.css::.chipOn": {
    why: "box-office rail (Claude Design round 1): N2 already, as a 2px ember edge on an opaque --bg-soft face",
    check: (d) =>
      d["border-color"] === "var(--ember)" && d["color"] === "var(--text)" && /^color-mix\(in srgb, var\(--ember\)/.test(d["background"] ?? ""),
  },
  "app/components/mobileRevenueCountries.module.css::.chip[aria-current]": {
    why: "box-office rail (Claude Design round 1): N2 already, as a 2px ember edge on an opaque --bg-soft face",
    check: (d) =>
      d["border-color"] === "var(--ember)" && d["color"] === "var(--text)" && /^color-mix\(in srgb, var\(--ember\)/.test(d["background"] ?? ""),
  },
  "app/components/mobileTourMap.module.css::.chipOn": {
    why: "the map's view switch (tour-map design item 7): an ink fill, the Dai Dai toggle's pattern, never gold",
    check: (d) => d["background"] === "var(--text)" && d["color"] === "var(--bg)",
  },
};

describe("phone chips: the selected chip is N2's everywhere (owner, 5 Oct 2026)", () => {
  it("finds the phone stylesheets and their on-states (the scan is not empty)", () => {
    expect(PHONE_FILES.length).toBeGreaterThan(30);
    const found = [...phoneOnStates().keys()];
    for (const k of [...N2_RULES, ...Object.keys(EXCEPTIONS)]) expect(found, k).toContain(k);
  });

  it("no phone chip on-state carries gold", () => {
    const gold = [...phoneOnStates()].filter(([, r]) => hasGold(r)).map(([k]) => k);
    expect(gold, "a selected chip on a phone is never gold: point it at --chip-on-*").toEqual([]);
  });

  it("every phone chip on-state uses the shared tokens, bar the named exceptions", () => {
    const off: string[] = [];
    for (const [k, r] of phoneOnStates()) {
      const ex = EXCEPTIONS[k];
      if (ex) {
        if (!ex.check(r.decls)) off.push(`${k} — the exception no longer holds (${ex.why})`);
      } else if (!isN2(r.decls)) {
        off.push(`${k} — use var(--chip-on-edge) / var(--chip-on-wash) / var(--chip-on-ink)`);
      }
    }
    expect(off).toEqual([]);
    for (const k of N2_RULES) expect(isN2(phoneOnStates().get(k)!.decls), k).toBe(true);
  });

  it("negative controls: the shipped gold on-states fail both checks", () => {
    // mobileOfficialCharts.module.css's .chipOn as it shipped on main
    // (3e4dedf4), the selected chip on /records/charts and every board
    // artist's chart screen — the rule the owner's question was about.
    const SHIPPED_CHARTS =
      ".chipOn { background: color-mix(in srgb, var(--gold-wash-base) calc(16% * var(--wash-strength)), transparent); border-color: var(--gold); color: var(--gold); }";
    // /records/africas-biggest's selected year he took: a solid gold fill.
    const SHIPPED_YEAR = ".yearPillHis.yearPillOn { background: var(--gold); color: var(--bg); border-color: var(--gold); }";
    for (const css of [SHIPPED_CHARTS, SHIPPED_YEAR]) {
      const [r] = rulesOf(css);
      expect(isOnState(r)).toBe(true);
      expect(hasGold(r)).toBe(true);
      expect(isN2(r.decls)).toBe(false);
    }
    // The detector does not wave through a non-chip on-state either way: the
    // tab bar's gold current tab is not a chip, and stays as it is.
    expect(isOnState(rulesOf(".tabOn { color: var(--gold); }")[0])).toBe(false);
  });
});

/* ── The tokens resolve to N2's ruled values ─────────────────────────────── */

type RGBA = [number, number, number, number];
const GLOBALS = read("app/globals.css").replace(/\/\*[\s\S]*?\*\//g, "");
/** A token's FIRST declaration in globals.css: the :root block's. */
const token = (name: string): string => {
  const m = new RegExp(`(?:^|[;{\\s])${name}\\s*:\\s*([^;]+);`).exec(GLOBALS);
  if (!m) throw new Error(`${name} is not declared in globals.css`);
  return m[1].replace(/\s+/g, " ").trim();
};
/** Top-level comma split of a function's arguments. */
const args = (s: string): string[] => {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of s) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else cur += ch;
  }
  out.push(cur.trim());
  return out;
};
const inner = (s: string) => s.slice(s.indexOf("(") + 1, s.lastIndexOf(")"));
/** A colour value as the browser computes it, in one scheme. */
function colour(expr: string, dark: boolean): RGBA {
  const e = expr.trim();
  const v = /^var\((--[\w-]+)\)$/.exec(e);
  if (v) return colour(token(v[1]), dark);
  if (e.startsWith("light-dark(")) {
    const [l, d] = args(inner(e));
    return colour(dark ? d : l, dark);
  }
  if (e.startsWith("color-mix(")) {
    const [space, a, b] = args(inner(e));
    expect(space).toBe("in srgb");
    expect(b).toBe("transparent");
    const m = /^(.*)\s+(\d+(?:\.\d+)?)%$/.exec(a)!;
    const c = colour(m[1], dark);
    return [c[0], c[1], c[2], +(c[3] * (+m[2] / 100)).toFixed(4)];
  }
  const hex = /^#([0-9a-f]{6})$/i.exec(e);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 1];
  }
  throw new Error(`cannot resolve ${e}`);
}
const lum = ([r, g, b]: RGBA) => {
  const f = (c: number) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const ratio = (a: RGBA, b: RGBA) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
const over = (top: RGBA, under: RGBA): RGBA => [
  top[0] * top[3] + under[0] * (1 - top[3]),
  top[1] * top[3] + under[1] * (1 - top[3]),
  top[2] * top[3] + under[2] * (1 - top[3]),
  1,
];

describe("the shared tokens are N2's values", () => {
  it("edge, wash and ink resolve to the ruled values in both themes", () => {
    // The ruling's own numbers: #b34700 / #ff7a1a, washed at rgba(179,71,0,.10)
    // on paper and rgba(255,122,26,.16) on the dark page.
    expect(colour("var(--chip-on-edge)", false)).toEqual([179, 71, 0, 1]);
    expect(colour("var(--chip-on-edge)", true)).toEqual([255, 122, 26, 1]);
    expect(colour("var(--chip-on-wash)", false)).toEqual([179, 71, 0, 0.1]);
    expect(colour("var(--chip-on-wash)", true)).toEqual([255, 122, 26, 0.16]);
    expect(token("--chip-on-ink")).toBe("var(--text)");
  });

  it("the certifications rail computes what it computed before the tokens", () => {
    // mobileCerts.module.css's .chipOn as it shipped on main (3e4dedf4).
    const SHIPPED = `.chipOn {
  border-color: var(--ember);
  background-image: none;
  background-color: light-dark(
    color-mix(in srgb, var(--ember) 10%, transparent),
    color-mix(in srgb, var(--ember) 16%, transparent)
  );
  color: var(--text);
}`;
    const was = rulesOf(SHIPPED)[0].decls;
    const now = phoneOnStates().get("app/components/mobileCerts.module.css::.chipOn")!.decls;
    expect(Object.keys(now).sort()).toEqual(Object.keys(was).sort());
    expect(now["background-image"]).toBe(was["background-image"]);
    for (const dark of [false, true])
      for (const p of ["border-color", "background-color", "color"])
        expect(colour(now[p], dark), `${p} ${dark ? "dark" : "light"}`).toEqual(colour(was[p], dark));
    // Negative control: the same comparison catches a drift of one point.
    expect(colour("color-mix(in srgb, var(--ember) 11%, transparent)", false)).not.toEqual(colour(was["background-color"], false));
  });

  it("the label reads at 4.5:1 and the edge at 3:1, on the page and on a card, in both themes", () => {
    for (const dark of [false, true])
      for (const ground of ["var(--bg)", "var(--bg-soft)"]) {
        const g = colour(ground, dark);
        const face = over(colour("var(--chip-on-wash)", dark), g);
        expect(ratio(colour("var(--chip-on-ink)", dark), face), `ink ${ground} ${dark}`).toBeGreaterThanOrEqual(4.5);
        expect(ratio(colour("var(--chip-on-edge)", dark), g), `edge ${ground} ${dark}`).toBeGreaterThanOrEqual(3);
      }
  });

  it("the tokens are declared once, on :root, and nowhere else", () => {
    for (const t of ["--chip-on-edge", "--chip-on-wash", "--chip-on-ink"])
      expect(GLOBALS.match(new RegExp(`${t}\\s*:`, "g"))?.length, t).toBe(1);
  });
});

/* ── The song picker: one rail, both layouts ─────────────────────────────── */

describe("the song picker takes N2 at phone width only", () => {
  const rules = rulesOf(read("app/music/[song]/song.module.css"));
  const PHONE = "@media (max-width: 900px)";

  it("at phone width the selected song is N2's chip, hover included", () => {
    const r = rules.find((x) => x.media === PHONE && x.selectors.includes(".pickOn"))!;
    expect(r.selectors).toContain(".pickOn:hover");
    expect(isN2(r.decls)).toBe(true);
    expect(hasGold(r)).toBe(false);
    // It overrides every property the laptop rule sets, so none of the gold
    // leaks through on a phone.
    const base = rules.find((x) => x.media === null && x.selectors.includes(".pickOn"))!;
    for (const p of Object.keys(base.decls)) expect(Object.keys(r.decls), p).toContain(p);
  });

  it("the laptop picker is untouched: still gold", () => {
    const base = rules.find((x) => x.media === null && x.selectors.includes(".pickOn"))!;
    expect(base.decls["border-color"]).toBe("var(--gold)");
    expect(base.decls["color"]).toBe("var(--gold)");
  });
});

/* ── /updates: the on-state was inline ───────────────────────────────────── */

describe("no phone screen paints a chip's on-state inline", () => {
  /** The opening tags of every aria-pressed button in a component. */
  const pressedTags = (src: string) =>
    src
      .split("<button")
      .slice(1)
      .map((c) => c.split(/\n\s*>\s*\n/)[0])
      .filter((t) => t.includes("aria-pressed"));
  const inlineState = (tag: string) => /style=\{[^\n]*(?:borderColor|color):/.test(tag);

  it("no aria-pressed chip in a phone component sets its colours inline", () => {
    const off: string[] = [];
    for (const f of readdirSync(join(ROOT, "app/components")).filter((x) => /^Mobile\w*\.tsx$/.test(x)))
      for (const t of pressedTags(read(`app/components/${f}`))) if (inlineState(t)) off.push(`${f}: ${t.trim().slice(0, 120)}`);
    expect(off).toEqual([]);
  });

  it("negative control: the /updates All chip as it shipped", () => {
    const SHIPPED = `<button
          type="button"
          aria-pressed={cat === null}
          onClick={() => setCat(null)}
          className={styles.chip}
          style={cat === null ? { borderColor: "var(--gold)", color: "var(--gold)" } : undefined}
        >
          All {items.length}`;
    const [tag] = pressedTags(SHIPPED);
    expect(inlineState(tag)).toBe(true);
  });

  it("the /updates rail renders the class: All on, then a category on, its dot still in its colour", () => {
    render(<MobileUpdates items={updates} lastEntry="1 Oct 2026" />);
    const all = screen.getByRole("button", { name: /^All \d+$/ });
    expect(all).toHaveAttribute("aria-pressed", "true");
    expect(all.className).toContain(updatesStyles.chipOn);
    expect(all.getAttribute("style")).toBeNull();
    const charts = screen.getByRole("button", { name: /^Charts \d+$/ });
    fireEvent.click(charts);
    expect(charts).toHaveAttribute("aria-pressed", "true");
    expect(charts.className).toContain(updatesStyles.chipOn);
    expect(charts.getAttribute("style")).toBeNull();
    expect(all.className).not.toContain(updatesStyles.chipOn);
    expect((charts.querySelector(`.${updatesStyles.chipDot}`) as HTMLElement).style.background).toBe("var(--cyan)");
  });
});
