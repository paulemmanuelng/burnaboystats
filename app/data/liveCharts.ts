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
  export const liveChartsUpdated = "2026-11-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-24T22:30Z";
  
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
            "position": 15,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 28,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 32,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": 80
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 36,
            "movement": -13
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 37,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 40,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 41,
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 45,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 52,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 60,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 61,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 67,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 71,
            "movement": -9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 71,
            "movement": -38
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 72,
            "movement": 8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 73,
            "movement": -32
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 85,
            "movement": -9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 95,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 98,
            "movement": -18
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 99,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 103,
            "movement": 10
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 112,
            "movement": -26
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 114,
            "movement": -23
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 115,
            "movement": -25
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 117,
            "movement": -100
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 121,
            "movement": -45
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 142,
            "movement": -35
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 142,
            "movement": -100
          },
          {
            "country": "FR",
            "name": "France",
            "position": 149,
            "movement": -18
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 156,
            "movement": -8
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 161,
            "movement": 17
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 168,
            "movement": -65
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 197,
            "movement": -11
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
            "position": 15,
            "movement": -11
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 17,
            "movement": 5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 17,
            "movement": -12
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 18,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 22,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 25,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 26,
            "movement": -16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 27,
            "movement": -10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": -14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 30,
            "movement": -14
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 33,
            "movement": 8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 43,
            "movement": -23
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 43,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -30
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": 32
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 65,
            "movement": -23
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 65,
            "movement": -43
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 69,
            "movement": -39
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 77,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 95,
            "movement": -16
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
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 55,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 71,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 73,
            "movement": 11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 75,
            "movement": -9
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 81,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 90,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 106,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 108,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 112,
            "movement": 8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 117,
            "movement": -21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 123,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 129,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 129,
            "movement": -17
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 130,
            "movement": -20
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 139,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 141,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 147,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": -10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 172,
            "movement": 11
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 184,
            "movement": 12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 192,
            "movement": 3
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
            "position": 12,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 40,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 44,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 46,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 52,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 54,
            "movement": -13
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 61,
            "movement": -16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 74,
            "movement": -26
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 74,
            "movement": -29
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 76,
            "movement": -25
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 84,
            "movement": -29
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 85,
            "movement": -21
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 95,
            "movement": -25
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 152,
            "movement": -19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 153,
            "movement": -63
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 157,
            "movement": -42
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 159,
            "movement": -38
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 167,
            "movement": -75
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 181,
            "movement": -72
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 24,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 109
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 41,
            "movement": 29
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 67,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 99,
            "movement": -14
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
            "country": "DM",
            "name": "Dominica",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 99,
            "movement": 67
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 37
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 116,
            "movement": -103
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 123,
            "movement": 32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 135,
            "movement": 38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 139,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 175,
            "movement": -77
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 189,
            "movement": -12
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
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 58,
            "movement": -5
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
            "movement": 9
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
            "position": 41,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 99,
            "movement": 66
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -42
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -29
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 144,
            "movement": -54
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -139
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
            "position": 41,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -1
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
            "position": 70,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 14
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
    "title": "Bigger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 40
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 74,
            "movement": 12
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
            "position": 79,
            "movement": 32
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 90,
            "movement": 14
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 91,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 119,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 165,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 45,
            "movement": 5
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
            "position": 89,
            "movement": 36
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 94,
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -77
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -2
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 64,
            "movement": -10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 76,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -51
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 139,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 52
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 180,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": -29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
            "movement": -88
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 132,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 150,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": 13
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -83
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 173,
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
            "position": 157,
            "movement": 14
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 123
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 60,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 77,
            "movement": 102
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -17
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": 22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": -64
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": -85
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
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
            "position": 27,
            "movement": 6
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
            "position": 29,
            "movement": 11
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
            "position": 31,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -31
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -42
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": -2
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
            "position": 23,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 47,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
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
            "position": 154,
            "movement": 6
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
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": 120
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": -96
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
            "movement": 13
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
            "position": 65,
            "movement": 32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 79,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": -13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 137,
            "movement": -38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -94
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 181,
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
            "position": 180,
            "movement": 4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 39
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -76
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 162,
            "movement": -92
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
            "position": 60,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 67,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 117,
            "movement": 4
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
            "movement": 10
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
            "position": 100,
            "movement": 30
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
            "position": 22,
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
            "position": 78,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 141,
            "movement": -103
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
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
            "position": 101,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 149,
            "movement": 34
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
            "position": 142,
            "movement": 47
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -85
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
            "position": 34,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 7
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 164,
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
            "position": 106,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
            "movement": -50
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
            "position": 146,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -31
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
            "position": 155,
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
    "title": "JA ARA E",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": null,
            "status": "new"
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
            "position": 120,
            "movement": -64
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 86,
            "movement": -30
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
            "position": 110,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Aboboyaa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
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
    "title": "On Form",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -88
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
            "position": 63,
            "movement": -5
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
            "position": 124,
            "movement": -17
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
            "position": 127,
            "movement": -19
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -85
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Heavens Gate",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -86
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
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -87
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -88
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -89
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
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -89
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
            "position": 163,
            "movement": 14
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
  