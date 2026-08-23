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
  export const liveChartsUpdated = "2026-08-23";
  
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
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": 0
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
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 5,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 7,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 8,
            "movement": 7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 11,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 12,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 13,
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 13,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 15,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 16,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 19,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 25,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 25,
            "movement": 29
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 27,
            "movement": -23
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 32,
            "movement": 1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 34,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 37,
            "movement": -8
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 38,
            "movement": 36
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 40,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 40,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 41,
            "movement": 40
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 43,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 46,
            "movement": 10
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 51,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 53,
            "movement": 116
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 53,
            "movement": 4
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 57,
            "movement": 121
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 57,
            "movement": -31
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 60,
            "movement": -36
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 68,
            "movement": 16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 74,
            "movement": 48
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 75,
            "movement": -37
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 79,
            "movement": 5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 80,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 84,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 85,
            "movement": -1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 90,
            "movement": 107
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 93,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 106,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 79
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 112,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": 41
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 123,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 21
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 148,
            "movement": 14
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 153,
            "movement": -82
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 160,
            "movement": -12
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 161,
            "movement": -22
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 161,
            "movement": 17
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 161,
            "movement": -25
          },
          {
            "country": "IN",
            "name": "India",
            "position": 162,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 174,
            "movement": -153
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 176,
            "movement": -10
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 182,
            "movement": -3
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
        "platform": "Spotify",
        "numberOnes": 3,
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
            "country": "WW",
            "name": "Worldwide",
            "position": 1,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 7,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 10,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 10,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 11,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 14,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 21,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 27,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 27,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 34,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 35,
            "movement": 5
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 46,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 48,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 51,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 60,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 61,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 64,
            "movement": 20
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 68,
            "movement": 12
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 97,
            "movement": 4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 99,
            "movement": -7
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 107,
            "movement": -10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 117,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 119,
            "movement": 4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 124,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 127,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 137,
            "movement": 14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 142,
            "movement": -14
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 154,
            "movement": 3
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 177,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 184,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 0
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
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 13,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
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
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 16,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 25,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 27,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 40,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 44,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 54,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 58,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -7
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
            "position": 91,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 95,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": -7
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 112,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 116,
            "movement": 12
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 119,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 119,
            "movement": -27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 125,
            "movement": -8
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 127,
            "movement": -13
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 132,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 145,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 183,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 186,
            "movement": 8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 4,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 1,
            "movement": 17
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 0
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
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 3,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 7,
            "movement": 29
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": -9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 13,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 13,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 13,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": -7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 21,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 33,
            "movement": -15
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 45,
            "movement": -14
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 50,
            "movement": -18
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 55,
            "movement": -44
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 86,
            "movement": -37
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 194,
            "movement": -36
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
            "position": 5,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": -44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 98,
            "movement": 30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 107,
            "movement": -17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -63
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 138,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -56
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 150,
            "movement": -60
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -83
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
            "position": 32,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 34,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 1
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
            "position": 11,
            "movement": 67
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 14,
            "movement": 34
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 59,
            "movement": -38
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 87,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 103,
            "movement": -34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 89
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 114,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": 72
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 128,
            "movement": -57
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 149,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 151,
            "movement": -89
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": 26
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 195,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -68
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 40,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": -36
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 86,
            "movement": -22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 88,
            "movement": 91
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 97,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 137,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 145,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 155,
            "movement": -52
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": -8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 178,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 10,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
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
            "position": 157,
            "movement": -5
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 56,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": 17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 97,
            "movement": 33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 109,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": 63
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 143,
            "movement": 18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -50
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": -64
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
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
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
            "position": 185,
            "movement": -12
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
            "position": 81,
            "movement": -4
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 16
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": -21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 181,
            "movement": 8
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
            "position": 14,
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 59,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -14
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
            "movement": -57
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 147,
            "movement": 18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": -15
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
            "position": 45,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 88,
            "movement": 64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": 62
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 33
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 187,
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
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
            "position": 186,
            "movement": -9
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
            "country": "KW",
            "name": "Kuwait",
            "position": 28,
            "movement": 84
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 10,
            "movement": 22
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 2
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 82,
            "movement": -51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -64
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": -79
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -38
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 172,
            "movement": 18
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": -63
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
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 79
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": -78
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
            "movement": -7
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
            "position": 18,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
            "movement": -12
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
            "movement": 100
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 60,
            "movement": 7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 82,
            "movement": 69
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 121,
            "movement": 54
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -1
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
            "position": 51,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 199,
            "movement": -3
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
            "position": 21,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 11
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 27,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 108,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -19
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
            "position": 116,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
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
            "position": 71,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 104,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -24
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
            "position": 27,
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
            "position": 164,
            "movement": -11
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
            "movement": 10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 12
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
            "country": "MR",
            "name": "Mauritania",
            "position": 142,
            "movement": -90
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
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 105,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
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
            "position": 133,
            "movement": -2
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
            "position": 49,
            "movement": 78
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 171,
            "movement": -144
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
            "movement": 43
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 92,
            "movement": 52
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 10
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
            "position": 129,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 15,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cheat On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 91,
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
            "position": 84,
            "movement": 22
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
            "position": 120,
            "movement": -21
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
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 108,
            "movement": 5
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
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Own It",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
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
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 195,
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
            "country": "BH",
            "name": "Bahrain",
            "position": 77,
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
            "position": 5,
            "movement": 183
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
  