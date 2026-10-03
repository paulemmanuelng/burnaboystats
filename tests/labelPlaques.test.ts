import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  afrobeatsArtists,
  artistBySlug,
  countryMeta,
  labelPlaqueCount,
  labelPlaquePhrase,
} from "../app/data/afrobeats";
import { artistFaqs } from "../app/lib/boardFaqs";

// LABEL-ISSUED PLAQUES (owner's ruling, 3 Oct 2026: "cant you see the plaque").
//
// Tyla's South African plaques count on Sony Music Africa's framed award, the
// evidence the site already accepted for AKA's "All Eyes on Me" 19× — a plaque,
// not a RiSA register row. The ruling makes them count; it does not make the
// sentence "every figure is read from the certifying body's own register" true
// of them. That sentence shipped on Tyla's page, in her FAQPage structured data
// and on the board hub with the nine plaques beneath it (PR #400 review).
// These tests hold the copy to the data: an artist with a `source: "label"`
// cert never renders the unqualified claim.

const label = (slug: string) =>
  artistBySlug(slug)!.releases.flatMap((r) =>
    r.certs.filter((c) => c.source === "label").map((c) => `${r.title} · ${c.c} ${c.x ? `${c.x}× ` : ""}${c.level}`),
  );

describe("label-issued plaques are exactly the ruled ones", () => {
  it("Tyla's nine and Tems's featured No.1, all South African", () => {
    expect(label("tyla").sort()).toEqual(
      [
        "Tyla · ZA Platinum",
        "Water · ZA 5× Platinum",
        "Push 2 Start · ZA Gold",
        "Truth or Dare · ZA 3× Platinum",
        "Jump · ZA Platinum",
        "Art · ZA Platinum",
        "No.1 · ZA Gold",
        "Safer · ZA Gold",
        "Water (Remix) (ft. Travis Scott) · ZA Gold",
      ].sort(),
    );
    expect(label("tems")).toEqual(["No.1 · ZA Gold"]);
    const others = afrobeatsArtists.filter((a) => a.slug !== "tyla" && a.slug !== "tems");
    expect(others.filter((a) => labelPlaqueCount(a) > 0).map((a) => a.slug)).toEqual([]);
  });

  it("each names its issuer, not the country's register body", () => {
    for (const a of afrobeatsArtists)
      for (const r of a.releases)
        for (const c of r.certs.filter((x) => x.source === "label")) {
          expect(c.body, `${a.slug} · ${r.title} · ${c.c}`).toBe("Sony Music Africa");
          expect(c.body).not.toBe(countryMeta(c.c).body);
        }
  });

  it("one record, one answer: No.1 is the same plaque on both boards", () => {
    const find = (slug: string) =>
      artistBySlug(slug)!.releases.find((r) => r.title === "No.1")!.certs.find((c) => c.c === "ZA")!;
    expect(find("tems")).toEqual(find("tyla"));
  });

  it("phrases the exception from the data", () => {
    expect(labelPlaquePhrase(artistBySlug("tyla")!)).toBe("9 plaques in South Africa");
    expect(labelPlaquePhrase(artistBySlug("tems")!)).toBe("1 plaque in South Africa");
    expect(labelPlaquePhrase(artistBySlug("wizkid")!)).toBeUndefined();
  });
});

const UNQUALIFIED = "Every figure is read from the certifying body's own register, not from press coverage.";
const certAnswer = (slug: string) => artistFaqs(artistBySlug(slug)!)[0].a;

describe("the certifications FAQ (FAQPage structured data) qualifies the register claim", () => {
  it("for every swept artist, from the data", () => {
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      const answer = artistFaqs(a)[0].a;
      if (labelPlaqueCount(a) > 0) {
        expect(answer, a.slug).not.toContain(UNQUALIFIED);
        expect(answer, a.slug).toContain(
          `except ${labelPlaquePhrase(a)}, read from the label's own award, which the register does not hold.`,
        );
      } else {
        expect(answer, a.slug).toContain(UNQUALIFIED);
      }
    }
  });

  it("Tyla's answer, in full", () => {
    expect(certAnswer("tyla")).toMatch(
      /Every figure is read from the certifying body's own register, not from press coverage — except 9 plaques in South Africa, read from the label's own award, which the register does not hold\.$/,
    );
  });
});

// Every "issuing/certifying body's own register(s)" claim on the board's pages
// must carry the label clause within the same sentence. Read from source,
// because three of these are static strings no data change could ever move.
const BOARD_COPY = [
  "app/afrobeats/page.tsx",
  "app/afrobeats/[artist]/page.tsx",
  "app/afrobeats/[artist]/live/page.tsx",
  "app/afrobeats/opengraph-image.tsx",
  "app/components/MobileAfrobeatsHub.tsx",
  "app/lib/boardFaqs.ts",
];
const CLAIM = /(?:issuing|certifying)\s+bod(?:y|ies)(?:&apos;|&rsquo;|'|’)s?\s+own\s+registers?/g;
const unqualified = (src: string): string[] => {
  const flat = src.replace(/\s+/g, " ");
  return [...flat.matchAll(CLAIM)]
    .filter((m) => !/label/i.test(flat.slice(m.index!, m.index! + 220)))
    .map((m) => flat.slice(Math.max(0, m.index! - 40), m.index! + 80));
};

describe("no board page claims every plaque is a register row", () => {
  it.each(BOARD_COPY)("%s", (file) => {
    expect(unqualified(readFileSync(file, "utf8"))).toEqual([]);
  });

  it("negative control: the provenance line Tyla's page shipped", () => {
    // app/afrobeats/[artist]/page.tsx before this fix, verbatim.
    const shipped = `        <p className={styles.provenance}>
          Every figure read in an issuing body&apos;s own register — last verified{" "}
          {verifiedLong}. Counted by the same rules, set out in the{" "}
          <Link href="/methodology#principles">methodology</Link>: one plaque per title per
          country at its current tier, lead and featured credits both.
        </p>`;
    expect(unqualified(shipped)).toHaveLength(1);
  });

  it("negative control: the hub's share-card footer that shipped", () => {
    const shipped =
      "{`${(boardTotal + totalAwards()).toLocaleString(\"en-US\")} plaques, each read in an issuing body's own register`}";
    expect(unqualified(shipped)).toHaveLength(1);
  });
});
