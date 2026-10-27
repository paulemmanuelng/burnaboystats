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
  export const liveChartsUpdated = "2026-10-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-27T22:17Z";
  
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
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": -1
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
            "position": 7,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 15,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 18,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 21,
            "movement": 12
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 24,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 26,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 29,
            "movement": -6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 35,
            "movement": -18
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 42,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 44,
            "movement": -7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 55,
            "movement": 29
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 57,
            "movement": -33
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 58,
            "movement": -12
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 59,
            "movement": -14
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 66,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 71,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 73,
            "movement": -1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 92,
            "movement": 6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 95,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 97,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": 12
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 104,
            "movement": -44
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 115,
            "movement": -19
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 124,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 125,
            "movement": 3
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 148,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 154,
            "movement": -39
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 161,
            "movement": 15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 170,
            "movement": -8
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 171,
            "movement": -34
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 177,
            "movement": -46
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 185,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 193,
            "movement": -115
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 196,
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
            "position": 2,
            "movement": 3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 5,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": 1
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
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 13,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 15,
            "movement": 64
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 21,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": -6
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 23,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 25,
            "movement": -16
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": -11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": -10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 29,
            "movement": -6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 36,
            "movement": -17
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 43,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 49,
            "movement": -36
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 58,
            "movement": 9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 59,
            "movement": -28
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 76,
            "movement": -51
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 84,
            "movement": -14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 85,
            "movement": -40
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 94,
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 12,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 26,
            "movement": -11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 28,
            "movement": -11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 33,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -14
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 45,
            "movement": -18
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
            "movement": -15
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 50,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 54,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 61,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 68,
            "movement": -19
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 77,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 86,
            "movement": -12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 87,
            "movement": 7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 97,
            "movement": -35
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 107,
            "movement": -25
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 108,
            "movement": -41
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 111,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 112,
            "movement": -62
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 134,
            "movement": -30
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 156,
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
            "position": 19,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 23,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 27,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 28,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 35,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 43,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 43,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 50,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 59,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 61,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 62,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 63,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 64,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 68,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 75,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 76,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 85,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 106,
            "movement": -10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 113,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 114,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 118,
            "movement": 5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 120,
            "movement": -9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 125,
            "movement": 27
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 126,
            "movement": -10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 143,
            "movement": -8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 147,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 154,
            "movement": 12
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
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": -9
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 17,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 18,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": -14
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 30,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 40,
            "movement": -14
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 44,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 59,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 61,
            "movement": -51
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 63,
            "movement": -57
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 96,
            "movement": -67
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 149,
            "movement": -131
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
            "position": 22,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -35
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": 38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 111,
            "movement": -67
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 121,
            "movement": 55
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 125,
            "movement": -42
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 134,
            "movement": -28
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 136,
            "movement": -49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 137,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 33
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": -3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 151,
            "movement": -100
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 160,
            "movement": -41
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 177,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 191,
            "movement": -83
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 199,
            "movement": -47
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
            "position": 12,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 74
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": 43
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 155,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 160,
            "movement": -52
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 162,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 179,
            "movement": -50
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 5,
            "movement": 36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 117,
            "movement": -83
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 128,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 147,
            "movement": -90
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": -28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
            "movement": -19
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 62,
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
            "position": 126,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": null,
            "status": "new"
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 47,
            "movement": 137
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 114,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 114,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 21
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 131,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 157,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": null,
            "status": "new"
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
            "position": 13,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 27
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -59
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 185,
            "movement": -33
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "position": 29,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Last Last",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 97,
            "movement": 72
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 193,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 29,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
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
            "position": 179,
            "movement": -13
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
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
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
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
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 84
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 39
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 2
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
            "position": 44,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 154,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 156,
            "movement": 1
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 24,
            "movement": 75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 39
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": -39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -38
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 97,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": -57
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 176,
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
            "position": 28,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 70,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -17
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 87,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 124,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 46
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": 8
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 183,
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
            "position": 169,
            "movement": -7
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
            "position": 50,
            "movement": -37
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 82,
            "movement": 20
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 101,
            "movement": 35
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 147,
            "movement": 37
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 187,
            "movement": -174
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
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
            "position": 53,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -20
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
            "position": 6,
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
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 82,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 125,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": 37
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
            "position": 62,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 66,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
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
            "position": 96,
            "movement": 3
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
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
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
            "country": "HR",
            "name": "Croatia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 188,
            "movement": -18
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
            "position": 193,
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -2
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
            "position": 177,
            "movement": 6
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 11
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 170,
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
            "position": 129,
            "movement": 8
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
            "position": 87,
            "movement": 9
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
            "position": 116,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
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
            "position": 127,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 142,
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 67,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 79,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
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
            "position": 30,
            "movement": -23
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
            "position": 28,
            "movement": -1
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
            "position": 77,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 79,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Killin Dem",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 104,
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
            "position": 76,
            "movement": -49
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": null,
            "status": "new"
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
            "position": 138,
            "movement": null,
            "status": "new"
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
            "position": 67,
            "movement": -18
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
            "position": 59,
            "movement": -9
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
            "position": 120,
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
            "position": 67,
            "movement": 1
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
            "position": 196,
            "movement": null,
            "status": "new"
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
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -15
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
  