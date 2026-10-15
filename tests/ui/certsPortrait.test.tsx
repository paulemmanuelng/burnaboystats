import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
const read = (p: string) => readFileSync(p, "utf8");

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
// …and as B-07 left it: a 58%-wide square from 4% of the hero, whose box ran
// 90.8px into the lede at 390 (V-afrobeats-10, debug pass 5 Oct 2026).
const B07_EMBLEM =
  "top: 4%; right: -4%; width: 58%; height: auto; aspect-ratio: 1 / 1; transform: none; object-fit: contain; -webkit-mask-image: none; mask-image: none;";
const EMBLEM =
  "top: 20px; right: -4%; width: min(58%, 260px); height: 130px; transform: none; object-fit: cover; -webkit-mask-image: none; mask-image: none;";

describe("phone: the raised square is Burna Boy's /certifications only (item 34, option b)", () => {
  it("/certifications: the square slot and its scrim; sizes and the preload agree at 256px", () => {
    const root = parse(renderToStaticMarkup(<CertificationsPage />));
    const img = heroImg(root)!;
    expect(img).toBeTruthy();
    expect(has(img, m.heroArtSlot)).toBe(true);
    expect(has(img, m.heroArtEmblem)).toBe(false);
    expect(has(root.querySelector(`.${m.hero} .${m.heroScrim}`), m.heroScrimSlot)).toBe(true);
    // The square paints at its own width, at most 256px, so `sizes` names it —
    // and the preload the hero is painted from has to ask for the same thing.
    expect(img.closest("picture")!.querySelector("source")!.getAttribute("sizes")).toBe("256px");
    const preload = root.querySelector('link[rel="preload"][as="image"][media="(max-width: 900px)"]');
    expect(preload?.getAttribute("imagesizes")).toBe("256px");
  });

  // J3-9 (design review 8 Oct 2026; fixes 57, 63, 72): a board artist's phone
  // hero draws no portrait wash — no cover box, no emblem, no scrim. The
  // portrait is a 52px chip beside the name, gated to phones, its focal from
  // PORTRAIT_ART. Burna Boy's square above is unchanged.
  let chips = 0;
  it.each(afrobeatsArtists.map((a) => a.slug))("/afrobeats/%s draws no portrait wash; the chip is 52px, phone-gated, focal from PORTRAIT_ART", async (slug) => {
    const root = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) })));
    expect(heroImg(root), `${slug} still draws the wash`).toBeNull();
    expect(root.querySelector(`.${m.hero} .${m.heroScrim}`)).toBeNull();
    const chip = root.querySelector<HTMLImageElement>(`img.${m.portraitChip}`)!;
    expect(chip).toBeTruthy();
    chips++;
    expect([chip.getAttribute("width"), chip.getAttribute("height")]).toEqual(["52", "52"]);
    const source = chip.closest("picture")!.querySelector("source")!;
    expect(source.getAttribute("media")).toBe("(max-width: 900px)");
    expect(source.getAttribute("sizes")).toBe("52px");
    expect(chip.getAttribute("style")).toContain(`object-position:${PORTRAIT_ART[slug]?.focal ?? "center 24%"}`);
  });
  it("the loop above checked every board page, Davido's among them", () => {
    expect(chips).toBe(afrobeatsArtists.length);
    expect(afrobeatsArtists.some((a) => a.slug === "davido")).toBe(true);
  });
  it("negative control: main's board hero drew the wash in the cover box", () => {
    // MobileCerts as shipped rendered, for every caller with a portrait, the
    // <img className={heroArtClass}> with --focal and sizes="190vw" (the cover
    // box); the board passed portrait={a.image}. Its rule is still in the sheet
    // (it is the base of Burna Boy's square), so a board hero that drew it again
    // would be caught by the loop above.
    expect(ruleFor(PHONE_CSS, ".heroArt")).toBe(SHIPPED_BOX);
    expect(read("app/afrobeats/[artist]/page.tsx")).not.toMatch(/\bportrait=\{a\.image\}/);
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

  it("Davido's crown is whole, beside the total and clear of the lede at every phone width (V-afrobeats-10)", () => {
    // Measured live on /afrobeats/davido (6 Oct 2026, dark and light): the
    // lede starts 155.6px below the hero's top at 320, 360, 375, 390, 430, 600
    // and 900, in every view — the kicker is one line and the total row a
    // fixed 92px (51.6–143.6), so nothing above the lede moves. The hero is
    // 505.6px tall at 390 with the default lede.
    const LEDE_TOP = 155.6;
    const TOTAL = { y0: 51.6, y1: 143.6 };
    // The crown in the 640 photo, read off the image in the page: every pixel
    // more than 40 levels off its flat #0b0b0b ground.
    const CROWN = { x0: 0.3, x1: 0.71, y0: 0.34, y1: 0.69 };
    // `cover` crops by object-position, and Davido's is the centre.
    expect(PORTRAIT_ART.davido.focal).toBe("center");
    const place = (rule: string, W: number, heroH: number) => {
      const len = (v: string, of: number) => (v.endsWith("%") ? (parseFloat(v) / 100) * of : parseFloat(v));
      const w = decl(rule, "width")!;
      const cap = w.match(/^min\(([\d.]+%), ([\d.]+px)\)$/);
      const boxW = cap ? Math.min(len(cap[1], W), len(cap[2], W)) : len(w, W);
      const boxH = decl(rule, "height") === "auto" ? boxW : len(decl(rule, "height")!, heroH);
      const top = len(decl(rule, "top")!, heroH);
      const left = W - boxW + len(decl(rule, "right")!, W) * -1;
      // A square photo: contain fits the short side, cover the long one.
      const side = decl(rule, "object-fit") === "cover" ? Math.max(boxW, boxH) : Math.min(boxW, boxH);
      const ox = left + (boxW - side) / 2, oy = top + (boxH - side) / 2;
      return {
        box: { top, bottom: top + boxH, left, right: left + boxW },
        crown: { x0: ox + CROWN.x0 * side, x1: ox + CROWN.x1 * side, y0: oy + CROWN.y0 * side, y1: oy + CROWN.y1 * side },
      };
    };
    const rule = ruleFor(PHONE_CSS, ".heroArtEmblem")!;
    for (const W of [320, 360, 375, 390, 430, 600, 768, 900]) {
      const { box, crown } = place(rule, W, 505.6);
      // The box ends above the lede, so neither the crown nor (on paper) its
      // grey ground can reach the words.
      expect(box.bottom, `${W}: box into the lede`).toBeLessThanOrEqual(LEDE_TOP);
      // The whole crown: the crop takes only black.
      expect(crown.y0, `${W}: crown cut at the top`).toBeGreaterThanOrEqual(box.top);
      expect(crown.y1, `${W}: crown cut at the bottom`).toBeLessThanOrEqual(box.bottom);
      expect(crown.x0, `${W}: crown cut at the left`).toBeGreaterThanOrEqual(box.left);
      expect(crown.x1, `${W}: crown off the screen`).toBeLessThanOrEqual(W);
      // Beside the total, not over the kicker.
      const mid = (crown.y0 + crown.y1) / 2;
      expect(mid, `${W}: crown not beside the total`).toBeGreaterThanOrEqual(TOTAL.y0);
      expect(mid, `${W}: crown not beside the total`).toBeLessThanOrEqual(TOTAL.y1);
      if (W <= 430) {
        // On phones the crown is the size B-07 drew it, in the same columns.
        const was = place(B07_EMBLEM, W, 505.6).crown;
        expect(crown.x0).toBeCloseTo(was.x0, 6);
        expect(crown.x1).toBeCloseTo(was.x1, 6);
      }
    }
    // Negative control, B-07's square at 390 (measured live: y 89.2–315.4 on
    // a hero from 69, the lede from 224.6): box and crown both in the lede.
    const b07 = place(B07_EMBLEM, 390, 505.6);
    expect(b07.box.bottom).toBeCloseTo(315.4 - 69, 0);
    expect(b07.box.bottom).toBeGreaterThan(LEDE_TOP);
    expect(b07.crown.y1).toBeGreaterThan(LEDE_TOP);
  });

  // ── His face, framed (owner, 15 Oct 2026: "only shows the glasses properly,
  // it should have its face properly there") ─────────────────────────────────
  // Where his face is in the 640 photo (BURNA.image; the same file as
  // docs/design/box-office-by-country/assets/burna-boy-portrait-640.jpg),
  // measured on its pixels: from the glasses' left rim (x 142) to the temple
  // where the arm ends (x 365), from the hairline (y 74) to the foot of the
  // beard (y 384). The crown of his hair is at y 40, his ear ends at x 403.
  const FACE = { x0: 0.22, x1: 0.57, y0: 0.115, y1: 0.6 };
  const CROWN = 0.0625;
  const EAR = 0.63;
  // The hero's type, measured live on /certifications (dev build, 15 Oct 2026,
  // both themes, all four views) — the same px at 320, 360, 375, 390, 402, 430,
  // 600, 768 and 900, because the kicker and the total row do not wrap:
  // the longest kicker ("Outside Nigeria · Lead credits") ends at 256.3, the
  // unit ("Certifications") at 254.2, the total at 131.4, and the lede's first
  // line box starts 157.6px down. The shortest hero is 474.6px tall (600 up).
  const TYPE_RIGHT = 256.3;
  const LEDE_TOP = 157.6;
  const HERO_MIN_H = 474.6;
  const WIDTHS = [320, 360, 375, 390, 402, 430, 600, 768, 900];
  // The slot and its scrim as they shipped (round 2, item 34): the face's top
  // above the hero, its left half in the masks' ramp and under the scrim's
  // 85→25% band, the kicker band over his forehead and eyes.
  const SHIPPED_SLOT =
    "top: 0; right: -22%; width: 80%; height: auto; aspect-ratio: 1 / 1; transform: translateY(-16%); object-position: center; -webkit-mask-image: linear-gradient(90deg, transparent 0, rgba(0, 0, 0, 0.3) 14%, #000 44%), linear-gradient(180deg, #000 58%, transparent 86%); -webkit-mask-composite: source-in; mask-image: linear-gradient(90deg, transparent 0, rgba(0, 0, 0, 0.3) 14%, #000 44%), linear-gradient(180deg, #000 58%, transparent 86%); mask-composite: intersect;";
  const SHIPPED_SCRIM =
    "background: linear-gradient(180deg, color-mix(in srgb, var(--bg) 92%, transparent) 0, color-mix(in srgb, var(--bg) 92%, transparent) 34px, transparent 66px), linear-gradient(90deg, var(--bg) 0%, var(--bg) 44%, color-mix(in srgb, var(--bg) 85%, transparent) 56%, color-mix(in srgb, var(--bg) 25%, transparent) 68%, transparent 78%), linear-gradient(180deg, transparent 0, transparent 55%, var(--bg) 100%);";

  /** A CSS length to px: px, %, plain numbers, calc(), min() and max().
   *  `pct` is what 100% means for the property being read. */
  const evalLen = (expr: string, pct: number): number => {
    const toks = expr.match(/(?:\d*\.)?\d+(?:px|%)?|calc\(|min\(|max\(|[()+\-*/,]/g)!;
    let i = 0;
    const expr0 = (): number => {
      let v = term();
      while (toks[i] === "+" || toks[i] === "-") v = toks[i++] === "+" ? v + term() : v - term();
      return v;
    };
    const term = (): number => {
      let v = factor();
      while (toks[i] === "*" || toks[i] === "/") v = toks[i++] === "*" ? v * factor() : v / factor();
      return v;
    };
    const factor = (): number => {
      const t = toks[i++];
      if (t === "-") return -factor();
      if (t === "(" || t === "calc(") { const v = expr0(); i++; return v; }
      if (t === "min(" || t === "max(") {
        const args = [expr0()];
        while (toks[i] === ",") { i++; args.push(expr0()); }
        i++;
        return t === "min(" ? Math.min(...args) : Math.max(...args);
      }
      const n = parseFloat(t);
      return t.endsWith("%") ? (n / 100) * pct : n;
    };
    return expr0();
  };
  const layers = (bg: string) => bg.split(/,\s*(?=linear-gradient)/);
  // A stop's position in a mask layer, as a fraction ("transparent 0" is 0).
  const stop = (layer: string, colour: string) => Number(layer.match(new RegExp(`${colour} ([\\d.]+)%?`))![1]) / 100;

  /** Where a slot rule puts the square, his face and his head in a hero W wide,
   *  and what its masks and its scrim leave opaque. */
  const frame = (slot: string, scrim: string, W: number) => {
    const side = evalLen(decl(slot, "width")!, W);
    const left = decl(slot, "left") && decl(slot, "right") === "auto"
      ? evalLen(decl(slot, "left")!, W)
      : W - evalLen(decl(slot, "right")!, W) - side;
    const top = evalLen(decl(slot, "top")!, 0) + evalLen(decl(slot, "transform")!.match(/translateY\((.+)\)$/)![1], side);
    const at = (fx: number, fy: number) => ({ x: left + fx * side, y: top + fy * side });
    const [h, v] = layers(decl(slot, "mask-image")!);
    const sl = layers(decl(scrim, "background")!);
    const across = sl.find((l) => l.startsWith("linear-gradient(90deg"))!;
    const clear = across.match(/transparent ([\d.]+(?:px|%))\)$/)![1];
    // The last stop in the page colour itself (not a color-mix of it).
    const solid = [...across.matchAll(/(?<!srgb, )var\(--bg\) ([\d.]+(?:px|%))/g)].map((m) => evalLen(m[1], W)).pop()!;
    // Each 180deg layer covers the rows from the top to its first clear stop,
    // or, if it starts clear, from its last clear stop to the hero's foot.
    const bands = sl.filter((l) => l.startsWith("linear-gradient(180deg")).map((l) => {
      const clears = [...l.matchAll(/transparent ([\d.]+(?:px|%))?/g)].map((m) => evalLen(m[1] ?? "0", HERO_MIN_H));
      return l.startsWith("linear-gradient(180deg, transparent") ? [clears[clears.length - 1], Infinity] : [0, clears[0]];
    });
    return {
      side, left, top,
      face: { x0: at(FACE.x0, 0).x, x1: at(FACE.x1, 0).x, y0: at(0, FACE.y0).y, y1: at(0, FACE.y1).y },
      crown: at(0, CROWN).y, ear: at(EAR, 0).x,
      // The masks, in the photo's own terms: clear left of hClear, opaque
      // right of hOpaque; opaque above vOpaque, gone below vClear.
      hClear: stop(h, "transparent"), hOpaque: stop(h, "#000"), vOpaque: stop(v, "#000"), vClear: stop(v, "transparent"),
      scrimSolidTo: solid, scrimClearFrom: evalLen(clear, W), bands,
    };
  };

  it("the slot: where his face starts, its size and its raise are set from his face, not the hero's width", () => {
    const slot = ruleFor(PHONE_CSS, ".heroArtSlot")!;
    // The side: at most 256px, and the room right of 264px divided by his
    // face's width in the photo, so at 320 his face is exactly that room.
    const side = `min(256px, calc((100% - 264px) / ${(FACE.x1 - FACE.x0).toFixed(2)}))`;
    expect(decl(slot, "width")).toBe(side);
    // Left: his face's left edge (FACE.x0) at 264px, or further right while
    // his ear (EAR) stays 4px inside the screen.
    expect(decl(slot, "left")).toBe(`max( calc(264px - ${FACE.x0} * ${side}), calc(100% - 4px - ${EAR} * ${side}) )`);
    expect(decl(slot, "right")).toBe("auto");
    expect(decl(slot, "aspect-ratio")).toBe("1 / 1");
    expect(decl(slot, "object-position")).toBe("center");
    // Raised by exactly the crown's depth in the photo, so the crown is the
    // `top` below the hero's top edge at every size.
    expect(decl(slot, "transform")).toBe(`translateY(-${CROWN * 100}%)`);
    expect(decl(slot, "top")).toBe("4px");
    expect(decl(slot, "mask-composite")).toBe("intersect");
    expect(decl(slot, "-webkit-mask-image")).toBe(decl(slot, "mask-image"));
  });

  it.each(WIDTHS)("%ipx: his whole face is in the hero, opaque, beside the total and above the lede", (W) => {
    const slot = ruleFor(PHONE_CSS, ".heroArtSlot")!;
    const f = frame(slot, ruleFor(PHONE_CSS, ".heroScrimSlot")!, W);
    // Not cut by the hero: crown and hairline inside its top, the face inside
    // the screen on the right.
    expect(f.crown, "crown above the hero").toBeGreaterThanOrEqual(0);
    expect(f.face.y0, "hairline above the hero").toBeGreaterThanOrEqual(0);
    expect(f.face.x1, "face off the right edge").toBeLessThanOrEqual(W);
    // Not under the type's column, and above the lede with room to fade.
    expect(f.face.x0, "face under the kicker or the unit").toBeGreaterThanOrEqual(TYPE_RIGHT + 4);
    expect(f.face.y1, "chin into the lede").toBeLessThanOrEqual(LEDE_TOP - 12);
    // In the masks' fully opaque zone.
    expect(FACE.x0, "face in the horizontal ramp").toBeGreaterThanOrEqual(f.hOpaque);
    expect(FACE.y1, "chin in the vertical fade").toBeLessThanOrEqual(f.vOpaque);
    // And under no scrim: the across-layer is clear by his face's left edge,
    // and no band crosses the rows his face is on.
    expect(f.scrimClearFrom, "scrim over his face").toBeLessThanOrEqual(f.face.x0);
    for (const [a, b] of f.bands) expect(b <= f.face.y0 || a >= f.face.y1, `band ${a}–${b} across his face`).toBe(true);
    // The type side: wherever the photo is not yet clear, the scrim is solid
    // page — so no word in the hero has the photo behind it.
    const clearTo = f.left + f.hClear * f.side;
    expect(Math.max(clearTo, f.scrimSolidTo), "photo under the type's column").toBeGreaterThanOrEqual(TYPE_RIGHT);
    // The lede: by its first line the photo is at most a quarter of its
    // opacity (sampled: the lede reads 6.3:1 on paper and 10.3:1 dark there).
    const yAtLede = (LEDE_TOP - f.top) / f.side;
    const alpha = Math.min(1, Math.max(0, (f.vClear - yAtLede) / (f.vClear - f.vOpaque)));
    expect(alpha, "photo under the lede").toBeLessThanOrEqual(0.25);
    // As much face as the room allows: the full 256px square from 360 up; at
    // 320 the room right of the type is 56px, so the face is 56 × 78.
    const face = [f.face.x1 - f.face.x0, f.face.y1 - f.face.y0];
    if (W >= 360) expect(face.map((n) => Math.round(n))).toEqual([90, 124]);
    else expect(face.map((n) => Math.round(n))).toEqual([56, 78]);
  });

  it("negative control: the slot as it shipped cut his head at the top and laid his face under the ramp and the scrims", () => {
    const f = frame(SHIPPED_SLOT, SHIPPED_SCRIM, 390);
    // Measured live at 390 before the change: the square at x 163.8, y −49.9,
    // 312px — the same numbers the evaluator gives.
    expect([f.left, f.top, f.side].map((n) => Math.round(n * 10) / 10)).toEqual([163.8, -49.9, 312]);
    expect(f.crown).toBeLessThan(0); // his hair cut by the hero's top
    expect(f.face.y0).toBeLessThan(0); // and his hairline, 14px above it
    expect(f.face.x0).toBeLessThan(TYPE_RIGHT); // his face starts under the unit's column
    expect(FACE.x0).toBeLessThan(f.hOpaque); // left of 44%: in the 0.3→1 ramp
    expect(f.scrimClearFrom).toBeGreaterThan(f.face.x0); // the 85→25% band across his face
    expect(f.bands.some(([a, b]) => a < f.face.y1 && b > f.face.y0)).toBe(true); // the kicker band over his eyes
    // And at 600 his chin ran into the lede (sampled: the lede at 2.9:1 on paper).
    expect(frame(SHIPPED_SLOT, SHIPPED_SCRIM, 600).face.y1).toBeGreaterThan(LEDE_TOP);
  });

  it("the scrim: page colour under the type's column, clear by 264px where his face may start; no bands; no narrow-screen rules", () => {
    const scrim = ruleFor(PHONE_CSS, ".heroScrimSlot")!;
    expect(layers(decl(scrim, "background")!)).toEqual([
      "linear-gradient(90deg, var(--bg) 258px, transparent 264px)",
      "linear-gradient(180deg, transparent 55%, var(--bg) 100%)",
    ]);
    // The scrim clears where his face may start, never later.
    expect(frame(ruleFor(PHONE_CSS, ".heroArtSlot")!, scrim, 360).scrimClearFrom).toBe(264);
    // The bands that used to hold the type over his face below 390 (the
    // unit's line from 110px; the kicker's, on paper under a long kicker) lay
    // across his beard and his eyes. The photo no longer reaches the type, so
    // they are gone, with the long-kicker class.
    expect(mediaRuleFor(PHONE_CSS, "(max-width: 389px)", ".heroScrimSlot")).toBeNull();
    expect(PHONE_CSS).not.toMatch(/heroScrimLongKicker/);
    // Negative control: as shipped, the narrow rule's first band started at
    // 110px, inside his face's rows at 360 (17.4–141.6 now).
    const SHIPPED_UNIT_BAND = "linear-gradient(180deg, transparent 0, transparent 110px, color-mix(in srgb, var(--bg) 75%, transparent) 128px)";
    const withBand = `background: linear-gradient(90deg, var(--bg) 258px, transparent 264px), ${SHIPPED_UNIT_BAND};`;
    const f = frame(ruleFor(PHONE_CSS, ".heroArtSlot")!, withBand, 360);
    expect(f.bands.some(([a, b]) => a < f.face.y1 && b > f.face.y0)).toBe(true);
    // No plate behind the unit.
    expect(decl(ruleFor(PHONE_CSS, ".totalUnit")!, "background")).toBeNull();
  });

  it("his square's own opacity and grey: 0.7 and 0.2 on the phone, the desktop hero still 0.42 and 0.3", () => {
    // Sampled on the dev build with these values, both themes, 320–900, all
    // four views: every line in the hero clears 4.5:1 (the lowest is the
    // total's gold on paper, 4.96:1, its clean-paper figure; the kicker and
    // unit 6.39 paper / 7.17 dark; the lede 6.31 paper / 10.32 dark).
    const burna = PORTRAIT_ART["burna-boy"];
    expect(burna.square).toEqual({ opacity: 0.7, grayscale: 0.2 });
    expect([burna.opacity, burna.grayscale]).toEqual([0.42, 0.3]);
    const root = parse(renderToStaticMarkup(<CertificationsPage />));
    const style = heroImg(root)!.getAttribute("style")!;
    expect(style).toContain("--portrait-opacity:0.7");
    expect(style).toContain("--grayscale:0.2");
    // Negative control: as shipped the square took the desktop's pair.
    expect(style).not.toContain(`--portrait-opacity:${burna.opacity}`);
    // Only the square: no board artist carries a `square` pair.
    for (const [slug, art] of Object.entries(PORTRAIT_ART)) if (slug !== "burna-boy") expect(art.square, slug).toBeUndefined();
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
