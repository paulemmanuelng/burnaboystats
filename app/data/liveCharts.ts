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
        "numberOnes": 10,
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
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 2
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
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 3,
            "movement": 5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
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
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
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
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 7,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 7,
            "movement": -2
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
            "country": "BH",
            "name": "Bahrain",
            "position": 8,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
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
            "country": "KY",
            "name": "Cayman Islands",
            "position": 9,
            "movement": 16
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 9,
            "movement": -5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 12,
            "movement": 6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 12,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 15,
            "movement": 2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 15,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": 11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": -8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 18,
            "movement": -4
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 18,
            "movement": 61
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 19,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 19,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 23,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 31,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 31,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 35,
            "movement": -11
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 36,
            "movement": 7
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 37,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 39,
            "movement": 1
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 42,
            "movement": 9
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 42,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 42,
            "movement": 27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 44,
            "movement": 15
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 45,
            "movement": 10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 48,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 52,
            "movement": -16
          },
          {
            "country": "IN",
            "name": "India",
            "position": 52,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 52,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 55,
            "movement": -48
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 58,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": 4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 73,
            "movement": 2
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 74,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 117
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 86,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 90,
            "movement": -7
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 97,
            "movement": -87
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 99,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 99,
            "movement": 13
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 101,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 9
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 107,
            "movement": 31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": -12
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 134,
            "movement": 25
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 135,
            "movement": -4
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 137,
            "movement": -28
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 145,
            "movement": -2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 151,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -27
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 166,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 188,
            "movement": -17
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 192,
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
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
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
            "country": "IS",
            "name": "Iceland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 9,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 10,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 11,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 13,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 25,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 27,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 42,
            "movement": -6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 51,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 51,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 55,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 58,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 64,
            "movement": -8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 66,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 69,
            "movement": 8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 70,
            "movement": 10
          },
          {
            "country": "US",
            "name": "United States",
            "position": 78,
            "movement": -6
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 87,
            "movement": 5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 95,
            "movement": -6
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 104,
            "movement": -15
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 107,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 114,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 114,
            "movement": -3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 115,
            "movement": -10
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 123,
            "movement": -19
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 131,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 135,
            "movement": -4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 146,
            "movement": 19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 152,
            "movement": 8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 155,
            "movement": -12
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 160,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -12
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 183,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 184,
            "movement": -12
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 195,
            "movement": -7
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
        "numberOnes": 2,
        "entries": [
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 3
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 2,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 5,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": 11
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 7,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 8,
            "movement": 7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 10,
            "movement": 50
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -9
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 19,
            "movement": -15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 22,
            "movement": 35
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 23,
            "movement": 2
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 40,
            "movement": -25
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 40,
            "movement": -7
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 45,
            "movement": -41
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 48,
            "movement": -30
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 51,
            "movement": -26
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 51,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": -43
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 57,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 58,
            "movement": -52
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 83,
            "movement": -78
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 83,
            "movement": -35
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": -11
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 89,
            "movement": -7
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 103,
            "movement": -44
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 165,
            "movement": -97
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
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 170
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 50,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": 16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 62,
            "movement": 59
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": -18
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 73,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": -26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 92,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 101,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 107,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 120,
            "movement": -30
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 173,
            "movement": -89
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
            "movement": -75
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
            "position": 163,
            "movement": 10
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
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 43,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 70
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 57
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 109,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": 35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": -81
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
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
            "position": 166,
            "movement": -11
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 28
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 70,
            "movement": -13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 71,
            "movement": 50
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 72,
            "movement": 32
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 120,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": -3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 124,
            "movement": 70
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -27
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 153,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": 16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 161,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 191,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": -35
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "position": 125,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": 11
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
            "position": 54,
            "movement": -15
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 70,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 74,
            "movement": -8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": 61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": 57
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": -48
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 142,
            "movement": 48
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": -43
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "position": 52,
            "movement": 0
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
            "position": 14,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 66
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 129,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 178,
            "movement": 9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 183,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": null,
            "status": "new"
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
            "position": 130,
            "movement": -11
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
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 91
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 46,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 85,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": -73
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 170,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 200,
            "movement": -83
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
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 26,
            "movement": 49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": 118
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 128,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
            "movement": -35
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 178,
            "movement": -125
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 200,
            "movement": -6
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
            "position": 19,
            "movement": -1
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -24
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 97,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 153,
            "movement": 29
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 167,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": -53
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 58,
            "movement": 94
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 119,
            "movement": 73
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -35
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "MG",
            "name": "Madagascar",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -21
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
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": 6
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
            "position": 28,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "FJ",
            "name": "Fiji",
            "position": 150,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 40,
            "movement": 117
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 64,
            "movement": -42
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 138,
            "movement": -21
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "position": 28,
            "movement": -8
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
            "position": 69,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 75,
            "movement": 3
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
            "position": 60,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 89,
            "movement": 66
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 95,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": 19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": 7
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
            "position": 59,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
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
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 100,
            "movement": 40
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 11,
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
            "position": 116,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -37
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
            "position": 29,
            "movement": -15
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
            "position": 180,
            "movement": -4
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
            "position": 175,
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
            "movement": 0
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
            "position": 179,
            "movement": 14
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
            "position": 44,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
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
            "position": 143,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 28,
            "movement": 21
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
            "position": 16,
            "movement": -10
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
            "position": 160,
            "movement": 1
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
            "position": 118,
            "movement": 4
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
            "position": 68,
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 3
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
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Hossana",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -15
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
            "position": 192,
            "movement": -144
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
            "position": 164,
            "movement": 10
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
