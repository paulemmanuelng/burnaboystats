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
  export const liveChartsUpdated = "2026-08-22";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 56,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 1,
            "movement": 1
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
            "country": "BO",
            "name": "Bolivia",
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
            "country": "CO",
            "name": "Colombia",
            "position": 1,
            "movement": 1
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
            "movement": 1
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
            "country": "SV",
            "name": "El Salvador",
            "position": 1,
            "movement": 2
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
            "country": "GE",
            "name": "Georgia",
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
            "country": "GH",
            "name": "Ghana",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 1,
            "movement": 2
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
            "country": "LT",
            "name": "Lithuania",
            "position": 1,
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 1,
            "movement": 2
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
            "country": "MK",
            "name": "North Macedonia",
            "position": 1,
            "movement": 1
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
            "country": "SA",
            "name": "Saudi Arabia",
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
            "country": "SI",
            "name": "Slovenia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 1,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
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
            "country": "BH",
            "name": "Bahrain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 2,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 2,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 0
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
            "country": "OM",
            "name": "Oman",
            "position": 2,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
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
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 3,
            "movement": 1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 4,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 5,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": -4
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 5,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 8,
            "movement": 1
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 9,
            "movement": 3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 10,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": -8
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 11,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": 1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 17,
            "movement": -4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": -4
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 20,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 28,
            "movement": 1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 40,
            "movement": -14
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 70,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 9,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
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
            "country": "BE",
            "name": "Belgium",
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
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 4,
            "movement": 3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
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
            "country": "IE",
            "name": "Ireland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": 24
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 8,
            "movement": 10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 9,
            "movement": -4
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": -3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 13,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": 8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 15,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 15,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": 2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 20,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 22,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 24,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 25,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 25,
            "movement": -7
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 26,
            "movement": -11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": 8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 29,
            "movement": 5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 33,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 33,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 38,
            "movement": 143
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 39,
            "movement": 4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 43,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 44,
            "movement": -1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 45,
            "movement": 42
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 54,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": 74
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 56,
            "movement": -15
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 57,
            "movement": -15
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 71,
            "movement": 108
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 74,
            "movement": -27
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 79,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 81,
            "movement": 83
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 84,
            "movement": -26
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 84,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 84,
            "movement": -3
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 90,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": 35
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 104,
            "movement": -28
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 118,
            "movement": -27
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 122,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": -7
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 136,
            "movement": -14
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 139,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 22
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 148,
            "movement": -48
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 152,
            "movement": -118
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": -49
          },
          {
            "country": "IN",
            "name": "India",
            "position": 165,
            "movement": -16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
            "movement": -152
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 174,
            "movement": -95
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 178,
            "movement": -148
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 179,
            "movement": -129
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 188,
            "movement": -100
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 197,
            "movement": -25
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
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 9
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
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 4,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 10,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 11,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 11,
            "movement": 10
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 20
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 6
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
            "movement": 3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 16,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 16,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": 10
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 20,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 21,
            "movement": 10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 22,
            "movement": 13
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 26,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 31,
            "movement": 18
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 31,
            "movement": -10
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 32,
            "movement": 8
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 37,
            "movement": -15
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 37,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": 15
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 54,
            "movement": 46
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 75,
            "movement": 4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 85,
            "movement": -10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 87,
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 14,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 14,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 21,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 23,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 44,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 46,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 50,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 54,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 4
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 79,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 84,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 91,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 92,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 114,
            "movement": 2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 116,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 117,
            "movement": -4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 119,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": -7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 128,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 128,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 143,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 181,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 187,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 5,
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
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 12,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 12,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 19,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 29,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 40,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 42,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 47,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 51,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 54,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 62,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 80,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 84,
            "movement": 4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 92,
            "movement": -7
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 97,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 101,
            "movement": -17
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 114,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 117,
            "movement": -17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 123,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 128,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 141,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 157,
            "movement": -7
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 177,
            "movement": -17
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 184,
            "movement": -7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 20
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 7,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 14,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 17,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": 37
          },
          {
            "country": "US",
            "name": "United States",
            "position": 20,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 34,
            "movement": -12
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 38,
            "movement": -13
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 51,
            "movement": -45
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 64,
            "movement": -52
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 81,
            "movement": -36
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 166,
            "movement": -52
          },
          {
            "country": "JP",
            "name": "Japan",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 49,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 86,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 101
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 128,
            "movement": 19
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 141,
            "movement": 45
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 147,
            "movement": 21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
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
            "position": 20,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 170,
            "movement": -135
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
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 26,
            "movement": 19
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
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
            "country": "CY",
            "name": "Cyprus",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 62,
            "movement": 106
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 51
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 69,
            "movement": 56
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 78,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 94,
            "movement": -23
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 113,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 132,
            "movement": -32
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 151,
            "movement": -123
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 180,
            "movement": 13
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 183,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": -167
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 35,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": 52
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 130,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 139,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": -28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": -65
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
            "position": 14,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 173,
            "movement": 10
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
            "position": 77,
            "movement": -5
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
            "position": 98,
            "movement": null,
            "status": "re"
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
            "position": 35,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 96
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 64,
            "movement": 109
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 118,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": -27
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": -32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": 14
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 179,
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
            "position": 152,
            "movement": 2
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
            "position": 4,
            "movement": -2
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
            "position": 55,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 85,
            "movement": 105
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 152,
            "movement": -136
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 152,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -73
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 165,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": -53
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
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
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
            "position": 177,
            "movement": -4
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
            "position": 22,
            "movement": 2
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 32,
            "movement": 137
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 12
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": -87
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": -66
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": -24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 36,
            "movement": 120
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 46,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -46
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 179,
            "movement": -141
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": 26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": -111
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": -47
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -56
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 98,
            "movement": -6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -31
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -9
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
            "position": 159,
            "movement": -4
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
            "position": 23,
            "movement": 157
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 67,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 96,
            "movement": -51
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 119,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 145,
            "movement": -60
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 151,
            "movement": -48
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 189,
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
            "position": 31,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": 14
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
            "position": 26,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 21
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 17
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 134,
            "movement": 55
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": -29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": -76
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 100,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -10
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 82,
            "movement": 17
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
            "position": 28,
            "movement": 16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 23
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 125,
            "movement": -49
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
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": null,
            "status": "re"
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
            "position": 104,
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
            "position": 83,
            "movement": 4
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
            "position": 153,
            "movement": -14
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 97,
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
            "position": 131,
            "movement": 10
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
            "position": 74,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 146,
            "movement": -85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 51,
            "movement": -27
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 144,
            "movement": 12
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
            "position": 133,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -15
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
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 179,
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
            "position": 175,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": 18
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
            "position": 4,
            "movement": -2
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
    "title": "Rockstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 99,
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
            "position": 110,
            "movement": 25
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
            "position": 185,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "On Form",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
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
            "movement": 2
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
            "position": 106,
            "movement": 68
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 113,
            "movement": 54
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 155,
            "movement": null,
            "status": "new"
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
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -7
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
            "position": 166,
            "movement": 16
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
            "movement": 0
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
            "position": 150,
            "movement": -1
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 114,
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
            "position": 190,
            "movement": 0
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
  