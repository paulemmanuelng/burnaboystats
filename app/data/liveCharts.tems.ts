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
  export const liveChartsUpdated = "2026-09-02";
  
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": 8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 9,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 12,
            "movement": 26
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 17,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 18,
            "movement": -4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 19,
            "movement": 90
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": -8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 21,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 25,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 27,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 29,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 40,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 40,
            "movement": 43
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 46,
            "movement": 36
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 49,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 50,
            "movement": 11
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -14
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 50,
            "movement": 14
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 51,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 54,
            "movement": 16
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 54,
            "movement": 12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 57,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 58,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 25
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 63,
            "movement": 66
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 64,
            "movement": 28
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 65,
            "movement": 28
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 65,
            "movement": 28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 31
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 67,
            "movement": -24
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 71,
            "movement": 12
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 71,
            "movement": 16
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 73,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 77,
            "movement": -40
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 77,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 78,
            "movement": -53
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 79,
            "movement": 5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 81,
            "movement": -49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 99
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 83,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": -33
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 91,
            "movement": -26
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 93,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 95,
            "movement": 23
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 104,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 105,
            "movement": 23
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 106,
            "movement": 88
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 107,
            "movement": 14
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 108,
            "movement": 11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 110,
            "movement": 68
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 114,
            "movement": 48
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 115,
            "movement": 77
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 121,
            "movement": 42
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 123,
            "movement": 18
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 131,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 137,
            "movement": 32
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 141,
            "movement": -49
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 141,
            "movement": -100
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 148,
            "movement": -4
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 152,
            "movement": 25
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 156,
            "movement": -80
          },
          {
            "country": "FR",
            "name": "France",
            "position": 164,
            "movement": 14
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 171,
            "movement": -22
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 175,
            "movement": 13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 179,
            "movement": 17
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 182,
            "movement": -50
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 189,
            "movement": -15
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "movement": -6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 32,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": 2
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
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 0
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
            "position": 95,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 97,
            "movement": 0
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
            "country": "BE",
            "name": "Belgium",
            "position": 112,
            "movement": 0
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
            "position": 122,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 126,
            "movement": -22
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 127,
            "movement": 1
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
            "country": "CN",
            "name": "China",
            "position": 171,
            "movement": 0
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
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": 6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 25,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 29,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": 6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 37,
            "movement": 7
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
            "position": 47,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 53,
            "movement": 25
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 54,
            "movement": 8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 57,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 57,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 59,
            "movement": 18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 68,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 69,
            "movement": 20
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 71,
            "movement": 24
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 72,
            "movement": 33
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 74,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 76,
            "movement": 14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 78,
            "movement": 33
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 82,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 88,
            "movement": 34
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 96,
            "movement": 32
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 165,
            "movement": 29
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 168,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 169,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 170,
            "movement": 23
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 182,
            "movement": 16
          },
          {
            "country": "PA",
            "name": "Panama",
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
            "country": "AM",
            "name": "Armenia",
            "position": 3,
            "movement": 16
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 6,
            "movement": 35
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": 73
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 21,
            "movement": 18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": -20
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 45,
            "movement": -29
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 45,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -18
          },
          {
            "country": "IN",
            "name": "India",
            "position": 46,
            "movement": -22
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 57,
            "movement": 9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 69,
            "movement": -48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -8
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TH",
            "name": "Thailand",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 27,
            "movement": -25
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 97,
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
            "position": 21,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 46,
            "movement": 147
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 64,
            "movement": 28
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": 11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 77,
            "movement": 103
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 83,
            "movement": 27
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 85,
            "movement": -45
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 85,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 55
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": 18
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 91,
            "movement": -64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 23
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 107,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 131,
            "movement": 45
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 134,
            "movement": 28
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 155,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 25
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
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
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 48,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 83,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 140,
            "movement": -3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 144,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 195,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 18
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 131,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 141,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 146,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 177,
            "movement": 4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "country": "DO",
            "name": "Dominican Republic",
            "position": 109,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 70,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": 28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 120,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -19
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 124,
            "movement": 13
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 185,
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 38,
            "movement": -9
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
            "position": 166,
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
            "position": 34,
            "movement": -8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 103,
            "movement": -17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 130,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 189,
            "movement": -30
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
            "position": 175,
            "movement": -150
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 73
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 132,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": 32
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -6
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
            "movement": 15
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
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -14
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 183,
            "movement": -110
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 191,
            "movement": -76
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 199,
            "movement": -120
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
            "position": 124,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
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
            "position": 98,
            "movement": -25
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
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": -33
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
            "position": 103,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Found",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 155,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
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
    "platforms": [],
    "kind": "song",
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
  