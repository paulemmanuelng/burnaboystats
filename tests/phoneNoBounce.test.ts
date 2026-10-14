import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// Paul, 14 Oct 2026: a flick past the end of the phone home bounced on into
// empty background, with the fixed tab bar riding up under the last line. The
// root scroller stops at its ends on phones (≤900px, the site's one phone
// edge) and only there.

const CSS = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");

/** Each @media block's condition and body, brace-matched. */
const mediaBlocks = (css: string) => {
  const out: { cond: string; body: string }[] = [];
  const re = /@media\s*([^{]+)\{/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(css))) {
    let depth = 1, i = re.lastIndex;
    while (depth && i < css.length) depth += css[i] === "{" ? 1 : css[i] === "}" ? -1 : 0, i++;
    out.push({ cond: m[1].trim(), body: css.slice(re.lastIndex, i - 1) });
  }
  return out;
};
const rootNoBounce = (body: string) =>
  /(^|[\s,}])html\s*,\s*body\s*\{[^}]*overscroll-behavior-y:\s*none/.test(body);

describe("the phone layout does not bounce past the page's ends", () => {
  it("html and body carry overscroll-behavior-y: none at max-width 900px", () => {
    const phone = mediaBlocks(CSS).filter((b) => b.cond === "(max-width: 900px)");
    expect(phone.some((b) => rootNoBounce(b.body))).toBe(true);
  });

  it("and nowhere else: desktop keeps the browser's own overscroll", () => {
    const others = mediaBlocks(CSS).filter((b) => b.cond !== "(max-width: 900px)");
    expect(others.some((b) => /overscroll-behavior-y:\s*none/.test(b.body))).toBe(false);
    const outside = mediaBlocks(CSS).reduce((css, b) => css.replace(b.body, ""), CSS);
    expect(/overscroll-behavior-y:\s*none/.test(outside)).toBe(false);
  });

  it("negative control: the shipped root rule (scroll-behavior only) fails", () => {
    expect(rootNoBounce("html {\n  scroll-behavior: smooth;\n}\n")).toBe(false);
  });
});
