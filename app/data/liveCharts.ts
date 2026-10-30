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
  export const liveChartsBuiltAt = "2026-10-30T22:24Z";
  
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
            "country": "NO",
            "name": "Norway",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 12,
            "movement": 32
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": 10
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 20,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 21,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 25,
            "movement": 37
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 27,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 28,
            "movement": -8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 31,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": 22
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 43,
            "movement": -5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 44,
            "movement": 89
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 44,
            "movement": 19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 47,
            "movement": 23
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 49,
            "movement": -12
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 51,
            "movement": -7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 52,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 58,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 61,
            "movement": 11
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 73,
            "movement": -35
          },
          {
            "country": "FR",
            "name": "France",
            "position": 75,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 77,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 81,
            "movement": -6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 86,
            "movement": -18
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 89,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 93,
            "movement": -24
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 96,
            "movement": 4
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 97,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 104,
            "movement": -33
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 136,
            "movement": 30
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 141,
            "movement": 30
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 141,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 148,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 149,
            "movement": -18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 176,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": 7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": -2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 15,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 17,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 18,
            "movement": 10
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 21,
            "movement": -16
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 26,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 27,
            "movement": -17
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 38,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 27
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 49,
            "movement": -32
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 60,
            "movement": -38
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 62,
            "movement": -12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 74,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 76,
            "movement": -40
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 82,
            "movement": 16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 96,
            "movement": -27
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
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 13,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 24,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 39,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 55,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 55,
            "movement": -1
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
            "position": 65,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 69,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 85,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 88,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 89,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 96,
            "movement": -25
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 97,
            "movement": 1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 99,
            "movement": -26
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 102,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 117,
            "movement": 6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 124,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 128,
            "movement": -8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 129,
            "movement": -24
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 163,
            "movement": 22
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 168,
            "movement": 15
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
            "position": 28,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 39,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 43,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 45,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 55,
            "movement": 2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 55,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 58,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 58,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 67,
            "movement": 9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 70,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 71,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 71,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 72,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 73,
            "movement": 17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 86,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 101,
            "movement": 9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 114,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 115,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 122,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 122,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 134,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 138,
            "movement": -19
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 156,
            "movement": -33
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 158,
            "movement": -14
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": 36
          },
          {
            "country": "FR",
            "name": "France",
            "position": 27,
            "movement": 73
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 55,
            "movement": -6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 63,
            "movement": -18
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 80,
            "movement": 18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 129,
            "movement": -115
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 157,
            "movement": -148
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 11,
            "movement": 77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 56,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": 83
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -8
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 147,
            "movement": -62
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 147,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": -73
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 155,
            "movement": -36
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
            "movement": -57
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -9
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
            "position": 15,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -28
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 120,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 162,
            "movement": 10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 169,
            "movement": -68
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -22
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
            "position": 64,
            "movement": 7
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
            "movement": 7
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
            "position": 182,
            "movement": 17
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
            "position": 19,
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
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 16,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 38,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 47
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": -82
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
            "position": 31,
            "movement": -2
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
            "position": 40,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -54
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": -49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
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
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 62,
            "movement": -1
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
            "position": 127,
            "movement": -3
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 85
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 101,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": -38
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 172,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
            "movement": -80
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
            "position": 55,
            "movement": -2
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
            "position": 69,
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
            "position": 32,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 79
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 52,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": 19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
            "movement": 32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 145,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 194,
            "movement": -68
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
            "position": 56,
            "movement": 30
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": 13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 82,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": 39
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 130,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": -60
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 192,
            "movement": -34
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
            "position": 161,
            "movement": -6
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
            "position": 16,
            "movement": -4
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": -4
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
            "position": 63,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 195,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
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
            "position": 151,
            "movement": 2
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 63
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
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
            "position": 22,
            "movement": 1
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
            "country": "SR",
            "name": "Suriname",
            "position": 11,
            "movement": 9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 68,
            "movement": 18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 99,
            "movement": 51
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 103,
            "movement": 12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 145,
            "movement": 53
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 146,
            "movement": -55
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 7
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
            "position": 196,
            "movement": -6
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
            "position": 41,
            "movement": null,
            "status": "new"
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": -74
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -3
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
            "position": 75,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": -18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 102,
            "movement": -47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": -62
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 6
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -1
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
            "position": 184,
            "movement": -17
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
            "position": 32,
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 78,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
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
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": 80
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 104,
            "movement": -23
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 180,
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
            "position": 79,
            "movement": 44
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
            "position": 63,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -33
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
            "movement": -127
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
            "position": 42,
            "movement": 13
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 46,
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -7
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
            "position": 74,
            "movement": 42
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
            "position": 130,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -28
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
            "position": 125,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -36
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
            "position": 131,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 0
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
    "title": "Another Story",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 14,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 40,
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
            "position": 118,
            "movement": -1
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
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Second Sermon",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 117,
            "movement": 14
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
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
            "country": "SR",
            "name": "Suriname",
            "position": 180,
            "movement": -143
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
            "movement": -1
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
            "position": 148,
            "movement": -41
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
            "position": 198,
            "movement": -23
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 130,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": null,
            "status": "new"
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
  