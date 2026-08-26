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
  export const liveChartsUpdated = "2026-08-26";
  
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
            "movement": -2
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 6,
            "movement": 110
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 12,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 13,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 27
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 18,
            "movement": -7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": -10
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 21,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 22,
            "movement": 20
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 23,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 12
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 29,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 30,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 30,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 30,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 32,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 32,
            "movement": 15
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 33,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 12
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 40,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 42,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -15
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 45,
            "movement": 24
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 49,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 52,
            "movement": 9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 52,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -8
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 56,
            "movement": 7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 57,
            "movement": 3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 60,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 62,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 9
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 64,
            "movement": -16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 65,
            "movement": 81
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": -51
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 67,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": -16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 72,
            "movement": 22
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 76,
            "movement": -4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 76,
            "movement": -55
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 84,
            "movement": -17
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 91,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 92,
            "movement": -18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 93,
            "movement": -20
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 99,
            "movement": 48
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 103,
            "movement": 19
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 103,
            "movement": 23
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 105,
            "movement": -21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 108,
            "movement": 11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 111,
            "movement": -87
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 111,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 113,
            "movement": -12
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 119,
            "movement": 12
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 125,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 136,
            "movement": 25
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 138,
            "movement": 34
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 144,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 148,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 151,
            "movement": 12
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 152,
            "movement": -92
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 162,
            "movement": -60
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 165,
            "movement": -58
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 170,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 172,
            "movement": -71
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 182,
            "movement": 12
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 184,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
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
            "country": "MY",
            "name": "Malaysia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 22,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 33,
            "movement": -1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 36,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 37,
            "movement": 2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 38,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 42,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 45,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 46,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 55,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 65,
            "movement": 43
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 75,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 87,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 90,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 96,
            "movement": -39
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 102,
            "movement": 15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 103,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 104,
            "movement": 13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 107,
            "movement": 20
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 108,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 112,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 112,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 113,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 115,
            "movement": 5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 115,
            "movement": 2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 115,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 116,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 129,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 15
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 143,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 145,
            "movement": -32
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 147,
            "movement": 29
          },
          {
            "country": "IN",
            "name": "India",
            "position": 150,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 154,
            "movement": -11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 156,
            "movement": 15
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 163,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 167,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 172,
            "movement": 18
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 173,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 188,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 190,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 197,
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
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 19,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 35,
            "movement": 8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 42,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 56,
            "movement": 10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 59,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 76,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 79,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": 4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 87,
            "movement": 11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 88,
            "movement": 13
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 94,
            "movement": 16
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 96,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 99,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 110,
            "movement": 13
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 110,
            "movement": 31
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 115,
            "movement": 18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 116,
            "movement": 26
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 133,
            "movement": 14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 142,
            "movement": 20
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 195,
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 47,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 50,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 70
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 12,
            "movement": 34
          },
          {
            "country": "IN",
            "name": "India",
            "position": 18,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 76,
            "movement": 75
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 83,
            "movement": 64
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 89,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 168,
            "movement": -70
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 42,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 47,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": -16
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 71,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 19,
            "movement": 25
          },
          {
            "country": "US",
            "name": "United States",
            "position": 22,
            "movement": -7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 28,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": 42
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 41,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 47,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": 33
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 54,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 74,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 96,
            "movement": 8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 102,
            "movement": 23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 107,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": 19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 163,
            "movement": 28
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 164,
            "movement": -20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 183,
            "movement": -11
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 189,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 24,
            "movement": 75
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 53,
            "movement": -22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 78,
            "movement": 42
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": -15
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
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 59,
            "movement": -8
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
            "position": 117,
            "movement": 61
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 142,
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
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 52
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 104,
            "movement": -50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 140,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": 22
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 170,
            "movement": -21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 174,
            "movement": -84
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 190,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 38,
            "movement": -32
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 51,
            "movement": 62
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": 26
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 149,
            "movement": 38
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 194,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 90,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 111,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 134,
            "movement": 6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 135,
            "movement": -18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": 35
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 199,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 2,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 120,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 130,
            "movement": 63
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 182,
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
            "position": 35,
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
            "position": 11,
            "movement": 3
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
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": 5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
            "movement": -144
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 42
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
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
            "position": 181,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 79,
            "movement": -63
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 101,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 5
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
            "position": 115,
            "movement": 79
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": -24
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
            "position": 98,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 186,
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
            "position": 166,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
            "movement": 1
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
            "position": 84,
            "movement": 0
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
  