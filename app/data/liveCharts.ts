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
  export const liveChartsUpdated = "2026-09-11";
  
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
        "numberOnes": 2,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 7,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 8,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 9,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 10,
            "movement": 7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 12,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 20,
            "movement": 4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 20,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 21,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 22,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 25,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 28,
            "movement": -7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 29,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 33,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 33,
            "movement": -24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 35,
            "movement": 8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 35,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 36,
            "movement": -7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 37,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 39,
            "movement": -7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 42,
            "movement": -10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 45,
            "movement": 111
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 45,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 52,
            "movement": -7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 54,
            "movement": -21
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 57,
            "movement": -14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 62,
            "movement": 1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 62,
            "movement": -8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 69,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 71,
            "movement": 13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 78,
            "movement": 25
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 86,
            "movement": -34
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 86,
            "movement": -20
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 92,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 121,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 130,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 140,
            "movement": -53
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 143,
            "movement": -53
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 146,
            "movement": 37
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 153,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 159,
            "movement": 26
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 159,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 169,
            "movement": -127
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 170,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 184,
            "movement": -23
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 196,
            "movement": -1
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
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 8,
            "movement": -5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 9,
            "movement": null,
            "status": "new"
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
            "movement": 2
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
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": 12
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 19,
            "movement": 3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 19,
            "movement": 24
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 20,
            "movement": 22
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 20,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": -10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 22,
            "movement": 31
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 26,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 27,
            "movement": 48
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 28,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": -14
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 37,
            "movement": -11
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 39,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": -17
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 42,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 92,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 95,
            "movement": -23
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
            "country": "DE",
            "name": "Germany",
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
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 18,
            "movement": -4
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
            "country": "RU",
            "name": "Russia",
            "position": 24,
            "movement": -7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 25,
            "movement": -3
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
            "country": "PL",
            "name": "Poland",
            "position": 71,
            "movement": -40
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 78,
            "movement": -41
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
            "position": 157,
            "movement": -58
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
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 24,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 25,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 29,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 29,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 32,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 34,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": -6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 37,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 45,
            "movement": -12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 52,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 54,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 67,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 67,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 70,
            "movement": -12
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 82,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 85,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 102,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 124,
            "movement": -31
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 126,
            "movement": -7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 126,
            "movement": -3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 143,
            "movement": 19
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 163,
            "movement": -16
          },
          {
            "country": "NZ",
            "name": "New Zealand",
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
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 156
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 24,
            "movement": -16
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 31,
            "movement": -13
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 42,
            "movement": -19
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": -15
          },
          {
            "country": "US",
            "name": "United States",
            "position": 50,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 52,
            "movement": -26
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 58,
            "movement": -20
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 62,
            "movement": -52
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 68,
            "movement": -16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 78,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 145,
            "movement": -109
          },
          {
            "country": "TR",
            "name": "Turkey",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 89,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 182,
            "movement": -123
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 187,
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
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -8
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 70
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
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
            "position": 47,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 72,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": 113
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 87,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 66
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 38
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": -49
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": 68
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": 20
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 146,
            "movement": -61
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 173,
            "movement": 12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 194,
            "movement": -5
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 39,
            "movement": 64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": -13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 110,
            "movement": 21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 127,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 19
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": -40
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 194,
            "movement": -47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
            "movement": -44
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
            "position": 131,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 169,
            "movement": 10
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
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 67,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": 39
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 150,
            "movement": 13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 169,
            "movement": -65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": -47
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
            "movement": -109
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
            "position": 168,
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
            "position": 10,
            "movement": -2
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": -50
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": -55
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 145,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": -61
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
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
            "position": 133,
            "movement": -3
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
            "position": 10,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": -35
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 182,
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
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": 70
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 76,
            "movement": 45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": 57
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 154,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": -52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -9
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
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": 53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 3
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
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 65
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 155,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": 24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 10
          },
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
    "title": "Ginger",
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
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 82,
            "movement": -73
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 152,
            "movement": -116
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 22,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 180,
            "movement": -88
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
            "position": 39,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": 2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 76,
            "movement": -7
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
            "position": 23,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 171,
            "movement": 0
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
            "position": 134,
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
            "country": "AI",
            "name": "Anguilla",
            "position": 35,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": 2
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
            "position": 23,
            "movement": -4
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 79
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 37
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
            "position": 39,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": 51
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 75,
            "movement": 48
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 200,
            "movement": -39
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
            "country": "SN",
            "name": "Senegal",
            "position": 81,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": -21
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
            "position": 141,
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
            "position": 106,
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 159,
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
            "position": 115,
            "movement": 15
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
            "position": 175,
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
            "position": 192,
            "movement": -13
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
            "position": 108,
            "movement": -9
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
            "position": 89,
            "movement": -2
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
            "position": 169,
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
            "position": 95,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -73
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 55,
            "movement": -37
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 63,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 146,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": 24
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
            "position": 178,
            "movement": -74
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
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -168
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
            "position": 66,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 2,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": 0
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
    "title": "Pree Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -12
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
            "position": 101,
            "movement": -3
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": 1
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
            "movement": 2
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
            "position": 167,
            "movement": 13
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
            "position": 191,
            "movement": -169
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
            "position": 156,
            "movement": -8
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
            "position": 182,
            "movement": -9
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
  