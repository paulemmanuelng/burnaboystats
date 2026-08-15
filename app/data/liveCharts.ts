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
export const liveChartsUpdated = "2026-08-15";

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
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": -3
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
        "numberOnes": 12,
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
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 1
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
            "country": "IE",
            "name": "Ireland",
            "position": 2,
            "movement": 1
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
            "country": "SK",
            "name": "Slovakia",
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
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 3,
            "movement": -1
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
            "country": "LK",
            "name": "Sri Lanka",
            "position": 4,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 5,
            "movement": 4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 7,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 8,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 11,
            "movement": 52
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 11,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 11,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 15,
            "movement": 19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 16,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 18,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 22,
            "movement": 5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 23,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 24,
            "movement": 29
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 25,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 26,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 28,
            "movement": -7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 29,
            "movement": -12
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 29,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 29,
            "movement": 2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 32,
            "movement": -23
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 35,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 36,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 43,
            "movement": 2
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 50,
            "movement": 41
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 53,
            "movement": 6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 55,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 55,
            "movement": 30
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 55,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 61,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 63,
            "movement": 23
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 63,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 66,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": -12
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 75,
            "movement": -5
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 89,
            "movement": -5
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 89,
            "movement": 14
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 96,
            "movement": -9
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 102,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -4
          },
          {
            "country": "IN",
            "name": "India",
            "position": 105,
            "movement": 10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 106,
            "movement": -37
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 106,
            "movement": 48
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 107,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": -33
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 129,
            "movement": -78
          },
          {
            "country": "US",
            "name": "United States",
            "position": 130,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 146,
            "movement": -14
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 148,
            "movement": -30
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 149,
            "movement": -61
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 165,
            "movement": 16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 172,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 191,
            "movement": -42
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 200,
            "movement": -147
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
            "country": "LU",
            "name": "Luxembourg",
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
            "movement": 2
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 5,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 6,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 7,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": 5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 11,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 13,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -1
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 28,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 29,
            "movement": 4
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 30,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 42,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 44,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 44,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 48,
            "movement": 15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 55,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 59,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 61,
            "movement": 10
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 68,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 76,
            "movement": 12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 88,
            "movement": 6
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 89,
            "movement": -5
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 100,
            "movement": -7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 104,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 109,
            "movement": -13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 116,
            "movement": 19
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 136,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 140,
            "movement": -15
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 142,
            "movement": 4
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 165,
            "movement": 13
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 169,
            "movement": -8
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 181,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 191,
            "movement": -11
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
            "movement": 0
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 14,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 19,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 22,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 26,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 31,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 33,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 37,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 42,
            "movement": -4
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 48,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 64,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 69,
            "movement": 2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 70,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 72,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 79,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": -7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 88,
            "movement": 1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 88,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": -9
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 98,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 99,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 101,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 131,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 138,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 151,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 165,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 181,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 8,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "IL",
            "name": "Israel",
            "position": 1,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
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
            "movement": 1
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
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 3,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": 10
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 6,
            "movement": -3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 8,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 11,
            "movement": 16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 5
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
            "movement": 6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 16,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 17,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 19,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 21,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 24,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 24,
            "movement": -8
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 28,
            "movement": 14
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 36,
            "movement": 59
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 37,
            "movement": -33
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 42,
            "movement": 20
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 53,
            "movement": 43
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 55,
            "movement": -26
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 59,
            "movement": -41
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 64,
            "movement": 26
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 66,
            "movement": 5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 79,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 7,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 2
          },
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
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 1,
            "movement": 5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": 26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": 1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 5,
            "movement": 19
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 7,
            "movement": 10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 15,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": -7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 30,
            "movement": -16
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 54,
            "movement": 11
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 61,
            "movement": -30
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 72,
            "movement": 19
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 93,
            "movement": -81
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 99,
            "movement": -12
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 100,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 187,
            "movement": -71
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 52
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 61,
            "movement": 42
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 89
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 104,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": -28
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 108,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": -87
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 153,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 164,
            "movement": -8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 169,
            "movement": -77
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 176,
            "movement": -15
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
            "position": 34,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -20
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": 92
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -24
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -35
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 112,
            "movement": -16
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 115,
            "movement": -28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": -74
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": 16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 175,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 64,
            "movement": -53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 89,
            "movement": -44
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 90,
            "movement": 48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 112,
            "movement": 69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 136,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -42
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": -57
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": -23
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": -32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
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
            "position": 26,
            "movement": -3
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
            "position": 110,
            "movement": 0
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": -34
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 146,
            "movement": -38
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": 32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": 18
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 196,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 61,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 70,
            "movement": -32
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 82,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 98,
            "movement": 36
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 104,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 109,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": 19
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": 43
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 142,
            "movement": -7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 143,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 158,
            "movement": -9
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 95,
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
            "position": 156,
            "movement": -20
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 108
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": -27
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": 16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 179,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 181,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 83,
            "movement": 73
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 37
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": 38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -11
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
            "position": 25,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 57,
            "movement": 3
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
            "position": 149,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": 154
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 122
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 75
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": 42
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 8,
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
            "position": 28,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
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
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 20,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 60,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": 93
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -91
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 136,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": -43
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 163,
            "movement": null,
            "status": "new"
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 74
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 76
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 33,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -26
          },
          {
            "country": "FR",
            "name": "France",
            "position": 154,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 170,
            "movement": -16
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 189,
            "movement": -21
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
            "position": 97,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 115,
            "movement": -44
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
            "position": 23,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 47,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -1
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
            "country": "MR",
            "name": "Mauritania",
            "position": 88,
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 59,
            "movement": 62
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 86,
            "movement": -39
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 144,
            "movement": 50
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 158,
            "movement": -65
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 171,
            "movement": -141
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": -1
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 31,
            "movement": 41
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": 36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": 38
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
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
            "position": 196,
            "movement": -34
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
            "position": 73,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 30
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 26,
            "movement": 15
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 96,
            "movement": -3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -16
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 27
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
            "country": "LR",
            "name": "Liberia",
            "position": 130,
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
            "position": 127,
            "movement": -10
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
            "position": 72,
            "movement": 3
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
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
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
            "position": 41,
            "movement": -29
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
            "position": 41,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "On Form",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 127,
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
            "position": 183,
            "movement": -22
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": 25
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
            "position": 112,
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
            "position": 62,
            "movement": 3
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
            "position": 153,
            "movement": -8
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
            "position": 194,
            "movement": -39
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
            "position": 176,
            "movement": -12
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
