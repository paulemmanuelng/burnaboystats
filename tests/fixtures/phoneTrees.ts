/**
 * Helpers for the pages that render two trees — the phone screen first, then
 * the desktop column inside `.desktopOnly` — used by the /curator, /press and
 * /analysis/spotify-unmerge phone-screen tests (design response, 30 Sep 2026).
 */

export const dom = (html: string) => new DOMParser().parseFromString(html, "text/html");

/** Text with its whitespace runs collapsed, the way a reader sees it. */
export const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

/** The two trees of a rendered page: the phone screen and the desktop column. */
export function trees(html: string) {
  const d = dom(html);
  const main = d.querySelector("main")!;
  const desktop = main.querySelector('[class*="desktopOnly"]');
  // The phone screen is a direct child of <main>: not a JSON-LD script, not
  // the desktop wrapper, and its module class is `.screen`.
  const phone = [...main.children].find(
    (c) => c.tagName !== "SCRIPT" && c !== desktop && /screen/.test(c.className),
  );
  return { d, main, desktop, phone };
}

/** Every declaration of `prop` in rules whose selector is exactly `selector`. */
export const declared = (css: string, selector: string, prop: string) => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: string[] = [];
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].trim() !== selector) continue;
    for (const decl of m[2].split(";")) {
      const i = decl.indexOf(":");
      if (i > 0 && decl.slice(0, i).trim() === prop) out.push(decl.slice(i + 1).trim());
    }
  }
  return out;
};

/** Rules at the top level and one `@media` deep, in source order, comments stripped. */
export function cssRules(css: string) {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: { media: string | null; selector: string; body: string }[] = [];
  const walk = (s: string, media: string | null) => {
    let i = 0;
    while (i < s.length) {
      const open = s.indexOf("{", i);
      if (open < 0) break;
      const head = s.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < s.length && depth > 0) {
        if (s[j] === "{") depth++;
        else if (s[j] === "}") depth--;
        j++;
      }
      const body = s.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head);
      else out.push({ media, selector: head, body });
      i = j;
    }
  };
  walk(src, null);
  return out;
}

/** Whether a rule's media applies at viewport width `w` (plain max-/min-width only; anything else throws). */
const mediaApplies = (media: string | null, w: number) => {
  if (media === null) return true;
  const max = media.match(/^@media \(max-width: (\d+)px\)$/);
  if (max) return w <= Number(max[1]);
  const min = media.match(/^@media \(min-width: (\d+)px\)$/);
  if (min) return w >= Number(min[1]);
  throw new Error(`unhandled media: ${media}`);
};

/** The value of `prop` that wins on a bare `selector` at viewport width `w`: the last applying declaration in source order. */
export const declaredAt = (css: string, selector: string, prop: string, w: number) =>
  cssRules(css)
    .filter((r) => r.selector === selector && mediaApplies(r.media, w))
    .flatMap((r) =>
      r.body
        .split(";")
        .filter((decl) => decl.includes(":"))
        .map((decl) => [decl.slice(0, decl.indexOf(":")).trim(), decl.slice(decl.indexOf(":") + 1).trim()])
        .filter(([p]) => p === prop)
        .map(([, v]) => v),
    )
    .at(-1);
