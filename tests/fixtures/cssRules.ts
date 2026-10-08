import { readFileSync } from "node:fs";

/**
 * Read a stylesheet the way the cascade will: each rule with its @media block
 * (one level deep) and its position, comments stripped. The same reader as
 * tests/siteDebugLayout.test.tsx, shared by the design-review guards of
 * 8 Oct 2026 (tests/designReview1008*.test.ts*).
 */
export type Rule = { media: string | null; selector: string; body: string; at: number };

export function rules(css: string): Rule[] {
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

export const read = (p: string) => readFileSync(p, "utf8");

/** The value of `prop` in a rule body, or undefined. */
export const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();

/**
 * The value the cascade gives `prop` on `selector` under a media test: the
 * LAST matching rule wins (every rule these guards read has the same
 * specificity as its rivals, so order decides).
 */
export function winning(css: string, selector: string, prop: string, media: (m: string | null) => boolean) {
  let v: string | undefined;
  for (const r of rules(css)) {
    if (!media(r.media)) continue;
    if (!r.selector.split(",").map((s) => s.trim()).includes(selector)) continue;
    const d = decl(r.body, prop);
    if (d !== undefined) v = d;
  }
  return v;
}

/**
 * The hit box an absolutely positioned ::after gives a control whose PADDING
 * box is [w, h] (an absolute box is placed against its containing block's
 * padding box). Understands the two forms the site uses: `inset: <t> [<r>]`,
 * and a centred box — `left: 50%; top: 50%; transform: translate(-50%, -50%)`
 * with `width`/`height` of `max(100%, Npx)`. Anything else returns NaN, so a
 * rule rewritten into a form this cannot read fails loudly rather than passing.
 */
export function afterHitBox(body: string, [w, h]: [number, number]): [number, number] {
  const inset = decl(body, "inset");
  if (inset) {
    const p = inset.split(/\s+/).map((v) => parseFloat(v));
    const [t, r = t, b = t, l = r] = p;
    return [w - l - r, h - t - b];
  }
  const centred =
    decl(body, "left") === "50%" && decl(body, "top") === "50%" && /^translate\(-50%,\s*-50%\)$/.test(decl(body, "transform") ?? "");
  if (!centred) return [NaN, NaN];
  const size = (v: string | undefined, base: number) => {
    if (v === "100%") return base;
    const m = v?.match(/^max\(100%,\s*([\d.]+)px\)$/);
    return m ? Math.max(base, Number(m[1])) : NaN;
  };
  return [size(decl(body, "width"), w), size(decl(body, "height"), h)];
}
