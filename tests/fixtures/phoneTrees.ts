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
