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
export const liveChartsUpdated = "2026-08-09";

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
        "numberOnes": 14,
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 1,
            "movement": 1
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
            "country": "LK",
            "name": "Sri Lanka",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 2,
            "movement": 87
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "TJ",
            "name": "Tajikistan",
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
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 4,
            "movement": 8
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 8,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 9,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 10,
            "movement": -7
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 10,
            "movement": 6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 12,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 13,
            "movement": 6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 14,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 17,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 21,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 21,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 21,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 24,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 29,
            "movement": 18
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 30,
            "movement": 6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 34,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 36,
            "movement": 9
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 40,
            "movement": 3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 42,
            "movement": 10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 47,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 47,
            "movement": 11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 50,
            "movement": -22
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 55,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 56,
            "movement": -47
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 57,
            "movement": 109
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 58,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": 6
          },
          {
            "country": "IN",
            "name": "India",
            "position": 68,
            "movement": -2
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 76,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 81,
            "movement": -5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 85,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 89,
            "movement": -45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 99,
            "movement": -54
          },
          {
            "country": "US",
            "name": "United States",
            "position": 100,
            "movement": -8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 102,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 107,
            "movement": -18
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 109,
            "movement": -72
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 111,
            "movement": 31
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 111,
            "movement": -12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 112,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 113,
            "movement": -14
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 124,
            "movement": 38
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 126,
            "movement": 36
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 129,
            "movement": 7
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 142,
            "movement": -89
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 143,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -75
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 162,
            "movement": -16
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 168,
            "movement": -35
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 183,
            "movement": -14
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 183,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 196,
            "movement": null,
            "status": "new"
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
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 5,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 7,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 8,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 13,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 18,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 22,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 29,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 30,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 38,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 48,
            "movement": 14
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 50,
            "movement": -9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 55,
            "movement": -14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 59,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 59,
            "movement": 7
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 62,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 70,
            "movement": -16
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 70,
            "movement": -18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 75,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 89,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 96,
            "movement": -6
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 97,
            "movement": 31
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 100,
            "movement": -8
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 103,
            "movement": -5
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 108,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 108,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 109,
            "movement": -27
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 127,
            "movement": 12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 132,
            "movement": 15
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 135,
            "movement": -15
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 143,
            "movement": -23
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 151,
            "movement": -29
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 157,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -7
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 180,
            "movement": -10
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 198,
            "movement": -13
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
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
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
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": -1
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
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 11,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": -4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 25,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 29,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 30,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 33,
            "movement": -2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 35,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": -6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 47,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 61,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 66,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 70,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 74,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 80,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 80,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 82,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 93,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 100,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 109,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 116,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 118,
            "movement": -9
          },
          {
            "country": "IN",
            "name": "India",
            "position": 135,
            "movement": -17
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 139,
            "movement": -5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 149,
            "movement": -24
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 158,
            "movement": -10
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 164,
            "movement": -47
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 189,
            "movement": -36
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 8,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
            "position": 1,
            "movement": 1
          },
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
            "country": "RO",
            "name": "Romania",
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
            "country": "EC",
            "name": "Ecuador",
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
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 3,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 6,
            "movement": 6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 8,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 9,
            "movement": -7
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 9,
            "movement": 91
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 10,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 12,
            "movement": -4
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 12,
            "movement": 23
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": 23
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 14,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 16,
            "movement": 50
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 16,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 18,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": -19
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": -16
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 40,
            "movement": -27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 46,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 46,
            "movement": -34
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": -34
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 64,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 65,
            "movement": -48
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 69,
            "movement": -5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 85,
            "movement": -55
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 42
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 3,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 4,
            "movement": 171
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": 17
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 9,
            "movement": 8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 10,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 13,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 14,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": 45
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 21,
            "movement": 16
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 27,
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
            "position": 43,
            "movement": -11
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 67,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": -7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 94,
            "movement": -40
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 112,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 171,
            "movement": -167
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 24,
            "movement": 86
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 40,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 100,
            "movement": 91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 124,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": 38
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 148,
            "movement": -72
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 151,
            "movement": 47
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": -73
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
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
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
            "position": 148,
            "movement": 5
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
            "position": 99,
            "movement": -3
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
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 36,
            "movement": -10
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 42,
            "movement": 113
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 103
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 52,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": 83
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 105,
            "movement": -23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 116,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": 23
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": -81
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
            "position": 38,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 3
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 94
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 73,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -23
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 82,
            "movement": -37
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 84,
            "movement": 114
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -26
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": 46
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": -7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 159,
            "movement": -99
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": 12
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 162,
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 56
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 45,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 47,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 88,
            "movement": 21
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 98,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 119,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 121,
            "movement": 66
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 129,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": -17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 156,
            "movement": -40
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 165,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 174,
            "movement": -44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 186,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -25
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 196,
            "movement": -97
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
            "position": 138,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 188,
            "movement": -19
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
            "position": 86,
            "movement": -19
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
            "position": 39,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": 143
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -30
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 106,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -39
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
            "movement": -32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 90
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 28
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 72,
            "movement": 88
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -6
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 132,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": 40
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 167,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 199,
            "movement": -26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 200,
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
            "position": 13,
            "movement": 5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 2
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
            "position": 109,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dai Dai - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 187,
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
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 59,
            "movement": 42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": -37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": 38
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 104,
            "movement": -53
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 144,
            "movement": 53
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": 12
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
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -44
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": -103
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -14
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -2
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 112
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
            "position": 41,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 57,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -115
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 166,
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -29
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
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 27,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 83,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 86,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 129,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 157,
            "movement": -6
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
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -35
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 98
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": 12
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 3
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
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 99,
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
            "country": "DM",
            "name": "Dominica",
            "position": 55,
            "movement": 120
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 89,
            "movement": -2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
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
            "position": 49,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 180,
            "movement": -31
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 181,
            "movement": 14
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
            "position": 61,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": 37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -15
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 120,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": 1
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 79,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
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
            "position": 176,
            "movement": 23
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
            "position": 99,
            "movement": -14
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
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": -19
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
            "position": 190,
            "movement": -141
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
            "position": 114,
            "movement": -18
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
            "position": 80,
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
            "country": "NE",
            "name": "Niger",
            "position": 99,
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
            "country": "PT",
            "name": "Portugal",
            "position": 45,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -2
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
            "position": 197,
            "movement": -139
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
            "position": 182,
            "movement": 3
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
    "title": "Tshwala Bam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Time Flies",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
            "movement": -1
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
            "position": 86,
            "movement": -65
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
            "position": 194,
            "movement": -35
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
            "position": 82,
            "movement": -7
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": -35
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
            "movement": 2
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
            "position": 169,
            "movement": -17
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
            "position": 176,
            "movement": -13
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
            "position": 141,
            "movement": -19
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
            "position": 159,
            "movement": 3
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
            "position": 194,
            "movement": 1
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
