import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";

/**
 * V-global-13 (full-site debug, 5 Oct 2026).
 *
 * Every phone screen opens on a back bar whose round back button has no fill
 * the bar can tell apart, so its ring is the control's only edge. The E-02
 * fix (debug pass of 4 Oct) moved that ring to --btn-edge (≥ 3:1 over the
 * bar, both themes; tests/ui/debug1004Certs.test.tsx) on /certifications,
 * the board's artist pages and the two gross pages only. Read live in
 * headless Chrome at 390x844, dark and light, 7 Oct, over 41 back bars:
 * those 4 screens drew the 42% / 55% ring (4.11:1 dark, 3.7:1 light against
 * the bar) and the other 37 (music, song and album pages, /records and its
 * pages, /dai-dai, /afrobeats, /faq, /updates, /timeline, …) still drew
 * --line, the 12% decorative hairline (1.31–1.48:1 dark, 1.17–1.28:1
 * light), so the same control changed weight from one screen to the next.
 * With --btn-edge grafted onto the live pages every one read 3.7–4.1:1.
 *
 * jsdom does no layout, so this finds every back button the app draws (each
 * <BackLink> and the stylesheet class it takes) and reads that class's ring
 * in its own stylesheet: one edge, --btn-edge, everywhere. The desktop
 * layout has no round back button (it uses the breadcrumb bar). A negative
 * control runs the shipped rule verbatim.
 */

type Rule = { selector: string; decls: Record<string, string>; query?: string };

/** Top-level rules and @media blocks (any query), in source order. */
const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, query?: string) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, query });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) block(m[3]);
    else block(m[2], m[1].trim());
  }
  return rules;
};

/** Every border declaration the class's own rules make. */
const ringsOf = (css: string, selector: string) =>
  parse(css)
    .filter((r) => r.selector === selector)
    .flatMap((r) => Object.entries(r.decls).filter(([k]) => /^border(-(top|right|bottom|left))?(-color)?$/.test(k)));

/** The ring is one edge, --btn-edge, and nothing re-draws it on the hairline. */
const oneEdge = (rings: [string, string][]) =>
  rings.length > 0 &&
  rings.some(([k, v]) => k === "border" && v === "1px solid var(--btn-edge)") &&
  rings.every(([, v]) => !/var\(--line\)/.test(v));

/** Each <BackLink> in the app, with the stylesheet and class that draw it. */
const backButtons = (() => {
  const out = new Map<string, { css: string; selector: string; pages: string[] }>();
  const files = (readdirSync("app", { recursive: true }) as string[]).filter((f) => f.endsWith(".tsx"));
  for (const rel of files) {
    const path = join("app", rel);
    const src = readFileSync(path, "utf8");
    for (const m of src.matchAll(/<BackLink\b[^>]*?className=\{(\w+)\.(\w+)\}/g)) {
      const from = src.match(new RegExp(`import ${m[1]} from "([^"]+\\.module\\.css)"`));
      if (!from) throw new Error(`${path}: ${m[1]} is not a stylesheet import`);
      const css = join(dirname(path), from[1]);
      const key = `${css} .${m[2]}`;
      const seen = out.get(key) ?? { css, selector: `.${m[2]}`, pages: [] };
      seen.pages.push(path);
      out.set(key, seen);
    }
  }
  return [...out.values()];
})();

describe("V-global-13: one ring on every phone back button", () => {
  it("finds the back buttons (the phone back bars, the song, album, car and timeline pages)", () => {
    expect(backButtons.length).toBeGreaterThanOrEqual(30);
    const sheets = backButtons.map((b) => `${b.css} ${b.selector}`);
    for (const known of [
      "app/components/mobileCerts.module.css .backBtn",
      "app/components/mobileRevenue.module.css .backBtn",
      "app/components/mobileRecords.module.css .backBtn",
      "app/components/DaiDaiStory.module.css .backBtn",
      "app/music/[song]/song.module.css .mobileBackBtn",
      "app/timeline/timeline.module.css .mobileBackBtn",
    ]) expect(sheets).toContain(known);
  });

  it.each(backButtons.map((b) => [`${b.css} ${b.selector}`, b] as const))("%s borders on --btn-edge", (_, b) => {
    const rings = ringsOf(readFileSync(b.css, "utf8"), b.selector);
    expect(rings, b.pages.join(", ")).toContainEqual(["border", "1px solid var(--btn-edge)"]);
    expect(oneEdge(rings)).toBe(true);
  });

  it("negative control: the shipped rule (mobileRecords .backBtn, origin/main) fails", () => {
    const shipped = `.backBtn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--bg-soft);
  border: 1px solid var(--line);
  color: var(--text);
  flex: none;
}`;
    expect(oneEdge(ringsOf(shipped, ".backBtn"))).toBe(false);
  });
});
