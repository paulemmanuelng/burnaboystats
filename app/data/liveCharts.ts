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
  export const liveChartsBuiltAt = "2026-11-23T23:57Z";
  
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
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 23,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 28,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 30,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 32,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 33,
            "movement": 18
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 34,
            "movement": -9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 41,
            "movement": -10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 42,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 47,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": -18
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 55,
            "movement": -11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 62,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 63,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 64,
            "movement": -12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 76,
            "movement": -14
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 76,
            "movement": -18
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 80,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 80,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 86,
            "movement": -36
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 90,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 90,
            "movement": -35
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 91,
            "movement": -14
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 98,
            "movement": -8
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 103,
            "movement": 27
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 107,
            "movement": -21
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 113,
            "movement": -69
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 114,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 131,
            "movement": -40
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 148,
            "movement": -37
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 153,
            "movement": -73
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 166,
            "movement": -54
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 178,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 181,
            "movement": -45
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 186,
            "movement": -49
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
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 15,
            "movement": null,
            "status": "new"
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 18,
            "movement": 44
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 18,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 19,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": -4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 21,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 22,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 30,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 34,
            "movement": 8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 35,
            "movement": 17
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 35,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 36,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 41,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 42,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": 52
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 49,
            "movement": -26
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 67,
            "movement": -24
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 79,
            "movement": -44
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 82,
            "movement": -45
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
            "position": 9,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": -8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": -10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 32,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 40,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 40,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 45,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 45,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 48,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 51,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 55,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 64,
            "movement": -18
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 90,
            "movement": -22
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 92,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 95,
            "movement": -25
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 109,
            "movement": -20
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 115,
            "movement": -23
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 117,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 121,
            "movement": -30
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 133,
            "movement": -10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 157,
            "movement": -8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 166,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 177,
            "movement": -37
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 177,
            "movement": -45
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 178,
            "movement": -24
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
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 46,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 52,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 66,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 69,
            "movement": -8
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
            "position": 84,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 91,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 96,
            "movement": -10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 100,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 101,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 110,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 112,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 120,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 127,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 128,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 137,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 137,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 138,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 156,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 183,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 196,
            "movement": -16
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 198,
            "movement": -18
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
            "position": 3,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 76
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": 56
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 67,
            "movement": 44
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 70,
            "movement": 23
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 85,
            "movement": -10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 108,
            "movement": -97
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 128
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 90,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 33
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": 71
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": 48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": -45
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 162,
            "movement": -94
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 165,
            "movement": -50
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -53
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
            "position": 71,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
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
            "position": 28,
            "movement": 2
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 13,
            "movement": 80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 98,
            "movement": 98
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 107,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": -63
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -32
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 155,
            "movement": -23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 166,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": -108
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 177,
            "movement": -92
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
            "position": 128,
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 127,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 128,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": null,
            "status": "new"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
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
            "position": 171,
            "movement": -13
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
            "position": 69,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 86,
            "movement": 19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 104,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 141,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 190,
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
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
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
            "position": 50,
            "movement": -10
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
            "position": 125,
            "movement": 37
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 26
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 154,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": -48
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 61
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 54,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": 9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 113,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": -117
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": -91
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -52
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
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 82
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -54
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -130
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 188,
            "movement": -142
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
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
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
            "position": 191,
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
            "position": 61,
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
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
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
            "position": 33,
            "movement": 14
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
            "position": 40,
            "movement": 33
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
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": -33
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
            "position": 20,
            "movement": 0
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
            "movement": 1
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
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": -32
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
            "movement": 1
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
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": 84
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": -6
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
            "position": 9,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 35
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": -104
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "SR",
            "name": "Suriname",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 97,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 99,
            "movement": 38
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 99,
            "movement": 60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 88
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
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
            "position": 184,
            "movement": 5
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
            "position": 54,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -9
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 69,
            "movement": -34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
            "movement": -31
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
            "position": 183,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 10
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
            "position": 189,
            "movement": 7
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
            "movement": 3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
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
            "position": 28,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 69,
            "movement": 1
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
            "position": 93,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 121,
            "movement": 8
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
            "position": 150,
            "movement": 13
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
            "position": 130,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 38,
            "movement": 94
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -37
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
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
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
            "position": 139,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": 25
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": 2
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
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 56,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 56,
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
            "country": "MR",
            "name": "Mauritania",
            "position": 130,
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "Heavens Gate",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 116,
            "movement": -5
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
    "title": "Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 92,
            "movement": -9
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
            "position": 96,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
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
            "position": 108,
            "movement": -13
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
    "title": "Big 7",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
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
            "position": 108,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Wetin Man Go Do",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
            "position": 192,
            "movement": -8
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
            "position": 177,
            "movement": 0
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
  