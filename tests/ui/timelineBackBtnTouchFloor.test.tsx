import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/timeline",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import TimelinePage from "../../app/timeline/page";
import styles from "../../app/timeline/timeline.module.css";

/**
 * V-global-14 (full-site debug, 5 Oct 2026).
 *
 * /timeline draws its own phone back bar, and its back button was 34x34.
 * Read live in headless Chrome, dark and light, 7 Oct: 34x34 at 320, 390,
 * 768 and 900 (the bar shows to 900), while /records' shared back bar beside
 * it measured 44x44 at every one of those widths. With the rule below grafted
 * onto the live page it measured 44x44 at all four widths in both themes and
 * the bar stayed 69px (the menu button already set its height).
 *
 * jsdom does no layout, so this reads what the stylesheet gives the button at
 * each width, against the size the shared back bar and the song pages' bar
 * give theirs (read from their own stylesheets, not typed here), and checks
 * the rule is the one on the page's back link. The same reads run on the
 * shipped rule (origin/main, quoted), which fail them.
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

/** Every declaration the stylesheet gives `selector`, base then each query in order. */
const resolved = (css: string, selector: string) =>
  Object.assign({}, ...parse(css).filter((r) => r.selector === selector).map((r) => r.decls)) as Record<string, string>;

const px = (v: string | undefined) => (v && /^\d+(\.\d+)?px$/.test(v) ? parseFloat(v) : NaN);

const TIMELINE_CSS = readFileSync("app/timeline/timeline.module.css", "utf8");
// The two back bars the timeline's own comment points at.
const shared = resolved(readFileSync("app/components/mobileDeepPage.module.css", "utf8"), ".backBtn");
const song = resolved(readFileSync("app/music/[song]/song.module.css", "utf8"), ".mobileBackBtn");

/** What is wrong with a stylesheet's timeline back button, [] when nothing. */
const problems = (css: string) => {
  const out: string[] = [];
  const btn = resolved(css, ".mobileBackBtn");
  for (const prop of ["width", "height"] as const) {
    if (px(btn[prop]) < 44 || Number.isNaN(px(btn[prop]))) out.push(`${prop} ${btn[prop]} is under the 44px floor`);
    if (btn[prop] !== shared[prop]) out.push(`${prop} ${btn[prop]} is not the shared back bar's ${shared[prop]}`);
    if (btn[prop] !== song[prop]) out.push(`${prop} ${btn[prop]} is not the song pages' ${song[prop]}`);
  }
  // A flex item may shrink below its width; the label beside it is flex: 1.
  if (btn["flex"] !== "none" && btn["flex-shrink"] !== "0") out.push("it can shrink in the flex bar");
  // No width or height query may take it back under.
  for (const r of parse(css).filter((r) => r.selector === ".mobileBackBtn" && r.query)) {
    for (const prop of ["width", "height", "min-width", "min-height", "max-width", "max-height", "flex", "flex-shrink"]) {
      if (r.decls[prop] !== undefined) out.push(`${r.query} sets ${prop}`);
    }
  }
  return out;
};

describe("V-global-14: the career timeline's phone back button meets the 44px floor", () => {
  it("the anchors are what every other back bar uses", () => {
    expect(shared.width).toBe("44px");
    expect(shared.height).toBe("44px");
    expect(song.width).toBe(shared.width);
    expect(song.height).toBe(shared.height);
  });

  it("the button is as large as the shared back bar's, and nothing shrinks it", () => {
    expect(problems(TIMELINE_CSS)).toEqual([]);
  });

  it("the rule is the one on the page's back link, inside the phone back bar", () => {
    const div = document.createElement("div");
    div.innerHTML = renderToStaticMarkup(<TimelinePage />);
    const bars = div.querySelectorAll(`.${styles.mobileBackBar}`);
    expect(bars.length).toBe(1);
    const back = bars[0].querySelector('a[aria-label="Back home"]');
    expect(back).not.toBeNull();
    expect(back!.getAttribute("href")).toBe("/");
    expect(back!.className).toBe(styles.mobileBackBtn);
  });

  it("negative control: the shipped rule was 34px", () => {
    // origin/main, app/timeline/timeline.module.css, verbatim.
    const SHIPPED_CSS = `.mobileBackBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--line);
  color: var(--text);
  background: none;
}`;
    expect(problems(SHIPPED_CSS)).toEqual([
      "width 34px is under the 44px floor",
      "width 34px is not the shared back bar's 44px",
      "width 34px is not the song pages' 44px",
      "height 34px is under the 44px floor",
      "height 34px is not the shared back bar's 44px",
      "height 34px is not the song pages' 44px",
      "it can shrink in the flex bar",
    ]);
  });
});
