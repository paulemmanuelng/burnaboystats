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
  export const liveChartsUpdated = "2026-11-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-26T08:25Z";
  
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 26,
            "movement": -11
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 33,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 35,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 37,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 38,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 38,
            "movement": 33
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 55,
            "movement": -10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 59,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 60,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 66,
            "movement": 37
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 67,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 74,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 77,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 78,
            "movement": 20
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 81,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 97,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 98,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 109,
            "movement": 6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 110,
            "movement": 2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 112,
            "movement": -6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 119,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 122,
            "movement": -8
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 124,
            "movement": 18
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 136,
            "movement": 31
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 172,
            "movement": -30
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 175,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 176,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 195,
            "movement": -159
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
            "position": 5,
            "movement": 10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 20
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": 11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 18,
            "movement": 71
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": 24
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 42
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 26,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 27,
            "movement": 38
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 30,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 31,
            "movement": -14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 31,
            "movement": 38
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": 5
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 51,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": -19
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 72,
            "movement": -39
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 93,
            "movement": -50
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 99,
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 45,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 46,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 47,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 58,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 62,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 79,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 81,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 88,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 88,
            "movement": -14
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 91,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 95,
            "movement": -25
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 140,
            "movement": 13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 146,
            "movement": 21
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 151,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 158,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 167,
            "movement": -15
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 193,
            "movement": -12
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 43,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 60,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 77,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 80,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 83,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 84,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 87,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 100,
            "movement": 29
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 112,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 121,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 126,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 126,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 133,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 140,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 141,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 145,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 148,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 169,
            "movement": -22
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 170,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 172,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 180,
            "movement": -8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 101
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 14,
            "movement": 20
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 34,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 35,
            "movement": 28
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 57,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 58,
            "movement": -11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 71,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 89,
            "movement": -14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": -69
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": 15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 193,
            "movement": -49
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 6
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 67,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 111,
            "movement": -47
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": 63
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 132,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 162,
            "movement": 29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 32,
            "movement": 87
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 110,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 117,
            "movement": -48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 164,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": -36
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 56,
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
            "position": 127,
            "movement": -8
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 37
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 88,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": -4
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 0
          },
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
    "title": "Bigger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 83,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": 20
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 116,
            "movement": -26
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 125,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -68
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 150,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 176,
            "movement": -57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
            "movement": -13
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
            "position": 36,
            "movement": 9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -41
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
            "movement": 17
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
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": -10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 110,
            "movement": 40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 163,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": -43
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
            "position": 156,
            "movement": 1
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
            "position": 5,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -43
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
            "movement": -79
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -115
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 192,
            "movement": -115
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
    "title": "23",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": 32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 182,
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
            "position": 23,
            "movement": 4
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
            "position": 15,
            "movement": 6
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
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -1
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 72,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
            "movement": 0
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
            "position": 14,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
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
            "position": 152,
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 172
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 187,
            "movement": -154
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": -50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
    "title": "Way Too Big",
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
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": 58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -16
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
            "position": 162,
            "movement": 16
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 111,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": -74
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 60,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 85,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 95,
            "movement": 60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 200,
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
            "movement": 4
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
            "position": 65,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 77
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 77,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": -39
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
            "position": 165,
            "movement": -16
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
            "position": 160,
            "movement": 24
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
            "position": 86,
            "movement": -83
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
            "position": 104,
            "movement": 10
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
            "position": 76,
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": -2
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
            "position": 135,
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
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": 93
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 150,
            "movement": -9
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 174,
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 72,
            "movement": 1
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
            "position": 160,
            "movement": null,
            "status": "new"
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
            "position": 114,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 184,
            "movement": -44
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
            "position": 145,
            "movement": -5
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
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
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
            "position": 130,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 5
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
            "position": 144,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 148,
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 166,
            "movement": -43
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
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
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
    "title": "Second Sermon",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alarm Clock",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bebo",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Comma",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Time Flies",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Monsters You Made",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Wonderful",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Naughty By Nature",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Fit Vex",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Wettin Dey Sup",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Cloak & Dagger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
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
            "position": 172,
            "movement": 7
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
    "title": "Dem Dey",
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
    "title": "Want It All",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Deja Vu",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
    "title": "Big 7",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 61,
            "movement": 0
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 145,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Update",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -22
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
            "position": 159,
            "movement": -12
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
            "country": "GM",
            "name": "Gambia",
            "position": 131,
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
            "position": 143,
            "movement": 6
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
            "position": 178,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Level Up (Twice As Tall)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
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
    ]
  },
  {
    "title": "Onyeka (Baby)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
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
    ]
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
  