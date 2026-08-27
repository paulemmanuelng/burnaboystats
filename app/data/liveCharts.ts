// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs from kworb's artist page.
  //
  // PLATFORM chart data for Burna Boy: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-08-27";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 43,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 1,
            "movement": 0
          },
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
            "country": "BH",
            "name": "Bahrain",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
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
            "country": "EC",
            "name": "Ecuador",
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
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
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
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
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
            "country": "MV",
            "name": "Maldives",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
            "country": "NI",
            "name": "Nicaragua",
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
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
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
            "country": "RE",
            "name": "Réunion",
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
            "country": "ES",
            "name": "Spain",
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
            "country": "VE",
            "name": "Venezuela",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
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
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 3,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 4,
            "movement": 6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 4,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": -2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 6,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": 1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 12,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 14,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": -6
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 19,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 43,
            "movement": -15
          },
          {
            "country": "IN",
            "name": "India",
            "position": 64,
            "movement": -24
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 71,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
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
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 3,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 5,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": 3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 10,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 11,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 14,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 19,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 20,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 23,
            "movement": 9
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 25,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 26,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 26,
            "movement": -8
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 31,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 34,
            "movement": 22
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 37,
            "movement": 7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 37,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 47,
            "movement": -8
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 55,
            "movement": 18
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 59,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 61,
            "movement": 14
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 72,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 77,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 83,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 86,
            "movement": 20
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 95,
            "movement": -7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 96,
            "movement": -6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 99,
            "movement": -4
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 103,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 114,
            "movement": 4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 120,
            "movement": -39
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 127,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 135,
            "movement": 33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": -88
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": -17
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 154,
            "movement": -47
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 165,
            "movement": -21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": 13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 169,
            "movement": -65
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": -20
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 171,
            "movement": -16
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 179,
            "movement": 5
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 5,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 1,
            "movement": 5
          },
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": 10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 5,
            "movement": 13
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 8,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 10
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 11,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 12,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 16,
            "movement": 7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 17,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 18,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 18,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 21,
            "movement": -5
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": -17
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": 8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 26,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 28,
            "movement": -6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 28,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 43
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": 42
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 37,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 38,
            "movement": 35
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 47,
            "movement": 38
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 50,
            "movement": -43
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 60,
            "movement": -30
          },
          {
            "country": "US",
            "name": "United States",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 75,
            "movement": -23
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 92,
            "movement": -44
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 100,
            "movement": -13
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 4,
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 6,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 15,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 17,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 17,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 20,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 21,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 22,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 24,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 25,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 35,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 38,
            "movement": -10
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 40,
            "movement": -13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 46,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 56,
            "movement": -4
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 64,
            "movement": -9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 71,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 71,
            "movement": -14
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 72,
            "movement": -11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 122,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 123,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 127,
            "movement": -12
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 133,
            "movement": -10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 139,
            "movement": -32
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 147,
            "movement": -12
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 148,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 164,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 181,
            "movement": -33
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 184,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 187,
            "movement": -12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 187,
            "movement": -28
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 11,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 14,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 17,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 20,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 27,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 31,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 34,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 48,
            "movement": 4
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 54,
            "movement": 8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 54,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 62,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 65,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 95,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 107,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 108,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": 18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 129,
            "movement": -71
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 140,
            "movement": -14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 142,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 145,
            "movement": -17
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 150,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 158,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": -10
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 164,
            "movement": -19
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 177,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 182,
            "movement": -6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 199,
            "movement": -16
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 6,
            "movement": 14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 7,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 9,
            "movement": 17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 14,
            "movement": -6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 15,
            "movement": -13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 21,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 27,
            "movement": 8
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 44,
            "movement": -30
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 64,
            "movement": -25
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 83,
            "movement": -4
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 86,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 91,
            "movement": 48
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 98,
            "movement": -23
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 44,
            "movement": 145
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 80
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 109,
            "movement": -82
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 135,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
            "movement": -113
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
            "movement": -70
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 192,
            "movement": -135
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 193,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
            "movement": -92
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -15
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
            "position": 36,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 106,
            "movement": 24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": -9
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 137,
            "movement": 32
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 183,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 187,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
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
            "position": 142,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 11,
            "movement": 0
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
            "position": 36,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 50,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": -30
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 64,
            "movement": -44
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 68,
            "movement": 95
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 118,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
            "movement": 50
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": -71
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 33
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": -55
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 200,
            "movement": -36
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
            "position": 54,
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
            "position": 44,
            "movement": 6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 48,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 79,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": 52
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 156,
            "movement": 34
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 157,
            "movement": -21
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 163,
            "movement": -42
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": 13
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
            "movement": 1
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
            "position": 178,
            "movement": 10
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
            "position": 32,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 111,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": -51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": 34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 170,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 180,
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
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
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
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": 0
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
            "position": 54,
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 49,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": -35
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": -72
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 167,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": -33
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 85,
            "movement": -8
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
            "position": 13,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 107,
            "movement": 34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": 14
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -19
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 113,
            "movement": 60
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": 43
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 166,
            "movement": -98
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -126
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 117,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": -58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": 30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": -99
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -29
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
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 19,
            "movement": -10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 19,
            "movement": 57
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 34,
            "movement": 45
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 35,
            "movement": 104
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 105,
            "movement": 44
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 112,
            "movement": -49
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 135,
            "movement": 63
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
            "position": 23,
            "movement": -1
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
            "position": 82,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 101,
            "movement": 68
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 121,
            "movement": 20
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
            "position": 54,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 175,
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
            "country": "KE",
            "name": "Kenya",
            "position": 19,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 181,
            "movement": -16
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
            "position": 58,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 121,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 187,
            "movement": -19
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 157,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 175,
            "movement": null,
            "status": "new"
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
            "movement": 33
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 107,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
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
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": 1
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
            "position": 65,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -18
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
            "position": 145,
            "movement": -5
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
            "position": 79,
            "movement": 16
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
            "position": 178,
            "movement": -6
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
            "position": 14,
            "movement": -6
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 117,
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
            "position": 198,
            "movement": -5
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
            "position": 156,
            "movement": 20
          },
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
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 26,
            "movement": 94
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
            "position": 49,
            "movement": 86
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
    "title": "Normal",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -4
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 50,
            "movement": -5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 144,
            "movement": -72
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
            "position": 70,
            "movement": -2
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
            "position": 147,
            "movement": -2
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
    "title": "B. D'OR",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -103
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
            "position": 135,
            "movement": 10
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -106
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
            "position": 199,
            "movement": -22
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
    "title": "Masculine",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -113
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
            "position": 52,
            "movement": -15
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  