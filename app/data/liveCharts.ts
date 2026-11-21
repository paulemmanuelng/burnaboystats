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
  export const liveChartsUpdated = "2026-11-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-21T07:14Z";
  
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 21,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 21,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 24,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 36,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 42,
            "movement": 6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 47,
            "movement": -13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 48,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 48,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 48,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 49,
            "movement": -20
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 53,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 55,
            "movement": 8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": 41
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 67,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 71,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 72,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 77,
            "movement": 13
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 82,
            "movement": 13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 84,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 92,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 94,
            "movement": 6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 96,
            "movement": -3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 99,
            "movement": 3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 112,
            "movement": 16
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 113,
            "movement": -54
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 117,
            "movement": 36
          },
          {
            "country": "FR",
            "name": "France",
            "position": 129,
            "movement": 8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 132,
            "movement": -14
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 135,
            "movement": -53
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 149,
            "movement": 9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 156,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 182,
            "movement": -31
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 10,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 34,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 36,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 50,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 62,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 66,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 70,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 77,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 95,
            "movement": -25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 99,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 105,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 118,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 121,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 125,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 136,
            "movement": 15
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 164,
            "movement": 21
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 174,
            "movement": 9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 180,
            "movement": 8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 186,
            "movement": -15
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 191,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
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
            "country": "TR",
            "name": "Turkey",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 24,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 25,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 32,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 41,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 42,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 44,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 66,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 67,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 74,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 80,
            "movement": 0
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 60,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 60,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 64,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 70,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 73,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 82,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 86,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 101,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 102,
            "movement": -13
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 104,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 110,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 112,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 115,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 117,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 127,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 128,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 137,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 149,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 167,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 175,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 185,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 51,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 153,
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
            "country": "QA",
            "name": "Qatar",
            "position": 41,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 114,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": 50
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 139,
            "movement": 21
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 141,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 158,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 169,
            "movement": -47
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 194,
            "movement": -136
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
            "position": 53,
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
            "position": 129,
            "movement": -1
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
            "position": 60,
            "movement": 0
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -39
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 70,
            "movement": 74
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 74,
            "movement": 108
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 100,
            "movement": 85
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 118,
            "movement": 52
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 138,
            "movement": -114
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -109
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 190,
            "movement": -133
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 138,
            "movement": -39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": 30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 191,
            "movement": -98
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
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
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
            "position": 17,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -46
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": 21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 133,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -33
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": -44
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 43
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -28
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -38
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": -93
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 186,
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
            "position": 27,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -35
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": -113
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -24
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
            "position": 31,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": -58
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 195,
            "movement": -40
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
            "position": 71,
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
            "position": 179,
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
            "position": 15,
            "movement": 0
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
            "position": 18,
            "movement": 3
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
            "position": 33,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": -22
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 113,
            "movement": 75
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
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
            "position": 167,
            "movement": 3
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
            "position": 4,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -13
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
            "position": 71,
            "movement": -47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": 27
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
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": 0
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
            "position": 160,
            "movement": -7
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 37,
            "movement": 125
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 43
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 125,
            "movement": -22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 189,
            "movement": -4
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
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -1
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
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -50
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 26
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
            "movement": 73
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": -21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": 53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 0
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
            "position": 77,
            "movement": -20
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
            "position": 24,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 44,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 70,
            "movement": 1
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
            "position": 112,
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
            "position": 109,
            "movement": 14
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 169,
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
            "position": 140,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
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
            "position": 80,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": 11
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
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
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -52
          },
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -7
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 39,
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
            "position": 99,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 12,
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 11,
            "movement": 0
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 57,
            "movement": -3
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
            "position": 75,
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
            "position": 69,
            "movement": -15
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
    "title": "Wild Dreams",
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 101,
            "movement": null,
            "status": "new"
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
            "position": 74,
            "movement": 6
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
            "position": 191,
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
            "position": 58,
            "movement": 2
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -111
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
            "position": 157,
            "movement": -1
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
            "position": 183,
            "movement": 9
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
  