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
 *   1. every on-state rule a phone draws is classified: a selected chip
 *      carries no gold and uses the three tokens (bar the three exceptions
 *      named below, each with its reason), and a control that is not a chip
 *      (the tab bar, a segmented picker…) is named as one. An on-state the
 *      guard has never seen fails until someone classifies it;
 *   2. the tokens resolve to N2's RULED values, and the certifications rail —
 *      the reference — computes exactly what it computed before;
 *   3. the one chip rail both layouts share (the song picker) takes N2 at
 *      phone width only, and the laptop keeps its gold;
 *   4. no phone screen paints a pressed chip's colours inline (the /updates
 *      rail did); an unselected chip may still wear its own ink (certs tiers).
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
 * An on-state selector: ANY class ending in On (.chipOn, .filterOn, .tabOn…)
 * or an ARIA selected state ([aria-pressed], [aria-pressed="true"],
 * [aria-selected="true"], [aria-current], [aria-checked]; never ="false").
 * The net is deliberately wide: a selected chip must not come back gold under
 * a name the guard didn't think of, so every on-state it catches has to be
 * classified below: the shared tokens, a named exception, or a named control
 * that is not a chip. Focus rings (:focus-visible, the site's gold ring) and
 * press feedback (:active) are other states, not the selection.
 */
const ON_CLASS = /\.[A-Za-z][\w-]*On\b(?![\w-])/g;
const ON_ARIA = /\[aria-(?:pressed|selected|checked|current)(?!=["']?false)/;
const isOnSelector = (s: string) =>
  (new RegExp(ON_CLASS.source).test(s) || ON_ARIA.test(s)) && !/:focus-visible|:active\b/.test(s);
const isOnState = (r: Rule) => r.selectors.some(isOnSelector);

const GOLD = /var\(--gold|--ink-on-gold|#945e00|#ffb627|#ffd24a|#c98a2e|148,\s*94,\s*0|255,\s*182,\s*39/i;
const hasGold = (r: Rule) => GOLD.test(Object.values(r.decls).join(";"));
const isN2 = (d: Record<string, string>) =>
  d["border-color"] === "var(--chip-on-edge)" &&
  (d["background"] === "var(--chip-on-wash)" || d["background-color"] === "var(--chip-on-wash)") &&
  d["color"] === "var(--chip-on-ink)";

/** Every stylesheet under app/, recursively. */
const cssUnder = (dir: string): string[] =>
  readdirSync(join(ROOT, dir), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? cssUnder(`${dir}/${e.name}`) : e.name.endsWith(".css") ? [`${dir}/${e.name}`] : [],
  );
const ALL_CSS = cssUnder("app");
const PHONE_FILES = ALL_CSS.filter((f) => /^app\/components\/mobile[A-Z]\w*\.module\.css$/.test(f));
/** Stylesheets both layouts share: only their phone (max-width) blocks are phone rules. */
const SHARED_FILES = ALL_CSS.filter((f) => !PHONE_FILES.includes(f));

type OnState = { key: string; file: string; rule: Rule };
/** Every on-state rule a phone draws: all of a phone stylesheet's, and those
 *  inside a shared stylesheet's max-width blocks (the song picker's, say). */
function phoneOnStates(): OnState[] {
  const out: OnState[] = [];
  const add = (file: string, rule: Rule) => out.push({ key: `${file}::${rule.selectors.join(", ")}`, file, rule });
  for (const f of PHONE_FILES) for (const r of rulesOf(read(f))) if (isOnState(r)) add(f, r);
  for (const f of SHARED_FILES)
    for (const r of rulesOf(read(f))) if (r.media && /max-width/.test(r.media) && isOnState(r)) add(f, r);
  return out;
}
/** The one rule under a key (a key that matches twice is itself a failure). */
function onState(key: string): Rule {
  const hits = phoneOnStates().filter((s) => s.key === key);
  expect(hits.length, key).toBe(1);
  return hits[0].rule;
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
  // The tour map's view chips, an exception (an ink fill) until the design
  // review of 8 Oct 2026 (T-15), which the owner said "go" to.
  "app/components/mobileTourMap.module.css::.chipOn",
  "app/components/mobileUpdates.module.css::.chipOn",
  "app/music/[song]/song.module.css::.pickOn, .pickOn:hover",
  "app/search/search.module.css::.chipOn, .chipOn:hover",
];

/**
 * The phone chip on-states that are NOT the shared tokens, each for a reason.
 * None of them is gold; each keeps its own check. A new rail is not added
 * here: it uses the tokens.
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
};

/**
 * On-states a phone draws that are NOT chips, by file and class. These are out
 * of the ruling and may stay gold. Listing one is a decision, so each says
 * what it is; a class not listed here is a chip until someone says otherwise.
 * (The other non-chip on-states, .dotOn on the certs and /compare switches,
 * .langOn on Dai Dai's language radio and .dayOn on its day strip, sit in
 * shared stylesheets' base rules, which serve both layouts; the scan above
 * reads only a shared sheet's phone blocks.)
 */
const NOT_CHIPS: Record<string, string> = {
  "app/components/mobileTabBar.module.css::.tabOn": "the tab bar's current tab: navigation, not a filter rail",
  "app/components/mobileEmbed.module.css::.segOn": "the /embed theme picker: a segmented control",
  "app/components/mobileOnThisDay.module.css::.calCellOn":
    "a dated day in the On This Day calendar (On = has entries); the pressed day is --bg-raised",
  "app/components/mobileTourMap.module.css::.regionOn": "the tour map's current region: a list row with an ink rule",
  "app/components/DaiDaiReplay.module.css::.mapToggleOn": "the Dai Dai replay map's Europe / World switch: an ink fill",
};
/** A rule whose every on-selector names only listed non-chip classes. */
const notChip = (file: string, r: Rule) =>
  r.selectors.filter(isOnSelector).every((s) => {
    const cls = s.match(ON_CLASS);
    return !!cls && cls.every((c) => `${file}::${c}` in NOT_CHIPS);
  });

/** What the guard says about one on-state rule: null when it holds. */
function verdict(s: OnState): string | null {
  if (N2_RULES.includes(s.key))
    return isN2(s.rule.decls) ? null : `${s.key} — use var(--chip-on-edge) / var(--chip-on-wash) / var(--chip-on-ink)`;
  const ex = EXCEPTIONS[s.key];
  if (ex) return ex.check(s.rule.decls) ? null : `${s.key} — the exception no longer holds (${ex.why})`;
  if (notChip(s.file, s.rule)) return null;
  return `${s.key} — an unclassified on-state: a selected chip uses the --chip-on-* tokens (add it to N2_RULES); a control that is not a chip goes in NOT_CHIPS with its reason`;
}

describe("phone chips: the selected chip is N2's everywhere (owner, 5 Oct 2026)", () => {
  it("finds the phone stylesheets and their on-states (the scan is not empty)", () => {
    expect(PHONE_FILES.length).toBeGreaterThan(30);
    const found = phoneOnStates().map((s) => s.key);
    for (const k of [...N2_RULES, ...Object.keys(EXCEPTIONS)]) expect(found, k).toContain(k);
    // Every listed non-chip is still there, so the list cannot go stale.
    const classes = new Set(phoneOnStates().flatMap((s) => s.rule.selectors.flatMap((x) => (x.match(ON_CLASS) ?? []).map((c) => `${s.file}::${c}`))));
    for (const k of Object.keys(NOT_CHIPS)) expect([...classes], k).toContain(k);
  });

  it("no phone chip on-state carries gold", () => {
    const gold = phoneOnStates()
      .filter((s) => !notChip(s.file, s.rule) && hasGold(s.rule))
      .map((s) => s.key);
    expect(gold, "a selected chip on a phone is never gold: point it at --chip-on-*").toEqual([]);
  });

  it("every phone on-state is classified: the shared tokens, a named exception, or a named non-chip", () => {
    const off = phoneOnStates().map(verdict).filter((v): v is string => v !== null);
    expect(off).toEqual([]);
    for (const k of N2_RULES) expect(isN2(onState(k).decls), k).toBe(true);
  });

  it("negative controls: the shipped gold on-states fail, under any name a rail might use", () => {
    // mobileOfficialCharts.module.css's .chipOn as it shipped on main
    // (3e4dedf4), the selected chip on /records/charts and every board
    // artist's chart screen — the rule the owner's question was about.
    const SHIPPED_BODY =
      "{ background: color-mix(in srgb, var(--gold-wash-base) calc(16% * var(--wash-strength)), transparent); border-color: var(--gold); color: var(--gold); }";
    // /records/africas-biggest's selected year he took: a solid gold fill.
    const SHIPPED_YEAR = ".yearPillHis.yearPillOn { background: var(--gold); color: var(--bg); border-color: var(--gold); }";
    const AWARDS = "app/components/mobileAwards.module.css";
    // The shipped body under the old name, and under the two selector shapes
    // the first version of this guard did not see: a class that isn't called
    // chip/pill/ratio/pick, and a bare aria-pressed selector.
    for (const css of [`.chipOn ${SHIPPED_BODY}`, SHIPPED_YEAR, `.filterOn ${SHIPPED_BODY}`, `.tag[aria-pressed="true"] ${SHIPPED_BODY}`]) {
      const [r] = rulesOf(css);
      expect(isOnState(r), css).toBe(true);
      expect(hasGold(r), css).toBe(true);
      expect(isN2(r.decls), css).toBe(false);
      expect(notChip(AWARDS, r), css).toBe(false);
      expect(verdict({ key: `${AWARDS}::${r.selectors.join(", ")}`, file: AWARDS, rule: r }), css).not.toBeNull();
    }
    // A listed non-chip passes only in its own file: the tab bar's gold tab
    // is fine there, and a .tabOn turning up on a rail elsewhere is not.
    const tab = rulesOf(".tabOn { color: var(--gold); }")[0];
    expect(notChip("app/components/mobileTabBar.module.css", tab)).toBe(true);
    expect(notChip(AWARDS, tab)).toBe(false);
    // An off state is not an on-state.
    expect(isOnState(rulesOf('.tag[aria-pressed="false"] { color: var(--gold); }')[0])).toBe(false);
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
    const now = onState("app/components/mobileCerts.module.css::.chipOn").decls;
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

/**
 * Reading a button's opening tag the way JSX does: braces nest, strings hold
 * anything, and the tag ends at the first `>` outside both (so `=>` inside an
 * onClick, or a child's style={…}, is never mistaken for the button's).
 */
function scan(src: string, from: number, stop: (c: string, depth: number, i: number) => boolean): number {
  let depth = 0;
  let quote: string | null = null;
  for (let i = from; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === quote && src[i - 1] !== "\\") quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") quote = c;
    else if (c === "{" || c === "(" || c === "[") depth++;
    else if (c === "}" || c === ")" || c === "]") {
      depth--;
      if (stop(c, depth, i)) return i;
    } else if (stop(c, depth, i)) return i;
  }
  return src.length;
}
/** The opening tag of every aria-pressed button in a component. */
const pressedTags = (src: string) =>
  src
    .split("<button")
    .slice(1)
    .map((c) => c.slice(0, scan(c, 0, (ch, d) => ch === ">" && d === 0)))
    .filter((t) => /\saria-pressed=/.test(t));
/** The JS expression of attr={…} in a tag, or null. */
function attrExpr(tag: string, name: string): string | null {
  const m = new RegExp(`\\s${name}=\\{`).exec(tag);
  if (!m) return null;
  const open = m.index + m[0].length - 1;
  const close = scan(tag, open, (ch, d) => ch === "}" && d === 0);
  return tag.slice(open + 1, close).trim();
}
/** `c ? a : b` split at its top level, or null when the expression isn't one. */
function ternary(e: string): [string, string, string] | null {
  let q = -1;
  let nest = 0;
  let split: [string, string, string] | null = null;
  scan(e, 0, (ch, d, i) => {
    if (d !== 0) return false;
    if (ch === "?" && e[i + 1] !== "." && e[i + 1] !== "?" && e[i - 1] !== "?") {
      if (q < 0) q = i;
      else nest++;
    } else if (ch === ":" && q >= 0) {
      if (nest > 0) nest--;
      else {
        split = [e.slice(0, q).trim(), e.slice(q + 1, i).trim(), e.slice(i + 1).trim()];
        return true;
      }
    }
    return false;
  });
  return split;
}
const norm = (s: string): string => {
  const t = s.replace(/\s+/g, "");
  const inside = t.slice(1, -1);
  const wraps = t.startsWith("(") && t.endsWith(")") && scan(inside, 0, (ch, d) => d < 0) === inside.length;
  return wraps ? norm(inside) : t;
};
/** The ways a condition is written negated: !c, !(c), and === ↔ !==. */
const negations = (c: string): string[] =>
  [`!${c}`, `!(${c})`, c.startsWith("!") ? c.slice(1) : "", c.replace("!==", "==="), c.replace("===", "!==")]
    .filter((x) => x && x !== c)
    .map(norm);
/**
 * The inline style a button wears WHILE PRESSED. A style={c ? a : b} whose c
 * is the aria-pressed condition wears a when pressed, b when not; a negated c
 * the other way round. A style with no condition is worn in both states. A
 * condition the guard cannot tie to aria-pressed counts both branches, so an
 * unreadable rule fails rather than passes.
 */
function pressedStyle(tag: string): string | null {
  const style = attrExpr(tag, "style");
  if (!style) return null;
  const t = ternary(style);
  if (!t) return style;
  const [cond, a, b] = t;
  const pressed = attrExpr(tag, "aria-pressed");
  if (pressed !== null && norm(cond) === norm(pressed)) return a;
  if (pressed !== null && negations(norm(pressed)).includes(norm(cond))) return b;
  return `${a} ${b}`;
}
/** A pressed chip painting its own colours inline, outside the stylesheet. */
const inlineState = (tag: string) => /\b(?:borderColor|color|background|backgroundColor)\s*:/.test(pressedStyle(tag) ?? "");

describe("no phone screen paints a chip's pressed state inline", () => {
  it("no aria-pressed chip in a phone component sets its pressed colours inline", () => {
    const off: string[] = [];
    let seen = 0;
    for (const f of readdirSync(join(ROOT, "app/components")).filter((x) => /^Mobile\w*\.tsx$/.test(x)))
      for (const t of pressedTags(read(`app/components/${f}`))) {
        seen++;
        if (inlineState(t)) off.push(`${f}: ${t.trim().slice(0, 160)}`);
      }
    expect(seen, "the scan reads the phone components' toggle chips").toBeGreaterThan(10);
    expect(off).toEqual([]);
  });

  it("negative controls: the /updates chips as they shipped paint the pressed state inline", () => {
    // MobileUpdates.tsx on main (3e4dedf4): the All chip, then a category chip.
    const SHIPPED_ALL = `<button
          type="button"
          aria-pressed={cat === null}
          onClick={() => setCat(null)}
          className={styles.chip}
          style={cat === null ? { borderColor: "var(--gold)", color: "var(--gold)" } : undefined}
        >
          All {items.length}`;
    const SHIPPED_CATEGORY = `<button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => setCat(on ? null : c)}
              className={styles.chip}
              style={on ? { borderColor: ink, color: ink } : undefined}
            >
              <span className={styles.chipDot} style={{ background: ink }} aria-hidden="true" />`;
    for (const src of [SHIPPED_ALL, SHIPPED_CATEGORY]) {
      const [tag] = pressedTags(src);
      expect(inlineState(tag), src).toBe(true);
    }
  });

  it("passing control: the certs tier chips (#426) colour the OFF state inline, which is not the selection", () => {
    // MobileCerts.tsx's tier rail as #426 shipped it (e5f12cc4): an unselected
    // tier wears its own ink inline; the selected one wears .chipOn (N2).
    const TIER_CHIP = `<button
            key={name}
            type="button"
            aria-pressed={shownTier === name}
            className={\`\${styles.chip} \${shownTier === name ? styles.chipOn : ""}\`}
            style={shownTier === name ? undefined : { color: INK[name] }}
            onClick={() => setTier(shownTier === name ? null : name)}
          >
            {shownTier === name ? null : <span className={styles.chipDot} style={{ background: INK[name] }} />}`;
    const [tag] = pressedTags(TIER_CHIP);
    expect(pressedStyle(tag)).toBe("undefined");
    expect(inlineState(tag)).toBe(false);
    // The same tag with the branches swapped paints the pressed chip, and
    // fails — written either way round.
    expect(inlineState(tag.replace("? undefined : { color: INK[name] }", "? { color: INK[name] } : undefined"))).toBe(true);
    expect(inlineState(tag.replace("shownTier === name ? undefined", "shownTier !== name ? undefined"))).toBe(true);
    // A style with no condition is worn while pressed too.
    expect(inlineState(tag.replace("style={shownTier === name ? undefined : { color: INK[name] }}", "style={{ color: INK[name] }}"))).toBe(true);
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
