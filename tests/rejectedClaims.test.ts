import { describe, it, expect } from "vitest";
import { unsourcedBodies, disputedCounts } from "../app/data/rejectedClaims";
import { ceremonies } from "../app/data/awards";

// This list publishes what the site refused to publish, which makes a stale
// entry uniquely embarrassing: it would be the site claiming it could not
// source something it now carries. That is not hypothetical — an earlier pass
// rejected a tenth Headies win for want of a source, a later one found it (2012
// Rookie of the Year, shared with Dammy Krane) and added it, and the rejection
// was nearly published anyway.

const winsFor = (fragment: string) =>
  ceremonies
    .filter((c) => c.name.toLowerCase().includes(fragment.toLowerCase()))
    .reduce((n, c) => n + c.noms.filter((x) => x.won).length, 0);

describe("rejected claims are still rejected", () => {
  it("names no body the site has since added", () => {
    // Each unsourced body must be absent from awards.ts. If one appears there,
    // the claim was sourced after all and this entry has to go.
    // Exact names, not substrings. The claim is that a body by THAT NAME has no
    // source — and the site does carry a "Ghana Music Awards" (Accra) and a
    // "Ghana Music Awards UK", neither of which is the "Ghana Music Awards USA"
    // being rejected. A substring match called that a contradiction; it is not.
    const names = new Set(ceremonies.map((c) => c.name.toLowerCase()));
    const contradicted = unsourcedBodies.filter((r) => {
      const key = r.claim.toLowerCase().replace(/[“”"]/g, "").split(" (")[0].trim();
      return names.has(key);
    });
    expect(
      contradicted.map((c) => c.claim),
      "listed as unsourced but present in awards.ts"
    ).toEqual([]);
  });

  it("quotes the site's real figure in every disputed count", () => {
    // "AFRIMMA — 10 wins" is only a useful rejection while the site says 8.
    expect(winsFor("AFRIMMA")).toBe(8);
    expect(winsFor("Metro FM")).toBe(3);
    expect(winsFor("BMI")).toBe(1);
    expect(winsFor("Galaxy")).toBe(1);
    expect(disputedCounts.length).toBe(4);
  });

  it("does not reject the Headies count the site now carries", () => {
    // The specific trap. The Headies stand at 10; nothing here may say otherwise.
    expect(winsFor("Headies")).toBe(10);
    const all = [...unsourcedBodies, ...disputedCounts].map((r) => r.claim.toLowerCase());
    expect(all.some((c) => c.includes("headies"))).toBe(false);
  });
});
