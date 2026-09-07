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
        "numberOnes": 6,
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
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "BE",
            "name": "Belgium",
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
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "CY",
            "name": "Cyprus",
            "position": 4,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 6,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 7,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 9,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": 3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 10,
            "movement": 13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 13,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 14,
            "movement": 14
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 15,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 18,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 18,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 18,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 22,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 22,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 26,
            "movement": 8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 28,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 29,
            "movement": 12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 31,
            "movement": 4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 34,
            "movement": 15
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 36,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 38,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 44,
            "movement": 1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 47,
            "movement": 9
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 48,
            "movement": -32
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 49,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 51,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 65,
            "movement": 53
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 68,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 74,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 87,
            "movement": -27
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 97,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 55
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 120,
            "movement": 57
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 122,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 50
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 130,
            "movement": -27
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 136,
            "movement": -25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 143,
            "movement": 50
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 144,
            "movement": 0
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 151,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": -51
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 158,
            "movement": 6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 159,
            "movement": -39
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 196,
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
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 2,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 4
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
            "position": 7,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 7
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 12,
            "movement": 8
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": 15
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": 10
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 15,
            "movement": 9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 16,
            "movement": 12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 17,
            "movement": 14
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 23,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 25,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": 8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 27,
            "movement": 19
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 28,
            "movement": 5
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 36,
            "movement": 14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 43,
            "movement": 9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 46,
            "movement": 17
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 54,
            "movement": 19
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 55,
            "movement": 21
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 59,
            "movement": 11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 75,
            "movement": 11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 78,
            "movement": 41
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 84,
            "movement": 7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 84,
            "movement": 7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 106,
            "movement": 42
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 107,
            "movement": 10
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 136,
            "movement": 62
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 145,
            "movement": 33
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 161,
            "movement": 13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 178,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 190,
            "movement": 2
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 200,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 6,
            "movement": 6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": 12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 9,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": 13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 15
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": 16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 12,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": 112
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": -12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": 4
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 24,
            "movement": 19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 26,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": -25
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 92,
            "movement": -19
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 124,
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
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 85,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -82
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -34
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 150,
            "movement": -35
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 157,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": -10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 177,
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
            "position": 30,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
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
            "position": 68,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
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
            "position": 26,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 78,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 142,
            "movement": -126
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 143,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 162,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 176,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
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
            "position": 152,
            "movement": 9
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
            "position": 111,
            "movement": 6
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 27,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 103
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 92,
            "movement": 37
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 93,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 98,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 101,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 148,
            "movement": -116
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -35
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 184,
            "movement": -14
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 190,
            "movement": -10
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": 62
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": -69
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": null,
            "status": "new"
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
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 36,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 124,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": -34
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 29,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 125,
            "movement": -64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -102
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 198,
            "movement": -12
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
            "movement": -3
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
            "position": 144,
            "movement": 0
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
            "country": "SR",
            "name": "Suriname",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 40,
            "movement": 44
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 105,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": 65
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 132,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 134,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 140,
            "movement": -44
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -64
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
            "movement": -40
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
            "movement": 1
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
            "position": 11,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -55
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 177,
            "movement": -31
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 1
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
            "position": 49,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -77
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": -58
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -5
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -56
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -64
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -67
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
            "movement": -52
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
            "position": 154,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 9
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 15,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 76,
            "movement": -9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 79,
            "movement": -25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 193,
            "movement": -95
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
            "position": 46,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 10
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": -1
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
            "position": 74,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 64
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
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
            "position": 178,
            "movement": 8
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
            "position": 57,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": -70
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
            "position": 41,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": 21
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
            "movement": 0
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
            "position": 87,
            "movement": -4
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
            "position": 83,
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -11
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": 17
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
            "position": 180,
            "movement": -1
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
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
            "position": 176,
            "movement": 1
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -58
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -28
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
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
            "position": 124,
            "movement": 25
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
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": -19
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
            "position": 86,
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
            "position": 46,
            "movement": -6
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 52,
            "movement": -19
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
    ],
    "kind": "song"
  },
  {
    "title": "Odogwu",
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
            "position": 80,
            "movement": -21
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
    "title": "Big 7",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 72,
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
            "position": 93,
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
            "position": 168,
            "movement": -89
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
    "title": "Killin Dem",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -30
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
            "position": 104,
            "movement": -89
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
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -95
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
            "position": 39,
            "movement": null,
            "status": "new"
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
            "position": 137,
            "movement": 10
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
            "position": 167,
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
  