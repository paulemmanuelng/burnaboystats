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
  export const liveChartsUpdated = "2026-09-05";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 38,
        "entries": [
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
            "movement": 1
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
            "country": "SI",
            "name": "Slovenia",
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
            "country": "US",
            "name": "United States",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
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
            "country": "CL",
            "name": "Chile",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "MG",
            "name": "Madagascar",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 3,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 3,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 4,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 4,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": -4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 8,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 2
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 9,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 10,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 16,
            "movement": -4
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 16,
            "movement": 3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 50,
            "movement": -7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 56,
            "movement": 8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 85,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 6,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
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
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 10,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 16,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 17,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 17,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 19,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 21,
            "movement": 2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 22,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 22,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 23,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 23,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 24,
            "movement": 5
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 31,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 32,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 35,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 37,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 41,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 44,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": 9
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 46,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 49,
            "movement": -8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 54,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 55,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 63,
            "movement": -25
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 66,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 75,
            "movement": 13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 83,
            "movement": 13
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 84,
            "movement": 7
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 86,
            "movement": -21
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 90,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 92,
            "movement": -8
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 106,
            "movement": 60
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 117,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 127,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": 17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 141,
            "movement": -56
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 152,
            "movement": -50
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 156,
            "movement": -19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 170,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 3,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 2,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 6,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 7,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 27
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 8,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 9,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": -6
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
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 13,
            "movement": 37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": 22
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 15,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 21,
            "movement": 18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 23,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 26,
            "movement": 69
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 32,
            "movement": -7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 32,
            "movement": -22
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 35,
            "movement": -27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 38,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 38,
            "movement": -27
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 45,
            "movement": 9
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 48,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 48,
            "movement": 34
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 55,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": 28
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 75,
            "movement": -28
          },
          {
            "country": "US",
            "name": "United States",
            "position": 81,
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 19,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 19,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 24,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 25,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 31,
            "movement": 18
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 33,
            "movement": -7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 41,
            "movement": -6
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 48,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 53,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 58,
            "movement": 6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 60,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 68,
            "movement": 7
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 78,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 93,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 94,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 101,
            "movement": 2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 155,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 156,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 171,
            "movement": -6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 179,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 184,
            "movement": -11
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 189,
            "movement": -12
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 199,
            "movement": -23
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 15,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 19,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 25,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": 1
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
            "country": "IL",
            "name": "Israel",
            "position": 38,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 43,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 51,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 52,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": 1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 86,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 102,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -10
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 160,
            "movement": 8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 167,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 174,
            "movement": -17
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 196,
            "movement": -17
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
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 30
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 22
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": 43
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 29
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": 16
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 25,
            "movement": 19
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 27,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 31,
            "movement": 30
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 50,
            "movement": -16
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 54,
            "movement": -28
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 60,
            "movement": -14
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 72,
            "movement": -50
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 94,
            "movement": -89
          },
          {
            "country": "FI",
            "name": "Finland",
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 20
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 66,
            "movement": 25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 83,
            "movement": 112
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": -23
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 134,
            "movement": -71
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": 23
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 148,
            "movement": -113
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
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": -31
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 181,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -20
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
            "movement": -1
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
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 136
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 71,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 67
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 154,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": -39
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": -1
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -3
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 101
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 150
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 76
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 55,
            "movement": -31
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 57,
            "movement": 78
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": -34
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 169,
            "movement": -21
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 195,
            "movement": -35
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 197,
            "movement": -18
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
            "position": 7,
            "movement": 1
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
            "position": 134,
            "movement": 12
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": 67
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -13
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 114,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 115,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -30
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
            "movement": -77
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 188,
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
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 58,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 110,
            "movement": 51
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 138,
            "movement": -85
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 197,
            "movement": -49
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
            "position": 41,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 93,
            "movement": -52
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 94,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": -18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 131,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 193,
            "movement": -2
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
            "movement": 4
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
            "position": 24,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 8
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -9
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 70,
            "movement": 25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 27
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 133,
            "movement": -67
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -24
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 153,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": -41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 191,
            "movement": null,
            "status": "new"
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
            "movement": -1
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
            "position": 64,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 143,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -35
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
            "position": 157,
            "movement": 12
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
            "position": 8,
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
            "position": 111,
            "movement": 6
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
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": 95
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
            "movement": 24
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
            "position": 5,
            "movement": 30
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 17,
            "movement": 50
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 53,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 55,
            "movement": 145
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 61,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 79,
            "movement": 49
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 156,
            "movement": -29
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "country": "LB",
            "name": "Lebanon",
            "position": 34,
            "movement": -26
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
            "position": 67,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": -10
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -2
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
            "position": 46,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": -57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": 5
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
            "position": 25,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -67
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
            "movement": -1
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
            "position": 152,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -10
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": -91
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
            "movement": 13
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
            "position": 55,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": -25
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 167,
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
            "position": 25,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": 2
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
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 118,
            "movement": 20
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 155,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 199,
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
            "position": 60,
            "movement": 14
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 88,
            "movement": -46
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -35
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
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
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
            "position": 113,
            "movement": 50
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": 70
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": 9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 138,
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
            "position": 92,
            "movement": -1
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
            "position": 188,
            "movement": -4
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
            "position": 12,
            "movement": 35
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 129,
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
            "position": 176,
            "movement": 2
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
            "position": 51,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 114,
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
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
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
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": 61
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 43,
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
            "position": 135,
            "movement": -14
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
            "position": 130,
            "movement": -5
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
            "position": 151,
            "movement": 17
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
            "position": 104,
            "movement": -17
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 4,
            "movement": -3
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
            "country": "BF",
            "name": "Burkina Faso",
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
    "title": "Killin Dem",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Collateral Damage",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Big 7",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 59,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Odogwu",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 140,
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
            "movement": 0
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
            "position": 194,
            "movement": -12
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
            "position": 87,
            "movement": 73
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
            "position": 159,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Comma",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Normal",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -37
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -3
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
            "position": 176,
            "movement": -5
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
  