// Where the world listens — Burna Boy's top 50 Spotify cities.
//
// Spotify publishes, for every artist, the cities with the most monthly
// listeners ("Where people listen" on the artist page shows five; the full 50
// sit behind Spotify for Artists). ChartMasters' Artist Global Impact tool
// prints all 50 with their counts, and this file is a reading of that page
// made signed in, in the site's own browser, on the date below — the raw
// capture is docs/sourcing/chartmasters/reads/2026-09-20-cities.json (the 17 Sep
// read it replaced sits beside it).
//
// HAND-READ, deliberately: the tool sits behind a member login that must never
// be automated from the bot (a fan's shared account). Re-read it monthly and
// replace the whole list at once — never one row — so the ranks stay one
// day's reading. Monthly listeners are a rolling 28-day count that moves every
// day; the page prints the read date beside every figure for that reason.
//
// Everything a page prints is derived below. Nothing here is a total typed by
// hand: the sum, the country count, the country groupings and the "most cities"
// line all come from the rows.

export const LISTENERS_READ_ON = "2026-09-20";

/** Spotify monthly listeners on the read date — the artist-page figure the 50
 *  cities are the top of, read the same minute. */
export const MONTHLY_LISTENERS_ON_READ = 48_227_381;

export interface ListenerCity {
  rank: number;
  city: string;
  country: string; // as Spotify names it
  code: string; // ISO 3166-1 alpha-2, for the flag and the country grouping
  numeric: number; // ISO numeric, the id worldShapes.ts uses — 0 when no shape exists at 110m
  flag: string;
  lon: number;
  lat: number;
  listeners: number;
}

// Coordinates are the city centre to two decimals — on a 900-px world that is
// well under a pixel. Brooklyn is listed by Spotify separately from New York
// City and sits on the same pixel; the ranked list is the accessible reading.
export const listenerCities: ListenerCity[] = [
  { rank: 1, city: "Lagos", country: "Nigeria", code: "NG", numeric: 566, flag: "🇳🇬", lon: 3.38, lat: 6.52, listeners: 1_422_025 },
  { rank: 2, city: "London", country: "United Kingdom", code: "GB", numeric: 826, flag: "🇬🇧", lon: -0.13, lat: 51.51, listeners: 999_022 },
  { rank: 3, city: "Port Harcourt", country: "Nigeria", code: "NG", numeric: 566, flag: "🇳🇬", lon: 7.01, lat: 4.82, listeners: 760_234 },
  { rank: 4, city: "Abuja", country: "Nigeria", code: "NG", numeric: 566, flag: "🇳🇬", lon: 7.5, lat: 9.06, listeners: 635_035 },
  { rank: 5, city: "Madrid", country: "Spain", code: "ES", numeric: 724, flag: "🇪🇸", lon: -3.7, lat: 40.42, listeners: 462_473 },
  { rank: 6, city: "São Paulo", country: "Brazil", code: "BR", numeric: 76, flag: "🇧🇷", lon: -46.63, lat: -23.55, listeners: 425_161 },
  { rank: 7, city: "Sydney", country: "Australia", code: "AU", numeric: 36, flag: "🇦🇺", lon: 151.21, lat: -33.87, listeners: 417_215 },
  { rank: 8, city: "Frankfurt am Main", country: "Germany", code: "DE", numeric: 276, flag: "🇩🇪", lon: 8.68, lat: 50.11, listeners: 378_305 },
  { rank: 9, city: "Berlin", country: "Germany", code: "DE", numeric: 276, flag: "🇩🇪", lon: 13.41, lat: 52.52, listeners: 350_562 },
  { rank: 10, city: "Mexico City", country: "Mexico", code: "MX", numeric: 484, flag: "🇲🇽", lon: -99.13, lat: 19.43, listeners: 350_556 },
  { rank: 11, city: "Santiago", country: "Chile", code: "CL", numeric: 152, flag: "🇨🇱", lon: -70.67, lat: -33.45, listeners: 349_461 },
  { rank: 12, city: "Montreal", country: "Canada", code: "CA", numeric: 124, flag: "🇨🇦", lon: -73.57, lat: 45.5, listeners: 346_704 },
  { rank: 13, city: "Toronto", country: "Canada", code: "CA", numeric: 124, flag: "🇨🇦", lon: -79.38, lat: 43.65, listeners: 330_337 },
  { rank: 14, city: "Paris", country: "France", code: "FR", numeric: 250, flag: "🇫🇷", lon: 2.35, lat: 48.86, listeners: 326_246 },
  { rank: 15, city: "New York City", country: "United States of America", code: "US", numeric: 840, flag: "🇺🇸", lon: -74.01, lat: 40.71, listeners: 325_489 },
  { rank: 16, city: "Barcelona", country: "Spain", code: "ES", numeric: 724, flag: "🇪🇸", lon: 2.17, lat: 41.39, listeners: 322_457 },
  { rank: 17, city: "Melbourne", country: "Australia", code: "AU", numeric: 36, flag: "🇦🇺", lon: 144.96, lat: -37.81, listeners: 315_000 },
  { rank: 18, city: "Amsterdam", country: "Netherlands", code: "NL", numeric: 528, flag: "🇳🇱", lon: 4.9, lat: 52.37, listeners: 301_450 },
  { rank: 19, city: "Hamburg", country: "Germany", code: "DE", numeric: 276, flag: "🇩🇪", lon: 9.99, lat: 53.55, listeners: 300_697 },
  { rank: 20, city: "Nairobi", country: "Kenya", code: "KE", numeric: 404, flag: "🇰🇪", lon: 36.82, lat: -1.29, listeners: 285_331 },
  { rank: 21, city: "Munich", country: "Germany", code: "DE", numeric: 276, flag: "🇩🇪", lon: 11.58, lat: 48.14, listeners: 276_390 },
  { rank: 22, city: "Bogotá", country: "Colombia", code: "CO", numeric: 170, flag: "🇨🇴", lon: -74.07, lat: 4.71, listeners: 268_819 },
  { rank: 23, city: "Manchester", country: "United Kingdom", code: "GB", numeric: 826, flag: "🇬🇧", lon: -2.24, lat: 53.48, listeners: 265_078 },
  { rank: 24, city: "Stuttgart", country: "Germany", code: "DE", numeric: 276, flag: "🇩🇪", lon: 9.18, lat: 48.78, listeners: 261_496 },
  { rank: 25, city: "Brisbane", country: "Australia", code: "AU", numeric: 36, flag: "🇦🇺", lon: 153.03, lat: -27.47, listeners: 257_367 },
  { rank: 26, city: "Stockholm", country: "Sweden", code: "SE", numeric: 752, flag: "🇸🇪", lon: 18.07, lat: 59.33, listeners: 241_868 },
  { rank: 27, city: "Los Angeles", country: "United States of America", code: "US", numeric: 840, flag: "🇺🇸", lon: -118.24, lat: 34.05, listeners: 236_581 },
  { rank: 28, city: "Warsaw", country: "Poland", code: "PL", numeric: 616, flag: "🇵🇱", lon: 21.01, lat: 52.23, listeners: 236_457 },
  { rank: 29, city: "Oslo", country: "Norway", code: "NO", numeric: 578, flag: "🇳🇴", lon: 10.75, lat: 59.91, listeners: 232_205 },
  { rank: 30, city: "Birmingham", country: "United Kingdom", code: "GB", numeric: 826, flag: "🇬🇧", lon: -1.89, lat: 52.49, listeners: 232_008 },
  { rank: 31, city: "Benin City", country: "Nigeria", code: "NG", numeric: 566, flag: "🇳🇬", lon: 5.6, lat: 6.34, listeners: 231_627 },
  { rank: 32, city: "Johannesburg", country: "South Africa", code: "ZA", numeric: 710, flag: "🇿🇦", lon: 28.05, lat: -26.2, listeners: 229_703 },
  { rank: 33, city: "Cologne", country: "Germany", code: "DE", numeric: 276, flag: "🇩🇪", lon: 6.96, lat: 50.94, listeners: 216_966 },
  { rank: 34, city: "Zurich", country: "Switzerland", code: "CH", numeric: 756, flag: "🇨🇭", lon: 8.54, lat: 47.38, listeners: 202_761 },
  { rank: 35, city: "Istanbul", country: "Turkey", code: "TR", numeric: 792, flag: "🇹🇷", lon: 28.98, lat: 41.01, listeners: 200_196 },
  { rank: 36, city: "Chicago", country: "United States of America", code: "US", numeric: 840, flag: "🇺🇸", lon: -87.63, lat: 41.88, listeners: 199_550 },
  { rank: 37, city: "Vienna", country: "Austria", code: "AT", numeric: 40, flag: "🇦🇹", lon: 16.37, lat: 48.21, listeners: 195_619 },
  { rank: 38, city: "Accra", country: "Ghana", code: "GH", numeric: 288, flag: "🇬🇭", lon: -0.19, lat: 5.6, listeners: 192_466 },
  { rank: 39, city: "Buenos Aires", country: "Argentina", code: "AR", numeric: 32, flag: "🇦🇷", lon: -58.38, lat: -34.6, listeners: 192_146 },
  { rank: 40, city: "Singapore", country: "Singapore", code: "SG", numeric: 0, flag: "🇸🇬", lon: 103.82, lat: 1.35, listeners: 182_754 },
  { rank: 41, city: "Lima", country: "Peru", code: "PE", numeric: 604, flag: "🇵🇪", lon: -77.04, lat: -12.05, listeners: 181_473 },
  { rank: 42, city: "Dublin", country: "Ireland", code: "IE", numeric: 372, flag: "🇮🇪", lon: -6.26, lat: 53.35, listeners: 178_747 },
  { rank: 43, city: "Dallas", country: "United States of America", code: "US", numeric: 840, flag: "🇺🇸", lon: -96.8, lat: 32.78, listeners: 178_429 },
  { rank: 44, city: "Düsseldorf", country: "Germany", code: "DE", numeric: 276, flag: "🇩🇪", lon: 6.77, lat: 51.23, listeners: 174_439 },
  { rank: 45, city: "Houston", country: "United States of America", code: "US", numeric: 840, flag: "🇺🇸", lon: -95.37, lat: 29.76, listeners: 170_750 },
  { rank: 46, city: "Hanover", country: "Germany", code: "DE", numeric: 276, flag: "🇩🇪", lon: 9.73, lat: 52.38, listeners: 169_819 },
  { rank: 47, city: "Brooklyn", country: "United States of America", code: "US", numeric: 840, flag: "🇺🇸", lon: -73.94, lat: 40.68, listeners: 162_604 },
  { rank: 48, city: "Athens", country: "Greece", code: "GR", numeric: 300, flag: "🇬🇷", lon: 23.73, lat: 37.98, listeners: 162_354 },
  { rank: 49, city: "Lisbon", country: "Portugal", code: "PT", numeric: 620, flag: "🇵🇹", lon: -9.14, lat: 38.72, listeners: 155_666 },
  { rank: 50, city: "Kuala Lumpur", country: "Malaysia", code: "MY", numeric: 458, flag: "🇲🇾", lon: 101.69, lat: 3.14, listeners: 155_638 },
];

/** Short display names where Spotify's are long — the map card and the phone
 *  list have no room for "United States of America". */
export const COUNTRY_SHORT: Record<string, string> = {
  US: "United States",
  GB: "United Kingdom",
};
export const countryName = (c: ListenerCity) => COUNTRY_SHORT[c.code] ?? c.country;

export const cityCount = listenerCities.length;
export const listenerCountryCount = new Set(listenerCities.map((c) => c.code)).size;
export const topCity = listenerCities[0];
export const top50Listeners = listenerCities.reduce((n, c) => n + c.listeners, 0);

export interface ListenerCountry {
  code: string;
  name: string;
  flag: string;
  numeric: number;
  cities: ListenerCity[];
  listeners: number;
}

/** The 50 grouped by country, most listeners first — a FLOOR per country, since
 *  only the top 50 cities are published. */
export const listenerCountries: ListenerCountry[] = [...new Set(listenerCities.map((c) => c.code))]
  .map((code) => {
    const cities = listenerCities.filter((c) => c.code === code);
    return {
      code,
      name: countryName(cities[0]),
      flag: cities[0].flag,
      numeric: cities[0].numeric,
      cities,
      listeners: cities.reduce((n, c) => n + c.listeners, 0),
    };
  })
  .sort((a, b) => b.listeners - a.listeners || a.name.localeCompare(b.name));

/** The country placing the most cities in the 50 — Germany, eight, on the
 *  first reading; derived so the sentence follows the data. */
export const mostCities = listenerCountries.reduce((a, b) => (b.cities.length > a.cities.length ? b : a));
/** How many countries tie that count (the sentence says "alone" only when one). */
export const mostCitiesTie = listenerCountries.filter((c) => c.cities.length === mostCities.cities.length).length;

export const nigeriaListeners = listenerCountries.find((c) => c.code === "NG")?.listeners ?? 0;
export const nigeriaCityCount = listenerCountries.find((c) => c.code === "NG")?.cities.length ?? 0;
/** Spotify lists Brooklyn as a city of its own, apart from New York City, and
 *  the two sit on the same map pixel. Their sum, when both are in the 50 —
 *  null otherwise, so the sentence disappears rather than the build failing. */
const nycRow = listenerCities.find((c) => c.city === "New York City");
const brooklynRow = listenerCities.find((c) => c.city === "Brooklyn");
export const nycWithBrooklyn = nycRow && brooklynRow ? nycRow.listeners + brooklynRow.listeners : null;

/** Cities outside Africa, of the 50. */
const AFRICA = new Set(["NG", "KE", "ZA", "GH"]);
export const citiesOutsideAfrica = listenerCities.filter((c) => !AFRICA.has(c.code)).length;

/** Countries the map shades (ISO numeric ids of the shapes) — Singapore has no
 *  shape at 110m and is plotted as a dot only. */
export const listenerShapeCodes = new Set(listenerCities.map((c) => c.numeric).filter((n) => n > 0));

const fmt = new Intl.NumberFormat("en-GB");
export const formatListeners = (n: number) => fmt.format(n);
/** 1,429,129 → "1.43M"; 993,316 → "993K". */
export const compactListeners = (n: number) =>
  n >= 1_000_000 ? `${(n / 1_000_000).toFixed(2)}M` : `${Math.round(n / 1000)}K`;
/** "32%" — one rounding for both layouts. */
export const pctOf = (n: number, of: number) => `${Math.round((n / of) * 100)}%`;
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
/** Small counts spelled out in prose, the same way on both layouts. */
export const spell = (n: number) => WORDS[n] ?? String(n);

export const listenersReadOnLabel = (() => {
  const [y, m, d] = LISTENERS_READ_ON.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
})();
