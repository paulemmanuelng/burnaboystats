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
  export const liveChartsUpdated = "2026-11-17";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-17T20:59Z";
  
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
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
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
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 17,
            "movement": 2
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 24,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": -12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 35,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 36,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 40,
            "movement": 56
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 41,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 48,
            "movement": -12
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 50,
            "movement": -12
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 53,
            "movement": 54
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 56,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 58,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 64,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 64,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 76,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 77,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 78,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 79,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 79,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 80,
            "movement": -18
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 84,
            "movement": -15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 93,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 94,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 102,
            "movement": -58
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 103,
            "movement": -37
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 111,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 114,
            "movement": -11
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 114,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 115,
            "movement": 35
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 153,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 157,
            "movement": -43
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 158,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 172,
            "movement": -11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 197,
            "movement": -90
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -7
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 15,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": 8
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": 11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 30,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 34,
            "movement": -20
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 40,
            "movement": -24
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": 14
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 53,
            "movement": -13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 54,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 55,
            "movement": -11
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 65,
            "movement": -29
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 85,
            "movement": -35
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -59
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 96,
            "movement": -41
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
            "position": 7,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 21,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 23,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 36,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 36,
            "movement": -15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 56,
            "movement": -19
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": -17
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 60,
            "movement": -20
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 67,
            "movement": -13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 71,
            "movement": -16
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 87,
            "movement": -6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 99,
            "movement": -23
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 122,
            "movement": -57
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 125,
            "movement": -21
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 128,
            "movement": -48
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 137,
            "movement": -41
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 143,
            "movement": -51
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 157,
            "movement": -21
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 169,
            "movement": -36
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 172,
            "movement": -42
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 190,
            "movement": -35
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
            "position": 36,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 54,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 64,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 67,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 76,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 81,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 87,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 89,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 93,
            "movement": -18
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 94,
            "movement": 10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 100,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 104,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 108,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 120,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 123,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 137,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 139,
            "movement": -22
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 152,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 154,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 176,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 198,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 6,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": 37
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 24,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 84,
            "movement": -14
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 95,
            "movement": -35
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 100,
            "movement": -27
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 147,
            "movement": -15
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 173,
            "movement": -105
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
            "country": "GY",
            "name": "Guyana",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 81,
            "movement": 43
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 85,
            "movement": 96
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": 68
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 114,
            "movement": -54
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 117,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": 37
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 120,
            "movement": -53
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 122,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": -90
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 183,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -89
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 193,
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
            "movement": -1
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
            "country": "SR",
            "name": "Suriname",
            "position": 16,
            "movement": 20
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 59,
            "movement": 48
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 92,
            "movement": -46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": -15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 128,
            "movement": -27
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 137,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 141,
            "movement": -33
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 144,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": 9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 151,
            "movement": -22
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -2
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
            "position": 16,
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
            "position": 151,
            "movement": -5
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
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 92,
            "movement": 95
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": 46
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": -20
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
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
            "position": 30,
            "movement": -3
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
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": 109
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": -60
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 179,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
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
            "movement": 2
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
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 24
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
            "movement": 9
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
            "position": 85,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -18
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 118,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -20
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 157,
            "movement": 35
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 161,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 193,
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
            "movement": -12
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
            "position": 42,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": 37
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
            "position": 68,
            "movement": 16
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 32
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 24
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
            "position": 25,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 164,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
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
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": -5
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
            "position": 36,
            "movement": 37
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 130,
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
            "position": 149,
            "movement": -2
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
            "position": 58,
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": -38
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "country": "DM",
            "name": "Dominica",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -14
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
            "position": 188,
            "movement": -19
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": 18
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
            "movement": -3
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
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 103,
            "movement": -54
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": -29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
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
            "position": 29,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
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
            "country": "LB",
            "name": "Lebanon",
            "position": 93,
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
            "position": 105,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 198,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 53,
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
            "country": "PE",
            "name": "Peru",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -18
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
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Common Person",
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -16
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -68
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 28
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 72,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 3
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
            "position": 28,
            "movement": -2
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
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -35
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
            "position": 166,
            "movement": 19
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
            "position": 166,
            "movement": 4
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
            "country": "TN",
            "name": "Tunisia",
            "position": 164,
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
            "country": "CL",
            "name": "Chile",
            "position": 152,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
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
    "title": "Tshwala Bam",
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
            "position": 18,
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": null,
            "status": "new"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -32
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
            "position": 136,
            "movement": 25
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 108,
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
            "position": 175,
            "movement": -65
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
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 34
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
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
            "position": 185,
            "movement": -5
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
  