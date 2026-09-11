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
  export const liveChartsUpdated = "2026-09-11";
  
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
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 8,
            "movement": 35
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": 42
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 18,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 19,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 19,
            "movement": 13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": 10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 24,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": 5
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 29,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 30,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 33,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 36,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 36,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 39,
            "movement": 28
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 42,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 43,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 50,
            "movement": -7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 54,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": -28
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 63,
            "movement": 10
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 63,
            "movement": -14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 66,
            "movement": 11
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 69,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 71,
            "movement": -31
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 73,
            "movement": -18
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 73,
            "movement": 9
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 73,
            "movement": 52
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 76,
            "movement": 14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 76,
            "movement": -23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 82,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 85,
            "movement": 32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -21
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 90,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 90,
            "movement": -42
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 99,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 99,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 99,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 100,
            "movement": -28
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 100,
            "movement": 70
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 107,
            "movement": -39
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 112,
            "movement": -24
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 114,
            "movement": -14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 115,
            "movement": -11
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 123,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": 39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": -43
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 126,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 135,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 136,
            "movement": -33
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 138,
            "movement": -30
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 138,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -11
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 149,
            "movement": -18
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 154,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 163,
            "movement": 22
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 175,
            "movement": -65
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
            "position": 178,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 181,
            "movement": -50
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 182,
            "movement": -52
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 192,
            "movement": -28
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 195,
            "movement": -103
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
            "position": 11,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 21,
            "movement": 0
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
            "country": "SG",
            "name": "Singapore",
            "position": 25,
            "movement": -1
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 51,
            "movement": -13
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 52,
            "movement": -13
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 54,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 58,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 63,
            "movement": 21
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
            "country": "AT",
            "name": "Austria",
            "position": 79,
            "movement": 51
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 83,
            "movement": 3
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
            "position": 94,
            "movement": -8
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 120,
            "movement": -27
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 121,
            "movement": 57
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 128,
            "movement": -16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 135,
            "movement": -23
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 138,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 143,
            "movement": 13
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
            "country": "IT",
            "name": "Italy",
            "position": 155,
            "movement": -50
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 158,
            "movement": 26
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 160,
            "movement": -14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 165,
            "movement": -68
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 176,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -45
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 186,
            "movement": -71
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
            "movement": 11
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
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 37,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 41,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 57,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 58,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": 10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 60,
            "movement": 17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 73,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 76,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 77,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 79,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 83,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 90,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 99,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 115,
            "movement": 13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 137,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 166,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 186,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MD",
            "name": "Moldova",
            "position": 4,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 7,
            "movement": 10
          },
          {
            "country": "IN",
            "name": "India",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 49,
            "movement": -32
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 58,
            "movement": -15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 146,
            "movement": -5
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 36,
            "movement": 51
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 55,
            "movement": -25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 96,
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
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 23,
            "movement": 29
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 41,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 54,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 71,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 35
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 83,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 85,
            "movement": 93
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": -60
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 101,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 105,
            "movement": 76
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": -25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": -41
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 115,
            "movement": -70
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 131,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 156,
            "movement": 14
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 161,
            "movement": 15
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 166,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 179,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -75
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 154,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 5
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
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
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
            "position": 68,
            "movement": -20
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 56,
            "movement": 47
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 83,
            "movement": -32
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 160,
            "movement": 8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 162,
            "movement": -101
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -20
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
            "position": 112,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PH",
            "name": "Philippines",
            "position": 102,
            "movement": null,
            "status": "new"
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
            "position": 14,
            "movement": 20
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 19,
            "movement": 18
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 21,
            "movement": 39
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": 12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 95,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 135,
            "movement": 46
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 185,
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
            "position": 37,
            "movement": 1
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -39
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 138,
            "movement": -102
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 62,
            "movement": -19
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 83,
            "movement": -28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 147,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 192,
            "movement": -154
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 60,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -19
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 181,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 21,
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
            "position": 167,
            "movement": 9
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
            "position": 112,
            "movement": -13
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
            "position": 155,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 67,
            "movement": 85
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
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
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 128,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": -8
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
            "position": 57,
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
  