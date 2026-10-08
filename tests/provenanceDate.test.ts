import { describe, it, expect } from "vitest";
import { monthStamp, shortStamp } from "../app/lib/dates";
import { p1DateParts, provDateText, sentenceDate, UNRECORDED, type ProvDate } from "../app/lib/provenance";
import { REVENUE_READ_ON } from "../app/lib/revenueSource";
import { HOT100_READ_ON } from "../app/data/hot100Weeks";
import { CERTS_VERIFIED_ON } from "../app/data/certifications";
import { lastUpdated } from "../app/lib/api";

/**
 * J0-13 (design review 8 Oct 2026): one date format inside the provenance
 * component. A day prints "7 Oct 2026"; a month the data records without a
 * day prints "Oct 2026" after "As of" ("as of Oct 2026" inside a sentence);
 * September is "Sep", never "Sept". A missing date never prints as one.
 * Long-form dates in prose ("7 October 2026") are copy, not this format.
 *
 * This tests the helpers the component formats through — provDateText,
 * p1DateParts and sentenceDate in app/lib/provenance.ts — and no parallel
 * pair beside them, so two helpers can never disagree. The rendered dates are
 * checked in tests/ui/provenanceSizes.test.tsx ("J0-13 inside the component").
 *
 * Every fixture is a real constant: the expected text is rebuilt here from
 * the ISO value by a month table that does not touch Intl, so the test checks
 * the format, not the day the data happens to hold.
 */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const byHand = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return d ? `${d} ${MONTHS[m - 1]} ${y}` : `${MONTHS[m - 1]} ${y}`;
};

/** The component's date, and nothing else: "7 Oct 2026", "Oct 2026" or "as of Oct 2026". */
const COMPONENT_DATE =
  /^(\d{1,2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}|(as of )?(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4})$/;

/** A sentence's date as the component writes it: "{kind} {date}". */
const inSentence = (d: ProvDate) => {
  const s = sentenceDate(d);
  return s.text ? `${s.kind} ${s.text}` : s.kind;
};

describe("J0-13: one date format", () => {
  it("a day prints as the short stamp, from the data's own constants", () => {
    for (const day of [REVENUE_READ_ON, HOT100_READ_ON, CERTS_VERIFIED_ON, lastUpdated]) {
      const d: ProvDate = { label: "Read", day };
      expect(provDateText(d), day).toBe(byHand(day));
      expect(provDateText(d)).toBe(shortStamp(day));
      expect(COMPONENT_DATE.test(provDateText(d))).toBe(true);
      expect(p1DateParts({ label: "Verified", day })).toEqual({ label: "Verified", text: byHand(day), dateTime: day });
      expect(inSentence({ label: "Chart dated", day })).toBe(`chart dated ${byHand(day)}`);
    }
  });

  it("every month is three letters: September is Sep, never Sept", () => {
    const year = CERTS_VERIFIED_ON.slice(0, 4);
    for (let m = 1; m <= 12; m++) {
      const ym = `${year}-${String(m).padStart(2, "0")}`;
      expect(provDateText({ label: "As of", month: ym })).toBe(byHand(ym));
      expect(provDateText({ label: "Read", day: `${ym}-15` })).toBe(byHand(`${ym}-15`));
      expect(provDateText({ label: "Read", day: `${ym}-15` })).not.toMatch(/Sept/);
    }
  });

  it("a month-only date reads 'As of {Mon yyyy}', and 'as of {Mon yyyy}' inside a sentence", () => {
    const ym = REVENUE_READ_ON.slice(0, 7);
    const d: ProvDate = { label: "As of", month: ym };
    expect(p1DateParts(d)).toEqual({ label: "As of", text: byHand(ym), dateTime: ym });
    expect(inSentence(d)).toBe(`as of ${byHand(ym)}`);
    expect(COMPONENT_DATE.test(inSentence(d))).toBe(true);
  });

  it("no date is never an invented date: an unrecorded read says so and prints no date", () => {
    const d: ProvDate = { label: "Read", unrecorded: true };
    expect(provDateText(d)).toBe("");
    expect(p1DateParts(d)).toEqual({ label: "Read date not recorded", text: "" });
    expect(inSentence(d)).toBe(UNRECORDED);
  });

  it("a malformed day or month throws rather than printing", () => {
    const [y, m, d] = REVENUE_READ_ON.split("-");
    // `${y}-${m}` is the dangerous one: Date reads it as the 1st of the month.
    for (const day of [`${y}/${m}/${d}`, `${y}${m}${d}`, `${d}-${m}-${y}`, `${y}-${m}`])
      expect(() => provDateText({ label: "Read", day }), day).toThrow();
    for (const month of [`${y}/${m}`, `${m}-${y}`, REVENUE_READ_ON]) {
      expect(() => monthStamp(month), month).toThrow();
      expect(() => provDateText({ label: "As of", month }), month).toThrow();
    }
  });

  it("negative controls: the dates the site shipped fail the format", () => {
    // /updates' phone list, 5 Oct 2026 (core-19): ICU's en-GB short September.
    expect(COMPONENT_DATE.test("30 Sept 2026")).toBe(false);
    // Phone /methodology, live 8 Oct 2026: "Data last reviewed 8 October 2026".
    expect(COMPONENT_DATE.test("Data last reviewed 8 October 2026".replace("Data last reviewed ", ""))).toBe(false);
    // /api, live 8 Oct 2026: "Data updated 2026-10-08".
    expect(COMPONENT_DATE.test("Data updated 2026-10-08".replace("Data updated ", ""))).toBe(false);
  });
});
