// The registry: ALL 28 register rows (SPEC §3), built or not, so the report is
// complete from step 1. A row not built yet renders "🧱 not built yet (step N)"
// with its human check — nothing is silently missing between build steps.
//
// class: AUTOMATE | WITH-CARE | MANUAL. "Automated registers" are the first
// two (23 rows); the headline counts clean reads out of those, derived from
// this list, never typed.

import { riaa, riaaLatin } from "./riaa.mjs";
import { musiccanada } from "./musiccanada.mjs";
import { bpi } from "./bpi.mjs";
import { snep } from "./snep.mjs";
import { zpav } from "./zpav.mjs";
import { ifpiSverige } from "./ifpi-sverige.mjs";
import { ifpiDanmark } from "./ifpi-danmark.mjs";
import { nvpi } from "./nvpi.mjs";
import { cnsIfpiCz, cnsIfpiSk } from "./cns-ifpi.mjs";
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

/** Rows 12–24, which step 3 delivers. Each carries what a human needs today. */
const LATER = [
  { id: "bvmi", country: "DE", body: "BVMI", class: "AUTOMATE", step: 3, hosts: ["www.musikindustrie.de"], registerUrl: "https://www.musikindustrie.de/markt-bestseller/gold-/platin-und-diamond-auszeichnungen/datenbank", humanCheck: "Search the BVMI Gold/Platin database for each name." },
  { id: "ifpi-austria", country: "AT", body: "IFPI Austria", class: "AUTOMATE", step: 3, hosts: ["ifpi.at"], registerUrl: "https://ifpi.at/auszeichnungen/", humanCheck: "Open https://ifpi.at/auszeichnungen/?fwp_per_page=100 and read the newest rows." },
  { id: "mahasz", country: "HU", body: "MAHASZ", class: "AUTOMATE", step: 3, hosts: ["slagerlistak.hu"], registerUrl: "https://slagerlistak.hu/arany-es-platinalemezek/adatbazis", humanCheck: "Open this year's MAHASZ database page and read the rows for the 16 names." },
  { id: "ifpi-greece", country: "GR", body: "IFPI Greece", class: "AUTOMATE", step: 3, hosts: ["www.ifpi.gr"], registerUrl: "https://ifpi.gr/digital_ien.html", humanCheck: "Open https://ifpi.gr/digital_ien.html and read the Award column for charting titles." },
  { id: "ifpi-norge", country: "NO", body: "IFPI Norge", class: "AUTOMATE", step: 3, hosts: ["ifpi.no"], registerUrl: "https://ifpi.no/trofe/trofeoversikt/", humanCheck: "Open https://ifpi.no/trofe/trofeoversikt/?pg=1 and read the newest trophies." },
  { id: "promusicae", country: "ES", body: "PROMUSICAE", class: "AUTOMATE", step: 3, hosts: ["www.elportaldemusica.es"], registerUrl: "https://www.elportaldemusica.es/awards/index", humanCheck: "Open https://www.elportaldemusica.es/awards/index for this week and last." },
  { id: "swisscharts", country: "CH", body: "IFPI Schweiz (swisscharts.com)", class: "WITH-CARE", step: 3, hosts: ["swisscharts.com"], registerUrl: "https://swisscharts.com/edelmetall/2026", humanCheck: "Open https://swisscharts.com/edelmetall/2026 (never hitparade.ch) and read the award cards." },
  { id: "rmnz", country: "NZ", body: "RMNZ (RadioScope)", class: "WITH-CARE", step: 3, hosts: ["www.radioscope.co.nz"], registerUrl: "https://www.radioscope.co.nz/2024/00/00/single-cert-search/", humanCheck: "Search RadioScope's single and album cert tables for each name; the latest row is the current tier." },
  { id: "promusica-co", country: "CO", body: "Pro Música Colombia", class: "WITH-CARE", step: 3, hosts: ["pro-musica.co"], registerUrl: "https://pro-musica.co/certificaciones-2/", humanCheck: "Open https://pro-musica.co/certificaciones-2/ and check whether a newer register PDF is linked (frozen since 21/02/2025)." },
  { id: "amprofon", country: "MX", body: "AMPROFON", class: "WITH-CARE", step: 3, hosts: ["amprofon.com.mx"], registerUrl: "https://amprofon.com.mx/es/pages/certificaciones.php", humanCheck: "Open https://amprofon.com.mx/es/pages/certificaciones.php in a browser and filter by artist." },
  { id: "fimi", country: "IT", body: "FIMI", class: "WITH-CARE", step: 3, hosts: ["www.fimi.it"], registerUrl: "https://www.fimi.it/top-of-the-music/certificazioni/", humanCheck: "Search FIMI's certificazioni page for each name, singles and albums, this year." },
  { id: "tcsn", country: "NG", body: "TurnTable (TCSN)", class: "WITH-CARE", step: 3, hosts: ["turntablecharts.com"], registerUrl: "https://turntablecharts.com/certification", humanCheck: "Open https://turntablecharts.com/certification (500-row cap, no Silver shown) and read the rows for the 16 names." },
  { id: "promusica-br", country: "BR", body: "Pro-Música Brasil", class: "WITH-CARE", step: 3, hosts: ["pro-musicabr.org.br"], registerUrl: "https://pro-musicabr.org.br/home-2/certificados/", humanCheck: "Search https://pro-musicabr.org.br/home-2/certificados/?busca_artista=<name> for each name." },
];

const BUILT = [riaa, riaaLatin, musiccanada, bpi, snep, zpav, ifpiSverige, ifpiDanmark, nvpi, cnsIfpiCz, cnsIfpiSk];

/** All 28 rows, in the spec's order: built adapters, later rows, manual rows. */
export const REGISTRY = [
  ...BUILT.map((a) => ({ ...a, built: true })),
  ...LATER.map((a) => ({ ...a, built: false, programme: null })),
  ...MANUAL.map((a) => ({ ...a, built: false, programme: null })),
];

export const AUTOMATED = REGISTRY.filter((r) => r.class === "AUTOMATE" || r.class === "WITH-CARE");
export const byId = (id) => REGISTRY.find((r) => r.id === id);
export const countryOf = (code) => COUNTRY[code] ?? { flag: "🏳️", name: code };
/** "🇺🇸 RIAA Latin" — what the report calls a register. */
export const registerName = (r) => `${countryOf(r.country).flag} ${r.programme ?? r.body}`;
