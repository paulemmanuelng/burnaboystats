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
  export const liveChartsUpdated = "2026-09-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-18T23:38Z";
  
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
        "numberOnes": 2,
        "entries": [
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 11,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 16,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": 8
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 19,
            "movement": -18
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 20,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": -13
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 23,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 26,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 28,
            "movement": 14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 29,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 30,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 34,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 34,
            "movement": 60
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 34,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 40,
            "movement": -14
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 45,
            "movement": -12
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 46,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": -19
          },
          {
            "country": "FR",
            "name": "France",
            "position": 50,
            "movement": -12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 51,
            "movement": -17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": -11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 59,
            "movement": 2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 62,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 63,
            "movement": 15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 65,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 65,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 66,
            "movement": -8
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 77,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": -46
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 91,
            "movement": -6
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 93,
            "movement": -20
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 95,
            "movement": 45
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 106,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 111,
            "movement": 45
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 122,
            "movement": -24
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 123,
            "movement": -12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 128,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 133,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 185,
            "movement": -10
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
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 23
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 5,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 5,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": 11
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 8,
            "movement": 10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": -3
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
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 4
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
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 14,
            "movement": 10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 11
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 17,
            "movement": 17
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 22,
            "movement": 37
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": -17
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 42,
            "movement": -25
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 46,
            "movement": -37
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 47,
            "movement": 21
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -16
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 51,
            "movement": 6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 54,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": -18
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 57,
            "movement": -53
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 60,
            "movement": -40
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 65,
            "movement": 15
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 97,
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
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 29,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 31,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 31,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 35,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 37,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -33
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 55,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 62,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 66,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 78,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 78,
            "movement": 4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 88,
            "movement": -14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 99,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 105,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 117,
            "movement": 6
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 130,
            "movement": -15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 184,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 184,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 185,
            "movement": -22
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 188,
            "movement": 4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 194,
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 19,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 19,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 22,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 27,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 28,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 29,
            "movement": -3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 32,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 34,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 37,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 45,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 45,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 51,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 59,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 59,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 65,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 67,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 71,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 95,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 108,
            "movement": -12
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 109,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 146,
            "movement": 0
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 148,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 45
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": 21
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -9
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 18,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 18,
            "movement": 3
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 21,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 25,
            "movement": -16
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 26,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 29,
            "movement": -14
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 35,
            "movement": -30
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 60,
            "movement": -20
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 68,
            "movement": 17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 77,
            "movement": 47
          },
          {
            "country": "IN",
            "name": "India",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 101,
            "movement": -79
          },
          {
            "country": "ID",
            "name": "Indonesia",
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -11
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 52,
            "movement": -17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 54,
            "movement": 43
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 55,
            "movement": 119
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 64,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": -39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 109
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 106,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 107,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -74
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 136,
            "movement": -21
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 159,
            "movement": -44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -48
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 188,
            "movement": -24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 192,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": 40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 57
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": -46
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -69
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 156,
            "movement": -62
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
            "movement": -88
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
            "movement": -15
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
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": -86
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
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
            "movement": -1
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
            "position": 29,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": 46
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 96,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -23
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 104,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 170,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
            "movement": -73
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 199,
            "movement": -50
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
            "position": 197,
            "movement": -37
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
            "movement": -3
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
            "position": 119,
            "movement": 9
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
            "country": "SR",
            "name": "Suriname",
            "position": 36,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 64
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 86,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": -81
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": 45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 138,
            "movement": 46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
            "movement": -56
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 54,
            "movement": 5
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
            "position": 135,
            "movement": -15
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
            "position": 171,
            "movement": 27
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 48,
            "movement": 18
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": -9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 115,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 139,
            "movement": -12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -12
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": -81
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 190,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
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
            "position": 141,
            "movement": -23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": 10
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -16
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
            "position": 47,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 72
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 74,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 113,
            "movement": -34
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 118,
            "movement": -56
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": 51
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 174,
            "movement": -74
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": -21
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 70,
            "movement": 68
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 174,
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
            "position": 30,
            "movement": -1
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
            "position": 9,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 32,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
            "movement": -6
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
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -2
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
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -132
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 154,
            "movement": 38
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": -3
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
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 18,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 1
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
            "position": 45,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 46,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -5
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
            "position": 15,
            "movement": -8
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 17,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
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
            "movement": -13
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
            "country": "YE",
            "name": "Yemen",
            "position": 6,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -5
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
            "position": 58,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -64
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": 25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 50
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 90,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": 25
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
            "country": "MR",
            "name": "Mauritania",
            "position": 112,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "LU",
            "name": "Luxembourg",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 70,
            "movement": 5
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
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 63,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -12
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
            "position": 133,
            "movement": -22
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
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -11
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
            "position": 68,
            "movement": -16
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
            "position": 38,
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
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": -3
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
            "position": 59,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 70,
            "movement": 1
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
            "position": 7,
            "movement": -5
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Different Size",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 22,
            "movement": 10
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
            "position": 73,
            "movement": 6
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
            "position": 81,
            "movement": 93
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
            "position": 25,
            "movement": -15
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
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
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sweet Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
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
            "position": 192,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jagele",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": -111
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
            "position": 59,
            "movement": 5
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
            "position": 166,
            "movement": -22
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
            "position": 125,
            "movement": -14
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
            "position": 152,
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
            "position": 165,
            "movement": 3
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
            "position": 164,
            "movement": -16
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 177,
            "movement": -85
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
            "position": 161,
            "movement": -8
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
            "position": 190,
            "movement": -12
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
  