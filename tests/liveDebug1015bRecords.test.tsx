import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AwardsPage from "../app/records/awards/page";
import awardStyles from "../app/components/mobileAwards.module.css";
import { totalWins, totalNominations, decidedNominations, pendingNominations } from "../app/data/awards";

/**
 * The live debug pass of 15 Oct 2026 (part 2), records lane (/records and its
 * pages, /on-this-day). One block per finding; each negative control is what
 * the site shipped (origin/main 6062f806), verbatim.
 */

const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");

// ── REC-8 ───────────────────────────────────────────────────────────────────

describe("REC-8: the awards strike rate names what it is taken over", () => {
  const cellOf = (doc: Document, label: string) =>
    [...doc.querySelectorAll(`.${awardStyles.statCell}`)].find((c) => words(c.querySelector(`.${awardStyles.statLabel}`)) === label)!;
  /** Whether a note under `total` says what its rate is a share of: either the
   *  rate is wins over the printed total, or the note prints its own base. */
  const honest = (note: string, total: number) => {
    const rate = Number(note.match(/^(\d+)%/)?.[1]);
    if (Math.round((totalWins / total) * 100) === rate) return true;
    const base = Number(note.match(/^\d+% of (\d+) decided/)?.[1]);
    return Math.round((totalWins / base) * 100) === rate && base < total;
  };

  it("the phone stat box: 35% of 238 decided, 11 pending, under 249 nominations", () => {
    expect(pendingNominations).toBeGreaterThan(0);
    const doc = parse(renderToStaticMarkup(<AwardsPage />));
    const cell = cellOf(doc, "Nominations");
    expect(words(cell.querySelector(`.${awardStyles.statValue}`))).toBe(String(totalNominations));
    const note = words(cell.querySelector(`.${awardStyles.statNote}`));
    const rate = Math.round((totalWins / decidedNominations) * 100);
    expect(note).toBe(`${rate}% of ${decidedNominations} decided, ${pendingNominations} pending`);
    expect(decidedNominations + pendingNominations).toBe(totalNominations);
    expect(honest(note, totalNominations)).toBe(true);
    // Two lines at 390 ("35% of 238 decided," / "11 pending"): a comma, so no
    // "·" ends the first.
    expect(note).not.toContain("·");
  });

  it("negative control: the shipped '35% strike rate' under 249 is neither 83/249 nor names its base", () => {
    const shipped = "35% strike rate";
    expect(Math.round((83 / 249) * 100)).toBe(33);
    // With the page's own figures: the rate is over the decided ones only.
    expect(honest(`${Math.round((totalWins / decidedNominations) * 100)}% strike rate`, totalNominations)).toBe(false);
    expect(shipped).not.toMatch(/decided|pending/);
  });
});
