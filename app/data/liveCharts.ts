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
  export const liveChartsUpdated = "2026-09-25";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-25T21:38Z";
  
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 8,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 12,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": 15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": -2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": -2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 22,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": -4
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 23,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 24,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 25,
            "movement": -8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 26,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 31,
            "movement": -22
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 33,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": 7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 33,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 38,
            "movement": -11
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 39,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 46,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 49,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 50,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 50,
            "movement": -20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 51,
            "movement": -11
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 57,
            "movement": -13
          },
          {
            "country": "FR",
            "name": "France",
            "position": 61,
            "movement": -20
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 62,
            "movement": -48
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 64,
            "movement": -15
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 67,
            "movement": -24
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 69,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 73,
            "movement": -29
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 79,
            "movement": -12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 82,
            "movement": -30
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 82,
            "movement": -4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 84,
            "movement": -33
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 86,
            "movement": -14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 88,
            "movement": -13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 97,
            "movement": -16
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 101,
            "movement": -37
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 112,
            "movement": 9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 133,
            "movement": -19
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 134,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 137,
            "movement": -92
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 139,
            "movement": -21
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 156,
            "movement": -21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": 21
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 177,
            "movement": -30
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 186,
            "movement": -62
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 191,
            "movement": -64
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
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
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 11,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 13,
            "movement": 52
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 14,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": 10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 73
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 19,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 25,
            "movement": -23
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 26,
            "movement": 16
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 32,
            "movement": 47
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 32,
            "movement": 47
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 34,
            "movement": 25
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 35,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 49,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 57,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 66,
            "movement": -51
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": -53
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 100,
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
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": -9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 25,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 28,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 31,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 55,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 55,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 57,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 61,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 61,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 66,
            "movement": -5
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 87,
            "movement": -14
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 88,
            "movement": -8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 92,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 96,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 129,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 133,
            "movement": 10
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 148,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 151,
            "movement": 20
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 173,
            "movement": -10
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 190,
            "movement": 10
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
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 27,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 30,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 30,
            "movement": 4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 31,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 32,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 36,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 42,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 43,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 44,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 47,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 54,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 57,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 65,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 68,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 77,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 84,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 92,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 99,
            "movement": -11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 107,
            "movement": 11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 114,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 115,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 143,
            "movement": 2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 176,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": 20
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 63
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 33
          },
          {
            "country": "FR",
            "name": "France",
            "position": 17,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": 38
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 22,
            "movement": -18
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 28,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 31,
            "movement": -24
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 42,
            "movement": 30
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 49,
            "movement": -38
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 52,
            "movement": -20
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 58,
            "movement": -18
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 73,
            "movement": -16
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 98,
            "movement": -20
          },
          {
            "country": "US",
            "name": "United States",
            "position": 105,
            "movement": -34
          },
          {
            "country": "IN",
            "name": "India",
            "position": 159,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 81
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 119,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -45
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 139,
            "movement": 38
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 144,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -43
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 154,
            "movement": -106
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": -38
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
            "position": 42,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -8
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
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 89,
            "movement": -36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 57
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 138,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": -18
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 145,
            "movement": -86
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 146,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": 12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 173,
            "movement": -98
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": -30
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 199,
            "movement": -39
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
            "movement": 3
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
            "position": 18,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 85,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 25
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 166,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "position": 164,
            "movement": -1
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
            "movement": 1
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
            "position": 97,
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 28,
            "movement": 13
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
            "position": 44,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": -22
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": -74
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": 60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 14
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 117,
            "movement": -55
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": -61
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 31,
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
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": 112
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 192,
            "movement": -98
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 198,
            "movement": -149
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
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
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
            "position": 112,
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
            "position": 184,
            "movement": -4
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
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 35,
            "movement": 73
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 47,
            "movement": 89
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": -33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": -51
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
            "movement": -17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 195,
            "movement": -62
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
            "movement": 0
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 60,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": 18
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 71,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 35
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 127,
            "movement": -36
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": -32
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 187,
            "movement": -22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 196,
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
            "position": 138,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
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
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -76
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": 3
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
            "position": 46,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": -23
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
            "position": 19,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": -58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": -71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -15
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -52
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 11
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
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
            "position": 22,
            "movement": 2
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 118,
            "movement": -38
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 123,
            "movement": -43
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 136,
            "movement": 47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 175,
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
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": -17
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
            "position": 19,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": 0
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
            "movement": 0
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
            "position": 80,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 178,
            "movement": -10
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
            "position": 26,
            "movement": 24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": 68
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": 7
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
            "position": 36,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": 49
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 194,
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
            "position": 160,
            "movement": -133
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
            "position": 174,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 138,
            "movement": -59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -29
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
            "position": 88,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 136,
            "movement": -4
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
            "position": 176,
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
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -20
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 56,
            "movement": -17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 76,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
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
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": null,
            "status": "new"
          },
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
            "position": 86,
            "movement": -5
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
            "position": 75,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 42
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 144,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 185,
            "movement": -99
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 0
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
            "position": 195,
            "movement": -19
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 118,
            "movement": -18
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": 1
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
            "position": 116,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 151,
            "movement": -103
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
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
            "position": 159,
            "movement": -5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
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
            "position": 134,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album"
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
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 80,
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
            "position": 59,
            "movement": 7
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
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Sign of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 116,
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
            "position": 175,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Pardon",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 196,
            "movement": null,
            "status": "new"
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
            "position": 139,
            "movement": -4
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
            "position": 65,
            "movement": -1
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
            "position": 187,
            "movement": 7
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
            "position": 164,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": null,
            "status": "new"
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
  