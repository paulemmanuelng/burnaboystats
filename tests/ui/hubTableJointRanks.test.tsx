import { readFileSync } from "node:fs";
import { act } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { createRoot } from "react-dom/client";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfrobeatsPage from "../../app/afrobeats/page";
import HubBoardView from "../../app/components/HubBoardView";
import viewStyles from "../../app/components/hubBoardView.module.css";
import hubStyles from "../../app/afrobeats/afrobeats.module.css";
import { sweptArtists, certCount, countryCount } from "../../app/data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../../app/data/certifications";
import { hubRows } from "../../app/lib/hubRows";
import { hubCaption, rankLabel, rankRows } from "../../app/lib/hubTable";
import { trees, text, dom } from "../fixtures/phoneTrees";
import { winning } from "../fixtures/cssRules";

/**
 * hubTableJointRanks (site review 8 Oct 2026, Job 5 · J5-4, fixes 97, 102,
 * 117): the /afrobeats board as a table — Burna Boy and every swept artist,
 * ranked by certifications with joint ranks "=n" on every tied row; the eight
 * heads of fix 102; his row N4; a re-sort re-ranks by the column. The view
 * opens on the cards (default (b)), the table one tap away.
 */
const HEADS = ["Rank", "Artist", "Certs", "Countries", "Top cert", "Chart entries", "No. 1s", "Live now"];
const CSS = readFileSync("app/components/hubBoardView.module.css", "utf8");
const top = (m: string | null) => m === null;

/** Competition ranks recomputed here, independently of lib/hubTable. */
function expectedRanks(values: number[]): string[] {
  return values.map((v) => {
    const above = values.filter((w) => w > v).length;
    const tied = values.filter((w) => w === v).length > 1;
    return `${tied ? "=" : ""}${above + 1}`;
  });
}

const tableOf = (root: ParentNode) => root.querySelector(`table.${viewStyles.table}`)!;
const bodyRows = (table: Element) => [...table.querySelectorAll("tbody tr")];
const cell = (tr: Element, i: number) => text(tr.querySelectorAll("td")[i]);

describe("hubTableJointRanks: the board's table", () => {
  // The hub's desktop column is `.desktopBody` (its `.desktopOnly` holds only
  // Keep exploring), so it is found by its own class.
  const { main } = trees(renderToStaticMarkup(<AfrobeatsPage />));
  const desktop = main.querySelector(`.${hubStyles.desktopBody}`);
  const table = tableOf(desktop!);

  it("one row for Burna Boy and one per swept artist, in certifications order", () => {
    const rows = bodyRows(table);
    expect(rows.length).toBe(1 + sweptArtists.length);
    const certs = rows.map((r) => Number(cell(r, 2)));
    expect(certs).toEqual([...certs].sort((a, b) => b - a));
    // Every artist's figures are the ones the board counts.
    const want = new Map([["Burna Boy", [totalAwards(), burnaCountries]], ...sweptArtists.map((a) => [a.name, [certCount(a), countryCount(a)]] as const)]);
    for (const r of rows) {
      const name = text(r.querySelector("td:nth-child(2) a"));
      expect([Number(cell(r, 2)), Number(cell(r, 3))], name).toEqual(want.get(name));
    }
  });

  it("joint ranks: '=n' on every tied row, and the next rank skips", () => {
    const rows = bodyRows(table);
    const certs = rows.map((r) => Number(cell(r, 2)));
    expect(rows.map((r) => cell(r, 0))).toEqual(expectedRanks(certs));
    // The rule on a set that certainly ties, whatever the data does.
    const synthetic = [9, 7, 7, 5, 5, 5, 1].map((certs, i) => ({ ...hubRows[0], slug: `s${i}`, name: `S${i}`, certs }));
    expect(rankRows(synthetic, "certs").map(rankLabel)).toEqual(["1", "=2", "=2", "=4", "=4", "=4", "7"]);
  });

  it("the heads are exactly fix 102's, the caption names certifications", () => {
    expect([...table.querySelectorAll("thead th")].map((th) => text(th).replace(/[▼↕]/g, "").trim())).toEqual(HEADS);
    expect(text(table.querySelector("caption"))).toBe("Ranked by certifications · tap a column to re-sort");
    expect(text(desktop!.querySelector(`.${viewStyles.caption}`))).toBe("Ranked by certifications");
  });

  it("his row is N4: the wash, his certifications figure gold, his name ink", () => {
    const his = bodyRows(table).filter((r) => r.classList.contains(viewStyles.rowHis));
    expect(his.length).toBe(1);
    expect(text(his[0].querySelector("td:nth-child(2) a"))).toBe("Burna Boy");
    expect(his[0].querySelectorAll("td")[2].classList.contains(viewStyles.figHis)).toBe(true);
    expect(winning(CSS, ".rowHis td", "background", top)).toMatch(/--gold-wash-base/);
    expect(winning(CSS, ".table td.figHis", "color", top)).toBe("var(--gold)");
    expect(winning(CSS, ".name", "color", top)).toBe("var(--text)");
    // Only his row's figure is gold.
    expect(table.querySelectorAll(`.${viewStyles.figHis}`).length).toBe(1);
  });

  it("Live now is green, and the view opens on the cards with the table hidden", () => {
    for (const r of bodyRows(table)) expect(r.querySelectorAll("td")[7].classList.contains(viewStyles.live)).toBe(true);
    expect(winning(CSS, ".table td.live", "color", top)).toBe("var(--green)");
    expect(table.closest("[hidden]")).not.toBeNull();
    const grid = desktop!.querySelector(`.${hubStyles.grid}`)!;
    expect(grid.closest("[hidden]")).toBeNull();
    expect(desktop!.querySelector(`[aria-pressed="true"]`)?.textContent).toBe("Cards");
  });

  it("a re-sort by countries re-ranks by countries, with its own joint marks and caption", () => {
    const host = document.body.appendChild(document.createElement("div"));
    const root = createRoot(host);
    act(() => root.render(<HubBoardView rows={hubRows} cards={<div>cards</div>} />));
    act(() => (host.querySelector("button[aria-pressed='false']") as HTMLButtonElement).click()); // Table
    const th = [...host.querySelectorAll("thead th")].find((t) => text(t).startsWith("Countries"))!;
    act(() => (th.querySelector("button") as HTMLButtonElement).click());
    const t = tableOf(host);
    const rows = bodyRows(t);
    const countries = rows.map((r) => Number(cell(r, 3)));
    expect(countries).toEqual([...countries].sort((a, b) => b - a));
    expect(rows.map((r) => cell(r, 0))).toEqual(expectedRanks(countries));
    expect(text(host.querySelector(`.${viewStyles.caption}`))).toBe("Ranked by countries · tap Certs to return");
    expect(th.getAttribute("aria-sort")).toBe("descending");
    expect(t.closest("[hidden]")).toBeNull();
    act(() => root.unmount());
    host.remove();
  });

  it("negative controls: the shipped tile top had no rank, and the canvas caption said plaques", () => {
    // app/afrobeats/page.tsx:218–221 on main e85e6efe.
    const shipped = dom(
      `<span class="${hubStyles.tileTop}"><span class="${hubStyles.flag}" aria-hidden="true">🇳🇬</span><span class="${hubStyles.anchorTag}">This site</span></span>`,
    );
    expect(shipped.querySelector(`.${hubStyles.tileRank}`)).toBeNull();
    // Data Modules.dc.html:185, the light table's caption.
    expect("Ranked by plaques · tap a column to re-sort").not.toBe(hubCaption("table", "certs"));
  });
});
