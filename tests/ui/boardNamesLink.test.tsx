import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { render, fireEvent, within } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/africas-biggest",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../../app/records/africas-biggest/page";
import MobileAfricasBiggest from "../../app/components/MobileAfricasBiggest";
import desk from "../../app/records/africas-biggest/africas-biggest.module.css";
import phone from "../../app/components/mobileAfricasBiggest.module.css";
import { statBoxes, HIGHLIGHT } from "../../app/data/africasBiggest";
import { africaBoards } from "../../app/lib/africaBoards";
import { afrobeatsArtists } from "../../app/data/afrobeats";

/**
 * R-12 (design review, 8 Oct 2026): only the 500M board linked its artists'
 * names; Rema, Tems, Tyla, CKay, Ayra Starr and Wizkid were plain text on the
 * other 19 boards. Every name with a page on the site now links to it on
 * every board, on both layouts: a board artist to /afrobeats/<slug>, Burna Boy
 * to the home page. Any other name stays plain.
 *
 * The expected page is worked out here from the roster, not from the page's
 * own helper, so the two cannot agree by sharing a mistake.
 */

const pageOf = (name: string): string | null => {
  if (name === HIGHLIGHT) return "/";
  const a = afrobeatsArtists.find((x) => x.name === name);
  return a ? `/afrobeats/${a.slug}` : null;
};
const norm = (el: Element | null) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
/** A phone row's name: the year board's rows lead with the flag ("🇳🇬 Wizkid"). */
const phoneName = (el: Element) => norm(el.querySelector("a")) || norm(el).replace(/^\p{Regional_Indicator}+\s*/u, "");

/** Each name that does not link where it should, in words. `name` reads the
 *  artist's name off the element that holds it (the link, or the text). */
function nameProblems(holders: Element[], name: (el: Element) => string): string[] {
  const out: string[] = [];
  for (const el of holders) {
    const n = name(el);
    const want = pageOf(n);
    const got = el.querySelector("a")?.getAttribute("href") ?? null;
    if (want !== got) out.push(`${n}: want ${want ?? "no link"}, got ${got ?? "no link"}`);
  }
  return out;
}

describe("R-12: artist names link on every Africa's Biggest board", () => {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(<AfricasBiggestPage />);

  it("the premise: board artists sit on boards other than the 500M one", () => {
    const named = statBoxes
      .filter((b) => b.id !== "most-500m-stream-songs" && b.layout === "list")
      .flatMap((b) => b.entries ?? [])
      .filter((e) => e.name !== HIGHLIGHT && pageOf(e.name));
    expect(named.length).toBeGreaterThan(20);
  });

  it("desktop, every list board: each name links to its page or stays plain", () => {
    const names = [...host.querySelectorAll(`.${desk.entryName}`)];
    expect(names.length).toBe(statBoxes.reduce((n, b) => n + (b.entries?.length ?? 0), 0));
    expect(nameProblems(names, norm)).toEqual([]);
  });

  it("desktop, the year board: each chip's name links the same way", () => {
    const chips = [...host.querySelectorAll(`.${desk.chip}`)];
    expect(chips.length).toBeGreaterThan(10);
    const nameIn = (c: Element) => norm(c.querySelector("a")) || [...c.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim();
    expect(nameProblems(chips, nameIn)).toEqual([]);
  });

  it("phone, every board as served: each row name links the same way", () => {
    const names = [...host.querySelectorAll(`.${phone.rowName}`)];
    expect(names.length).toBeGreaterThan(50);
    expect(nameProblems(names, phoneName)).toEqual([]);
  });

  it("phone, the year board: every year's rows link the same way", () => {
    const { container } = render(
      <MobileAfricasBiggest boards={africaBoards} leads={0} others={0} stats={[]} faqs={[]} />,
    );
    const yearBoard = container.querySelector(`.${phone.yearBoard}`)!;
    const pills = within(yearBoard as HTMLElement).getAllByRole("button");
    const wrong: string[] = [];
    for (const pill of pills) {
      fireEvent.click(pill);
      const rows = [...yearBoard.querySelectorAll(`.${phone.rowName}`)];
      wrong.push(...nameProblems(rows, phoneName).map((w) => `${pill.textContent}: ${w}`));
    }
    expect(pills.length).toBeGreaterThan(1);
    expect(wrong).toEqual([]);
  });

  it("each link is padded to a 24px target without growing its row, on both layouts", () => {
    for (const [file, sel] of [
      ["app/records/africas-biggest/africas-biggest.module.css", ".entryLink"],
      ["app/components/mobileAfricasBiggest.module.css", ".rowLink"],
    ]) {
      const css = readFileSync(join(process.cwd(), file), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
      const body = css.match(new RegExp(`(?:^|\\})\\s*\\${sel}\\s*\\{([^}]*)\\}`))?.[1] ?? "";
      expect(body, file).toMatch(/display:\s*inline-block/);
      expect(body, file).toMatch(/padding-block:\s*4px/);
      expect(body, file).toMatch(/margin-block:\s*-4px/);
    }
  });

  // Verbatim from https://burnaboystats.com/records/africas-biggest (live 8 Oct 2026).
  it("negative control: the shipped names, plain text on a list board and a year chip, are caught", () => {
    const shipped = document.createElement("div");
    shipped.innerHTML =
      `<span class="africas-biggest-module__mRA60W__entryName ">CKay</span>` +
      `<span class="africas-biggest-module__mRA60W__chip "><span class="africas-biggest-module__mRA60W__chipRank">2</span>Wizkid<span class="africas-biggest-module__mRA60W__chipValue">1.914B</span></span>`;
    expect(nameProblems([shipped.children[0]], norm)).toEqual(["CKay: want /afrobeats/ckay, got no link"]);
    const chipName = (c: Element) => [...c.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim();
    expect(nameProblems([shipped.children[1]], chipName)).toEqual(["Wizkid: want /afrobeats/wizkid, got no link"]);
  });
});
