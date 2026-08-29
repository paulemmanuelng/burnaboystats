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
  export const liveChartsUpdated = "2026-08-29";
  
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
            "country": "SR",
            "name": "Suriname",
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
            "country": "ET",
            "name": "Ethiopia",
            "position": 4,
            "movement": 1
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": -2
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
            "country": "TN",
            "name": "Tunisia",
            "position": 6,
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
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": 1
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
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 14,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": -6
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 19,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": -10
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
        "numberOnes": 7,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 2
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
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 1,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 4,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 5,
            "movement": 9
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 7,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 8,
            "movement": -3
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
            "movement": 1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 10,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 12,
            "movement": 13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 13,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 14,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 15,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 18,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 26,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 27,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 30,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 30,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 32,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 39,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 40,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": 12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 49,
            "movement": -15
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": 24
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 56,
            "movement": 21
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 58,
            "movement": -11
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 60,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 18
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 69,
            "movement": 3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 70,
            "movement": 26
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 73,
            "movement": -6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 104,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": -5
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 121,
            "movement": -66
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 124,
            "movement": 18
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 130,
            "movement": -3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 137,
            "movement": -34
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 148,
            "movement": -62
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 153,
            "movement": 47
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 154,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 31
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 160,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": -24
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 170,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 182,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 189,
            "movement": -94
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 195,
            "movement": -29
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 4,
        "entries": [
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
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 0
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
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 2
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
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": null,
            "status": "new"
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
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 10
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 14,
            "movement": 3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 15,
            "movement": 24
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 15,
            "movement": -11
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 16,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 18,
            "movement": 30
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 18,
            "movement": 3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 18,
            "movement": -12
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 19,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 19,
            "movement": 10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 21,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 26,
            "movement": 65
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": -19
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 37,
            "movement": -6
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 42,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 42,
            "movement": 37
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 43,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 43,
            "movement": 20
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": 14
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 8,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 21,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 23,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 23,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 26,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 27,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 36,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 36,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 58,
            "movement": -2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 60,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 61,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 72,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 99,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 104,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 163,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 166,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 171,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 183,
            "movement": -50
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 192,
            "movement": -27
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 193,
            "movement": -24
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 199,
            "movement": -17
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 199,
            "movement": -24
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
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 9,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 16,
            "movement": 5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 22,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 25,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 27,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 33,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": -12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 40,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 44,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 48,
            "movement": -6
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 55,
            "movement": -15
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 57,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 72,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 77,
            "movement": -13
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 79,
            "movement": -8
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 93,
            "movement": -21
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 130,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 136,
            "movement": -14
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 141,
            "movement": -18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 145,
            "movement": -6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 157,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 163,
            "movement": 18
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 164,
            "movement": -31
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 170,
            "movement": -23
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 190,
            "movement": -26
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": 17
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 7,
            "movement": 66
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": 93
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 8,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 9,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": 7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -2
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 21,
            "movement": 20
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 21,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 24,
            "movement": -17
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 53,
            "movement": 111
          },
          {
            "country": "US",
            "name": "United States",
            "position": 53,
            "movement": 19
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 62,
            "movement": -26
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 77,
            "movement": -53
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 86,
            "movement": -79
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 95,
            "movement": -74
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 196,
            "movement": -43
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
            "position": 36,
            "movement": 39
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 107
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": 56
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 39
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 118,
            "movement": 41
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 132,
            "movement": -64
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 140,
            "movement": -85
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 183,
            "movement": 17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 198,
            "movement": -134
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
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": 48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 39,
            "movement": 141
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 97,
            "movement": 21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -21
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 121,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": -40
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": -27
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
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
            "position": 107,
            "movement": -7
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 56,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 76,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": 38
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 113,
            "movement": 80
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -50
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
            "movement": -22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": 35
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 170,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": -49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": -42
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
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -31
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 42,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 60
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 67,
            "movement": 89
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": 30
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 93,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": 15
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": 20
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 144,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 155,
            "movement": -76
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 0
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
            "position": 60,
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
            "position": 166,
            "movement": 12
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
            "position": 59,
            "movement": 123
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": 96
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": 7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 117,
            "movement": 59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": -60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": -30
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 138,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
            "movement": -16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 179,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -36
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
            "position": 146,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 17,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 33,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 160,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 192,
            "movement": -32
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": 27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
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
            "position": 15,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -23
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 186,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 54
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": 64
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 162,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": 28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
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
            "position": 24,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 59
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": 51
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -12
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
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -64
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -52
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 161,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -20
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
            "position": 33,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 73,
            "movement": -54
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 74,
            "movement": 31
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 82,
            "movement": -48
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 122,
            "movement": -10
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
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
            "position": 50,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 69,
            "movement": 106
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 91
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 196,
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 83,
            "movement": 24
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 84,
            "movement": -47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": 20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
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
            "position": 67,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 46
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 139,
            "movement": 18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 160,
            "movement": -97
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": -24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 154,
            "movement": 27
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
            "position": 61,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -16
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
            "position": 27,
            "movement": 10
          },
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
            "movement": -2
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
            "position": 161,
            "movement": -56
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
            "position": 162,
            "movement": -23
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
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": null,
            "status": "new"
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -7
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
            "position": 131,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": 9
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
            "position": 163,
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
            "position": 103,
            "movement": 15
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
            "position": 39,
            "movement": -13
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
            "position": 76,
            "movement": 3
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
            "country": "TD",
            "name": "Chad",
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
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 79,
            "movement": null,
            "status": "new"
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
            "position": 65,
            "movement": -7
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
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
            "movement": 2
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
            "position": 192,
            "movement": 0
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
            "position": 120,
            "movement": -24
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
            "position": 110,
            "movement": -96
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
            "movement": -2
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": 8
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
            "position": 69,
            "movement": -12
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
            "position": 187,
            "movement": 7
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
  