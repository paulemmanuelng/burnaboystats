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
  export const liveChartsUpdated = "2026-09-04";
  
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
            "position": 3,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 4,
            "movement": 8
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
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 11,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
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
            "country": "KY",
            "name": "Cayman Islands",
            "position": 17,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 17,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 17,
            "movement": 1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 19,
            "movement": -3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": 8
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 19,
            "movement": 80
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 22,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 23,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 32,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 33,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 36,
            "movement": 4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 38,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 41,
            "movement": -10
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 44,
            "movement": 1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 46,
            "movement": -13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 55,
            "movement": 3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 59,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 61,
            "movement": 62
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 65,
            "movement": 120
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 71,
            "movement": 10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 77,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 84,
            "movement": -59
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 88,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 91,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 96,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 102,
            "movement": -19
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 112,
            "movement": 13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 116,
            "movement": 2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 137,
            "movement": 29
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 137,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 148,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 14
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 166,
            "movement": 19
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 166,
            "movement": -63
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 177,
            "movement": -10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 198,
            "movement": -7
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
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 4,
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": 12
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 10,
            "movement": 3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 10,
            "movement": 12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 11,
            "movement": 7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 11,
            "movement": 25
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
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
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
            "country": "PY",
            "name": "Paraguay",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 21,
            "movement": 19
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 33,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": -15
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 40,
            "movement": -15
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 47,
            "movement": -31
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 54,
            "movement": -17
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 55,
            "movement": -19
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 82,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 88,
            "movement": -14
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 90,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 95,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
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
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 9,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 9,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 17,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 24,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 24,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 26,
            "movement": -12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": 5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 32,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": -5
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 47,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 49,
            "movement": -22
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 52,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 64,
            "movement": -15
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 65,
            "movement": -16
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 75,
            "movement": 1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 83,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 92,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 92,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 103,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 150,
            "movement": -15
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 155,
            "movement": -10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 165,
            "movement": -13
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 173,
            "movement": -20
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 175,
            "movement": 6
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 176,
            "movement": -19
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 177,
            "movement": -21
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
            "country": "RO",
            "name": "Romania",
            "position": 3,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 19
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 17,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 22,
            "movement": -12
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 22,
            "movement": 21
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 34,
            "movement": -6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 35,
            "movement": -29
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 37,
            "movement": 62
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": 43
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 46,
            "movement": -17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 49,
            "movement": -40
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 50,
            "movement": -48
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 51,
            "movement": 69
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 61,
            "movement": -22
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 69,
            "movement": -20
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 73,
            "movement": -24
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 84,
            "movement": 63
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 95,
            "movement": -89
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 97,
            "movement": -91
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 199,
            "movement": -174
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 46,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 59,
            "movement": -38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 91,
            "movement": 89
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": -56
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": -65
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": -89
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 195,
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
            "position": 53,
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": 54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -43
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": 21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -62
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 158,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": -73
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 1
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
            "position": 68,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
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
            "country": "SR",
            "name": "Suriname",
            "position": 24,
            "movement": 131
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -47
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 105,
            "movement": -39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 135,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 160,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": -50
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 179,
            "movement": -90
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 184,
            "movement": -53
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 195,
            "movement": -12
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
            "movement": 0
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
            "position": 146,
            "movement": 1
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
            "position": 36,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 41,
            "movement": 150
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 48,
            "movement": 26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 55,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 69
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 106
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": 15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 109,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 118,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": -57
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 173,
            "movement": -66
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 191,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "position": 136,
            "movement": 13
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 4
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
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 153,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
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
            "position": 169,
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
            "position": 9,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": 38
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 53,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": -33
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
            "position": 71,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": 13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 161,
            "movement": 33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 185,
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
            "position": 20,
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
            "position": 39,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 94
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 50
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
            "movement": -49
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": -43
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 113,
            "movement": -32
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 118,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": -55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": -10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": -136
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 191,
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
            "position": 35,
            "movement": 99
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 47,
            "movement": 101
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 127,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 128,
            "movement": 39
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 143,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 162,
            "movement": -46
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 200,
            "movement": -78
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
            "position": 8,
            "movement": -7
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
            "position": 69,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 3
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -15
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
            "position": 19,
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
            "position": 154,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -3
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 94
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -33
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
            "position": 20,
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
            "position": 30,
            "movement": 2
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
            "position": 72,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
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
            "position": 196,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 54
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
            "movement": -10
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
            "position": 85,
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
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 159,
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
            "position": 197,
            "movement": -2
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
            "position": 58,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -60
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
            "position": 42,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 74,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 150,
            "movement": 40
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
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
            "position": 184,
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 118,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": 1
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
            "position": 100,
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
            "position": 101,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
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
            "position": 108,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -49
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
            "position": 197,
            "movement": -43
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
            "position": 85,
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
    "title": "Common Person",
    "platforms": [
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -38
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 1,
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
            "position": 15,
            "movement": -12
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 56,
            "movement": -36
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
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
            "position": 47,
            "movement": 16
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
            "position": 33,
            "movement": -4
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
            "movement": 0
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
            "movement": 1
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
    "title": "Giza",
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
    "title": "Higher",
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": 9
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
    "title": "Own It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
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
            "position": 171,
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
  