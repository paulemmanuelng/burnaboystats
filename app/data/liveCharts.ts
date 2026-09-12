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
  export const liveChartsUpdated = "2026-09-12";
  
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
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 1
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
            "country": "SE",
            "name": "Sweden",
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
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 7,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 11,
            "movement": 17
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 13,
            "movement": -4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 13,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 11
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 19,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 19,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 22,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 26,
            "movement": 7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 26,
            "movement": 7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 27,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 28,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 32,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 32,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 32,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 32,
            "movement": -12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 34,
            "movement": 8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 43,
            "movement": 11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 44,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 49,
            "movement": 15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 54,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 57,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 63,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 65,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 70,
            "movement": 73
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 74,
            "movement": 16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 77,
            "movement": -6
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 92,
            "movement": -14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 93,
            "movement": -7
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 96,
            "movement": -10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 110,
            "movement": 30
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 116,
            "movement": 71
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 117,
            "movement": 4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 136,
            "movement": 33
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 139,
            "movement": 20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 144,
            "movement": -14
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 149,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -40
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 168,
            "movement": -123
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 180,
            "movement": -145
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": -29
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 191,
            "movement": -21
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 196,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 197,
            "movement": -51
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
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
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 5,
            "movement": 3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 13
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 8,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 10,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": 9
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
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 14,
            "movement": 8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": 27
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": -3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 18,
            "movement": -9
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 23,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 32,
            "movement": 3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 34,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 35,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 44,
            "movement": -5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 44,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 48,
            "movement": -42
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 48,
            "movement": -6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 62,
            "movement": -35
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 68,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": -12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 93,
            "movement": -62
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 14,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 19,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 30,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 36,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 37,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": -8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 49,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 56,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 64,
            "movement": -12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 72,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 77,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 79,
            "movement": -12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 84,
            "movement": 1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 98,
            "movement": -16
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 112,
            "movement": -10
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 134,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 146,
            "movement": -20
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 163,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 173,
            "movement": -49
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 175,
            "movement": -32
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 194,
            "movement": 2
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
            "position": 10,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
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
            "position": 16,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -7
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
            "position": 19,
            "movement": -9
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
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 26,
            "movement": -10
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": 0
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
            "country": "BE",
            "name": "Belgium",
            "position": 29,
            "movement": -12
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
            "country": "ES",
            "name": "Spain",
            "position": 47,
            "movement": -28
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
            "position": 78,
            "movement": -41
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 82,
            "movement": -47
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -6
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
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -10
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 16,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": 23
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 24,
            "movement": -13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": 18
          },
          {
            "country": "US",
            "name": "United States",
            "position": 41,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 58,
            "movement": -14
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 63,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 65,
            "movement": -37
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 80,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 82,
            "movement": -66
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 30,
            "movement": 29
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 43,
            "movement": 53
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 50,
            "movement": -11
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 72,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 75,
            "movement": 76
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 77,
            "movement": 42
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 96,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 127,
            "movement": 65
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 143,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": -32
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 162,
            "movement": -35
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": 24
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 169,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -11
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": -83
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 194,
            "movement": -84
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
            "position": 136,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 185,
            "movement": -16
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 45,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 57,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 22
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 76,
            "movement": 70
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 86,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -43
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 186,
            "movement": 8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 191,
            "movement": -32
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 194,
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
            "position": 36,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 143,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 155,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": 11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
            "movement": -77
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": 4
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
            "position": 43,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -55
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": -71
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 195,
            "movement": -66
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
            "position": 9,
            "movement": 0
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
            "position": 134,
            "movement": -1
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 81,
            "movement": 88
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 140,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 164,
            "movement": 4
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 147,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -21
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 91,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -31
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 109,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": 43
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 160,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
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
    "title": "I Told Them...",
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
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -65
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 196,
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
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -1
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
            "position": 17,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -102
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 95,
            "movement": -26
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 106,
            "movement": -84
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 106,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 111,
            "movement": -33
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 191,
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
            "movement": 44
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
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
            "position": 169,
            "movement": 2
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
            "position": 40,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -19
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
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": 24
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
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": -24
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 73,
            "movement": -34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 80,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 16,
            "movement": 28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 155,
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
            "position": 84,
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -9
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
            "position": 108,
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
            "position": 106,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 109,
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
            "position": 113,
            "movement": 32
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
            "movement": -7
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
            "movement": -4
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
            "position": 135,
            "movement": -26
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
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
            "movement": -1
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
            "position": 180,
            "movement": -11
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
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 54
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
            "position": 79,
            "movement": -16
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -25
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
            "position": 148,
            "movement": -34
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
            "position": 153,
            "movement": -18
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
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 20,
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
            "position": 20,
            "movement": -18
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
            "position": 60,
            "movement": -29
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
            "movement": -1
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
            "position": 102,
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
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": null,
            "status": "new"
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Smoke",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -98
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
            "position": 196,
            "movement": -29
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
            "country": "NG",
            "name": "Nigeria",
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 4
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
            "position": 183,
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
  