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
  export const liveChartsUpdated = "2026-11-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-10T19:47Z";
  
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
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 16,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": 7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": -8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 20,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 14
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 22,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 23,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 25,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 26,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 26,
            "movement": 86
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 28,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 16
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 31,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 31,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": -7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 33,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 73
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 34,
            "movement": -6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 35,
            "movement": 5
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 37,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 38,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": 8
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 40,
            "movement": -10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 41,
            "movement": 10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 42,
            "movement": 19
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 43,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 43,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 48,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 50,
            "movement": -21
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 52,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 54,
            "movement": -12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": 15
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 57,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 59,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 63,
            "movement": 24
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 64,
            "movement": -9
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 66,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 67,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 73,
            "movement": 34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 78,
            "movement": 11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 78,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": -21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 80,
            "movement": -8
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 82,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 83,
            "movement": 22
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 83,
            "movement": 21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 84,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 85,
            "movement": -42
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 90,
            "movement": -9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 92,
            "movement": 32
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 93,
            "movement": 90
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 104,
            "movement": 6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 108,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 123,
            "movement": -20
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 130,
            "movement": -8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 133,
            "movement": 8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 147,
            "movement": -52
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 150,
            "movement": 36
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 155,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 156,
            "movement": 25
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 158,
            "movement": -14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 159,
            "movement": 20
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 172,
            "movement": -23
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": 6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 186,
            "movement": -178
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 192,
            "movement": -8
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
            "position": 24,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 25,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 33,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 42,
            "movement": 4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 51,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 56,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 65,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 71,
            "movement": -13
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 72,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": 8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 85,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 86,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 100,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 109,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 114,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 118,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 139,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 140,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 141,
            "movement": -7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 144,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 147,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 154,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 158,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 160,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": -2
          },
          {
            "country": "CN",
            "name": "China",
            "position": 172,
            "movement": 28
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 176,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 190,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 195,
            "movement": -21
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
            "position": 23,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 33,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 35,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 39,
            "movement": 10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 53,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 69,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 73,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 77,
            "movement": 32
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 79,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 82,
            "movement": 11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 84,
            "movement": 12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 85,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 93,
            "movement": 15
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 101,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 102,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 109,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 118,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 121,
            "movement": 32
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 127,
            "movement": 45
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 132,
            "movement": 13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 140,
            "movement": 23
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 165,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 174,
            "movement": -25
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 182,
            "movement": -5
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
            "position": 12,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 30,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 45,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MD",
            "name": "Moldova",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": 0
          },
          {
            "country": "IN",
            "name": "India",
            "position": 41,
            "movement": -13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 67,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 140,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": 50
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": 4
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
            "country": "US",
            "name": "United States",
            "position": 19,
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 33,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 40,
            "movement": 8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 40,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 32
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 50,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 9
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 70,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": 6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 96,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 101,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": 13
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 130,
            "movement": -18
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 131,
            "movement": -25
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 140,
            "movement": -72
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 146,
            "movement": -36
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": -45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 192,
            "movement": -11
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
            "position": 186,
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 40,
            "movement": 51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 98
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 52,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 60,
            "movement": 98
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 63
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 113
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -15
          },
          {
            "country": "US",
            "name": "United States",
            "position": 109,
            "movement": -25
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 113,
            "movement": -13
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": -80
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 138,
            "movement": 41
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 142,
            "movement": -108
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -63
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 200,
            "movement": -98
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -83
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
            "position": 60,
            "movement": -10
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
            "position": 38,
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
            "position": 8,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 81,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": 41
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 131,
            "movement": -73
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -16
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -29
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 164,
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
            "position": 123,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 194,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 89,
            "movement": 30
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 96,
            "movement": -31
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 109,
            "movement": 52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": 45
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 184,
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 118,
            "movement": -39
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 134,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
            "movement": -46
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
            "position": 4,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
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
            "position": 147,
            "movement": 44
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
            "position": 88,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
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
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "country": "MR",
            "name": "Mauritania",
            "position": 22,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": 28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": 73
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 109,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 44
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
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
            "position": 79,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 150,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": -9
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
            "position": 90,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ice T",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Unfortunate",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -83
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
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
            "position": 193,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 199,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -104
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
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
            "position": 52,
            "movement": 0
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
            "movement": 0
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
  