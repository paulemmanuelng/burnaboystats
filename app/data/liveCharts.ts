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
  export const liveChartsUpdated = "2026-10-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-01T13:21Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 18,
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
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": -1
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
            "country": "CO",
            "name": "Colombia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 6,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -2
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
            "country": "GE",
            "name": "Georgia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 7,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 8,
            "movement": -4
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
            "country": "NI",
            "name": "Nicaragua",
            "position": 9,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 10,
            "movement": -2
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
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 12,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": -1
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
            "country": "UY",
            "name": "Uruguay",
            "position": 12,
            "movement": -4
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 13,
            "movement": -6
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
            "country": "AM",
            "name": "Armenia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 15,
            "movement": -6
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
            "country": "MX",
            "name": "Mexico",
            "position": 16,
            "movement": -2
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -10
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 18,
            "movement": -9
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 19,
            "movement": -6
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 19,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -12
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 26,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 67,
            "movement": -7
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 12,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": 7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 17,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 18,
            "movement": 12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 19,
            "movement": -2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 19,
            "movement": 10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 22,
            "movement": 21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 31,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 35,
            "movement": 6
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 37,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 41,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 43,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 45,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": -4
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 53,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 58,
            "movement": 8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 58,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 59,
            "movement": 3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 64,
            "movement": 36
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 67,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 68,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 75,
            "movement": 28
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 81,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 83,
            "movement": -12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 86,
            "movement": -33
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 89,
            "movement": -12
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 91,
            "movement": -33
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 95,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 103,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 109,
            "movement": 37
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 129,
            "movement": 26
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 133,
            "movement": -9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 140,
            "movement": 6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 141,
            "movement": 14
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 144,
            "movement": -24
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 146,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 149,
            "movement": 30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": 26
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 162,
            "movement": -12
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 10,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 12,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 13,
            "movement": 15
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
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 14,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 15,
            "movement": 11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 19,
            "movement": 22
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 20,
            "movement": 67
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": -10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 33,
            "movement": -12
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 36,
            "movement": 49
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 36,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 38,
            "movement": -24
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 49,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 56,
            "movement": -12
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": -34
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 71,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 99,
            "movement": -21
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
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 23,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 28,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": 9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": 8
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 45,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 49,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 54,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 54,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 59,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 62,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 69,
            "movement": 3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 69,
            "movement": 20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 76,
            "movement": 13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 82,
            "movement": -38
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 99,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 104,
            "movement": 5
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 135,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 142,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 146,
            "movement": 5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 155,
            "movement": 9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 160,
            "movement": 27
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 198,
            "movement": -1
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 33,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 35,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 37,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 40,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 42,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 45,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 60,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 62,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 63,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 65,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 65,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 73,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 86,
            "movement": 6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 99,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 109,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 116,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 121,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 135,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 180,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 189,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 12
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 191
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 40
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 20,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 28,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 32,
            "movement": -17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 34,
            "movement": 3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 52,
            "movement": -40
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 54,
            "movement": -13
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 57,
            "movement": -27
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 62,
            "movement": -49
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 64,
            "movement": -58
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 70,
            "movement": -66
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 94,
            "movement": 39
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 105,
            "movement": -50
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 187,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 94,
            "movement": 37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 108,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": 48
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": -58
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
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
            "position": 32,
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 58,
            "movement": 78
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 134,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 159,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
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
            "country": "MU",
            "name": "Mauritius",
            "position": 200,
            "movement": -54
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
            "movement": 3
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
            "position": 6,
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
            "position": 186,
            "movement": -27
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
            "position": 41,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 25
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 55
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
            "movement": 79
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 82,
            "movement": 82
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": 86
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": -37
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": -48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": -72
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 161,
            "movement": -114
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -16
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": 8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 72,
            "movement": 126
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -47
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 90,
            "movement": -15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 137,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 147,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": 21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": 32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 199,
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
            "position": 140,
            "movement": 0
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
            "position": 186,
            "movement": -161
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
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 117
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -48
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 197,
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
            "position": 30,
            "movement": 0
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
            "position": 42,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 130,
            "movement": -36
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 194,
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
            "position": 125,
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
            "position": 5,
            "movement": 0
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 75
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -58
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 118,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 200,
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
            "position": 30,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
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
            "position": 22,
            "movement": 2
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
            "position": 9,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -27
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 5
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 71,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 87
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 54
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 165,
            "movement": 25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 183,
            "movement": -63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
            "movement": -32
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": 25
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
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 27,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 65,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": 2
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
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 197,
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
            "position": 182,
            "movement": 8
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
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
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
            "position": 38,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": 9
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
            "position": 32,
            "movement": -14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 55,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 142,
            "movement": -80
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 154,
            "movement": -22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 193,
            "movement": 5
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
            "position": 24,
            "movement": 0
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
            "position": 79,
            "movement": -6
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
            "position": 34,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 125,
            "movement": 42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": -11
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
            "position": 41,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
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
            "position": 52,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": -40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
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
            "position": 88,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 160,
            "movement": 19
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -6
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
            "position": 102,
            "movement": -6
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
            "country": "SR",
            "name": "Suriname",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -56
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
            "position": 148,
            "movement": -10
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
            "position": 75,
            "movement": 4
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
            "position": 76,
            "movement": 19
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
            "position": 177,
            "movement": 8
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
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 53,
            "movement": 10
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -161
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
            "position": 171,
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
            "position": 189,
            "movement": 4
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
            "position": 69,
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
            "position": 134,
            "movement": -17
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
            "country": "BF",
            "name": "Burkina Faso",
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
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
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
            "position": 103,
            "movement": 5
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
            "movement": -95
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 90,
            "movement": -77
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
            "position": 122,
            "movement": -94
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
            "position": 149,
            "movement": -48
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
            "position": 135,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -44
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -1
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
            "country": "KE",
            "name": "Kenya",
            "position": 181,
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
            "country": "EG",
            "name": "Egypt",
            "position": 181,
            "movement": -97
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
            "position": 174,
            "movement": -14
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
            "position": 197,
            "movement": -14
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
  