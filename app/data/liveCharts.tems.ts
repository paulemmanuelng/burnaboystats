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
  export const liveChartsUpdated = "2026-08-24";
  
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
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 16,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 18,
            "movement": -5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 19,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 21,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 23,
            "movement": 6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 24,
            "movement": 15
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 24,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 25,
            "movement": 3
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 29,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 31,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 34,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": -4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 37,
            "movement": 9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 38,
            "movement": 3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 38,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 39,
            "movement": -2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 41,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 46,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 52,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": 77
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 55,
            "movement": -32
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 57,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": 4
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 57,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 60,
            "movement": -43
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 60,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 61,
            "movement": -22
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 62,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 66,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 66,
            "movement": -24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 66,
            "movement": 7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 67,
            "movement": 7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 71,
            "movement": 21
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 77,
            "movement": -26
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 79,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 82,
            "movement": 21
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": 15
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 87,
            "movement": -15
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 96,
            "movement": 50
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 96,
            "movement": -25
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 97,
            "movement": -24
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 98,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 103,
            "movement": 39
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": -30
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 108,
            "movement": 55
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 109,
            "movement": -54
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 109,
            "movement": -51
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 113,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 114,
            "movement": 60
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 121,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": 52
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 139,
            "movement": -27
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 140,
            "movement": -44
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 141,
            "movement": 36
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 145,
            "movement": 32
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 148,
            "movement": 12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 153,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 173,
            "movement": -22
          },
          {
            "country": "FR",
            "name": "France",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 179,
            "movement": 1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 186,
            "movement": -14
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 186,
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 13,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 18,
            "movement": 1
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
            "country": "GR",
            "name": "Greece",
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 32,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 34,
            "movement": -10
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
            "position": 36,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 45,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
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
            "position": 49,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 83,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 89,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 101,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 102,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 102,
            "movement": 8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 105,
            "movement": 22
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 106,
            "movement": -27
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 110,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 113,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 115,
            "movement": 11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 115,
            "movement": 29
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 118,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 121,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 127,
            "movement": 31
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 127,
            "movement": 27
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 128,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": 11
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 142,
            "movement": 18
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 150,
            "movement": 5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 151,
            "movement": 13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 158,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": 8
          },
          {
            "country": "IN",
            "name": "India",
            "position": 159,
            "movement": 15
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 170,
            "movement": -9
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 173,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 176,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 188,
            "movement": -31
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
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 198,
            "movement": -12
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
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": -6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 23,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 55,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 64,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 67,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 74,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 75,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 79,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 96,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 99,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 104,
            "movement": 19
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 109,
            "movement": -15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 120,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 135,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 139,
            "movement": -14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 142,
            "movement": -10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 145,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 155,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 187,
            "movement": -28
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 198,
            "movement": -2
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
            "position": 6,
            "movement": 17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 24,
            "movement": -19
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 31,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 33,
            "movement": 43
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 70,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 84,
            "movement": 37
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 98,
            "movement": -25
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 38,
            "movement": 8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 49,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 74,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": 16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 95,
            "movement": -45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": -16
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 117,
            "movement": -27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 118,
            "movement": 29
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 123,
            "movement": 47
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 131,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 143,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 167,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 169,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 173,
            "movement": -77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -3
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 62,
            "movement": 123
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": 25
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 130,
            "movement": -78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": 21
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 165,
            "movement": -94
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 177,
            "movement": -70
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 185,
            "movement": 13
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
            "country": "OM",
            "name": "Oman",
            "position": 80,
            "movement": 102
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 131,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
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
            "position": 48,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -33
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
            "position": 173,
            "movement": 15
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
            "position": 138,
            "movement": 7
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
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 90,
            "movement": 49
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 116,
            "movement": -6
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": 17
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 128,
            "movement": -18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": -15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 194,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": 45
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -60
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
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
            "position": 196,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 147,
            "movement": 41
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
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
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 43
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
            "position": 153,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 199,
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
            "movement": 0
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
            "position": 153,
            "movement": 4
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
  