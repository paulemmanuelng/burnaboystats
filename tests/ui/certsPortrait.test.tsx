import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../../app/afrobeats/[artist]/page";
import CertificationsPage from "../../app/certifications/page";
import { afrobeatsArtists } from "../../app/data/afrobeats";
import { PORTRAIT_ART } from "../../app/lib/portraitArt";
import m from "../../app/components/mobileCerts.module.css";

/**
 * Claude Design round 2, the portrait (items 34–36, option b; owner's rulings
 * of 4 Oct 2026). On phones ONLY Burna Boy's /certifications hero takes the
 * raised square slot; every board artist keeps the live cover box their
 * portraitArt.ts focal X was tuned against, and Davido keeps the emblem. On
 * the desktop /certifications hero the photo's widths follow the rail, and the
 * tier percentages sit beside their counts (Q6).
 */

const PHONE_CSS = readFileSync("app/components/mobileCerts.module.css", "utf8");
const DESK_CSS = readFileSync("app/certifications/certifications.module.css", "utf8");

/** The declarations of the rule whose selector list names `selector` exactly,
 *  comments stripped and whitespace folded. */
const ruleFor = (css: string, selector: string): string | null => {
  for (const r of css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g))
    if (r[1].split(",").map((s) => s.replace(/\s+/g, " ").trim()).includes(selector))
      return r[2].replace(/\s+/g, " ").trim();
  return null;
};
const decl = (rule: string, prop: string) => rule.match(new RegExp(`(?:^|; )${prop}: ([^;]+);`))?.[1] ?? null;

function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}
const heroImg = (root: HTMLElement) => root.querySelector<HTMLImageElement>(`.${m.hero} img.${m.heroArt}`);
const has = (el: Element | null, cls: string) => (el?.className ?? "").split(/\s+/).includes(cls);

// The rule as it shipped before round 2 — the box every focal X was set
// against. It must stay exactly this.
const SHIPPED_BOX =
  "position: absolute; top: 50%; right: -24%; width: 76%; aspect-ratio: 2 / 5; transform: translateY(-50%); object-fit: cover; object-position: var(--focal, center 24%); filter: grayscale(var(--grayscale, 0.25)) contrast(1.03); opacity: var(--portrait-opacity, 0.42); -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 14%, #000 44%); mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 14%, #000 44%); z-index: -2; pointer-events: none;";
const SHIPPED_EMBLEM =
  "top: 4%; right: -4%; width: 58%; height: 92%; object-fit: contain; -webkit-mask-image: none; mask-image: none;";

describe("phone: the raised square is Burna Boy's /certifications only (item 34, option b)", () => {
  it("/certifications: the square slot and its scrim; sizes and the preload agree at 80vw", () => {
    const root = parse(renderToStaticMarkup(<CertificationsPage />));
    const img = heroImg(root)!;
    expect(img).toBeTruthy();
    expect(has(img, m.heroArtSlot)).toBe(true);
    expect(has(img, m.heroArtEmblem)).toBe(false);
    expect(has(root.querySelector(`.${m.hero} .${m.heroScrim}`), m.heroScrimSlot)).toBe(true);
    // The square paints at its own width, so `sizes` names it — and the
    // preload the hero is painted from has to ask for the same thing.
    expect(img.closest("picture")!.querySelector("source")!.getAttribute("sizes")).toBe("80vw");
    const preload = root.querySelector('link[rel="preload"][as="image"][media="(max-width: 900px)"]');
    expect(preload?.getAttribute("imagesizes")).toBe("80vw");
  });

  let checked = 0;
  it.each(afrobeatsArtists.map((a) => a.slug))("/afrobeats/%s keeps the live cover box", async (slug) => {
    const root = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) })));
    const img = heroImg(root);
    if (!img) return; // no portrait on this page
    checked++;
    expect(has(img, m.heroArtSlot), `${slug} took Burna Boy's slot`).toBe(false);
    expect(has(root.querySelector(`.${m.hero} .${m.heroScrim}`), m.heroScrimSlot)).toBe(false);
    expect(has(img, m.heroArtEmblem)).toBe((PORTRAIT_ART[slug]?.mode ?? "default") === "emblem");
    // The focal point still aims the crop: it reaches the <img> as --focal.
    expect(img.getAttribute("style")).toContain(`--focal:${PORTRAIT_ART[slug]?.focal ?? "center 24%"}`);
    expect(img.closest("picture")!.querySelector("source")!.getAttribute("sizes")).toBe("190vw");
  });
  it("the loop above checked real portraits, Davido's emblem among them", () => {
    expect(checked).toBeGreaterThan(10);
    expect(afrobeatsArtists.some((a) => a.slug === "davido")).toBe(true);
  });

  it("the board's cover box and the emblem are the rules that shipped, unchanged", () => {
    expect(ruleFor(PHONE_CSS, ".heroArt")).toBe(SHIPPED_BOX);
    expect(ruleFor(PHONE_CSS, ".heroArtEmblem")).toBe(SHIPPED_EMBLEM);
    // Negative control: the slot is a different box, so a .heroArt rewritten
    // to it would fail the line above.
    expect(ruleFor(PHONE_CSS, ".heroArtSlot")).not.toBe(SHIPPED_BOX);
  });

  it("the slot's geometry: 80% wide, right −22%, raised 16%, masks in % of the square", () => {
    const slot = ruleFor(PHONE_CSS, ".heroArtSlot")!;
    expect(decl(slot, "top")).toBe("0");
    expect(decl(slot, "right")).toBe("-22%");
    expect(decl(slot, "width")).toBe("80%");
    expect(decl(slot, "aspect-ratio")).toBe("1 / 1");
    expect(decl(slot, "transform")).toBe("translateY(-16%)");
    // The vertical mask is % of the fixed square, so fixed px at a given
    // width: opaque to 181px and gone by 268px at 390 (the canvas's numbers).
    const v = decl(slot, "mask-image")!.match(/linear-gradient\(180deg, #000 0, #000 (\d+)%, transparent (\d+)%\)/)!;
    const side = 0.8 * 390;
    expect(Math.round((side * Number(v[1])) / 100)).toBe(181);
    expect(Math.round((side * Number(v[2])) / 100)).toBe(268);
    expect(decl(slot, "mask-composite")).toBe("intersect");
  });

  it("his face is in frame at 320, 360 and 390", () => {
    // Where the face is in the 640 photo (docs/design/box-office-by-country/
    // assets/burna-boy-portrait-640.jpg), measured on the file: eyes to chin,
    // x 27–62%, y 20–59%. The square is not cropped (object-position: center
    // on a square in a square), so the face lands where the box puts it.
    const FACE = { x0: 0.27, x1: 0.62, y0: 0.2, y1: 0.59 };
    const slot = ruleFor(PHONE_CSS, ".heroArtSlot")!;
    expect(decl(slot, "object-position")).toBe("center");
    const pct = (p: string) => Number(decl(slot, p)!.replace(/[^\d.-]/g, "")) / 100;
    const width = pct("width"), right = pct("right"), raise = Number(decl(slot, "transform")!.match(/-?[\d.]+/)![0]) / 100;
    const opaqueTo = Number(decl(slot, "mask-image")!.match(/#000 0, #000 (\d+)%/)![1]) / 100;
    for (const W of [320, 360, 390]) {
      const side = width * W;
      const left = W - side - right * W; // right is negative: the square runs off the edge
      const top = raise * side;
      const face = {
        x0: left + FACE.x0 * side,
        x1: left + FACE.x1 * side,
        y0: top + FACE.y0 * side,
        y1: top + FACE.y1 * side,
      };
      expect(face.x0, `${W}: face starts off the left`).toBeGreaterThan(0);
      expect(face.x1, `${W}: face runs off the right edge`).toBeLessThanOrEqual(W);
      expect(face.y0, `${W}: eyes above the hero`).toBeGreaterThanOrEqual(0);
      // The chin is still inside the opaque part of the vertical mask (±1%).
      expect(FACE.y1, `${W}: chin fades out`).toBeLessThanOrEqual(opaqueTo + 0.01);
    }
  });

  it("one opacity per artist in both themes: no theme overrides the portrait", () => {
    for (const css of [PHONE_CSS, DESK_CSS]) {
      expect(css).not.toMatch(/--portrait-opacity\s*:/);
      expect(css).not.toMatch(/opacity:\s*light-dark\(/);
    }
  });
});

describe("desktop /certifications: the widths follow the rail (item 36), percentages beside counts (Q6)", () => {
  it("rail 44.2% clamped 400–636; sharp copy min(480px, 33%) at right −40px; blur = rail + 40px", () => {
    expect(decl(ruleFor(DESK_CSS, ".hero")!, "--rail")).toBe("clamp(400px, 44.2%, 636px)");
    const sharp = ruleFor(DESK_CSS, ".heroArt")!;
    expect(decl(sharp, "width")).toBe("min(480px, 33%)");
    expect(decl(sharp, "right")).toBe("-40px");
    expect(decl(sharp, "opacity")).toBe("var(--portrait-opacity, 0.42)");
    expect(decl(ruleFor(DESK_CSS, ".heroArtBlur")!, "width")).toBe("calc(var(--rail) + 40px)");
    expect(decl(ruleFor(DESK_CSS, ".heroScrim")!, "width")).toBe("calc(var(--rail) + 40px)");
    // Burna Boy's dark opacity is 0.42 (item 36), from portraitArt.ts.
    expect(PORTRAIT_ART["burna-boy"].opacity).toBe(0.42);
  });

  it("the sharp copy never reaches the copy column at 1024, 1240 or 1440", () => {
    for (const W of [1024, 1240, 1440]) {
      const rail = Math.min(636, Math.max(400, 0.442 * W));
      const sharpLeft = W + 40 - Math.min(480, 0.33 * W);
      expect(sharpLeft, `${W}`).toBeGreaterThanOrEqual(W - rail);
    }
  });

  it("each percentage sits beside its count, not at the page edge", () => {
    const SHIPPED_PCT =
      "margin-left: auto; padding-right: 40px; font-family: var(--font-geist-sans), system-ui, sans-serif; font-size: var(--type-small); color: var(--text-muted); font-variant-numeric: tabular-nums;";
    const pushedRight = (rule: string | null) => /margin-left: auto/.test(rule ?? "");
    expect(pushedRight(ruleFor(DESK_CSS, ".tierPct"))).toBe(false);
    expect(pushedRight(SHIPPED_PCT)).toBe(true); // negative control: the shipped rule
    expect(decl(ruleFor(DESK_CSS, ".tierPct")!, "font-family")).toMatch(/--font-geist-sans/);
  });
});
