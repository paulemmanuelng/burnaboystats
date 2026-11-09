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
  export const liveChartsUpdated = "2026-11-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-09T06:38Z";
  
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
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 18,
            "movement": 5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": 2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 20,
            "movement": 11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 21,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 22,
            "movement": 9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 23,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 25,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 33,
            "movement": 14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 34,
            "movement": 13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 35,
            "movement": 9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 41,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 52,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 52,
            "movement": 7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 53,
            "movement": 8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 54,
            "movement": 7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 54,
            "movement": 13
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 62,
            "movement": 116
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 63,
            "movement": 17
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 67,
            "movement": -25
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 76,
            "movement": -19
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 91,
            "movement": 13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 94,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 96,
            "movement": 27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 108,
            "movement": 11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 111,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 116,
            "movement": 26
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 125,
            "movement": 8
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 130,
            "movement": -43
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 144,
            "movement": -42
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 148,
            "movement": -104
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 167,
            "movement": -42
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 181,
            "movement": 4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 190,
            "movement": -169
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 2,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": 22
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 8,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": -4
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 16
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 13,
            "movement": 28
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": 2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 16,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 21,
            "movement": 12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 22,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 23,
            "movement": 24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 33,
            "movement": 27
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 33,
            "movement": 9
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 34,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": 5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 41,
            "movement": 31
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 49,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 58,
            "movement": -21
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 71,
            "movement": 12
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 93,
            "movement": -18
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": 16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 29,
            "movement": 36
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 29,
            "movement": 17
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": 12
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 43,
            "movement": 27
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 12
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 49,
            "movement": 34
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 51,
            "movement": 15
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 53,
            "movement": 10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 54,
            "movement": 21
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 67,
            "movement": 48
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 67,
            "movement": 22
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
            "position": 71,
            "movement": 18
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 94,
            "movement": 30
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 101,
            "movement": 18
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 107,
            "movement": 41
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 109,
            "movement": 40
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 116,
            "movement": 9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 157,
            "movement": 15
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 195,
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 38,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 48,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 48,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 61,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 65,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 66,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 73,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 75,
            "movement": -13
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 76,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 79,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 86,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 92,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 95,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 101,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 106,
            "movement": -16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 118,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 120,
            "movement": 11
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 126,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 145,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 148,
            "movement": -17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 155,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 183,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": 73
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": -20
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": 17
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 63,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 67,
            "movement": 88
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 78,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 113,
            "movement": -22
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 115,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 116,
            "movement": -70
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 127,
            "movement": -17
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 137,
            "movement": -71
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 159,
            "movement": 17
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
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 64,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 68,
            "movement": 97
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": 30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 120,
            "movement": -27
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 121,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -63
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 9
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
            "movement": -36
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": 81
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": 32
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 131,
            "movement": -30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 134,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 143,
            "movement": -85
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 143,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -15
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
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 25,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JO",
            "name": "Jordan",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
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
            "movement": 2
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
            "position": 38,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 126,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": 9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 140,
            "movement": -68
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 160,
            "movement": 35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": 9
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
            "country": "GH",
            "name": "Ghana",
            "position": 56,
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
            "position": 155,
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
            "position": 27,
            "movement": 5
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
            "position": 43,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 63,
            "movement": 71
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 34
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 78,
            "movement": 58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 85,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 111,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -40
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 155,
            "movement": 14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "position": 15,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 61,
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
            "position": 159,
            "movement": 7
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 97,
            "movement": -54
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 132,
            "movement": 68
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": -19
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 156,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
            "movement": -31
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
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 40,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 59,
            "movement": 72
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 102,
            "movement": -45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 126,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": -83
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -31
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
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -1
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
            "position": 18,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 166,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 23,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -1
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
            "position": 63,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
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
            "position": 30,
            "movement": 57
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 169,
            "movement": 29
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
            "position": 181,
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": -35
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -6
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
            "position": 48,
            "movement": 11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 117
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 118,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 138,
            "movement": -24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 140,
            "movement": -55
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": 20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 199,
            "movement": -98
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
            "position": 186,
            "movement": 2
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 153,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
            "movement": -81
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
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 2
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
            "movement": 17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 57,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 187,
            "movement": -33
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
            "position": 32,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 39,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 48,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 104,
            "movement": 32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 141,
            "movement": 12
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
            "position": 54,
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
            "position": 63,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": -62
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": -86
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
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 130,
            "movement": -4
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
            "movement": 10
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
            "position": 44,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 77,
            "movement": 1
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 17
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
            "position": 199,
            "movement": -48
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -12
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
            "position": 197,
            "movement": 0
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
            "movement": -1
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
            "position": 92,
            "movement": -10
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
            "position": 118,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
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
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -130
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
            "position": 88,
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
            "position": 2,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": -15
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
            "position": 104,
            "movement": 8
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
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
    "title": "Check and Balance",
    "platforms": [
      {
        "platform": "iTunes",
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
            "position": 81,
            "movement": -18
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
            "position": 94,
            "movement": -7
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 188,
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
            "position": 66,
            "movement": 0
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
            "movement": -14
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
            "position": 160,
            "movement": -129
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
            "position": 161,
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
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
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
            "position": 119,
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
            "position": 156,
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
            "position": 189,
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
  