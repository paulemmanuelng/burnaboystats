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
  export const liveChartsUpdated = "2026-09-02";
  
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
            "movement": -1
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
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -1
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 5,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 6,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 8,
            "movement": 2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": 69
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 9,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": -6
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 14,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 23,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 23,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 26,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 26,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 28,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 31,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 33,
            "movement": -3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 34,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 35,
            "movement": -13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 36,
            "movement": -5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 41,
            "movement": 34
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 43,
            "movement": -8
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 44,
            "movement": 6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 47,
            "movement": -7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 49,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 51,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 54,
            "movement": 5
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 70,
            "movement": -19
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 75,
            "movement": 64
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 82,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 89,
            "movement": -9
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 95,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 117,
            "movement": 3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 119,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 132,
            "movement": -13
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 135,
            "movement": -43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": -5
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 141,
            "movement": -60
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 146,
            "movement": -52
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 148,
            "movement": 33
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 148,
            "movement": -12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 167,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": 24
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 180,
            "movement": -25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 189,
            "movement": -15
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 193,
            "movement": -93
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 2,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 1,
            "movement": 2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 17
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 5,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 17
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": 15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 9,
            "movement": -4
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 9,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 9,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": -2
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
            "movement": -4
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 15,
            "movement": 23
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 16,
            "movement": -7
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 16,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 22,
            "movement": -9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 26,
            "movement": 26
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 27,
            "movement": 37
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 28,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 30,
            "movement": -21
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": -15
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 39,
            "movement": -32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": -37
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 42,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 47,
            "movement": 19
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 50,
            "movement": -41
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 54,
            "movement": -27
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 62,
            "movement": -55
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 76,
            "movement": -27
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 85,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
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
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 17,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 22,
            "movement": -8
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 22,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 28,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -18
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 46,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 48,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 49,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 49,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 70,
            "movement": -13
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 85,
            "movement": -32
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 86,
            "movement": -17
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 89,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 91,
            "movement": -13
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 98,
            "movement": -43
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 137,
            "movement": -53
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 141,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 145,
            "movement": -52
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 152,
            "movement": -37
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 160,
            "movement": -3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 181,
            "movement": -58
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
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 0
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
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 15,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 19,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 22,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 26,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 26,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 29,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 34,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 41,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 49,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 51,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 62,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 64,
            "movement": -6
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 78,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 85,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 96,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 157,
            "movement": 5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 161,
            "movement": 14
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 168,
            "movement": 7
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 179,
            "movement": -4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 190,
            "movement": -9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 3,
            "movement": 67
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 11,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 17,
            "movement": -9
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 18,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 42,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 55,
            "movement": -18
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 94,
            "movement": 48
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 97,
            "movement": -54
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 98,
            "movement": 11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 160,
            "movement": -142
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 163,
            "movement": -121
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
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": -13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 80,
            "movement": 59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 89,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": 70
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 124,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": -71
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 158,
            "movement": 37
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
            "movement": -42
          },
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 51,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -47
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": 69
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 96,
            "movement": -79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 134,
            "movement": 33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 134,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 138,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 145,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 158,
            "movement": -52
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "country": "NA",
            "name": "Namibia",
            "position": 33,
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
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 2
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
            "position": 31,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 159,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 165,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": -35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": -1
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
            "position": 117,
            "movement": -12
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
            "position": 6,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": -16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": -51
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 123,
            "movement": 49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": -34
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": 44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": 46
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 117,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -25
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "country": "DM",
            "name": "Dominica",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
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
            "position": 148,
            "movement": 9
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
            "position": 53,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": -14
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 77,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": 2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 125,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": -45
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
            "movement": 5
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": 4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 77,
            "movement": -61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -74
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -70
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -35
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 60,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": -25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -22
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 70
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
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
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -24
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -1
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
            "position": 51,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -72
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 138,
            "movement": 56
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -3
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
            "position": 104,
            "movement": 34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 194,
            "movement": -126
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
            "position": 32,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": -1
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
            "position": 71,
            "movement": -29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 81,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -79
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
            "movement": 16
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
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -118
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
            "position": 44,
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
            "position": 70,
            "movement": 10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -28
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
            "position": 27,
            "movement": -12
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
            "position": 163,
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
            "position": 81,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 79
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 146,
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
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
            "position": 129,
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
            "position": 125,
            "movement": 22
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
            "movement": -10
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
            "position": 136,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
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
            "position": 109,
            "movement": 24
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
            "position": 87,
            "movement": -22
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
            "position": 2,
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
            "position": 24,
            "movement": 50
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
            "position": 136,
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
            "position": 67,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 121,
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
            "position": 185,
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
            "position": 159,
            "movement": -7
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
            "movement": -1
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
            "position": 175,
            "movement": 16
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
            "position": 182,
            "movement": -24
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
            "position": 122,
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
            "position": 178,
            "movement": 2
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
  