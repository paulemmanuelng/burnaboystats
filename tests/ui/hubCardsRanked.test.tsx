import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats",
}));

import AfrobeatsPage from "../../app/afrobeats/page";
import hubStyles from "../../app/afrobeats/afrobeats.module.css";
import viewStyles from "../../app/components/hubBoardView.module.css";
import phoneStyles from "../../app/components/mobileAfrobeatsHub.module.css";
import { trees, text } from "../fixtures/phoneTrees";
import { rules, decl } from "../fixtures/cssRules";

/**
 * hubCardsRanked (site review 8 Oct 2026, Job 5 · J5-4, fixes 101 and 117):
 * the cards carry their rank at the top left — the table's own rank — and
 * their hooks always; "Compare any two ↗" is a bare /compare link and the one
 * gold-filled control on each layout.
 */
// The hub's desktop column is `.desktopBody` (its `.desktopOnly` holds only
// Keep exploring), so it is found by its own class.
const { main, phone } = trees(renderToStaticMarkup(<AfrobeatsPage />));
const desktop = main.querySelector(`.${hubStyles.desktopBody}`);
const CSS = readFileSync("app/afrobeats/afrobeats.module.css", "utf8");
const bodyOf = (css: string, sel: string) =>
  rules(css)
    .filter((r) => r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");

describe("hubCardsRanked: every ranked card carries the table's rank", () => {
  it("rank first, before the flag, equal to the table's rank for that artist", () => {
    const table = desktop!.querySelector(`table.${viewStyles.table}`)!;
    const tableRank = new Map(
      [...table.querySelectorAll("tbody tr")].map((tr) => [text(tr.querySelector("td:nth-child(2) a")), text(tr.querySelector("td"))]),
    );
    const grid = desktop!.querySelector(`.${hubStyles.grid}`)!;
    const ranked = [...grid.querySelectorAll(`a.${hubStyles.tile}`)].filter((t) => !t.classList.contains(hubStyles.tileRule));
    expect(ranked.length).toBe(tableRank.size);
    for (const tile of ranked) {
      const top = tile.querySelector(`.${hubStyles.tileTop}`)!;
      const lead = top.firstElementChild!;
      expect(lead.classList.contains(hubStyles.tileLead)).toBe(true);
      const [rank, flag] = [...lead.children];
      expect(rank.classList.contains(hubStyles.tileRank)).toBe(true);
      expect(flag.classList.contains(hubStyles.flag)).toBe(true);
      const name = text(tile.querySelector(`.${hubStyles.tileName}`));
      expect(text(rank), name).toBe(tableRank.get(name));
    }
    // The rule tiles and the scheduled artists carry none.
    for (const t of desktop!.querySelectorAll(`.${hubStyles.tileRule}, .${hubStyles.tilePending}`)) {
      expect(t.querySelector(`.${hubStyles.tileRank}`)).toBeNull();
    }
  });

  it("the rank is mono 700 11px and never gold", () => {
    const body = bodyOf(CSS, ".tileRank");
    expect(decl(body, "font-size")).toBe("11px");
    expect(decl(body, "font-weight")).toBe("700");
    expect(decl(body, "font-family")).toMatch(/--font-mono/);
    expect(body).not.toMatch(/--gold/);
  });

  it("every hook is shown, Geist 13px, two lines at most", () => {
    const body = bodyOf(CSS, ".tileHook");
    expect(body).not.toMatch(/opacity\s*:\s*0\b/);
    expect(body).not.toMatch(/max-height\s*:\s*0\b/);
    expect(decl(body, "font-size")).toBe("13px");
    expect(decl(body, "-webkit-line-clamp")).toBe("2");
    expect(CSS).not.toMatch(/\.tile:hover \.tileHook/);
  });
});

describe("Compare any two ↗", () => {
  it.each([
    ["desktop", () => desktop!],
    ["phone", () => phone!],
  ])("%s: once, a bare /compare, the layout's only gold-filled control", (_, tree) => {
    const links = [...tree().querySelectorAll("a")].filter((a) => /^Compare any two/.test(text(a)));
    expect(links.length).toBe(1);
    expect(links[0].getAttribute("href")).toBe("/compare");
    expect(text(links[0])).toBe("Compare any two ↗");
    expect(tree().querySelectorAll(".btnPrimary").length).toBe(1);
    expect(links[0].classList.contains("btnPrimary")).toBe(true);
  });

  it("the phone's sits directly under the door, full width, at least 48px", () => {
    const door = phone!.querySelector(`.${phoneStyles.doorPad}`)!;
    expect(door.nextElementSibling?.classList.contains(phoneStyles.comparePad)).toBe(true);
    const body = bodyOf(readFileSync("app/components/mobileAfrobeatsHub.module.css", "utf8"), ".compareBtn");
    expect(decl(body, "width")).toBe("100%");
    expect(decl(body, "min-height")).toBe("48px");
    // Then the caption, then the wall.
    const wallPad = phone!.querySelector(`.${phoneStyles.wallPad}`)!;
    expect(text(wallPad.firstElementChild)).toBe("Ranked by certifications");
  });

  it("negative control: the shipped hook was hidden until hover", () => {
    // app/afrobeats/afrobeats.module.css:175–184 on main e85e6efe.
    const shipped = `.tileHook {
  margin-top: 8px;
  font-size: 12.5px;
  line-height: 1.45;
  color: var(--muted);
  opacity: 0;
  max-height: 0;
  transition: opacity 260ms var(--ease), max-height 260ms var(--ease);
}`;
    expect(bodyOf(shipped, ".tileHook")).toMatch(/opacity\s*:\s*0\b/);
  });
});
