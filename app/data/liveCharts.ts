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
  export const liveChartsUpdated = "2026-10-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-21T17:15Z";
  
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
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 1
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
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 26,
            "movement": 4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 31,
            "movement": -12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 33,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 36,
            "movement": -18
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": -13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 43,
            "movement": -22
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 43,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 47,
            "movement": -12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 47,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 49,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 51,
            "movement": -11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 55,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 57,
            "movement": -10
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 59,
            "movement": -19
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 60,
            "movement": -24
          },
          {
            "country": "FR",
            "name": "France",
            "position": 64,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 65,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 66,
            "movement": -14
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 68,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 73,
            "movement": 20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 79,
            "movement": -13
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 84,
            "movement": -17
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 93,
            "movement": -7
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 101,
            "movement": -17
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 107,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 117,
            "movement": 15
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 127,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 130,
            "movement": -14
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 131,
            "movement": -8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 165,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 181,
            "movement": -42
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 186,
            "movement": 13
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 188,
            "movement": -59
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 199,
            "movement": -34
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "country": "TR",
            "name": "Turkey",
            "position": 2,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 5,
            "movement": 11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": 5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 10,
            "movement": 7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 10,
            "movement": 26
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -5
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 19,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": 12
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 28,
            "movement": -9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 29,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 30,
            "movement": -16
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 37,
            "movement": 31
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 37,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -23
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 42,
            "movement": -11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 42,
            "movement": 19
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 45,
            "movement": 9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 51,
            "movement": 22
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": -40
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 74,
            "movement": -54
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 89,
            "movement": -4
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": -9
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 30,
            "movement": -12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 31,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": -11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 43,
            "movement": -14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
            "movement": -14
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": -14
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 54,
            "movement": -14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 65,
            "movement": -21
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 75,
            "movement": -41
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 89,
            "movement": 11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 103,
            "movement": -15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 108,
            "movement": -40
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 108,
            "movement": -19
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 110,
            "movement": -36
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 113,
            "movement": -34
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 116,
            "movement": -48
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 124,
            "movement": -31
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 126,
            "movement": -71
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 149,
            "movement": -58
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 155,
            "movement": -42
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 182,
            "movement": -73
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
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 20,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": 13
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 33,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 36,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 37,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 47,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 48,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 55,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 56,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 60,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 63,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 63,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 72,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 77,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 83,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 88,
            "movement": 87
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 93,
            "movement": -10
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 95,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 100,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 116,
            "movement": -25
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 129,
            "movement": 9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 133,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 138,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 146,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 154,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": 39
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 32,
            "movement": 37
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 32,
            "movement": 6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 34,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": 12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 43,
            "movement": -17
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 53,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 55,
            "movement": 41
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 69,
            "movement": -25
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 84,
            "movement": -17
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 88,
            "movement": -23
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 198,
            "movement": -164
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 7,
            "movement": 105
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 15,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 52,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 112,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": 70
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": 26
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 148,
            "movement": -37
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": 5
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -8
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 20,
            "movement": 77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 97,
            "movement": 9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 98,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": -16
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 118,
            "movement": -71
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": -31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 128,
            "movement": -25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 128,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": 66
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 154,
            "movement": -30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 172,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": -39
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "position": 23,
            "movement": 3
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
            "movement": -2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 39,
            "movement": 69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 116,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 137,
            "movement": -53
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -80
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 10
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
            "position": 15,
            "movement": 6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": 141
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 47
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
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
            "position": 30,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 19
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -27
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 132,
            "movement": 26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 178,
            "movement": 19
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 63,
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
            "position": 155,
            "movement": 11
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
            "position": 12,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 18,
            "movement": 157
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 76,
            "movement": -43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -19
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 101,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
            "movement": -33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 196,
            "movement": -71
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
            "movement": -4
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": -60
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 187,
            "movement": -54
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
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": 38
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 67,
            "movement": -8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 141,
            "movement": 26
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 146,
            "movement": -32
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 152,
            "movement": 17
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "position": 172,
            "movement": 3
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
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
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
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": 55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": -37
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
            "position": 30,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
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
            "position": 22,
            "movement": -1
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 84,
            "movement": 75
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 29,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
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
            "movement": 1
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
            "position": 67,
            "movement": 22
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 81,
            "movement": 36
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 133,
            "movement": 30
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 154,
            "movement": -31
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 186,
            "movement": -22
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 24,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 77,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": -41
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -8
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
            "movement": -4
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
            "position": 63,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 181,
            "movement": -88
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
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -29
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
            "position": 21,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": 1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 191,
            "movement": -88
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 79,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": -4
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LY",
            "name": "Libya",
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
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
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
            "position": 39,
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
            "position": 91,
            "movement": -4
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
            "position": 80,
            "movement": -69
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
            "position": 28,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Giza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 122,
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
            "position": 37,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
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
            "position": 26,
            "movement": null,
            "status": "new"
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
            "position": 129,
            "movement": -31
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
            "position": 76,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cloak & Dagger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 124,
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 126,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 50,
            "movement": -9
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
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
    "title": "Gum Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": 15
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
            "position": 130,
            "movement": 12
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 131,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 133,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 146,
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
            "position": 188,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 128,
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
            "position": 158,
            "movement": 31
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
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
            "position": 68,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -115
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
            "country": "EG",
            "name": "Egypt",
            "position": 190,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Only You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 199,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Redemption",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 150,
            "movement": null,
            "status": "new"
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
            "position": 158,
            "movement": -8
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
            "position": 181,
            "movement": -4
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
  