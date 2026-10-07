import { readFileSync } from "node:fs";
import { render, screen, act } from "@testing-library/react";
import BirthdayCelebration from "../../app/components/BirthdayCelebration";

/**
 * V-global-20 (full-site debug, 5 Oct 2026).
 *
 * On 2 July the birthday banner is fixed at bottom: 22px on every page. The
 * phone layout (to 900px) pins its own bar to the foot of the screen, so the
 * banner lay over it. Read live in headless Chrome with the page's clock set
 * to 2 July 2027, dark and light, 6 Oct: at 390x844 the banner ran 720–822
 * over the tab bar's 757–844, and a tap on any of the five tabs landed on the
 * banner (0 of 5 reachable); on /certifications and the song pages it covered
 * the action bar's 769–844 (Compare and Play half hidden, 0 of 3 and 0 of 2);
 * on a /compare pair page it covered the board bar and the tabs (0 of 6); at
 * 768 and 900 the desktop pill did the same. With the module's new 900px block
 * grafted onto the live page, 32 page runs (390, 320, 768, 900; home, deep
 * screens, /share, /compare, a 404) put the banner 12px above the bar with
 * every button reachable, and 1024 and 1440 kept 22px.
 *
 * jsdom does no layout and does not match media queries, so this reads the
 * stylesheet: the rules that set the banner's bottom, with their :global()
 * hooks matched against bodies built from the class names the live pages
 * carry, and the calc() worked out with and without a home-indicator inset.
 * The bars' heights are the live reads (tab bar 87, action bar 75, /share's
 * two-row bar 130, the board bar 69 on the tab bar, at inset 0), grown by the
 * inset the way each bar's own padding grows.
 */

const CSS = readFileSync("app/components/BirthdayCelebration.module.css", "utf8");
const GLOBALS = readFileSync("app/globals.css", "utf8");

type Rule = { selector: string; decls: Record<string, string>; max?: number };

/** Unwrap every :global(...) to its contents; parentheses inside are balanced. */
const unglobal = (sel: string) => {
  let out = sel;
  for (let i = out.indexOf(":global("); i >= 0; i = out.indexOf(":global(")) {
    let depth = 0;
    let j = i + ":global".length;
    for (; j < out.length; j++) {
      if (out[j] === "(") depth++;
      else if (out[j] === ")" && --depth === 0) break;
    }
    out = out.slice(0, i) + out.slice(i + ":global(".length, j) + out.slice(j + 1);
  }
  return out;
};

/** Split a selector list on its top-level commas only (":has(a, b)" stays whole). */
const splitList = (list: string) => {
  const parts: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "(") depth++;
    else if (list[i] === ")") depth--;
    else if (list[i] === "," && depth === 0) {
      parts.push(list.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(list.slice(start));
  return parts.map((s) => s.trim()).filter(Boolean);
};

/** Rules in source order: top level and @media (max-width) blocks; keyframes
 *  and any other at-rule (reduced motion touches animation only) skipped. */
const parse = (css: string): Rule[] => {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const walk = (text: string, max?: number) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      let depth = 1;
      let close = open + 1;
      for (; close < text.length && depth > 0; close++) {
        if (text[close] === "{") depth++;
        else if (text[close] === "}") depth--;
      }
      const prelude = text.slice(i, open).trim();
      const body = text.slice(open + 1, close - 1);
      i = close;
      if (prelude.startsWith("@media")) {
        const w = /^@media\s*\(max-width:\s*(\d+)px\)$/.exec(prelude);
        if (w) walk(body, Number(w[1]));
        continue;
      }
      if (prelude.startsWith("@")) continue;
      const decls: Record<string, string> = {};
      for (const part of body.split(";")) {
        const c = part.indexOf(":");
        if (c > 0) decls[part.slice(0, c).trim()] = part.slice(c + 1).trim();
      }
      for (const selector of splitList(unglobal(prelude))) rules.push({ selector, decls, max });
    }
  };
  walk(src);
  return rules;
};

/** The --tabbar-* tokens the tab bar is built from (globals.css :root). */
const tokens = Object.fromEntries(
  [...GLOBALS.matchAll(/(--tabbar-[\w-]+)\s*:\s*([^;]+);/g)].map(([, k, v]) => [k, v.trim()])
);

/** Work a length out to px: var() from the tab bar tokens, env() as the inset. */
const px = (value: string, inset: number): number => {
  let v = value;
  for (let n = 0; n < 10 && v.includes("var("); n++) v = v.replace(/var\((--[\w-]+)\)/g, (_, k) => `(${tokens[k]})`);
  v = v.replace(/env\(safe-area-inset-bottom(?:,\s*[^)]*)?\)/g, `${inset}px`);
  const expr = v.replace(/calc\(/g, "(").replace(/max\(/g, "Math.max(").replace(/px/g, "");
  if (!/^[\d\s+\-*/().,]*$/.test(expr.replace(/Math\.max/g, ""))) throw new Error(`unresolved length: ${value}`);
  return Function(`return ${expr}`)() as number;
};

/** The banner's bottom, in px, on a page whose body holds `markup`, at width w. */
const bannerBottom = (rules: Rule[], markup: string, w: number, inset: number) => {
  document.body.innerHTML = `${markup}<aside class="banner"></aside>`;
  const banner = document.body.querySelector("aside")!;
  let bottom: string | undefined;
  for (const r of rules) {
    if (!("bottom" in r.decls)) continue;
    if (r.max !== undefined && w > r.max) continue;
    if (!banner.matches(r.selector)) continue;
    bottom = r.decls.bottom; // equal specificity throughout: the last match wins
  }
  return px(bottom!, inset);
};

/** Each phone page's foot, as the live page draws it: its bars' class names
 *  verbatim (390x844, 6 Oct), and the height they stand at for an inset. */
const PAGES: { name: string; markup: string; bar: (inset: number) => number }[] = [
  {
    name: "home (the five-tab bar)",
    markup: `<nav class="mobileTabBar-module__hH78kW__bar mobileTabBarPresent"></nav>`,
    bar: (i) => 8 + 48 + Math.max(30, i) + 1,
  },
  {
    name: "/certifications (an action bar)",
    markup: `<div class="mobileCerts-module__1wnzXW__actionBar"></div>`,
    bar: (i) => 75 + i,
  },
  {
    name: "a song page (the song's action bar)",
    markup: `<div class="song-module__JUBKta__mobileActionBar"></div>`,
    bar: (i) => 75 + i,
  },
  {
    name: "/share (a two-row action bar)",
    markup: `<div class="mobileStatCards-module__7cOTGq__actionBar"><button></button><div class="mobileStatCards-module__7cOTGq__secondaryRow"></div></div>`,
    bar: (i) => 130 + i,
  },
  {
    name: "a /compare pair page (the board bar on the tab bar)",
    markup: `<div class="compare-module__-ZWgpW__boardBar compareBoardBar"></div><nav class="mobileTabBar-module__hH78kW__bar mobileTabBarPresent"></nav>`,
    bar: (i) => 69 + 8 + 48 + Math.max(30, i) + 1,
  },
];

const PHONE = [320, 390, 768, 900];
const INSETS = [0, 34]; // headless and an iPhone with a home indicator
const GAP = 12;

describe("V-global-20: the birthday banner sits above the phone's bottom bar, not over it", () => {
  const rules = parse(CSS);

  for (const page of PAGES) {
    it.each(PHONE)(`${page.name}: at %ipx the banner clears the bar by ${GAP}px`, (w) => {
      for (const inset of INSETS) {
        expect(bannerBottom(rules, page.markup, w, inset) - page.bar(inset)).toBe(GAP);
      }
    });
  }

  it("a 404 hides the tab bar (globals.css), so the banner keeps its 22px there", () => {
    const markup = `<div class="appStateWrap appStateAppLevel appStateShell"></div><nav class="mobileTabBar-module__hH78kW__bar mobileTabBarPresent"></nav>`;
    for (const w of [390, 900]) expect(bannerBottom(rules, markup, w, 0)).toBe(22);
  });

  it("a phone page with no bar (awards, festivals) keeps 22px", () => {
    expect(bannerBottom(rules, `<main></main>`, 390, 0)).toBe(22);
  });

  it("the desktop layout is unchanged: 22px above 900, whatever the hidden phone markup holds", () => {
    for (const page of PAGES) for (const w of [901, 1024, 1440]) expect(bannerBottom(rules, page.markup, w, 0)).toBe(22);
  });

  it("the component renders its banner with the class those rules reach", () => {
    vi.useFakeTimers({ toFake: ["Date", "setTimeout", "clearTimeout"] });
    vi.setSystemTime(new Date(2027, 6, 2, 11, 0, 0));
    try {
      sessionStorage.clear();
      render(<BirthdayCelebration />);
      act(() => {});
      const note = screen.getByRole("note", { name: "Burna Boy turns 36 today" });
      expect(note.className).toMatch(/banner/);
    } finally {
      vi.useRealTimers();
    }
  });

  it("negative control: the shipped stylesheet left the banner at 22px over every bar", () => {
    // origin/main 74f27788, app/components/BirthdayCelebration.module.css:
    // the .banner rule's offsets and the 520px block's, verbatim.
    const SHIPPED_CSS = `
.banner {
  position: fixed;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  z-index: 61; /* over the tab bar (60), which follows the page in the DOM */
}
@media (max-width: 520px) {
  .banner {
    left: 12px;
    right: 12px;
    transform: none;
    border-radius: var(--radius-sm);
    animation: riseMobile 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }
  @keyframes riseMobile {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .sub {
    white-space: normal;
  }
}
`;
    const shipped = parse(SHIPPED_CSS);
    for (const page of PAGES) {
      for (const w of PHONE) expect(bannerBottom(shipped, page.markup, w, 0)).toBeLessThan(page.bar(0));
    }
  });
});
