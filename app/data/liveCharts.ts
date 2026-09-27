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
  export const liveChartsUpdated = "2026-09-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-27T21:23Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 17,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 1,
            "movement": 0
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
            "country": "DK",
            "name": "Denmark",
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
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
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
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
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
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -3
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
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 7,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 8,
            "movement": 10
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 9,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": -7
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
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
            "country": "KW",
            "name": "Kuwait",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 12,
            "movement": -4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": -6
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 12,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": -3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 13,
            "movement": -7
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 14,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 14,
            "movement": -3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 14,
            "movement": -8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": -4
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 15,
            "movement": -10
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 15,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 16,
            "movement": -6
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 17,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 17,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -11
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 19,
            "movement": -8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 19,
            "movement": -11
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 20,
            "movement": -7
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 20,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": -8
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 5,
            "movement": 11
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 8,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 13,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": 5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 17,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 20,
            "movement": 2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 24,
            "movement": 49
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 25,
            "movement": -8
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 28,
            "movement": -14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 29,
            "movement": 10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 29,
            "movement": 3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 30,
            "movement": -18
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 31,
            "movement": 8
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 33,
            "movement": 13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 36,
            "movement": 15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 36,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 37,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": 4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 45,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 46,
            "movement": 30
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 54,
            "movement": 14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 57,
            "movement": 13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 61,
            "movement": 15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 61,
            "movement": 17
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 69,
            "movement": -52
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 78,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 89,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 95,
            "movement": 68
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 102,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 103,
            "movement": 56
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 109,
            "movement": -15
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 132,
            "movement": 34
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 133,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 135,
            "movement": -75
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 141,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 142,
            "movement": -5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 143,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 167,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 198,
            "movement": -38
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
            "movement": 6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 1
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
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 11,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": 35
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": 1
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
            "movement": -4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 5
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 15,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": 25
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 16,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 18,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 25,
            "movement": 12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 26,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 28,
            "movement": 43
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 33,
            "movement": -16
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": 64
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": -8
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 45,
            "movement": -13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 46,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 46,
            "movement": 21
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 47,
            "movement": -13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 47,
            "movement": -28
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 47,
            "movement": 25
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 48,
            "movement": -35
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 61,
            "movement": -22
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 70,
            "movement": -42
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 77,
            "movement": -59
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 87,
            "movement": -38
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 92,
            "movement": -38
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 98,
            "movement": -8
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
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 14,
            "movement": 9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": 10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 22,
            "movement": 16
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 24,
            "movement": 13
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 26,
            "movement": 10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 33,
            "movement": 20
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 34,
            "movement": 18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": 14
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 36,
            "movement": 25
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 39,
            "movement": 18
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": 8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": 16
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 47,
            "movement": 17
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 56,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 61,
            "movement": 32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 61,
            "movement": 17
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 62,
            "movement": 42
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 72,
            "movement": 16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 79,
            "movement": 55
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 94,
            "movement": 28
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 95,
            "movement": 38
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 103,
            "movement": 29
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 118,
            "movement": 35
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 170,
            "movement": 19
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 178,
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
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 21,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 22,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 34,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 35,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 41,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": -4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 50,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 53,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 56,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 56,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 61,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 63,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 69,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 82,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 91,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 94,
            "movement": -13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 103,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 119,
            "movement": -8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 119,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 131,
            "movement": -19
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 179,
            "movement": 2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 182,
            "movement": -6
          },
          {
            "country": "UY",
            "name": "Uruguay",
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
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": 5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 12,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 26,
            "movement": 105
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 33,
            "movement": -11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 53,
            "movement": -24
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 55,
            "movement": -20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 55,
            "movement": -22
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 75,
            "movement": -52
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 85,
            "movement": -47
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 98,
            "movement": -26
          },
          {
            "country": "US",
            "name": "United States",
            "position": 106,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 125,
            "movement": -24
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 139,
            "movement": -126
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 171,
            "movement": -102
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 190,
            "movement": -30
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
            "position": 25,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 28,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 42,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 86,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -24
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 133,
            "movement": -40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 142,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": -32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 151,
            "movement": 33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 164,
            "movement": 3
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 67,
            "movement": -56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 38
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 76,
            "movement": -47
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": -32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": -55
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 174,
            "movement": -100
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 198,
            "movement": -48
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 56,
            "movement": 111
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 96,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 121,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -57
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 131,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": 44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 146,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": 49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
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
            "position": 173,
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
            "position": 13,
            "movement": 11
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
            "position": 120,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 88
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -1
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
            "position": 41,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": -20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -36
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 79,
            "movement": 87
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 83,
            "movement": -46
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": -71
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": 24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
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
            "position": 31,
            "movement": 2
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
            "position": 41,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": 74
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 117,
            "movement": -32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 121,
            "movement": -44
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 131,
            "movement": 31
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 153,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 153,
            "movement": -67
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 156,
            "movement": 20
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 161,
            "movement": -63
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 162,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": -29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 183,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 195,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "position": 146,
            "movement": -1
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
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 85
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": 15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 121,
            "movement": -58
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 164,
            "movement": 6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "position": 12,
            "movement": 11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -70
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
            "position": 124,
            "movement": -7
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 23
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": 30
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": -35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": 60
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 137,
            "movement": -45
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 163,
            "movement": -10
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 13
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
            "position": 83,
            "movement": 114
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 81
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -129
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
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
            "position": 22,
            "movement": 2
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": 12
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
            "country": "FJ",
            "name": "Fiji",
            "position": 60,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 147,
            "movement": 7
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 150,
            "movement": -135
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 190,
            "movement": -44
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 192,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": 1
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": 0
          },
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
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 176,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -13
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
            "position": 177,
            "movement": 9
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
            "position": 40,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": -53
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": -5
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
            "position": 46,
            "movement": 8
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": -4
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
            "position": 60,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 22
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 103,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
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
            "position": 49,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": -17
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 153,
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
            "position": 103,
            "movement": -20
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
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
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
            "position": 137,
            "movement": 11
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
            "position": 52,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": 33
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -3
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
            "movement": 4
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
            "position": 110,
            "movement": -75
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
            "position": 139,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
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
            "movement": 19
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
            "position": 109,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 41,
            "movement": null,
            "status": "new"
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
            "position": 52,
            "movement": null,
            "status": "new"
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
            "position": 17,
            "movement": 8
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
            "position": 47,
            "movement": 6
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
    "title": "Buy You Life",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bundle By Bundle",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 113,
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
            "position": 182,
            "movement": 9
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
            "position": 66,
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
            "country": "PA",
            "name": "Panama",
            "position": 66,
            "movement": -26
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
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
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
            "country": "TD",
            "name": "Chad",
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 66,
            "movement": -2
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
            "movement": 2
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 11,
            "movement": -8
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
            "position": 136,
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
            "position": 167,
            "movement": -2
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
  