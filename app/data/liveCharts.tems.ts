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
  export const liveChartsUpdated = "2026-09-04";
  
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
            "country": "MR",
            "name": "Mauritania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 6,
            "movement": 8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 7,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 11,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 17,
            "movement": -6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 25,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 31,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 31,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 32,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 32,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 33,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 41,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 41,
            "movement": 76
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 41,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 44,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 44,
            "movement": 26
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 44,
            "movement": 13
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 46,
            "movement": 63
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 48,
            "movement": 14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 48,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 49,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 50,
            "movement": 5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 51,
            "movement": -16
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 53,
            "movement": -8
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 54,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 58,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 58,
            "movement": 12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 61,
            "movement": -4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 63,
            "movement": -23
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 64,
            "movement": -39
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 65,
            "movement": 110
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": -18
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 75,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 75,
            "movement": -44
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 77,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 80,
            "movement": -4
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 81,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 90,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 91,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 96,
            "movement": -34
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 97,
            "movement": 30
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 98,
            "movement": -25
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 105,
            "movement": 5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 106,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 109,
            "movement": -16
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 111,
            "movement": 15
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 113,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 113,
            "movement": 53
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 116,
            "movement": -25
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 119,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 120,
            "movement": 80
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 120,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 120,
            "movement": 42
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 126,
            "movement": 33
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 135,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 140,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 148,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": -138
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 163,
            "movement": 28
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 166,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 169,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 176,
            "movement": -11
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 179,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 182,
            "movement": -20
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 185,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 188,
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 12,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 27,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 29,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": -11
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 46,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 60,
            "movement": -11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 62,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 66,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 66,
            "movement": -15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 70,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 70,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 72,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 74,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 79,
            "movement": -12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 86,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 94,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 97,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 101,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 102,
            "movement": -26
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 115,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 157,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 169,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 187,
            "movement": -23
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 199,
            "movement": -34
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 1,
            "movement": 25
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 45,
            "movement": -27
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 61,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 67,
            "movement": -15
          },
          {
            "country": "IN",
            "name": "India",
            "position": 77,
            "movement": -47
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 81,
            "movement": -18
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 96,
            "movement": -80
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -25
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 163,
            "movement": 23
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 33,
            "movement": 51
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": 53
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 88,
            "movement": null,
            "status": "new"
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
            "position": 14,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 40,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -12
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 53,
            "movement": 100
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 53,
            "movement": 44
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 62,
            "movement": 8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 69,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": 18
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 84,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": -16
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 90,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 114,
            "movement": 45
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 122,
            "movement": 12
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 124,
            "movement": 26
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 126,
            "movement": 52
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 146,
            "movement": -66
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -55
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 155,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 163,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 197,
            "movement": -99
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
            "position": 187,
            "movement": -9
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
            "position": 30,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 45,
            "movement": 34
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 86,
            "movement": 37
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 143,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": 33
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 158,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 183,
            "movement": -20
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -8
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 56,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -154
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
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
            "movement": 35
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
            "country": "AI",
            "name": "Anguilla",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 82,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 116,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 136,
            "movement": -101
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 164,
            "movement": -45
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": -72
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 180,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": -70
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "BB",
            "name": "Barbados",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 127,
            "movement": 66
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 184,
            "movement": -100
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 36
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 158,
            "movement": 34
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 12
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 89,
            "movement": 8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 123,
            "movement": 8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 132,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 67,
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
            "position": 80,
            "movement": 18
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 141,
            "movement": -37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 152,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -8
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
            "movement": -11
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
            "position": 159,
            "movement": null,
            "status": "new"
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
            "position": 103,
            "movement": 7
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
            "position": 92,
            "movement": -3
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
            "position": 143,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 118,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 181,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 6,
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
    "title": "Try Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 6,
            "movement": 194
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Found",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 163,
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
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 177,
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
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Love Me JeJe",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MOVE",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c3e2a951678a28a3f541a69c866583d4/500x500-000000-80-0-0.jpg"
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
  