// GENERATED FILE — do not edit by hand.
// Rebuilt hourly by scripts/build-live-charts.mjs from kworb's artist page.
//
// PLATFORM chart data: where each release is sitting RIGHT NOW on Spotify,
// Apple Music, iTunes, Deezer, Shazam and YouTube country charts. This is not
// official-chart data — app/data/charts.ts holds the official national peaks
// that feed the site's headline totals, and the two are kept apart on purpose.

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
  platforms: LivePlatform[];
}

/** When this snapshot was taken (ISO date). */
export const liveChartsUpdated = "2026-08-06";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 58,
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
            "country": "BH",
            "name": "Bahrain",
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
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
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
            "country": "GE",
            "name": "Georgia",
            "position": 1,
            "movement": 3
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
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 1,
            "movement": 0
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
            "country": "MT",
            "name": "Malta",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 1
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
            "movement": 2
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
            "country": "QA",
            "name": "Qatar",
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
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 2,
            "movement": -1
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
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 2,
            "movement": 0
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
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "SG",
            "name": "Singapore",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 4,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 6,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
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
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 8,
            "movement": 4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 9,
            "movement": 4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 10,
            "movement": 8
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 11,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 14,
            "movement": -4
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 16,
            "movement": 7
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 18,
            "movement": -5
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 21,
            "movement": -2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 21,
            "movement": 13
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 34,
            "movement": 30
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 36,
            "movement": -4
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
            "country": "BE",
            "name": "Belgium",
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
            "country": "NO",
            "name": "Norway",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
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
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 4,
            "movement": 10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 7,
            "movement": 18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": 19
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 8,
            "movement": 17
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 9,
            "movement": -4
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 10,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 10,
            "movement": 76
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 14,
            "movement": 8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 18,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 19,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 24,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 25,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 26,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 26,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 27,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 32,
            "movement": -6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 33,
            "movement": 83
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 40,
            "movement": -13
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 42,
            "movement": 13
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 42,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 43,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 48,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 3
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 51,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": 122
          },
          {
            "country": "IN",
            "name": "India",
            "position": 52,
            "movement": -4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 54,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 55,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 59,
            "movement": 9
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 62,
            "movement": -7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 67,
            "movement": -5
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 69,
            "movement": -32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 73,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -22
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 79,
            "movement": -59
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": -21
          },
          {
            "country": "US",
            "name": "United States",
            "position": 84,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 89,
            "movement": 69
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 94,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": 25
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 109,
            "movement": -20
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 110,
            "movement": 19
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 112,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": -25
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 125,
            "movement": -14
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 131,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 134,
            "movement": 5
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 138,
            "movement": 24
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 138,
            "movement": -10
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 143,
            "movement": -10
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 155,
            "movement": -152
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 159,
            "movement": -37
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 171,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -41
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 191,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -59
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 199,
            "movement": -35
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
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
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 4,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 6,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 8,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 11,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 11,
            "movement": 0
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 20,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 25,
            "movement": -3
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 28,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 28,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 40,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 43,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 43,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 57,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 58,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": 1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 64,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 70,
            "movement": -11
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 73,
            "movement": -6
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 78,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 88,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 88,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 101,
            "movement": -18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 104,
            "movement": 3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 106,
            "movement": -10
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 109,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 118,
            "movement": -3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 122,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 133,
            "movement": -29
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 140,
            "movement": 4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 154,
            "movement": -10
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 176,
            "movement": -8
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 177,
            "movement": -18
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 184,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": -23
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 192,
            "movement": -16
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 193,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 9,
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
            "country": "CY",
            "name": "Cyprus",
            "position": 1,
            "movement": 1
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
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "IS",
            "name": "Iceland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 7,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 7,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 7,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 9,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": -4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": -2
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 25,
            "movement": 6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 31,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 36,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 36,
            "movement": 5
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 44,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 49,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 50,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 56,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 56,
            "movement": 3
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 57,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 72,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 77,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 80,
            "movement": -5
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 89,
            "movement": -11
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 89,
            "movement": -7
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 92,
            "movement": -10
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 104,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 105,
            "movement": -11
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 107,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 111,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 114,
            "movement": -9
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 126,
            "movement": -9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 131,
            "movement": -11
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 143,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 160,
            "movement": -14
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 165,
            "movement": -25
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 172,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 172,
            "movement": 2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 174,
            "movement": -14
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 188,
            "movement": 11
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 192,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 7,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 1,
            "movement": 69
          },
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
            "country": "RO",
            "name": "Romania",
            "position": 1,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 4,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 5,
            "movement": 9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 8,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 12,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 15,
            "movement": 59
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 16,
            "movement": 1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 18,
            "movement": -13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 11
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 20,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 20,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 21,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 23,
            "movement": -7
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 25,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 35,
            "movement": -28
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 36,
            "movement": 25
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 39,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 46,
            "movement": 11
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 58,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 89,
            "movement": 6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 5,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 4
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
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 2,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 2,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
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
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": 2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 3,
            "movement": 59
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 5,
            "movement": 5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 6,
            "movement": 1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 13,
            "movement": -8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 17,
            "movement": 71
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 19,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 20,
            "movement": -9
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 21,
            "movement": -19
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 26,
            "movement": -12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 34,
            "movement": -10
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 36,
            "movement": 13
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 43,
            "movement": -33
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 49,
            "movement": -12
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 50,
            "movement": -49
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 51,
            "movement": -48
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 55,
            "movement": -51
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 64,
            "movement": 17
          },
          {
            "country": "IN",
            "name": "India",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 77,
            "movement": -11
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 82,
            "movement": -3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 92,
            "movement": 9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 179,
            "movement": -170
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
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 57,
            "movement": 100
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 65,
            "movement": -14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 68,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 96,
            "movement": -31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 100,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": -39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -65
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 118,
            "movement": -51
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -27
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
            "position": 50,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
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
            "position": 174,
            "movement": -2
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 42,
            "movement": 27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 115,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": -50
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 120,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": 35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 135,
            "movement": 38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": -57
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 158,
            "movement": -32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 21,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -6
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
            "position": 21,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
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
            "position": 155,
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
            "position": 92,
            "movement": null,
            "status": "re"
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
            "position": 87,
            "movement": -8
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
            "position": 43,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 73
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 87,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 104
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": -13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 101,
            "movement": -56
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 112,
            "movement": -73
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 20
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 127,
            "movement": -62
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": -45
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": -49
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": -60
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 190,
            "movement": -50
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 193,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": -82
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
            "position": 52,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 50,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 57,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 68,
            "movement": -33
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 104,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 111,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 121,
            "movement": 5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 146,
            "movement": 36
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 149,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": -66
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": -45
          },
          {
            "country": "BM",
            "name": "Bermuda",
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
            "position": 128,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 174,
            "movement": 2
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
            "position": 40,
            "movement": -18
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 53,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 126,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
            "movement": -7
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
            "position": 196,
            "movement": -142
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 43
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": -19
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 95
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": -48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": null,
            "status": "new"
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
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 130,
            "movement": -59
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": 11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
            "movement": -3
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
            "position": 20,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
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
            "position": 119,
            "movement": 5
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
            "position": 160,
            "movement": -11
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 74
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 134,
            "movement": -77
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": -40
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 182,
            "movement": -101
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 24,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 78,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 93,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 166,
            "movement": 8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 167,
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
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 200,
            "movement": -56
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "re"
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
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
            "movement": -47
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 59
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": 34
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 152,
            "movement": -110
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 130,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -5
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 22,
            "movement": 39
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 92,
            "movement": 17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 117,
            "movement": 61
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 140,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 157,
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -8
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 198,
            "movement": -10
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
            "position": 83,
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
            "position": 47,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
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
            "country": "MA",
            "name": "Morocco",
            "position": 62,
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
            "country": "SR",
            "name": "Suriname",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 100,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 127,
            "movement": 14
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 155,
            "movement": -63
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 169,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": 58
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
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
            "position": 90,
            "movement": 3
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
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
            "country": "GH",
            "name": "Ghana",
            "position": 15,
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
            "position": 63,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 174,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 186,
            "movement": -42
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 75,
            "movement": -47
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
            "position": 172,
            "movement": -38
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
            "position": 176,
            "movement": 1
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
            "movement": 2
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
            "position": 184,
            "movement": -11
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
            "position": 96,
            "movement": -9
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
            "position": 193,
            "movement": 4
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
            "position": 49,
            "movement": -38
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "Donne-moi l'accord",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
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
            "position": 161,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 192,
            "movement": 0
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 6
          },
          {
            "country": "ZM",
            "name": "Zambia",
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
    "title": "Sekkle Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 27,
            "movement": -15
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 33,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": null,
            "status": "re"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": -1
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": -19
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
            "position": 122,
            "movement": 7
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
            "position": 64,
            "movement": 0
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
            "country": "AI",
            "name": "Anguilla",
            "position": 143,
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
            "position": 150,
            "movement": -43
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TH",
            "name": "Thailand",
            "position": 62,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Monsters You Made",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -65
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 8
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 6
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Hossana",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "position": 175,
            "movement": -2
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
            "position": 199,
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
