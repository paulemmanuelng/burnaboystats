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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-09T13:22Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 15,
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
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
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
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "country": "PA",
            "name": "Panama",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
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
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": -3
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
            "country": "AR",
            "name": "Argentina",
            "position": 7,
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
            "country": "CO",
            "name": "Colombia",
            "position": 7,
            "movement": -1
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
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 7
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 8,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -2
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
            "country": "CR",
            "name": "Costa Rica",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 9,
            "movement": 0
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
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
          },
          {
            "country": "PE",
            "name": "Peru",
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
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
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": 0
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 14,
            "movement": -2
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 15,
            "movement": 3
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
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 0
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 4
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
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": 6
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -8
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 67,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 18,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 19,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 19,
            "movement": 11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 21,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 22,
            "movement": 12
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 26,
            "movement": 9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 27,
            "movement": 23
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 28,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 29,
            "movement": -17
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 31,
            "movement": 13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 33,
            "movement": -3
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 35,
            "movement": 51
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 46,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 47,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 49,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 49,
            "movement": 17
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 50,
            "movement": 6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 51,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 52,
            "movement": 4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 53,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 58,
            "movement": 11
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 62,
            "movement": 5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 63,
            "movement": -14
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 64,
            "movement": -15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 74,
            "movement": -11
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 81,
            "movement": 4
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 86,
            "movement": 34
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 96,
            "movement": 11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 107,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 122,
            "movement": -53
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 123,
            "movement": 17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 139,
            "movement": -19
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 140,
            "movement": 29
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 142,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 160,
            "movement": -77
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 161,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 168,
            "movement": 27
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 183,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 8,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 10,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 10,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": 24
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": 33
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 19,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -9
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 21,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 21,
            "movement": 9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 24,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": 20
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 32,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": 9
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 39,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": 26
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 48,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 51,
            "movement": 6
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 51,
            "movement": -32
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 88,
            "movement": -54
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 9,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 28,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 33,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 36,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 49,
            "movement": -10
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 53,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 58,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 58,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 59,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": -13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 68,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 83,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 87,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 87,
            "movement": -13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 91,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 95,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 96,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 121,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 148,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 151,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 167,
            "movement": -7
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 182,
            "movement": -31
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 186,
            "movement": -30
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
            "position": 15,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 25,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 32,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 34,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 42,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": -4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 45,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 48,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 48,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 49,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 51,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 59,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 67,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 73,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 74,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 82,
            "movement": -6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 103,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 108,
            "movement": -14
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 121,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 122,
            "movement": 9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 126,
            "movement": 11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 134,
            "movement": 10
          },
          {
            "country": "US",
            "name": "United States",
            "position": 144,
            "movement": -5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IE",
            "name": "Ireland",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 18,
            "movement": 161
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": -11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 21,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 25,
            "movement": 9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 28,
            "movement": 117
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 33,
            "movement": 17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 46,
            "movement": -40
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 50,
            "movement": -30
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 147,
            "movement": -9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 151,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 59,
            "movement": 59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": 52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 104,
            "movement": 27
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 109,
            "movement": 89
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": 72
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 45
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -18
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 179,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": -84
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": -14
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
            "position": 24,
            "movement": 2
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 57
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 55,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": 52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -56
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 147,
            "movement": 33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
            "movement": -82
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
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -2
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
            "position": 166,
            "movement": 20
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
            "movement": 1
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -3
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
            "position": 54,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": 57
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": -68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": 16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 198,
            "movement": -113
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
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": 12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 140,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -101
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 172,
            "movement": -81
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 197,
            "movement": -144
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
            "position": 144,
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
            "position": 36,
            "movement": -9
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
            "position": 40,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "position": 172,
            "movement": 8
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
            "position": 37,
            "movement": -9
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
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 61,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 71,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": 36
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 139,
            "movement": 26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 143,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 149,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 159,
            "movement": -16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 164,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 162,
            "movement": 1
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
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 167,
            "movement": -3
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 63
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 26
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": -43
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 183,
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 107,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -62
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -13
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
            "position": 24,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 87
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
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
            "movement": 1
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -25
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 53,
            "movement": 12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 161,
            "movement": -54
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 75,
            "movement": -1
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
            "name": "Swaziland",
            "position": 35,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": -27
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
            "position": 79,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
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
            "position": 62,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": -15
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
            "position": 87,
            "movement": 1
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
            "position": 35,
            "movement": -3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 45,
            "movement": -6
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
            "position": 173,
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
            "position": 136,
            "movement": 18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -4
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
            "position": 32,
            "movement": 45
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
            "position": 126,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -17
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
            "position": 68,
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
            "position": 144,
            "movement": -2
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
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
            "position": 84,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Spiritual",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
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
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 47,
            "movement": null,
            "status": "new"
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
            "position": 69,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 98,
            "movement": -9
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 164,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 3
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
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PH",
            "name": "Philippines",
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 134,
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
            "position": 167,
            "movement": 21
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
  