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
            "position": 4,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 9,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 10,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 10,
            "movement": 170
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
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": -8
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
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 23,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 23,
            "movement": -5
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -6
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 28,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 39,
            "movement": -3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 40,
            "movement": 6
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
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": -11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 48,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 49,
            "movement": 62
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 52,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 60
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 55,
            "movement": 132
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
            "movement": -30
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 59,
            "movement": -12
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 59,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 61,
            "movement": -21
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 63,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -24
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 68,
            "movement": -10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": 13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 78,
            "movement": -32
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 80,
            "movement": -14
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
            "country": "LB",
            "name": "Lebanon",
            "position": 88,
            "movement": -48
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 91,
            "movement": 22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": -29
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 93,
            "movement": -49
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 97,
            "movement": -7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 100,
            "movement": -39
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 101,
            "movement": -35
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 102,
            "movement": 8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 103,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 105,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 108,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 109,
            "movement": -15
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 109,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 111,
            "movement": -27
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
            "country": "EE",
            "name": "Estonia",
            "position": 142,
            "movement": -66
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 149,
            "movement": -9
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
            "position": 160,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 167,
            "movement": 0
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 167,
            "movement": -46
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 169,
            "movement": 12
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 177,
            "movement": -74
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 180,
            "movement": -9
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 180,
            "movement": -93
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 190,
            "movement": 4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 192,
            "movement": -42
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 193,
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 13,
            "movement": -1
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
            "position": 37,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 47,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 50,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 68,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 71,
            "movement": 3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 80,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 82,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 86,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 89,
            "movement": -15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 95,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 96,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 97,
            "movement": -17
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 105,
            "movement": -19
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 110,
            "movement": -23
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 111,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 116,
            "movement": -43
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 119,
            "movement": -20
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 130,
            "movement": -23
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 154,
            "movement": -18
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 186,
            "movement": -16
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
            "movement": 15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -12
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 73,
            "movement": -47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -25
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 92,
            "movement": 2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 100,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -23
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
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 45,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 58,
            "movement": 42
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": 22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 65,
            "movement": 5
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
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 89,
            "movement": 19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
            "movement": 11
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
            "position": 134,
            "movement": 18
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 135,
            "movement": -30
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
            "position": 171,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 173,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 178,
            "movement": 7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -37
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 200,
            "movement": -68
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 56,
            "movement": 59
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
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -25
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
            "movement": 114
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -16
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 89,
            "movement": -9
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
            "position": 159,
            "movement": -46
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
            "position": 100,
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
            "position": 6,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 78,
            "movement": 19
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
            "country": "BT",
            "name": "Bhutan",
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 154,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 154,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 171,
            "movement": -27
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
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
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": -15
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
            "position": 193,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -4
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
            "position": 169,
            "movement": -93
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 190,
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
    "title": "Try Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 93,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
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
            "position": 113,
            "movement": 7
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
    "title": "Found",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
  