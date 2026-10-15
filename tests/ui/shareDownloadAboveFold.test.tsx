import { renderToStaticMarkup } from "react-dom/server";
import { read, rules, decl } from "../fixtures/cssRules";

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

import SharePage from "../../app/share/page";
import maker from "../../app/components/StatCardMaker.module.css";
import share from "../../app/share/share.module.css";

/**
 * J6-2 (design review 8 Oct 2026, fixes 121 and 132): on the desktop /share,
 * Download PNG ↓, Post on X ↗ and WhatsApp ↗ sit at the top of the right
 * column, under "Behind this number" with Square/Story beside it, so Download
 * is above the fold at 1440 x 900 and at 1024 x 768. At 1440 the frame runs
 * x 80–1360: the 520px preview, a 48px gap, then the right column. At 901–1239
 * the frame keeps its 32px gutter and the two columns stay side by side
 * (400 + 32).
 *
 * Before: the actions sat under the preview, and below 1240 the right column
 * dropped under it, so at 1024 x 768 Download was below the fold. The real
 * Download y is measured in headless Chrome and recorded in the PR.
 */

const CSS_PATH = "app/components/StatCardMaker.module.css";
const CSS = read(CSS_PATH);

function parse(html: string) {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

/** Does an @media prelude (or none) apply at a viewport width? min-/max-width only. */
function applies(media: string | null, w: number): boolean {
  if (media === null) return true;
  const min = [...media.matchAll(/min-width:\s*(\d+)px/g)].map((m) => Number(m[1]));
  const max = [...media.matchAll(/max-width:\s*(\d+)px/g)].map((m) => Number(m[1]));
  if (/prefers|hover|orientation|print/.test(media)) return false;
  return min.every((v) => w >= v) && max.every((v) => w <= v);
}
/** The value the cascade gives `prop` on `sel` at width `w` (last rule wins; same specificity). */
function at(css: string, sel: string, prop: string, w: number) {
  let v: string | undefined;
  for (const r of rules(css)) {
    if (!applies(r.media, w)) continue;
    if (!r.selector.split(",").map((s) => s.trim()).includes(sel)) continue;
    const d = decl(r.body, prop);
    if (d !== undefined) v = d;
  }
  return v;
}

describe("J6-2: the actions lead the right column; the left keeps the preview", () => {
  const root = parse(renderToStaticMarkup(<SharePage />));
  const desk = root.querySelector(`.${share.desktopOnly}`)!;
  const aside = desk.querySelector(`.${maker.aside}`)!;
  const left = aside.parentElement!.firstElementChild!;
  const download = [...desk.querySelectorAll("button")].find((b) => b.textContent === "Download PNG ↓")!;

  it("Download PNG ↓ is in the right column, after its head and before the card's h2", () => {
    expect(download, "the Download button").toBeTruthy();
    expect(aside.contains(download)).toBe(true);
    const kids = [...aside.children];
    expect(kids[0].className).toBe(maker.asideHead);
    expect(kids[1].className).toBe(maker.actions);
    expect(kids[1].firstElementChild).toBe(download);
    const h2 = aside.querySelector(`h2.${maker.asideH}`)!;
    expect(download.compareDocumentPosition(h2) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("the head is \"Behind this number\" with the Square/Story segment beside it", () => {
    const head = aside.querySelector(`.${maker.asideHead}`)!;
    expect(head.querySelector(`.${maker.asideKicker}`)!.textContent).toBe("Behind this number");
    const seg = head.querySelector('[role="group"][aria-label="Card shape"]')!;
    expect([...seg.querySelectorAll("button")].map((b) => b.textContent)).toEqual(["Square", "Story"]);
  });

  it("the left column holds the preview label, the stage and the size note, and no button", () => {
    expect(left).not.toBe(aside);
    expect(left.querySelector(`.${maker.previewLabel}`)!.textContent).toMatch(/^Preview · \d+×\d+$/);
    expect(left.querySelector(`.${maker.stage}`)).toBeTruthy();
    expect(left.querySelector(`.${maker.note}`)!.textContent).toMatch(/^Downloads render at \d+×\d+/);
    expect(left.querySelectorAll("button")).toHaveLength(0);
    expect(left.querySelector('[aria-label="Card shape"]')).toBeNull();
  });
});

describe("J6-2: the grid is 520 + 48 at 1440 and 400 + 32 at 901–1239 (fix 121)", () => {
  it.each([1440, 1360, 1280, 1240])("%ipx: 520px minmax(0, 1fr), gap 48px", (w) => {
    expect(at(CSS, ".split", "grid-template-columns", w)).toBe("520px minmax(0, 1fr)");
    expect(at(CSS, ".split", "gap", w)).toBe("48px");
  });

  it.each([1239, 1024, 901])("%ipx: 400px minmax(0, 1fr), gap 32px: never one column", (w) => {
    expect(at(CSS, ".split", "grid-template-columns", w)).toBe("400px minmax(0, 1fr)");
    expect(at(CSS, ".split", "gap", w)).toBe("32px");
  });

  it("the right column keeps its rule and its 32px inset at every desktop width", () => {
    for (const w of [1440, 1239, 1024, 901]) {
      expect(at(CSS, ".aside", "border-left", w)).toBe("1px solid var(--line)");
      expect(at(CSS, ".aside", "padding-left", w)).toBe("32px");
      expect(at(CSS, ".aside", "border-top", w)).toBeUndefined();
    }
  });

  it("at 1440 Download's left edge is 80 + 520 + 48 + 1 + 32 = 681 (pageFrameX80's frame; measured 681)", () => {
    const frame = (w: number) => (w - Math.min(w, 1360)) / 2 + 40; // .wrap 1360 / 40
    const px = (v: string | undefined) => Number(v!.match(/^(\d+)px/)![1]);
    const col = px(at(CSS, ".split", "grid-template-columns", 1440));
    const gap = px(at(CSS, ".split", "gap", 1440));
    const rule = px(at(CSS, ".aside", "border-left", 1440));
    const inset = px(at(CSS, ".aside", "padding-left", 1440));
    expect(frame(1440) + col + gap + rule + inset).toBe(681);
  });

  it("negative control: main's grid dropped the right column under the preview below 1240", () => {
    // StatCardMaker.module.css on e85e6efe, lines 44 and 243–246, verbatim.
    const shipped = `.split { display: grid; grid-template-columns: 1fr 380px; gap: 44px; align-items: start; }
@media (max-width: 1239px) {
  .split { grid-template-columns: 1fr; gap: 28px; }
  .aside { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; padding-top: 40px; }
}`;
    expect(at(shipped, ".split", "grid-template-columns", 1440)).not.toBe("520px minmax(0, 1fr)");
    expect(at(shipped, ".split", "grid-template-columns", 1024)).toBe("1fr");
    expect(at(shipped, ".split", "grid-template-columns", 1024)).not.toBe("400px minmax(0, 1fr)");
  });
});
