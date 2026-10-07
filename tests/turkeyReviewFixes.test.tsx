import { describe, it, expect } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
  redirect: () => {
    throw new Error("redirect()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CountryPage from "../app/compare/in/[country]/page";
import VisualizedPage from "../app/records/visualized/page";
import CertificationsPage from "../app/certifications/page";
import compareStyles from "../app/compare/compare.module.css";
import mobileStyles from "../app/components/mobileCerts.module.css";
import explorerStyles from "../app/certifications/certifications.module.css";
import { updates } from "../app/data/updates";
import { CERT_THRESHOLDS, hasNoRegister } from "../app/data/certThresholds";
import { offRegisterHold, artistBySlug, plaqueLabel, topAward } from "../app/data/afrobeats";
import { certificationRule } from "../app/lib/offRegister";
import { findings } from "../app/lib/analysisFindings";
import { diamondCerts } from "../app/lib/analysis";
import { program } from "../app/compare/chips";
import { comparableArtists, priceRelease } from "../app/lib/certUnits";

/**
 * The two reviews of PR data/turkey-label-certs (7 Oct 2026). The data was
 * right; the copy around it gave Turkey a register, or made Sony Music Türkiye
 * the issuer of every Turkish plaque when Tyla's is Epic Records'. Each
 * negative control is the literal line the branch shipped before the fix.
 */

const textOf = (html: string) =>
  new DOMParser().parseFromString(html, "text/html").body.textContent!.replace(/\s+/g, " ").replace(/&#x27;/g, "'");

describe("Turkey has no register, and labels — plural — issue its plaques", () => {
  it("the 7 Oct feed line names Sony Music Türkiye as this plaque's issuer, not the country's", () => {
    const entry = updates.find((u) => u.date === "2026-10-07" && u.text.includes("Diamond in Turkey"))!;
    expect(entry.text).toBe(
      "“Dai Dai” is Diamond in Turkey, which has no register, so labels issue its plaques: Sony Music Türkiye certifies it at 75,000 units, and Sony Music's own plaque lifts Colombia to Platinum. A nineteenth country for the song, and Burna Boy's 251st plaque.",
    );
    expect(entry.text).not.toContain("which issues the country's plaques in place of a register");
    expect(entry.text.length).toBeLessThan(300);
  });

  it("the threshold note names record labels as the issuers and Sony Music Türkiye's as the one level", () => {
    const t = CERT_THRESHOLDS.TR;
    expect(t.labelLevel).toContain("its single plaques are issued by record labels");
    expect(t.labelLevel).not.toContain("issued by the label, Sony Music Türkiye");
    expect(t.albumExcluded).not.toContain("whose own plaques stand there");
    expect(hasNoRegister("TR")).toBe(true);
    for (const code of ["FR", "ZA", "CO", "GR", "UK"]) expect(hasNoRegister(code), code).toBe(false);
  });

  it("Tyla's exceptions clause says no register holds them, not 'the registers'", () => {
    expect(offRegisterHold(artistBySlug("tyla")!)).toBe("which no register holds");
    // A no-register country nowhere among the exceptions keeps the old words.
    expect(offRegisterHold(artistBySlug("tems")!)).toBe("which the register does not hold");
  });

  it("the methodology names Turkey as a market with no register on the board's line", () => {
    const rule = certificationRule();
    expect(rule).toContain("stands where the register holds no row or, as in Turkey, there is no register: ");
    expect(rule).not.toContain("a label's own plaque or announcement stands where the register holds no row: Tyla's");
  });
});

describe("/certifications: Dai Dai's Turkish Diamond names its issuer on both layouts", () => {
  // Turkey's listed body IS the label (no register exists there), so the
  // chips' "differs from the country's body" test drew no marker: the chip
  // read like a register Diamond beside Colombia's "Sony Music" and South
  // Africa's "Sony Music Africa", the label only in a hover a phone cannot
  // show (review of 7 Oct 2026).
  it("desktop explorer and phone ledger (its fold opened) both print Sony Music Türkiye as an issuer", async () => {
    const { container, unmount } = render(<CertificationsPage />);
    const issuerTexts = (s: { badgeProgram: string; badgeIssuer: string }) =>
      [...container.getElementsByClassName(s.badgeProgram)]
        .filter((el) => el.classList.contains(s.badgeIssuer))
        .map((el) => (el.textContent ?? "").trim());
    expect(issuerTexts(explorerStyles)).toContain("Sony Music Türkiye");
    // The phone ledger folds Dai Dai's 19 plaques to twelve; open every fold.
    for (const b of [...container.getElementsByClassName(mobileStyles.badgeMore)]) await act(async () => void fireEvent.click(b));
    expect(issuerTexts(mobileStyles)).toContain("Sony Music Türkiye");
    unmount();
  }, 120_000);
});

describe("/compare/in/turkey", () => {
  it("its source link names the site it opens, not a level that site does not print", async () => {
    const html = renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: "turkey" }) }));
    const d = new DOMParser().parseFromString(html, "text/html");
    const links = [...d.querySelectorAll(`a.${compareStyles.cbRegister}`)].map((a) => (a.textContent ?? "").replace(/\s+/g, " ").trim());
    expect(links.length).toBeGreaterThan(0);
    for (const l of links) expect(l).toBe("Sony Music Türkiye's site ↗");
    for (const l of links) expect(l).not.toBe("Sony Music Türkiye's own Diamond level ↗");
    // The board is still priced "at Sony Music Türkiye's own Diamond level" —
    // that is where the 75,000 comes from — in its copy, just not as a link.
    expect(textOf(html)).toContain("Sony Music Türkiye's own Diamond level");
  }, 120_000);

  it("Dai Dai's chip names its issuer, as Tyla's names Epic Records", () => {
    const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
    const line = priceRelease(burna, "Dai Dai", { includeNigeria: true, includeFeatures: true })!.byCountry.find((l) => l.country === "TR")!;
    expect(line.top).toMatchObject({ body: "Sony Music Türkiye", source: "label" });
    expect(program(line.top, "TR")).toBe("Sony Music Türkiye");
    expect(program({ body: "Epic Records", source: "label" }, "TR")).toBe("Epic Records");
    // Negative control: the chip as shipped, which had no `source` to read.
    expect(program({ body: "Sony Music Türkiye" }, "TR")).toBeNull();
  });
});

describe("Diamond copy that Turkey's one plaque made false", () => {
  it("/records/visualized groups the eight Diamonds by where they were awarded", () => {
    expect(diamondCerts).toHaveLength(8);
    const t = textOf(renderToStaticMarkup(<VisualizedPage />));
    expect(t).toContain(
      "crowned by 8 Diamond awards (Dai Dai in France and Turkey; Last Last, On the Low, Gbona, Location, Be Honest and Jerusalema (Remix) in France).",
    );
    // Negative control: seven titles for eight awards, "all in France and Turkey".
    expect(t).not.toContain("Be Honest and Jerusalema (Remix), all in France and Turkey)");
  }, 120_000);

  it("finding 3 counts records elsewhere instead of claiming a rate Turkey's one-in-one beats", () => {
    const body = findings.find((x) => x.id === "diamond-country")!.body.join(" ");
    expect(body).toContain("No other market has turned more than one of his records into a top-tier sales award.");
    expect(body).not.toContain("No other market comes close to converting his catalogue into top-tier sales awards at that rate.");
  });
});

describe("Tyla's highest award: the register's, never a label's", () => {
  // Left for the owner to confirm on 7 Oct 2026, when tier-then-multiplier put
  // the label-issued Turkish 3× Diamond (225,000 units) above Brazil's 2×
  // Diamond (register, 320,000 units). Paul ruled the same day — "yes keep
  // brazil": a label's own plaque never heads an artist's record
  // (lib/headlineAward; tests/headlineAward.test.tsx holds the rule).
  it("is Brazil's 2× Diamond, a Pro-Música Brasil register row", () => {
    const top = topAward(artistBySlug("tyla")!)!;
    expect(top).toMatchObject({ c: "BR", level: "Diamond", x: 2 });
    expect(top.source).toBeUndefined();
    expect(plaqueLabel(top)).toBe("2× Diamond");
    // Negative control: the label shipped on the hub tile after PR #435.
    expect(plaqueLabel(top)).not.toBe("3× Diamond · Epic Records");
  });
});
