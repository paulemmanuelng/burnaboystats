import { renderToStaticMarkup } from "react-dom/server";

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

import AfricasBiggestPage from "../app/records/africas-biggest/page";
import desk from "../app/records/africas-biggest/africas-biggest.module.css";
import phone from "../app/components/mobileAfricasBiggest.module.css";
import { statBoxes, BOARD_SCOPES, HIGHLIGHT } from "../app/data/africasBiggest";
import { africaBoards } from "../app/lib/africaBoards";
import { read, winning } from "./fixtures/cssRules";

/**
 * J1-8 (design review 8 Oct 2026, fix 22): every Africa's Biggest board leads
 * with its scope, AFRICA, NIGERIA or WORLD, as an ink-outline tag above the
 * title on both layouts. Two boards are national (the source publishes no
 * African cut) and two are world boards; reading either as the pan-African
 * comparison the rest of the page makes is the mistake the tag prevents.
 * "He leads" sits at the right of the desktop tag row, in ink; the board meta
 * line is Geist on both layouts.
 */

const NIGERIA = ["daily-peak-streams-ng", "spotify-top-artists-peak"];
const WORLD = ["youtube-audience-world", "fastest-to-a-billion-youtube"];
const DESK_CSS = read("app/records/africas-biggest/africas-biggest.module.css");
const PHONE_CSS = read("app/components/mobileAfricasBiggest.module.css");
const top = (m: string | null) => m === null;
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const norm = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const doc = parse(renderToStaticMarkup(<AfricasBiggestPage />));

/** Why a board's head does not lead with its scope tag; [] when it does.
 *  By class name, so the shipped markup's hashed classes read the same way. */
function headProblems(card: Element, title: string): string[] {
  const tag = card.querySelector('[class*="scopeTag"]');
  const h = card.querySelector(title);
  if (!h) return ["no title"];
  if (!tag) return [`${norm(h)}: no scope tag`];
  if (!(tag.compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING)) return [`${norm(h)}: the tag is not before the title`];
  return [];
}

describe("J1-8: every board has a scope", () => {
  it("each board's scope is one of AFRICA, NIGERIA, WORLD", () => {
    expect([...BOARD_SCOPES]).toEqual(["AFRICA", "NIGERIA", "WORLD"]);
    for (const b of statBoxes) expect(BOARD_SCOPES as readonly string[], b.id).toContain(b.scope);
  });

  it("16 AFRICA, 2 NIGERIA, 2 WORLD, by id", () => {
    const of = (s: string) => statBoxes.filter((b) => b.scope === s).map((b) => b.id);
    expect(of("NIGERIA")).toEqual(NIGERIA);
    expect(of("WORLD")).toEqual(WORLD);
    expect(of("AFRICA")).toHaveLength(statBoxes.length - NIGERIA.length - WORLD.length);
    expect(statBoxes).toHaveLength(20);
  });

  it("the scope agrees with the board's own meta line: Nigerian artists = NIGERIA, all artists = WORLD", () => {
    for (const b of statBoxes) {
      expect(/\bNigerian artists\b/.test(b.meta), `${b.id}: ${b.meta}`).toBe(b.scope === "NIGERIA");
      expect(/\ball artists\b/.test(b.meta), `${b.id}: ${b.meta}`).toBe(b.scope === "WORLD");
    }
  });

  it("the phone boards carry the same scope as the data, board for board", () => {
    expect(africaBoards.map((b) => [b.id, b.scope])).toEqual(statBoxes.map((b) => [b.id, b.scope]));
  });
});

describe("J1-8: the tag leads the board on both layouts", () => {
  it("desktop: every board's tag comes before its title and prints its scope", () => {
    const cards = [...doc.querySelectorAll(`.${desk.box}`)];
    expect(cards).toHaveLength(statBoxes.length);
    for (const card of cards) {
      const title = norm(card.querySelector("h3"));
      const box = statBoxes.find((b) => b.title === title)!;
      expect(box, title).toBeTruthy();
      expect(headProblems(card, "h3")).toEqual([]);
      expect(norm(card.querySelector(`.${desk.scopeTag}`))).toBe(box.scope);
      // The tag sits in the head's first row; "He leads", when earned, beside it.
      const row = card.querySelector(`.${desk.tagRow}`)!;
      expect(row.firstElementChild?.classList.contains(desk.scopeTag), title).toBe(true);
      const leads = card.querySelector(`.${desk.leadsBadge}`);
      const heLeads = box.layout === "list" && box.entries?.[0]?.name === HIGHLIGHT;
      expect(Boolean(leads), title).toBe(heLeads);
      if (leads) expect(leads.parentElement).toBe(row);
    }
  });

  it("phone: every board's tag comes before its title and prints its scope; his badge stays in the head", () => {
    const boards = [...doc.querySelectorAll(`.${phone.board}`)];
    expect(boards).toHaveLength(africaBoards.length);
    boards.forEach((el, i) => {
      expect(headProblems(el, "h2")).toEqual([]);
      expect(norm(el.querySelector(`.${phone.scopeTag}`))).toBe(africaBoards[i].scope);
      expect(el.querySelector(`.${phone.boardHead} .${phone.boardBadge}`), africaBoards[i].id).not.toBeNull();
    });
  });

  it("the tag is an ink outline on --rule, never gold; 'He leads' stays ink and moves right", () => {
    for (const css of [DESK_CSS, PHONE_CSS]) {
      expect(winning(css, ".scopeTag", "border", top)).toBe("1px solid var(--rule)");
      expect(winning(css, ".scopeTag", "color", top)).toBe("var(--text)");
      expect(winning(css, ".scopeTag", "font-family", top)).toMatch(/--font-mono/);
      expect(winning(css, ".scopeTag", "text-transform", top)).toBe("uppercase");
    }
    expect(winning(DESK_CSS, ".leadsBadge", "color", top)).toBe("var(--text)");
    expect(winning(DESK_CSS, ".leadsBadge", "margin-left", top)).toBe("auto");
    expect(winning(DESK_CSS, ".scopeTag", "border-radius", top)).toBe("999px");
    expect(winning(PHONE_CSS, ".scopeTag", "border-radius", top)).toBe("4px");
  });

  it("the meta line is Geist at the caption step, muted, in its own case, on both layouts", () => {
    for (const [css, sel] of [[DESK_CSS, ".boxMeta"], [PHONE_CSS, ".boardMeta"]] as const) {
      expect(winning(css, sel, "font-family", top), sel).toMatch(/^var\(--font-geist-sans\)/);
      expect(winning(css, sel, "font-size", top), sel).toBe("var(--type-caption)");
      expect(winning(css, sel, "color", top), sel).toBe("var(--text-muted)");
      expect(winning(css, sel, "text-transform", top), sel).toBeUndefined();
    }
  });

  it("negative control: the heads as shipped (live 8 Oct 2026) lead with the title", () => {
    // Verbatim from https://burnaboystats.com/records/africas-biggest, 8 Oct 2026.
    const desktop = parse(
      `<div class="africas-biggest-module__mRA60W__box africas-biggest-module__mRA60W__boxFeatured"><div class="africas-biggest-module__mRA60W__boxHead"><div class="africas-biggest-module__mRA60W__boxHeadMain"><h3 class="africas-biggest-module__mRA60W__boxTitle africas-biggest-module__mRA60W__boxTitleBig">Highest Billboard Global 200 peak</h3><div class="africas-biggest-module__mRA60W__boxMeta">Billboard Global 200 · African artists · best peak</div></div><span class="africas-biggest-module__mRA60W__leadsBadge">He leads</span></div></div>`,
    ).body.firstElementChild!;
    expect(headProblems(desktop, "h3")).toEqual(["Highest Billboard Global 200 peak: no scope tag"]);
    const phoneHead = parse(
      `<div class="mobileAfricasBiggest-module__MpN2xW__board"><div class="mobileAfricasBiggest-module__MpN2xW__boardHead"><div class="mobileAfricasBiggest-module__MpN2xW__boardHeadMain"><h2 class="mobileAfricasBiggest-module__MpN2xW__boardTitle">Highest Billboard Global 200 peak</h2><div class="mobileAfricasBiggest-module__MpN2xW__boardMeta">Billboard Global 200 · African artists · best peak</div></div><span class="mobileAfricasBiggest-module__MpN2xW__boardBadge mobileAfricasBiggest-module__MpN2xW__boardBadgeLeads">Leads</span></div></div>`,
    ).body.firstElementChild!;
    expect(headProblems(phoneHead, "h2")).toEqual(["Highest Billboard Global 200 peak: no scope tag"]);
    // and the meta line as it shipped: mono caps in --dim.
    const shipped = `.boxMeta {\n  font-family: var(--font-mono), monospace;\n  font-size: 11px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--dim);\n  margin-top: 8px;\n}`;
    expect(winning(shipped, ".boxMeta", "font-family", top)).toMatch(/--font-mono/);
    expect(winning(shipped, ".boxMeta", "text-transform", top)).toBe("uppercase");
  });
});
