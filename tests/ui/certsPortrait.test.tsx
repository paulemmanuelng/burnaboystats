import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import sharp from "sharp";
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
  it("/certifications: the square slot and its scrim; it paints the cut-out, and sizes and the preload agree with the slot's cap", () => {
    const root = parse(renderToStaticMarkup(<CertificationsPage />));
    const img = heroImg(root)!;
    expect(img).toBeTruthy();
    expect(has(img, m.heroArtSlot)).toBe(true);
    expect(has(img, m.heroArtEmblem)).toBe(false);
    expect(has(root.querySelector(`.${m.hero} .${m.heroScrim}`), m.heroScrimSlot)).toBe(true);
    // The square paints at its own width, at most the cap in its CSS width, so
    // `sizes` names that cap — and the preload the hero is painted from has
    // to ask for the same thing.
    const cap = decl(ruleFor(PHONE_CSS, ".heroArtSlot")!, "width")!.match(/^min\((\d+px), /)![1];
    const source = img.closest("picture")!.querySelector("source")!;
    expect(source.getAttribute("sizes")).toBe(cap);
    const preload = root.querySelector('link[rel="preload"][as="image"][media="(max-width: 900px)"]');
    expect(preload?.getAttribute("imagesizes")).toBe(cap);
    // Both name the cut-out file, never the photo with its studio wall.
    const { src, width } = PORTRAIT_ART["burna-boy"].square!.cutout;
    expect(source.getAttribute("srcset")).toBe(`${src} ${width}w`);
    expect(preload?.getAttribute("imagesrcset")).toBe(`${src} ${width}w`);
    expect(source.getAttribute("srcset")).not.toMatch(/scdn/);
    // Decorative, as it was: empty alt, hidden from assistive tech.
    expect(img.getAttribute("alt")).toBe("");
    expect(img.getAttribute("aria-hidden")).toBe("true");
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

  // ── His cut-out (owner, 21 Oct 2026: "fix the burna portrait on mobile... it
  // looks horrible both on dark mode and light mode") ─────────────────────────
  // The square used to paint the 640 photo under five mask layers that
  // followed his outline (#510, 15 Oct 2026). The pale studio wall they left
  // round his head read as a grey box on the dark page and a beige one on
  // paper, with cut edges. It now paints his cut-out (portraitArt.ts
  // square.cutout: keyed off the wall from the image border at Lab ΔE 12,
  // feathered and despilled), whose own alpha is the only edge he has. Where
  // he is in it is read off the file below, not typed.
  const CUTOUT = PORTRAIT_ART["burna-boy"].square!.cutout;
  const CUTOUT_FILE = `public${CUTOUT.src}`;
  // The hero's type, measured live on /certifications (dev build, 15 Oct 2026
  // and again 21 Oct, both themes) — the same px at 320, 360, 375, 390, 402,
  // 430, 600, 768 and 900, because the kicker and the total row do not wrap:
  // the longest kicker ("Outside Nigeria · Lead credits") ends at 256.3, the
  // unit ("Certifications") at 254.2, the total's line box runs 21.6–150.6px
  // down, and the lede's first line box starts 157.6px down.
  const TYPE_RIGHT = 256.3;
  const TOTAL_ROW = { y0: 21.6, y1: 150.6 };
  const LEDE_TOP = 157.6;
  const WIDTHS = [320, 360, 375, 390, 402, 430, 600, 768, 900];
  // The slot as #510 shipped it (15 Oct 2026): the photo, its wall cut back by
  // five layers that followed his outline.
  const SLOT_510 =
    "top: 4px; right: auto; left: max( calc(264px - 0.22 * min(256px, calc((100% - 264px) / 0.35))), calc(100% - 4px - 0.63 * min(256px, calc((100% - 264px) / 0.35))) ); width: min(256px, calc((100% - 264px) / 0.35)); height: auto; aspect-ratio: 1 / 1; transform: translateY(-6.25%); object-position: center; -webkit-mask-image: linear-gradient(180deg, transparent 4%, black 10.5%, black 60%, transparent 68%), radial-gradient(ellipse 5% 3.9% at 27% 28.7%, black 100%, transparent 130%), linear-gradient(118deg, transparent 21.7%, black 25.4%), linear-gradient(90deg, transparent 21.4%, black 26.4%), linear-gradient(30deg, transparent 33.2%, black 36.9%); -webkit-mask-composite: source-in, source-over, source-in, source-in; mask-image: linear-gradient(180deg, transparent 4%, black 10.5%, black 60%, transparent 68%), radial-gradient(ellipse 5% 3.9% at 27% 28.7%, black 100%, transparent 130%), linear-gradient(118deg, transparent 21.7%, black 25.4%), linear-gradient(90deg, transparent 21.4%, black 26.4%), linear-gradient(30deg, transparent 33.2%, black 36.9%); mask-composite: intersect, add, intersect, intersect;";

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
  /** A comma list split at its top level only (gradients nest commas). */
  const layers = (list: string) => {
    const out: string[] = [];
    let depth = 0, cur = "";
    for (const ch of list) {
      if (ch === "(") depth++;
      if (ch === ")") depth--;
      if (ch === "," && depth === 0) { out.push(cur.trim()); cur = ""; } else cur += ch;
    }
    return cur.trim() ? [...out, cur.trim()] : out;
  };

  /** Where he is in the cut-out, as fractions of its side, read off its
   *  alpha (visible: > 0.02; solid: > 0.5): the crown of his hair; his first
   *  column (the glasses' rim); the chin — the lowest beard row in the columns
   *  between 1/15 and 18% across, left of the jacket's front; the right of
   *  everything from the crown down to the chin (the braid, and the jacket's
   *  shoulder on the chin's row); and the whole figure's right (the jacket).
   *  Plus the alpha round the file's top, left and right edges. */
  type Geo = { side: number; crown: number; left: number; chin: number; chinSolid: number; headRight: number; right: number; edge: number };
  let geo: Geo;
  beforeAll(async () => {
    const { data, info } = await sharp(readFileSync(CUTOUT_FILE)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const N = info.width;
    const a = (x: number, y: number) => data[(y * N + x) * info.channels + 3] / 255;
    let crown = N, left = N, right = 0, edge = 0;
    for (let y = 0; y < info.height; y++)
      for (let x = 0; x < N; x++) {
        if (y === 0 || x === 0 || x === N - 1) edge = Math.max(edge, a(x, y));
        if (a(x, y) > 0.02) { crown = Math.min(crown, y); left = Math.min(left, x); right = Math.max(right, x + 1); }
      }
    const chinAt = (th: number) => {
      let c = 0;
      for (let y = 0; y < info.height; y++)
        for (let x = Math.round(N / 15); x < Math.round(0.18 * N); x++) if (a(x, y) > th) c = Math.max(c, y + 1);
      return c;
    };
    const chin = chinAt(0.02);
    let headRight = 0;
    for (let y = crown; y < chin; y++) for (let x = 0; x < N; x++) if (a(x, y) > 0.02) headRight = Math.max(headRight, x + 1);
    geo = { side: N, crown: crown / N, left: left / N, chin: chin / N, chinSolid: chinAt(0.5) / N, headRight: headRight / N, right: right / N, edge };
  });

  /** Where the slot puts the square in a hero W wide, and him in it (px). */
  const place = (W: number, slot = ruleFor(PHONE_CSS, ".heroArtSlot")!) => {
    const side = evalLen(decl(slot, "width")!, W);
    const left = evalLen(decl(slot, "left")!, W);
    // Stood on `top` and lifted by its own height: `top` is the square's foot.
    const foot = evalLen(decl(slot, "top")!, 0);
    const top = foot - side;
    return {
      side, left, top, foot,
      crown: top + geo.crown * side, chin: top + geo.chin * side,
      x0: left + geo.left * side, headRight: left + geo.headRight * side,
    };
  };

  it("the cut-out: a square WebP with alpha in public/, its width the srcset's, under 80 KB, transparent to its top and sides", () => {
    const buf = readFileSync(CUTOUT_FILE);
    expect(buf.toString("ascii", 0, 4)).toBe("RIFF");
    expect(buf.toString("ascii", 8, 12)).toBe("WEBP");
    // The extended header, whose flags say the file carries alpha.
    expect(buf.toString("ascii", 12, 16)).toBe("VP8X");
    expect(buf[20] & 0x10).toBe(0x10);
    const w = buf.readUIntLE(24, 3) + 1, h = buf.readUIntLE(27, 3) + 1;
    expect([w, h]).toEqual([CUTOUT.width, CUTOUT.width]);
    expect(geo.side).toBe(CUTOUT.width);
    expect(CUTOUT.width).toBeLessThanOrEqual(640);
    expect(buf.length).toBeLessThanOrEqual(80 * 1024);
    // Nothing of the wall left at the file's top, left or right edge — the
    // only edge is his own. (The foot is the jacket, which the slot fades.)
    expect(geo.edge).toBe(0);
    // His whole head is in the file, with room round it.
    expect(geo.crown).toBeGreaterThan(0);
    expect(geo.left).toBeGreaterThan(0);
    expect(geo.chin).toBeLessThan(0.9);
    // Negative control: the photo it replaces is wall to every edge, so a
    // square painting it had a box edge whatever the masks did.
    const photo = readFileSync("docs/design/box-office-by-country/assets/burna-boy-portrait-640.jpg");
    expect(photo.readUInt16BE(0)).toBe(0xffd8); // a JPEG: no alpha at all
  });

  it("the slot: the cut-out's own alpha and one bottom fade — no polygon layers, no composite", () => {
    const slot = ruleFor(PHONE_CSS, ".heroArtSlot")!;
    const mask = decl(slot, "mask-image")!;
    expect(decl(slot, "-webkit-mask-image")).toBe(mask);
    const ls = layers(mask);
    expect(ls).toHaveLength(1);
    const [, from] = ls[0].match(/^linear-gradient\(180deg, black ([\d.]+)%, transparent 100%\)$/)!;
    // The fade starts below the beard's solid foot, so his face is all there,
    // and is clear at the square's foot, so no edge is left above the lede.
    expect(Number(from) / 100).toBeGreaterThanOrEqual(geo.chinSolid);
    expect(slot).not.toMatch(/radial-gradient/);
    expect(decl(slot, "mask-composite")).toBeNull();
    expect(decl(slot, "-webkit-mask-composite")).toBeNull();
    // Negative control: #510's slot — five layers, an ellipse, four operators.
    expect(layers(decl(SLOT_510, "mask-image")!)).toHaveLength(5);
    expect(SLOT_510).toMatch(/radial-gradient/);
    expect(decl(SLOT_510, "mask-composite")).not.toBeNull();
  });

  it("the slot: its size and place are set from the cut-out, not the hero's width", () => {
    const slot = ruleFor(PHONE_CSS, ".heroArtSlot")!;
    const [, cap, room, across] = decl(slot, "width")!.match(/^min\((\d+)px, calc\(\(100% - (\d+)px\) \/ ([\d.]+)\)\)$/)!;
    // The room is right of 264px less 4px at the screen's edge, and the
    // divisor covers his head's width in the file, rim to braid.
    expect(Number(room)).toBe(264 + 4);
    expect(Number(across)).toBeGreaterThanOrEqual(geo.headRight - geo.left);
    // `left` puts his first visible column at or right of 264px.
    const [, back] = decl(slot, "left")!.match(/^calc\(264px - ([\d.]+) \* min\(/)!;
    expect(Number(back)).toBeLessThanOrEqual(geo.left);
    expect(decl(slot, "left")).toBe(`calc(264px - ${back} * ${decl(slot, "width")})`);
    expect(decl(slot, "right")).toBe("auto");
    expect(decl(slot, "aspect-ratio")).toBe("1 / 1");
    expect(decl(slot, "object-position")).toBe("center");
    // Stood above the lede, and the cap is the most that keeps his crown 4px
    // inside the hero's top.
    expect(decl(slot, "transform")).toBe("translateY(-100%)");
    const foot = evalLen(decl(slot, "top")!, 0);
    expect(foot).toBeLessThanOrEqual(LEDE_TOP - 2);
    expect(foot - Number(cap) * (1 - geo.crown)).toBeGreaterThanOrEqual(4);
    expect(foot - (Number(cap) + 2) * (1 - geo.crown)).toBeLessThan(4);
  });

  it.each(WIDTHS)("%ipx: his whole head is in the hero, beside the total, clear of every word", (W) => {
    const f = place(W);
    // The top of his head under the hero's top edge (the header ends there).
    expect(f.crown, "crown cut by the hero's top").toBeGreaterThanOrEqual(4);
    // Nothing of him in the type's column, and the scrim clear where he starts.
    expect(f.x0, "under the kicker or the unit").toBeGreaterThanOrEqual(264);
    expect(f.x0).toBeGreaterThan(TYPE_RIGHT + 7);
    const scrim = ruleFor(PHONE_CSS, ".heroScrimSlot")!;
    const clear = layers(decl(scrim, "background")!).find((l) => l.startsWith("linear-gradient(90deg"))!.match(/transparent ([\d.]+)px\)$/)![1];
    expect(Number(clear), "scrim over him").toBeLessThanOrEqual(f.x0);
    // The whole head inside the screen, 4px to spare.
    expect(f.headRight, "head off the right edge").toBeLessThanOrEqual(W - 4);
    // Above the lede: the square ends over it, faded to nothing at its foot.
    expect(f.foot, "into the lede").toBeLessThanOrEqual(LEDE_TOP - 2);
    // Beside the total: his chin on the total's row.
    expect(f.chin).toBeGreaterThanOrEqual(TOTAL_ROW.y0);
    expect(f.chin).toBeLessThanOrEqual(TOTAL_ROW.y1);
    // As big as the room allows: the cap from 390 up; below it the head
    // reaches the 4px margin.
    const cap = Number(decl(ruleFor(PHONE_CSS, ".heroArtSlot")!, "width")!.match(/^min\((\d+)px/)![1]);
    if (W >= 390) expect(f.side).toBe(cap);
    else expect(f.headRight).toBeGreaterThan(W - 5);
  });

  it("negative control: #510's square at 390 started above the hero's top edge, under the header", () => {
    // That slot raised the 640 photo by its crown's depth (6.25%) from 4px,
    // so the square met the hero's top: at 390 its top was at 4 − 16 = −12px,
    // and the photo's wall reaches every edge of it.
    const side = evalLen(decl(SLOT_510, "width")!, 390);
    const top = evalLen(decl(SLOT_510, "top")!, 0) - 0.0625 * side;
    expect(side).toBe(256);
    expect(top).toBeLessThan(0);
    expect(decl(SLOT_510, "transform")).not.toBe("translateY(-100%)");
  });

  it("the scrim: page colour under the type's column, clear by 264px where he starts; no bands; no narrow-screen rules", () => {
    const scrim = ruleFor(PHONE_CSS, ".heroScrimSlot")!;
    expect(layers(decl(scrim, "background")!)).toEqual([
      "linear-gradient(90deg, var(--bg) 258px, transparent 264px)",
      "linear-gradient(180deg, transparent 55%, var(--bg) 100%)",
    ]);
    // The bands that used to hold the type over the photo below 390 (the
    // unit's line from 110px; the kicker's, on paper under a long kicker) are
    // gone with the long-kicker class: he no longer reaches the type.
    expect(mediaRuleFor(PHONE_CSS, "(max-width: 389px)", ".heroScrimSlot")).toBeNull();
    expect(PHONE_CSS).not.toMatch(/heroScrimLongKicker/);
    // Negative control: the shipped narrow rule's band started at 110px,
    // which at 360 is between his crown and his chin — across his face.
    const f = place(360);
    expect(110).toBeGreaterThan(f.crown);
    expect(110).toBeLessThan(f.chin);
    // No plate behind the unit.
    expect(decl(ruleFor(PHONE_CSS, ".totalUnit")!, "background")).toBeNull();
  });

  it("his square's own opacity and grey: 0.92 and 0.2 on the phone, the desktop hero still 0.42 and 0.3", () => {
    // Measured on the dev build, 21 Oct 2026, 320/360/375/390/402/430 in both
    // themes (worst pixel behind each line, the type hidden): every hero line
    // reads its clean-page figure at every width — kicker and unit 7.17:1
    // dark / 6.39:1 paper, the total 11.28 / 4.96 (gold on paper), the lede
    // 13.94 / 8.77 — because nothing of him lies under a word. The tone only
    // decides how clearly his face reads: at #510's 0.7 his skin sank into
    // the dark page and paled on paper.
    const burna = PORTRAIT_ART["burna-boy"];
    expect([burna.square!.opacity, burna.square!.grayscale]).toEqual([0.92, 0.2]);
    expect([burna.opacity, burna.grayscale]).toEqual([0.42, 0.3]);
    const root = parse(renderToStaticMarkup(<CertificationsPage />));
    const style = heroImg(root)!.getAttribute("style")!;
    expect(style).toContain(`--portrait-opacity:${burna.square!.opacity}`);
    expect(style).toContain(`--grayscale:${burna.square!.grayscale}`);
    // Negative control: as shipped the square took the desktop's pair.
    expect(style).not.toContain(`--portrait-opacity:${burna.opacity}`);
    // Only the square: no board artist carries a `square` pair or a cut-out.
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
