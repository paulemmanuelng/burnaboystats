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
  export const liveChartsUpdated = "2026-09-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-24T11:50Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 21,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 1,
            "movement": 1
          },
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
            "country": "CA",
            "name": "Canada",
            "position": 1,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
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
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
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
            "country": "MT",
            "name": "Malta",
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
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
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
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
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
            "country": "MA",
            "name": "Morocco",
            "position": 4,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 5,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 6,
            "movement": 2
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 6,
            "movement": -2
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 6,
            "movement": -3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": -3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 9,
            "movement": -3
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 9,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 10,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": -4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 11,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 13,
            "movement": -4
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 13,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 13,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 16,
            "movement": -2
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 17,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 18,
            "movement": -15
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 20,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 26,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 60,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 1
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 10,
            "movement": 77
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 16,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 16,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 17,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 18,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 18,
            "movement": -6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 23,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 26,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 27,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 28,
            "movement": 5
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 32,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 32,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 35,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 36,
            "movement": -11
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 38,
            "movement": 44
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 40,
            "movement": 46
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 42,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 42,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 43,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 46,
            "movement": -8
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 46,
            "movement": -27
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 47,
            "movement": -17
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 50,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 55,
            "movement": -15
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 65,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 69,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 73,
            "movement": -20
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 77,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": 5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 94,
            "movement": -10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 102,
            "movement": -15
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 112,
            "movement": -48
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 115,
            "movement": -22
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 115,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 117,
            "movement": 34
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 129,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 133,
            "movement": 14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 134,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 134,
            "movement": 10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 142,
            "movement": -21
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 200,
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
            "country": "MA",
            "name": "Morocco",
            "position": 2,
            "movement": 17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 29
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 3,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 7,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 13,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 13,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 14,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": 74
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 17,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 18,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 19,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 23,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": 19
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 24,
            "movement": 20
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": -8
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 36,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 37,
            "movement": 35
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 42,
            "movement": -20
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 44,
            "movement": -19
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": -28
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 58,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": -22
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 73,
            "movement": -40
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 79,
            "movement": -40
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": -27
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 2,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 4
          },
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
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 24,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 26,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 29,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 35,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 41,
            "movement": 27
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 47,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 49,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -33
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 52,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 54,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 57,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 60,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 64,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 68,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 79,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 87,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 122,
            "movement": 11
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 124,
            "movement": 17
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 134,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 136,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 144,
            "movement": 2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 180,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 193,
            "movement": -17
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
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 17,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 30,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 32,
            "movement": -4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 34,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 34,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 34,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 41,
            "movement": -5
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 41,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 42,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 58,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 62,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 66,
            "movement": -5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 74,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 83,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 86,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 88,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 106,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 113,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 118,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 145,
            "movement": -12
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 164,
            "movement": -4
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
            "position": 3,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 176
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": 12
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 15,
            "movement": 147
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 20,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 37,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 52,
            "movement": -23
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 53,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": 24
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 65,
            "movement": 44
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 72,
            "movement": 9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 72,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 87,
            "movement": -79
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 91,
            "movement": -54
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 92,
            "movement": -7
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 184,
            "movement": -145
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
            "position": 23,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 90,
            "movement": 57
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 155,
            "movement": 20
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
            "movement": -10
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
            "position": 37,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
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
            "position": 32,
            "movement": -1
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
            "country": "YE",
            "name": "Yemen",
            "position": 15,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": 35
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 98,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": -4
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": -55
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 189,
            "movement": -4
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
            "position": 29,
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 7
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 60,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 59
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 66
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": 7
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 33,
            "movement": 1
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
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 92,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 96
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": 19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 163,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
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
            "position": 150,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": -18
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -83
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
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
            "position": 24,
            "movement": 1
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": 9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": -4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": 23
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
            "movement": -80
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
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
            "position": 117,
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
            "position": 180,
            "movement": -13
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": -38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -34
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 110,
            "movement": -50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": -32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": -17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 164,
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
            "position": 30,
            "movement": -1
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 29,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 47,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 120
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 83,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 109,
            "movement": 17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": 19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 142,
            "movement": 6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 143,
            "movement": -61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": -23
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
            "position": 131,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 188,
            "movement": -12
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": -53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -84
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": -58
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 166,
            "movement": -119
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -2
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
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 77,
            "movement": 37
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 133,
            "movement": 58
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 150,
            "movement": 39
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
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
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
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
            "position": 174,
            "movement": -8
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 70
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": -4
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
            "position": 44,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 174,
            "movement": -71
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 106,
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
            "name": "Swaziland",
            "position": 37,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 174,
            "movement": -42
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
            "position": 49,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": -3
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -5
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
            "position": 199,
            "movement": -158
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
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
            "position": 79,
            "movement": null,
            "status": "re"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 183,
            "movement": 2
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
            "position": 81,
            "movement": 2
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
            "position": 171,
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
            "position": 81,
            "movement": -1
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
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 135,
            "movement": -23
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
            "position": 114,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -18
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
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
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
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Whiskey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 147
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
            "position": 60,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 73,
            "movement": 50
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Heaven's Gate",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Masculine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -37
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
            "position": 140,
            "movement": 36
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
    "title": "Own It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 87,
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
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 87,
            "movement": -4
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 64,
            "movement": -1
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
            "position": 141,
            "movement": -6
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
            "country": "NE",
            "name": "Niger",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": 0
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
            "position": 152,
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
  