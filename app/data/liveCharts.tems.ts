// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=tems from kworb's artist page.
  //
  // PLATFORM chart data for Tems: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-06";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Raindance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 12,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": -8
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 19,
            "movement": 56
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 19,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 24,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 25,
            "movement": 7
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 28,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 35,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 35,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 39,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 43,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 44,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": -11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 44,
            "movement": 24
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 48,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 49,
            "movement": 62
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": 43
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 55,
            "movement": 132
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 55,
            "movement": 6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 59,
            "movement": -12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 63,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -24
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 67,
            "movement": 44
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 67,
            "movement": 113
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 72,
            "movement": 16
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 76,
            "movement": -28
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 77,
            "movement": -25
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": 13
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 79,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 80,
            "movement": 21
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 82,
            "movement": -72
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 87,
            "movement": 14
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 87,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 87,
            "movement": -29
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 92,
            "movement": 10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 93,
            "movement": -49
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 93,
            "movement": -6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 94,
            "movement": 15
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 100,
            "movement": -39
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 102,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 105,
            "movement": 20
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 106,
            "movement": -47
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 108,
            "movement": 4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 109,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 112,
            "movement": -20
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 117,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": 17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 134,
            "movement": 48
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 135,
            "movement": -60
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 138,
            "movement": -1
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 140,
            "movement": 15
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 149,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 154,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 166,
            "movement": -6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 169,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 170,
            "movement": 6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 173,
            "movement": -7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 175,
            "movement": -28
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 179,
            "movement": -37
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 180,
            "movement": 13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 180,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 189,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 189,
            "movement": -12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 192,
            "movement": -42
          },
          {
            "country": "FR",
            "name": "France",
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
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 24,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 30,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 34,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 34,
            "movement": 7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 42,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 44,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 45,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 58,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 67,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 72,
            "movement": -17
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 83,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 84,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 86,
            "movement": 11
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 92,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 93,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 93,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 97,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 101,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 108,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 112,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 116,
            "movement": -4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 122,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 126,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 127,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 138,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 143,
            "movement": -13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 144,
            "movement": 0
          },
          {
            "country": "CN",
            "name": "China",
            "position": 145,
            "movement": 26
          },
          {
            "country": "IN",
            "name": "India",
            "position": 149,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 158,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -27
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 160,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 161,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 173,
            "movement": -7
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 179,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
            "movement": 11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 191,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 199,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 17,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 37,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 51,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 56,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 74,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 74,
            "movement": 8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 75,
            "movement": -28
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 77,
            "movement": 12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 78,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 95,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 97,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 100,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 106,
            "movement": -10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 114,
            "movement": -9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 115,
            "movement": -44
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 117,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 122,
            "movement": -12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 124,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 132,
            "movement": -21
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 136,
            "movement": -6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 164,
            "movement": -10
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 196,
            "movement": -10
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 48,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 2,
            "movement": 18
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 77,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -22
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 80,
            "movement": -51
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 100,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -20
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 84,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/02552930a9bbf685ec4f683ff0ca2029/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WAIT FOR U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 10,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 49,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": 22
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 73,
            "movement": -22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 75,
            "movement": -55
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 93
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -19
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 80,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
            "movement": 11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 94,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -47
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 103,
            "movement": -45
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 116,
            "movement": 18
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 132,
            "movement": 41
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": -69
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 138,
            "movement": 8
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 144,
            "movement": -52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 178,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 191,
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
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 87,
            "movement": -43
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": -39
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 134,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 158,
            "movement": 7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 187,
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
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
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
            "position": 5,
            "movement": 117
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -13
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 94,
            "movement": -13
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 48,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 59,
            "movement": 80
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": 44
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 180,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "country": "ES",
            "name": "Spain",
            "position": 115,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 10,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": 17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 93,
            "movement": 12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 168,
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
            "country": "US",
            "name": "United States",
            "position": 38,
            "movement": -1
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 10,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 19
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 60
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 160,
            "movement": 14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 197,
            "movement": -43
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 198,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 16,
            "movement": 145
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 85,
            "movement": 59
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 108,
            "movement": -13
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 123,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -12
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
            "position": 191,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 59,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 97,
            "movement": -62
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -3
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
            "position": 119,
            "movement": 50
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Try Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 18,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need - A COLORS SHOW",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 169,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 89,
            "movement": 96
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
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
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 88,
            "movement": -1
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
  