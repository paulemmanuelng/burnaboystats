import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readdirSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { updates } from "../app/data/updates";
import { timelineEras } from "../app/data/timeline";
import { disputedCounts } from "../app/data/rejectedClaims";
import { allFirsts } from "../app/data/firsts";
import { openingClause } from "../app/lib/bandHeadline";
import TimelinePage from "../app/timeline/page";

/**
 * AfroBank FM, Grand Theft Auto VI — announced by Rockstar Games, 8 Oct 2026.
 *
 * Rockstar's Newswire ("The Music of Grand Theft Auto VI: In-Game Radio
 * Stations") and the game's music page (rockstargames.com/VI/music/afrobank)
 * name the station "AfroBank FM" and its hosts "Burna and Palmsy" — on-air
 * names, as for every host Rockstar announced. Rolling Stone, the same day:
 * Burna Boy and DJ Palms Trax. The game is due 19 November 2026
 * (rockstargames.com/VI).
 *
 * The lead came as fan posts on X, and the one that went furthest was wrong
 * twice: he co-hosts a station in the game, he does not own one; and the
 * Nigerian Afrobeat musician Femi Kuti hosted IF99 in Grand Theft Auto IV in
 * 2008 (Rockstar's own GTA IV music credits, "DJ Femi Kuti"). So the site
 * carries the station, names both hosts, and states no "first". Nor does it
 * say Femi Kuti was first: earlier games' DJs are actors whose nationality no
 * readable source settles.
 */

// The circulating lines, verbatim as Paul's screenshots of 8 Oct 2026 show
// them — the negative controls.
const BENNY = "Burna Boy makes history as the first and only African artist to own an in-game radio with AfroBank FM on GTA6";
const FELIX = "Burna Boy is the official host of AfroBank FM in GTA VI";

/** A superlative the record cannot carry. */
const claimsFirst = (t: string) => /\b(first|only)\b|makes history/i.test(t);
/** Ownership — a co-host owns nothing of a Rockstar station. */
const claimsOwnership = (t: string) => /\bown(s|ed)?\b/i.test(t);
/** Both hosts named, by the name Rockstar prints and the one behind it. */
const namesBothHosts = (t: string) => /Burna and Palmsy/.test(t) && /Palms Trax/.test(t);

const STATION = /AfroBank FM/;

describe("AfroBank FM: one dated updates entry", () => {
  const hits = updates.filter((u) => STATION.test(u.text));

  it("is logged once, on the day Rockstar announced it, and links to the timeline", () => {
    expect(hits).toHaveLength(1);
    const [u] = hits;
    expect(u.date).toBe("2026-10-08");
    expect(u.href).toBe("/timeline");
    expect(u.text.length).toBeLessThanOrEqual(300);
    expect(u.text).toContain("19 November");
  });

  it("names both hosts and claims no first, no only, no ownership", () => {
    const [u] = hits;
    expect(namesBothHosts(u.text)).toBe(true);
    expect(u.text).toMatch(/\bco-host\b/);
    expect(claimsFirst(u.text)).toBe(false);
    expect(claimsOwnership(u.text)).toBe(false);
  });

  it("its headline — the home band's — names him and the game", () => {
    expect(openingClause(hits[0].text)).toBe("Burna Boy will co-host a radio station in Grand Theft Auto VI");
  });

  it("negative controls: the circulating posts fail the same checks", () => {
    expect(claimsFirst(BENNY)).toBe(true);
    expect(claimsOwnership(BENNY)).toBe(true);
    expect(namesBothHosts(FELIX)).toBe(false);
    expect(namesBothHosts(BENNY)).toBe(false);
  });
});

describe("AfroBank FM on /timeline", () => {
  const era = timelineEras.find((e) => e.entries.some((x) => STATION.test(x.text)))!;
  const entry = era.entries.find((x) => STATION.test(x.text))!;
  const TITLE = "Co-host of AfroBank FM in Grand Theft Auto VI";

  it("is a dated 2026 career row, last in its era, with no calendar day of its own", () => {
    expect(era.span).toBe("2026");
    expect(era.entries.at(-1)).toBe(entry);
    expect(entry.date).toBe("8 Oct 2026");
    // Not "milestone" (whose badge read FIRST until J0-6), and no first flag.
    expect(entry.kind).toBe("career");
    expect(entry.first).toBeUndefined();
    expect(entry.otd).toBeUndefined();
    expect(entry.href).toBeUndefined();
    expect(entry.title).toBe(TITLE);
  });

  it("names both hosts and claims no first", () => {
    expect(namesBothHosts(entry.text)).toBe(true);
    expect(claimsFirst(`${entry.title} ${entry.text}`)).toBe(false);
    expect(claimsOwnership(entry.text)).toBe(false);
  });

  // The updates entry links here, so the row holds the detail: Rockstar's
  // Newswire as the source and the release date with its year
  // (rockstargames.com/VI: "November 19, 2026").
  it("carries the source and the release date the updates entry points to", () => {
    expect(entry.text).toContain("Rockstar Games' Newswire announces AfroBank FM");
    expect(entry.text).toContain("due on 19 November 2026");
    const [u] = updates.filter((x) => STATION.test(x.text));
    expect(u.text).toContain("19 November");
  });

  describe("the rendered row", () => {
    const html = renderToStaticMarkup(<TimelinePage />);
    const esc = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    /** The badge word printed beside a row's title, read off the page itself. */
    const badgeOf = (title: string) => {
      const m = new RegExp(`<h3[^>]*>${esc(title)}</h3><span[^>]*>([^<]+)</span>`).exec(html);
      return m ? m[1] : null;
    };
    /** Whether the ink "First" flag follows that badge (Job 0 colour roles,
     *  J0-6 with fix 5: a first is a flag from `first: true`, no longer the
     *  word the milestone badge wore). */
    const flaggedFirst = (title: string) =>
      new RegExp(`<h3[^>]*>${esc(title)}</h3><span[^>]*>[^<]*</span><span[^>]*>First</span>`).test(html);

    it("the page the updates entry links to prints it", () => {
      expect(html).toContain(TITLE);
      expect(html).toContain("8 Oct 2026");
      expect(html).toContain("due on 19 November 2026");
    });

    // The branch as first built filed the row as a "milestone" and the page
    // printed FIRST beside it — the very claim the row exists to refuse.
    it("wears a Career badge, never First", () => {
      expect(badgeOf(TITLE)).toBe("Career");
      expect(badgeOf(TITLE)).not.toBe("First");
      expect(flaggedFirst(TITLE)).toBe(false);
    });

    it("negative control: a shipped first on the same page still reads First", () => {
      const control = era.entries.find((x) => x.title === "60 million monthly listeners")!;
      expect(control.kind).toBe("milestone");
      expect(claimsFirst(control.text)).toBe(true);
      // Since J0-6 a milestone's badge reads "Milestone" and the first is the
      // ink flag beside it, driven by `first: true` (it is on firsts.ts).
      expect(control.first).toBe(true);
      expect(badgeOf("60 million monthly listeners")).toBe("Milestone");
      expect(flaggedFirst("60 million monthly listeners")).toBe(true);
    });
  });
});

describe("the circulating “first and only” is not repeated or debunked on the site", () => {
  // Owner's call (8 Oct 2026): the site states the station and no superlative;
  // it does not carry a /methodology row correcting the fan post.
  it("no rejected-claims row for the station", () => {
    expect(disputedCounts.filter((c) => STATION.test(`${c.claim} ${c.reason}`))).toEqual([]);
  });
});

describe("no first anywhere for the station", () => {
  it("the firsts list holds nothing about the game", () => {
    expect(allFirsts.filter((f) => /AfroBank|Grand Theft Auto|\bGTA\b|Rockstar/i.test(`${f.title} ${f.text}`))).toEqual([]);
  });

  it("no update or timeline line says Femi Kuti was first", () => {
    const lines = [...updates.map((u) => u.text), ...timelineEras.flatMap((e) => e.entries.map((x) => `${x.title} ${x.text}`))];
    expect(lines.filter((t) => /Femi Kuti[^.]*\bfirst\b/i.test(t))).toEqual([]);
  });

  it("no Rockstar artwork ships: nothing in public/ is named for the game or the station", () => {
    const walk = (dir: string): string[] =>
      readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)]));
    const root = join(process.cwd(), "public");
    const files = walk(root).map((f) => f.slice(root.length));
    expect(files.length).toBeGreaterThan(0);
    expect(files.filter((f) => /afrobank|rockstar|\bgta|grand-theft/i.test(f))).toEqual([]);
  });
});
