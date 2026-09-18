// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=tems from kworb's artist page.
  //
  // PLATFORM chart data for Tems: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
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
  export const liveChartsUpdated = "2026-09-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-18T16:32Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
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
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": 189
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 11,
            "movement": 32
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 12,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 13,
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
            "position": 16,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": 6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 22,
            "movement": 125
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 22,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 23,
            "movement": 30
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 23,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 26,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 29,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 30,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 30,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": -10
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 35,
            "movement": 5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 36,
            "movement": -15
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 41,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": 6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 46,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 48,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 49,
            "movement": 41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -18
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 52,
            "movement": 25
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 55,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 58,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 61,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 47
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 65,
            "movement": 14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 66,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 69,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 72,
            "movement": 2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 72,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -33
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 83,
            "movement": -4
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 85,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 88,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 90,
            "movement": -39
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": -10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 97,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": -21
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 102,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 103,
            "movement": -21
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 107,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -4
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 107,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 112,
            "movement": -82
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 118,
            "movement": -26
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 119,
            "movement": -19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 120,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": -42
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 135,
            "movement": 22
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 138,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 145,
            "movement": 11
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 148,
            "movement": 49
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 157,
            "movement": -6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 157,
            "movement": 19
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 158,
            "movement": -7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 168,
            "movement": -34
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 176,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 179,
            "movement": -23
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 180,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 189,
            "movement": -145
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 191,
            "movement": 8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 193,
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
            "position": 18,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 23,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 26,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 30,
            "movement": -3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 34,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 35,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 53,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": 4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 66,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 68,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 70,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 72,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 75,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 77,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 78,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 88,
            "movement": 11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 91,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 96,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 115,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 117,
            "movement": -18
          },
          {
            "country": "CN",
            "name": "China",
            "position": 119,
            "movement": -12
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 120,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 120,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 124,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 138,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 152,
            "movement": 11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 153,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 159,
            "movement": -11
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 165,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 173,
            "movement": -23
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 180,
            "movement": -8
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 180,
            "movement": -29
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 182,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 187,
            "movement": -6
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 26,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 33,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 46,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 58,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 59,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 61,
            "movement": 9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 63,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 63,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 66,
            "movement": 14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 67,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 68,
            "movement": 18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 75,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 80,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 80,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 89,
            "movement": 8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 94,
            "movement": 14
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 120,
            "movement": -14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 131,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 150,
            "movement": 21
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 164,
            "movement": 10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 196,
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
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": null,
            "status": "re"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 41,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": null,
            "status": "re"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 8,
            "movement": 1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 36,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 40,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 40,
            "movement": -30
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 67,
            "movement": -16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 103,
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
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": 53
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 81,
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
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 22,
            "movement": 7
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 31,
            "movement": 14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 39,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 44,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 46,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 47,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": 28
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 64,
            "movement": -2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 71,
            "movement": 37
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 79,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 83,
            "movement": -46
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 84,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 35
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 106,
            "movement": 24
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 108,
            "movement": -15
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 115,
            "movement": 19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 160,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": 24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 174,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 182,
            "movement": -10
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 188,
            "movement": -74
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
            "position": 180,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -13
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
            "country": "AO",
            "name": "Angola",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -78
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 102,
            "movement": 98
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": -25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 193,
            "movement": -107
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -4
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 89,
            "movement": 48
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 97,
            "movement": 19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 106,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 181,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 191,
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
            "position": 15,
            "movement": -7
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
            "position": 39,
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": 27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 149,
            "movement": -20
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
            "movement": -45
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 28,
            "movement": 6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 119,
            "movement": -10
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
            "position": 128,
            "movement": -28
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
            "position": 176,
            "movement": -111
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 7,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 88,
            "movement": 16
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 196,
            "movement": -35
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 1,
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 158,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 153,
            "movement": 9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 101,
            "movement": -74
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
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": 4
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
            "position": 152,
            "movement": 15
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 172,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 186,
            "movement": -23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 188,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
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
            "position": 57,
            "movement": -1
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
            "position": 72,
            "movement": -48
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
            "position": 80,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 128,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 154,
            "movement": -89
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "First",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 168,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 174,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Damages",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos Love",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
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
  