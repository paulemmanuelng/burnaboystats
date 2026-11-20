// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs from kworb's artist page.
  //
  // PLATFORM chart data for Burna Boy: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
  export interface LiveEntry {
    country: string; // ISO alpha-2
    name: string;
    position: number;
    // Movement against the chart's previous edition: 0 = no change, null = the
    // source flagged a new/re-entry, absent = the source reports no movement for
    // this platform at all (YouTube). Absent and null are different facts.
    movement?: number | null;
    /** Why there is no movement: the source flagged a new entry or a re-entry. */
    status?: "new" | "re";
  }
  
  export interface LivePlatform {
    platform: string;
    numberOnes: number;
    entries: LiveEntry[];
  }
  
  export interface LiveRelease {
    title: string;
    kind: "song" | "album";
    /** Release artwork, resolved at build time. Absent means unresolved — the
     *  page draws a monogram rather than borrowing another release's cover. */
    cover?: string;
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-20";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-20T07:21Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 11,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 3,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -3
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 12,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 14,
            "movement": -5
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 3
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 18,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 18,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 22,
            "movement": -6
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 25,
            "movement": -5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 27,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 28,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 30,
            "movement": -8
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 31,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 31,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 32,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 36,
            "movement": -6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 41,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 45,
            "movement": -11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 48,
            "movement": -9
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 49,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 21,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 21,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 26,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 32,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": 5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 34,
            "movement": 15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 48,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 48,
            "movement": -23
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 48,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 52,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 59,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 61,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 63,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 69,
            "movement": -12
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 75,
            "movement": -7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 79,
            "movement": 12
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 81,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 82,
            "movement": 22
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 83,
            "movement": 16
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 93,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 95,
            "movement": -24
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 99,
            "movement": -35
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 100,
            "movement": -17
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 102,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 118,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 127,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 128,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": 5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 153,
            "movement": 26
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 157,
            "movement": -10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 26,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 28,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 37,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 44,
            "movement": 6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 69,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 70,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 70,
            "movement": -12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 71,
            "movement": -9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 95,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 112,
            "movement": -23
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 119,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 124,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 125,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 151,
            "movement": -9
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 171,
            "movement": -16
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 183,
            "movement": -14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 185,
            "movement": -74
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 185,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 188,
            "movement": -35
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 5,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 9
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 21,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 24,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 25,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 27,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -16
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 31,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 32,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 41,
            "movement": 23
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 44,
            "movement": -7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 46,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 49,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": -14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 66,
            "movement": -12
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 67,
            "movement": -18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 80,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 39,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 59,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 62,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 63,
            "movement": 2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 63,
            "movement": 8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 72,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 78,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 80,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 89,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 89,
            "movement": -4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 91,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 104,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 104,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 107,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 112,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 120,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 125,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 127,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 137,
            "movement": -15
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 145,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 168,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 174,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 184,
            "movement": 10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 41,
            "movement": -14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 48,
            "movement": -37
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 67,
            "movement": 11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 160,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 12
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 122,
            "movement": -22
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 127,
            "movement": -58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 150,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 156,
            "movement": 42
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 160,
            "movement": -45
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
            "movement": -33
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 55,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 21
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 24,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -30
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 18
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 150,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 182,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 185,
            "movement": -72
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 137,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": 19
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 150,
            "movement": -13
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
            "movement": -14
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -34
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": 30
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": -54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
            "movement": -117
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": -43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 21,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -20
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 4,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": -42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -23
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 79,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 65,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 81
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 139,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -26
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 24,
            "movement": 149
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": 59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": -72
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -4
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 85,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 162,
            "movement": -135
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 192,
            "movement": -31
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 88
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 89,
            "movement": -47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": -7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 82,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 137,
            "movement": -60
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 29
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 124,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 45,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 71,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 30,
            "movement": 168
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 52,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 11,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Deja Vu",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 65,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Update",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "On Form",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 111,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 60,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  }
];
  
  /** Totals, derived so they can never disagree with the data above. */
  export const livePlacementCount = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
    0
  );
  export const liveNumberOnes = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
    0
  );
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
  /** Placements per platform, biggest first — powers the summary row. */
  export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
    livePlatforms
      .map((platform) => {
        const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
        return {
          platform,
          placements: blocks.reduce((n, p) => n + p.entries.length, 0),
          numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
        };
      })
      .sort((a, b) => b.placements - a.placements);
  