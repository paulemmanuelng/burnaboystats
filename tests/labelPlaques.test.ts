import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  afrobeatsArtists,
  artistBySlug,
  countryMeta,
  labelPlaqueCount,
  announcementCount,
  offRegisterCount,
  offRegisterPhrase,
  offRegisterHold,
  certProvenance,
} from "../app/data/afrobeats";
import { artistFaqs } from "../app/lib/boardFaqs";
import { registerUrl } from "../app/lib/dataDownloads";
import {
  burnaLabelPlaques,
  boardLabelPlaques,
  boardAnnouncements,
  boardOffRegisterTotal,
  provenanceTileSentence,
  certificationRule,
} from "../app/lib/offRegister";
import { countryChipTitle } from "../app/lib/certs";

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
//
// And BODY ANNOUNCEMENTS (3 Oct 2026): SNEP announced Tyla's album "Tyla" Or on
// its own verified X account on 6 Apr 2026, a row its searchable database does
// not list. The body is right, the register claim is not — so the same copy
// qualifies it (`source: "announcement"`).
//
// And a LABEL'S OWN ANNOUNCEMENT (3 Oct 2026): Sony Music Africa posted
// "CHANEL goes Gold in South Africa" on its verified X account on 8 Jan 2026.
// A label plaque by the same ruling, but its evidence is the post, not the
// framed award — `source: "label"` with `announced`, and the copy splits the
// two kinds.

const label = (slug: string) =>
  artistBySlug(slug)!.releases.flatMap((r) =>
    r.certs.filter((c) => c.source === "label").map((c) => `${r.title} · ${c.c} ${c.x ? `${c.x}× ` : ""}${c.level}`),
  );

describe("label-issued plaques are exactly the ruled ones", () => {
  it("Tyla's ten (nine from the award, Chanel from the label's post) and Tems's featured No.1, all South African", () => {
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
        "Chanel · ZA Gold",
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
    expect(offRegisterPhrase(artistBySlug("tyla")!)).toBe(
      "10 plaques in South Africa, 9 read from the label's own award and 1 from its own announcement, and 1 in France, read from SNEP's own announcement",
    );
    expect(offRegisterPhrase(artistBySlug("tyla")!, "short")).toBe(
      "10 plaques in South Africa (9 from the label's own award, 1 from its own announcement); 1 in France from SNEP's own announcement",
    );
    expect(offRegisterHold(artistBySlug("tyla")!)).toBe("which the registers do not hold");
    expect(offRegisterPhrase(artistBySlug("tems")!)).toBe("1 plaque in South Africa, read from the label's own award");
    expect(offRegisterHold(artistBySlug("tems")!)).toBe("which the register does not hold");
    expect(offRegisterPhrase(artistBySlug("wizkid")!)).toBeUndefined();
  });
});

describe("a label's own announcement: Tyla's Chanel, Sony Music Africa on X, 8 Jan 2026", () => {
  const chanel = () => artistBySlug("tyla")!.releases.find((r) => r.title === "Chanel")!.certs.find((c) => c.c === "ZA")!;

  it("is a label plaque naming its issuer, with the post's place and date", () => {
    expect(chanel()).toEqual({
      c: "ZA",
      level: "Gold",
      body: "Sony Music Africa",
      source: "label",
      announced: { via: "its own X account", on: "2026-01-08" },
    });
  });

  it("the hover reads 'South Africa — Sony Music Africa, announced on its own X account, 8 Jan 2026'", () => {
    const c = chanel();
    expect(`${countryMeta("ZA").name} — ${c.body ?? countryMeta("ZA").body}, ${certProvenance(c)}`).toBe(
      "South Africa — Sony Music Africa, announced on its own X account, 8 Jan 2026",
    );
    // Negative control: the award's plaques keep their own tail.
    const water = artistBySlug("tyla")!.releases.find((r) => r.title === "Water")!.certs.find((c) => c.c === "ZA")!;
    expect(certProvenance(water)).toBe("label-issued plaque");
  });

  it("the dataset calls it a label plaque and links no register", () => {
    expect(registerUrl(chanel(), countryMeta("ZA"))).toBeNull();
  });

  it("negative control: the phrase that shipped before it would now be false", () => {
    // offRegisterPhrase(tyla) at d134c4f5 (#400), verbatim — nine, all "from
    // the label's own award". With Chanel, ten, and one of them is a post.
    const shipped = "9 plaques in South Africa, read from the label's own award, and 1 in France, read from SNEP's own announcement";
    expect(offRegisterPhrase(artistBySlug("tyla")!)).not.toBe(shipped);
  });
});

const announced = (slug: string) =>
  artistBySlug(slug)!.releases.flatMap((r) =>
    r.certs.filter((c) => c.source === "announcement").map((c) => `${r.title} · ${c.c} ${c.x ? `${c.x}× ` : ""}${c.level}`),
  );

describe("body announcements the register omits are exactly the ruled ones", () => {
  it("Tyla's album in France, SNEP's own post of 6 Apr 2026, and nothing else", () => {
    expect(announced("tyla")).toEqual(["Tyla · FR Gold"]);
    const others = afrobeatsArtists.filter((a) => a.slug !== "tyla");
    expect(others.filter((a) => announcementCount(a) > 0).map((a) => a.slug)).toEqual([]);
  });

  it("names the body itself (no issuer override) and dates the post", () => {
    const fr = artistBySlug("tyla")!.releases.find((r) => r.title === "Tyla")!.certs.find((c) => c.c === "FR")!;
    expect(fr).toEqual({ c: "FR", level: "Gold", source: "announcement", announced: { via: "its own X account", on: "2026-04-06" } });
    expect(countryMeta("FR").body).toBe("SNEP");
    expect(certProvenance(fr)).toBe("announced on its own X account, 6 Apr 2026");
  });

  it("the hover reads 'France — SNEP, announced on its own X account, 6 Apr 2026'", () => {
    // The string the artist page and the explorer build: `${name} — ${body}, ${provenance}`.
    const fr = artistBySlug("tyla")!.releases.find((r) => r.title === "Tyla")!.certs.find((c) => c.c === "FR")!;
    expect(`${countryMeta("FR").name} — ${fr.body ?? countryMeta("FR").body}, ${certProvenance(fr)}`).toBe(
      "France — SNEP, announced on its own X account, 6 Apr 2026",
    );
    // A register row keeps the plain hover.
    const water = artistBySlug("tyla")!.releases.find((r) => r.title === "Water")!.certs.find((c) => c.c === "FR")!;
    expect(certProvenance(water)).toBeUndefined();
  });

  it("the dataset does not link it to a register that does not list it", () => {
    const fr = artistBySlug("tyla")!.releases.find((r) => r.title === "Tyla")!.certs.find((c) => c.c === "FR")!;
    expect(registerUrl(fr, countryMeta("FR"))).toBeNull();
    const water = artistBySlug("tyla")!.releases.find((r) => r.title === "Water")!.certs.find((c) => c.c === "FR")!;
    expect(registerUrl(water, countryMeta("FR"))).toBe(countryMeta("FR").url);
  });

  it("Tyla: 75 plaques, 11 of them off-register; the album holds 11", () => {
    const tyla = artistBySlug("tyla")!;
    expect(tyla.releases.reduce((n, r) => n + r.certs.length, 0)).toBe(75);
    expect(offRegisterCount(tyla)).toBe(11);
    expect(tyla.releases.find((r) => r.title === "Tyla")!.certs).toHaveLength(11);
  });
});

const UNQUALIFIED = "Every figure is read from the certifying body's own register, not from press coverage.";
const certAnswer = (slug: string) => artistFaqs(artistBySlug(slug)!)[0].a;

describe("the certifications FAQ (FAQPage structured data) qualifies the register claim", () => {
  it("for every swept artist, from the data", () => {
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      const answer = artistFaqs(a)[0].a;
      if (offRegisterCount(a) > 0) {
        expect(answer, a.slug).not.toContain(UNQUALIFIED);
        expect(answer, a.slug).toContain(`except ${offRegisterPhrase(a)}, ${offRegisterHold(a)}.`);
      } else {
        expect(answer, a.slug).toContain(UNQUALIFIED);
      }
    }
  });

  it("Tyla's answer, in full", () => {
    expect(certAnswer("tyla")).toMatch(
      /Every figure is read from the certifying body's own register, not from press coverage — except 10 plaques in South Africa, 9 read from the label's own award and 1 from its own announcement, and 1 in France, read from SNEP's own announcement, which the registers do not hold\.$/,
    );
  });
});

// Every "issuing/certifying body's own register(s)" claim on the board's pages
// must carry the label clause within the same sentence — and, since SNEP's
// announced Tyla album (3 Oct 2026), the announcement clause too, unless it
// derives its exceptions from the data (offRegisterPhrase). Read from source,
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
    .filter((m) => {
      const after = flat.slice(m.index!, m.index! + 260);
      return !(/offRegister/.test(after) || (/label/i.test(after) && /announcement/i.test(after)));
    })
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

  it("negative control: the hub lede this PR's first fix wrote, before SNEP's announcement", () => {
    // app/afrobeats/page.tsx at 05eb3899, verbatim: names the label, not the announcement.
    const shipped = `          every figure read in the issuing body&apos;s own register (or, where it holds no row, the
          label&apos;s own award) rather than taken from a fan tally.`;
    expect(unqualified(shipped)).toHaveLength(1);
  });

  it("negative control: the hub's share-card footer that shipped", () => {
    const shipped =
      "{`${(boardTotal + totalAwards()).toLocaleString(\"en-US\")} plaques, each read in an issuing body's own register`}";
    expect(unqualified(shipped)).toHaveLength(1);
  });
});

// The board's two "where the figures come from" statements — the hub's
// Provenance tile and the methodology's Certifications card it links to — said
// a figure with no register behind it is never published or counted, over the
// board's label plaques and SNEP's announced Or (PR #400 review, second pass).
// Both now come from app/lib/offRegister.ts, and these hold them to the data.
const ABSOLUTE = [
  /no register (?:row )?behind it is not published/i,
  /nothing is published here that has not\s+been read/i,
  /only counted once it appears in the awarding body(?:&apos;|')s own searchable database\./i,
];
const absolute = (src: string): string[] =>
  ABSOLUTE.flatMap((re) => {
    const m = src.replace(/\s+/g, " ").match(re);
    return m ? [m[0]] : [];
  });

describe("the hub tile and the methodology card name what stands without a register row", () => {
  it.each([...BOARD_COPY, "app/methodology/page.tsx", "app/components/MobileMethodology.tsx"])("%s", (file) => {
    expect(absolute(readFileSync(file, "utf8"))).toEqual([]);
  });

  it("negative control: the Provenance tile that shipped", () => {
    // app/afrobeats/page.tsx at 20407662, verbatim.
    const shipped = `                {sweptArtists.length} register sweeps — RIAA, BPI, SNEP, TurnTable and their
                equivalents — re-read at each sweep, last on {sweptRange}. A figure with no
                register behind it is not published.`;
    expect(absolute(shipped)).toHaveLength(1);
  });

  it("negative control: the One-rule tile that shipped", () => {
    const shipped = `                plaques, fan tallies are not registers, and nothing is published here that has
                not been read at source.`;
    expect(absolute(shipped)).toHaveLength(1);
  });

  it("negative control: the methodology rule that shipped", () => {
    const shipped =
      "`Official certification databases of each market — the RIAA (US), BPI (UK), SNEP (France), BVMI (Germany), FIMI (Italy) and others. A certification is only counted once it appears in the awarding body's own searchable database.${labelPlaqueClause}`,";
    expect(absolute(shipped)).toHaveLength(1);
  });

  it("the tile counts every off-register plaque on the board, Burna Boy's included", () => {
    const swept = afrobeatsArtists.filter((a) => a.swept).reduce((n, a) => n + offRegisterCount(a), 0);
    expect(swept).toBe(12); // Tyla 11, Tems 1
    expect(burnaLabelPlaques).toEqual(["“Dai Dai”'s Gold in Colombia, issued by Sony Music Colombia"]);
    expect(boardOffRegisterTotal).toBe(13);
    expect(provenanceTileSentence()).toBe(
      "A figure with no register row behind it is published only where the body itself announced it or the label issued or announced the plaque — 13 of the board's plaques, each named in the methodology.",
    );
  });

  it("the methodology names every one of them", () => {
    const rule = certificationRule();
    expect(rule).toMatch(
      /^A certification is only counted once it appears in the awarding body's own searchable database, or the body itself has published it\. In Burna Boy's own record, /,
    );
    expect([...boardLabelPlaques].sort()).toEqual([
      "Tems's “No.1” Gold in South Africa, issued by Sony Music Africa",
      "Tyla's 10 plaques in South Africa, issued by Sony Music Africa, one of them, “Chanel” Gold, announced on its own X account, 8 Jan 2026",
    ]);
    expect(boardAnnouncements).toEqual([
      "Tyla's “Tyla” Gold in France, announced by SNEP on its own X account, 6 Apr 2026, and not in its database",
    ]);
    for (const x of [...burnaLabelPlaques, ...boardLabelPlaques, ...boardAnnouncements]) expect(rule).toContain(x);
    expect(rule).toContain("On the Afrobeats board, a label's own plaque or announcement stands where the register holds no row:");
    // Every swept artist with an off-register plaque is named.
    for (const a of afrobeatsArtists.filter((x) => x.swept && offRegisterCount(x) > 0)) expect(rule).toContain(`${a.name}'s`);
  });
});

describe("the country filter chip says when a country's plaques are not register rows", () => {
  const chip = (slug: string, code: string) => {
    const certs = artistBySlug(slug)!.releases.flatMap((r) =>
      r.certs.filter((c) => c.c === code).map((c) => ({ ...c, provenance: certProvenance(c) })),
    );
    return countryChipTitle(countryMeta(code).name, countryMeta(code).body, certs);
  };

  it("Tyla's ZA chip names the label, not RiSA", () => {
    expect(chip("tyla", "ZA")).toBe(
      "South Africa — Sony Music Africa, 9 label-issued plaques and 1 announced on its own X account, 8 Jan 2026",
    );
    expect(chip("tems", "ZA")).toBe("South Africa — RiSA (1 not a register row)");
    expect(chip("tyla", "FR")).toBe("France — SNEP (1 not a register row)");
  });

  it("negative control: a country of register rows keeps the plain chip", () => {
    expect(chip("tyla", "US")).toBe("United States — RIAA");
    expect(chip("wizkid", "GB")).toBe(`${countryMeta("GB").name} — ${countryMeta("GB").body}`);
  });
});
