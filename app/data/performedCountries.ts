// Countries where Burna Boy has performed live — compiled from his personal
// tours, festivals and one-off shows (see data/tours.ts) and cross-checked
// against press/setlist records, as of 26 June 2026. `code` is the numeric
// ISO 3166-1 id used by the world-atlas TopoJSON, so the map can match shapes.
// Only verified live performances are listed; it grows as more are confirmed.

export type Region =
  | "Africa"
  | "Europe"
  | "North America"
  | "Caribbean"
  | "Oceania";

export interface PerformedCountry {
  name: string;
  code: number; // numeric ISO 3166-1 (matches world-atlas topojson feature id)
  region: Region;
  flag: string;
  highlight: string; // a notable show or venue there
}

export const performedCountries: PerformedCountry[] = [
  // ── Africa ──
  { name: "Nigeria", code: 566, region: "Africa", flag: "🇳🇬", highlight: "Lagos homecoming shows (The Live Experience)" },
  { name: "South Africa", code: 710, region: "Africa", flag: "🇿🇦", highlight: "DStv Delicious Festival" },
  { name: "Ghana", code: 288, region: "Africa", flag: "🇬🇭", highlight: "Accra Sports Stadium (2024)" },
  { name: "Kenya", code: 404, region: "Africa", flag: "🇰🇪", highlight: "Uhuru Gardens, Nairobi (2025)" },
  { name: "Morocco", code: 504, region: "Africa", flag: "🇲🇦", highlight: "Mawazine Festival, Rabat (2024)" },

  // ── Europe ──
  { name: "United Kingdom", code: 826, region: "Europe", flag: "🇬🇧", highlight: "London Stadium (2023 & 2024)" },
  { name: "France", code: 250, region: "Europe", flag: "🇫🇷", highlight: "Stade de France, Paris (2025)" },
  { name: "Netherlands", code: 528, region: "Europe", flag: "🇳🇱", highlight: "Ziggo Dome, Amsterdam" },
  { name: "Belgium", code: 56, region: "Europe", flag: "🇧🇪", highlight: "ING Arena, Brussels (2026)" },
  { name: "Germany", code: 276, region: "Europe", flag: "🇩🇪", highlight: "Waldbühne, Berlin (2025)" },
  { name: "Switzerland", code: 756, region: "Europe", flag: "🇨🇭", highlight: "Hallenstadion, Zurich" },
  { name: "Sweden", code: 752, region: "Europe", flag: "🇸🇪", highlight: "Avicii Arena, Stockholm (2026)" },
  { name: "Denmark", code: 208, region: "Europe", flag: "🇩🇰", highlight: "Royal Arena, Copenhagen · Roskilde Festival" },
  { name: "Finland", code: 246, region: "Europe", flag: "🇫🇮", highlight: "Flow Festival, Helsinki (2025)" },
  { name: "Portugal", code: 620, region: "Europe", flag: "🇵🇹", highlight: "Afro Nation, Portimão" },
  { name: "Turkey", code: 792, region: "Europe", flag: "🇹🇷", highlight: "UEFA Champions League final, Istanbul (2023)" },

  // ── North America ──
  { name: "United States", code: 840, region: "North America", flag: "🇺🇸", highlight: "Citi Field & Madison Square Garden, New York" },
  { name: "Canada", code: 124, region: "North America", flag: "🇨🇦", highlight: "Scotiabank Arena, Toronto" },
  { name: "Mexico", code: 484, region: "North America", flag: "🇲🇽", highlight: "FIFA World Cup opening, Mexico City (2026)" },

  // ── Caribbean ──
  { name: "Jamaica", code: 388, region: "Caribbean", flag: "🇯🇲", highlight: "National Stadium, Kingston (2022)" },
  { name: "Barbados", code: 52, region: "Caribbean", flag: "🇧🇧", highlight: "Bridgetown (2022)" },
  { name: "Bahamas", code: 44, region: "Caribbean", flag: "🇧🇸", highlight: "Nassau (2023)" },
  { name: "St Kitts & Nevis", code: 659, region: "Caribbean", flag: "🇰🇳", highlight: "St Kitts Music Festival (2023)" },

  // ── Oceania ──
  { name: "Australia", code: 36, region: "Oceania", flag: "🇦🇺", highlight: "Qudos Bank Arena, Sydney (2025)" },
];

export const performedCodes = new Set(performedCountries.map((c) => c.code));
export const countryByCode = new Map(performedCountries.map((c) => [c.code, c]));

export const REGION_ORDER: Region[] = ["Africa", "Europe", "North America", "Caribbean", "Oceania"];

export const countryCount = performedCountries.length;
export const regionCount = new Set(performedCountries.map((c) => c.region)).size;
