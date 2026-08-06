import { describe, it, expect } from "vitest";
import { CHART_COUNTRIES } from "../app/data/charts";
import { COUNTRIES as CERT_COUNTRIES } from "../app/data/certifications";
import { performedCountries } from "../app/data/performedCountries";
import { liveCharts } from "../app/data/liveCharts";
import { flagFor } from "../app/lib/flagFor";

// Flag emoji are two regional-indicator characters, and ANY letter pair forms
// one — 🇺🇰 or 🇽🇰 don't error, they just render as boxed letters on real
// devices. That bit us twice (kworb's "UK" label; Kosovo's user-assigned XK),
// so every flag in the data now has to be a code that actually has a glyph on
// Apple/Google keyboards, and every hardcoded flag string has to match the
// code it sits next to.

// ISO 3166-1 alpha-2 codes with an emoji flag on every major platform.
const FLAGGABLE = new Set(
  ("AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI " +
    "BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN " +
    "CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK " +
    "FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM " +
    "HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN " +
    "KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK " +
    "ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP " +
    "NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW " +
    "SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF " +
    "TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI " +
    "VN VU WF WS YE YT ZA ZM ZW").split(" ")
);

const flagOf = (iso: string) =>
  String.fromCodePoint(...[...iso].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65));

// A regional-indicator pair anywhere in a string.
const RIS_PAIR = /[\u{1F1E6}-\u{1F1FF}]{2}/u;

describe("every flag in the data renders as a real flag", () => {
  it("CHART_COUNTRIES flags match their codes", () => {
    for (const [code, meta] of Object.entries(CHART_COUNTRIES)) {
      if (!RIS_PAIR.test(meta.flag)) continue; // 🌍-style globals
      const iso = code === "UK" ? "GB" : code;
      expect(FLAGGABLE.has(iso), `${code} has no emoji flag`).toBe(true);
      expect(meta.flag, `${code} flag doesn't match its code`).toBe(flagOf(iso));
    }
  });

  it("certification COUNTRIES flags match their codes", () => {
    for (const [code, meta] of Object.entries(CERT_COUNTRIES)) {
      if (!RIS_PAIR.test(meta.flag)) continue;
      const iso = code === "UK" ? "GB" : code;
      expect(FLAGGABLE.has(iso), `${code} has no emoji flag`).toBe(true);
      expect(meta.flag, `${code} flag doesn't match its code`).toBe(flagOf(iso));
    }
  });

  it("performedCountries carry a real flag or none (Kosovo)", () => {
    for (const c of performedCountries) {
      if (c.flag === "") continue;
      const m = c.flag.match(RIS_PAIR);
      expect(m, `${c.name}: flag "${c.flag}" isn't a flag emoji`).not.toBeNull();
      const iso = [...m![0]]
        .map((ch) => String.fromCharCode(ch.codePointAt(0)! - 0x1f1e6 + 65))
        .join("");
      expect(FLAGGABLE.has(iso), `${c.name}: ${iso} has no emoji flag glyph`).toBe(true);
    }
  });

  it("every live-charts country code resolves through flagFor", () => {
    for (const release of liveCharts)
      for (const platform of release.platforms)
        for (const entry of platform.entries) {
          const flag = flagFor(entry.country);
          expect(flag, `${entry.country} (${entry.name}) gets no flag`).not.toBe("");
          if (RIS_PAIR.test(flag)) {
            const iso = [...flag]
              .map((ch) => String.fromCharCode(ch.codePointAt(0)! - 0x1f1e6 + 65))
              .join("");
            expect(FLAGGABLE.has(iso), `${entry.country}: ${iso} has no glyph`).toBe(true);
          }
        }
  });
});
