// Countries where Burna Boy has performed live — compiled from his personal
// tours, festivals and one-off shows (see data/tours.ts) and cross-checked
// against press/setlist records, as of 27 June 2026. `code` is the numeric
// ISO 3166-1 id used by the generated map shapes (data/worldShapes.ts), so the
// map can match a country to its events. Only verified shows are listed.
//
// `events` are the notable appearances surfaced on hover (the map shows up to
// two). `more: true` means the country has further appearances beyond those —
// it drives the "…and more" hint. Countries with only one or two shows omit it.

export type Region =
  | "Africa"
  | "Europe"
  | "Asia"
  | "North America"
  | "South America"
  | "Caribbean"
  | "Oceania";

export interface PerformedCountry {
  name: string;
  code: number; // numeric ISO 3166-1 (matches worldShapes feature id)
  region: Region;
  flag: string;
  events: string[]; // notable shows/venues there (up to 2 shown on hover)
  more?: boolean; // true when there are further appearances beyond those listed
  // For tiny island nations too small to have a shape in the 110m base map, a
  // pre-projected dot position (same projection as worldShapes) so they still
  // appear and are hoverable.
  marker?: { x: number; y: number };
}

export const performedCountries: PerformedCountry[] = [
  // ── Africa ──
  { name: "Nigeria", code: 566, region: "Africa", flag: "🇳🇬", events: ["The Live Experience, Lagos (2021)", "NATIVELAND Festival, Lagos (2016)"], more: true },
  { name: "South Africa", code: 710, region: "Africa", flag: "🇿🇦", events: ["DStv Delicious Festival, Johannesburg (2022)"] },
  { name: "Ghana", code: 288, region: "Africa", flag: "🇬🇭", events: ["GTCO Music Concert, Accra (2025)"] },
  { name: "Kenya", code: 404, region: "Africa", flag: "🇰🇪", events: ["MadfunXperience, Nairobi (2025)"] },
  { name: "Uganda", code: 800, region: "Africa", flag: "🇺🇬", events: ["Burna Boy Xperience, Kampala (2019)", "Club MegaFest, Namboole Stadium (2014)"] },
  { name: "Zimbabwe", code: 716, region: "Africa", flag: "🇿🇼", events: ["Belgravia Sports Club, Harare (2022)"] },
  { name: "Morocco", code: 504, region: "Africa", flag: "🇲🇦", events: ["Mawazine Festival, Rabat (2024)", "AFCON 2025 Fan Zone finale, Rabat (2026)"] },
  { name: "Egypt", code: 818, region: "Africa", flag: "🇪🇬", events: ["El Gouna Conference & Cultural Center (2026)"] },

  // ── Europe ──
  { name: "United Kingdom", code: 826, region: "Europe", flag: "🇬🇧", events: ["London Stadium (2023 & 2024)", "The O2 Arena, London (2021)"], more: true },
  { name: "France", code: 250, region: "Europe", flag: "🇫🇷", events: ["Stade de France, Paris (2025)", "Accor Arena, Paris (2021)"], more: true },
  { name: "Netherlands", code: 528, region: "Europe", flag: "🇳🇱", events: ["Ziggo Dome, Amsterdam (2021)", "Rotterdam Ahoy (2021)"], more: true },
  { name: "Belgium", code: 56, region: "Europe", flag: "🇧🇪", events: ["ING Arena, Brussels (2026)", "Palais 12, Brussels (2019)"] },
  { name: "Ireland", code: 372, region: "Europe", flag: "🇮🇪", events: ["3Arena, Dublin (Mar & Dec 2022)"] },
  { name: "Spain", code: 724, region: "Europe", flag: "🇪🇸", events: ["FITZ, Madrid (2025)", "NAO Pool Club, Málaga (2025)"] },
  { name: "Italy", code: 380, region: "Europe", flag: "🇮🇹", events: ["Atlantico, Rome (2020)"] },
  { name: "Germany", code: 276, region: "Europe", flag: "🇩🇪", events: ["Waldbühne, Berlin (2025)", "Superbloom Festival, Munich (2024)"], more: true },
  { name: "Switzerland", code: 756, region: "Europe", flag: "🇨🇭", events: ["Hallenstadion, Zürich (2026)", "Geneva Arena (2022)"] },
  { name: "Sweden", code: 752, region: "Europe", flag: "🇸🇪", events: ["Avicii Arena, Stockholm (2026)"] },
  { name: "Norway", code: 578, region: "Europe", flag: "🇳🇴", events: ["Stavern Festival (2024)"] },
  { name: "Denmark", code: 208, region: "Europe", flag: "🇩🇰", events: ["Royal Arena, Copenhagen (2026)", "Roskilde Festival (2023)"] },
  { name: "Finland", code: 246, region: "Europe", flag: "🇫🇮", events: ["Flow Festival, Helsinki (2025)"] },
  { name: "Portugal", code: 620, region: "Europe", flag: "🇵🇹", events: ["Afro Nation, Portimão (2025 & 2026)", "MEO Kalorama, Lisbon (2024)"], more: true },
  { name: "Romania", code: 642, region: "Europe", flag: "🇷🇴", events: ["Untold Festival, Cluj-Napoca (2024)"] },
  { name: "Turkey", code: 792, region: "Europe", flag: "🇹🇷", events: ["UEFA Champions League final, Istanbul (2023)"] },

  // ── Asia / Middle East ──
  { name: "United Arab Emirates", code: 784, region: "Asia", flag: "🇦🇪", events: ["One Africa Music Festival, Dubai (2019)"] },

  // ── North America ──
  { name: "United States", code: 840, region: "North America", flag: "🇺🇸", events: ["Madison Square Garden, New York (2022)", "Citi Field, New York (2022)"], more: true },
  { name: "Canada", code: 124, region: "North America", flag: "🇨🇦", events: ["Scotiabank Arena, Toronto (2024 & 2025)", "Bell Centre, Montréal (2024)"], more: true },
  { name: "Mexico", code: 484, region: "North America", flag: "🇲🇽", events: ["FIFA World Cup Opening Ceremony, Mexico City (2026)"] },

  // ── South America ──
  { name: "Brazil", code: 76, region: "South America", flag: "🇧🇷", events: ["The Town festival, São Paulo (2025)"] },

  // ── Caribbean ──
  { name: "Jamaica", code: 388, region: "Caribbean", flag: "🇯🇲", events: ["National Stadium, Kingston (2022)"] },
  { name: "Barbados", code: 52, region: "Caribbean", flag: "🇧🇧", events: ["Tipsy Beach Party, Bridgetown (2022)"], marker: { x: 303, y: 190.8 } },
  { name: "Bahamas", code: 44, region: "Caribbean", flag: "🇧🇸", events: ["Nassau (2023)"] },
  { name: "St Kitts & Nevis", code: 659, region: "Caribbean", flag: "🇰🇳", events: ["St Kitts Music Festival (2023)"], marker: { x: 296.5, y: 177.1 } },

  // ── Oceania ──
  { name: "Australia", code: 36, region: "Oceania", flag: "🇦🇺", events: ["Qudos Bank Arena, Sydney (2025)", "Sidney Myer Music Bowl, Melbourne (2025)"], more: true },
  { name: "New Zealand", code: 554, region: "Oceania", flag: "🇳🇿", events: ["Afrosoul Festival, Auckland (2025)"] },
];

export const performedCodes = new Set(performedCountries.map((c) => c.code));
export const countryByCode = new Map(performedCountries.map((c) => [c.code, c]));

export const REGION_ORDER: Region[] = ["Africa", "Europe", "Asia", "North America", "South America", "Caribbean", "Oceania"];

export const countryCount = performedCountries.length;
export const regionCount = new Set(performedCountries.map((c) => c.region)).size;
