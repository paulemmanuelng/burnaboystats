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
  export const liveChartsUpdated = "2026-08-23";
  
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
            "position": 2,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": 7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 16,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 17,
            "movement": -15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 18,
            "movement": -14
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 19,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 23,
            "movement": -14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 23,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 2
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 28,
            "movement": 117
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 28,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 32,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 39,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 39,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 41,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 42,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 44,
            "movement": -19
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 46,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": -17
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 50,
            "movement": -14
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 51,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": 3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 54,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 55,
            "movement": -25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 57,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 58,
            "movement": -4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 60,
            "movement": 12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 61,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": 16
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 68,
            "movement": -13
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 68,
            "movement": 12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 71,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 72,
            "movement": -11
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 74,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 74,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 88,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 92,
            "movement": -21
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 96,
            "movement": 46
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 98,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 99,
            "movement": -9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 103,
            "movement": 8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 110,
            "movement": 10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 112,
            "movement": -23
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 120,
            "movement": -45
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": 6
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 142,
            "movement": -65
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 146,
            "movement": -36
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 151,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 160,
            "movement": -112
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 160,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 163,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 171,
            "movement": -47
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 172,
            "movement": -7
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 172,
            "movement": -57
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 174,
            "movement": -51
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 177,
            "movement": -60
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 180,
            "movement": -15
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 180,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": -67
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 185,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 22,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 24,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": 2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 33,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": 1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 34,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 43,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 49,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 54,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 79,
            "movement": 9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 80,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 88,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 100,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 103,
            "movement": 9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 110,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 110,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 115,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 117,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 120,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 126,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 126,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 127,
            "movement": 10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 144,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 149,
            "movement": 5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 154,
            "movement": -6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 154,
            "movement": 6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 155,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 157,
            "movement": -11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 158,
            "movement": 9
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 160,
            "movement": 10
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 161,
            "movement": 1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 164,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": 3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 174,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 175,
            "movement": -7
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 175,
            "movement": 10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 186,
            "movement": -46
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 186,
            "movement": -12
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 195,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 26,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -4
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
            "position": 57,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 62,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 65,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 67,
            "movement": -14
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 75,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 82,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 86,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 94,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -17
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 95,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 116,
            "movement": -24
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 123,
            "movement": -17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 125,
            "movement": -15
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 132,
            "movement": -26
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 135,
            "movement": -25
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 140,
            "movement": -13
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 156,
            "movement": -33
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 159,
            "movement": -39
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 196,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 19,
            "movement": -17
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 21,
            "movement": -14
          },
          {
            "country": "IN",
            "name": "India",
            "position": 23,
            "movement": -5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 60,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 73,
            "movement": -34
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 86,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 97,
            "movement": -15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -116
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 21,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 48,
            "movement": -7
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
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 51,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 46,
            "movement": 6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 50,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": -31
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 64,
            "movement": -51
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 79,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 90,
            "movement": -14
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 96,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": 5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 136,
            "movement": -66
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 140,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 147,
            "movement": -15
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 166,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
            "movement": 9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 167,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 170,
            "movement": -60
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 177,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 1
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
            "position": 108,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 52,
            "movement": 6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 71,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": 65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -35
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 198,
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
            "movement": 31
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "MU",
            "name": "Mauritius",
            "position": 37,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -116
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
            "position": 188,
            "movement": -40
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
            "position": 145,
            "movement": 23
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
            "position": 87,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 110,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 139,
            "movement": -31
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 190,
            "movement": -91
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
            "position": 34,
            "movement": -3
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
            "position": 14,
            "movement": -3
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
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": -43
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -38
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
            "position": 105,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 110,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
            "movement": -58
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 4
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -80
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
            "position": 155,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 130,
            "movement": -50
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 188,
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
    "title": "Try Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 22,
            "movement": null,
            "status": "new"
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
            "position": 86,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 157,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 55,
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
            "position": 84,
            "movement": 1
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
  