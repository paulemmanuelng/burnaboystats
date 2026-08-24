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
  export const liveChartsUpdated = "2026-08-24";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 43,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 1,
            "movement": 0
          },
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
            "movement": 1
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
            "country": "CR",
            "name": "Costa Rica",
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
            "movement": 1
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
            "movement": 1
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
            "country": "VE",
            "name": "Venezuela",
            "position": 1,
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
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
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
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
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
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
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
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 3,
            "movement": -2
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
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": -2
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
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 4,
            "movement": 6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 4,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 5,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 6,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 6,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 8,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 12,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 14,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -3
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 19,
            "movement": -10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": -9
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 43,
            "movement": -15
          },
          {
            "country": "IN",
            "name": "India",
            "position": 64,
            "movement": -24
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 71,
            "movement": -1
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
            "country": "CY",
            "name": "Cyprus",
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 2,
            "movement": 75
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 4,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": 4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 7,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 7,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 8,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 8,
            "movement": 3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 10,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
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
            "country": "LB",
            "name": "Lebanon",
            "position": 14,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 15,
            "movement": 60
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 16,
            "movement": 41
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 21,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 22,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 23,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 24,
            "movement": 13
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 24,
            "movement": -5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 26,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 30,
            "movement": -17
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 32,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 32,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 34,
            "movement": 7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 36,
            "movement": 24
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 47,
            "movement": 6
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 47,
            "movement": -9
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 48,
            "movement": 9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 50,
            "movement": -8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 53,
            "movement": 15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 58,
            "movement": -18
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 64,
            "movement": -18
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 67,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": 17
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 78,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 81,
            "movement": 101
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 83,
            "movement": -4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 85,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 28
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 86,
            "movement": 37
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
            "movement": -7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 95,
            "movement": -42
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 96,
            "movement": -3
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 98,
            "movement": -55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 108,
            "movement": -2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 109,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 122,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 28
          },
          {
            "country": "IN",
            "name": "India",
            "position": 156,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 158,
            "movement": 11
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 165,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
            "movement": 9
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 171,
            "movement": -10
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 183,
            "movement": -22
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 184,
            "movement": -24
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 6,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
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
            "country": "WW",
            "name": "Worldwide",
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
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 7,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 7,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 12,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 16,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 20,
            "movement": 14
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 21,
            "movement": 6
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 23,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 24,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 31,
            "movement": 4
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 36,
            "movement": 10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 37,
            "movement": 11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 50,
            "movement": 14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 53,
            "movement": 15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 59,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 60,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 65,
            "movement": 32
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 69,
            "movement": 30
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 88,
            "movement": 19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 89,
            "movement": 30
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 114,
            "movement": 3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 115,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 131,
            "movement": 6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 132,
            "movement": -5
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 135,
            "movement": 19
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 136,
            "movement": 41
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 151,
            "movement": -9
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 184,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 186,
            "movement": null,
            "status": "new"
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
            "country": "MA",
            "name": "Morocco",
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
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 6,
            "movement": 6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 7,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 12,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 15
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 15,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 16,
            "movement": 10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 24,
            "movement": 8
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 26,
            "movement": -19
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 26,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 27,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -14
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 43,
            "movement": -35
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 49,
            "movement": -34
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 53,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 69,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 70,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -76
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 96,
            "movement": -74
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 9,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 15,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
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
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 16,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 18,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 21,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 26,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 43,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 47,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 49,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 59,
            "movement": -1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 65,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 95,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 115,
            "movement": 4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 117,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 119,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 119,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": -15
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 131,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 147,
            "movement": -10
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 147,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 148,
            "movement": -16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 156,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -12
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 187,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 4,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 16
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": 37
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 14,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 19,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 19,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": -22
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 27,
            "movement": -25
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": 23
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -32
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 55,
            "movement": -10
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 63,
            "movement": -12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 79,
            "movement": -76
          },
          {
            "country": "IN",
            "name": "India",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 167,
            "movement": -20
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
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 69
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 36
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 96,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 96,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": -68
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 143,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": -11
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 160,
            "movement": -10
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
            "position": 35,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 1
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
            "position": 62,
            "movement": 0
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": -14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 31,
            "movement": -20
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 38,
            "movement": 111
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": -27
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": -30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": 77
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 155,
            "movement": -27
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 170,
            "movement": -67
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": -124
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 191,
            "movement": -96
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -29
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 102,
            "movement": -46
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 108,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": 44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": 41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 151,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -5
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 5
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
            "movement": 0
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
            "movement": -9
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
            "position": 42,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 105
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 145,
            "movement": 40
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 198,
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 57,
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
            "position": 178,
            "movement": 8
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
            "position": 30,
            "movement": 10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 60,
            "movement": -40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 31
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 74,
            "movement": 109
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 80,
            "movement": 8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 95,
            "movement": 42
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 104,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 35
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 130,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": 37
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 159,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 168,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": -34
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
            "position": 147,
            "movement": 10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 10,
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
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 114,
            "movement": 65
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": -86
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 162,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 62,
            "movement": -48
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -35
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 135,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": -55
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": -30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 24,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": 75
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 97,
            "movement": -80
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 159,
            "movement": -77
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": 51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -125
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
            "movement": -145
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 197,
            "movement": -169
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
            "position": 3,
            "movement": 30
          },
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
            "position": 157,
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 88
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -30
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": 12
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
            "country": "MR",
            "name": "Mauritania",
            "position": 20,
            "movement": 68
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 90,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 107,
            "movement": -47
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 185,
            "movement": -166
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 45,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
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
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 120,
            "movement": -4
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
            "position": 71,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 119,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": 22
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
            "position": 37,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 72,
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
            "position": 108,
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
            "position": 75,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 70
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 98,
            "movement": 9
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
            "position": 197,
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
            "position": 178,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -18
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
            "position": 137,
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
            "position": 130,
            "movement": -81
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
            "position": 110,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
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
            "position": 22,
            "movement": -17
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": null,
            "status": "re"
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
            "country": "BB",
            "name": "Barbados",
            "position": 23,
            "movement": -5
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
            "position": 77,
            "movement": 7
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
            "position": 64,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gum Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -3
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Comment Tu T'appelle",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Like to Party",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Yaba Buluku",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "Rizzla",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
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
            "position": 119,
            "movement": -11
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
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Won da Mo",
    "platforms": [
      {
        "platform": "iTunes",
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
            "country": "TD",
            "name": "Chad",
            "position": 164,
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
            "position": 165,
            "movement": -45
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
            "position": 171,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jahs Love is True",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": null,
            "status": "new"
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
    "title": "No Fit Vex",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "If People Must Die",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
    "title": "Sampudi",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Do I",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
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
            "country": "GM",
            "name": "Gambia",
            "position": 140,
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
            "position": 159,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Turn Up",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 124,
            "movement": null,
            "status": "new"
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
  