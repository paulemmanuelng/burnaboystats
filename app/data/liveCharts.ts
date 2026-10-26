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
  export const liveChartsUpdated = "2026-10-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-26T13:09Z";
  
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
            "country": "FR",
            "name": "France",
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
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 2
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
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 5,
            "movement": -1
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
            "country": "US",
            "name": "United States",
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 6,
            "movement": -4
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
            "movement": -2
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
            "movement": -2
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
            "country": "PY",
            "name": "Paraguay",
            "position": 11,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 12,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 12,
            "movement": 1
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
            "country": "CO",
            "name": "Colombia",
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
            "country": "BR",
            "name": "Brazil",
            "position": 14,
            "movement": -3
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": 0
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
            "movement": -3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 16,
            "movement": -5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 17,
            "movement": 1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 18,
            "movement": 0
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 19,
            "movement": -4
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
            "country": "BO",
            "name": "Bolivia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 21,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": -4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 22,
            "movement": -7
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 24,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 27,
            "movement": -7
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 28,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 37,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 39,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 81,
            "movement": -9
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
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
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
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 19,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 19,
            "movement": 13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 20,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 22,
            "movement": 9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 26,
            "movement": 40
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 27,
            "movement": 5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 34,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 42,
            "movement": 9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 43,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 51,
            "movement": -25
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 52,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 53,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 57,
            "movement": 9
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 68,
            "movement": 58
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 70,
            "movement": 14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 71,
            "movement": 74
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 71,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 72,
            "movement": -24
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 76,
            "movement": 37
          },
          {
            "country": "FR",
            "name": "France",
            "position": 76,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 82,
            "movement": 30
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 93,
            "movement": -13
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 101,
            "movement": 5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 102,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 113,
            "movement": -13
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 114,
            "movement": -86
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 116,
            "movement": 36
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 118,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 122,
            "movement": 69
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 145,
            "movement": -38
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 192,
            "movement": -71
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 193,
            "movement": -19
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 193,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": 12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 24,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": 15
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 41,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 42,
            "movement": 11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 44,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 45,
            "movement": 43
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 54,
            "movement": 35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 58,
            "movement": 38
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 61,
            "movement": 35
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 62,
            "movement": 38
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -19
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 63,
            "movement": 29
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 67,
            "movement": 39
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 70,
            "movement": 38
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 71,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 96,
            "movement": -13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 105,
            "movement": 56
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 116,
            "movement": 25
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 165,
            "movement": 23
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 173,
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
            "country": "TR",
            "name": "Turkey",
            "position": 2,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 9,
            "movement": 14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 15,
            "movement": -8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 15,
            "movement": 29
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 17,
            "movement": -5
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 19,
            "movement": 61
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 21,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 22,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 23,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 30,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 31,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": -11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 44,
            "movement": -20
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 45,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 67,
            "movement": -39
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 70,
            "movement": -17
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 79,
            "movement": -36
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 22,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 38,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 39,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 41,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 49,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 57,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 63,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 63,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 68,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 69,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 70,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 72,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 75,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 78,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 84,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 96,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 105,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 111,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 113,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 116,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 123,
            "movement": 11
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 135,
            "movement": -8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 144,
            "movement": 4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 152,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 166,
            "movement": -29
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 190,
            "movement": -35
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 26
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 12
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 180
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 3,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 41
          },
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": -13
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": -10
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 26,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 30,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 34,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 36,
            "movement": -24
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 85,
            "movement": -53
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 93,
            "movement": -91
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 168,
            "movement": -153
          },
          {
            "country": "US",
            "name": "United States",
            "position": 176,
            "movement": 23
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 194,
            "movement": -138
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
            "country": "SR",
            "name": "Suriname",
            "position": 32,
            "movement": 80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": 13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 108,
            "movement": 63
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 115,
            "movement": -54
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 120,
            "movement": 18
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": 51
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
            "movement": -86
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 189,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
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
            "position": 56,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 133,
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
            "position": 25,
            "movement": -2
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 106,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 144,
            "movement": 38
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": -77
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "country": "NA",
            "name": "Namibia",
            "position": 41,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -19
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
            "position": 33,
            "movement": -6
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
            "position": 38,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 90,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -37
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": -18
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 190,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 195,
            "movement": -35
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 58,
            "movement": 3
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
            "position": 148,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 23,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 60
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": 56
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 130,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 138,
            "movement": -63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
            "movement": -56
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 195,
            "movement": -1
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 1
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 62
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": 17
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
            "position": 29,
            "movement": 2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 133,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -57
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 146,
            "movement": -79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -38
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
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 182,
            "movement": null,
            "status": "new"
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": -41
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
            "position": 38,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 71,
            "movement": -59
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 162,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": -2
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 36
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -50
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
            "position": 21,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
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
            "position": 19,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -16
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 4
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
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -11
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": 29
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": -22
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
            "movement": -40
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
            "movement": 1
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 22,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 1
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
            "position": 180,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 105,
            "movement": null,
            "status": "new"
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 48,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": 12
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
            "position": 53,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 167,
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
            "country": "LV",
            "name": "Latvia",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -12
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
            "position": 96,
            "movement": 3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 68,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": null,
            "status": "new"
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
            "position": 87,
            "movement": 5
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
            "position": 185,
            "movement": 3
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
            "position": 32,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 54
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
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
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -93
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 19
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 171,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
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
            "position": 187,
            "movement": -1
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
            "position": 52,
            "movement": null,
            "status": "re"
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
            "position": 145,
            "movement": 9
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
            "position": 96,
            "movement": 21
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 108,
            "movement": -13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 141,
            "movement": -28
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
            "country": "TD",
            "name": "Chad",
            "position": 29,
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
            "country": "LY",
            "name": "Libya",
            "position": 17,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 6
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
        "platform": "Shazam",
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
    "kind": "song"
  },
  {
    "title": "Soke",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": null,
            "status": "new"
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
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Normal",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Hossana",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 0
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
            "position": 187,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Therapy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 46,
            "movement": null,
            "status": "new"
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
            "position": 63,
            "movement": 3
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 170,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -1
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -35
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
            "position": 171,
            "movement": -34
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
            "position": 165,
            "movement": -16
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
            "position": 188,
            "movement": -19
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
  