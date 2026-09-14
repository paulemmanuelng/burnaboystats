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
  export const liveChartsUpdated = "2026-09-14";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 30,
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
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "OM",
            "name": "Oman",
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
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "GR",
            "name": "Greece",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
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
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": 0
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
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
            "country": "AR",
            "name": "Argentina",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": 1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 3,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 3,
            "movement": -1
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
            "country": "SV",
            "name": "El Salvador",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 4,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 2
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 5,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 7,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 7,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 9,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 9,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 11,
            "movement": -6
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 12,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 12,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 13,
            "movement": -3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 13,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 13,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 14,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 16,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 19,
            "movement": -6
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 19,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 23,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 24,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 53,
            "movement": -3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 68,
            "movement": -12
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
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 5,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 13,
            "movement": -6
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 15,
            "movement": -7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 18,
            "movement": -5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 19,
            "movement": -12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 20,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 21,
            "movement": -6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": -13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 24,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 24,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 25,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 26,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 27,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 28,
            "movement": -9
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 33,
            "movement": -14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 38,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 39,
            "movement": -11
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 39,
            "movement": 113
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 43,
            "movement": -17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 44,
            "movement": -15
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 45,
            "movement": -27
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 48,
            "movement": -10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 50,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 52,
            "movement": 16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 53,
            "movement": 7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 63,
            "movement": -14
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 63,
            "movement": -19
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 69,
            "movement": 16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 72,
            "movement": -12
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 76,
            "movement": -7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 78,
            "movement": -42
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 115,
            "movement": -37
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 117,
            "movement": -33
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 118,
            "movement": -17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 119,
            "movement": -16
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 126,
            "movement": -31
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 130,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 146,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 148,
            "movement": -34
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": -46
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 159,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 182,
            "movement": -13
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 186,
            "movement": -25
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 188,
            "movement": -30
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 189,
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
            "country": "MA",
            "name": "Morocco",
            "position": 1,
            "movement": 17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 1,
            "movement": 7
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
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
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
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 59
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 7,
            "movement": 11
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 8,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -6
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 11,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "HU",
            "name": "Hungary",
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
            "country": "PY",
            "name": "Paraguay",
            "position": 12,
            "movement": 6
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 13,
            "movement": 31
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 13,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 21,
            "movement": -4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 25,
            "movement": -15
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 27,
            "movement": -10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 30,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": -19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 39,
            "movement": -3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 57,
            "movement": -19
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 61,
            "movement": -8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 61,
            "movement": 34
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 63,
            "movement": 35
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 63,
            "movement": -58
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 66,
            "movement": -38
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 80,
            "movement": -15
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 85,
            "movement": -13
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": -1
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
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 9,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 11,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 19,
            "movement": -7
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 20,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 21,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 28,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 28,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 31,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 41,
            "movement": -11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 42,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 55,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 55,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 57,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 65,
            "movement": 11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 80,
            "movement": -30
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 83,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 105,
            "movement": -14
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 111,
            "movement": -12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 126,
            "movement": -5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 132,
            "movement": 9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 153,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 165,
            "movement": -48
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 200,
            "movement": -10
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 11,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 24,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 27,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 31,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 46,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 58,
            "movement": -23
          },
          {
            "country": "US",
            "name": "United States",
            "position": 59,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 69,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 84,
            "movement": -48
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 87,
            "movement": -51
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 102,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -31
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 148,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 152,
            "movement": -57
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 153,
            "movement": -98
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 160,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 174,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 15
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": 157
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 9,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 29,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": -8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 40,
            "movement": -25
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 44,
            "movement": -23
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 78,
            "movement": -7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 82,
            "movement": -13
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 88,
            "movement": -87
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 92,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": -145
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
            "position": 43,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 100,
            "movement": -55
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 102,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 106,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -25
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 117,
            "movement": 50
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": -24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
            "movement": -85
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 144,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 191,
            "movement": -6
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 80
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
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
            "position": 64,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
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
            "position": 28,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 70,
            "movement": 37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": -71
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": 7
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
            "movement": -8
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
            "position": 11,
            "movement": 0
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
            "position": 111,
            "movement": 6
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
            "position": 31,
            "movement": null,
            "status": "new"
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
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 97
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": 77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 91,
            "movement": 75
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -9
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 77,
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
            "position": 131,
            "movement": 17
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
            "position": 30,
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -23
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 129,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -63
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 153,
            "movement": -88
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": 9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 198,
            "movement": -160
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 50,
            "movement": 120
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": -64
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 137,
            "movement": -85
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -80
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -80
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": -45
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
            "position": 200,
            "movement": null,
            "status": "new"
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
            "position": 10,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 46,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 71,
            "movement": 61
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": -7
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": 32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": -65
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
            "movement": -84
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 12,
            "movement": 38
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 40,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": -11
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 83,
            "movement": 48
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 155,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": -77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 167,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 130,
            "movement": 1
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
            "position": 134,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -57
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": 16
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 74
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
            "position": 46,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 85,
            "movement": -57
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 94,
            "movement": 100
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 113,
            "movement": -81
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 77
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -50
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": 0
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
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 193,
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
            "position": 177,
            "movement": -11
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
            "position": 68,
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
            "country": "OM",
            "name": "Oman",
            "position": 57,
            "movement": 38
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 60,
            "movement": 32
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 92,
            "movement": 11
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 115,
            "movement": 24
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
            "position": 35,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 0
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
            "position": 69,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 110,
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
            "country": "AI",
            "name": "Anguilla",
            "position": 46,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 1
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
            "position": 197,
            "movement": -2
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
            "position": 89,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 92,
            "movement": -32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": -24
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
            "position": 68,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": -89
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": 4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 17
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 9,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 160,
            "movement": -5
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
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": -14
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -5
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
            "position": 196,
            "movement": -9
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
            "position": 173,
            "movement": -8
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
            "country": "LR",
            "name": "Liberia",
            "position": 119,
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
            "movement": 21
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
            "movement": 6
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
            "position": 118,
            "movement": 44
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
            "position": 100,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 158,
            "movement": -38
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "position": 197,
            "movement": -37
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
            "position": 171,
            "movement": -68
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
            "position": 67,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -2
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
            "position": 188,
            "movement": -59
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
            "position": 151,
            "movement": 0
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 43
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": -5
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -1
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
            "position": 37,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sekkle Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Giddem",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -8
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
    "title": "Empty Chairs",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 153,
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
            "position": 163,
            "movement": -1
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
            "movement": 1
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
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -8
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
            "position": 38,
            "movement": 5
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
            "position": 178,
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
  