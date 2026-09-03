import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// The mobile screen's back button is a real app-router BackLink, which throws
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats/wizkid",
}));

import MobileCerts from "../../app/components/MobileCerts";
import type { Country, Release } from "../../app/data/certifications";
import {
  afrobeatsArtists,
  certCount,
  countryCount,
  countryMeta,
  type AfroArtist,
} from "../../app/data/afrobeats";

/**
 * MobileCerts is screen 02, reused by /certifications and by all of the
 * Afrobeats Board's artist pages. Its design leads with the total rather than a
 * worded title, so the total IS the <h1> — it reads "103 awards / 21 countries".
 *
 * On the board that heading is anonymous. The desktop layout's <h1> is the
 * artist's name, but the desktop half is display:none on a phone and therefore
 * out of the accessibility tree entirely, so the ONLY heading a screen-reader
 * user meets on an artist page was a bare number pair — the same one on every
 * artist, with nothing saying whose numbers they are. The name is restored
 * inside the <h1> visually hidden: a missing fact put back, not a redesign.
 *
 * Asserted through the rendered heading and across every artist the board
 * carries, because there is one component behind fifteen artist pages plus
 * Burna Boy's own — a nameless heading is fifteen pages wrong at once.
 */

const propsFor = (a: AfroArtist) => {
  const releases: Release[] = a.releases.map((r) => ({
    title: r.title,
    certs: r.certs.map((c) => ({ c: c.c, level: c.level, ...(c.x ? { x: c.x } : {}) })),
  }));
  const countries: Record<string, Country> = Object.fromEntries(
    [...new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c)))].map((code) => [
      code,
      countryMeta(code),
    ]),
  );
  return {
    releases,
    albums: releases.filter((_, i) => a.releases[i].kind === "Albums"),
    history: [],
    countries,
    total: certCount(a),
    countryCount: countryCount(a),
    covers: Object.fromEntries(a.releases.map((r) => [r.title, r.cover])),
    portraitSlug: a.slug,
    backHref: "/afrobeats",
    backLabel: a.name,
    subject: a.name,
    showActionBar: false,
  };
};

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const swept = afrobeatsArtists.filter((a) => a.swept);

describe("the mobile certifications <h1>", () => {
  it("names the artist on every swept board page", () => {
    expect(swept.length, "the board has no swept artists to check").toBeGreaterThan(1);

    for (const a of swept) {
      const { unmount } = render(<MobileCerts {...propsFor(a)} />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(
        h1.textContent,
        `the only <h1> a phone shows on /afrobeats/${a.slug} does not say whose ${certCount(
          a,
        )} plaques these are`,
      ).toContain(a.name);
      // The total stays in the heading too — the name is added to it, not
      // swapped in for it.
      expect(h1.textContent).toContain(String(certCount(a)));
      unmount();
    }
  });

  it("names the same subject in both layouts", () => {
    // The parity check proper, at the data each layout is handed rather than at
    // its markup: the desktop <h1> is the artist's name, so the mobile <h1>'s
    // subject has to be the same expression. A page that renamed one and not
    // the other would publish two headings about two different things.
    const page = read("app/afrobeats/[artist]/page.tsx");
    expect(page, "the desktop <h1> no longer renders the artist's name").toMatch(
      /<h1 className=\{styles\.title\}>\{a\.name\}<\/h1>/,
    );
    expect(page, "MobileCerts is not told whose page it is rendering").toMatch(
      /<MobileCerts[\s\S]*?\bsubject=\{a\.name\}/,
    );
    // And /certifications, the component's other caller, names its own subject
    // rather than leaning on the default.
    expect(read("app/certifications/page.tsx")).toMatch(
      /<MobileCerts[\s\S]*?\bsubject="Burna Boy"/,
    );
  });

  it("names Burna Boy on /certifications too", () => {
    // The default exists so the component can never render a nameless heading,
    // but the page passes its own subject rather than relying on it.
    const a = swept[0];
    const { subject: _drop, ...noSubject } = propsFor(a);
    render(<MobileCerts {...noSubject} />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain("Burna Boy");
  });
});
