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
  export const liveChartsUpdated = "2026-09-15";
  
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": 0
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
            "position": 14,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 15,
            "movement": -4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 16,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 20,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 21,
            "movement": 18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 23,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 23,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": -15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 25,
            "movement": 14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 27,
            "movement": 6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 29,
            "movement": 47
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 32,
            "movement": 15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 32,
            "movement": 7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 32,
            "movement": 33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 36,
            "movement": 7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 37,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 39,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 39,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 40,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 48,
            "movement": 40
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 49,
            "movement": -6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 49,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 50,
            "movement": 6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 51,
            "movement": 14
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 53,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 62,
            "movement": 11
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 63,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 42
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 68,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 68,
            "movement": 58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 76,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 80,
            "movement": 46
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": 5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 82,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 83,
            "movement": 22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 87,
            "movement": -32
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 88,
            "movement": -27
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 89,
            "movement": 10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 89,
            "movement": -28
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 99,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 100,
            "movement": 20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 103,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 105,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 113,
            "movement": -34
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 114,
            "movement": -34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 117,
            "movement": 27
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 122,
            "movement": 36
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 122,
            "movement": 19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 126,
            "movement": -15
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 127,
            "movement": 33
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 132,
            "movement": -35
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 12
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 142,
            "movement": -36
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 148,
            "movement": -26
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 148,
            "movement": -87
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 150,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 156,
            "movement": 30
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 160,
            "movement": -42
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 163,
            "movement": 25
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 170,
            "movement": -27
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 180,
            "movement": 6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 185,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
            "movement": -127
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 195,
            "movement": -148
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "position": 7,
            "movement": 2
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
            "position": 14,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 37,
            "movement": 15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 48,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 49,
            "movement": 10
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
            "position": 51,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 59,
            "movement": 15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 59,
            "movement": 14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 67,
            "movement": 17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 76,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 76,
            "movement": -8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 78,
            "movement": 49
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 78,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 95,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 97,
            "movement": 17
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 98,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 99,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 102,
            "movement": 32
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 109,
            "movement": 11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 125,
            "movement": 25
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 176,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 183,
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
            "country": "UA",
            "name": "Ukraine",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": -5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 27,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 76,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 176,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 23,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": 57
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 38,
            "movement": -27
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 80,
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": 45
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 39,
            "movement": -25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 47,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 71
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 52,
            "movement": 6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 40
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 64,
            "movement": 17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": -17
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 76,
            "movement": 85
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 77,
            "movement": 14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 80,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 101,
            "movement": 13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 107,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -14
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 145,
            "movement": 42
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 146,
            "movement": 21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 157,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 192,
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
            "position": 165,
            "movement": 15
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
            "position": 126,
            "movement": -9
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
            "country": "LY",
            "name": "Libya",
            "position": 82,
            "movement": 40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": 30
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 115,
            "movement": 34
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 116,
            "movement": 56
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": -8
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
            "position": 171,
            "movement": 10
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": -32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 197,
            "movement": -8
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
            "position": 24,
            "movement": 7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 68,
            "movement": 14
          },
          {
            "country": "US",
            "name": "United States",
            "position": 119,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "FM",
            "name": "Micronesia",
            "position": 110,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -54
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": -56
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
            "country": "GD",
            "name": "Grenada",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 178,
            "movement": 20
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 200,
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
            "position": 164,
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
            "position": 76,
            "movement": -59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
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
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 80,
            "movement": -9
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
            "position": 101,
            "movement": -1
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 165,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -1
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
            "position": 87,
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
  