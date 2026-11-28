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
  export const liveChartsUpdated = "2026-11-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-28T07:56Z";
  
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
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": 6
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 22,
            "movement": -11
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 22,
            "movement": 24
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 25,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 26,
            "movement": 20
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 27,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 28,
            "movement": -4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 29,
            "movement": 13
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 30,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 38,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 38,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 41,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 41,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 45,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 48,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 52,
            "movement": 18
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 53,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 54,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 58,
            "movement": 8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 65,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 67,
            "movement": 12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 70,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 70,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 70,
            "movement": -29
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 70,
            "movement": 14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 73,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 73,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -13
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 77,
            "movement": 71
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 80,
            "movement": 27
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 87,
            "movement": 23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 87,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": -32
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 96,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 97,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 98,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 100,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 104,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": -24
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 110,
            "movement": -27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 111,
            "movement": 1
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 113,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 130,
            "movement": -19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 131,
            "movement": -28
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 137,
            "movement": 27
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": 6
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 153,
            "movement": 39
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 165,
            "movement": -30
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 166,
            "movement": 14
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 168,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 176,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 178,
            "movement": -24
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 180,
            "movement": 2
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": -7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 42,
            "movement": -7
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 49,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 59,
            "movement": -22
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 71,
            "movement": -13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 80,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 80,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 85,
            "movement": -17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 88,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 90,
            "movement": -12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 91,
            "movement": -16
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 95,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 130,
            "movement": 10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 135,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 138,
            "movement": -11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 142,
            "movement": -21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 143,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 149,
            "movement": -21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 160,
            "movement": -30
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 186,
            "movement": -33
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 192,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 193,
            "movement": -17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 200,
            "movement": -28
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
            "position": 32,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 39,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 40,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 44,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 70,
            "movement": 7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 87,
            "movement": -10
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 87,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 88,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 94,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 108,
            "movement": 10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 109,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 137,
            "movement": -18
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 154,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 160,
            "movement": -21
          },
          {
            "country": "CN",
            "name": "China",
            "position": 162,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 172,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 182,
            "movement": -13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -17
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 23,
            "movement": -22
          },
          {
            "country": "IN",
            "name": "India",
            "position": 29,
            "movement": -24
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 39,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 40,
            "movement": -21
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -50
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 91,
            "movement": -35
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
            "position": 27,
            "movement": 11
          },
          {
            "country": "JP",
            "name": "Japan",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 22,
            "movement": -9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 23,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 52,
            "movement": 27
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 56,
            "movement": -14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 68,
            "movement": 23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 71,
            "movement": 71
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 76,
            "movement": 81
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 85,
            "movement": -58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -16
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 91,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": -53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -19
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 123,
            "movement": -34
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 139,
            "movement": -47
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 148,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 152,
            "movement": -40
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": -42
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 170,
            "movement": 29
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 178,
            "movement": -29
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HN",
            "name": "Honduras",
            "position": 6,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 71,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 33
          },
          {
            "country": "US",
            "name": "United States",
            "position": 132,
            "movement": -36
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 155,
            "movement": -62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
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
            "position": 43,
            "movement": -32
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 78,
            "movement": -3
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
            "position": 22,
            "movement": 3
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
            "position": 77,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -10
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
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
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 172,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 155,
            "movement": -63
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -44
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
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
            "position": 136,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "MR",
            "name": "Mauritania",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": -52
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 161,
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
            "position": 12,
            "movement": 129
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -24
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
            "position": 87,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 184,
            "movement": 1
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
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 120,
            "movement": 6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 146,
            "movement": 46
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 193,
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
            "position": 179,
            "movement": -77
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 198,
            "movement": -113
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
            "position": 67,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "African Love Story",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 19
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 107,
            "movement": 62
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ce05cbc4b96c6856fa0954980a9ea9e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 133,
            "movement": -16
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
            "position": 55,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
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
            "position": 163,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 82,
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
  