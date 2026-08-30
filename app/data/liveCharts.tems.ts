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
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 20,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 23,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 23,
            "movement": 4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 24,
            "movement": -9
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 24,
            "movement": -9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 27,
            "movement": 48
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 36,
            "movement": -20
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 38,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": 22
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 43,
            "movement": -14
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 45,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 46,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 46,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": 2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 47,
            "movement": -6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 50,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 58,
            "movement": -17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 58,
            "movement": 7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 60,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 62,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 75,
            "movement": -26
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 76,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -22
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 83,
            "movement": 5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 83,
            "movement": 16
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 84,
            "movement": -14
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 85,
            "movement": -20
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 88,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 92,
            "movement": -34
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 94,
            "movement": 21
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 98,
            "movement": -11
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 99,
            "movement": -47
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 104,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": -10
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 107,
            "movement": -72
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": -41
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 111,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 111,
            "movement": 28
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 113,
            "movement": -55
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 113,
            "movement": -49
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 114,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 115,
            "movement": -51
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 117,
            "movement": -15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 118,
            "movement": -95
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 122,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 128,
            "movement": -32
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 141,
            "movement": -43
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 147,
            "movement": -36
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 160,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 171,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 183,
            "movement": -46
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 186,
            "movement": -22
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 193,
            "movement": 0
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 21,
            "movement": 1
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
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 29,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 37,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 39,
            "movement": -5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 41,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 45,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 45,
            "movement": -2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 46,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 55,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 70,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 79,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 85,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 87,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 89,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 96,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 97,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 98,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 101,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 101,
            "movement": 8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 107,
            "movement": 44
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 110,
            "movement": -4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 114,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 121,
            "movement": -6
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 122,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 131,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 149,
            "movement": 16
          },
          {
            "country": "IN",
            "name": "India",
            "position": 155,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 155,
            "movement": -5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 159,
            "movement": -8
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 166,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": 15
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 171,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 175,
            "movement": 18
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 175,
            "movement": -14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 178,
            "movement": -16
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 179,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 193,
            "movement": -14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 197,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 197,
            "movement": -20
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "position": 11,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 18,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 36,
            "movement": -5
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
            "position": 49,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 51,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": -22
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 60,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 65,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 67,
            "movement": 7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 73,
            "movement": -24
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 75,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 78,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 86,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 95,
            "movement": -22
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 98,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 102,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 117,
            "movement": -26
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 120,
            "movement": -28
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 133,
            "movement": -48
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 150,
            "movement": -25
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 153,
            "movement": -30
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 180,
            "movement": -27
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 181,
            "movement": -16
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 197,
            "movement": -15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 199,
            "movement": -21
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": 57
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 7,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 16,
            "movement": 47
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 17,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": -21
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 40,
            "movement": -35
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 176,
            "movement": -106
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 176,
            "movement": -79
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": 79
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": 13
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
            "position": 40,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 44,
            "movement": 89
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 52,
            "movement": -27
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 73,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -14
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 82,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 84,
            "movement": -53
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 93,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 97,
            "movement": 6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 107,
            "movement": -30
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 115,
            "movement": -51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 16
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 125,
            "movement": -27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 126,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 130,
            "movement": -9
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 181,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 49
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 128,
            "movement": -49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -49
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 170,
            "movement": -93
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 191,
            "movement": -83
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
            "position": 28,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 57,
            "movement": 33
          },
          {
            "country": "US",
            "name": "United States",
            "position": 126,
            "movement": 13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 129,
            "movement": -50
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 150,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 100,
            "movement": -42
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
            "movement": -2
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 46,
            "movement": 93
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
            "movement": -10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 179,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 194,
            "movement": -49
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
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 131,
            "movement": 52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 160,
            "movement": -65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": -23
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 174,
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
            "position": 14,
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 145,
            "movement": -104
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 154,
            "movement": 41
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -10
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
            "position": 75,
            "movement": -44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 67
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 163,
            "movement": -105
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -6
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": -27
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
            "position": 100,
            "movement": -19
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
            "position": 164,
            "movement": -1
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
            "position": 15,
            "movement": 65
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
            "position": 117,
            "movement": -9
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
            "movement": -2
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
    "title": "If Orange Was A Place - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 83,
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
  