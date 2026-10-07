import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/on-this-day",
  notFound: () => {
    throw new Error("notFound() — the fixture day no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DayPage from "../../app/on-this-day/[day]/page";
import deskStyles from "../../app/on-this-day/onThisDay.module.css";
import phoneStyles from "../../app/components/mobileOnThisDay.module.css";

/**
 * V-otd-05 (full-site debug, 5 Oct 2026).
 *
 * A day page's card preview is drawn on request (/on-this-day/<day>/card?w=…)
 * and the CDN keeps it an hour, so the first visit after a deploy or a quiet
 * spell waits for the drawing. Read live on 7 Oct 2026: curl put a cold
 * preview at 0.50–1.56 s to the first byte (x-vercel-cache MISS) and a cached
 * one at 0.09–0.21 s, and the sweep caught the desktop box empty in its first
 * frame on 40 of 159 day pages at 1440, three of them still empty in the
 * second. Until the card came, the box stood empty, the colour of the stage
 * around it. The phone's thumbnail is the same <img> with nothing under it.
 *
 * Now each preview arrives wearing the site's loading skeleton (the shimmer of
 * app/search/loading.module.css) and drops it when the card has loaded, or
 * failed. This reads the served markup of both layouts, drives the load
 * handlers (jsdom loads no images, so `complete` and `naturalWidth` are
 * stubbed), and reads the stylesheets. The markup check is also run on the
 * <img> tags the site served on 7 Oct (quoted below), which fail it.
 */

const SLUGS = ["7-october", "16-august", "28-april"];

const layouts = [
  { name: "desktop", width: 560, loading: deskStyles.cardImgLoading, base: deskStyles.cardImg },
  { name: "phone", width: 320, loading: phoneStyles.cardThumbLoading, base: undefined },
] as const;

const pageFor = async (slug: string) => DayPage({ params: Promise.resolve({ day: slug }) });

/** The preview's <img> tag for one width, from served markup. */
const imgTag = (html: string, width: number) => html.match(new RegExp(`<img[^>]*card\\?w=${width}[^>]*>`))?.[0] ?? "";
const classesOf = (tag: string) => (tag.match(/class="([^"]*)"/)?.[1] ?? "").split(/\s+/).filter(Boolean);
/** Served markup puts the skeleton on the preview, beside its own class. */
const wearsSkeleton = (tag: string, loading: string, base?: string) =>
  classesOf(tag).includes(loading) && (!base || classesOf(tag).includes(base));

describe("V-otd-05: the day page's card preview is never an empty box", () => {
  it.each(SLUGS)("%s: both layouts' previews arrive wearing the skeleton", async (slug) => {
    const html = renderToStaticMarkup(await pageFor(slug));
    for (const l of layouts) {
      const tag = imgTag(html, l.width);
      expect(tag, `${l.name}: no ?w=${l.width} preview`).not.toBe("");
      expect(wearsSkeleton(tag, l.loading, l.base), `${l.name}: ${tag}`).toBe(true);
    }
  });

  it("negative control: the previews the site served on 7 Oct 2026 wear none", () => {
    // Verbatim from burnaboystats.com/on-this-day/7-october, 7 Oct 2026.
    const phone =
      '<img src="/on-this-day/7-october/card?w=320" alt="The 7 October card: 2021, “Want It All” hit No. 8 in Nigeria" width="144" height="180" loading="lazy" decoding="async"/>';
    const desk =
      '<img src="/on-this-day/7-october/card?w=560" alt="The 7 October card: 2021, “Want It All” hit No. 8 in Nigeria" width="280" height="350" loading="eager" fetchPriority="low" decoding="async" class="onThisDay-module__fCR_iW__cardImg"/>';
    expect(wearsSkeleton(phone, phoneStyles.cardThumbLoading)).toBe(false);
    expect(wearsSkeleton(desk, deskStyles.cardImgLoading)).toBe(false);
  });
});

// jsdom loads no images, so whether the browser had finished is stubbed.
let complete = false;
let naturalWidth = 0;
const STUBBED = ["complete", "naturalWidth"] as const;
const jsdomGetters = STUBBED.map((key) => Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, key));

beforeEach(() => {
  complete = false;
  naturalWidth = 0;
  Object.defineProperty(HTMLImageElement.prototype, "complete", { configurable: true, get: () => complete });
  Object.defineProperty(HTMLImageElement.prototype, "naturalWidth", { configurable: true, get: () => naturalWidth });
});

afterEach(() => {
  STUBBED.forEach((key, i) => {
    const original = jsdomGetters[i];
    if (original) Object.defineProperty(HTMLImageElement.prototype, key, original);
    else delete (HTMLImageElement.prototype as unknown as Record<string, unknown>)[key];
  });
});

describe.each(layouts)("V-otd-05, $name: the skeleton lasts as long as the wait", ({ width, loading, base }) => {
  const preview = (container: HTMLElement) => container.querySelector<HTMLImageElement>(`img[src*="card?w=${width}"]`)!;

  it("it stays on while the card is drawn and goes when the card loads", async () => {
    const { container } = render(await pageFor("7-october"));
    const img = preview(container);
    expect(img.classList.contains(loading)).toBe(true);
    fireEvent.load(img);
    expect(img.classList.contains(loading)).toBe(false);
    if (base) expect(img.classList.contains(base)).toBe(true);
  });

  it("a card that failed drops it, leaving the alt text on the plain box", async () => {
    const { container } = render(await pageFor("7-october"));
    const img = preview(container);
    fireEvent.error(img);
    expect(img.classList.contains(loading)).toBe(false);
    expect(img.getAttribute("alt")).toMatch(/^The 7 October card: /);
  });

  it("a card that loaded before hydration drops it on mount", async () => {
    complete = true;
    naturalWidth = width;
    const { container } = render(await pageFor("7-october"));
    expect(preview(container).classList.contains(loading)).toBe(false);
  });

  it("a card that failed before hydration drops it on mount too", async () => {
    complete = true;
    naturalWidth = 0;
    const { container } = render(await pageFor("7-october"));
    expect(preview(container).classList.contains(loading)).toBe(false);
  });
});

type Rule = { selector: string; decls: Record<string, string>; query?: string };

/** Top-level rules and @media blocks, in source order; @keyframes by name. */
function parse(css: string) {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const keyframes: Record<string, string> = {};
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
  const top = /@keyframes\s+([\w-]+)\s*\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[1]) keyframes[m[1]] = m[2].replace(/\s+/g, " ").trim();
    else if (m[5]) block(m[5]);
    else block(m[4], m[3].trim());
  }
  return { rules, keyframes };
}

const decl = (rules: Rule[], selector: string, query?: string) =>
  Object.assign({}, ...rules.filter((r) => r.selector === selector && r.query === query).map((r) => r.decls)) as Record<
    string,
    string
  >;

/** The site's loading skeleton, as /search's loading state declares it. */
const SITE = (() => {
  const { rules, keyframes } = parse(readFileSync("app/search/loading.module.css", "utf8"));
  const block = decl(rules, ".block");
  return { block, still: decl(rules, ".block", "(prefers-reduced-motion: reduce)"), keyframes };
})();

const sheets = [
  { name: "desktop", file: "app/on-this-day/onThisDay.module.css", loading: ".cardImgLoading", base: ".cardImg" },
  { name: "phone", file: "app/components/mobileOnThisDay.module.css", loading: ".cardThumbLoading", base: ".cardThumb img" },
] as const;

describe.each(sheets)("V-otd-05, $name stylesheet: the skeleton is the site's", ({ file, loading, base }) => {
  const { rules, keyframes } = parse(readFileSync(file, "utf8"));
  const own = decl(rules, loading);

  it("it paints /search's shimmer: the same gradient, size and sweep", () => {
    expect(SITE.block.background).toMatch(/var\(--bg-soft\).*var\(--bg-soft-2\)/);
    expect(own.background).toBe(SITE.block.background);
    expect(own["background-size"]).toBe(SITE.block["background-size"]);
    const [name, ...timing] = own.animation.split(/\s+/);
    const [siteName, ...siteTiming] = SITE.block.animation.split(/\s+/);
    expect(timing).toEqual(siteTiming);
    expect(keyframes[name]).toBe(SITE.keyframes[siteName]);
  });

  it("it holds still for reduced motion, as /search's does", () => {
    expect(decl(rules, loading, "(prefers-reduced-motion: reduce)")).toEqual(SITE.still);
  });

  it("the loaded card has nothing under it: the base rule paints no background", () => {
    const b = decl(rules, base);
    expect(Object.keys(b).length).toBeGreaterThan(0);
    expect(Object.keys(b).some((k) => k.startsWith("background") || k === "animation")).toBe(false);
  });
});
