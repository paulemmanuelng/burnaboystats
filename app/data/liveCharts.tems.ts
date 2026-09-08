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
  export const liveChartsUpdated = "2026-09-08";
  
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 2,
            "movement": 20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": 13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 8,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 12,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 19,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 19,
            "movement": 1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 23,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 25,
            "movement": 47
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 25,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 27,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": 4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 29,
            "movement": 111
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 33,
            "movement": 96
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -13
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 35,
            "movement": 32
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 36,
            "movement": 58
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 36,
            "movement": 5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": 6
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 38,
            "movement": 11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 38,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 38,
            "movement": -5
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 41,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 42,
            "movement": 17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 46,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 72
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 49,
            "movement": 48
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 49,
            "movement": 40
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 51,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 51,
            "movement": 9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 52,
            "movement": 28
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 55,
            "movement": 32
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 55,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 57,
            "movement": 11
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 58,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 59,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 61,
            "movement": 13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": 56
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 65,
            "movement": 28
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": 52
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 67,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 68,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -19
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 71,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 74,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 80,
            "movement": -2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 81,
            "movement": 9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 81,
            "movement": 29
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 82,
            "movement": 35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -10
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 89,
            "movement": 13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 90,
            "movement": 5
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 94,
            "movement": -25
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 97,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 100,
            "movement": -83
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 104,
            "movement": 52
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 37
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 116,
            "movement": 34
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 117,
            "movement": 16
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 118,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 121,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": -36
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 135,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 144,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 148,
            "movement": -28
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 155,
            "movement": 19
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": -100
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 162,
            "movement": 23
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 162,
            "movement": 29
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": -15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 169,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 170,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 175,
            "movement": 15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 183,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 183,
            "movement": -13
          },
          {
            "country": "FR",
            "name": "France",
            "position": 184,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 194,
            "movement": -19
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 198,
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
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 14,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 37,
            "movement": 10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 42,
            "movement": 14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 51,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 62,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 65,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 68,
            "movement": 22
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": 22
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 78,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 84,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 86,
            "movement": 11
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 87,
            "movement": 17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 90,
            "movement": 27
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 91,
            "movement": 19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 92,
            "movement": 18
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 101,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 111,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 137,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 197,
            "movement": -1
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
            "position": 11,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 33,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 37,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": -8
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
            "position": 13,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 30,
            "movement": -11
          },
          {
            "country": "IN",
            "name": "India",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 136,
            "movement": -37
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -112
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
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 88,
            "movement": -57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -74
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 91,
            "movement": -38
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 56
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 42,
            "movement": 17
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 42,
            "movement": 11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 43,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 46,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 55,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 77
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 65,
            "movement": 40
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 68,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 73,
            "movement": 11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 76,
            "movement": 10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 88,
            "movement": -20
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 92,
            "movement": 103
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 101,
            "movement": 48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 115,
            "movement": 69
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 159,
            "movement": -54
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 163,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 167,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 172,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 173,
            "movement": -25
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 190,
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
            "position": 181,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 187,
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": 20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 113,
            "movement": -67
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 132,
            "movement": -92
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 193,
            "movement": -54
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
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -25
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
            "position": 98,
            "movement": 30
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
            "position": 85,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": 33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 146,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": -49
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -95
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -36
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 200,
            "movement": -64
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 83,
            "movement": -22
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 86,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 103,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": -62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -31
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
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
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 84,
            "movement": 34
          },
          {
            "country": "US",
            "name": "United States",
            "position": 89,
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 190,
            "movement": -56
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "US",
            "name": "United States",
            "position": 173,
            "movement": 11
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
            "position": 11,
            "movement": -1
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
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 187,
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
            "position": 41,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 126,
            "movement": 19
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 145,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 69
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
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
            "position": 123,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 22,
            "movement": 0
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
            "position": 173,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 198,
            "movement": -58
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
            "position": 23,
            "movement": -18
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
            "position": 42,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 102,
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
            "position": 89,
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
  