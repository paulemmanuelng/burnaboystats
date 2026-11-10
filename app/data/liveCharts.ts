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
  export const liveChartsUpdated = "2026-11-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-10T19:47Z";
  
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 11,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 13,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 20,
            "movement": 13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 25,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 27,
            "movement": -11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 27,
            "movement": -9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 40,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 43,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 47,
            "movement": -32
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": -12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 51,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 52,
            "movement": 34
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 55,
            "movement": -3
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
            "country": "QA",
            "name": "Qatar",
            "position": 61,
            "movement": 17
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 63,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 65,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 68,
            "movement": -15
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 79,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 81,
            "movement": -18
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 81,
            "movement": -27
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 97,
            "movement": -30
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 103,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 105,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 114,
            "movement": -21
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 118,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 120,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 126,
            "movement": 41
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 151,
            "movement": -15
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 158,
            "movement": -44
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 160,
            "movement": -64
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 176,
            "movement": -65
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 176,
            "movement": 21
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 188,
            "movement": -51
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 199,
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
            "country": "PH",
            "name": "Philippines",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 20,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 23,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 23,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 23,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": 10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": -26
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 33,
            "movement": -17
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": 43
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 43,
            "movement": -20
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 44,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": -31
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 52,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": -27
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 61,
            "movement": -16
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 82,
            "movement": -28
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 96,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 98,
            "movement": -55
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 38,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 44,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 51,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 56,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 56,
            "movement": -7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 64,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 69,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 69,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 82,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 82,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 84,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 86,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 94,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 96,
            "movement": 8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 97,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 100,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 118,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 123,
            "movement": 9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 151,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 164,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 169,
            "movement": -19
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 171,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 193,
            "movement": -12
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 28,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 31,
            "movement": 3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 31,
            "movement": 146
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": -7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 44,
            "movement": -39
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 66,
            "movement": -41
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 78,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 90,
            "movement": -17
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 100,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 161,
            "movement": -42
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 132,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": -43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": -43
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 163,
            "movement": -50
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": -47
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 186,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
            "movement": -18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": 1
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
            "position": 46,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 1
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
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 10
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 70,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 109,
            "movement": -22
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 110,
            "movement": null,
            "status": "new"
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
            "position": 123,
            "movement": 31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "DM",
            "name": "Dominica",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 39
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -69
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 149,
            "movement": -55
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 175,
            "movement": 6
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 181,
            "movement": -37
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "DM",
            "name": "Dominica",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
            "movement": -2
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 88,
            "movement": 73
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 97,
            "movement": 78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -50
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 104,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 134,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -53
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": -81
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -34
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 167,
            "movement": -100
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 196,
            "movement": -126
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
            "movement": 1
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": -77
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -87
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
            "movement": -100
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 47
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": 48
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 28,
            "movement": 3
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
            "position": 26,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": -35
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 88,
            "movement": -51
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": 30
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 109,
            "movement": 76
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -48
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 142,
            "movement": 28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": -99
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 198,
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 5
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
            "position": 33,
            "movement": 37
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 68,
            "movement": -11
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 129,
            "movement": -106
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 142,
            "movement": -26
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 147,
            "movement": -23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -1
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
            "position": 17,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -79
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
            "country": "MR",
            "name": "Mauritania",
            "position": 58,
            "movement": 60
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 66,
            "movement": -12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 67,
            "movement": 55
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": 49
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 74,
            "movement": 66
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": -58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 195,
            "movement": -11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 197,
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
            "position": 185,
            "movement": -4
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
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 25,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -1
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
            "position": 15,
            "movement": 29
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
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
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": -15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -75
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -91
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
            "position": 58,
            "movement": -4
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
            "position": 78,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 92
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 182,
            "movement": -26
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
            "position": 70,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -37
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 92,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 92
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 181,
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
            "position": 89,
            "movement": -3
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
            "position": 43,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 80,
            "movement": -2
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
            "position": 180,
            "movement": 5
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
            "position": 107,
            "movement": -7
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
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
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
            "position": 177,
            "movement": 6
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
            "position": 43,
            "movement": null,
            "status": "new"
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 21,
            "movement": 73
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
            "movement": -1
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
            "movement": -1
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
            "position": 46,
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
            "position": 124,
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
            "position": 188,
            "movement": -84
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Own It",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
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
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
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
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": -30
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
            "position": 196,
            "movement": -23
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
            "position": 148,
            "movement": 10
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
            "position": 188,
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
  