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
  export const liveChartsUpdated = "2026-08-20";
  
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
        "numberOnes": 10,
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
            "country": "DE",
            "name": "Germany",
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
            "country": "LT",
            "name": "Lithuania",
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
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
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
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 6,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 7,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 10,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 15,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 17,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 18,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 18,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 19,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 31,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 34,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 34,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 41,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 42,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 43,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 47,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 50,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 54,
            "movement": 0
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 56,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 58,
            "movement": 0
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 73,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 76,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 77,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 79,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 81,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 87,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 91,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 94,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 96,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 100,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 122,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 129,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 149,
            "movement": 0
          },
          {
            "country": "IN",
            "name": "India",
            "position": 149,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 151,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 164,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 0
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 172,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": 0
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 179,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 181,
            "movement": 0
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 198,
            "movement": 0
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 4,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 9,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": -1
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
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 16,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 27,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 35,
            "movement": -4
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 38,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 41,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 49,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 52,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 56,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 70,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 80,
            "movement": -8
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 91,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 93,
            "movement": -17
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 94,
            "movement": -30
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 101,
            "movement": -7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 106,
            "movement": 7
          },
          {
            "country": "US",
            "name": "United States",
            "position": 108,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 125,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 141,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 152,
            "movement": 5
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 155,
            "movement": -24
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 164,
            "movement": -13
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 178,
            "movement": -4
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 191,
            "movement": 3
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 14,
            "movement": -1
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 15,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 18,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 19,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 30,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 34,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 36,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 44,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 48,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": -1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 78,
            "movement": -7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 82,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 85,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 91,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 104,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 106,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -18
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 112,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 114,
            "movement": 9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 118,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 119,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 119,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 145,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 171,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 175,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": -13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 185,
            "movement": 13
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 3,
        "entries": [
          {
            "country": "FR",
            "name": "France",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 9,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": -1
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
            "position": 13,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 19,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 21,
            "movement": -18
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 22,
            "movement": -19
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 27,
            "movement": 33
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": 49
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 33,
            "movement": -24
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 35,
            "movement": -7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 35,
            "movement": -10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 40,
            "movement": -38
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 41,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 44,
            "movement": 30
          },
          {
            "country": "US",
            "name": "United States",
            "position": 56,
            "movement": 7
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 86,
            "movement": -14
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 94,
            "movement": -80
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 63
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 7,
            "movement": 3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 16,
            "movement": -14
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 48,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 57,
            "movement": -56
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 58,
            "movement": -38
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 70,
            "movement": -25
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 128,
            "movement": -122
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 192,
            "movement": -175
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 66,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 71,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 88,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 130,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 140,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 147,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 157,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 187,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": 0
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
            "position": 58,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -25
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 45,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 126,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 134,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 195,
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
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
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
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": 2
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
            "position": 92,
            "movement": 13
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 71,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 113,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 125,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 126,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 140,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 168,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": 0
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 171,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 193,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 0
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
            "position": 64,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 97,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 106,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 149,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": 0
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 68,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 92,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 152,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 156,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 162,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 185,
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 46,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 83,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 122,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 124,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 126,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 132,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 147,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 173,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 189,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "position": 147,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 193,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 1,
            "movement": 0
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 65,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 163,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 190,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 200,
            "movement": 0
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
            "position": 21,
            "movement": 2
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
            "position": 143,
            "movement": -1
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 77,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 89,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 168,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
            "movement": 0
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 1
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
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 54,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 91,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 154,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 179,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 0
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
            "position": 64,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 155,
            "movement": 0
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": 0
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 107,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 110,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 189,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 199,
            "movement": 0
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": 6
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
            "position": 194,
            "movement": 0
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 45,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 68,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 103,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 122,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 180,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 188,
            "movement": 0
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
            "position": 33,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": 0
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 19,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 141,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": 0
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
            "position": 18,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 73,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
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
            "position": 99,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 104,
            "movement": 0
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
            "position": 76,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 154,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 26,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 156,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -29
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
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
            "position": 79,
            "movement": 11
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
            "position": 136,
            "movement": -5
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
            "position": 47,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": 1
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
            "position": 61,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": 0
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 13
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
            "position": 200,
            "movement": 0
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
            "position": 136,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": 0
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
            "position": 143,
            "movement": -11
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
            "position": 144,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
            "movement": 0
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
            "position": 182,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gum Body",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 0
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
            "movement": 0
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
            "position": 65,
            "movement": -5
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
    "title": "Donne-moi l'accord",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": 0
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 166,
            "movement": 2
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
            "position": 149,
            "movement": 0
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
            "country": "LY",
            "name": "Libya",
            "position": 192,
            "movement": 0
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
            "position": 172,
            "movement": -11
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
            "position": 200,
            "movement": -11
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
  