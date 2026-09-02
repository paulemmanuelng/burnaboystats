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
  export const liveChartsUpdated = "2026-09-02";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 38,
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
            "movement": 1
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
            "country": "GR",
            "name": "Greece",
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
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
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
            "country": "US",
            "name": "United States",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 2,
            "movement": -1
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
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
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
            "country": "CL",
            "name": "Chile",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 3,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 4,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 4,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": -4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 8,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 2
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 9,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 10,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 16,
            "movement": -4
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 16,
            "movement": 3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 50,
            "movement": -7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 56,
            "movement": 8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 85,
            "movement": -14
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
            "country": "BH",
            "name": "Bahrain",
            "position": 2,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "CY",
            "name": "Cyprus",
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
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 5,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": 69
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 9,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": -9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 14,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 15,
            "movement": 28
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 15,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 18,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": 5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 23,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 25,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": -19
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 27,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 31,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 31,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 31,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 31,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 32,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 33,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 38,
            "movement": -5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 41,
            "movement": 34
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 42,
            "movement": 12
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 44,
            "movement": 6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 45,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 53,
            "movement": -4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 59,
            "movement": -10
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 70,
            "movement": -19
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 74,
            "movement": 6
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 75,
            "movement": 64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": 63
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 88,
            "movement": -6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 95,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 103,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 118,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 125,
            "movement": -6
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 133,
            "movement": 15
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 135,
            "movement": -43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": -38
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 141,
            "movement": -60
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 148,
            "movement": 33
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 167,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": 2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 185,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 189,
            "movement": -15
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 193,
            "movement": -93
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 2,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 1,
            "movement": 2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 17
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 5,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": 15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 9,
            "movement": -4
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 9,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 9,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 15,
            "movement": 23
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 16,
            "movement": -7
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 16,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 22,
            "movement": -9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 26,
            "movement": 26
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 27,
            "movement": 37
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 28,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 30,
            "movement": -21
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": -15
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 39,
            "movement": -32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": -37
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 42,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 47,
            "movement": 19
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 50,
            "movement": -41
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 54,
            "movement": -27
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 62,
            "movement": -55
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 76,
            "movement": -27
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 85,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": null,
            "status": "new"
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 17,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 22,
            "movement": -8
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 22,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 28,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -18
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 46,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 48,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 49,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 49,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 70,
            "movement": -13
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 85,
            "movement": -32
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 86,
            "movement": -17
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 89,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 91,
            "movement": -13
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 98,
            "movement": -43
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 137,
            "movement": -53
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 141,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 145,
            "movement": -52
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 152,
            "movement": -37
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 160,
            "movement": -3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 181,
            "movement": -58
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": 175
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 13,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 15,
            "movement": -5
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 22,
            "movement": -7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": -26
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 32,
            "movement": -13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 41,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 181,
            "movement": -119
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
            "position": 29,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 75
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": 55
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 87,
            "movement": 71
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": 69
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 22
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 102,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": 48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 134,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": -42
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 155,
            "movement": -104
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": -19
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 175,
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
            "position": 31,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 2
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
            "country": "MG",
            "name": "Madagascar",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 115
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 64,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 89,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 9
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 124,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": 46
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -21
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -20
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 163,
            "movement": -58
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 180,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
            "movement": -94
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
            "position": 30,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 116,
            "movement": 31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 125,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": -67
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 154,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 159,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": -35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
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
            "country": "DM",
            "name": "Dominica",
            "position": 11,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 45,
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
            "position": 43,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 17
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 89,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": -41
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 150,
            "movement": -55
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 155,
            "movement": -104
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -25
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
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
            "position": 148,
            "movement": 9
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
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": 41
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 123,
            "movement": 49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": -34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 53,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 74,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 120,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 143,
            "movement": -69
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 192,
            "movement": -88
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": -45
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
            "movement": 5
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": 48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 177,
            "movement": -102
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": null,
            "status": "new"
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
            "position": 27,
            "movement": 2
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
            "position": 38,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 92,
            "movement": 72
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -70
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": -28
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 153,
            "movement": -76
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": -82
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 15,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": 11
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
            "position": 23,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": -3
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 4
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
            "position": 17,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": null,
            "status": "new"
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": -33
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
            "position": 51,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -72
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
            "position": 104,
            "movement": 34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 148,
            "movement": 46
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": -33
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 138,
            "movement": 56
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 25,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 73,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": -33
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 71,
            "movement": -29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 83,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -79
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
            "country": "SR",
            "name": "Suriname",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 36
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 32
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
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
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
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
            "movement": 10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": 85
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 188,
            "movement": -107
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": 4
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
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": -12
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 79
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
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
            "position": 109,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 16
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
            "position": 174,
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
            "country": "KE",
            "name": "Kenya",
            "position": 44,
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
            "position": 92,
            "movement": -10
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
            "position": 186,
            "movement": 9
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
            "movement": 50
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 93,
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
            "position": 130,
            "movement": -21
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
    "title": "Big 7",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 8,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": null,
            "status": "new"
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
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cheat On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "movement": 0
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
    "title": "Simmer",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 43,
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
            "country": "TD",
            "name": "Chad",
            "position": 185,
            "movement": 2
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
            "position": 63,
            "movement": 1
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
            "position": 162,
            "movement": 13
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 13
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
            "country": "KE",
            "name": "Kenya",
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -6
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
            "position": 163,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Don't Let Me Drown",
    "platforms": [],
    "kind": "song"
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
  