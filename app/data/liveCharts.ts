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
  export const liveChartsUpdated = "2026-11-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-23T07:44Z";
  
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
            "position": 11,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 17,
            "movement": 26
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 25,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 25,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 27,
            "movement": -8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 30,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 31,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 44,
            "movement": 33
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 44,
            "movement": 22
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 50,
            "movement": 10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 51,
            "movement": -19
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 52,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 55,
            "movement": 10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 58,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 59,
            "movement": -9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 62,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 63,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 64,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 66,
            "movement": -18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 75,
            "movement": -9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 77,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 80,
            "movement": 7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 86,
            "movement": -58
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 86,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 90,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 90,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 91,
            "movement": 53
          },
          {
            "country": "FR",
            "name": "France",
            "position": 106,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 111,
            "movement": 15
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 112,
            "movement": -40
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 130,
            "movement": 30
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 130,
            "movement": -4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 136,
            "movement": 6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 137,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 194,
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 4,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 26,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 30,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 35,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 36,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 38,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 41,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 43,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 48,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 52,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 52,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 62,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 92,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 94,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 98,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 100,
            "movement": 0
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
            "position": 6,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 29,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 31,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 34,
            "movement": 14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 35,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": 19
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 37,
            "movement": 31
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 41,
            "movement": 6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": 13
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 48,
            "movement": 22
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 56,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 68,
            "movement": 22
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 89,
            "movement": 34
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 91,
            "movement": 18
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 92,
            "movement": 25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 93,
            "movement": 25
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 95,
            "movement": -25
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 102,
            "movement": 71
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 123,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 125,
            "movement": 38
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 132,
            "movement": 54
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 140,
            "movement": 60
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 157,
            "movement": 27
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 197,
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 39,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 50,
            "movement": -8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 61,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 64,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 76,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 77,
            "movement": -11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 85,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 86,
            "movement": 11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 96,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 99,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 112,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 115,
            "movement": -21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 117,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 118,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 128,
            "movement": 8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 130,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 131,
            "movement": -22
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 134,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 149,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 180,
            "movement": -15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 180,
            "movement": -15
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 184,
            "movement": -25
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
            "position": 7,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 147
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 22,
            "movement": -13
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 13
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 27,
            "movement": -23
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 33,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 91,
            "movement": 75
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 105,
            "movement": -64
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 128,
            "movement": -15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 194,
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
            "country": "GY",
            "name": "Guyana",
            "position": 65,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 85,
            "movement": -30
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 93,
            "movement": -63
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -28
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 147,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 158,
            "movement": -109
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -21
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 53,
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
            "position": 124,
            "movement": 5
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 30,
            "movement": 58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -17
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -57
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 107,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -68
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": -53
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -64
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
            "movement": -48
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
            "movement": -40
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
            "position": 39,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
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
            "position": 71,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -4
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -9
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": -46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": -47
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
            "position": 33,
            "movement": 0
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
            "position": 21,
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
            "position": 68,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 35
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 101,
            "movement": -25
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 103,
            "movement": 72
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 195,
            "movement": -77
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 200,
            "movement": -89
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
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -45
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
            "position": 158,
            "movement": -19
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
            "position": 28,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 113
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 92
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 86,
            "movement": -66
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 106,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": -28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 198,
            "movement": -63
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
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 144
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": 105
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -44
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 156,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 189,
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
            "position": 32,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
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
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -29
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": 35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bigger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 60,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 103
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 12
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 105,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 131,
            "movement": 28
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 136,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 167,
            "movement": -6
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 193,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
            "movement": -73
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
            "position": 40,
            "movement": -19
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
    "title": "23",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 75
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -15
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
            "position": 47,
            "movement": 25
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
            "position": 73,
            "movement": 56
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
            "position": 14,
            "movement": 1
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
            "position": 20,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 161,
            "movement": 2
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 31,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 89
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
            "movement": -42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
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
            "position": 33,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -22
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
            "country": "DM",
            "name": "Dominica",
            "position": 58,
            "movement": -36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 29
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
            "movement": -11
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
            "position": 189,
            "movement": 0
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 50,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 102,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 44
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
            "position": 108,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 194,
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
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -35
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 132,
            "movement": -48
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
            "position": 101,
            "movement": -2
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 48,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 69,
            "movement": 1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 187,
            "movement": -83
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
            "position": 197,
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
            "position": 196,
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
    "title": "It's Plenty",
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
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -1
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
            "position": 90,
            "movement": 10
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 129,
            "movement": 18
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
            "position": 163,
            "movement": -27
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
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -33
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
            "position": 105,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": -1
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
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": -17
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
            "country": "BB",
            "name": "Barbados",
            "position": 89,
            "movement": -13
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
            "movement": 3
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
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -45
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
            "position": 102,
            "movement": -20
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
            "position": 95,
            "movement": -10
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
            "position": 58,
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
            "country": "SR",
            "name": "Suriname",
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 169,
            "movement": -52
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
            "position": 184,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -4
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
            "position": 200,
            "movement": -8
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
  