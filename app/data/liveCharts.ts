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
  export const liveChartsUpdated = "2026-08-25";
  
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
        "numberOnes": 6,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
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
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 3,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 3,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 6,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 8,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 12,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 14,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 16,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 16,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 17,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 23,
            "movement": 66
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 24,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 25,
            "movement": -7
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 26,
            "movement": -7
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 26,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 27,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 29,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 37,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": -4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 43,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 45,
            "movement": 17
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 51,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 68,
            "movement": -20
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 68,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 74,
            "movement": -9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 75,
            "movement": -29
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 77,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": 66
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 82,
            "movement": 81
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 86,
            "movement": -82
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 86,
            "movement": 8
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 92,
            "movement": -3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 93,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 98,
            "movement": -17
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 101,
            "movement": -36
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": -39
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 107,
            "movement": -6
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 110,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 21
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 119,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 18
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 131,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 162,
            "movement": -59
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 163,
            "movement": -60
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 164,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 175,
            "movement": -86
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 181,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -57
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 186,
            "movement": -33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 186,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 4,
        "entries": [
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
            "country": "TN",
            "name": "Tunisia",
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
            "country": "ES",
            "name": "Spain",
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
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 5,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 5,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 7,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 8,
            "movement": 19
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": 6
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 11,
            "movement": 38
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 12,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": 4
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 15,
            "movement": 81
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 17,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 21,
            "movement": -15
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 22,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 31,
            "movement": -24
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 32,
            "movement": 21
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 35,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 41,
            "movement": -29
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 42,
            "movement": 28
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 55,
            "movement": -47
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 88,
            "movement": -19
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 96,
            "movement": -42
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
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 14,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 15,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 16,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 18,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 19,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 22,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 33,
            "movement": -11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 33,
            "movement": -11
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 33,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 36,
            "movement": -13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 46,
            "movement": -12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 51,
            "movement": -9
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 53,
            "movement": -17
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 64,
            "movement": -23
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 67,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 70,
            "movement": -12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 89,
            "movement": -27
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 109,
            "movement": -53
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 115,
            "movement": -32
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 125,
            "movement": -58
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 126,
            "movement": -45
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 137,
            "movement": -40
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 142,
            "movement": -13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 160,
            "movement": -50
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 164,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 166,
            "movement": 18
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 180,
            "movement": -19
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 181,
            "movement": -46
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 192,
            "movement": -44
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 17,
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
            "position": 23,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 23,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 35,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 37,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 46,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 46,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 49,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 51,
            "movement": -8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 61,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 64,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 97,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 117,
            "movement": -2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 120,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 125,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 128,
            "movement": -9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 136,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -19
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 147,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 161,
            "movement": -13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 173,
            "movement": -17
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 183,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -21
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
            "country": "SK",
            "name": "Slovakia",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -10
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 17,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 20,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -10
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": 61
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 67,
            "movement": -10
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 76,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -63
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 94,
            "movement": -37
          },
          {
            "country": "IN",
            "name": "India",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 183,
            "movement": -152
          },
          {
            "country": "RO",
            "name": "Romania",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 8,
            "movement": 94
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": -66
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 98,
            "movement": -79
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 105,
            "movement": -32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -48
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 145,
            "movement": -8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 163,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -47
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NA",
            "name": "Namibia",
            "position": 36,
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
            "position": 60,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -4
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
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": 70
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 130,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": -11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 186,
            "movement": -128
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
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
            "position": 186,
            "movement": 6
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
            "position": 84,
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
            "country": "TD",
            "name": "Chad",
            "position": 14,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 46,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 102,
            "movement": 78
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -23
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 134,
            "movement": 51
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 138,
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 141,
            "movement": 43
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 147,
            "movement": -16
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 154,
            "movement": -60
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -89
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 26,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": 23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 33
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 87,
            "movement": -27
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 101,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": 55
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 114,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": 17
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 133,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 147,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 30,
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
            "movement": -2
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
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 64,
            "movement": 100
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -43
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": 49
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 125,
            "movement": -41
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 125,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": 13
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 136,
            "movement": 50
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -128
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": -3
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
            "position": 177,
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
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 51,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 76,
            "movement": 46
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 135,
            "movement": 17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 146,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
            "movement": -7
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
            "position": 66,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 72,
            "movement": 108
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 98,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": 26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": -43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
            "movement": -12
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": 118
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -31
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": 50
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 120,
            "movement": -62
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 126,
            "movement": -42
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 71
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 188,
            "movement": -28
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
            "position": 15,
            "movement": -5
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
            "position": 30,
            "movement": -1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -3
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
            "country": "SR",
            "name": "Suriname",
            "position": 16,
            "movement": 181
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 37,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 56,
            "movement": 127
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 89,
            "movement": 11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 92,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 102,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 141,
            "movement": -85
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": -2
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 39
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": -93
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
            "movement": -61
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 29,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
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
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 118,
            "movement": 59
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 198,
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
            "position": 89,
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
            "position": 44,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": -79
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 189,
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
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
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
            "position": 43,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": -19
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
            "position": 76,
            "movement": 15
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 133,
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 76,
            "movement": -3
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
            "position": 37,
            "movement": -7
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
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 106,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 110,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -59
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
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 61,
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": 8
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
            "position": 101,
            "movement": 6
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
            "country": "SR",
            "name": "Suriname",
            "position": 72,
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
            "position": 140,
            "movement": -3
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
            "position": 112,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": 4
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
            "position": 124,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": -68
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
            "country": "ML",
            "name": "Mali",
            "position": 132,
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
            "position": 33,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 31,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": 104
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jagele",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 13,
            "movement": 70
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
            "position": 72,
            "movement": 5
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
            "position": 38,
            "movement": -13
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
            "movement": 0
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
            "position": 194,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 154,
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
            "position": 66,
            "movement": -3
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
            "position": 158,
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
            "position": 177,
            "movement": -12
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
            "position": 132,
            "movement": -94
          }
        ]
      }
    ],
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
  