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
  export const liveChartsUpdated = "2026-08-25";
  
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
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 10,
            "movement": 8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": 16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": 7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": -5
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 18,
            "movement": 34
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": 5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 21,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": 10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": 40
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 26,
            "movement": 34
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 30,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 8
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 31,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 36,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 37,
            "movement": 20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 37,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 39,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 27
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 43,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 12
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 47,
            "movement": -9
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 47,
            "movement": 74
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 48,
            "movement": 14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": -3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 49,
            "movement": 60
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 52,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 55,
            "movement": 25
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 57,
            "movement": -16
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 60,
            "movement": 6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 61,
            "movement": -23
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 62,
            "movement": 34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 64,
            "movement": 45
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 67,
            "movement": 10
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 69,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 70,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 72,
            "movement": 15
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 77,
            "movement": 26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 77,
            "movement": 27
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 79,
            "movement": 12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 83,
            "movement": -12
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 87,
            "movement": 11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 87,
            "movement": 49
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 96,
            "movement": -36
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 98,
            "movement": -12
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 105,
            "movement": 3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 109,
            "movement": 31
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 110,
            "movement": -14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 112,
            "movement": 27
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 124,
            "movement": 24
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 125,
            "movement": -11
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 126,
            "movement": 19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 127,
            "movement": -14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 129,
            "movement": 24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 148,
            "movement": 31
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -25
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 160,
            "movement": 13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 168,
            "movement": 17
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 193,
            "movement": -7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 23,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 28,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 34,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 39,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 43,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 44,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 49,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 51,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 57,
            "movement": -23
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 78,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 86,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 103,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 108,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 109,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 111,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 112,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 113,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 115,
            "movement": -13
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 115,
            "movement": 12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 117,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 117,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 117,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 120,
            "movement": 8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 121,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 127,
            "movement": 31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": 11
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 143,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 148,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 9
          },
          {
            "country": "IN",
            "name": "India",
            "position": 151,
            "movement": 8
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 157,
            "movement": 16
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 160,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 170,
            "movement": -12
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 171,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 176,
            "movement": 10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 186,
            "movement": -10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 188,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 194,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 198,
            "movement": -2
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 24,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -1
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
            "position": 52,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 57,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 66,
            "movement": 8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 73,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 85,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 88,
            "movement": 11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 91,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 98,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 99,
            "movement": 21
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 101,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 110,
            "movement": 32
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 123,
            "movement": 12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 133,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 141,
            "movement": 46
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 142,
            "movement": 13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 147,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 162,
            "movement": 36
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
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 0
          },
          {
            "country": "IN",
            "name": "India",
            "position": 5,
            "movement": 12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 41,
            "movement": -15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 76,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 77,
            "movement": -66
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 91,
            "movement": -76
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 92,
            "movement": -22
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 146,
            "movement": 14
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
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
            "movement": 21
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 36,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 89,
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 25,
            "movement": 83
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 43,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 52,
            "movement": 24
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 63,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 100,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -16
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 106,
            "movement": 11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 113,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 116,
            "movement": 27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 121,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 135,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 136,
            "movement": -87
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 18
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 151,
            "movement": 22
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 158,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 163,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 173,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": -1
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
            "position": 117,
            "movement": -6
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
            "country": "BT",
            "name": "Bhutan",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 108,
            "movement": -46
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 44
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 144,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 183,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 146,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 174,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 189,
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
            "country": "KE",
            "name": "Kenya",
            "position": 39,
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
            "movement": 9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 71,
            "movement": 19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 125,
            "movement": -7
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 137,
            "movement": -25
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "country": "PH",
            "name": "Philippines",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 79,
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
            "position": 34,
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
            "country": "AO",
            "name": "Angola",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 137,
            "movement": -57
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 155,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": -1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
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
            "position": 51,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -45
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
            "position": 178,
            "movement": -5
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 101,
            "movement": 46
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 168,
            "movement": -38
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 170,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 72
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 104,
            "movement": 57
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 156,
            "movement": -41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
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
            "position": 189,
            "movement": 7
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
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
            "country": "KE",
            "name": "Kenya",
            "position": 11,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 21
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
            "position": 169,
            "movement": -20
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
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 88,
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
    "title": "Burning",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 70,
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
    "title": "I THINK YOU'RE SPECIAL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "First",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 80,
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
    "title": "Try Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 9,
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
    "title": "I'm Not Sure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 94,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 13
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
            "country": "SR",
            "name": "Suriname",
            "position": 173,
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
    "title": "Avoid Things",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 175,
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
            "position": 153,
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
  