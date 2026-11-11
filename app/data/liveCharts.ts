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
  export const liveChartsUpdated = "2026-11-11";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-11T19:39Z";
  
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
            "movement": 1
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
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 1
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
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 4,
            "movement": -1
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
            "movement": 0
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
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 3
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
            "country": "PA",
            "name": "Panama",
            "position": 9,
            "movement": -3
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
            "country": "HU",
            "name": "Hungary",
            "position": 15,
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
            "country": "PY",
            "name": "Paraguay",
            "position": 16,
            "movement": -2
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 20,
            "movement": -4
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 20,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": -3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 22,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 23,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 25,
            "movement": -6
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 25,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 26,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 29,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 30,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 33,
            "movement": -10
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 34,
            "movement": -11
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 37,
            "movement": -16
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 39,
            "movement": -8
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 46,
            "movement": -22
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 46,
            "movement": -21
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 48,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 50,
            "movement": -10
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
            "position": 7,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 24,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 29,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 30,
            "movement": 17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 33,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": -6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 39,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 40,
            "movement": -14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 46,
            "movement": -9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 47,
            "movement": -32
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": -6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 51,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 53,
            "movement": -20
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 56,
            "movement": -34
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 58,
            "movement": -10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 61,
            "movement": -41
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 64,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 72,
            "movement": -7
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 74,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 75,
            "movement": 41
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 75,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 88,
            "movement": -7
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 97,
            "movement": -18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 100,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 103,
            "movement": -8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 113,
            "movement": -34
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 115,
            "movement": -10
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 118,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 125,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 126,
            "movement": -10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 128,
            "movement": -76
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 134,
            "movement": -37
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 143,
            "movement": -82
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 158,
            "movement": -44
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 166,
            "movement": 10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 176,
            "movement": 21
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 192,
            "movement": -24
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": 23
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": 18
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": 4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 18,
            "movement": 4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 23,
            "movement": 21
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": 27
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 29,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 33,
            "movement": 13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 33,
            "movement": 10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 34,
            "movement": -14
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 53,
            "movement": -49
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 64,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 70,
            "movement": 28
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 70,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 77,
            "movement": -17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 77,
            "movement": -61
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 77,
            "movement": -54
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 89,
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
            "position": 5,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": -5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 17,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 19,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 23,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 24,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 42,
            "movement": -15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 45,
            "movement": -14
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 48,
            "movement": -16
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 57,
            "movement": -18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 59,
            "movement": -12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 64,
            "movement": -12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": -13
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 92,
            "movement": -47
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 97,
            "movement": -55
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 98,
            "movement": -28
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 102,
            "movement": -37
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 110,
            "movement": -43
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 116,
            "movement": -49
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 137,
            "movement": -58
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 139,
            "movement": -30
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 140,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 164,
            "movement": -38
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 170,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 172,
            "movement": -70
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 199,
            "movement": -38
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
            "position": 12,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 36,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 50,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 50,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 54,
            "movement": -10
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 66,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 70,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 78,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 80,
            "movement": -11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 82,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 88,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 90,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 91,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 91,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 95,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 98,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 101,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 119,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 125,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 153,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 173,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 175,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 185,
            "movement": -16
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 189,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": 39
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 30,
            "movement": 16
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 37,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 40,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": 35
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 45,
            "movement": -23
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 75,
            "movement": -53
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 93,
            "movement": -88
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 158,
            "movement": -77
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 180,
            "movement": -19
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 187,
            "movement": null,
            "status": "new"
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
            "country": "GD",
            "name": "Grenada",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 108
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 72
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 53
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": 78
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": -66
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": 6
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
            "position": 37,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -2
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
            "movement": 5
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 43,
            "movement": 91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 46
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 108,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 39
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 126,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -24
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -83
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": 59
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 58,
            "movement": 140
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 77,
            "movement": -30
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 82,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -60
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 176,
            "movement": -67
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 176,
            "movement": -129
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": -93
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 197,
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
            "position": 26,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 24
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
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 35
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 131,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -49
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 141,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 145,
            "movement": 36
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 149,
            "movement": -55
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": 37
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 157,
            "movement": 40
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 158,
            "movement": 29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 175,
            "movement": 6
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
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
            "position": 159,
            "movement": 0
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
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": 40
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 75,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 164,
            "movement": -64
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
            "movement": -92
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
            "position": 28,
            "movement": 3
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
            "position": 26,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -27
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 131,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -57
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": -49
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 28,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
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
            "position": 199,
            "movement": -23
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
            "position": 83,
            "movement": null,
            "status": "re"
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
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -23
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": -68
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
            "country": "SR",
            "name": "Suriname",
            "position": 42,
            "movement": 87
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -18
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 75,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 130,
            "movement": 28
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 147,
            "movement": -23
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 190,
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
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": 4
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
            "position": 28,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 46
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 63
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": -108
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -107
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 1
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
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": 54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": -57
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
            "country": "KY",
            "name": "Cayman Islands",
            "position": 67,
            "movement": 55
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 82,
            "movement": -4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 105,
            "movement": -39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": 50
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 175,
            "movement": -19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 181,
            "movement": -107
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 189,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
            "movement": -83
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
            "movement": -4
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -102
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
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
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 26,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 31,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
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
            "position": 197,
            "movement": -14
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
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -12
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": 12
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
            "position": 92,
            "movement": -2
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 46,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -48
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
            "position": 59,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 76,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": -91
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
            "position": 52,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 80,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -58
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
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
            "country": "DZ",
            "name": "Algeria",
            "position": 26,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -10
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
            "position": 88,
            "movement": 10
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
            "position": 165,
            "movement": 15
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
            "position": 154,
            "movement": 16
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
            "movement": -16
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
            "position": 117,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": -15
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": 0
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
            "position": 173,
            "movement": 4
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 176,
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
            "position": 150,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 12,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": null,
            "status": "new"
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
            "country": "UG",
            "name": "Uganda",
            "position": 93,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tshwala Bam",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All My Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": -35
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 41,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "If I'm Lying",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
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
            "position": 89,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -21
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
            "position": 69,
            "movement": 0
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
            "position": 191,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 180,
            "movement": 8
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
  