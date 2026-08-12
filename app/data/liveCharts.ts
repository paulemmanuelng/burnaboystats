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
export const liveChartsUpdated = "2026-08-12";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 48,
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
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 2,
            "movement": 0
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
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
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
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 2,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
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
            "country": "LT",
            "name": "Lithuania",
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
            "country": "MA",
            "name": "Morocco",
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
            "country": "MK",
            "name": "North Macedonia",
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
            "country": "ZA",
            "name": "South Africa",
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
            "country": "UY",
            "name": "Uruguay",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
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
            "country": "MX",
            "name": "Mexico",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
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
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 4,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 4,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 5,
            "movement": 1
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 6,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": 1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": -5
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 12,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 12,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 12,
            "movement": 2
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 12,
            "movement": -1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 13,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 13,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 15,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 19,
            "movement": -6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 20,
            "movement": null,
            "status": "re"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 26,
            "movement": -5
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 29,
            "movement": 5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 29,
            "movement": -8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 52,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 11,
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
            "country": "QA",
            "name": "Qatar",
            "position": 1,
            "movement": 4
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
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 1
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
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
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
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 6,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 8,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 9,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 10,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 12,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 13,
            "movement": 43
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": 20
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 20,
            "movement": 17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 22,
            "movement": 5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 22,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 25,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": 69
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 25,
            "movement": 53
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 29,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 35,
            "movement": 23
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 35,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 36,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 37,
            "movement": 8
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 44,
            "movement": 7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 46,
            "movement": -22
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 46,
            "movement": 53
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 49,
            "movement": 10
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 56,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 59,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": 8
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 61,
            "movement": 8
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 64,
            "movement": 83
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 66,
            "movement": 16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 68,
            "movement": 53
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 72,
            "movement": 51
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 75,
            "movement": 8
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 76,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 76,
            "movement": -33
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 77,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 79,
            "movement": 5
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 82,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 85,
            "movement": 6
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 85,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 89,
            "movement": 30
          },
          {
            "country": "IN",
            "name": "India",
            "position": 93,
            "movement": -3
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 93,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": -19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 109,
            "movement": 14
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 117,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 4
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 137,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 141,
            "movement": -33
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 153,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": 14
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 166,
            "movement": 26
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 178,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 182,
            "movement": -55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": -83
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
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
            "country": "DK",
            "name": "Denmark",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 12,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 14,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 18,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 30,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 35,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 36,
            "movement": 0
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 38,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 47,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 63,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 71,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": -8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 78,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 81,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 83,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 87,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 91,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 93,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 104,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 105,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 112,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 142,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 147,
            "movement": -7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 159,
            "movement": -4
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 187,
            "movement": -13
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 195,
            "movement": -19
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 199,
            "movement": -18
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
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": 10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 9,
            "movement": 6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 11,
            "movement": -8
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 12,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 14,
            "movement": 4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 14,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 16,
            "movement": 6
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 16,
            "movement": 16
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 16,
            "movement": -14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 20,
            "movement": 17
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": 59
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 23,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 25,
            "movement": -17
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 28,
            "movement": 47
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 31,
            "movement": 11
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 35,
            "movement": 53
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 36,
            "movement": 50
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 42,
            "movement": 16
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": -28
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 50,
            "movement": -42
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 59,
            "movement": -24
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 65,
            "movement": -5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 77,
            "movement": -54
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 86,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 8,
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
            "country": "WW",
            "name": "Worldwide",
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
            "country": "SK",
            "name": "Slovakia",
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
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
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
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 13,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 15,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 18,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 18,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 26,
            "movement": -2
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 34,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 35,
            "movement": -5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 39,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 47,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 51,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 57,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 64,
            "movement": -5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 66,
            "movement": -28
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 74,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 78,
            "movement": -12
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 78,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 90,
            "movement": -14
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 91,
            "movement": -5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 105,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 110,
            "movement": -23
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 111,
            "movement": 7
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 112,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 117,
            "movement": -3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 136,
            "movement": 3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 150,
            "movement": -4
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 160,
            "movement": 3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 176,
            "movement": -16
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 178,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 192,
            "movement": -8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 6,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 1,
            "movement": null,
            "status": "new"
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
            "movement": 90
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 3
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
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": 14
          },
          {
            "country": "SG",
            "name": "Singapore",
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
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 6,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 8,
            "movement": 13
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 18,
            "movement": 15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 20,
            "movement": -6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 27,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 44,
            "movement": -36
          },
          {
            "country": "IN",
            "name": "India",
            "position": 46,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 62,
            "movement": -61
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 63,
            "movement": -39
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 66,
            "movement": -20
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 66,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 67,
            "movement": -63
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 75,
            "movement": -8
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 75,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -64
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": -6
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 126,
            "movement": 58
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
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": 53
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 102,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 113,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 124,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 129,
            "movement": 13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": -94
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 179,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": 8
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
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
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
            "position": 67,
            "movement": 1
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 53
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": 26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 125,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 133,
            "movement": -49
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": -45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 147,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": 14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
            "movement": -60
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 70,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
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
            "position": 135,
            "movement": 3
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
            "position": 90,
            "movement": 7
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
            "position": 44,
            "movement": 3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 55,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -45
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 105,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": 24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 113,
            "movement": 13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 126,
            "movement": 3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 137,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 25
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": 27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 146,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 136,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 179,
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
            "position": 135,
            "movement": -14
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
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": 107
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 37,
            "movement": 89
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 62
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -76
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 123,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": 27
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 138,
            "movement": -105
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 162,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "position": 53,
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
            "position": 6,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": -8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 115,
            "movement": 9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 125,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 146,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": -15
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
            "position": 47,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": 6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 185,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
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
            "position": 127,
            "movement": -11
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
            "position": 13,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 56,
            "movement": 46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 91,
            "movement": -45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 95,
            "movement": -18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 102,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 84
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": -31
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 197,
            "movement": -28
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 37,
            "movement": 159
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 39,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 64,
            "movement": -25
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 33
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 85,
            "movement": -46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 59
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 120,
            "movement": 69
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 145,
            "movement": -117
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
            "movement": -59
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -21
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": 137
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -54
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
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
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 3,
            "movement": 0
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
            "position": 33,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
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
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -22
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 24,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 109,
            "movement": -14
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 120,
            "movement": -15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 128,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
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
            "country": "AO",
            "name": "Angola",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": 19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": 25
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
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 156,
            "movement": 35
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
            "position": 68,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 106,
            "movement": -77
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 153,
            "movement": -54
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": -66
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
            "position": 34,
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
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
            "position": 177,
            "movement": -73
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
            "position": 76,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -26
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
            "position": 97,
            "movement": 77
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 117,
            "movement": -7
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 188,
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
            "country": "TD",
            "name": "Chad",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 54
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
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
            "position": 113,
            "movement": -15
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
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 98,
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
            "position": 159,
            "movement": 15
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
            "position": 166,
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
            "position": 126,
            "movement": -9
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -18
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
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 4,
            "movement": -1
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 117,
            "movement": -84
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
            "position": 79,
            "movement": 4
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
            "position": 190,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -7
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
            "position": 174,
            "movement": 2
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
            "position": 199,
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
            "position": 188,
            "movement": -81
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
            "movement": -4
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 30
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
            "position": 54,
            "movement": 0
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
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
    "title": "Cloak & Dagger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -22
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
            "position": 127,
            "movement": -6
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
            "position": 67,
            "movement": -2
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
            "country": "NE",
            "name": "Niger",
            "position": 190,
            "movement": -29
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
            "position": 144,
            "movement": 15
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
            "movement": 13
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
