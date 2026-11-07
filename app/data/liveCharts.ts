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
  export const liveChartsUpdated = "2026-11-07";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-07T13:07Z";
  
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
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
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
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": 13
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 16,
            "movement": 110
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": 8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 18,
            "movement": 27
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 21,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 21,
            "movement": 15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 30,
            "movement": -10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 33,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 34,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 38,
            "movement": 11
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 47,
            "movement": 6
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 51,
            "movement": 6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 51,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": 3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 69,
            "movement": -22
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 69,
            "movement": 5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 73,
            "movement": -5
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 73,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 74,
            "movement": 69
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 85,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 90,
            "movement": 23
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 91,
            "movement": -11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 92,
            "movement": -32
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 106,
            "movement": -16
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 108,
            "movement": 6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 116,
            "movement": -39
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 131,
            "movement": -46
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 149,
            "movement": -42
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 151,
            "movement": -10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 179,
            "movement": -33
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 183,
            "movement": -108
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 194,
            "movement": 2
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 11,
            "movement": null,
            "status": "new"
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 18,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 19,
            "movement": -5
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 19,
            "movement": 72
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 26,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 29,
            "movement": 33
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 33,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 37,
            "movement": 13
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 42,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 43,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 47,
            "movement": -20
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 60,
            "movement": -40
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 83,
            "movement": -37
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 88,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 17,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 22,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 33,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 42,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 51,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 56,
            "movement": -17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 57,
            "movement": 7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": 8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 76,
            "movement": -13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 82,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 87,
            "movement": 21
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 92,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 96,
            "movement": 25
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 102,
            "movement": 20
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 114,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 115,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 130,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 157,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 157,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 162,
            "movement": 12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 199,
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 42,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 62,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 62,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 68,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 69,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 71,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 72,
            "movement": -17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 73,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 77,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 91,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 93,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 105,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 110,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 128,
            "movement": 8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 131,
            "movement": -15
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 131,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 134,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 159,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 170,
            "movement": -6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 172,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 190,
            "movement": -16
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 17,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": 25
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 25,
            "movement": 60
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 27,
            "movement": -26
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 36,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 55,
            "movement": -15
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 68,
            "movement": -60
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 76,
            "movement": -18
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 86,
            "movement": -24
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 184,
            "movement": -67
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
            "position": 31,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 33,
            "movement": 62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 111,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 113,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": 2
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
            "position": 19,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 106,
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
            "position": 173,
            "movement": -5
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
            "position": 45,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": 71
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 27
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 91,
            "movement": -78
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 101,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 104,
            "movement": -10
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 182,
            "movement": -112
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 195,
            "movement": -92
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -73
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
            "position": 56,
            "movement": 0
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
            "position": 52,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": 71
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 61
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "country": "DM",
            "name": "Dominica",
            "position": 21,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
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
            "position": 143,
            "movement": -5
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
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 78
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": 66
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 111,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": -24
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
            "movement": 24
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
            "position": 43,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 7
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 21
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 63,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": 24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": -36
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": -72
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
            "movement": -23
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 41,
            "movement": 18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 117,
            "movement": 41
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": -24
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 184,
            "movement": -10
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 192,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
            "movement": -29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 199,
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
            "position": 176,
            "movement": 13
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
            "position": 7,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -24
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 136,
            "movement": -112
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -45
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -48
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": 62
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 170,
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
            "position": 18,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
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
            "country": "SR",
            "name": "Suriname",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 72,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 147,
            "movement": -49
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
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
            "position": 23,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": -69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -26
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
            "position": 20,
            "movement": -3
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": 8
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
            "country": "BW",
            "name": "Botswana",
            "position": 18,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 30,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -4
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
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 129,
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
            "position": 183,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 57,
            "movement": 36
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 58,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 160,
            "movement": -19
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
            "position": 49,
            "movement": -11
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
            "position": 81,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
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
            "country": "HU",
            "name": "Hungary",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 169,
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
            "position": 50,
            "movement": -19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": -28
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -22
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
            "position": 183,
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
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 156,
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
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
            "position": 95,
            "movement": 8
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
            "movement": -10
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
            "position": 184,
            "movement": -120
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
            "position": 72,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
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
            "position": 92,
            "movement": -2
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": 8
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
            "movement": 3
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
            "position": 82,
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
            "position": 100,
            "movement": -8
          },
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": null,
            "status": "new"
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
            "position": 85,
            "movement": 109
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
    "title": "On Form",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": -10
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 17,
            "movement": 7
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
            "position": 18,
            "movement": -12
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
            "position": 9,
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
            "position": 63,
            "movement": -10
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
            "position": 189,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Vanilla",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
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
            "position": 144,
            "movement": 19
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sons of Anarchy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 171,
            "movement": -115
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
            "position": 172,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Best of Burn Series, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 143,
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
            "position": 163,
            "movement": 7
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
            "position": 196,
            "movement": 4
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
  