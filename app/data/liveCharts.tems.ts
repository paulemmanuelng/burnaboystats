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
  export const liveChartsBuiltAt = "2026-09-18T23:39Z";
  
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 9,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 21,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 21,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 21,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 22,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 23,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 26,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 28,
            "movement": 5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 29,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 29,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 33,
            "movement": 3
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 37,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": -6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 38,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": -12
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 39,
            "movement": 10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 42,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": 12
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 48,
            "movement": 141
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 50,
            "movement": 40
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 51,
            "movement": -29
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 51,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 26
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 55,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 59,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 62,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 64,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 65,
            "movement": 47
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 68,
            "movement": -39
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 69,
            "movement": -14
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": -7
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 73,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": -29
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 80,
            "movement": -69
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 84,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 86,
            "movement": 82
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 87,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 88,
            "movement": -16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 93,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 96,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 96,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 99,
            "movement": -31
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 101,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 106,
            "movement": 39
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 106,
            "movement": 13
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 109,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 115,
            "movement": 58
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 117,
            "movement": -20
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 119,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 120,
            "movement": -18
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 127,
            "movement": -7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 135,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 139,
            "movement": -133
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 142,
            "movement": -35
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 145,
            "movement": -27
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": 27
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 151,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": -27
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 163,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 165,
            "movement": -113
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 175,
            "movement": -18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 179,
            "movement": -21
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 184,
            "movement": -1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 185,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 197,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 198,
            "movement": -18
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 13,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 53,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 55,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 60,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 64,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 66,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 74,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 74,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 80,
            "movement": -12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 83,
            "movement": -16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 89,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 91,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 96,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 103,
            "movement": -14
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 124,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 151,
            "movement": -20
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 165,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 171,
            "movement": -7
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": -2
          },
          {
            "country": "IN",
            "name": "India",
            "position": 15,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": -19
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 38,
            "movement": -7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 40,
            "movement": -17
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": -11
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 73,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 127,
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
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 68,
            "movement": -19
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 22,
            "movement": 22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 29,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": -14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 49,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 56,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 66,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -9
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 104,
            "movement": -34
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 108,
            "movement": -69
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 117,
            "movement": -11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 121,
            "movement": -9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 134,
            "movement": -63
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 139,
            "movement": -24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 156,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 160,
            "movement": -52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": 8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 179,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 183,
            "movement": -100
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 185,
            "movement": -25
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
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": 6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 97,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 107,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 116,
            "movement": -27
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 178,
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
            "movement": -4
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
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
            "country": "MG",
            "name": "Madagascar",
            "position": 48,
            "movement": 101
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 191,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
            "movement": -6
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
            "position": 113,
            "movement": 15
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -10
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 176,
            "movement": -74
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": -41
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
            "position": 145,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -28
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 200,
            "movement": -129
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
            "position": 82,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -10
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
            "position": 139,
            "movement": -87
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
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": -13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 101,
            "movement": 95
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 126,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 190,
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
            "position": 2,
            "movement": -1
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 168,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 159,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 181,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 199,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
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
            "position": 147,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
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
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -21
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 56,
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
    "title": "Lagos Love",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 74,
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
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 86,
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
  