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
  export const liveChartsUpdated = "2026-10-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-24T20:53Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 13,
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": -1
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 0
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
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
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
            "country": "PA",
            "name": "Panama",
            "position": 4,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -2
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
            "movement": 1
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
            "country": "PY",
            "name": "Paraguay",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 10,
            "movement": -1
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
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 11,
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
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -2
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
            "country": "CL",
            "name": "Chile",
            "position": 13,
            "movement": -4
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 13,
            "movement": -3
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
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 15,
            "movement": -4
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
            "country": "UY",
            "name": "Uruguay",
            "position": 15,
            "movement": 2
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": -5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 18,
            "movement": -4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 18,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 19,
            "movement": -2
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
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": -2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 22,
            "movement": -8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 23,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 72,
            "movement": -4
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
            "position": 3,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": 6
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 12,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": 10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 20,
            "movement": 11
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 22,
            "movement": 9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 26,
            "movement": 25
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": 23
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 28,
            "movement": 36
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 31,
            "movement": -13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 32,
            "movement": 22
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 32,
            "movement": 10
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 34,
            "movement": 14
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 39,
            "movement": 38
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 41,
            "movement": 20
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 45,
            "movement": 8
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 48,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": 9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 55,
            "movement": -23
          },
          {
            "country": "FR",
            "name": "France",
            "position": 57,
            "movement": 10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 66,
            "movement": 15
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 66,
            "movement": -23
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 71,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 78,
            "movement": 13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 80,
            "movement": 28
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 84,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 100,
            "movement": 12
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 104,
            "movement": 25
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 106,
            "movement": 33
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 107,
            "movement": -75
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 112,
            "movement": 74
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 113,
            "movement": 28
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 126,
            "movement": 8
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 152,
            "movement": 33
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 172,
            "movement": -41
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 191,
            "movement": -51
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
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": 19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 8
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 8,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
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
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": 17
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 17,
            "movement": 53
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": 41
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 20,
            "movement": -11
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 21,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 30,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 34,
            "movement": 48
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 35,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 46,
            "movement": -17
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": 27
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 86,
            "movement": -46
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 89,
            "movement": -39
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 94,
            "movement": -47
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 95,
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
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 28,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 31,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 47,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 53,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 55,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -19
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 74,
            "movement": 17
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 83,
            "movement": 43
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": 25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 89,
            "movement": -15
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 92,
            "movement": 9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 96,
            "movement": 13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 96,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 100,
            "movement": -9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 106,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 108,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 141,
            "movement": 7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 161,
            "movement": 24
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 188,
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
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 25,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 25,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 38,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 39,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 40,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 43,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 55,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 57,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 58,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 60,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 63,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 66,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 72,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 72,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 82,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 89,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 97,
            "movement": 4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 103,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 104,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 104,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 109,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 125,
            "movement": 16
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 128,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 128,
            "movement": 6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 149,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 155,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 1,
            "movement": 12
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 14,
            "movement": 58
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 19,
            "movement": 18
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 34,
            "movement": 43
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 73,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -30
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 99,
            "movement": 47
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 168,
            "movement": 3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 171,
            "movement": -18
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 180,
            "movement": null,
            "status": "new"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 93
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 85,
            "movement": 113
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": 43
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 81
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 112,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -41
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 155,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 0
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
            "position": 46,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -49
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": 88
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -39
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": -107
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
            "position": 40,
            "movement": -1
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
            "position": 64,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -9
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 75,
            "movement": 98
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -38
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": 43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -48
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -55
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 4
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
            "position": 52,
            "movement": -14
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
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 64,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 109,
            "movement": -45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": 50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 160,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 184,
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 59,
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
            "position": 143,
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 50
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 134,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": null,
            "status": "new"
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": -28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": -73
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": 61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 187,
            "movement": -27
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 55
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": -1
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
            "position": 51,
            "movement": null,
            "status": "new"
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
            "position": 44,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 72,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 94,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 134,
            "movement": 59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": 37
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 160,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": -9
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
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 91
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -78
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
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
            "position": 25,
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
            "position": 150,
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 12,
            "movement": 134
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 154,
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 4
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
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
            "position": 42,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 4
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
            "position": 30,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
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
            "position": 181,
            "movement": 13
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
            "position": 41,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
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
            "position": 64,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
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
            "position": 96,
            "movement": 3
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
            "position": 51,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
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
            "position": 95,
            "movement": 56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": -2
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
            "position": 92,
            "movement": -6
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
            "position": 188,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 7
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
            "movement": 18
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
            "position": 129,
            "movement": 9
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
            "position": 166,
            "movement": 16
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
            "position": 99,
            "movement": -92
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 75,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": 1
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 77,
            "movement": -28
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 91,
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
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 113,
            "movement": -55
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -35
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
            "position": 25,
            "movement": null,
            "status": "new"
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "#Yawadey",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 31,
            "movement": null,
            "status": "new"
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
            "position": 92,
            "movement": -11
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
            "position": 53,
            "movement": 4
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 71,
            "movement": 0
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
            "position": 115,
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
            "position": 137,
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
            "position": 64,
            "movement": 1
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
            "position": 168,
            "movement": 25
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
            "position": 174,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Donne-moi l'accord",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Sign of Weakness",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -19
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
            "position": 138,
            "movement": -9
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -90
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
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cheat On Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Hey Boy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 99,
            "movement": -96
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 168,
            "movement": -9
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
            "position": 193,
            "movement": -6
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
  