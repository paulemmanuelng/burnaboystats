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
/** The declarations of `selector` inside the @media block whose condition is
 *  exactly `media` (one level of nesting, as the modules are written). */
const mediaRuleFor = (css: string, media: string, selector: string): string | null => {
  const flat = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const at = flat.indexOf(`@media ${media} {`);
  if (at < 0) return null;
  let depth = 0;
  let end = at;
  for (let i = flat.indexOf("{", at); i < flat.length; i++) {
    if (flat[i] === "{") depth++;
    else if (flat[i] === "}" && --depth === 0) { end = i; break; }
  }
  return ruleFor(flat.slice(flat.indexOf("{", at) + 1, end), selector);
};
const heroImg = (root: HTMLElement) => root.querySelector<HTMLImageElement>(`.${m.hero} img.${m.heroArt}`);
const has = (el: Element | null, cls: string) => (el?.className ?? "").split(/\s+/).includes(cls);

// The rule as it shipped before round 2 — the box every focal X was set
// against. It must stay exactly this.
const SHIPPED_BOX =
  "position: absolute; top: 50%; right: -24%; width: 76%; aspect-ratio: 2 / 5; transform: translateY(-50%); object-fit: cover; object-position: var(--focal, center 24%); filter: grayscale(var(--grayscale, 0.25)) contrast(1.03); opacity: var(--portrait-opacity, 0.42); -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 14%, #000 44%); mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 14%, #000 44%); z-index: -2; pointer-events: none;";
// Davido's emblem as it shipped: it never reset .heroArt's translateY(-50%),
// so the 92%-tall box was lifted by half its height (B-07, 4 Oct 2026).
const SHIPPED_EMBLEM =
  "top: 4%; right: -4%; width: 58%; height: 92%; object-fit: contain; -webkit-mask-image: none; mask-image: none;";
const EMBLEM =
  "top: 4%; right: -4%; width: 58%; height: auto; aspect-ratio: 1 / 1; transform: none; object-fit: contain; -webkit-mask-image: none; mask-image: none;";

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

  it("the board's cover box is the rule that shipped, unchanged; the emblem resets its transform", () => {
    expect(ruleFor(PHONE_CSS, ".heroArt")).toBe(SHIPPED_BOX);
    expect(ruleFor(PHONE_CSS, ".heroArtEmblem")).toBe(EMBLEM);
    // Negative control: the shipped emblem set no transform of its own, so it
    // inherited the box's translateY(-50%) (live: y −143…322 in a 69–575 hero).
    expect(decl(SHIPPED_EMBLEM, "transform")).toBeNull();
    expect(decl(SHIPPED_BOX, "transform")).toBe("translateY(-50%)");
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
    const v = decl(slot, "mask-image")!.match(/linear-gradient\(180deg, #000 (\d+)%, transparent (\d+)%\)/)!;
    const side = 0.8 * 390;
    expect(Math.round((side * Number(v[1])) / 100)).toBe(181);
    expect(Math.round((side * Number(v[2])) / 100)).toBe(268);
    expect(decl(slot, "mask-composite")).toBe("intersect");
  });

  it("below 390 the slot's scrim holds the unit's line and, on paper under a long kicker, the kicker's", () => {
    // Measured: "26 countries" read 3.7:1 dark / 3.1:1 light at 320 and 4.1:1
    // dark at 360 over his neck; at 390 it clears 5.3:1 as drawn.
    const base = ruleFor(PHONE_CSS, ".heroScrimSlot")!;
    const band = mediaRuleFor(PHONE_CSS, "(max-width: 389px)", ".heroScrimSlot")!;
    const long = mediaRuleFor(PHONE_CSS, "(max-width: 389px)", ".heroScrimSlot.heroScrimLongKicker")!;
    const layers = (bg: string) => bg.split(/,\s*(?=linear-gradient)/);
    const b = layers(decl(band, "background")!);
    const l = layers(decl(long, "background")!);
    const KICKER_BAND = "linear-gradient(180deg, light-dark(var(--bg), transparent) 40px, transparent 66px)";
    for (const x of [b, l])
      expect(x[0]).toBe("linear-gradient(180deg, transparent 0, transparent 110px, color-mix(in srgb, var(--bg) 75%, transparent) 128px)");
    // The longest kicker, on paper: 4.2:1 at 320 through the 92% band. Solid
    // page colour to 40px in light only; dark is untouched (light-dark) — and
    // only under a long kicker, which runs over his eyes at 320 anyway. Under
    // "Certified worldwide" the band washed his eyes and glasses to paper at
    // 320 and 360 for nothing (B-02/D-12/E-04, 4 Oct 2026).
    expect(l[1]).toBe(KICKER_BAND);
    expect(b).not.toContain(KICKER_BAND);
    // Every other layer is the slot's own scrim, unchanged.
    expect(b.slice(1)).toEqual(layers(decl(base, "background")!));
    expect(l.slice(2)).toEqual(layers(decl(base, "background")!));
    // It starts under the chin at 320: the chin is at 59% of the photo.
    const side = 0.8 * 320;
    expect(0.59 * side - 0.16 * side).toBeLessThanOrEqual(110 + 1);
    // No plate behind the unit.
    expect(decl(ruleFor(PHONE_CSS, ".totalUnit")!, "background")).toBeNull();
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
    const opaqueTo = Number(decl(slot, "mask-image")!.match(/180deg, #000 (\d+)%/)![1]) / 100;
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
  it("rail 44.2% clamped 400–636; sharp copy min(480px, 33%) at right −40px (held to the grid past 1440); blur = rail + 40px", () => {
    const sharp = ruleFor(DESK_CSS, ".heroArt")!;
    expect(decl(sharp, "width")).toBe("min(480px, 33%)");
    // −40px up to 1440, then anchored to the 1360 grid (debug pass 4 Oct 2026,
    // B-03/D-15/E-06): measured live, the plain −40px left 320 of the 440
    // visible px past the tier rail at 1920.
    expect(decl(sharp, "right")).toBe("max(-40px, calc(50% - 760px))");
    expect(decl(ruleFor(DESK_CSS, ".heroArtBlur")!, "right")).toBe("max(0px, calc(50% - 720px))");
    expect(decl(ruleFor(DESK_CSS, ".heroScrim")!, "right")).toBe("max(0px, calc(50% - 720px))");
    const right = (W: number) => Math.max(-40, W / 2 - 760);
    const railEnd = (W: number) => (W - Math.min(W, 1360)) / 2 + Math.min(W, 1360) - 40;
    // At and below 1440 the art is exactly where it was; above it the art's
    // right edge keeps 1440's 120px past the rail's end.
    for (const W of [1024, 1240, 1440]) expect(right(W)).toBe(-40);
    for (const W of [1440, 1600, 1920, 2560]) expect(W - right(W) - railEnd(W), `${W}`).toBe(120);
    // Negative control: right −40px at 1920 ends the art 360px past the rail.
    expect(1920 + 40 - railEnd(1920)).toBe(360);
    expect(decl(sharp, "opacity")).toBe("var(--portrait-opacity, 0.42)");
    expect(decl(ruleFor(DESK_CSS, ".heroArtBlur")!, "width")).toBe("calc(clamp(400px, 44.2%, 636px) + 40px)");
    expect(decl(ruleFor(DESK_CSS, ".heroScrim")!, "width")).toBe("calc(clamp(400px, 44.2%, 636px) + 40px)");
    // The scrim covers only the rail and its gutter, so the hero carries the
    // page colour itself: otherwise the body's glow shows in the copy column
    // and the scrim's solid edge is a seam (dark: 22 -> 10 at 1240, measured).
    expect(decl(ruleFor(DESK_CSS, ".hero")!, "background")).toBe("var(--bg)");
    expect(decl(ruleFor(DESK_CSS, ".heroArtBlur")!, "clip-path")).toBe("inset(0)");
    // Burna Boy's dark opacity is 0.42 (item 36), from portraitArt.ts.
    expect(PORTRAIT_ART["burna-boy"].opacity).toBe(0.42);
  });

  it("the sharp copy never reaches the copy column at 1024, 1240, 1440 or 1920", () => {
    // The live grid, not the canvas's: two columns (1.3fr | 1fr) inside a
    // 1360px max-width with 40px gutters from 1240; stacked below it, where the
    // copy column is the whole hero and the lede runs to 60ch (783px at its
    // 20px, measured on the production build) from a 32px gutter.
    const LEDE_60CH = 783;
    const band = mediaRuleFor(DESK_CSS, "(min-width: 901px) and (max-width: 1239px)", ".heroArt")!;
    expect(decl(band, "width")).toBe("min(480px, 33%, calc(100% - 60ch - 16px))");
    expect(decl(band, "font-size")).toBe("var(--type-lede)"); // so its 60ch is the lede's
    for (const W of [1024, 1100, 1192, 1239]) {
      const sharp = Math.min(480, 0.33 * W, W - LEDE_60CH - 16);
      const sharpLeft = W + 40 - sharp;
      expect(sharpLeft, `${W}: the photo starts under the lede`).toBeGreaterThanOrEqual(32 + LEDE_60CH + 24);
    }
    // Negative control: the plain two-column rule at 1024 starts at 726px,
    // under the lede's second line — what the band rule exists to stop.
    expect(1024 + 40 - Math.min(480, 0.33 * 1024)).toBeLessThan(32 + LEDE_60CH);
    for (const W of [1240, 1440, 1920]) {
      const inner = Math.min(W, 1360) - 80;
      const railLeft = (W - Math.min(W, 1360)) / 2 + 40 + (inner * 1.3) / 2.3;
      const sharpLeft = W - Math.max(-40, W / 2 - 760) - Math.min(480, 0.33 * W);
      expect(sharpLeft, `${W}`).toBeGreaterThanOrEqual(railLeft);
    }
  });

  it("1240–1439: the scrim keeps its 1440 px profile; from 1440 it is as drawn", () => {
    // Measured on the production build at 1240: the percentages beside his
    // face read 3.5:1 dark and 3.4:1 light under the rail-relative scrim.
    const band = mediaRuleFor(DESK_CSS, "(min-width: 1240px) and (max-width: 1439px)", ".heroScrim")!;
    expect(decl(band, "background")).toBe(
      "linear-gradient(90deg, var(--bg) 0, color-mix(in srgb, var(--bg) 92%, transparent) 170px, color-mix(in srgb, var(--bg) 75%, transparent) 310px, transparent 430px)",
    );
    // Never weaker than the drawn 1440 scrim at the same distance from the
    // gutter's edge: its stops are 100% at 0, 92% at 22%, 70% at 42% and 0 at
    // 62% of 676px (the 1440 rail plus its gutter).
    const stops = [...decl(band, "background")!.matchAll(/(var\(--bg\)|color-mix\(in srgb, var\(--bg\) (\d+)%, transparent\)|transparent) (\d+)(?:px)?(?=[,)])/g)]
      .map((m) => [Number(m[3]), m[1] === "transparent" ? 0 : m[2] ? Number(m[2]) / 100 : 1] as const);
    expect(stops.length).toBe(4);
    const at = (st: readonly (readonly [number, number])[], x: number) => {
      for (let i = 1; i < st.length; i++)
        if (x <= st[i][0]) return st[i - 1][1] + ((st[i][1] - st[i - 1][1]) * (x - st[i - 1][0])) / (st[i][0] - st[i - 1][0]);
      return st[st.length - 1][1];
    };
    const drawn = [[0, 1], [0.22 * 676, 0.92], [0.42 * 676, 0.7], [0.62 * 676, 0]] as const;
    for (let x = 0; x <= 700; x += 10) expect(at(stops, x), `${x}px`).toBeGreaterThanOrEqual(at(drawn, x) - 0.03);
    // The base rule, 1440 up, is the canvas's: rail-relative stops.
    expect(decl(ruleFor(DESK_CSS, ".heroScrim")!, "background")).toBe(
      "linear-gradient(90deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 92%, transparent) 22%, color-mix(in srgb, var(--bg) 70%, transparent) 42%, transparent 62%)",
    );
    // No plates behind the words (the #415 review's ruling on the kicker).
    expect(decl(ruleFor(DESK_CSS, ".tierPct")!, "background")).toBeNull();
    expect(decl(ruleFor(DESK_CSS, ".tierPct")!, "box-shadow")).toBeNull();
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
