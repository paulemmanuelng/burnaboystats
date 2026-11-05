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
  export const liveChartsUpdated = "2026-11-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-05T06:52Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 10,
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
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 1,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 4,
            "movement": 2
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
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
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
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 13,
            "movement": -1
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 14,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 15,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 16,
            "movement": -3
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
            "position": 16,
            "movement": 3
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
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
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 19,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 21,
            "movement": -9
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 21,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 23,
            "movement": -2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 23,
            "movement": -6
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 24,
            "movement": -6
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 25,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 25,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 27,
            "movement": -5
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 31,
            "movement": -7
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 31,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 40,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -12
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 47,
            "movement": -8
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 82,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 9,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 61
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 26,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 29,
            "movement": 6
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 30,
            "movement": 19
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 31,
            "movement": 6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 42,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 45,
            "movement": -30
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 49,
            "movement": 23
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 51,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 55,
            "movement": -22
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 56,
            "movement": 15
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 56,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 57,
            "movement": -7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 61,
            "movement": -37
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 62,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 67,
            "movement": -20
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 73,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 73,
            "movement": 7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 82,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 84,
            "movement": 10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": 15
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 96,
            "movement": -33
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 102,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 111,
            "movement": -59
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 112,
            "movement": 11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 119,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 120,
            "movement": -15
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 128,
            "movement": -19
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 140,
            "movement": 22
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 163,
            "movement": 23
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 164,
            "movement": -15
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 196,
            "movement": -79
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 23,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 26,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 27,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 34,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 39,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 48,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 52,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 56,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 57,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
            "movement": 0
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 19,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 19,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 24,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 24,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 40,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 44,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 57,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 59,
            "movement": 4
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 71,
            "movement": 21
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 74,
            "movement": 11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 100,
            "movement": 9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 111,
            "movement": 5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 114,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 116,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 118,
            "movement": -19
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 123,
            "movement": -13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 131,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 165,
            "movement": -27
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 169,
            "movement": -48
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 170,
            "movement": -21
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 186,
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 18,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 37,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 51,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 51,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 55,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 58,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 59,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 59,
            "movement": -11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 68,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 71,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 71,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 71,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 83,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 84,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 86,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 86,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 90,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 102,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 107,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 113,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 114,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 116,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 129,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 150,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 152,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 160,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 172,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 1,
            "movement": 24
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": 2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 13,
            "movement": -9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 17,
            "movement": -12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 30,
            "movement": -17
          },
          {
            "country": "FR",
            "name": "France",
            "position": 33,
            "movement": 21
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 48,
            "movement": -27
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 49,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 79,
            "movement": -58
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 87,
            "movement": -81
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 138,
            "movement": -55
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 141,
            "movement": -109
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": -132
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 106,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 17
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 122,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": 71
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 144,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 155,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 162,
            "movement": -104
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 168,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 191,
            "movement": null,
            "status": "new"
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
            "position": 41,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 6
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
            "position": 32,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 56,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 66,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 79,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 39
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 96,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 57
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": 28
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 170,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -79
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 190,
            "movement": 5
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
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -37
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
            "movement": 2
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 76,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 93,
            "movement": 52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -35
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": -82
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": null,
            "status": "new"
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
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
            "position": 157,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JO",
            "name": "Jordan",
            "position": 54,
            "movement": 0
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
            "country": "SR",
            "name": "Suriname",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 113,
            "movement": -80
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 131,
            "movement": -66
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -34
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 69,
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
            "position": 136,
            "movement": -6
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 121,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 164,
            "movement": -27
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 185,
            "movement": -93
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": 5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 163,
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
            "position": 27,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 72
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": 63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 153,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 25,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -69
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -1
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
            "position": 22,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": -39
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
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 67
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": null,
            "status": "new"
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
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 37,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 91,
            "movement": -85
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
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
            "position": 152,
            "movement": -3
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 48,
            "movement": 24
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 48,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
            "movement": 38
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": 8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 178,
            "movement": -31
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 184,
            "movement": -33
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 193,
            "movement": -8
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
            "position": 174,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": 18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 58,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 149,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 2,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 71,
            "movement": 52
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 189,
            "movement": -97
          }
        ]
      },
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
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -1
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
            "position": 65,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 105,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 185,
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
            "position": 90,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 168,
            "movement": -22
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -32
          },
          {
            "country": "FR",
            "name": "France",
            "position": 172,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
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
            "country": "KE",
            "name": "Kenya",
            "position": 191,
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
            "country": "KE",
            "name": "Kenya",
            "position": 76,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 55,
            "movement": 0
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
            "country": "AI",
            "name": "Anguilla",
            "position": 41,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": -17
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": 4
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
            "position": 197,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 55,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -22
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 1
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
            "position": 179,
            "movement": -8
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
            "position": 69,
            "movement": -11
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -14
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 2,
            "movement": 114
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 3,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Question",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Wild Dreams",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": null,
            "status": "new"
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
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": null,
            "status": "new"
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
            "position": 188,
            "movement": -1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 86,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 139,
            "movement": 44
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
            "position": 74,
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
            "position": 173,
            "movement": 6
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
  