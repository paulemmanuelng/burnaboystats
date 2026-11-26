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
  export const liveChartsBuiltAt = "2026-11-26T21:37Z";
  
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
            "country": "OM",
            "name": "Oman",
            "position": 13,
            "movement": 25
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": 9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 29,
            "movement": 37
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 34,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 40,
            "movement": -6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 42,
            "movement": 82
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 45,
            "movement": 10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 57,
            "movement": -19
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 58,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 58,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 65,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 69,
            "movement": -31
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 69,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 71,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 74,
            "movement": -14
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 80,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 83,
            "movement": 13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 87,
            "movement": -20
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 90,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 97,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 115,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 125,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 126,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 128,
            "movement": -18
          },
          {
            "country": "FR",
            "name": "France",
            "position": 141,
            "movement": -17
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 145,
            "movement": -26
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 166,
            "movement": -44
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 169,
            "movement": 7
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 185,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 187,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 200,
            "movement": -28
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 6,
            "movement": 24
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 11,
            "movement": -6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 14,
            "movement": 6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": 9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 20,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 21,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 23,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": -23
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": -13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 40,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 45,
            "movement": -18
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 48,
            "movement": -17
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 58,
            "movement": 14
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 67,
            "movement": -20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 70,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 70,
            "movement": -40
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 86,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 91,
            "movement": 8
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 100,
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
            "position": 11,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 19,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 42,
            "movement": 9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 44,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 45,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 49,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 53,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 58,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 64,
            "movement": 15
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 69,
            "movement": 12
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 77,
            "movement": 11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 79,
            "movement": 12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 83,
            "movement": 5
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
            "position": 110,
            "movement": 30
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 130,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 132,
            "movement": 26
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 140,
            "movement": 11
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 142,
            "movement": 42
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 157,
            "movement": 36
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 162,
            "movement": 5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 190,
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
            "position": 58,
            "movement": 2
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
            "position": 84,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 84,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 87,
            "movement": -3
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
            "position": 130,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 140,
            "movement": 11
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
            "country": "SE",
            "name": "Sweden",
            "position": 155,
            "movement": -14
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 166,
            "movement": 3
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
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": 91
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 53,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 76,
            "movement": -65
          },
          {
            "country": "FR",
            "name": "France",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 142,
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
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 42
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 121,
            "movement": 72
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -42
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": -35
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 187,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": 2
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
            "position": 152,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 94,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": 49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 117,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": 78
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 122,
            "movement": -55
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 143,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -65
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": -66
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -57
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 192,
            "movement": -78
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -18
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 105,
            "movement": -73
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 122,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 170,
            "movement": -53
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -63
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
            "position": 57,
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
            "position": 119,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
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
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 176
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 15
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": -38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 170,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": -35
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
            "country": "LY",
            "name": "Libya",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 80
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 119,
            "movement": -36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -84
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 178,
            "movement": -62
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 199,
            "movement": -74
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
            "movement": 0
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
            "position": 94,
            "movement": -27
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 87
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 146,
            "movement": -36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 194,
            "movement": -31
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 95,
            "movement": -35
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 100,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": 37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -24
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": -22
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 198,
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
            "position": 182,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -3
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
            "position": 23,
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
            "position": 73,
            "movement": 6
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
            "position": 95,
            "movement": -81
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 141,
            "movement": 11
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 90,
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
    "title": "23",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": -25
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
            "position": 25,
            "movement": -2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -16
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
            "position": 15,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 151
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -49
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -103
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
            "position": 31,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
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
            "position": 156,
            "movement": 6
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
            "position": 28,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": -73
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 122,
            "movement": -79
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 178,
            "movement": -67
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
            "movement": 22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 100,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 143,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
            "movement": -95
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
            "country": "AI",
            "name": "Anguilla",
            "position": 30,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 73,
            "movement": -1
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
            "position": 50,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 3
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
            "position": 166,
            "movement": -6
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
            "position": 149,
            "movement": -103
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
            "position": 154,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
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
            "position": 153,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": -3
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
            "position": 68,
            "movement": -3
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
            "position": 120,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Vanilla",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LB",
            "name": "Lebanon",
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
    "title": "Second Sermon",
    "platforms": [
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 65,
            "movement": -40
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
            "position": 124,
            "movement": 20
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 78,
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
            "position": 62,
            "movement": -1
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
            "position": 136,
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
            "position": 161,
            "movement": -25
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
            "movement": 1
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
  