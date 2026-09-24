import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/share",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SharePage from "../app/share/page";
import MobileStatCards from "../app/components/MobileStatCards";
import StatCardMaker from "../app/components/StatCardMaker";
import { BLANK_PIXEL } from "../app/lib/blankPixel";
import mobileStyles from "../app/components/mobileStatCards.module.css";
import makerStyles from "../app/components/StatCardMaker.module.css";

/**
 * /share fetches one stat-card PNG per layout, and only the visible layout's.
 *
 * Both layouts' previews sit in every /share document, and both were plain
 * eager <img>s — fetched even under display:none. On 23 Sep 2026 every phone
 * downloaded the desktop maker's 767 KB square beside its own 856 KB story,
 * inside the LCP window, and every desktop the story before its square. Each
 * preview is now a <picture> whose <source media> names its layout, over the
 * 1x1: the preload scanner reads media before it fetches, so the hidden
 * layout downloads nothing.
 *
 * The gate brings two duties with it, checked here by driving the real
 * components. The hidden layout's <img> loads its 1x1, and that load must not
 * undim the card or warm the other ratio. And a card that loaded before
 * hydration must still undim: React does not replay a load that came before
 * its listener, and production's phone card stayed at 35% on a fast load and
 * on every repeat visit — which the gate, by letting the card finish sooner,
 * would have made more common.
 */

const ROOT = join(__dirname, "..");

/** The two previews exactly as production served them on 23 Sep 2026, before
 *  the gate (curl of burnaboystats.com/share). */
const SHIPPED_PHONE_PREVIEW =
  '<img class="mobileStatCards-module__7cOTGq__card mobileStatCards-module__7cOTGq__cardStory mobileStatCards-module__7cOTGq__cardLoading" src="/stat-card?stat=african-giant&amp;ratio=story" alt="Stat card: 248 certifications across 26 countries" width="1080" height="1920"/>';
const SHIPPED_DESKTOP_PREVIEW =
  '<img class="StatCardMaker-module__oDv3kq__card StatCardMaker-module__oDv3kq__cardSquare StatCardMaker-module__oDv3kq__cardLoading" src="/stat-card?stat=african-giant&amp;ratio=square" alt="Stat card: 248 certifications across 26 countries" width="1080" height="1080"/>';

function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

/** Why an <img> in a two-layout document costs the hidden layout a download,
 *  or null. Lazy images are never fetched while hidden; eager ones are,
 *  unless their only real source sits behind a <source media>. */
function hiddenFetchProblem(img: Element): string | null {
  if (img.getAttribute("loading") === "lazy") return null;
  const src = img.getAttribute("src") ?? "";
  const gated = img.parentElement?.tagName === "PICTURE" && img.parentElement.querySelector("source[media]");
  if (src.startsWith("data:") && gated) return null;
  if (src.startsWith("data:") && !gated) return "a 1x1 <img> with no gated <source> never shows the card";
  return `eager <img src="${src.slice(0, 60)}"> outside a media gate — the hidden layout fetches it too`;
}

describe("the guard itself — production's previews fail it", () => {
  it.each([
    ["phone", SHIPPED_PHONE_PREVIEW],
    ["desktop", SHIPPED_DESKTOP_PREVIEW],
  ])("%s", (_name, html) => {
    const img = parse(html).querySelector("img")!;
    expect(hiddenFetchProblem(img)).toMatch(/outside a media gate/);
  });
});

describe("/share — each layout's preview is gated to that layout", () => {
  const root = parse(renderToStaticMarkup(<SharePage />));
  const phone = root.querySelector(`img.${mobileStyles.card}`)!;
  const desk = root.querySelector(`img.${makerStyles.card}`)!;

  it("no <img> on the page makes the hidden layout download anything", () => {
    const imgs = [...root.querySelectorAll("img")];
    expect(imgs.length).toBeGreaterThanOrEqual(2);
    expect(imgs.map(hiddenFetchProblem).filter(Boolean)).toEqual([]);
  });

  it("the phone's story sits behind (max-width: 900px), the desktop's square behind (min-width: 901px)", () => {
    for (const [img, media, ratio] of [
      [phone, "(max-width: 900px)", "story"],
      [desk, "(min-width: 901px)", "square"],
    ] as const) {
      expect(img, "preview not found").toBeTruthy();
      const source = img.parentElement!.querySelector("source")!;
      expect(img.parentElement!.tagName).toBe("PICTURE");
      expect(source.getAttribute("media")).toBe(media);
      expect(source.getAttribute("srcset")).toMatch(new RegExp(`^/stat-card\\?stat=[a-z0-9-]+&ratio=${ratio}$`));
      expect(img.getAttribute("src")).toBe(BLANK_PIXEL);
    }
  });

  it("those queries are the ones that show each layout", () => {
    // The phone screen shows at max-width: 900px; the desktop wrapper hides
    // there. A gate on any other width would fetch for a hidden layout, or
    // leave a visible one blank.
    const phoneCss = readFileSync(join(ROOT, "app/components/mobileStatCards.module.css"), "utf8");
    const shareCss = readFileSync(join(ROOT, "app/share/share.module.css"), "utf8");
    expect(phoneCss).toMatch(/^\.screen \{ display: none; \}$/m);
    expect(phoneCss).toMatch(/@media \(max-width: 900px\) \{\s*\.screen \{\s*display: flex;/);
    expect(shareCss).toMatch(/@media \(max-width: 900px\) \{ \.desktopOnly \{ display: none; \} \}/);
  });

  it("both previews are the LCP candidate of their layout: eager, hinted high", () => {
    for (const img of [phone, desk]) {
      expect(img.getAttribute("loading")).toBeNull();
      expect(img.getAttribute("fetchpriority")).toBe("high");
    }
  });

  it("the <picture> takes no box of its own, so each stage lays out as before", () => {
    for (const img of [phone, desk]) expect(img.parentElement!.getAttribute("style")).toBe("display:contents");
  });
});

// ── The load handlers ───────────────────────────────────────────────────────

const CARDS = [
  {
    id: "african-giant",
    chip: "Certifications",
    value: "248",
    label: "certifications across 26 countries",
    detail: "Across 26 countries",
    source: "burnaboystats.com",
    href: "/certifications",
  },
];

const layouts = [
  {
    name: "MobileStatCards",
    el: <MobileStatCards cards={CARDS} verified="23 September 2026" pageUrl="https://example.com/share" />,
    styles: mobileStyles,
    shows: "story",
    warms: "square",
  },
  {
    name: "StatCardMaker",
    el: <StatCardMaker cards={CARDS} verified="23 September 2026" pageUrl="https://example.com/share" />,
    styles: makerStyles,
    shows: "square",
    warms: "story",
  },
] as const;

// jsdom loads no images, so what a browser would report is stubbed on the
// prototype: which file the <img> is showing, and whether it had finished.
let currentSrc = "";
let complete = false;
let naturalWidth = 0;
const warmed: string[] = [];
const RealImage = window.Image;
const STUBBED = ["currentSrc", "complete", "naturalWidth"] as const;
const jsdomGetters = STUBBED.map((key) => Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, key));

beforeEach(() => {
  currentSrc = "";
  complete = false;
  naturalWidth = 0;
  warmed.length = 0;
  Object.defineProperty(HTMLImageElement.prototype, "currentSrc", { configurable: true, get: () => currentSrc });
  Object.defineProperty(HTMLImageElement.prototype, "complete", { configurable: true, get: () => complete });
  Object.defineProperty(HTMLImageElement.prototype, "naturalWidth", { configurable: true, get: () => naturalWidth });
  window.Image = class {
    set src(v: string) {
      warmed.push(v);
    }
  } as unknown as typeof Image;
});

afterEach(() => {
  window.Image = RealImage;
  STUBBED.forEach((key, i) => {
    const original = jsdomGetters[i];
    if (original) Object.defineProperty(HTMLImageElement.prototype, key, original);
    else delete (HTMLImageElement.prototype as unknown as Record<string, unknown>)[key];
  });
});

describe.each(layouts)("$name — the load handlers", ({ el, styles, shows, warms }) => {
  const preview = (container: HTMLElement) => container.querySelector(`img.${styles.card}`)!;

  it("its own card's load undims it and warms the other ratio", () => {
    const { container } = render(el);
    const img = preview(container);
    expect(img.classList.contains(styles.cardLoading)).toBe(true);
    currentSrc = `http://localhost/stat-card?stat=african-giant&ratio=${shows}`;
    fireEvent.load(img);
    expect(img.classList.contains(styles.cardLoading)).toBe(false);
    expect(warmed).toEqual([`/stat-card?stat=african-giant&ratio=${warms}`]);
  });

  it("the hidden layout's 1x1 neither undims the card nor warms anything", () => {
    const { container } = render(el);
    const img = preview(container);
    currentSrc = BLANK_PIXEL;
    fireEvent.load(img);
    expect(img.classList.contains(styles.cardLoading)).toBe(true);
    expect(warmed).toEqual([]);
  });

  it("a card that loaded before hydration is undimmed on mount", () => {
    currentSrc = `http://localhost/stat-card?stat=african-giant&ratio=${shows}`;
    complete = true;
    naturalWidth = 1080;
    const { container } = render(el);
    expect(preview(container).classList.contains(styles.cardLoading)).toBe(false);
    expect(warmed).toEqual([`/stat-card?stat=african-giant&ratio=${warms}`]);
  });

  it("a card that failed before hydration offers the retry", () => {
    currentSrc = `http://localhost/stat-card?stat=african-giant&ratio=${shows}`;
    complete = true;
    naturalWidth = 0;
    const { container } = render(el);
    expect(preview(container).classList.contains(styles.cardLoading)).toBe(false);
    expect(container.querySelector('[role="alert"]')).not.toBeNull();
  });

  it("the hidden layout's 1x1, finished before hydration, leaves the card alone", () => {
    currentSrc = BLANK_PIXEL;
    complete = true;
    naturalWidth = 1;
    const { container } = render(el);
    expect(preview(container).classList.contains(styles.cardLoading)).toBe(true);
    expect(warmed).toEqual([]);
  });
});
