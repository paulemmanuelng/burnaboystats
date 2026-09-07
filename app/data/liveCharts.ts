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
  export const liveChartsUpdated = "2026-09-07";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 29,
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
            "country": "FI",
            "name": "Finland",
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
            "country": "QA",
            "name": "Qatar",
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
            "country": "MD",
            "name": "Moldova",
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
            "country": "NI",
            "name": "Nicaragua",
            "position": 4,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 4,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": -2
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
            "country": "SG",
            "name": "Singapore",
            "position": 5,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": -3
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
            "country": "PE",
            "name": "Peru",
            "position": 7,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": 0
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 2
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
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "UY",
            "name": "Uruguay",
            "position": 9,
            "movement": -5
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": -4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 11,
            "movement": -3
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
            "country": "MX",
            "name": "Mexico",
            "position": 12,
            "movement": -7
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 12,
            "movement": -3
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
            "movement": -2
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": -1
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
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 4,
            "movement": 10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 6,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 7,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 9,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": -4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 13,
            "movement": -9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 17,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 18,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 19,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 21,
            "movement": 131
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 24,
            "movement": -9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 24,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 27,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 30,
            "movement": -8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 30,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 32,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 32,
            "movement": -14
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 34,
            "movement": -8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 34,
            "movement": -5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 35,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 37,
            "movement": 122
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 38,
            "movement": -7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 38,
            "movement": 10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 42,
            "movement": -6
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 45,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 47,
            "movement": -9
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 48,
            "movement": 18
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 50,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 57,
            "movement": -10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 66,
            "movement": -15
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 69,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 75,
            "movement": 32
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 83,
            "movement": 47
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 84,
            "movement": -16
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 96,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 107,
            "movement": -10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 109,
            "movement": 32
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": -69
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 143,
            "movement": -21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -48
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 151,
            "movement": -31
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 153,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 156,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -24
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 172,
            "movement": -14
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 175,
            "movement": -64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
            "movement": -65
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 3,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
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
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 8,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": 0
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
            "movement": 0
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 15,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 21,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 23,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 26,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 32,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 32,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 35,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 38,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 45,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 45,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 48,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 48,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 55,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 63,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 72,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 75,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 81,
            "movement": 0
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
            "country": "DE",
            "name": "Germany",
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
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
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
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 13,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 17,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 21,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 27,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 30,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 34,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 36,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 41,
            "movement": -18
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 50,
            "movement": 5
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 53,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 55,
            "movement": -12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 63,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 72,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 87,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 91,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 98,
            "movement": -20
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 102,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 135,
            "movement": -28
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 156,
            "movement": -20
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 157,
            "movement": 4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 160,
            "movement": -15
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 200,
            "movement": -6
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
        "numberOnes": 2,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 5,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -4
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 9,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 10,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 11,
            "movement": 10
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 18,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 25,
            "movement": -13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 27,
            "movement": -17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 28,
            "movement": -5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 31,
            "movement": -26
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 32,
            "movement": 9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 42,
            "movement": -36
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 44,
            "movement": -29
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 66,
            "movement": -53
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 84,
            "movement": -80
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 31,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": 16
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": -24
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -57
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": -28
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 158,
            "movement": -65
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 159,
            "movement": -61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": -57
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 177,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": -105
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -32
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 117,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 139,
            "movement": -54
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": -33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -94
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
            "position": 30,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 7
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": -11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 71,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -92
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": 21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
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
            "position": 185,
            "movement": -33
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
            "position": 11,
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -23
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 64,
            "movement": 134
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": 29
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 165,
            "movement": -136
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 177,
            "movement": 16
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 187,
            "movement": -62
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
            "movement": -54
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
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
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
            "position": 142,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 42
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": -16
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
            "position": 43,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 93
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 38
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -63
          },
          {
            "country": "JM",
            "name": "Jamaica",
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
            "position": 13,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -20
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 78,
            "movement": 92
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -17
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": 18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 117,
            "movement": -66
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -22
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
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 61,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 110,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -1
          },
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
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 30
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -60
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 19
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 64,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 43
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 109,
            "movement": 25
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 137,
            "movement": -62
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 139,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 190,
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
            "position": 126,
            "movement": 10
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
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": -53
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 7
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
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
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
            "position": 27,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -3
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 56,
            "movement": 20
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": -50
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 186,
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
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 51,
            "movement": -7
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
            "position": 74,
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
            "position": 28,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": -2
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
            "position": 75,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": 4
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
            "position": 172,
            "movement": -35
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 194,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
            "movement": -97
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
            "position": 72,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 100,
            "movement": -59
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 114,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": -43
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": -94
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
            "position": 25,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": 0
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
            "position": 198,
            "movement": -115
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 14,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 143,
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
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
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 10
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
            "position": 28,
            "movement": -20
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
            "movement": 8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 173,
            "movement": -94
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 175,
            "movement": 5
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
            "position": 51,
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
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": 23
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
            "country": "CH",
            "name": "Switzerland",
            "position": 90,
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
            "position": 135,
            "movement": -14
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
            "position": 52,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "movement": -1
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
            "position": 182,
            "movement": -6
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
            "position": 123,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 74,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 8
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": 57
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
            "movement": 0
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
            "country": "LV",
            "name": "Latvia",
            "position": 13,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 53,
            "movement": -1
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 137,
            "movement": 31
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
            "position": 65,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": -3
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
            "position": 95,
            "movement": -2
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
            "position": 87,
            "movement": -17
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -90
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
            "position": 97,
            "movement": -14
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
            "movement": -1
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": null,
            "status": "new"
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 135,
            "movement": -96
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
            "position": 141,
            "movement": 7
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
            "position": 170,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Collateral Damage",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
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
    ]
  },
  {
    "title": "Odogwu",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": 0
          }
        ]
      }
    ]
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
  