import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/updates",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import box from "../../app/components/SubscribeBox.module.css";
import upd from "../../app/updates/updates.module.css";
import { decl, read, rules, winning } from "../fixtures/cssRules";

/**
 * updates1024FirstEntry (Job 4 · J4-8; the design response's test): at
 * 1024 × 768 an entry is on the first screen.
 *
 * At 901–1239 the hero stacks, and the digest card's full height pushed the
 * first entry under the fold. With Resend configured the box is now one 48px
 * row there — "Digest", the field, the gold button — its heading, facts and
 * fine print visually hidden (clipped, not display: none), so the outline and
 * the form are whole. The budget below adds the first screen up from declared
 * values; measured on a dev server on 14 Oct 2026, the first entry's top sat
 * at y 646 at 1024 × 768.
 */

const BOX = read("app/components/SubscribeBox.module.css");
const UPD = read("app/updates/updates.module.css");
const band = (m: string | null) => m === "@media (min-width: 901px) and (max-width: 1239px)";
const wide = (m: string | null) => m === null;
const body = (css: string, sel: string, m: (x: string | null) => boolean) =>
  rules(css)
    .filter((r) => m(r.media) && r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");
const px = (v: string | undefined) => parseFloat(v ?? "NaN");

let html = "";
beforeAll(async () => {
  vi.stubEnv("RESEND_API_KEY", "test");
  vi.stubEnv("RESEND_AUDIENCE_ID", "test");
  vi.resetModules();
  const { default: UpdatesPage } = await import("../../app/updates/page");
  html = renderToStaticMarkup(UpdatesPage());
});
afterAll(() => vi.unstubAllEnvs());

describe("updates1024FirstEntry: the digest is one inline row at 901–1239", () => {
  it("the page's digest box is the band variant, and carries the 'Digest' label", () => {
    const host = document.createElement("div");
    host.innerHTML = html;
    const digest = host.querySelector(`.${upd.desktopOnly} #digest`)!;
    expect(digest).not.toBeNull();
    expect(digest.classList.contains(box.band)).toBe(true);
    expect(digest.querySelector(`.${box.bandLabel}`)?.textContent).toBe("Digest");
    expect(digest.querySelector(`.${box.bandLabel}`)?.getAttribute("aria-hidden")).toBe("true");
    // the heading, the form's label and its field are all still there
    expect(digest.querySelector("h2")?.textContent).toMatch(/one email/i);
    expect(digest.querySelector("label")?.getAttribute("for")).toBe(digest.querySelector("input[type=email]")?.id);
    // the phone's box is the compact one, untouched
    expect(host.querySelector("#digest-m")?.classList.contains(box.band)).toBe(false);
  });

  it("at 901–1239: one row, the field and the button shown, the rest clipped (not display: none)", () => {
    expect(decl(body(BOX, ".band", band), "display")).toBe("flex");
    expect(px(decl(body(BOX, ".band", band), "min-height"))).toBe(48);
    for (const part of [".band .kicker", ".band .head", ".band .facts", ".band .label", ".band .fine"]) {
      const b = body(BOX, part, band);
      expect(decl(b, "clip-path"), part).toBe("inset(50%)");
      expect(decl(b, "position"), part).toBe("absolute");
      expect(decl(b, "display"), part).toBeUndefined();
    }
    for (const shown of [".band .row", ".band .form"]) expect(decl(body(BOX, shown, band), "display"), shown).toBeUndefined();
    expect(decl(body(BOX, ".band .bandLabel", band), "display")).toBe("inline-flex");
    expect(winning(UPD, ".heroDigest > :last-child", "max-width", (m) => m === null || band(m) || m === "@media (max-width: 1239px)")).toBe("none");
  });

  it("≥1240 and phones are unchanged: the label is hidden and the band rules do not apply", () => {
    expect(decl(body(BOX, ".bandLabel", wide), "display")).toBe("none");
    expect(rules(BOX).filter((r) => r.selector.includes(".band") && r.media !== null).every((r) => band(r.media))).toBe(true);
  });
});

/** The first screen at 1024 × 768, from declared values, given the digest's height. */
function firstEntryTop(digest: number) {
  const MASTHEAD = 69;
  const CRUMBS = 12 + 24 + 12 + 1; // breadcrumbBar .inner: 12px padding round a 24px target, and its rule
  const heroPad = body(UPD, ".heroPad", wide).match(/padding:\s*(\d+)px\s+\d+px\s+(\d+)px/)!;
  const [padTop, padBottom] = [Number(heroPad[1]), Number(heroPad[2])];
  const EYEBROW = 11.5 * 1.6; // 11.5px at the body's 1.6
  const h1 = 16 + 70 * 0.88; // .h1 margin, its 70px at ≤1239 on 0.88
  const LEDE = 18 + 2 * 20 * 1.5; // two lines at 1024
  const LAST = 20 + 12.5 * 1.6;
  const GAP = px(decl(body(UPD, ".heroPad", (m) => m === "@media (max-width: 1239px)"), "gap"));
  const STRIP = px(decl(body(UPD, ".dockStrip", wide), "height"));
  const FEED = 10 + 30 + 26 * 1.05 + 10 + 1; // feedPad top, .month margin, the month head
  return MASTHEAD + CRUMBS + padTop + EYEBROW + h1 + LEDE + LAST + GAP + digest + padBottom + 1 + STRIP + FEED;
}

describe("updates1024FirstEntry: the budget", () => {
  it("with the inline row, the first entry starts on the 768px screen", () => {
    const row = 1 + px(decl(body(BOX, ".band", band), "padding")?.split(/\s+/)[0]) + Math.max(48, px(decl(body(BOX, ".input", wide), "min-height")));
    expect(firstEntryTop(row)).toBeLessThan(768);
  });

  it("negative control: the shipped card, stacked under the title at ≤1239 (max-width 480), put it under the fold", () => {
    // main e85e6efe: no band, so the card's own height, from its declared
    // values (SubscribeBox.module.css): 22/20 padding and a 1px edge, the
    // kicker, the 28px heading (one line), the facts (two lines in 432px),
    // the field label, the 44px row and two lines of fine print.
    const card = 2 + 22 + 20 + 11 * 1.6 + (8 + 28 * 1.05) + (12 + 2 * 11 * 1.6) + (16 + 11 * 1.6) + (6 + 44) + (10 + 2 * 11 * 1.5);
    expect(card).toBeGreaterThan(250);
    expect(firstEntryTop(card)).toBeGreaterThan(768);
  });
});
