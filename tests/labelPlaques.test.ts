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
import { registerUrl, plaqueSource, certificationRows, CERT_HEADER } from "../app/lib/dataDownloads";
import {
  burnaLabelPlaques,
  boardLabelPlaques,
  boardAnnouncements,
  boardOffRegisterTotal,
  burnaAnnouncements,
  provenanceTileSentence,
  certificationRule,
} from "../app/lib/offRegister";
import { countryChipTitle, withIssuerProvenance, issuerProvenance } from "../app/lib/certs";
import type { Cert } from "../app/data/certifications";
import { allItems, COUNTRIES } from "../app/data/certifications";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";
import { comparableArtists, priceArtist, unitsForCert } from "../app/lib/certUnits";
import { GET as afrobeatsApi } from "../app/api/v1/afrobeats/route";

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
//
// And TURKEY (7 Oct 2026): a market with no certification register for singles
// or streaming, where Turkish single plaques are label-issued. Paul: label-
// issued Turkey plaques count — Burna Boy's "Dai Dai" Diamond, Sony Music
// Türkiye's — and for fairness Tyla's go in too: "Water" 3× Diamond, read off
// Epic Records' TYLA plaque. The first label plaque on the board outside South
// Africa, and the first whose issuer is not Sony Music Africa.

const label = (slug: string) =>
  artistBySlug(slug)!.releases.flatMap((r) =>
    r.certs.filter((c) => c.source === "label").map((c) => `${r.title} · ${c.c} ${c.x ? `${c.x}× ` : ""}${c.level}`),
  );

describe("label-issued plaques are exactly the ruled ones", () => {
  it("Tyla's eleven (nine from the award, Chanel from the label's post, Water's Turkish 3× Diamond) and Tems's featured No.1", () => {
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
        "Water · TR 3× Diamond",
      ].sort(),
    );
    expect(label("tems")).toEqual(["No.1 · ZA Gold"]);
    const others = afrobeatsArtists.filter((a) => a.slug !== "tyla" && a.slug !== "tems");
    expect(others.filter((a) => labelPlaqueCount(a) > 0).map((a) => a.slug)).toEqual([]);
  });

  it("each names its issuer, not the country's register body", () => {
    // South Africa's are Sony Music Africa's; Turkey's one is Epic Records'
    // plaque (7 Oct 2026). Turkey's own body is the label that issues Turkish
    // plaques, Sony Music Türkiye — not Epic — so the test still holds there.
    const ISSUER: Record<string, string> = { ZA: "Sony Music Africa", TR: "Epic Records" };
    for (const a of afrobeatsArtists)
      for (const r of a.releases)
        for (const c of r.certs.filter((x) => x.source === "label")) {
          expect(c.body, `${a.slug} · ${r.title} · ${c.c}`).toBe(ISSUER[c.c]);
          expect(c.body).not.toBe(countryMeta(c.c).body);
        }
  });

  it("one record, one answer: No.1 is the same plaque on both boards", () => {
    const find = (slug: string) =>
      artistBySlug(slug)!.releases.find((r) => r.title === "No.1")!.certs.find((c) => c.c === "ZA")!;
    expect(find("tems")).toEqual(find("tyla"));
  });

  it("phrases the exception from the data", () => {
    // Three groups since 7 Oct 2026 — South Africa, Turkey (a different
    // label's award), France — so the long form takes semicolons.
    expect(offRegisterPhrase(artistBySlug("tyla")!)).toBe(
      "10 certifications in South Africa, 9 read from the label's own plaque and 1 from its own announcement; 1 in Turkey, read from the label's own plaque; and 1 in France, read from SNEP's own announcement",
    );
    expect(offRegisterPhrase(artistBySlug("tyla")!, "short")).toBe(
      "10 certifications in South Africa, 9 from the label's own plaque and 1 from its own announcement; 1 in Turkey from the label's own plaque; 1 in France from SNEP's own announcement",
    );
    // Turkey has no register at all, so "the registers do not hold" gave it
    // one (review of 7 Oct 2026): with a no-register country among the
    // exceptions the clause is "which no register holds", true of every kind.
    expect(offRegisterHold(artistBySlug("tyla")!)).toBe("which no register holds");
    // 14 Nov 2026: "Raindance"'s 🇳🇬 2× Platinum is TurnTable's own article (Paul's
    // ruling), a second exception, in a second country's register.
    expect(offRegisterPhrase(artistBySlug("tems")!)).toBe(
      "1 certification in South Africa, read from the label's own plaque, and 1 in Nigeria, read from TurnTable's own announcement",
    );
    expect(offRegisterHold(artistBySlug("tems")!)).toBe("which the registers do not hold");
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
  // Two rulings: SNEP's own post for Tyla's album (3 Oct 2026), and, since 14 Nov
  // 2026, TurnTable's own news articles for TCSN tiers its register shows no row
  // for, or a lower one (Paul's ruling; docs/sweeps/targeted-sweep-2026-11-14.md):
  // nine Nigerian records, "With You" on two boards. "Fem" is the cautious
  // reading of two articles (Platinum, not 2×); "Work of Art" the stated 9×.
  const TCSN_ARTICLES: Record<string, string[]> = {
    tems: ["Raindance · NG 2× Platinum"],
    davido: ["With You · NG 5× Platinum", "Fem · NG Platinum", "B4 B4 · NG Silver"],
    "omah-lay": ["With You · NG 5× Platinum"],
    bnxn: ["The Game Needs Us - EP · NG Silver", "Back Outside · NG Platinum"],
    "ayra-starr": ["treat u right · NG Gold"],
    asake: ["Mr. Money With The Vibe · NG 9× Platinum", "Work of Art · NG 9× Platinum"],
  };

  it("Tyla's album in France, SNEP's own post of 6 Apr 2026; TurnTable's own articles in Nigeria; and nothing else", () => {
    expect(announced("tyla")).toEqual(["Tyla · FR Gold"]);
    for (const [slug, want] of Object.entries(TCSN_ARTICLES)) expect(announced(slug), slug).toEqual(want);
    const others = afrobeatsArtists.filter((a) => a.slug !== "tyla" && !(a.slug in TCSN_ARTICLES));
    expect(others.filter((a) => announcementCount(a) > 0).map((a) => a.slug)).toEqual([]);
  });

  it("each TurnTable article is dated, and named as the body's own site, not a register", () => {
    const ng = afrobeatsArtists.flatMap((a) =>
      a.releases.flatMap((r) => r.certs.filter((c) => c.source === "announcement" && c.c === "NG").map((c) => ({ a: a.slug, r: r.title, c }))),
    );
    expect(ng).toHaveLength(10);
    for (const { a, r, c } of ng) {
      expect(c.announced?.via, `${a} · ${r}`).toBe("its own news site");
      expect(c.announced?.on, `${a} · ${r}`).toMatch(/^2026-(0[6-9]|10)-\d{2}$/);
      expect(c.body, `${a} · ${r}`).toBeUndefined();
      expect(certProvenance(c), `${a} · ${r}`).toMatch(/^announced on its own news site, \d{1,2} \w{3} 2026$/);
    }
    // The cautious reading: the later article's Platinum, not the earlier 2×.
    const fem = artistBySlug("davido")!.releases.find((r) => r.title === "Fem")!.certs;
    expect(fem).toEqual([{ c: "NG", level: "Platinum", source: "announcement", announced: { via: "its own news site", on: "2026-08-23" } }]);
    // One record, one answer on the two boards that hold it.
    const withYou = (slug: string) => artistBySlug(slug)!.releases.find((r) => r.title === "With You")!.certs;
    expect(withYou("davido")).toEqual(withYou("omah-lay"));
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

  it("Tyla: 76 plaques, 12 of them off-register; the album holds 11", () => {
    const tyla = artistBySlug("tyla")!;
    expect(tyla.releases.reduce((n, r) => n + r.certs.length, 0)).toBe(76);
    expect(offRegisterCount(tyla)).toBe(12);
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
      /Every figure is read from the certifying body's own register, not from press coverage — except 10 certifications in South Africa, 9 read from the label's own plaque and 1 from its own announcement; 1 in Turkey, read from the label's own plaque; and 1 in France, read from SNEP's own announcement, which no register holds\.$/,
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

// Paul's ruling of 14 Nov 2026 admits TurnTable's own article where the
// register holds no row OR only a lower tier, and four of the board's article
// plaques sit on lower rows ("Raindance" Gold_1, "With You" Platinum_4 on two
// boards, "Fem" Gold). Every static statement of the board's rule says both,
// or a counted plaque has no stated route (the core-12 pattern).
const LOWER_TIER = /holds no row or only a lower tier, the body/;
const flatCopy = (src: string) => src.replace(/\s+/g, " ");

describe("the board's rule names the lower-tier route", () => {
  it.each(["app/afrobeats/page.tsx", "app/components/MobileAfrobeatsHub.tsx", "app/afrobeats/[artist]/live/page.tsx", "app/llms.txt/route.ts"])(
    "%s",
    (file) => {
      const src = flatCopy(readFileSync(file, "utf8"));
      expect(src).toMatch(LOWER_TIER);
      expect(src).not.toMatch(/holds no row, the body/);
    },
  );

  it("negative control: the hub lede as it shipped before the ruling", () => {
    // app/afrobeats/page.tsx at 95f142a1, verbatim.
    const shipped = `          every figure read in the issuing body&apos;s own register (or, where it holds no row, the
          body&apos;s own announcement or the label&apos;s own plaque) rather than taken from a fan tally.`;
    expect(flatCopy(shipped)).not.toMatch(LOWER_TIER);
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
    // Tyla 12, Tems 2, Davido 3, BNXN 2, Asake 2, Ayra Starr 1, Omah Lay 1: 13
    // until 14 Nov 2026, when TurnTable's own articles (Paul's ruling) added ten.
    expect(swept).toBe(23);
    // 7 Oct 2026: Colombia's Gold is Sony Music's Platinum, and Turkey's
    // Diamond is Sony Music Türkiye's (owner's ruling).
    expect(burnaLabelPlaques).toEqual([
      "“Dai Dai”'s Platinum in Colombia, issued by Sony Music",
      "“Dai Dai”'s Diamond in Turkey, issued by Sony Music Türkiye",
      "“All Eyes on Me”'s 19× Platinum in South Africa, issued by Sony Music Africa",
    ]);
    // 5–15 Oct 2026 this held Dai Dai's Danish Gold, read on IFPI Danmark's
    // Hitlisten chart with no register row yet (D-02). On 15 Oct the register
    // listed it (29.09.2026), so Burna Boy has no body announcement left.
    expect(burnaAnnouncements).toEqual([]);
    // The tile counts every one of them, Burna Boy's and the swept artists'.
    expect(boardOffRegisterTotal).toBe(burnaLabelPlaques.length + burnaAnnouncements.length + swept);
    expect(provenanceTileSentence()).toBe(
      `A figure with no register row behind it is published only where the body itself announced it or the label issued or announced the plaque — ${boardOffRegisterTotal} of the board's certifications, each named in the methodology.`,
    );
    // Negative controls: the tile as it shipped on 4 Oct 2026 (live /afrobeats),
    // as it shipped from 5 Oct, and from 7 Oct to 15 Oct with the Danish Gold.
    expect(provenanceTileSentence()).not.toContain("— 14 of the board's plaques");
    expect(provenanceTileSentence()).not.toContain("— 15 of the board's plaques");
    expect(provenanceTileSentence()).not.toContain("— 17 of the board's certifications");
  });

  it("the methodology names every one of them", () => {
    const rule = certificationRule();
    expect(rule).toMatch(
      /^A certification is only counted once it appears in the awarding body's own searchable database, or the body itself has published it\. In Burna Boy's own record, /,
    );
    expect([...boardLabelPlaques].sort()).toEqual([
      "Tems's “No.1” Gold in South Africa, issued by Sony Music Africa",
      "Tyla's 10 certifications in South Africa from Sony Music Africa — 9 on its own plaques and “Chanel” Gold, announced on its own X account, 8 Jan 2026",
      "Tyla's “Water” 3× Diamond in Turkey, issued by Epic Records",
    ]);
    // In board order. TurnTable's ten since 14 Nov 2026 (Paul's ruling).
    const tcsn = (who: string, what: string, on: string) =>
      `${who} ${what} in Nigeria, announced by TurnTable (TCSN) on its own news site, ${on}, and not in its database`;
    expect(boardAnnouncements).toEqual([
      tcsn("BNXN's", "“The Game Needs Us - EP” Silver", "14 Jun 2026"),
      tcsn("BNXN's", "“Back Outside” Platinum", "14 Jun 2026"),
      tcsn("Davido's", "“With You” 5× Platinum", "23 Aug 2026"),
      tcsn("Davido's", "“Fem” Platinum", "23 Aug 2026"),
      tcsn("Davido's", "“B4 B4” Silver", "23 Aug 2026"),
      tcsn("Tems's", "“Raindance” 2× Platinum", "15 Oct 2026"),
      "Tyla's “Tyla” Gold in France, announced by SNEP on its own X account, 6 Apr 2026, and not in its database",
      tcsn("Ayra Starr's", "“treat u right” Gold", "23 Aug 2026"),
      tcsn("Asake's", "“Mr. Money With The Vibe” 9× Platinum", "8 Sep 2026"),
      tcsn("Asake's", "“Work of Art” 9× Platinum", "17 Jun 2026"),
      tcsn("Omah Lay's", "“With You” 5× Platinum", "23 Aug 2026"),
    ]);
    for (const x of [...burnaLabelPlaques, ...burnaAnnouncements, ...boardLabelPlaques, ...boardAnnouncements]) expect(rule).toContain(x);
    // Paul's ruling of 14 Nov 2026 admits TurnTable's article where the register
    // shows no row OR a lower tier, and four of the ten sit on lower rows
    // ("Raindance" Gold, "With You" 4× on two boards, "Fem" Gold). The rule said
    // only the first half on PR #540's first push.
    expect(rule).toContain("the certifying body's own published announcement stands where its database omits the row or holds only a lower tier: ");
    expect(rule).not.toContain("stands where its database omits the row: ");
    // Tyla's Turkish 3× Diamond sits in a country with no register, so the
    // sentence names that route too (review of 7 Oct 2026); it said only
    // "where the register holds no row", which gave Turkey a register.
    expect(rule).toContain("On the Afrobeats board, a label's own plaque or announcement stands where the register holds no row or, as in Turkey, there is no register:");
    expect(rule).not.toContain("stands where the register holds no row: Tyla's");
    // The post announces a Gold; it does not say the label issued a plaque, so
    // the rule must not call all ten "issued by" — the wording this PR first
    // carried (PR #402 review).
    expect(rule).not.toContain("Tyla's 10 certifications in South Africa, issued by Sony Music Africa");
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

  // TurnTable's own articles (Paul's ruling, 14 Nov 2026) put Nigerian plaques
  // that are not register rows on six boards. The body's name carries its own
  // brackets, so the count's pair follows the name without them.
  it("Nigeria's chip takes one pair of brackets, not two", () => {
    expect(chip("davido", "NG")).toBe("Nigeria — TurnTable (3 not register rows)");
    expect(chip("tems", "NG")).toBe("Nigeria — TurnTable (1 not a register row)");
    expect(chip("asake", "NG")).toBe("Nigeria — TurnTable (2 not register rows)");
    // With no bracket after it, the body keeps its full name.
    expect(chip("wizkid", "NG")).toBe("Nigeria — TurnTable (TCSN)");
    // Negative control: the chip as PR #540's first push built it.
    expect(chip("davido", "NG")).not.toBe("Nigeria — TurnTable (TCSN) (3 not register rows)");
  });

  // Tyla's ZA chip now takes the mixed-kind branch, so the single-kind wording
  // #400 shipped ("…, label-issued plaques") is pinned on synthetic certs.
  const za = (provenance: string) => ({ c: "ZA", level: "Gold", body: "Sony Music Africa", provenance }) as Cert;

  it("one issuer, one kind: the single-kind wording #400 shipped", () => {
    expect(countryChipTitle("South Africa", "RiSA", [za("label-issued plaque"), za("label-issued plaque")])).toBe(
      "South Africa — Sony Music Africa, label-issued plaques",
    );
    expect(countryChipTitle("South Africa", "RiSA", [za("label-issued plaque")])).toBe(
      "South Africa — Sony Music Africa, label-issued plaque",
    );
  });

  it("one issuer, three kinds: commas and a final and", () => {
    expect(
      countryChipTitle("South Africa", "RiSA", [
        za("label-issued plaque"),
        za("label-issued plaque"),
        za("announced on its own X account, 8 Jan 2026"),
        za("announced on its own Instagram account, 2 Feb 2026"),
      ]),
    ).toBe(
      "South Africa — Sony Music Africa, 2 label-issued plaques, 1 announced on its own X account, 8 Jan 2026 and 1 announced on its own Instagram account, 2 Feb 2026",
    );
  });

  it("negative control: a country of register rows keeps the plain chip", () => {
    expect(chip("tyla", "US")).toBe("United States — RIAA");
    expect(chip("wizkid", "GB")).toBe(`${countryMeta("GB").name} — ${countryMeta("GB").body}`);
  });
});

// Debug pass, 3 Oct 2026 (tyla-totals-1): "All Eyes on Me"'s 19× Platinum is,
// by its own data comment, Sony Music Entertainment Africa's award and not a
// RiSA register row — the precedent Tyla's plaques were counted on — but it
// carried no `body`, so the CSV called it "RiSA … register", the API gave it
// no `source`, the methodology said "the one exception" and the hub tile said
// 13. The issuer is now named; every one of those derives from it, and the
// pricing does not move.

describe("Burna Boy's 'All Eyes on Me' 19× is Sony Music Africa's label plaque", () => {
  const release = () => allItems.find((r) => r.title === "All Eyes on Me")!;
  const za = () => release().certs.find((c) => c.c === "ZA")!;

  it("names its issuer as the board spells it", () => {
    expect(za()).toEqual({ c: "ZA", level: "Platinum", x: 19, body: "Sony Music Africa" });
    // The board's own spelling of the same label (Tyla's, Tems's plaques).
    const tylaWater = artistBySlug("tyla")!.releases.find((r) => r.title === "Water")!.certs.find((c) => c.c === "ZA")!;
    expect(za().body).toBe(tylaWater.body);
  });

  it("still prices at RiSA's levels: 19 × 40,000, and Burna Boy's /compare totals do not move", () => {
    expect(CERT_THRESHOLDS.ZA.single!.platinum).toBe(40_000);
    expect(unitsForCert(za(), "single").units).toBe(19 * 40_000);
    const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
    const stripped = {
      ...burna,
      releases: burna.releases.map((r) =>
        r.title === "All Eyes on Me" ? { ...r, certs: r.certs.map(({ body: _b, ...c }) => c) } : r,
      ),
    };
    for (const includeNigeria of [false, true])
      for (const includeFeatures of [false, true]) {
        const opts = { includeNigeria, includeFeatures };
        expect(priceArtist(burna, opts).total, JSON.stringify(opts)).toBe(priceArtist(stripped, opts).total);
      }
    // ‡ still applies: today's RiSA level, raised since the award.
    const line = priceArtist(burna, { includeNigeria: false, includeFeatures: true }).byCountry.find((l) => l.country === "ZA")!;
    expect(line.vintage).toBeTruthy();
  });

  it("the CSV calls it a label plaque and links no register", () => {
    expect(plaqueSource(za(), COUNTRIES.ZA)).toBe("label");
    const col = (row: unknown[], name: (typeof CERT_HEADER)[number]) => row[CERT_HEADER.indexOf(name)];
    const row = certificationRows.find((r) => col(r, "artist") === "Burna Boy" && col(r, "release") === "All Eyes on Me")!;
    expect(col(row, "certifying_body")).toBe("Sony Music Africa");
    expect(col(row, "certified_units")).toBe(760_000);
    expect(col(row, "register_url")).toBeNull();
    expect(col(row, "source")).toBe("label");
    // Negative control: the row that shipped ended "…,https://risa.org.za/,2026-09-30,register".
    expect(col(row, "register_url")).not.toBe("https://risa.org.za/");
  });

  it("the API gives the subject's off-register plaques a `source`, as the board's have", async () => {
    const d = (await (await afrobeatsApi()).json()).data;
    const certs = (title: string) => d.subject.releases.find((r: { title: string }) => r.title === title).certifications;
    expect(certs("All Eyes on Me")[0]).toMatchObject({ countryCode: "ZA", body: "Sony Music Africa", multiplier: 19, source: "label" });
    expect(certs("Dai Dai").find((c: { countryCode: string }) => c.countryCode === "CO")).toMatchObject({ body: "Sony Music", source: "label" });
    // Turkey's issuer IS Turkey's listed body (no register exists there); the
    // cert's own `source` still marks it (7 Oct 2026).
    expect(certs("Dai Dai").find((c: { countryCode: string }) => c.countryCode === "TR")).toMatchObject({ body: "Sony Music Türkiye", source: "label" });
    // Negative control: a register row carries none, as the description says.
    expect(certs("Last Last").find((c: { countryCode: string }) => c.countryCode === "UK")).not.toHaveProperty("source");
    // RIAA Latin is a programme of the register's own body, not an issuer.
    expect(certs("Dai Dai").find((c: { countryCode: string; body: string }) => c.countryCode === "US")).not.toHaveProperty("source");
  });

  it("the /certifications CO chip names the issuer (Sony Music since 7 Oct 2026), not the register", () => {
    const view = withIssuerProvenance(allItems);
    const inCountry = (code: string) => view.flatMap((r) => r.certs.filter((c) => c.c === code));
    expect(countryChipTitle(COUNTRIES.CO.name, COUNTRIES.CO.body, inCountry("CO"))).toBe(
      "Colombia — Sony Music, label-issued plaque",
    );
    // And Turkey's: the issuer is Turkey's own listed body, and the chip still
    // says what kind of plaque it is.
    expect(countryChipTitle(COUNTRIES.TR.name, COUNTRIES.TR.body, inCountry("TR"))).toBe(
      "Turkey — Sony Music Türkiye, label-issued plaque",
    );
    // Negative control, the title that shipped: the register body, which lists no such award.
    expect(countryChipTitle(COUNTRIES.CO.name, COUNTRIES.CO.body, allItems.flatMap((r) => r.certs.filter((c) => c.c === "CO")))).toBe(
      "Colombia — Pro Música Colombia",
    );
    expect(countryChipTitle(COUNTRIES.ZA.name, COUNTRIES.ZA.body, inCountry("ZA"))).toBe("South Africa — RiSA (1 not a register row)");
    // Register rows and programmes stay plain.
    expect(issuerProvenance({ c: "US", level: "Platinum", body: "RIAA Latin" })).toBeUndefined();
    expect(issuerProvenance({ c: "UK", level: "Gold" })).toBeUndefined();
  });
});

// Debug pass, 3 Oct 2026 (tyla-totals-3): the countries answer said "Each is
// awarded by that country's own certifying body" over Tyla's Sony Music Africa
// plaques — in FAQPage structured data. No answer may say it while the artist
// holds a plaque that is not a register row.
describe("the countries FAQ does not credit a label's plaque to the certifying body", () => {
  const SHIPPED = "Each is awarded by that country's own certifying body";
  const countriesAnswer = (slug: string) =>
    artistFaqs(artistBySlug(slug)!).find((f) => /^Which countries has /.test(f.q))?.a ?? "";

  it("for every swept artist, from the data", () => {
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      const answers = artistFaqs(a).map((f) => f.a).join(" ");
      if (offRegisterCount(a) > 0) expect(answers, a.slug).not.toContain(SHIPPED);
    }
    expect(countriesAnswer("tyla")).toContain("Each is awarded by the certifying body or label that issued it");
    expect(countriesAnswer("tems")).toContain("Each is awarded by the certifying body or label that issued it");
  });

  it("negative control: an all-register artist keeps the sentence that shipped", () => {
    expect(offRegisterCount(artistBySlug("wizkid")!)).toBe(0);
    expect(countriesAnswer("wizkid")).toContain(SHIPPED);
  });
});
