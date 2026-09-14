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
  export const liveChartsUpdated = "2026-09-14";
  
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 10,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 11,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 21,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 25,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 26,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 33,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": -15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 39,
            "movement": 31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 39,
            "movement": -16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 43,
            "movement": 26
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 43,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 45,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": -10
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 47,
            "movement": 42
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 49,
            "movement": -18
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 55,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 56,
            "movement": 25
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 56,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 61,
            "movement": 8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": -18
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 61,
            "movement": 19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 63,
            "movement": -24
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 65,
            "movement": -16
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 65,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 73,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 76,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 79,
            "movement": 12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": -10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 80,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 80,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": 42
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 84,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 86,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 88,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 92,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 97,
            "movement": 45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 105,
            "movement": -17
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 106,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 106,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 107,
            "movement": -70
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 110,
            "movement": -56
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 111,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 116,
            "movement": 7
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 118,
            "movement": 3
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 126,
            "movement": -24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 126,
            "movement": -33
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 141,
            "movement": -32
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 143,
            "movement": -51
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 143,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 158,
            "movement": -30
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 160,
            "movement": -20
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 174,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 175,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 186,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 188,
            "movement": -22
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
            "movement": -1
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
            "position": 20,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 22,
            "movement": 1
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
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": -26
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 54,
            "movement": -8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 57,
            "movement": -25
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 60,
            "movement": -19
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 65,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 74,
            "movement": 33
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 75,
            "movement": -30
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 82,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 91,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 93,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 96,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
            "movement": -14
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
            "country": "EG",
            "name": "Egypt",
            "position": 118,
            "movement": -12
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
            "position": 132,
            "movement": 17
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 135,
            "movement": -69
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 138,
            "movement": 3
          },
          {
            "country": "CN",
            "name": "China",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 143,
            "movement": -47
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 143,
            "movement": 13
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 158,
            "movement": 26
          },
          {
            "country": "FR",
            "name": "France",
            "position": 165,
            "movement": -68
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 166,
            "movement": -68
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 176,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 186,
            "movement": -71
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -64
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
            "movement": 11
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 195,
            "movement": -96
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 200,
            "movement": -69
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
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -13
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 59,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 68,
            "movement": 8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 73,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 73,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 74,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 93,
            "movement": -27
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 99,
            "movement": -23
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 99,
            "movement": -20
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 107,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 111,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 114,
            "movement": -21
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 120,
            "movement": -25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 127,
            "movement": -35
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 134,
            "movement": -30
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 150,
            "movement": -22
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 164,
            "movement": -29
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 182,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 192,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 18
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 11
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 22,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 64,
            "movement": -49
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 74,
            "movement": -10
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 88,
            "movement": -43
          },
          {
            "country": "IN",
            "name": "India",
            "position": 133,
            "movement": -85
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
            "country": "TH",
            "name": "Thailand",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 29,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 43,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 17
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 88,
            "movement": -54
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
            "position": 14,
            "movement": 9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 20,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 40,
            "movement": -17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 52,
            "movement": 8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 58,
            "movement": -4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": 6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 62,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 81,
            "movement": -25
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 81,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 23
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 91,
            "movement": -51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 114,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 137,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 161,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 167,
            "movement": 17
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 174,
            "movement": -34
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 187,
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
            "position": 180,
            "movement": 8
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
            "position": 121,
            "movement": -18
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
            "country": "MG",
            "name": "Madagascar",
            "position": 110,
            "movement": 26
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 123,
            "movement": 22
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 149,
            "movement": -41
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 172,
            "movement": -9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -15
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
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 115,
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
            "position": 181,
            "movement": -14
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
            "country": "SR",
            "name": "Suriname",
            "position": 119,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 15
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -19
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
            "position": 31,
            "movement": -8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 82,
            "movement": 8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 109,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 169,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 95,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 105,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": 35
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 198,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
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
            "position": 172,
            "movement": -11
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
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 199,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 198,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 151,
            "movement": -111
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
            "position": 55,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 116,
            "movement": -3
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
            "position": 144,
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
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MOVE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
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
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 17,
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
            "position": 86,
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
  