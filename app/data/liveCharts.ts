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
export const liveChartsUpdated = "2026-08-10";

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
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": 0
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
            "country": "MG",
            "name": "Madagascar",
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 6,
            "movement": -2
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
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 10,
            "movement": -6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 12,
            "movement": 1
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
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 13,
            "movement": 1
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
            "position": 20,
            "movement": -7
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
            "country": "OM",
            "name": "Oman",
            "position": 2,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "LK",
            "name": "Sri Lanka",
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
            "country": "AM",
            "name": "Armenia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 4,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 6,
            "movement": 4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 9,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 9,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 11,
            "movement": 10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 11,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 12,
            "movement": -6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 12,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": 8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 23,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 23,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 24,
            "movement": 12
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 25,
            "movement": 9
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 25,
            "movement": 84
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 26,
            "movement": -12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 26,
            "movement": -9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 30,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 31,
            "movement": 16
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 33,
            "movement": -9
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 33,
            "movement": 43
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 36,
            "movement": -19
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 39,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 40,
            "movement": -6
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 45,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 48,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 54,
            "movement": -25
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 57,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 57,
            "movement": -2
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 64,
            "movement": -34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": -11
          },
          {
            "country": "IN",
            "name": "India",
            "position": 71,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 73,
            "movement": 16
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 75,
            "movement": -25
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 75,
            "movement": 24
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 80,
            "movement": -78
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 83,
            "movement": 5
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 90,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 97,
            "movement": -37
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 98,
            "movement": 15
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 102,
            "movement": -46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 107,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": -8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 116,
            "movement": 5
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 121,
            "movement": 8
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 125,
            "movement": -14
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 132,
            "movement": -21
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 148,
            "movement": -22
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 157,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 158,
            "movement": -15
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 162,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 169,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 178,
            "movement": 5
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 189,
            "movement": -18
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 191,
            "movement": -89
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 198,
            "movement": -2
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
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 6,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 8,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 10,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 12,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 14,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": 6
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 24,
            "movement": 6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 27,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 31,
            "movement": 19
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 39,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 40,
            "movement": 8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": 16
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 46,
            "movement": 16
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 47,
            "movement": 23
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 55,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 65,
            "movement": 5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 72,
            "movement": 17
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 79,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 80,
            "movement": -21
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 85,
            "movement": 23
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 95,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 98,
            "movement": 11
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 101,
            "movement": -4
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 101,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 110,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 116,
            "movement": -13
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 117,
            "movement": 18
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 122,
            "movement": 10
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 131,
            "movement": -4
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 133,
            "movement": 10
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 150,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 22
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 163,
            "movement": 17
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 199,
            "movement": -42
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
            "country": "AT",
            "name": "Austria",
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
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 7,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
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
            "country": "FI",
            "name": "Finland",
            "position": 10,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 12,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 19,
            "movement": 6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 20,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 23,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 29,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 31,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": 2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 40,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 40,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 47,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 67,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 70,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 76,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 77,
            "movement": -14
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 86,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 87,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 93,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 98,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 106,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": -14
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 115,
            "movement": -6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 134,
            "movement": -6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 139,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 152,
            "movement": 12
          },
          {
            "country": "IN",
            "name": "India",
            "position": 159,
            "movement": -9
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 163,
            "movement": -1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 174,
            "movement": -16
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 178,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 6,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
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
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
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
            "country": "SN",
            "name": "Senegal",
            "position": 2,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 3,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 4,
            "movement": 10
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 4,
            "movement": 7
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 8,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 8,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": 51
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 9,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 11,
            "movement": -8
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 11,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 15,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": 1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 19,
            "movement": -8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 23,
            "movement": -18
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 24,
            "movement": -6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 24,
            "movement": 48
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 28,
            "movement": -8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 32,
            "movement": -25
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 36,
            "movement": 22
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 44,
            "movement": -28
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 54,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 66,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": 15
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": -8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 85,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 4,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 1,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 2,
            "movement": 55
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 4,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 6,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 7,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 16,
            "movement": -13
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 22,
            "movement": -12
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 36,
            "movement": 33
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 38,
            "movement": -27
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 41,
            "movement": 6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 43,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 71,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 73,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": -59
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": -8
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 80,
            "movement": -35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 88,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 141,
            "movement": -133
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 167,
            "movement": -158
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 171,
            "movement": -76
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
            "position": 33,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 56,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 61,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 66,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 45
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -25
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 107,
            "movement": -65
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -54
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": 26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 132,
            "movement": -16
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 140,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
            "movement": -57
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 157
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 0
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
            "position": 67,
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
            "position": 26,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 39,
            "movement": 109
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 51,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 81
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": -55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": -46
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 129,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 142,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": -30
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 179,
            "movement": -55
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
            "movement": -10
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 64,
            "movement": 4
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 21
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
            "position": 94,
            "movement": 5
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": -9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 76,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 56
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": 19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 94,
            "movement": 38
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 98,
            "movement": 34
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 110,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 111,
            "movement": -38
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 131,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 151,
            "movement": 11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 157,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 163,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
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
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 65,
            "movement": -31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 89,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": -103
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": 16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 189,
            "movement": -24
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
            "position": 50,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 97,
            "movement": -25
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 100,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": 8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 129,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 175,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": -136
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
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
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
            "position": 123,
            "movement": -14
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 45,
            "movement": 43
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 53,
            "movement": -8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 55,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 82,
            "movement": -6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 97,
            "movement": 22
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 101,
            "movement": 55
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 105,
            "movement": 91
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 112,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": 59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": 34
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 147,
            "movement": -49
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 148,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 179,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
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
            "position": 101,
            "movement": -12
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
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 31,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 31,
            "movement": 123
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": -65
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -35
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 148,
            "movement": -91
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 158,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 29,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 32,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 126,
            "movement": 42
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 137,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": null,
            "status": "new"
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 156
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": -34
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 50
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": -68
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 197,
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
            "position": 9,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 22,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 91,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 99,
            "movement": -13
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 115,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 184,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 191,
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
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 146,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": 3
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
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": -67
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
            "position": 26,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 3
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
            "position": 176,
            "movement": -22
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 41,
            "movement": 14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 109,
            "movement": -20
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 129,
            "movement": 63
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 95,
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
            "position": 37,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -45
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 74,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": 35
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 93,
            "movement": -32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": 29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": 15
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": -35
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -12
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
            "position": 169,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 10,
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
            "position": 4,
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
            "position": 107,
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
            "position": 118,
            "movement": -4
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
            "position": 126,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -106
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 54,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": 13
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
            "position": 28,
            "movement": 0
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
            "position": 124,
            "movement": -25
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
            "position": 172,
            "movement": 22
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
            "country": "LR",
            "name": "Liberia",
            "position": 142,
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
            "position": 68,
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
            "position": 90,
            "movement": -8
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
            "position": 115,
            "movement": -1
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
            "position": 191,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
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
            "country": "TD",
            "name": "Chad",
            "position": 141,
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
            "position": 147,
            "movement": -61
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
            "position": 182,
            "movement": 12
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
            "position": 196,
            "movement": -27
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
    "title": "Hossana",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -12
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
            "position": 163,
            "movement": -4
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
