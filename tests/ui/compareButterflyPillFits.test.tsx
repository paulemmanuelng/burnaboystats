import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import PairPage from "../../app/compare/[pair]/page";
import styles from "../../app/compare/compare.module.css";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { decl, rules, winning } from "../fixtures/cssRules";

/**
 * J2-4, fixes 40–42 and the response's verified note "Phone butterfly pills
 * wrap" (design review 8 Oct 2026): a pill wraps inside its half-column
 * instead of overflowing — white-space normal, max-width 100%, min-height
 * 22px, 11px corners once it takes two lines, the issuer at 11px — and the
 * bar is at most calc(100% − 10ch − 6px), never a fixed width. On desktop
 * each side cell is two lines in the 56px row: the pill and the figure, then
 * the count, with the bars 220px at 1440, 110px at 1024 and 88px at 901–1023
 * (and 190px at 1240–1359, where the frame's content is narrower than 1440's).
 *
 * jsdom does no layout, so, as compareChipMarksWrap does, this pins the rules
 * that make it work and models the widths: every unbreakable run in a pill
 * (each tier word, each word of the phone tail, the whole tail on desktop),
 * plus the pill's chrome, must fit its column. Space Mono's advance is
 * 0.612em, so at 11px with 0.04em tracking a character is 7.17px; the
 * issuer keeps the pill's tracking. Geist's tabular figures are modelled at
 * 0.62em (0.3em a comma), a little over their width. Every column width is
 * read from the stylesheet: the gutters from .wrap, the bands from --bf-*.
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
/** The bands' column widths: tokens, so they live on :root (globals.css). */
const GLOBALS = readFileSync("app/globals.css", "utf8");
const band = (w: number, token: "--bf-country" | "--bf-bar") => winning(GLOBALS, ":root", token, at(w));
const at = (w: number) => (m: string | null) => {
  if (m === null) return true;
  const rest = m.replace(/^@media\s*/, "").replace(/\((min|max)-width:\s*\d+px\)/g, "").replace(/\band\b/g, "").trim();
  if (rest !== "") return false;
  return [...m.matchAll(/\((min|max)-width:\s*(\d+)px\)/g)].every(([, k, n]) => (k === "min" ? w >= Number(n) : w <= Number(n)));
};
const px = (v: string | undefined) => {
  const n = Number(v?.match(/^(-?[\d.]+)px$/)?.[1]);
  if (!Number.isFinite(n)) throw new Error(`not a px value: ${v}`);
  return n;
};

const MONO = 11 * (0.612 + 0.04); // a pill character, 7.17px
const CH = 11 * 0.612; // Space Mono's ch at 11px, tracking 0
const fig = (s: string, size: number) => [...s].reduce((w, c) => w + size * (c === "," ? 0.3 : 0.62), 0);

/** The frame's side gutter at a width, from .wrap's padding (all four values read). */
function gutter(w: number) {
  const inline = winning(CSS, ".wrap", "padding-inline", at(w));
  if (inline) return px(inline);
  const pad = winning(CSS, ".wrap", "padding", at(w))!.split(/\s+/);
  return px(pad.length === 1 ? pad[0] : pad[1]);
}
const maxWidth = () => px(winning(CSS, ".wrap", "max-width", at(1440)));

const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();

type Pill = { where: string; runs: string[]; tail: string; tailWords: string[]; figure: string | null; count: string | null };

/** Every pill on a pair page, by its unbreakable runs. */
async function pills(slug: string): Promise<Pill[]> {
  const page = root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
  const out: Pill[] = [];
  for (const tr of page.querySelectorAll("table tbody tr")) {
    const name = norm(tr.querySelector(`.${styles.countryName}`)?.textContent);
    [...tr.children].slice(1).forEach((td, i) => {
      const pill = td.querySelector(`.${styles.bfPill}`);
      if (!pill) return;
      const tail = pill.querySelector(`.${styles.bfTail}`);
      // The phone shows the issuer's short form (progLong is off-screen there).
      const phoneTail = tail
        ? norm([...tail.childNodes].map((n) => (n instanceof Element && n.classList.contains(styles.chipProgram) ? n.querySelector(`.${styles.progShort}`)?.textContent : n.textContent)).join(""))
        : "";
      const deskTail = tail
        ? norm([...tail.childNodes].map((n) => (n instanceof Element && n.classList.contains(styles.chipProgram) ? n.querySelector(`.${styles.progLong}`)?.textContent : n.textContent)).join(""))
        : "";
      out.push({
        where: `${slug} ${name} ${"AB"[i]}`,
        runs: [...pill.querySelectorAll(`.${styles.tierWord}`)].map((w) => norm(w.textContent)),
        tail: deskTail,
        tailWords: phoneTail.split(" ").filter(Boolean),
        figure: norm(td.querySelector(`.${styles.bfFigure}`)?.textContent) || null,
        count: norm(td.querySelector(`.${styles.bfCount}`)?.textContent) || null,
      });
    });
  }
  return out;
}

const SLUGS = [
  ...allPairs().filter((_, i) => i % 10 === 0).map(([a, b]) => pairSlug(a, b)),
  "burna-boy-vs-wizkid",
  "burna-boy-vs-seyi-vibez", // Nigeria in by default: the 102-certs row
  "wizkid-vs-tyla", // Tyla's "† Epic Records"
];

describe("the phone pill's rules (≤900)", () => {
  const ph = (sel: string, prop: string) => winning(CSS, sel, prop, at(390));

  it("the pill wraps inside its half-column", () => {
    expect(ph(".bfPill", "white-space")).toBe("normal");
    expect(ph(".bfPill", "max-width")).toBe("100%");
    expect(ph(".bfPill", "min-height")).toBe("22px");
    expect(ph(".bfPill", "border-radius")).toBe("11px");
    expect(ph(".bfPill", "padding")).toBe("4px 7px");
    expect(ph(".bfPill", "overflow-wrap")).toBe("anywhere");
    expect(ph(".bfTail", "white-space")).toBe("normal");
    expect(ph(".bfPill", "font-size")).toBe("var(--type-label)");
  });

  it("the bar is at most calc(100% - 10ch - 6px), in the count's own mono, untracked", () => {
    expect(ph(".bfTrack", "flex")).toContain("calc(100% - 10ch - 6px)");
    expect(ph(".bfFoot", "letter-spacing")).toBe("0");
    expect(ph(".bfFoot", "font-family")).toMatch(/var\(--font-mono\)/);
    expect(ph(".bfCount", "letter-spacing")).toBe("0");
    for (const w of [320, 375, 900]) expect(winning(CSS, ".bfTrack", "width", at(w)), `${w}`).toBeUndefined();
  });

  it("the sides and their cells may shrink below their content", () => {
    expect(winning(CSS, ".bfSide", "min-width", at(390))).toBe("0");
    const td = rules(CSS).find((r) => at(390)(r.media) && r.media && r.selector.split(",").map((s) => s.trim()).includes(".table td"));
    expect(decl(td!.body, "min-width")).toBe("0");
  });
});

describe("the phone model: every run fits its half-column at 320 and 375", () => {
  for (const w of [320, 375]) {
    it(`${w}px`, async () => {
      const half = (w - 2 * gutter(w) - px(winning(CSS, ".table tr", "column-gap", at(w)))) / 2;
      const chrome = 2 * 7 + 2; // the pill's padding and border
      const dot = 6 + 5; // the dot and its gap
      const wrong: string[] = [];
      let biggestCount = 0;
      for (const slug of SLUGS) {
        for (const p of await pills(slug)) {
          for (const run of p.runs) if (run.length * MONO + chrome + dot > half) wrong.push(`${p.where}: "${run}" ${Math.round(run.length * MONO + chrome + dot)} > ${half}`);
          for (const word of p.tailWords) if (word.length * MONO + chrome > half) wrong.push(`${p.where}: "${word}" > ${half}`);
          if (p.count) biggestCount = Math.max(biggestCount, p.count.length);
        }
      }
      expect(wrong).toEqual([]);
      // The count beside the bar: the bar's basis leaves 10ch and the gap, and
      // the longest count ("102 certs") shrinks the bar, never the page.
      expect(biggestCount).toBeGreaterThan(0);
      expect(10 * CH + 6 + CH).toBeLessThanOrEqual(half);
      expect(biggestCount * CH + 6).toBeLessThanOrEqual(half);
    });
  }

  it("the premise: the pages hold the long runs the review named", async () => {
    const all = (await Promise.all(SLUGS.map(pills))).flat();
    expect(all.some((p) => p.runs.join(" ") === "4× Platinum + Gold")).toBe(true); // MX, Wizkid
    expect(all.some((p) => p.tail === "‡ Sony Music Africa")).toBe(true); // ZA, Burna Boy
    expect(all.some((p) => p.tailWords.join(" ") === "† Epic Records")).toBe(true); // TR, Tyla
    expect(all.some((p) => p.count === "102 certs")).toBe(true); // NG, Seyi Vibez
  });
});

describe("the desktop model: each side's pill and figure share line 1 at 901, 1024, 1240 and 1440", () => {
  for (const w of [901, 1023, 1024, 1239, 1240, 1359, 1360, 1440]) {
    it(`${w}px`, async () => {
      const content = Math.min(w, maxWidth()) - 2 * gutter(w);
      const country = px(band(w, "--bf-country"));
      const bar = px(band(w, "--bf-bar"));
      const cellPad = 7; // .table td.bfCell's sides
      const line = (content - country) / 2 - 2 * cellPad - 14 - bar;
      const chrome = 2 * 7 + 2; // padding and border
      const dot = 7 + 5;
      const wrong: string[] = [];
      for (const slug of SLUGS) {
        for (const p of await pills(slug)) {
          // The pill wraps between its runs; its widest line is the widest run
          // (the dot rides on the first), the desktop tail one nowrap run.
          const lines = [...p.runs.map((r, i) => r.length * MONO + (i === 0 ? dot : 0)), p.tail ? p.tail.length * MONO + 10 : 0];
          const pill = Math.max(...lines) + chrome;
          const need = pill + (p.figure ? 8 + fig(p.figure, 13.5) : 0);
          if (need > line) wrong.push(`${p.where}: ${Math.round(need)} > ${Math.round(line)}`);
        }
      }
      expect(wrong).toEqual([]);
    });
  }

  it("the bands are the stylesheet's: 220/220 from 1360, 220/190 at 1240, 170/110 at 1024, 150/88 at 901", () => {
    const bands = (w: number) => [band(w, "--bf-country"), band(w, "--bf-bar")];
    expect(bands(1440)).toEqual(["220px", "220px"]);
    expect(bands(1360)).toEqual(["220px", "220px"]);
    expect(bands(1359)).toEqual(["220px", "190px"]);
    expect(bands(1240)).toEqual(["220px", "190px"]);
    expect(bands(1239)).toEqual(["170px", "110px"]);
    expect(bands(1024)).toEqual(["170px", "110px"]);
    expect(bands(1023)).toEqual(["150px", "88px"]);
    expect(bands(901)).toEqual(["150px", "88px"]);
    expect(winning(CSS, ".table td.bfCell", "height", at(1440))).toBe("56px");
    expect(winning(CSS, ".bfCount", "font-size", at(1440))).toBe("var(--type-label)");
  });
});

/**
 * The models above put the dot on the first run's line. As first built, the
 * dot was a flex item of its own in a wrapping pill, so whenever the words
 * did not fit beside it they dropped to line 2 whole and left the dot alone on
 * line 1: every pill with an issuer (South Africa, Turkey, Colombia), at every
 * desktop width and at 320/375, rows 73px at 1440 (review, 14 Oct 2026). The
 * dot now opens the first .tierWord, a nowrap run, and the pill is text.
 */
describe("the tier dot rides inside the pill's first run", () => {
  /** One dot, the first child of the pill's first tier run. */
  const dotRides = (pill: Element) => {
    const first = pill.querySelector(`.${styles.tierWord}`);
    return pill.querySelectorAll(`.${styles.bfDot}`).length === 1 && first?.firstElementChild?.classList.contains(styles.bfDot) === true;
  };

  it("on every pill of the sampled pages", async () => {
    const wrong: string[] = [];
    let n = 0;
    for (const slug of SLUGS) {
      const page = root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
      for (const pill of page.querySelectorAll(`.${styles.bfPill}`)) {
        n++;
        if (!dotRides(pill)) wrong.push(`${slug}: ${norm(pill.closest("tr")?.querySelector(`.${styles.countryName}`)?.textContent)}`);
      }
    }
    expect(n).toBeGreaterThan(100);
    expect(wrong).toEqual([]);
  });

  it("the pill is text, not a wrapping flex box; the dot is inline; a run never breaks inside", () => {
    for (const w of [320, 375, 900, 901, 1024, 1240, 1440]) {
      expect(winning(CSS, ".bfPill", "display", at(w)), `${w}`).toBe("inline-block");
      expect(winning(CSS, ".bfPill", "flex-wrap", at(w)), `${w}`).toBeUndefined();
      expect(winning(CSS, ".bfDot", "display", at(w)), `${w}`).toBe("inline-block");
      expect(winning(CSS, ".tierWord", "white-space", at(w)), `${w}`).toBe("nowrap");
    }
  });

  it("negative control: J2-4 as first built (f00eac38, never shipped), the dot a flex item beside the words", () => {
    // Its South Africa pill, as that commit's Side rendered it.
    const first = root(
      `<span class="${styles.bfPill}"><span class="${styles.bfDot} ${styles.bfDotPlatinum}" aria-hidden="true"></span><span><span class="${styles.tierWord}">19× Platinum</span> <span class="${styles.bfTail}"><span class="${styles.mark}">‡</span> <span class="${styles.chipProgram}" title="Sony Music Africa"><span class="${styles.progLong}">Sony Music Africa</span><span class="${styles.progShort}" aria-hidden="true">Sony</span></span></span></span></span>`,
    ).firstElementChild!;
    expect(dotRides(first)).toBe(false);
    // Its .bfPill rule, verbatim (the flex part).
    const css = ".bfPill {\n  flex: 0 1 auto;\n  min-width: 0;\n  max-width: 100%;\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 2px 5px;\n}";
    expect(winning(css, ".bfPill", "display", at(1440))).toBe("inline-flex");
    expect(winning(css, ".bfPill", "flex-wrap", at(1440))).toBe("wrap");
  });
});

describe("negative controls", () => {
  it("main's 78px phone grid (and its 56px at ≤360) starved a side to 108px at 320, under the 116px “† Epic Records” pill", () => {
    // main's compare.module.css, lines 698–700 and 811, verbatim.
    const shipped = (w: number) => (w <= 360 ? "56px minmax(0, 1fr) minmax(0, 1fr)" : "78px minmax(0, 1fr) minmax(0, 1fr)");
    expect(shipped(320)).toBe("56px minmax(0, 1fr) minmax(0, 1fr)");
    // The shipped grid: a 56px code column and two 8px gaps out of 288.
    const side = (320 - 2 * 16 - 56 - 2 * 8) / 2;
    expect(side).toBe(108);
    // The phone pill set "† Epic Records" whole, nowrap, as one run.
    const pill = "† Epic Records".length * MONO + 2 * 7 + 2 + 6 + 5;
    expect(pill).toBeGreaterThan(side);
  });

  it("the canvas's fixed 120px phone bar (Compare - Oct 2026.dc.html, rowsFor(t, 120, true); a canvas string) ran past the half-column", () => {
    const half = (320 - 2 * gutter(320) - 14) / 2;
    expect(120 + 6 + 10 * CH).toBeGreaterThan(half);
  });
});
