import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/live-charts",
}));

import MobileLiveCharts, { type ReleasePreview } from "../../app/components/MobileLiveCharts";
import styles from "../../app/components/mobileLiveCharts.module.css";
import { releaseArt } from "../../app/lib/liveReleaseArt";
import { decl, read, rules, winning } from "../fixtures/cssRules";

/**
 * liveChartsPanelDock (Job 4 · J4-7, fixes 83 and 96): a live-charts row's
 * open panel, on /live-charts and every board artist's live page (one
 * component).
 *
 * Each platform's head is a sticky sub-header, "{release} · {platform}" with
 * the platform's countries and cadence (C-21), held under the 69px back bar
 * while its block scrolls past: a mono 11 label on --bg with a --rule-soft
 * bottom, not N2 (fix 96). The panel ends in "Close {release}" — no glyph
 * (fix 83), ink (C-22) — which shuts the row and hands focus back to its
 * toggle. The fixtures are liveReleasePanel's.
 */

const CSS = read("app/components/mobileLiveCharts.module.css");
const all = () => true;

const preview = (title: string): ReleasePreview => ({
  kind: "song",
  title,
  ...releaseArt({ title, kind: "song" }),
  total: 3,
  no1: 1,
  top: [{ country: "NG", position: 1, movement: 0 }],
});
const snapshot = (title: string) => ({
  releases: [
    {
      title,
      kind: "song",
      platforms: [
        { platform: "Spotify", numberOnes: 1, entries: [{ country: "NG", name: "Nigeria", position: 1, movement: 0 }] },
        {
          platform: "Apple Music",
          numberOnes: 0,
          entries: [
            { country: "GH", name: "Ghana", position: 4, movement: 1 },
            { country: "KE", name: "Kenya", position: 9, movement: -2 },
          ],
        },
      ],
    },
  ],
});

let n = 0;
const nextSource = () => `/api/test/live-dock-${n++}`;
function mount(title = "Dai Dai") {
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, json: async () => snapshot(title) })));
  return render(
    <MobileLiveCharts
      releases={[preview(title)]}
      platforms={[{ platform: "Spotify", placements: 3, numberOnes: 1 }]}
      placements={3}
      countries={3}
      numberOnes={1}
      updated="4 September 2026"
      source={nextSource()}
    />,
  );
}
afterEach(() => vi.unstubAllGlobals());

const toggle = () => screen.getByRole("button", { name: /^Dai Dai/ });

describe("the open panel's sticky sub-header", () => {
  it("one per platform block, reading '{release} · {platform}' and the platform's meta", async () => {
    const { container } = mount();
    await userEvent.click(toggle());
    await screen.findByText("Nigeria");
    const blocks = [...container.querySelectorAll(`.${styles.platformBlock}`)];
    expect(blocks).toHaveLength(2);
    for (const [i, platform] of ["Spotify", "Apple Music"].entries()) {
      const head = blocks[i].firstElementChild!;
      expect(head.className).toContain(styles.dockSub);
      expect(head.querySelector(`.${styles.dockSubTitle}`)!.textContent!.replace(/ /g, " ")).toBe(`Dai Dai · ${platform}`);
      expect(head.querySelector(`.${styles.platformBlockMeta}`)!.textContent).toMatch(/·/);
    }
  });

  it("sticks under the back bar and its safe-area inset, on --bg with a --rule-soft bottom, 44px", () => {
    expect(winning(CSS, ".dockSub", "position", all)).toBe("sticky");
    expect(winning(CSS, ".dockSub", "top", all)).toBe("calc(69px + env(safe-area-inset-top, 0px))");
    expect(winning(CSS, ".dockSub", "background", all)).toBe("var(--bg)");
    expect(winning(CSS, ".dockSub", "border-bottom", all)).toBe("1px solid var(--rule-soft)");
    expect(winning(CSS, ".dockSub", "min-height", all)).toBe("44px");
    // Below the back bar it docks under: the bar's own layer is higher.
    expect(Number(winning(CSS, ".dockSub", "z-index", all))).toBeLessThan(Number(winning(CSS, ".backBar", "z-index", all)));
  });

  it("a mono 11 label, not N2: no wash, no ember edge, no on-state token (fix 96)", () => {
    expect(winning(CSS, ".dockSub", "font-size", all)).toBe("11px");
    expect(winning(CSS, ".dockSub", "color", all)).toBe("var(--text)");
    for (const r of rules(CSS).filter((r) => /\.dockSub/.test(r.selector))) {
      expect(r.body, r.selector).not.toMatch(/--chip-on-|--ember|wash/);
    }
  });

  it("the release ellipsises and the platform and meta do not", () => {
    const body = (sel: string) => rules(CSS).find((r) => r.selector === sel)!.body;
    expect(decl(body(".dockSubRelease"), "text-overflow")).toBe("ellipsis");
    expect(decl(body(".dockSubPlatform"), "flex")).toBe("none");
    expect(decl(body(".platformBlockMeta"), "flex")).toBe("none");
  });
});

describe("'Close {release}' ends the panel", () => {
  it("the panel's last child is the button, with no glyph", async () => {
    const { container } = mount();
    await userEvent.click(toggle());
    await screen.findByText("Nigeria");
    const panel = container.querySelector(`.${styles.panel}`)!;
    const last = panel.lastElementChild!;
    expect(last.tagName).toBe("BUTTON");
    expect(last.textContent).toBe("Close Dai Dai");
    expect(last.textContent).not.toMatch(/[↗→↓←↑▴▾]/);
    expect(winning(CSS, ".closeRow", "color", all)).toBe("var(--text)");
    expect(parseFloat(winning(CSS, ".closeRow", "min-height", all)!)).toBeGreaterThanOrEqual(44);
  });

  it("shuts the row and puts focus back on its toggle", async () => {
    const { container } = mount();
    await userEvent.click(toggle());
    await screen.findByText("Nigeria");
    await userEvent.click(within(container.querySelector(`.${styles.panel}`) as HTMLElement).getByRole("button", { name: "Close Dai Dai" }));
    expect(container.querySelector(`.${styles.panel}`)).toBeNull();
    expect(toggle()).toHaveAttribute("aria-expanded", "false");
    expect(document.activeElement).toBe(toggle());
  });
});

describe("liveChartsPanelDock negative control: the platform head as shipped", () => {
  it("had no sticky position, so the platform's name scrolled away with the head of its list", () => {
    // app/components/mobileLiveCharts.module.css:355 on main e85e6efe.
    const SHIPPED = ".platformHead { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }";
    expect(winning(SHIPPED, ".platformHead", "position", all)).toBeUndefined();
  });
});
