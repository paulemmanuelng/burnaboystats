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
  export const liveChartsUpdated = "2026-08-29";
  
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 13,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": 4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 15,
            "movement": 36
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 16,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 23,
            "movement": 18
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 25,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 28,
            "movement": 14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 29,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 35,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 41,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 41,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 43,
            "movement": 6
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 44,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 46,
            "movement": 147
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 49,
            "movement": -18
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 52,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 54,
            "movement": -24
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 56,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -21
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 58,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 58,
            "movement": -29
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 60,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 64,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 65,
            "movement": -17
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 65,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 66,
            "movement": 58
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 69,
            "movement": 12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": -9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 75,
            "movement": 98
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": -16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 82,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 88,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": -29
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 96,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 96,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 98,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 99,
            "movement": -12
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 100,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 102,
            "movement": -33
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 103,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 103,
            "movement": -15
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 103,
            "movement": -9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 105,
            "movement": -17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 111,
            "movement": -10
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 115,
            "movement": -81
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 126,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -31
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 135,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 137,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 139,
            "movement": -29
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 148,
            "movement": -25
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 164,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -24
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 181,
            "movement": -119
          },
          {
            "country": "FR",
            "name": "France",
            "position": 188,
            "movement": -11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 190,
            "movement": -27
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 193,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 195,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 197,
            "movement": -25
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 200,
            "movement": -10
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 14,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 30,
            "movement": 14
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 31,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 46,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 49,
            "movement": 11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 49,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 59,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 61,
            "movement": 16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 65,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 73,
            "movement": 21
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 74,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 79,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 85,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 85,
            "movement": 26
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 91,
            "movement": 14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 91,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 92,
            "movement": 14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 93,
            "movement": 26
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 94,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 123,
            "movement": 8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 125,
            "movement": 35
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 153,
            "movement": 30
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": 34
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 178,
            "movement": 14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 182,
            "movement": 18
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 200,
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
            "country": "GR",
            "name": "Greece",
            "position": 3,
            "movement": 13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 11,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 15,
            "movement": -8
          },
          {
            "country": "IN",
            "name": "India",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 63,
            "movement": -20
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 90,
            "movement": -49
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 146,
            "movement": -69
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 25,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 31,
            "movement": 11
          },
          {
            "country": "US",
            "name": "United States",
            "position": 37,
            "movement": -15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 54,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 62,
            "movement": 34
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 64,
            "movement": -13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 77,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": -25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 89,
            "movement": -38
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 98,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": -60
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 110,
            "movement": 29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
            "movement": -24
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 126,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": -63
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": 29
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 164,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 178,
            "movement": -114
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -39
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 200,
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
            "position": 193,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 197,
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
            "country": "MR",
            "name": "Mauritania",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": -33
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 139,
            "movement": -72
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 163,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 177,
            "movement": -128
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 87,
            "movement": -7
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
            "position": 147,
            "movement": 12
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
            "position": 62,
            "movement": -18
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 77,
            "movement": 46
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": 85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 40
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 108,
            "movement": 91
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": 10
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
            "position": 20,
            "movement": -15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": -15
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 132,
            "movement": 11
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
            "position": 71,
            "movement": -47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 95,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": -19
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 180,
            "movement": -51
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 183,
            "movement": -38
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
            "country": "SC",
            "name": "Seychelles",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -68
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 195,
            "movement": -11
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
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
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
            "position": 191,
            "movement": 2
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
            "position": 151,
            "movement": -8
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
            "country": "BM",
            "name": "Bermuda",
            "position": 31,
            "movement": 34
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 58,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 181,
            "movement": -60
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 199,
            "movement": -110
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
            "position": 103,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -9
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": -60
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
            "position": 81,
            "movement": 12
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
            "country": "AI",
            "name": "Anguilla",
            "position": 124,
            "movement": -82
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -34
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
            "position": 80,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bunce Road Blues",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 87,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 108,
            "movement": -12
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
            "movement": 1
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
  