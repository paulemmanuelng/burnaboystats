import { allItems, COUNTRIES, features } from "../app/data/certifications";
import { CERT_PROGRAMS } from "../app/data/certThresholds";
import { burnaAnnouncements, burnaLabelPlaques, burnaOffRegisterPhrase } from "../app/lib/offRegister";
import { ALL_VIEW, type CertView } from "../app/lib/certScope";
import { artistBySlug, offRegisterPhrase } from "../app/data/afrobeats";

/**
 * Fix 21 (design review 8 Oct 2026, J1-5): Burna Boy's off-register line.
 * The board's offRegisterPhrase takes board artists only, and the canvas's
 * sample for his page — "2 plaques (Colombia, Turkey) from the label's own
 * announcement" — got the count, the countries and the evidence wrong. His
 * line comes from a helper built from the same rows as burnaLabelPlaques and
 * burnaAnnouncements: his label plaques by their evidence, the countries A–Z
 * in brackets; then each body's own publications, the body named from the
 * data and the publication called a chart when it is one. The words are the
 * board's (B-10): "certifications", and a label's "plaque", never an "award".
 */

const LEAD: CertView = { scope: "all", credit: "lead" };
const INTL: CertView = { scope: "intl", credit: "all" };
const BOTH: CertView = { scope: "intl", credit: "lead" };

describe("burnaOffRegisterPhrase", () => {
  it("the all view: three label plaques by evidence, A–Z, then Denmark's own chart", () => {
    expect(burnaOffRegisterPhrase()).toBe(
      "3 certifications from the label's own plaque (Colombia, South Africa, Turkey); 1 in Denmark from IFPI Denmark's own chart",
    );
    expect(burnaOffRegisterPhrase(ALL_VIEW)).toBe(burnaOffRegisterPhrase());
  });

  it("its counts are the rows burnaLabelPlaques and burnaAnnouncements are built from", () => {
    const [labels, posts] = burnaOffRegisterPhrase()!.split("; ");
    expect(Number(labels.match(/^(\d+) /)![1])).toBe(burnaLabelPlaques.length);
    expect(Number(posts.match(/^(\d+) /)![1])).toBe(burnaAnnouncements.length);
    // The countries are the label plaques' own, by name.
    const where = allItems.flatMap((r) => r.certs.filter((c) => c.body && !CERT_PROGRAMS[c.body]).map((c) => COUNTRIES[c.c].name));
    expect(labels).toContain(`(${[...new Set(where)].sort().join(", ")})`);
  });

  it("the body is named from the data (C-8: 'IFPI Denmark', not the fix sample's 'IFPI Danmark')", () => {
    expect(COUNTRIES.DK.body).toBe("IFPI Denmark");
    expect(burnaOffRegisterPhrase()).toContain(`from ${COUNTRIES.DK.body}'s own chart`);
    expect(burnaOffRegisterPhrase()).not.toContain("Danmark");
  });

  it("per view: features off drops 'All Eyes on Me' — a featured credit — and South Africa with it", () => {
    expect(features.map((r) => r.title)).toContain("All Eyes on Me");
    expect(burnaOffRegisterPhrase(LEAD)).toBe(
      "2 certifications from the label's own plaque (Colombia, Turkey); 1 in Denmark from IFPI Denmark's own chart",
    );
    expect(burnaOffRegisterPhrase(BOTH)).toBe(burnaOffRegisterPhrase(LEAD));
    // None of the four is in Nigeria, so the home switch changes nothing.
    expect(burnaOffRegisterPhrase(INTL)).toBe(burnaOffRegisterPhrase());
  });

  it("the board's words: 'certifications' and the label's 'plaque', as offRegisterPhrase says them", () => {
    const tyla = offRegisterPhrase(artistBySlug("tyla")!, "short")!;
    expect(tyla).toMatch(/^\d+ certifications in /);
    expect(tyla).toContain("from the label's own plaque");
    expect(burnaOffRegisterPhrase()).toMatch(/^\d+ certifications /);
    expect(burnaOffRegisterPhrase()).not.toMatch(/\baward\b|\bplaques\b/);
  });

  it("negative control: the canvas sample is not his line", () => {
    // Proof.dc.html §2, the Burna Boy frame's off-register slot, verbatim.
    const CANVAS = "2 plaques (Colombia, Turkey) from the label's own announcement";
    expect(burnaOffRegisterPhrase()).not.toBe(CANVAS);
    // Even with features off, where its countries come right, its count noun
    // and its evidence stay wrong.
    expect(burnaOffRegisterPhrase(LEAD)).not.toContain(CANVAS.split(" from ")[1]);
  });
});
