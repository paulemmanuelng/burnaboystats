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
  export const liveChartsUpdated = "2026-08-26";
  
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
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 5,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 6,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 7,
            "movement": 30
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 9,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 10,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": -7
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 12,
            "movement": -2
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
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 18,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 18,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 19,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": -6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 23,
            "movement": 2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 23,
            "movement": -7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 24,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 30,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": -14
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 35,
            "movement": 10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 39,
            "movement": 12
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 44,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 56,
            "movement": 30
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 59,
            "movement": -18
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 70,
            "movement": -2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 73,
            "movement": 19
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 75,
            "movement": -7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 81,
            "movement": -58
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 88,
            "movement": 75
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 90,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 90,
            "movement": -13
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 91,
            "movement": -15
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 95,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 104,
            "movement": -29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 108,
            "movement": -22
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 111,
            "movement": -29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 118,
            "movement": -11
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 123,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 29
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 144,
            "movement": -25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -32
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 155,
            "movement": -24
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 168,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
            "movement": 7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 184,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": -57
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 4,
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
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": 7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 6,
            "movement": 2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 7,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 12,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 14,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 15,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 18,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": -13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 21,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 22,
            "movement": 10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 23,
            "movement": 14
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 23,
            "movement": 37
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 23,
            "movement": 32
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 30,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": -9
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 37,
            "movement": -30
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 39,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 52,
            "movement": 44
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 73,
            "movement": 11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -40
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 85,
            "movement": -51
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 87,
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 11,
            "movement": -1
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
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 15,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 17,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 17,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 17,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 19,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 22,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 25,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 28,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 36,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 52,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 53,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 58,
            "movement": -12
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 60,
            "movement": 4
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 62,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 96,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 99,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 106,
            "movement": 11
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 126,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 128,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 134,
            "movement": -9
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 140,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 145,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 151,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 175,
            "movement": -14
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 176,
            "movement": -3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 183,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 3,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 15,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 17,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 18,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 21,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 21,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 27,
            "movement": 6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 28,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 35,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 42,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 52,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 55,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 57,
            "movement": 13
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 61,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 66,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 107,
            "movement": -18
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 115,
            "movement": 11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 120,
            "movement": -11
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 123,
            "movement": 2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 123,
            "movement": -8
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 135,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 141,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 148,
            "movement": 32
          },
          {
            "country": "US",
            "name": "United States",
            "position": 159,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 161,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 175,
            "movement": -9
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 176,
            "movement": 16
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 8,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 11,
            "movement": 7
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 15,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": -13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 25,
            "movement": -11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 28,
            "movement": -10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 37,
            "movement": -30
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 48,
            "movement": -27
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 76,
            "movement": 56
          },
          {
            "country": "US",
            "name": "United States",
            "position": 77,
            "movement": -43
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 78,
            "movement": -11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 81,
            "movement": -31
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 86,
            "movement": -10
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 112,
            "movement": -69
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 139,
            "movement": -97
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 158,
            "movement": -11
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
            "country": "MR",
            "name": "Mauritania",
            "position": 27,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 57,
            "movement": 48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": 64
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": -36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 114,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 136,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 141,
            "movement": 13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 155,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -74
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 189,
            "movement": -91
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 193,
            "movement": -61
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
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
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
            "position": 71,
            "movement": -10
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 20,
            "movement": 82
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 46,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 74,
            "movement": 113
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -62
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -84
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 164,
            "movement": -23
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 170,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 189,
            "movement": -82
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 198,
            "movement": -60
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "position": 50,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 23
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 105,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 81
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -33
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 136,
            "movement": -124
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": -76
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
            "movement": -31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 190,
            "movement": -65
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -62
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": 0
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
            "position": 188,
            "movement": -11
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
            "position": 41,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 71,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 110,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 126,
            "movement": 38
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 130,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 50
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": -20
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 141,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 22
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 160,
            "movement": -27
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 170,
            "movement": -23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": 5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 190,
            "movement": -127
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -7
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
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": -25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 90,
            "movement": -22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 149,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 153,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 80,
            "movement": -11
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
            "position": 28,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 72,
            "movement": 81
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": -27
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 112,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
            "movement": -44
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": -3
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
            "position": 190,
            "movement": -4
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": 40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 86,
            "movement": -69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": -7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 182,
            "movement": -110
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": 2
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 141,
            "movement": -75
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -10
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
            "position": 155,
            "movement": 0
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": -71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": 17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
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
            "position": 9,
            "movement": 28
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 63,
            "movement": 29
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 76,
            "movement": -60
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 133,
            "movement": 14
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 139,
            "movement": -50
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 149,
            "movement": -93
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 185,
            "movement": -44
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 198,
            "movement": -96
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 2
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
            "position": 15,
            "movement": 38
          },
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
            "movement": 2
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 39,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 54
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": -50
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": -99
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": null,
            "status": "new"
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
            "position": 23,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -22
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": 0
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
            "position": 133,
            "movement": -15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 141,
            "movement": 43
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
            "movement": -72
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
            "position": 47,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 180,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 105,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": -30
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
            "position": 84,
            "movement": -8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": -32
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
            "position": 70,
            "movement": 36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": 47
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 109,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": -10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 1
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
            "country": "CV",
            "name": "Cape Verde",
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
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
            "position": 140,
            "movement": 0
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
            "movement": 3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 145,
            "movement": -91
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 42,
            "movement": null,
            "status": "new"
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 6
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
            "position": 172,
            "movement": 9
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
            "position": 8,
            "movement": 5
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
            "position": 175,
            "movement": -139
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
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
            "position": 67,
            "movement": 5
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
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -1
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
            "country": "CR",
            "name": "Costa Rica",
            "position": 47,
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
            "position": 145,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Secret",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "Buy You Life",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 72,
            "movement": null,
            "status": "new"
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
            "position": 47,
            "movement": -9
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
            "position": 120,
            "movement": -89
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
    "title": "Jagele",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": -75
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
            "position": 183,
            "movement": 11
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
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 68,
            "movement": 0
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
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -52
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
            "position": 98,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 4
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": 0
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
            "position": 95,
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -137
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Redemption",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 150,
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
            "position": 43,
            "movement": -10
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
  