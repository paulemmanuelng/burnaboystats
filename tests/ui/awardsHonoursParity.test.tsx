import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// The mobile screen's back button is a real app-router BackLink, which throws
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/awards",
}));

import MobileAwards from "../../app/components/MobileAwards";
import {
  ceremonies,
  honours,
  totalWins,
  totalNominations,
  ceremonyCount,
  honourCount,
  type Honour,
} from "../../app/data/awards";

/**
 * /records/awards ships both layouts in the same DOM — the desktop honours
 * grid inside a `.desktopOnly` div, MobileAwards beside it. Both read the same
 * `honours` array, and the desktop one renders `h.note` while the mobile one
 * dropped it.
 *
 * That is not a cosmetic loss. Two honours in the array share a title, an org
 * AND a year — the BRIT Billion Award for 1 billion UK streams and the one for
 * 2 billion, both 2024, both BPI. The note is the ONLY field that separates
 * them, so on a phone the block published two identical rows and the second
 * looked like a duplicate someone had forgotten to delete.
 *
 * The invariant is asserted at the data both layouts receive, not at markup:
 * identical markup fed different fields is exactly what a structural diff
 * cannot see.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

/** What a layout that renders only title/org/year would show for an honour. */
const withoutNote = (h: Honour) => `${h.title}|${h.org}|${h.year}`;

const props = {
  ceremonies,
  honours,
  stats: [{ value: String(totalWins), label: "wins", note: `from ${totalNominations} nominations` }],
  wins: totalWins,
  footNote: `${totalWins} wins across ${ceremonyCount} bodies, plus ${honourCount} honours.`,
  // Required, and nothing to do with the honours block: the screen renders the
  // page's FAQ because /records/awards emits FAQPage at every width and the
  // desktop copy of those answers is display:none on a phone. A fixture, not
  // the page's real questions — this file asserts nothing about them.
  faqs: [{ q: "How many awards has Burna Boy won?", a: `${totalWins} competitive wins.` }],
};

describe("the honours block on /records/awards", () => {
  it("has honours that only their note tells apart", () => {
    // Guard: if the data ever stops containing a collision, the tests below
    // would pass for the wrong reason.
    const seen = new Map<string, Honour[]>();
    for (const h of honours) {
      const k = withoutNote(h);
      seen.set(k, [...(seen.get(k) ?? []), h]);
    }
    const collisions = [...seen.values()].filter((g) => g.length > 1);
    expect(
      collisions.length,
      "no two honours share title/org/year any more — this suite no longer proves anything",
    ).toBeGreaterThan(0);

    // Every colliding group must be separable by its notes, or no layout can
    // render them distinguishably however hard it tries.
    for (const group of collisions) {
      expect(new Set(group.map((h) => h.note)).size).toBe(group.length);
    }
  });

  it("renders every honour's note on mobile, so no two rows read alike", () => {
    render(<MobileAwards {...props} />);

    for (const h of honours) {
      if (!h.note) continue;
      // getByText throws on more than one match, so this also proves the notes
      // themselves are unique on screen.
      expect(
        screen.getByText(h.note),
        `the mobile honours block drops the note for "${h.title}"`,
      ).toBeInTheDocument();
    }
  });

  it("renders both BRIT Billion Awards as distinguishable rows", () => {
    render(<MobileAwards {...props} />);

    const brits = honours.filter((h) => h.title === "BRIT Billion Award");
    expect(brits.length, "the two BRIT Billion Awards have been renamed or merged").toBe(2);

    // Two rows carrying the same title, and something on screen that separates
    // them: the 1bn note and the 2bn note.
    expect(screen.getAllByText("BRIT Billion Award")).toHaveLength(2);
    for (const h of brits) expect(screen.getByText(h.note!)).toBeInTheDocument();
  });

  it("keeps the note in both layouts", () => {
    // The desktop half is a server component page, so it is checked at source.
    // If either layout stops reading h.note, this fails rather than the bug
    // shipping to whichever layout nobody happened to be looking at.
    const desktop = read("app/records/awards/page.tsx");
    const mobile = read("app/components/MobileAwards.tsx");
    for (const [name, src] of [
      ["records/awards/page.tsx", desktop],
      ["MobileAwards.tsx", mobile],
    ] as const) {
      expect(src, `${name} must render each honour's note`).toMatch(/\bh\.note\b/);
    }
  });
});
