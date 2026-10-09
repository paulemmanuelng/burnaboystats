import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import ts from "typescript";

/**
 * Job 0 · J0-4: arrows follow Option A, as amended by fix 7 (design review
 * 8 Oct 2026, docs/design/site-review-2026-10/job0-arrow-changes.md).
 *
 * - A link or button to another page or site is ↗ ("Proof ↗").
 * - A whole card or row that is one link is →, at its right edge or foot.
 * - A download is ↓.
 * - A toggle that opens or closes in place is ▾ shut, ▴ open.
 * - "Show all", "Show fewer", "+ N more", in-page jumps and on-page actions
 *   take no glyph.
 * - Sort marks and chrome (masthead, tab bar, back bar, sheet foot) are
 *   outside the rule. ← leads a back link; "Next: X →" pagers are as built.
 *
 * The guard reads every app/**\/*.ts(x) file through the TypeScript parser,
 * so comments never count. Each JSX a / Link / button / summary / TrackedLink
 * / OnThisDaySaveCard is one control; its label is the joined text of its
 * subtree (JSX text, string and template literals, both arms of every
 * conditional), its attributes and nested controls left out. The walk runs at
 * module scope: vitest's 5 s timeout covers `it` bodies, not collection.
 *
 * Known gap: a label built in a fragment or a const outside its control
 * (Discography's `inner`, the timeline's "See the record →" body, a t.showAll
 * dictionary entry) is invisible here. The PR's change list names them.
 */

const ROOT = join(__dirname, "..");
const APP = join(ROOT, "app");

/** Every arrow-family glyph the rule governs. ▶ (play) and +/− (counts, FAQ folds) are not arrows. */
const GLYPHS = "↗→↓←↑↺⤓‹›»«▸◂▾▴▲▼↕";
const GLYPH = new RegExp(`[${GLYPHS}]`);
const glyphsOf = (s: string) => [...new Set([...s].filter((ch) => GLYPHS.includes(ch)))];

const CONTROL = /^(a|Link|button|summary|TrackedLink|OnThisDaySaveCard)$/;

/** Not page UI: the noindex specimen page ("Not part of the site"), email HTML, third-party iframe HTML. */
const NOT_PAGE_UI = [/^app\/primitives\//, /^app\/lib\/digestEmail\.ts$/, /^app\/lib\/embedWidgets\.ts$/];
/** Chrome, outside the rule (fix 7): masthead, tab bar, the sheet's foot ("Box office ↗", fixes 78 and 83), the floating back-to-top icon (Q11). */
const CHROME = [
  "app/components/Nav.tsx",
  "app/components/MobileTabBar.tsx",
  "app/components/MobileNavSheet.tsx",
  "app/components/BackToTop.tsx",
];

/**
 * Whole rows and cards that are one link: their glyph is →, never ↗.
 * A later job that adds one adds its class here in its own commit.
 */
const WHOLE_ROW: Record<string, string[]> = {
  "app/components/KeepExploring.tsx": ["card"],
  "app/records/page.tsx": ["card"],
  "app/components/MobileRecords.tsx": ["bookRow"],
  "app/components/MobileTours.tsx": ["roadRow"],
  "app/components/MobilePress.tsx": ["tile"],
  "app/press/page.tsx": ["figure"],
  "app/components/TourMapCard.tsx": ["linkRow"],
  "app/components/TourMapPanel.tsx": ["linkRow"],
  "app/components/OnThisDayBand.tsx": ["row"],
  "app/on-this-day/[day]/page.tsx": ["row", "pagerCard"],
  "app/components/MobileOnThisDayDay.tsx": ["dayRow", "pagerCard"],
  "app/components/MobileOnThisDayCard.tsx": ["homeLinkRow"],
  "app/components/MobileOnThisDayIndex.tsx": ["calOpenRow"],
  "app/components/OnThisDayPhoneMonth.tsx": ["calPanelOpen"],
  "app/components/UpdatesFeed.tsx": ["row"],
  "app/music/page.tsx": ["songCard"],
  "app/components/MobileMusic.tsx": ["songRow"],
  "app/components/Discography.tsx": ["albumCard"],
  "app/records/tours/page.tsx": ["jumpCard", "jumpCardAlt"],
  "app/components/GlobeTeaser.tsx": ["globe"],
  "app/afrobeats/page.tsx": ["tile"],
  "app/afrobeats/[artist]/page.tsx": ["chartCta"],
  "app/components/MobileAfrobeatsHub.tsx": ["door"],
  "app/records/by-the-numbers/page.tsx": ["stat"],
  "app/records/cars/[car]/page.tsx": ["source", "navCell"],
  "app/music/albums/[album]/page.tsx": ["trackLink"],
  "app/components/TracklistDialog.tsx": ["trackLink"],
  "app/timeline/page.tsx": ["entryLinked"],
  // /compare/in's country rows are whole rows too, but their → (.cbGo) sits in
  // a cell beside a stretched link, outside any control, so no class is listed.
};

/** Kept by name, each with its ruling. */
const KEPT_CONTROLS: { file: string; is: (c: Control) => boolean; ruling: string }[] = [
  { file: "app/components/StatCardMaker.tsx", is: (c) => c.label === "See the full record →", ruling: "fix 132: as built" },
  // The definition's <a download> renders `children`; its call sites are checked instead (both say "Save or share ↓").
  { file: "app/components/OnThisDaySaveCard.tsx", is: (c) => c.tag === "a" && c.attrs.has("download"), ruling: "the save card's own definition" },
];
const KEPT_CSS: { file: string; selector: string; ruling: string }[] = [
  { file: "app/dai-dai/dai-dai.module.css", selector: ".skip::after", ruling: "fix 109: Skip keeps its live label (Q1)" },
];
/** Free text that may carry ↓: the /share phone button's label const, which feeds its download button. */
const KEPT_TEXT: { file: string; constName: string }[] = [{ file: "app/components/MobileStatCards.tsx", constName: "label" }];

type Control = {
  file: string;
  line: number;
  tag: string;
  label: string;
  glyphs: string[];
  attrs: Map<string, string>;
  classes: string[];
  ancestorClasses: string[];
  underSortHeader: boolean;
  /** A ▾/▴ that is a direct text child of a <summary>, so CSS can never turn it. */
  bareSummaryChevron: boolean;
};
type FreeText = { file: string; line: number; text: string; constName: string | null };
type AriaLabel = { file: string; line: number; text: string };
type Scan = { controls: Control[]; text: FreeText[]; ariaLabels: AriaLabel[] };

const tagOf = (n: ts.JsxElement | ts.JsxSelfClosingElement) =>
  (ts.isJsxElement(n) ? n.openingElement : n).tagName.getText();
const attrNodes = (n: ts.JsxElement | ts.JsxSelfClosingElement) =>
  (ts.isJsxElement(n) ? n.openingElement : n).attributes.properties.filter(ts.isJsxAttribute);
const attrsOf = (n: ts.JsxElement | ts.JsxSelfClosingElement) =>
  new Map(attrNodes(n).map((a) => [a.name.getText(), a.initializer ? a.initializer.getText() : ""]));
/**
 * JSX text as React renders it: a run with no line break is kept as written;
 * otherwise each line is trimmed, blank lines go, and the rest join with one
 * space ("Save or share</span>⏎<span>↓" renders "Save or share↓").
 */
const jsxTextValue = (raw: string) => {
  if (!/[\r\n]/.test(raw)) return raw;
  const lines = raw.split(/\r\n|\n|\r/);
  return lines
    .map((l, i) => (i > 0 ? l.replace(/^[ \t]+/, "") : l))
    .map((l, i) => (i < lines.length - 1 ? l.replace(/[ \t]+$/, "") : l))
    .filter(Boolean)
    .join(" ");
};
/** The rendered text of a literal or JSX text node, or null. */
const literalText = (n: ts.Node): string | null => {
  if (ts.isJsxText(n)) return jsxTextValue(n.text);
  if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
  if (ts.isTemplateHead(n) || ts.isTemplateMiddle(n) || ts.isTemplateTail(n)) return n.text;
  return null;
};
/** `styles.caret`, `s.more`, "btn btnSecondary", `${styles.a} ${x ? "" : styles.b}` → their class names. */
const classesOf = (n: ts.JsxElement | ts.JsxSelfClosingElement) => {
  const init = attrNodes(n).find((a) => a.name.getText() === "className")?.initializer;
  const out: string[] = [];
  const rec = (m: ts.Node) => {
    if (ts.isPropertyAccessExpression(m)) out.push(m.name.text);
    const t = literalText(m);
    if (t != null) out.push(...t.split(/\s+/).filter(Boolean));
    ts.forEachChild(m, rec);
  };
  if (init) rec(init);
  return out;
};
const isElement = (n: ts.Node): n is ts.JsxElement | ts.JsxSelfClosingElement =>
  ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n);

/** Parse one source text into its controls, its free text and its aria-labels. */
function scanSource(source: string, file: string): Scan {
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, file.endsWith(".ts") ? ts.ScriptKind.TS : ts.ScriptKind.TSX);
  const lineOf = (n: ts.Node) => sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1;
  const scan: Scan = { controls: [], text: [], ariaLabels: [] };

  const labelOf = (el: ts.JsxElement) => {
    let s = "";
    const rec = (n: ts.Node) => {
      if (ts.isJsxAttributes(n)) return; // attributes are not the label
      if (isElement(n) && n !== el && CONTROL.test(tagOf(n))) return; // a nested control is its own row
      const t = literalText(n);
      if (t != null) s += t;
      ts.forEachChild(n, rec);
    };
    el.children.forEach(rec);
    return s.replace(/\s+/g, " ").trim();
  };

  const visit = (n: ts.Node) => {
    if (isElement(n)) {
      const attrs = attrsOf(n);
      const aria = attrs.get("aria-label");
      if (aria && GLYPH.test(aria)) scan.ariaLabels.push({ file, line: lineOf(n), text: aria });
      if (CONTROL.test(tagOf(n))) {
        const label = ts.isJsxElement(n) ? labelOf(n) : "";
        const ancestors: (ts.JsxElement | ts.JsxSelfClosingElement)[] = [];
        for (let p = n.parent; p; p = p.parent) if (isElement(p)) ancestors.push(p);
        const tag = tagOf(n);
        const bare =
          tag === "summary" &&
          ts.isJsxElement(n) &&
          n.children.some((c) => {
            if (ts.isJsxText(c)) return /[▾▴]/.test(c.text);
            if (ts.isJsxExpression(c) && c.expression) {
              let hit = false;
              const rec = (m: ts.Node) => {
                if (isElement(m)) return;
                const t = literalText(m);
                if (t != null && /[▾▴]/.test(t)) hit = true;
                ts.forEachChild(m, rec);
              };
              rec(c.expression);
              return hit;
            }
            return false;
          });
        scan.controls.push({
          file,
          line: lineOf(n),
          tag,
          label,
          glyphs: glyphsOf(label),
          attrs,
          classes: classesOf(n),
          ancestorClasses: ancestors.flatMap(classesOf),
          underSortHeader: ancestors.some((a) => attrsOf(a).has("aria-sort")),
          bareSummaryChevron: bare,
        });
      }
    } else {
      const t = literalText(n);
      if (t != null && GLYPH.test(t)) {
        let inControl = false;
        let constName: string | null = null;
        for (let p: ts.Node | undefined = n.parent; p; p = p.parent) {
          if (isElement(p) && CONTROL.test(tagOf(p))) inControl = true;
          if (!constName && ts.isVariableDeclaration(p)) constName = p.name.getText();
        }
        if (!inControl) scan.text.push({ file, line: lineOf(n), text: t.replace(/\s+/g, " ").trim(), constName });
      }
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return scan;
}

/** The rule, as one classifier per control. */
const classify = (c: Control) => {
  const a = c.attrs;
  const href = (a.get("href") ?? "").replace(/^\{\s*/, "");
  const download =
    a.has("download") ||
    c.tag === "OnThisDaySaveCard" ||
    (c.tag === "button" && /Download|Save or share/.test(c.label));
  const toggle = c.tag === "summary" || (c.tag === "button" && a.has("aria-expanded"));
  const sort = c.underSortHeader || /\bonSort\b/.test(a.get("onClick") ?? "");
  const transport = c.tag === "button" && a.has("aria-label") && /^[‹›]$/.test(c.label);
  /** An in-page jump (href "#…") or a same-page state link built by the compare page's own href(sp, …). */
  const samePage = /^["'`]#/.test(href) || /^`?(\$\{)?href\(sp\b/.test(href);
  const rows = WHOLE_ROW[c.file] ?? [];
  const wholeRow = c.classes.some((k) => rows.includes(k));
  const pager = c.classes.some((k) => k === "pagerCard" || k === "navCell") || /^Next( song| album)?:/.test(c.label);
  const chrome = CHROME.includes(c.file) || c.ancestorClasses.some((k) => /backBar/.test(k));
  const kept = KEPT_CONTROLS.find((k) => k.file === c.file && k.is(c));
  return { download, toggle, sort, transport, samePage, wholeRow, pager, outside: chrome || sort || transport || !!kept };
};

const where = (c: { file: string; line: number }) => `${c.file}:${c.line}`;
const show = (c: Control) => `${where(c)} <${c.tag}> "${c.label.slice(0, 70)}"`;

/** Each assertion, as a function from a control to a violation message (or null). */
const RULES: Record<number, (c: Control) => string | null> = {
  1: (c) => {
    const k = classify(c);
    return !k.download && c.glyphs.some((g) => g === "↓" || g === "⤓") ? `${show(c)}: ↓ on a control that is not a download` : null;
  },
  2: (c) => {
    const k = classify(c);
    if (!k.download) return null;
    if (!c.glyphs.includes("↓")) return `${show(c)}: a download without ↓`;
    const other = c.glyphs.filter((g) => g !== "↓");
    return other.length ? `${show(c)}: ${other.join("")} on a download (only ↓)` : null;
  },
  3: (c) => {
    const other = classify(c).toggle ? c.glyphs.filter((g) => g !== "▾" && g !== "▴") : [];
    return other.length ? `${show(c)}: ${other.join("")} on an in-place toggle (▾/▴ only)` : null;
  },
  4: (c) => (!classify(c).toggle && c.glyphs.some((g) => g === "▾" || g === "▴") ? `${show(c)}: ▾/▴ on a control that does not open in place` : null),
  5: (c) => {
    const k = classify(c);
    return c.tag === "button" && !k.toggle && !k.download && c.glyphs.length ? `${show(c)}: ${c.glyphs.join("")} on a button with no href` : null;
  },
  6: (c) => (classify(c).samePage && c.glyphs.length ? `${show(c)}: ${c.glyphs.join("")} on an in-page jump or same-page state link` : null),
  7: (c) => {
    const k = classify(c);
    return c.glyphs.includes("→") && !k.wholeRow && !k.pager ? `${show(c)}: → on a control that is not a whole row, card or pager` : null;
  },
  8: (c) => (classify(c).wholeRow && c.glyphs.includes("↗") ? `${show(c)}: ↗ on a whole row or card (→)` : null),
  9: (c) => {
    const k = classify(c);
    if (c.glyphs.includes("←") && !c.label.startsWith("←") && !k.pager) return `${show(c)}: ← that does not lead a back link`;
    const never = c.glyphs.filter((g) => "↺↑▸◂▲▼↕»«›‹".includes(g));
    return never.length ? `${show(c)}: ${never.join("")} labels a control` : null;
  },
  12: (c) => (c.bareSummaryChevron ? `${show(c)}: a summary's ▾/▴ is bare text, so it can never turn` : null),
};
const violations = (rule: number, controls: Control[]) =>
  controls.filter((c) => !classify(c).outside).map(RULES[rule]).filter((m): m is string => m != null);

/** Free text (outside any control) that carries ↓: only the kept const may. */
const freeDownArrows = (text: FreeText[]) =>
  text
    .filter((t) => /[↓⤓]/.test(t.text))
    .filter((t) => !KEPT_TEXT.some((k) => k.file === t.file && k.constName === t.constName))
    .map((t) => `${where(t)} "${t.text.slice(0, 70)}": ↓ outside a download control`);

/** CSS `content:` values that draw an arrow glyph, comments stripped, outside KEPT_CSS. */
function cssGlyphs(css: string, file: string) {
  const out: string[] = [];
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  for (const m of clean.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
    const selector = m[1].trim();
    for (const c of m[2].matchAll(/content\s*:\s*([^;]+)/g)) {
      if (!GLYPH.test(c[1])) continue;
      if (KEPT_CSS.some((k) => k.file === file && k.selector === selector)) continue;
      out.push(`${file} ${selector} { content: ${c[1].trim()} }: an arrow drawn in CSS`);
    }
  }
  return out;
}
/** A caret that turns ▾ sideways into ▸ by rotating it. */
const sidewaysCarets = (css: string, file: string) =>
  [...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/\.caretShut\s*\{[^}]*\}/g)].map((m) => `${file}: ${m[0]}`);

// ── The walk, at module scope ────────────────────────────────────────────────
function files(dir: string, ext: RegExp): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return files(p, ext);
    return ext.test(name) ? [p] : [];
  });
}
const rel = (p: string) => relative(ROOT, p).split("\\").join("/");
const SOURCES = files(APP, /\.tsx?$/).map(rel).filter((f) => !NOT_PAGE_UI.some((re) => re.test(f)));
const SCAN: Scan = { controls: [], text: [], ariaLabels: [] };
for (const f of SOURCES) {
  const src = readFileSync(join(ROOT, f), "utf8");
  if (!GLYPH.test(src) && !/\sdownload[\s=>]/.test(src)) continue;
  const s = scanSource(src, f);
  SCAN.controls.push(...s.controls);
  SCAN.text.push(...s.text.filter((t) => !CHROME.includes(t.file)));
  SCAN.ariaLabels.push(...s.ariaLabels);
}
const CSS_FILES = files(APP, /\.css$/).map(rel).filter((f) => !NOT_PAGE_UI.some((re) => re.test(f)));
const CSS = new Map(CSS_FILES.map((f) => [f, readFileSync(join(ROOT, f), "utf8")]));

/** Parse a shipped snippet as if it sat in `file`. */
const snippet = (jsx: string, file: string) => scanSource(`const x = (<>\n${jsx}\n</>);`, file).controls;
const ruleHits = (rule: number, jsx: string, file: string) => violations(rule, snippet(jsx, file));

describe("J0-4: arrows follow Option A, as amended by fix 7", () => {
  it("the walk sees the site's controls (a stale parser would pass anything)", () => {
    expect(SCAN.controls.length).toBeGreaterThan(200);
    expect(SCAN.controls.filter((c) => c.glyphs.length).length).toBeGreaterThan(150);
  });

  it("↓ only on download links", () => {
    expect(violations(1, SCAN.controls)).toEqual([]);
    expect(freeDownArrows(SCAN.text)).toEqual([]);
  });

  it("every download link carries ↓, and only ↓", () => {
    expect(violations(2, SCAN.controls)).toEqual([]);
  });

  it("a toggle carries ▾/▴ or nothing", () => {
    expect(violations(3, SCAN.controls)).toEqual([]);
  });

  it("▾/▴ only on toggles", () => {
    expect(violations(4, SCAN.controls)).toEqual([]);
  });

  it("no glyph on buttons with no href", () => {
    expect(violations(5, SCAN.controls)).toEqual([]);
  });

  it("no glyph on an in-page jump or same-page state link", () => {
    expect(violations(6, SCAN.controls)).toEqual([]);
  });

  it("→ only on a whole row or card, or a pager", () => {
    expect(violations(7, SCAN.controls)).toEqual([]);
  });

  it("↗ never on a whole row or card", () => {
    expect(violations(8, SCAN.controls)).toEqual([]);
  });

  it("← leads a back link; ↺ ↑ ▸ ▲ ▼ ↕ » « › never label a control", () => {
    expect(violations(9, SCAN.controls)).toEqual([]);
  });

  it("carets turn by glyph, not sideways", () => {
    for (const f of ["app/records/tours/tours.module.css", "app/components/mobileLiveCharts.module.css"]) {
      expect(CSS.has(f), f).toBe(true);
    }
    expect([...CSS].flatMap(([f, css]) => sidewaysCarets(css, f))).toEqual([]);
    expect(SOURCES.filter((f) => readFileSync(join(ROOT, f), "utf8").includes("caretShut"))).toEqual([]);
  });

  it("no aria-label carries a glyph", () => {
    expect(SCAN.ariaLabels.map((a) => `${where(a)} ${a.text}`)).toEqual([]);
  });

  it("a summary's ▾ sits in its own element", () => {
    expect(violations(12, SCAN.controls)).toEqual([]);
  });

  it("CSS draws no arrow, except the Dai Dai skip (fix 109)", () => {
    expect([...CSS].flatMap(([f, css]) => cssGlyphs(css, f))).toEqual([]);
  });
});

describe("the exemptions and the whole-row list are not stale", () => {
  it("every chrome file exists", () => {
    for (const f of CHROME) expect(existsSync(join(ROOT, f)), f).toBe(true);
  });

  it("every whole-row class is a class its file still uses on a control", () => {
    for (const [file, classes] of Object.entries(WHOLE_ROW)) {
      expect(existsSync(join(ROOT, file)), file).toBe(true);
      const used = new Set(scanSource(readFileSync(join(ROOT, file), "utf8"), file).controls.flatMap((c) => c.classes));
      for (const k of classes) expect(used.has(k), `${file}: .${k}`).toBe(true);
    }
  });

  it("every kept control, CSS rule and const is still there", () => {
    for (const k of KEPT_CONTROLS) {
      const hits = scanSource(readFileSync(join(ROOT, k.file), "utf8"), k.file).controls.filter(k.is);
      expect(hits.length, `${k.file} (${k.ruling})`).toBe(1);
    }
    for (const k of KEPT_CSS) {
      const css = CSS.get(k.file) ?? "";
      expect(css.includes(`${k.selector} {`), `${k.file} ${k.selector} (${k.ruling})`).toBe(true);
    }
    for (const k of KEPT_TEXT) {
      expect(SCAN.text.some((t) => t.file === k.file && t.constName === k.constName && /↓/.test(t.text)), k.file).toBe(true);
    }
  });

  it("both save-card call sites pass 'Save or share ↓'", () => {
    const calls = SCAN.controls.filter((c) => c.tag === "OnThisDaySaveCard");
    expect(calls.length).toBe(2);
    for (const c of calls) {
      expect(c.label, where(c)).toBe("Save or share↓");
      expect(violations(2, [c])).toEqual([]);
    }
  });
});

describe("positive controls: the provenance component passes as built (J0-9)", () => {
  for (const file of ["app/components/Provenance.tsx", "app/components/MobileProvenance.tsx"]) {
    it(file, () => {
      const controls = SCAN.controls.filter((c) => c.file === file);
      // P3's "Download CSV ↓" is a download …
      const csv = controls.find((c) => c.attrs.has("download"));
      expect(csv?.label).toBe("Download CSV ↓");
      // … P2's "Method ▾" is a summary with its chevron in its own span …
      const method = controls.find((c) => c.tag === "summary");
      expect(method?.label).toBe("Method ▾");
      expect(method?.bareSummaryChevron).toBe(false);
      // … and "JSON ↗" leaves the page.
      expect(controls.some((c) => c.label === "JSON ↗")).toBe(true);
      for (const rule of Object.keys(RULES).map(Number)) expect(violations(rule, controls), `rule ${rule}`).toEqual([]);
    });
  }

  it("KeepExploring's card → passes as a whole card", () => {
    const cards = SCAN.controls.filter((c) => c.file === "app/components/KeepExploring.tsx" && c.glyphs.includes("→"));
    expect(cards.length).toBeGreaterThan(0);
    for (const c of cards) expect(classify(c).wholeRow, where(c)).toBe(true);
  });
});

/**
 * Negative controls: each is a line shipped on main d3c39eda (8 Oct 2026),
 * parsed in its own file through the same checker, and each fails the rule
 * named.
 */
describe("negative controls: the shipped lines J0-4 changes fail the rule they break", () => {
  it("N1 · compare 'Show all ↓' (rules 1 and 6)", () => {
    const jsx = `<Link href={href(sp, { all: "1" })} scroll={false} data-keep-focus="all" className={styles.showAll}>Show all <span aria-hidden="true">↓</span></Link>`;
    expect(ruleHits(1, jsx, "app/compare/page.tsx")).toHaveLength(1);
    expect(ruleHits(6, jsx, "app/compare/page.tsx")).toHaveLength(1);
  });

  it("N2 · the MobileCerts fold's ↓ chevron (rule 3)", () => {
    const jsx = `<summary className={\`\${styles.logKicker} \${styles.compareSummary}\`}>
              Compare with…
              <span className={styles.compareCount}>{count(compareWith.length, "artist", "artists")}</span>
              <span className={styles.compareChevron} aria-hidden="true">↓</span>
            </summary>`;
    expect(ruleHits(3, jsx, "app/components/MobileCerts.tsx")).toHaveLength(1);
  });

  it("N3 · MobileMusic 'See the tracklist↗' on a button (rule 5)", () => {
    const jsx = `<button
          type="button"
          className={styles.latestCta}
          onClick={() =>
            window.dispatchEvent(new CustomEvent("open-tracklist", { detail: latest.title }))
          }
        >
          See the tracklist<span aria-hidden="true">↗</span>
        </button>`;
    expect(ruleHits(5, jsx, "app/components/MobileMusic.tsx")).toHaveLength(1);
  });

  it("N4 · phone home 'Explore the music →' on a pill (rule 7)", () => {
    const jsx = `<Link href="/music" className={styles.secondary}>
          Explore the music →
        </Link>`;
    expect(ruleHits(7, jsx, "app/components/MobileHome.tsx")).toHaveLength(1);
  });

  it("N5 · the phone /music song row's ↗ (rule 8)", () => {
    const jsx = `<Link key={s.href} href={s.href} className={styles.songRow}>
              <span
                className={styles.songCover}
                style={{ backgroundImage: \`url(\${spotifyImage(s.cover, 300)})\` }}
              />
              <span className={styles.songMeta}>
                <span className={styles.songTitle}>{s.title}</span>
                <span className={styles.songTag}>{s.tag}</span>
              </span>
              <span className={styles.songArrow} aria-hidden="true">↗</span>
            </Link>`;
    expect(ruleHits(8, jsx, "app/components/MobileMusic.tsx")).toHaveLength(1);
  });

  it("N6 · the /api CSV row, a download with no ↓ (rule 2)", () => {
    const jsx = `<a key={d.path} href={\`/api/\${API_VERSION}\${d.path}\`} download={d.filename} className={styles.endpoint}>
                <span className={styles.endpointTop}>
                  <code className={styles.method}>GET</code>
                  <code className={styles.path}>/api/{API_VERSION}{d.path}</code>
                  <span className={styles.size}>{d.size}</span>
                </span>
                <span className={styles.endpointWhat}>{d.what}</span>
              </a>`;
    expect(ruleHits(2, jsx, "app/api/page.tsx")).toEqual([expect.stringContaining("a download without ↓")]);
  });

  it("N7 · AwardExplorer's Filters ▲/▼ (rule 3)", () => {
    const jsx = `<button
          type="button"
          className={styles.filterToggle}
          aria-expanded={filtersOpen}
          aria-controls="award-filters"
          onClick={() => setFiltersOpen((o) => !o)}
        >
          <span>Filters{active ? \` · \${totalShown} shown\` : ""}</span>
          <span aria-hidden="true">{filtersOpen ? "▲" : "▼"}</span>
        </button>`;
    expect(ruleHits(3, jsx, "app/components/AwardExplorer.tsx")).toHaveLength(1);
  });

  it("N8 · '⤓ Install the app' (rule 1)", () => {
    const jsx = `<button type="button" className={styles.primary} onClick={install}>
            ⤓ Install the app
          </button>`;
    expect(ruleHits(1, jsx, "app/components/FollowPanel.tsx")).toHaveLength(1);
  });

  it("N9 · compare 'change artist ↺' (rules 6 and 9)", () => {
    const jsx = `<Link href={href(sp, { [side]: null, [target]: null, [field]: null })} className={styles.pickChange}>
            change artist <span aria-hidden="true">↺</span>
          </Link>`;
    expect(ruleHits(6, jsx, "app/compare/page.tsx")).toHaveLength(1);
    expect(ruleHits(9, jsx, "app/compare/page.tsx")).toHaveLength(1);
  });

  it("N10 · the tours caret turned sideways (rule 10)", () => {
    expect(sidewaysCarets(".caretShut { transform: rotate(-90deg); }", "app/records/tours/tours.module.css")).toHaveLength(1);
  });

  it("N11 · StatBox's bare 'Source ▾' (rule 12)", () => {
    const jsx = `<summary className={styles.sourceSummary}>Source ▾</summary>`;
    expect(ruleHits(12, jsx, "app/components/StatBox.tsx")).toHaveLength(1);
  });

  it("N12 · the phone tour row's ▸ caret (rules 3 and 9)", () => {
    const jsx = `<button
              type="button"
              className={styles.tourBtn}
              aria-expanded={isOpen}
              // One tour open at a time: tapping a row below the open one shut
              // the list above it and threw the tapped row 1,545px off the top
              // (V-tourscars-01, 5 Oct 2026). Held under the finger instead.
              // Picking a tour takes the link's out of the address bar, so a
              // reload does not put it back.
              onClick={(e) => {
                holdInPlace(e.currentTarget, () => setOpen(isOpen ? null : t.name));
                dropDeepLink(TOUR_PARAM, DATE_PARAM);
              }}
              data-tour={tourSlug(t.name)}
            >
              <div className={styles.tourTop}>
                <div className={styles.tourMain}>
                  <div className={styles.tourNameRow}>
                    <span className={styles.tourName}>{t.name}</span>
                    {t.record && <span className={styles.recordBadge}>{RECORD_PILL}</span>}
                  </div>
                  <div className={styles.tourMeta}>
                    {t.years} · {tourMeta(t)}
                  </div>
                </div>
                <span className={\`\${styles.tourGross} \${t.gross ? "" : styles.grossNone}\`}>
                  {t.gross ?? <NotReported what={NO_TOUR_TOTAL} />}
                </span>
                <span className={styles.caret} aria-hidden="true">{isOpen ? "▾" : "▸"}</span>
              </div>
            </button>`;
    expect(ruleHits(3, jsx, "app/components/MobileTours.tsx")).toHaveLength(1);
    expect(ruleHits(9, jsx, "app/components/MobileTours.tsx")).toHaveLength(1);
  });

  it("N13 · the Dai Dai skip's CSS ↓ is kept by name only: in any other rule or file it fails", () => {
    const css = `.skip::after {\n  content: "↓";\n  content: "↓" / "";\n}`;
    expect(cssGlyphs(css, "app/dai-dai/dai-dai.module.css")).toEqual([]);
    expect(cssGlyphs(css, "app/music/music.module.css")).toHaveLength(2);
    expect(cssGlyphs(css.replace(".skip", ".jump"), "app/dai-dai/dai-dai.module.css")).toHaveLength(2);
  });
});
