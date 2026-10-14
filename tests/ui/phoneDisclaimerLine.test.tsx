import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

let path = "/";
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => path,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileHome from "../../app/components/MobileHome";
import AboutPage from "../../app/about/page";
import FooterNav from "../../app/components/FooterNav";
import PhoneDisclaimer from "../../app/components/PhoneDisclaimer";
import home from "../../app/components/mobileHome.module.css";
import about from "../../app/components/mobileAbout.module.css";
import fold from "../../app/components/phoneDisclaimer.module.css";
import { PHONE_DISCLAIMER, PHONE_DISCLAIMER_SUMMARY, SITE_DISCLAIMER, footerFor, DEFAULT_FOOTER } from "../../app/lib/links";
import { onThisDayFor } from "../../app/lib/onThisDay";
import { decl, read, rules, winning } from "../fixtures/cssRules";
import { trees } from "../fixtures/phoneTrees";

/**
 * SH-09 (design review 8 Oct 2026, J1-4, approved 8 Oct): the phone has no
 * footer, so the phone home and phone /about end on the footer's disclaimer
 * and the artwork credit, above the tab bar — "An unofficial fan site — not
 * affiliated with or endorsed by Burna Boy · Artwork: Spotify", Geist 12,
 * --text-muted. The sentence is the footer's own (SITE_DISCLAIMER, in
 * lib/links.ts), so the two can never drift.
 *
 * Folded at the owner's request (14 Oct 2026, from his phone: "make that
 * disclaimer foldable"): one shared PhoneDisclaimer, a native <details> shut
 * by default. Shut it reads "Unofficial fan site ▾" — the sentence's own
 * opening words (PHONE_DISCLAIMER_SUMMARY) — and open, the full sentence sits
 * under it. The ▾ turns to read ▴ the way the "Method ▾" fold's does.
 */

const ROOT = join(__dirname, "..", "..");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const phone = (m: string | null) => m !== null && /max-width:\s*900px/.test(m);
const always = (m: string | null) => m === null;
const FOLD_CSS = join(ROOT, "app/components/phoneDisclaimer.module.css");
const GOLD = /--gold|--color-accent|--display-ramp|--ember|255,\s*182,\s*39|148,\s*94,\s*0|#945e00|#ffb627/i;

// With the day's pick, as app/page.tsx renders it, so the card is there.
const homeScreen = parse(renderToStaticMarkup(<MobileHome onThisDay={onThisDayFor(new Date())} />)).querySelector(`.${home.screen}`)!;
const aboutTrees = trees(renderToStaticMarkup(<AboutPage />));

/** Every element whose own text is exactly `s`. */
const holders = (root: Element, s: string) => [...root.querySelectorAll("p, span, div")].filter((e) => words(e) === s && e.children.length === 0);

/** What a reader hears for a summary: its text, the aria-hidden glyph left out. */
const spoken = (summary: Element) =>
  [...summary.childNodes]
    .filter((n) => !(n.nodeType === 1 && (n as Element).getAttribute("aria-hidden") === "true"))
    .map((n) => n.textContent ?? "")
    .join("")
    .replace(/\s+/g, " ")
    .trim();

/** Everything that keeps `el` from being the disclaimer fold; [] when it is one. */
function foldProblems(el: Element | null | undefined): string[] {
  if (!el) return ["missing"];
  const out: string[] = [];
  if (el.tagName !== "DETAILS") out.push(`a <${el.tagName.toLowerCase()}>, not a <details>`);
  if (el.className !== fold.disclaimer) out.push(`class "${el.className}", not the fold's`);
  if (el.hasAttribute("open")) out.push("open by default");
  const [summary, ...body] = [...el.children];
  if (summary?.tagName !== "SUMMARY") out.push("no <summary> first");
  else {
    if (spoken(summary) !== PHONE_DISCLAIMER_SUMMARY) out.push(`the summary reads "${spoken(summary)}"`);
    const chev = summary.lastElementChild;
    const ownSpan = chev?.tagName === "SPAN" && chev.getAttribute("aria-hidden") === "true" && chev.className === fold.chev;
    if (!ownSpan || chev?.textContent !== "▾") out.push("no ▾ in its own aria-hidden span at the summary's end");
  }
  if (body.length !== 1 || body[0].tagName !== "P" || words(body[0]) !== PHONE_DISCLAIMER) {
    out.push("the full sentence is not the fold's one paragraph under the summary");
  }
  return out;
}

describe("the phone's disclaimer fold on home and /about", () => {
  it("the phone home ends on the fold, once, after the On this day card", () => {
    const last = homeScreen.lastElementChild!;
    expect(foldProblems(last)).toEqual([]);
    expect(homeScreen.querySelectorAll(`details.${fold.disclaimer}`)).toHaveLength(1);
    expect(holders(homeScreen, PHONE_DISCLAIMER)).toHaveLength(1);
    // the card it follows is the screen's On this day section
    expect(last.previousElementSibling?.getAttribute("aria-labelledby")).toBe("otd-title-m");
  });

  it("phone /about ends on the fold, once, the last block before the tab bar's spacer", () => {
    const screen = aboutTrees.phone!;
    expect(screen).toBeTruthy();
    const last = screen.lastElementChild!;
    expect(last.className).toBe(about.spacer);
    const f = last.previousElementSibling!;
    expect(foldProblems(f)).toEqual([]);
    expect(screen.querySelectorAll(`details.${fold.disclaimer}`)).toHaveLength(1);
    expect(holders(screen, PHONE_DISCLAIMER)).toHaveLength(1);
    // the timeline comes before it, and the desktop column does not carry it
    expect(screen.querySelector(`.${about.timelineWrap}`)!.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(aboutTrees.desktop!.querySelector(`details.${fold.disclaimer}`)).toBeNull();
    expect(words(aboutTrees.desktop)).not.toContain(PHONE_DISCLAIMER);
  });

  it("shut by default; the label is the sentence's own opening words; open, the full sentence", () => {
    const f = parse(renderToStaticMarkup(<PhoneDisclaimer />)).body.firstElementChild!;
    expect(foldProblems(f)).toEqual([]);
    expect(f.hasAttribute("open")).toBe(false);
    expect(PHONE_DISCLAIMER_SUMMARY).toBe("Unofficial fan site");
    // "An unofficial fan site — …": the label is those words, less the article
    expect(SITE_DISCLAIMER.split(" — ")[0].toLowerCase()).toBe(`an ${PHONE_DISCLAIMER_SUMMARY.toLowerCase()}`);
    expect(words(f.querySelector("p"))).toBe("An unofficial fan site — not affiliated with or endorsed by Burna Boy · Artwork: Spotify");
  });

  it("derived, never retyped: no screen or component types the words", () => {
    // Code only: a comment may quote the words it describes.
    const code = (f: string) => readFileSync(join(ROOT, f), "utf8").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    for (const f of ["app/components/PhoneDisclaimer.tsx", "app/components/MobileHome.tsx", "app/components/MobileAbout.tsx"]) {
      expect(code(f), f).not.toMatch(/unofficial fan site|Artwork: Spotify|not affiliated/i);
    }
    const comp = readFileSync(join(ROOT, "app/components/PhoneDisclaimer.tsx"), "utf8");
    expect(comp).toContain("{PHONE_DISCLAIMER_SUMMARY}");
    expect(comp).toContain("{PHONE_DISCLAIMER}");
    // both screens mount the one component
    for (const f of ["app/components/MobileHome.tsx", "app/components/MobileAbout.tsx"]) {
      expect(readFileSync(join(ROOT, f), "utf8"), f).toContain("<PhoneDisclaimer />");
    }
    // the label is built from SITE_DISCLAIMER, not written out
    const links = readFileSync(join(ROOT, "app/lib/links.ts"), "utf8");
    const label = links.match(/export const PHONE_DISCLAIMER_SUMMARY =([\s\S]*?);\n/)?.[1] ?? "";
    expect(label).toContain("SITE_DISCLAIMER");
    expect(label).not.toMatch(/fan site/i);
  });

  it("the line's type, Geist 12 in --text-muted, on the label and the sentence alike — never gold", () => {
    const css = read(FOLD_CSS);
    expect(winning(css, ".disclaimer", "font-size", always)).toBe("12px");
    expect(winning(css, ".disclaimer", "line-height", always)).toBe("1.5");
    expect(winning(css, ".disclaimer", "color", always)).toBe("var(--text-muted)");
    expect(winning(css, ".disclaimer", "font-family", always)).toMatch(/^var\(--font-geist-sans\)/);
    expect(winning(css, ".disclaimer", "font-weight", always)).toBe("400");
    // the label and the sentence inherit it: no other rule sets an ink or a face
    for (const r of rules(css).filter((r) => r.selector !== ".disclaimer")) {
      for (const p of ["color", "font-size", "font-family", "font-weight", "line-height", "background", "background-color"]) {
        expect(decl(r.body, p), `${r.selector} ${p}`).toBeUndefined();
      }
    }
    expect(css.replace(/\/\*[\s\S]*?\*\//g, "")).not.toMatch(GOLD);
  });

  it("a 44px tap target that puts the label where the line sat, with the site's focus ring and no hover of its own", () => {
    const css = read(FOLD_CSS);
    expect(winning(css, ".summary", "min-height", always)).toBe("44px");
    expect(winning(css, ".summary", "display", always)).toBe("inline-flex");
    expect(winning(css, ".summary", "align-items", always)).toBe("center");
    expect(winning(css, ".summary", "list-style", always)).toBe("none");
    // the line had 16px above it: 3px of padding + (44 − 12 × 1.5) / 2 = 16
    const top = parseFloat(winning(css, ".disclaimer", "padding", always)!.split(/\s+/)[0]);
    expect(top + (44 - 12 * 1.5) / 2).toBe(16);
    expect(winning(css, ".disclaimer", "padding", always)).toBe("3px 18px 0");
    // the ring is globals.css's for every summary; the module never removes it,
    // and has no hover or press state to paint gold
    expect(winning(read(join(ROOT, "app/globals.css")), "summary:focus-visible", "outline", always)).toBe("2px solid var(--gold)");
    expect(css).not.toMatch(/outline\s*:\s*(none|0)\b/);
    expect(rules(css).filter((r) => /:hover|:active|:focus/.test(r.selector))).toEqual([]);
  });

  it("▾ shut, turned to read ▴ open: the \"Method ▾\" fold's own rule (mobileProvenance .chev)", () => {
    const css = read(FOLD_CSS);
    const method = read(join(ROOT, "app/components/mobileProvenance.module.css"));
    const body = (src: string, sel: string) => rules(src).find((r) => r.selector === sel)?.body ?? "";
    for (const p of ["display", "transition"]) {
      expect(decl(body(css, ".chev"), p), p).toBe(decl(body(method, ".chev"), p));
    }
    expect(decl(body(css, ".disclaimer[open] .chev"), "transform")).toBe("rotate(180deg)");
    expect(decl(body(method, ".p2Method[open] .chev"), "transform")).toBe("rotate(180deg)");
    // the markers a <summary> draws by default are gone, as on the Method fold
    expect(decl(body(css, ".summary::-webkit-details-marker"), "display")).toBe("none");
    expect(decl(body(css, ".summary::marker"), "content")).toBe('""');
  });

  it("the footer's own sentence, minus its full stop, then the artwork credit", () => {
    expect(PHONE_DISCLAIMER).toBe("An unofficial fan site — not affiliated with or endorsed by Burna Boy · Artwork: Spotify");
    expect(PHONE_DISCLAIMER.startsWith(SITE_DISCLAIMER.replace(/\.$/, ""))).toBe(true);
    // FooterNav reads the one constant; it no longer types the sentence.
    const src = readFileSync(join(ROOT, "app/components/FooterNav.tsx"), "utf8");
    expect(src).not.toContain("An unofficial fan site");
    expect(src).toContain("SITE_DISCLAIMER");
  });

  it("the desktop footers print exactly what they printed before", () => {
    path = "/";
    const full = parse(renderToStaticMarkup(<FooterNav />));
    expect(words(full.querySelector(".footerDisclaimer"))).toBe(
      "An unofficial fan site — not affiliated with or endorsed by Burna Boy. Artwork provided by Spotify and remains the property of its owners.",
    );
    expect(full.querySelector("details")).toBeNull();
    for (const p of ["/records", "/certifications", "/about"]) {
      path = p;
      const note = (footerFor[p] ?? DEFAULT_FOOTER).note;
      const compact = parse(renderToStaticMarkup(<FooterNav />));
      expect(words(compact.querySelector(".footerDisclaimer")), p).toBe(
        `An unofficial fan site — not affiliated with or endorsed by Burna Boy.${note ? ` ${note}` : ""}`,
      );
      expect(compact.querySelector("details"), p).toBeNull();
    }
    path = "/";
  });
});

describe("negative controls", () => {
  it("the shipped plain line fails the fold check, on both screens", () => {
    // As served on burnaboystats.com, 14 Oct 2026 (main ebdc06af), read from
    // the live phone home and phone /about.
    const SHIPPED = [
      '<p class="mobileHome-module__1cyKeW__disclaimer">An unofficial fan site — not affiliated with or endorsed by Burna Boy · Artwork: Spotify</p>',
      '<p class="mobileAbout-module__L5c8Sa__disclaimer">An unofficial fan site — not affiliated with or endorsed by Burna Boy · Artwork: Spotify</p>',
    ];
    for (const html of SHIPPED) {
      const el = parse(html).body.firstElementChild;
      const problems = foldProblems(el);
      expect(problems).toContain("a <p>, not a <details>");
      expect(problems).toContain("no <summary> first");
      expect(problems).toContain("the full sentence is not the fold's one paragraph under the summary");
    }
  });

  it("a fold served open, or with its ▾ as bare summary text, is caught", () => {
    const shut = renderToStaticMarkup(<PhoneDisclaimer />);
    const open = parse(shut.replace("<details ", "<details open ")).body.firstElementChild;
    expect(foldProblems(open)).toEqual(["open by default"]);
    const bare = parse(shut.replace(/<span[^>]*>▾<\/span>/, "▾")).body.firstElementChild;
    expect(foldProblems(bare)).toContain("no ▾ in its own aria-hidden span at the summary's end");
  });

  it("the home footer's line is not the phone's, and the footer is hidden on a phone", () => {
    // FooterNav.tsx on main e85e6efe (the home footer, verbatim as served).
    const FOOTER = "An unofficial fan site — not affiliated with or endorsed by Burna Boy. Artwork provided by Spotify and remains the property of its owners.";
    expect(FOOTER).not.toBe(PHONE_DISCLAIMER);
    expect(holders(homeScreen, FOOTER)).toHaveLength(0);
    // …and it lives in .footer, which the phone never shows.
    expect(winning(read(join(ROOT, "app/globals.css")), ".footer", "display", phone)).toBe("none");
  });
});
