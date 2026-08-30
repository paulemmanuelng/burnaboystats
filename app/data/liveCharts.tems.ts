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
  export const liveChartsUpdated = "2026-08-30";
  
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
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": 58
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 10,
            "movement": 7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 12,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 12,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 15,
            "movement": 3
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 17,
            "movement": 90
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 18,
            "movement": 18
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 31,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 34,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 39,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 43,
            "movement": 70
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -10
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 44,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 50,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 50,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 50,
            "movement": -23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": -4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 51,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 57,
            "movement": 3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 57,
            "movement": 42
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 58,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 58,
            "movement": -34
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 60,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 70,
            "movement": 48
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 71,
            "movement": -13
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 73,
            "movement": 12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 73,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 79,
            "movement": 34
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 79,
            "movement": 62
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": -33
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 86,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -3
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 95,
            "movement": 16
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 97,
            "movement": 10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 99,
            "movement": -7
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 102,
            "movement": 13
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 103,
            "movement": -12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 107,
            "movement": -23
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 110,
            "movement": -10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 111,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": -7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 113,
            "movement": 9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 114,
            "movement": 14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 116,
            "movement": -33
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 117,
            "movement": -29
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 123,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 129,
            "movement": -18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 141,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 158,
            "movement": 25
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 159,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 171,
            "movement": -57
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 179,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 181,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 183,
            "movement": -30
          },
          {
            "country": "FR",
            "name": "France",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 196,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "position": 15,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 22,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 22,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 25,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 25,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 30,
            "movement": -1
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 39,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 43,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 44,
            "movement": -3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 45,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 48,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 58,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 67,
            "movement": 12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 70,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 89,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 90,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 92,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 96,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 98,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 98,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 102,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 103,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 107,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 108,
            "movement": -7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 110,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 122,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 134,
            "movement": -12
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 141,
            "movement": -10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 145,
            "movement": 4
          },
          {
            "country": "IN",
            "name": "India",
            "position": 153,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 160,
            "movement": -5
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 160,
            "movement": 6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 165,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 170,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 171,
            "movement": 7
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 189,
            "movement": -10
          },
          {
            "country": "CN",
            "name": "China",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 195,
            "movement": -20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 199,
            "movement": -2
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
            "position": 9,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 17,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 36,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": 6
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
            "position": 48,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 58,
            "movement": -7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 58,
            "movement": 7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 60,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 63,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 78,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 89,
            "movement": -11
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 93,
            "movement": -20
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 103,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 104,
            "movement": -6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 108,
            "movement": -33
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 111,
            "movement": -16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 112,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 124,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 148,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 157,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 160,
            "movement": -27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 183,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 188,
            "movement": 11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 188,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 199,
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 11,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": -1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 20,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 24,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 39,
            "movement": -32
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 41,
            "movement": -31
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 51,
            "movement": -22
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 167,
            "movement": -147
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
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 42,
            "movement": -25
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 99,
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -6
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
            "position": 35,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 54,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 62,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 6
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 85,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 88,
            "movement": 27
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 91,
            "movement": -18
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 97,
            "movement": 28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 111,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": 13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 163,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": 8
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 196,
            "movement": -89
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
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 68,
            "movement": 60
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": -75
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 195,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 144,
            "movement": -98
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 185,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -101
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
            "position": 26,
            "movement": 2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 87,
            "movement": -30
          },
          {
            "country": "US",
            "name": "United States",
            "position": 115,
            "movement": 15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 150,
            "movement": -21
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "US",
            "name": "United States",
            "position": 37,
            "movement": 0
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
            "movement": 0
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
            "position": 130,
            "movement": 30
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
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
            "country": "DO",
            "name": "Dominican Republic",
            "position": 31,
            "movement": -20
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
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
            "position": 195,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 61,
            "movement": 93
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 37
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
            "country": "BM",
            "name": "Bermuda",
            "position": 61,
            "movement": 14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 185,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -6
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
            "position": 138,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 199,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 79,
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
            "position": 53,
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
            "position": 10,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
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
            "position": 115,
            "movement": 2
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
            "position": 158,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
  