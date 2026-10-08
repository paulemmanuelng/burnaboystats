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
