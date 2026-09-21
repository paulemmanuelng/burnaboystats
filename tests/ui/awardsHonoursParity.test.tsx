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
 * That was not a cosmetic loss. Two honours in the array then shared a title,
 * an org AND a year — a BRIT Billion Award for 1 billion UK streams and one
 * for 2 billion, both 2024, both BPI. The note was the ONLY field that
 * separated them, so on a phone the block published two identical rows and
 * the second looked like a duplicate someone had forgotten to delete.
 *
 * It WAS a duplicate, of a kind. Read at the BPI on 21 Sep 2026, the award has
 * one level (1 billion career UK streams) and Burna Boy received it once, on
 * 15 Jul 2024; the 2-billion card was retracted (RETRACTIONS.md #13). So the
 * pin flips: no two honours may share title/org/year any more — a second BRIT
 * Billion row coming back is the retracted claim returning — and every note
 * still has to render on the phone, because the note is what says what an
 * honour was for.
 *
 * The invariants are asserted at the data both layouts receive, not at markup:
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
  it("has no two honours that only their note could tell apart", () => {
    // RETRACTIONS.md #13: the one collision the data ever held was a second
    // BRIT Billion Award "for 2 billion UK streams", an award level the BPI
    // does not have. A collision here now means a retracted row has come back
    // — or a genuinely new same-year honour needs a note that says so.
    const seen = new Map<string, Honour[]>();
    for (const h of honours) {
      const k = withoutNote(h);
      seen.set(k, [...(seen.get(k) ?? []), h]);
    }
    const collisions = [...seen.values()].filter((g) => g.length > 1);
    expect(
      collisions.map((g) => withoutNote(g[0])),
      "two honours share title/org/year — the 2bn BRIT Billion card was retracted on 21 Sep 2026",
    ).toEqual([]);

    // And every honour carries a note, because the note is what the phone
    // renders to say what an honour was for.
    for (const h of honours) expect(h.note, `${h.title} (${h.year}) has no note`).toBeTruthy();
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

  it("renders exactly one BRIT Billion Award, with the note that dates it", () => {
    render(<MobileAwards {...props} />);

    // One level, one presentation (15 Jul 2024), one row. Two rows here is
    // RETRACTIONS #13 recurring; zero is the real honour gone.
    const brits = honours.filter((h) => h.title === "BRIT Billion Award");
    expect(brits.length, "the BRIT Billion Award has been renamed, removed or duplicated").toBe(1);
    expect(brits[0].note).toMatch(/1 billion career UK streams/);
    expect(brits[0].note).not.toMatch(/2 billion/);

    expect(screen.getAllByText("BRIT Billion Award")).toHaveLength(1);
    expect(screen.getByText(brits[0].note!)).toBeInTheDocument();
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
