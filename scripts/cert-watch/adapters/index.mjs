// The registry: ALL 28 register rows (SPEC §3), built or not, so the report is
// complete from step 1. A row not built yet renders "🧱 not built yet (step N)"
// with its human check — nothing is silently missing between build steps.
//
// class: AUTOMATE | WITH-CARE | MANUAL. "Automated registers" are the first
// two (21 rows since the 24 Sep afternoon re-test); the headline counts clean
// reads out of those, derived from this list, never typed. A MANUAL row may be
// `heldBy` "robots" (BPI: enabled only by a written permission record) or
// "policy" (a register awaiting a ruling — none since 24 Sep 2026). RiSA and
// FIMI are plain MANUAL rows for good: owner ruling (SPEC §0.4), both ask not
// to be read by AI tools.

import { riaa, riaaLatin } from "./riaa.mjs";
import { musiccanada } from "./musiccanada.mjs";
import { bpi } from "./bpi.mjs";
import { snep } from "./snep.mjs";
import { zpav } from "./zpav.mjs";
import { ifpiSverige } from "./ifpi-sverige.mjs";
import { ifpiDanmark } from "./ifpi-danmark.mjs";
import { nvpi } from "./nvpi.mjs";
import { cnsIfpiCz, cnsIfpiSk } from "./cns-ifpi.mjs";
import { ifpiAustria } from "./ifpi-austria.mjs";
import { mahasz } from "./mahasz.mjs";
import { ifpiNorge } from "./ifpi-norge.mjs";
import { promusicae } from "./promusicae.mjs";
import { bvmi } from "./bvmi.mjs";
import { ifpiGreece } from "./ifpi-greece.mjs";
import { swisscharts } from "./swisscharts.mjs";
import { rmnz } from "./rmnz.mjs";
import { amprofon } from "./amprofon.mjs";
import { tcsn } from "./tcsn.mjs";
import { promusicaBr } from "./promusica-br.mjs";
import { MANUAL } from "./manual.mjs";

export const COUNTRY = {
  US: { flag: "🇺🇸", name: "United States" },
  CA: { flag: "🇨🇦", name: "Canada" },
  UK: { flag: "🇬🇧", name: "United Kingdom" },
  FR: { flag: "🇫🇷", name: "France" },
  PL: { flag: "🇵🇱", name: "Poland" },
  SE: { flag: "🇸🇪", name: "Sweden" },
  DK: { flag: "🇩🇰", name: "Denmark" },
  NL: { flag: "🇳🇱", name: "Netherlands" },
  CZ: { flag: "🇨🇿", name: "Czech Republic" },
  SK: { flag: "🇸🇰", name: "Slovakia" },
  DE: { flag: "🇩🇪", name: "Germany" },
  AT: { flag: "🇦🇹", name: "Austria" },
  HU: { flag: "🇭🇺", name: "Hungary" },
  GR: { flag: "🇬🇷", name: "Greece" },
  NO: { flag: "🇳🇴", name: "Norway" },
  ES: { flag: "🇪🇸", name: "Spain" },
  CH: { flag: "🇨🇭", name: "Switzerland" },
  NZ: { flag: "🇳🇿", name: "New Zealand" },
  CO: { flag: "🇨🇴", name: "Colombia" },
  MX: { flag: "🇲🇽", name: "Mexico" },
  IT: { flag: "🇮🇹", name: "Italy" },
  NG: { flag: "🇳🇬", name: "Nigeria" },
  BR: { flag: "🇧🇷", name: "Brazil" },
  BE: { flag: "🇧🇪", name: "Belgium" },
  AU: { flag: "🇦🇺", name: "Australia" },
  PT: { flag: "🇵🇹", name: "Portugal" },
  ZA: { flag: "🇿🇦", name: "South Africa" },
};

const BUILT = [
  riaa, riaaLatin, musiccanada, bpi, snep, zpav, ifpiSverige, ifpiDanmark, nvpi, cnsIfpiCz, cnsIfpiSk,
  ifpiAustria, mahasz, ifpiNorge, promusicae,
  bvmi, ifpiGreece, swisscharts, rmnz, amprofon, tcsn, promusicaBr,
];

/** The spec's order (SPEC §3): rows 1–22 automated or BPI, then the manual
 *  and held rows. */
const ORDER = [
  "riaa", "riaa-latin", "musiccanada", "bpi", "snep", "zpav", "ifpi-sverige", "ifpi-danmark", "nvpi", "cns-ifpi-cz", "cns-ifpi-sk",
  "ifpi-austria", "mahasz", "ifpi-norge", "promusicae", "bvmi", "ifpi-greece", "swisscharts", "rmnz", "amprofon", "tcsn", "promusica-br",
  "risa", "fimi", "promusica-co", "ultratop", "aria", "afp",
];

/** All 28 rows, in the spec's order. */
export const REGISTRY = [
  ...BUILT.map((a) => ({ ...a, built: true })),
  ...MANUAL.map((a) => ({ ...a, built: false, programme: null })),
].sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));

export const AUTOMATED = REGISTRY.filter((r) => r.class === "AUTOMATE" || r.class === "WITH-CARE");
export const byId = (id) => REGISTRY.find((r) => r.id === id);
export const countryOf = (code) => COUNTRY[code] ?? { flag: "🏳️", name: code };
/** "🇺🇸 RIAA Latin" — what the report calls a register. */
export const registerName = (r) => `${countryOf(r.country).flag} ${r.programme ?? r.body}`;
