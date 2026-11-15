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
  export const liveChartsUpdated = "2026-11-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-15T06:39Z";
  
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": 8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 16,
            "movement": 27
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 17,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 18,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 19,
            "movement": 5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 24,
            "movement": 16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": 9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 33,
            "movement": 21
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 33,
            "movement": 31
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 34,
            "movement": 105
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 34,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 11
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 43,
            "movement": 116
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 44,
            "movement": 44
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": 16
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 50,
            "movement": 9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 51,
            "movement": 27
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 53,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 61,
            "movement": 15
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 63,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 63,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 68,
            "movement": 21
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 68,
            "movement": 12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": 19
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 77,
            "movement": -25
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 79,
            "movement": 3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 86,
            "movement": 78
          },
          {
            "country": "FR",
            "name": "France",
            "position": 91,
            "movement": 37
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 98,
            "movement": 23
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 107,
            "movement": 14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 108,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 112,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 130,
            "movement": 41
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 151,
            "movement": -19
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 151,
            "movement": -66
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 158,
            "movement": -20
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 185,
            "movement": -58
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 195,
            "movement": -84
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 18
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 9,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 15,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 17,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 18,
            "movement": 30
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 26
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 20,
            "movement": 12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 20,
            "movement": -17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 26,
            "movement": -10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 38,
            "movement": -13
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 40,
            "movement": -13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": 32
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 50,
            "movement": 50
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 53,
            "movement": 20
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 55,
            "movement": -21
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 59,
            "movement": -23
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 61,
            "movement": 25
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 65,
            "movement": -41
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 68,
            "movement": -45
          },
          {
            "country": "US",
            "name": "United States",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -18
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 72,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 96,
            "movement": -77
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 98,
            "movement": -58
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
            "position": 6,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 18,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 22,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 26,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": 23
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 57,
            "movement": -16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 58,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 66,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 91,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 94,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 97,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 98,
            "movement": 20
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 113,
            "movement": 6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 138,
            "movement": 11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 145,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 155,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 164,
            "movement": 3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 196,
            "movement": -3
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 49,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 53,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 54,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 56,
            "movement": 4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 59,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 75,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 79,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 81,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 83,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 86,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 95,
            "movement": -12
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 98,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 99,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 103,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 104,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 108,
            "movement": 16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 110,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 143,
            "movement": 4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 170,
            "movement": -8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 177,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 187,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 193,
            "movement": -26
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "AM",
            "name": "Armenia",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 112
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 17,
            "movement": 32
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 54,
            "movement": 12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 67,
            "movement": 120
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 85,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 88,
            "movement": -63
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 102,
            "movement": -46
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 175,
            "movement": null,
            "status": "new"
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
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 73
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 26,
            "movement": 63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 55,
            "movement": 121
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 64
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": -30
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 106,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 108,
            "movement": 43
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 112,
            "movement": -57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 137,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -20
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 180,
            "movement": -79
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": -87
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -17
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 111,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": -19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 172,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
            "movement": -74
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
            "position": 34,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
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
            "position": 30,
            "movement": -3
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
            "position": 46,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 64,
            "movement": 51
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 68,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 106,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 138,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
            "movement": 20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -59
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 58,
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
            "position": 149,
            "movement": 4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 89
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
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
            "country": "NA",
            "name": "Namibia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": -9
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -34
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 93,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": -59
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": -28
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
            "movement": -89
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 142,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 156,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -47
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
            "position": 50,
            "movement": -3
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
            "position": 164,
            "movement": -9
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -62
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": -78
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
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -77
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -75
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
            "country": "SR",
            "name": "Suriname",
            "position": 22,
            "movement": 147
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 73,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 76
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 98,
            "movement": -7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": 59
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 161,
            "movement": -73
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
            "movement": -45
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
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
            "position": 48,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
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
            "position": 20,
            "movement": -14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 85,
            "movement": 94
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 151,
            "movement": -14
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 66
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
            "movement": -30
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 150,
            "movement": -22
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 163,
            "movement": -73
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 194,
            "movement": -145
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 72,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -18
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
            "position": 42,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -61
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -53
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -52
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
            "position": 53,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": 12
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": 18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 199,
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
            "position": 71,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
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
            "position": 99,
            "movement": -7
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
            "position": 83,
            "movement": 103
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": null,
            "status": "new"
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -5
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
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 63
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
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
            "position": 55,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 75,
            "movement": 0
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
            "position": 118,
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
            "position": 185,
            "movement": -8
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -41
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
            "position": 167,
            "movement": -18
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
            "position": 147,
            "movement": -7
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
            "position": 92,
            "movement": 19
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 156,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IN",
            "name": "India",
            "position": 63,
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
            "position": 13,
            "movement": -2
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
            "position": 16,
            "movement": -2
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
            "position": 111,
            "movement": -71
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": 51
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
            "position": 71,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
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
            "country": "DM",
            "name": "Dominica",
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
            "movement": 1
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
            "position": 137,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": 11
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
            "country": "BJ",
            "name": "Benin",
            "position": 186,
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
            "position": 135,
            "movement": 1
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
            "position": 163,
            "movement": -1
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
  