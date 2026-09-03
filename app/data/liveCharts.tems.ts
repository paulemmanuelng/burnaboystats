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
  export const liveChartsUpdated = "2026-09-03";
  
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
            "movement": 10
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 11,
            "movement": 7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 12,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 14,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": -1
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
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 3
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
            "movement": -2
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
            "country": "ML",
            "name": "Mali",
            "position": 31,
            "movement": 15
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
            "country": "AO",
            "name": "Angola",
            "position": 33,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 34,
            "movement": 7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 35,
            "movement": 46
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": 14
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 40,
            "movement": 101
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 41,
            "movement": 7
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 42,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 43,
            "movement": 7
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
            "country": "BM",
            "name": "Bermuda",
            "position": 48,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": 34
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
            "country": "SE",
            "name": "Sweden",
            "position": 50,
            "movement": 5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 53,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 54,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 54,
            "movement": 11
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 60,
            "movement": 18
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
            "movement": 13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 62,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 64,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 69,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 70,
            "movement": -30
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 70,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 76,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 76,
            "movement": 30
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 78,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 83,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 90,
            "movement": -4
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 91,
            "movement": 32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 98,
            "movement": -25
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
            "country": "MY",
            "name": "Malaysia",
            "position": 110,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 111,
            "movement": 15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 113,
            "movement": 53
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 116,
            "movement": 25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 119,
            "movement": 4
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
            "country": "FI",
            "name": "Finland",
            "position": 126,
            "movement": 33
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 127,
            "movement": -6
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
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 163,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 164,
            "movement": 13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 165,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 166,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 169,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 169,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 175,
            "movement": -104
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 185,
            "movement": 5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 187,
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
            "country": "GR",
            "name": "Greece",
            "position": 191,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 200,
            "movement": -116
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 26,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 49,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 50,
            "movement": 9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 51,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 58,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 60,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 64,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 67,
            "movement": 15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 67,
            "movement": 9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 68,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 69,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 73,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 76,
            "movement": -7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 78,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 86,
            "movement": -14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 117,
            "movement": -21
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 157,
            "movement": 13
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 159,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 164,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 165,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 188,
            "movement": -21
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 192,
            "movement": 7
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
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 27,
            "movement": -21
          },
          {
            "country": "IN",
            "name": "India",
            "position": 30,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 39,
            "movement": 52
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 57,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 88,
            "movement": -82
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LV",
            "name": "Latvia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 56,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 70,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 84,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
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
            "position": 18,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 30
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 59,
            "movement": 88
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 62,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 80,
            "movement": 5
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 97,
            "movement": 49
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 2
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 132,
            "movement": -86
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 159,
            "movement": -68
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 178,
            "movement": -69
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
            "movement": 1
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
            "movement": 18
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 79,
            "movement": 45
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 123,
            "movement": -11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 143,
            "movement": -59
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 158,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 183,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -7
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 45,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -83
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
            "position": 156,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": 116
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 53,
            "movement": 124
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 80,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 136,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 141,
            "movement": -37
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
            "position": 130,
            "movement": -20
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 89,
            "movement": 8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 125,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 136,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -7
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
            "movement": -8
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
            "position": 110,
            "movement": -7
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
            "movement": -19
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
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 195,
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
            "position": 136,
            "movement": null,
            "status": "new"
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
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
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
    "title": "Gangsta",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 150,
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
            "position": 84,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Get it Right",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": 0
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
  