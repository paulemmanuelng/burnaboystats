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
  export const liveChartsUpdated = "2026-10-30";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-30T05:53Z";
  
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
            "movement": -4
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
            "position": 7,
            "movement": 0
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
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 23,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 25,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 26,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 37,
            "movement": 26
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 38,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 38,
            "movement": -25
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 44,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 44,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 47,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 56,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 62,
            "movement": -34
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 62,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 63,
            "movement": 38
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 68,
            "movement": -10
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 70,
            "movement": -42
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 71,
            "movement": 77
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 72,
            "movement": 57
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 75,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 76,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 77,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": 1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 100,
            "movement": -4
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 106,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 131,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 133,
            "movement": -56
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 146,
            "movement": 12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 160,
            "movement": 40
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 171,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 181,
            "movement": -8
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 2,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 5
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 12,
            "movement": null,
            "status": "new"
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
            "movement": 9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 15,
            "movement": 27
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 16,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 17,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 17,
            "movement": 41
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 22,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 22,
            "movement": 68
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": 11
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 29,
            "movement": 6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 34,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": 26
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 50,
            "movement": 25
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 69,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 74,
            "movement": -15
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 98,
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
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 17,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 19,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 26,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 28,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 38,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 54,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 60,
            "movement": -12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -19
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 68,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 71,
            "movement": 25
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 73,
            "movement": -19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 82,
            "movement": -25
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 92,
            "movement": -10
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 95,
            "movement": -13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 98,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 103,
            "movement": -24
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 105,
            "movement": 8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 120,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 123,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 123,
            "movement": -4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 183,
            "movement": -28
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 185,
            "movement": -31
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 30,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 39,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 43,
            "movement": -16
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 48,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 55,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 56,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 57,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 60,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 69,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 72,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 72,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 76,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
            "movement": 7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 90,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 110,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 115,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 119,
            "movement": -9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 121,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 123,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 123,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 129,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 133,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 144,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 170,
            "movement": -24
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 42
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": 7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": 15
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": 54
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 23,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": -25
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 48,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 51,
            "movement": -14
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 59,
            "movement": -43
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 79,
            "movement": -24
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 96,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": -65
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
            "country": "SC",
            "name": "Seychelles",
            "position": 25,
            "movement": 87
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 57,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": 50
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 85,
            "movement": 110
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 88,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -63
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 115,
            "movement": -54
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -40
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -24
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 189,
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
            "position": 44,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
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
            "position": 25,
            "movement": -2
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
            "position": 19,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 101,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 110,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": -85
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 172,
            "movement": -43
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
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
            "position": 11,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 73,
            "movement": -3
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
            "position": 167,
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
            "country": "SN",
            "name": "Senegal",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": 27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
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
            "position": 68,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -3
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 28,
            "movement": 79
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 56,
            "movement": 36
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 67,
            "movement": 77
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 38
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 84,
            "movement": 24
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 88,
            "movement": -59
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 97
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 132,
            "movement": -75
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 29,
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
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -29
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 63,
            "movement": -11
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 72,
            "movement": -14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 86,
            "movement": -2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 120,
            "movement": -37
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": 29
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 158,
            "movement": 12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 166,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 155,
            "movement": -3
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
            "country": "TD",
            "name": "Chad",
            "position": 14,
            "movement": 106
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": 62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 81
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -73
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -50
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
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
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 32,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 132,
            "movement": null,
            "status": "new"
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
            "position": 16,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 129,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -92
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 197,
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
            "country": "SK",
            "name": "Slovakia",
            "position": 79,
            "movement": null,
            "status": "new"
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 14,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 102,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": -6
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
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 59,
            "movement": 2
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
            "position": 124,
            "movement": -7
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
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
            "country": "SR",
            "name": "Suriname",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 86,
            "movement": 90
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 86,
            "movement": 112
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 150,
            "movement": 41
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 180,
            "movement": -81
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 12
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
            "position": 190,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 25,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 12
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
            "position": 33,
            "movement": 67
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -50
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
            "movement": 15
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 40
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 41
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 157,
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
            "position": 148,
            "movement": 3
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": -88
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "country": "UG",
            "name": "Uganda",
            "position": 71,
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
            "country": "KE",
            "name": "Kenya",
            "position": 44,
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
            "position": 55,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": 10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 100,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 75,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 162,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 52,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
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
            "position": 96,
            "movement": 3
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -21
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
            "position": 167,
            "movement": 1
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -30
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
            "position": 30,
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
            "position": 55,
            "movement": 9
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
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 98,
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
            "position": 116,
            "movement": 26
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
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -65
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
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 190,
            "movement": -27
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
            "position": 77,
            "movement": 19
          },
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": 11
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
            "position": 81,
            "movement": 31
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Big 7",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 5,
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
            "position": 97,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "28 grams",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 109,
            "movement": null,
            "status": "new"
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
            "position": 117,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 70,
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
            "position": 182,
            "movement": -8
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
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 75,
            "movement": -46
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
            "country": "GM",
            "name": "Gambia",
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
    "title": "Second Sermon",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 131,
            "movement": 19
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
            "position": 107,
            "movement": 52
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
            "position": 93,
            "movement": -15
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
            "movement": 2
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
            "position": 175,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Want It All",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -113
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Outro: Remember Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -114
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
            "position": 173,
            "movement": -87
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
            "position": 200,
            "movement": -3
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
  