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
export const liveChartsUpdated = "2026-08-07";

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
        "numberOnes": 13,
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
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 2
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
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 3,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "BH",
            "name": "Bahrain",
            "position": 6,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 7,
            "movement": 0
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
            "country": "HU",
            "name": "Hungary",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 12,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 13,
            "movement": -4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 15,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 16,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": -7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 22,
            "movement": 13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 22,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 23,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 25,
            "movement": -9
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 25,
            "movement": 6
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 28,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 29,
            "movement": -10
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 29,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 34,
            "movement": -5
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 36,
            "movement": 38
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 37,
            "movement": -19
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 43,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 44,
            "movement": -28
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 45,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 45,
            "movement": -3
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 47,
            "movement": -11
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 49,
            "movement": -10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 52,
            "movement": -15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": -4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 53,
            "movement": -50
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 54,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 58,
            "movement": -10
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 62,
            "movement": -17
          },
          {
            "country": "IN",
            "name": "India",
            "position": 66,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 71,
            "movement": -17
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 74,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 89,
            "movement": -34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 25
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 89,
            "movement": 8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 91,
            "movement": -8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 97,
            "movement": -11
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 99,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 99,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 107,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 133,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": 28
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 136,
            "movement": 9
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 142,
            "movement": -35
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 146,
            "movement": -45
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 154,
            "movement": -17
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 162,
            "movement": -28
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 166,
            "movement": -114
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 172,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 7,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "SK",
            "name": "Slovakia",
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
            "country": "IS",
            "name": "Iceland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 11,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 17,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 17,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": -2
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 28,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 28,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 32,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 40,
            "movement": 2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 41,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 41,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 52,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 54,
            "movement": -3
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 60,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 62,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 66,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 66,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 76,
            "movement": -7
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 82,
            "movement": 13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 90,
            "movement": -20
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 92,
            "movement": -5
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 98,
            "movement": 9
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 98,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 109,
            "movement": 5
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 120,
            "movement": 3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 120,
            "movement": -5
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 122,
            "movement": -8
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 128,
            "movement": 7
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 139,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 147,
            "movement": 5
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 170,
            "movement": -24
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 171,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -7
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 180,
            "movement": -20
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 185,
            "movement": -1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 198,
            "movement": -15
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
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 2
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
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 9,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 12,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": 1
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 22,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 30,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 31,
            "movement": -1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 32,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": -3
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
            "position": 39,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 55,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": 2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 62,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 7
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 74,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 79,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 81,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 84,
            "movement": 4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 84,
            "movement": -20
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 88,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 94,
            "movement": 7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 109,
            "movement": -5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 118,
            "movement": -9
          },
          {
            "country": "IN",
            "name": "India",
            "position": 118,
            "movement": -12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 119,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 125,
            "movement": -3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 143,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 153,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 166,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 6,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 1
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
            "country": "HR",
            "name": "Croatia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 2,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 3,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 4,
            "movement": 21
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": 16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": -5
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 8,
            "movement": 27
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 13
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 9,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -7
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 12,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 13,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 7
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
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 16,
            "movement": -8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 21,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 26,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": 6
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 35,
            "movement": -17
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 47,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 49,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 64,
            "movement": -63
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 65,
            "movement": -7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 99,
            "movement": -10
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 100,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
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
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": -2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 6,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": 7
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": -8
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 13,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": -15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 21,
            "movement": 106
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 33,
            "movement": -29
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": -30
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 37,
            "movement": -11
          },
          {
            "country": "IN",
            "name": "India",
            "position": 43,
            "movement": 95
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 43,
            "movement": -37
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 52,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": -49
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 54,
            "movement": -33
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 55,
            "movement": -19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 59,
            "movement": -28
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 59,
            "movement": -20
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 63,
            "movement": -45
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 68,
            "movement": -22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 94,
            "movement": -12
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 95,
            "movement": -8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 112,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 177,
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
            "position": 20,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 65,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": -22
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 76,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": 65
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 110,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 139,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": 49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
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
            "position": 153,
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
            "position": 91,
            "movement": -4
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
            "position": 22,
            "movement": 52
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 45,
            "movement": 97
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 52,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 103,
            "movement": 90
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 119,
            "movement": -38
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": -57
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "position": 52,
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
            "country": "MG",
            "name": "Madagascar",
            "position": 26,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -57
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 82,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 106
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 125,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": -37
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 154,
            "movement": -34
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 177,
            "movement": -65
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
            "position": 49,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 1
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
            "position": 170,
            "movement": 7
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
            "movement": 3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 62,
            "movement": 62
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 80,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -50
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 99,
            "movement": -28
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 116,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 116,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": 26
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 127,
            "movement": 72
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 130,
            "movement": 31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 151,
            "movement": 40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": 17
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 163,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": 22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -13
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
            "position": 127,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 169,
            "movement": -6
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
            "position": 63,
            "movement": -14
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
            "position": 40,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": 108
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": 18
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
            "movement": -92
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 197,
            "movement": -19
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
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
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
            "position": 120,
            "movement": 10
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
            "position": 173,
            "movement": -13
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
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 76,
            "movement": 101
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 104,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": 36
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 177,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 193,
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 35,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 45
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 51,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 101,
            "movement": -55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -37
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 180,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 197,
            "movement": 3
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
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 79
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 79,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 85,
            "movement": 8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 144,
            "movement": 23
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 151,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -10
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 106,
            "movement": 14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 57
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": null,
            "status": "new"
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
            "position": 34,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 68,
            "movement": -48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 57
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 143,
            "movement": -107
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 143,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 191,
            "movement": -38
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
            "position": 21,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": 70
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": 103
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 17
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 148,
            "movement": -90
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 102
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 2
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
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": 41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": 3
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": -14
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
            "position": 44,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 128,
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
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 195,
            "movement": -83
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": -14
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
            "position": 71,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 87,
            "movement": 51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 175,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 30
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": 51
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 117,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 121,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -39
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
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -17
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
            "position": 60,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": 2
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
            "country": "MR",
            "name": "Mauritania",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
            "movement": -100
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
            "position": 85,
            "movement": 5
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
            "position": 50,
            "movement": -14
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 76,
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
            "position": 47,
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
            "position": 139,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
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
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "movement": 11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 170,
            "movement": 21
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 38,
            "movement": -35
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
            "position": 186,
            "movement": -26
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 159,
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
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Want It All",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 21
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
            "position": 192,
            "movement": -8
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
            "position": 21,
            "movement": 7
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
            "position": 22,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Solid",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bebo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 50,
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
            "movement": -2
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
            "position": 74,
            "movement": -20
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
            "country": "TD",
            "name": "Chad",
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
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
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
            "position": 114,
            "movement": 3
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
            "position": 66,
            "movement": -1
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
            "position": 180,
            "movement": -71
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
            "position": 118,
            "movement": -13
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
            "position": 149,
            "movement": 48
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
            "position": 171,
            "movement": 7
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
