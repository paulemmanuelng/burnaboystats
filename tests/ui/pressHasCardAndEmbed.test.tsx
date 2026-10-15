import { renderToStaticMarkup } from "react-dom/server";
import { render, cleanup, waitFor } from "@testing-library/react";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/press",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import PressPage from "../../app/press/page";
import PressEmbedPreview from "../../app/components/PressEmbedPreview";
import { getStatCards } from "../../app/lib/statCards";
import { statCardPreview } from "../../app/lib/cardSizes";
import { EMBED_WIDGETS } from "../../app/lib/embedWidgets";
import { embedPath } from "../../app/lib/embedSnippet";
import { dom, text, trees } from "../fixtures/phoneTrees";
import { read, winning } from "../fixtures/cssRules";

/**
 * pressHasCardAndEmbed (J6-3, design review 8 Oct 2026, fixes 122 and 133):
 * /press shows the two things it offers. Under "Ready-made stat cards", the
 * default stat card as the 720px WebP the /share previews use (the full PNG,
 * ≈745 KB, is the save's alone); under "Live stat boxes for your site", a live
 * embed at its own published size. Each keeps its h2 and id, today's
 * paragraph unshortened, and a ↗ link. From 1240 the pair is the reading
 * column's last row, beside the downloads (Paul, 15 Oct 2026, over fix 133's
 * band across the frame: pressPairInReadingColumn); on the phone they stack.
 * The iframe follows the page's theme.
 */

const card = getStatCards()[0];
const CARD_SRC = statCardPreview(card.id, "square");
const EMBED = EMBED_WIDGETS[0];

const html = renderToStaticMarkup(<PressPage />);
const { desktop, phone } = trees(html);

/** The children of a section, by tag, and the section's asset checks. */
function section(tree: Element, id: string) {
  const h2 = tree.querySelector(`h2#${id}`)!;
  expect(h2, `h2#${id}`).toBeTruthy();
  const sec = h2.closest("section")!;
  expect(sec.getAttribute("aria-labelledby")).toBe(id);
  return { sec, tags: [...sec.children].map((c) => c.tagName) };
}

describe("pressHasCardAndEmbed: each layout shows the card and the embed under their h2s", () => {
  it.each([
    ["desktop", "cards", "embeds"],
    ["phone", "m-cards", "m-embeds"],
  ] as const)("%s", (name, cardsId, embedsId) => {
    const tree = (name === "desktop" ? desktop : phone)!;

    const cards = section(tree, cardsId);
    expect(cards.tags).toEqual(["H2", "IMG", "P", "A"]);
    const img = cards.sec.querySelector("img")!;
    expect(img.getAttribute("src")).toBe(CARD_SRC);
    expect(img.getAttribute("src")).toBe(`/stat-card?stat=${card.id}&ratio=square&w=720`);
    expect([img.getAttribute("width"), img.getAttribute("height"), img.getAttribute("loading")]).toEqual(["1080", "1080", "lazy"]);
    expect(img.getAttribute("alt")).toBe(`Stat card: ${card.value} ${card.label}`);
    expect(text(cards.sec.querySelector("p"))).toContain("custom cards for fan pages are usually a same-day turnaround");
    const cardLink = cards.sec.lastElementChild!;
    expect([cardLink.getAttribute("href"), text(cardLink)]).toEqual(["/share", "Open stat cards ↗"]);

    const embeds = section(tree, embedsId);
    expect(embeds.tags).toEqual(["H2", "IFRAME", "P", "A"]);
    const frame = embeds.sec.querySelector("iframe")!;
    expect(frame.getAttribute("title")).toBe(EMBED.iframeTitle);
    expect([frame.getAttribute("width"), frame.getAttribute("height"), frame.getAttribute("loading")]).toEqual([
      String(EMBED.width),
      String(EMBED.height),
      "lazy",
    ]);
    expect(frame.hasAttribute("src"), "no src from the server: a hidden layout must not load it").toBe(false);
    expect(text(embeds.sec.querySelector("p"))).toContain("copy one snippet of HTML and paste it in");
    expect(text(embeds.sec.querySelector("p"))).toContain(`${EMBED_WIDGETS.length} small boxes`);
    const embedLink = embeds.sec.lastElementChild!;
    expect([embedLink.getAttribute("href"), text(embedLink)]).toEqual(["/embed", "Get an embed ↗"]);
  });

  it("the embed is the first box at its published size (fix 133's 360 x 280)", () => {
    expect([EMBED.slug, EMBED.width, EMBED.height]).toEqual(["career-streams", 360, 280]);
  });

  /**
   * Is the page tabbed in the order it is seen? From 1240 the reading-column
   * sections take rows in source order, the pair last. Packed sparsely,
   * nothing is placed above an item that precedes it in the source; packed
   * densely, a reading-column section after the pair in the source would be
   * lifted above it on screen, so keyboard and screen-reader users would
   * reach the pair's links and iframe first.
   */
  const tabbedAsSeen = (order: (string | null)[], band: string, flow: string | undefined) =>
    !/dense/.test(flow ?? "") || order.indexOf(band) === order.length - 1;

  it("desktop: the pair is last in the split, after trust; from 1240 it is in the reading column beside the downloads", () => {
    const split = desktop!.querySelector('[class*="split"]')!;
    const band = desktop!.querySelector("#cards")!.closest("section")!.parentElement!;
    expect(band.className).toMatch(/assets/);
    expect(band.parentElement).toBe(split);
    expect(split.lastElementChild).toBe(band);
    expect([...band.children].map((s) => s.getAttribute("aria-labelledby"))).toEqual(["cards", "embeds"]);
    // Source order: figures, cite, api, downloads, trust, then the band.
    const all = [...desktop!.querySelectorAll("section[aria-labelledby]")].map((s) => s.getAttribute("aria-labelledby"));
    expect(all).toEqual(["figures", "cite", "api", "downloads", "trust", "cards", "embeds"]);
    expect([...split.querySelectorAll("section[aria-labelledby]")].map((s) => s.getAttribute("aria-labelledby"))).toEqual(all);
    // From 1240: trust takes the reading column's next row under "The open
    // API", and the pair the row after it, beside the downloads: it has no
    // column of its own, so `.split > *` puts it in the reading column (fix
    // 133's `1 / -1` band left a 620px empty column at 1240 and 1440; Paul,
    // 15 Oct 2026). The split packs sparsely, so screen and tab order agree.
    const css = read("app/press/press.module.css");
    const at1240 = (m: string | null) => m === "@media (min-width: 1240px)";
    expect(winning(css, ".split > .assets", "grid-column", at1240)).toBeUndefined();
    expect(winning(css, ".split > *", "grid-column", at1240)).toBe("1");
    expect(winning(css, ".split > .splitSide", "grid-row", at1240)).toBe("1 / -1");
    const flow = winning(css, ".split", "grid-auto-flow", at1240);
    expect(flow ?? "row").not.toMatch(/dense/);
    const kids = [...split.children].map((c) => c.getAttribute("aria-labelledby") ?? (c === band ? "band" : null));
    expect(tabbedAsSeen(kids, "band", flow)).toBe(true);
  });

  it("negative control: the dense build put trust above the band on screen but after it in the tab order", () => {
    // press/page.tsx and press.module.css on 0c7da40f: the split's children
    // were figures, cite, api, downloads, the band, trust, with
    // `grid-auto-flow: row dense`, which lifted trust above the band.
    const dense = ["figures", "cite", "api", "downloads", "band", "trust"];
    expect(tabbedAsSeen(dense, "band", "row dense")).toBe(false);
    expect(tabbedAsSeen(dense, "band", undefined)).toBe(true); // sparse: trust stays under the band, as seen
  });

  it("negative control: J6-3's first build ended the split at the downloads and left trust under the band", () => {
    // press/page.tsx on dc44a438: the split's </div> right after the downloads
    // section, the band and trust after it. Trust then sat under the band, and
    // the reading column ended at "The open API", 841px above the downloads'
    // foot at 1240 and 1440 (next dev, 15 Oct 2026).
    const first = dom(
      '<div class="split"><section aria-labelledby="figures"></section><section aria-labelledby="cite"></section><section aria-labelledby="api"></section><section class="splitSide" aria-labelledby="downloads"></section></div><div class="assets"><section aria-labelledby="cards"></section><section aria-labelledby="embeds"></section></div><section aria-labelledby="trust"></section>',
    ).body;
    const split = first.querySelector(".split")!;
    expect(split.contains(first.querySelector('[aria-labelledby="trust"]'))).toBe(false);
    expect(first.querySelector(".assets")!.parentElement).not.toBe(split);
  });

  it("the band is two columns from 901 and the card is 360 square, at most the column", () => {
    const css = readFileSync("app/press/press.module.css", "utf8");
    expect(css).toMatch(/@media \(min-width: 901px\) \{\s*\.assets \{\s*display: grid;\s*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
    for (const f of ["app/press/press.module.css", "app/components/mobilePress.module.css"]) {
      const c = readFileSync(f, "utf8");
      expect(c, f).toMatch(/\.assetCard \{[^}]*width: 360px;[^}]*max-width: 100%;/);
      expect(c, f).toMatch(/\.assetEmbed \{[^}]*max-width: 100%;/);
      expect(c, f).toMatch(/\.assetLink \{[^}]*min-height: 44px;/);
    }
  });

  it("negative control: the shipped section had no card", () => {
    // press/page.tsx on e85e6efe, lines 339–342, as it rendered.
    const shipped = dom(
      '<section aria-labelledby="cards"><h2 id="cards">Ready-made stat cards</h2><p>Every major figure is available as a shareable image — timeline and story sizes, rendered from live data — on the <a href="/share">stat cards page</a>. Need a figure as a card that isn\'t there? Ask — custom cards for fan pages are usually a same-day turnaround.</p></section>',
    ).body;
    expect(shipped.querySelector("img")).toBeNull();
    expect([...shipped.querySelector("section")!.children].map((c) => c.tagName)).not.toEqual(["H2", "IMG", "P", "A"]);
  });
});

describe("PressEmbedPreview: loads in the visible layout only, in the page's theme", () => {
  const props = { slug: EMBED.slug, width: EMBED.width, height: EMBED.height, title: EMBED.iframeTitle };
  let matches = true;
  const listeners: (() => void)[] = [];

  beforeEach(() => {
    listeners.length = 0;
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) => ({
        matches,
        media: query,
        addEventListener: (_: string, fn: () => void) => listeners.push(fn),
        removeEventListener: vi.fn(),
      })),
    );
  });
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    delete document.documentElement.dataset.theme;
  });

  it("light page: src is the light widget; a flip to dark follows", async () => {
    matches = true;
    document.documentElement.dataset.theme = "light";
    const { container } = render(<PressEmbedPreview {...props} media="(min-width: 901px)" />);
    const frame = container.querySelector("iframe")!;
    expect(frame.getAttribute("src")).toBe("/embed/career-streams?theme=light");
    document.documentElement.dataset.theme = "dark";
    await waitFor(() => expect(frame.getAttribute("src")).toBe("/embed/career-streams?theme=dark"));
  });

  it("hidden layout: no src at all", () => {
    matches = false;
    document.documentElement.dataset.theme = "light";
    const { container } = render(<PressEmbedPreview {...props} media="(max-width: 900px)" />);
    expect(container.querySelector("iframe")!.hasAttribute("src")).toBe(false);
  });

  it("negative control: the /embed gallery's default src does not follow a light page", () => {
    // EmbedGallery.tsx renders embedPath(w.slug, theme) with theme "auto" by default.
    const shipped = embedPath(EMBED.slug, "auto");
    expect(shipped).toBe("/embed/career-streams");
    expect(shipped).not.toBe("/embed/career-streams?theme=light");
  });
});
