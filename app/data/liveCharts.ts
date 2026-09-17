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
  export const liveChartsUpdated = "2026-09-17";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-17T11:38Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 23,
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
            "country": "HR",
            "name": "Croatia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "IT",
            "name": "Italy",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "MV",
            "name": "Maldives",
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
            "country": "NZ",
            "name": "New Zealand",
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
            "country": "PA",
            "name": "Panama",
            "position": 1,
            "movement": 1
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
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 3,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 0
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 4
          },
          {
            "country": "US",
            "name": "United States",
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
            "country": "AR",
            "name": "Argentina",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 6,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 6,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 6,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 7,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": 1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 11,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 12,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 14,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 15,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": -5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 18,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 19,
            "movement": 4
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 25,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 55,
            "movement": -2
          },
          {
            "country": "IN",
            "name": "India",
            "position": 91,
            "movement": -23
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 98,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 5,
        "entries": [
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
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 1
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 5,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 8,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 13,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 17,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 24,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 25,
            "movement": -16
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 28,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 30,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 33,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 34,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 34,
            "movement": -12
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 34,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": 33
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 41,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 43,
            "movement": -11
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 46,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 54,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 57,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 60,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 65,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 66,
            "movement": 6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 67,
            "movement": -25
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 68,
            "movement": -13
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 84,
            "movement": -11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 88,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 95,
            "movement": -16
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 105,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 114,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 123,
            "movement": -34
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 128,
            "movement": 11
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 131,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 141,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 141,
            "movement": 15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 144,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 149,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 159,
            "movement": 31
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 164,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 5,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": -4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 9
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 12,
            "movement": 76
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 17,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 17,
            "movement": 2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 20,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 22,
            "movement": -12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 31,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 33,
            "movement": -28
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 33,
            "movement": 15
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": -12
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 35,
            "movement": -22
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 37,
            "movement": 15
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 39,
            "movement": -14
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 39,
            "movement": -16
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 40,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 40,
            "movement": 2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 49,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -38
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 56,
            "movement": -15
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 77,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 83,
            "movement": -75
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 88,
            "movement": -53
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 89,
            "movement": -23
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 90,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 2,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "NL",
            "name": "Netherlands",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 25,
            "movement": -4
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 27,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 30,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 30,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 36,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 39,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 40,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 52,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 58,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 60,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 83,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 85,
            "movement": 1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 86,
            "movement": -21
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 91,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 109,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 109,
            "movement": 9
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 118,
            "movement": -19
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 151,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 169,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 173,
            "movement": 14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 195,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 200,
            "movement": -15
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
            "position": 9,
            "movement": 39
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 18,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 24,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 25,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 26,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": -9
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 30,
            "movement": -11
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": -16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 33,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 33,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": -18
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 44,
            "movement": -29
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 46,
            "movement": -21
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 57,
            "movement": -19
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 60,
            "movement": 42
          },
          {
            "country": "US",
            "name": "United States",
            "position": 64,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": -15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 70,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 96,
            "movement": -60
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 101,
            "movement": -58
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 109,
            "movement": -57
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 146,
            "movement": -62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -71
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 160,
            "movement": -74
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
            "movement": -91
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 103
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": 38
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 16,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 17,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 22,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 46,
            "movement": -13
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 57,
            "movement": -19
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 59,
            "movement": -24
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 131,
            "movement": -63
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 178
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 57
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 59,
            "movement": -15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 102,
            "movement": -10
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 102,
            "movement": -77
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": 35
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 111,
            "movement": -11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -74
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 181,
            "movement": -70
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": 9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 191,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": -24
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
            "position": 29,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -77
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 125,
            "movement": 28
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": -25
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 194,
            "movement": -40
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
            "position": 56,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
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
            "position": 31,
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
            "position": 37,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 106,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": 12
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": -2
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
            "position": 128,
            "movement": -17
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 35,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": 31
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 77,
            "movement": 9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 154,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": 43
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 134,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 170,
            "movement": 3
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
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 73,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 37
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 111,
            "movement": 54
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -69
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": -45
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 182,
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
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
            "position": 125,
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": 38
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 153,
            "movement": 46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -75
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
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
            "position": 29,
            "movement": 5
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
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 58
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": 56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 197,
            "movement": -62
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
            "position": 23,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 199,
            "movement": -55
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
            "position": 30,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 25,
            "movement": -4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": 53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -6
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -75
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 62
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 147,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": 4
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
            "position": 34,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
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
            "position": 168,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
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
            "country": "SN",
            "name": "Senegal",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 71,
            "movement": 129
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": 28
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 109,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 155,
            "movement": -44
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
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
            "position": 50,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 182,
            "movement": null,
            "status": "new"
          },
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
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 100,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 111,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": -28
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
            "position": 110,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": 32
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
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
            "position": 132,
            "movement": -7
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
            "position": 199,
            "movement": -14
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
            "position": 98,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 8
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
            "position": 40,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
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
            "position": 75,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 164,
            "movement": -88
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -76
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
            "position": 104,
            "movement": 4
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
            "position": 49,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
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
            "country": "AI",
            "name": "Anguilla",
            "position": 178,
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
            "position": 136,
            "movement": -6
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
            "position": 153,
            "movement": -7
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
            "movement": -3
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
            "position": 191,
            "movement": -87
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 22,
            "movement": -17
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
            "position": 162,
            "movement": -49
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
            "position": 98,
            "movement": -11
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
            "position": 186,
            "movement": 3
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
            "position": 186,
            "movement": -5
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
            "position": 31,
            "movement": 11
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
            "position": 187,
            "movement": -7
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
            "position": 198,
            "movement": -4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 154,
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
            "position": 94,
            "movement": -78
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
            "position": 147,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Time Flies",
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
            "position": 9,
            "movement": -3
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
            "movement": 0
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
            "country": "MY",
            "name": "Malaysia",
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
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -59
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
            "position": 100,
            "movement": -10
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
            "position": 144,
            "movement": -89
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Pree Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -10
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
            "position": 166,
            "movement": -12
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
            "position": 199,
            "movement": -28
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
            "position": 172,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Wild Dreams",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 79,
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
  