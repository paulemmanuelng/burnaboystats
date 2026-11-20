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
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-20";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-20T07:22Z";
  
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
            "position": 9,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": 5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": 23
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": 9
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 24,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 29,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 30,
            "movement": 65
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": 4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 30,
            "movement": 41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 32,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 34,
            "movement": 8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 35,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 8
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 38,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 38,
            "movement": 2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 40,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 43,
            "movement": 28
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 43,
            "movement": -32
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": 1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 50,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 53,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 54,
            "movement": 31
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 54,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 55,
            "movement": -11
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 59,
            "movement": -24
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 60,
            "movement": -13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": 5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 60,
            "movement": 66
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 63,
            "movement": 62
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 63,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 66,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 70,
            "movement": 31
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 72,
            "movement": -14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 73,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 76,
            "movement": -45
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 78,
            "movement": 1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 78,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 80,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 87,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 88,
            "movement": -7
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 95,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 96,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 99,
            "movement": 32
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 101,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 114,
            "movement": -33
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 118,
            "movement": 29
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 127,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 132,
            "movement": -61
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 136,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": 60
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 146,
            "movement": -97
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 151,
            "movement": 46
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 152,
            "movement": 13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 156,
            "movement": -67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -6
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 171,
            "movement": -37
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 181,
            "movement": -73
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 182,
            "movement": 12
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 182,
            "movement": -53
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 184,
            "movement": -15
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 193,
            "movement": -113
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 194,
            "movement": -18
          },
          {
            "country": "SG",
            "name": "Singapore",
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
            "position": 26,
            "movement": 8
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 27,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 32,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 41,
            "movement": 11
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 42,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 52,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 53,
            "movement": 1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 59,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 67,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 74,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 82,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 85,
            "movement": -11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 92,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 101,
            "movement": -8
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 114,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 114,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 117,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 130,
            "movement": -2
          },
          {
            "country": "CN",
            "name": "China",
            "position": 141,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 143,
            "movement": 2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 155,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 168,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 171,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 176,
            "movement": 3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 187,
            "movement": -17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 194,
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
            "position": 24,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 27,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 33,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": -15
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 55,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 74,
            "movement": -29
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": -12
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 82,
            "movement": -21
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 85,
            "movement": -21
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 86,
            "movement": -30
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 101,
            "movement": -9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 109,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 119,
            "movement": -25
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 132,
            "movement": -41
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 133,
            "movement": -39
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 135,
            "movement": -54
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 139,
            "movement": -15
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 140,
            "movement": -33
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 145,
            "movement": -65
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 146,
            "movement": -20
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 165,
            "movement": -7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 20,
            "movement": -17
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 21,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 21,
            "movement": -17
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 22,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 29,
            "movement": -25
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 44,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -16
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 59,
            "movement": -19
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 67,
            "movement": -65
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 198,
            "movement": -153
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": 7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 88,
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
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 16,
            "movement": 16
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 29,
            "movement": 9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 43,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -34
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 63,
            "movement": 58
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 64,
            "movement": 1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 67,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 68,
            "movement": -7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 73,
            "movement": 107
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 96,
            "movement": -24
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 99,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 117,
            "movement": -23
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 122,
            "movement": 55
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 124,
            "movement": -32
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 124,
            "movement": 22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 132,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 139,
            "movement": -48
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 158,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 174,
            "movement": -6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": -62
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -33
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 96,
            "movement": 99
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 20
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 112,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -104
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
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
            "country": "SN",
            "name": "Senegal",
            "position": 193,
            "movement": -48
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
            "position": 132,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 183,
            "movement": 11
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
            "position": 57,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 14,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 68,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 90
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 126,
            "movement": 47
          },
          {
            "country": "US",
            "name": "United States",
            "position": 137,
            "movement": 5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 18
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 172,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": -33
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 3,
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
            "position": 18,
            "movement": 46
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 40,
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
            "position": 7,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
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
            "position": 83,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -13
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
            "position": 60,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 90,
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 183,
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
            "position": 16,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -85
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 47,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 155,
            "movement": 21
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
            "position": 140,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 83,
            "movement": 29
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 176,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 96,
            "movement": -45
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 107,
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
            "position": 94,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 94,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": 34
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 184,
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
            "position": 8,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 182,
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
            "country": "LT",
            "name": "Lithuania",
            "position": 95,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
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
            "position": 124,
            "movement": -45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Interference",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 97,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
    "firstSeen": "2026-01-01",
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
  