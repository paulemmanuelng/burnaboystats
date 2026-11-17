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
  export const liveChartsUpdated = "2026-11-17";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-17T07:59Z";
  
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
            "position": 3,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 13,
            "movement": 187
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 13,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 14,
            "movement": 7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": 54
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 27,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 27,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 29,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": 84
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 35,
            "movement": 9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 43,
            "movement": 88
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": -21
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 45,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 47,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 47,
            "movement": 2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 47,
            "movement": 29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 50,
            "movement": -23
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 51,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 52,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 54,
            "movement": 32
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 54,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 15
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 54,
            "movement": -18
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 54,
            "movement": -15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 57,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 58,
            "movement": 24
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 58,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 59,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 64,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 66,
            "movement": -52
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 69,
            "movement": 18
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 74,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 75,
            "movement": 8
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 75,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 78,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 78,
            "movement": 113
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 80,
            "movement": 61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 83,
            "movement": 6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 89,
            "movement": -78
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 93,
            "movement": -54
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 93,
            "movement": -46
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 94,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 95,
            "movement": 40
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": 13
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 97,
            "movement": 59
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 98,
            "movement": 55
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 100,
            "movement": 22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 104,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 106,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 110,
            "movement": -8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 114,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": -13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 123,
            "movement": 2
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 126,
            "movement": 21
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 133,
            "movement": 17
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 138,
            "movement": -16
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 139,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 150,
            "movement": 13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 151,
            "movement": 10
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 152,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 153,
            "movement": 32
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 166,
            "movement": -129
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 176,
            "movement": -22
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 180,
            "movement": 11
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 188,
            "movement": -33
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 194,
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
            "country": "ID",
            "name": "Indonesia",
            "position": 32,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 32,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 35,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 47,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 48,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": -10
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 53,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 65,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 68,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 80,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 82,
            "movement": -9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 92,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 95,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 104,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 113,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 118,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 118,
            "movement": -1
          },
          {
            "country": "CN",
            "name": "China",
            "position": 139,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 147,
            "movement": 14
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 148,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 163,
            "movement": -12
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 174,
            "movement": 8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 175,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 180,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 184,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 197,
            "movement": -8
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
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": 18
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 45,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 58,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 73,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 76,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 77,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 83,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 90,
            "movement": 13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 91,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 96,
            "movement": 15
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 104,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 108,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 128,
            "movement": 32
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 142,
            "movement": 12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 147,
            "movement": 10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 148,
            "movement": 19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 149,
            "movement": 30
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 165,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 174,
            "movement": -14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 185,
            "movement": 13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 200,
            "movement": 0
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
            "position": 9,
            "movement": 21
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 9,
            "movement": -7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 21,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 9
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 28,
            "movement": 41
          },
          {
            "country": "IN",
            "name": "India",
            "position": 33,
            "movement": 25
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": 25
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 72,
            "movement": -10
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
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
            "country": "PT",
            "name": "Portugal",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 83,
            "movement": -60
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
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 32,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 40
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 47,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 62,
            "movement": 100
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 66,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 69,
            "movement": -4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 70,
            "movement": 64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": 28
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 78,
            "movement": 99
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 120,
            "movement": -28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 121,
            "movement": -10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 124,
            "movement": 2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 161,
            "movement": 11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": 6
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": 46
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 55,
            "movement": -13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 134,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": -15
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 197,
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
            "country": "BZ",
            "name": "Belize",
            "position": 20,
            "movement": 0
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
            "position": 65,
            "movement": 1
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
            "position": 66,
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
            "country": "GD",
            "name": "Grenada",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 35
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 119,
            "movement": 16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -98
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "position": 21,
            "movement": -13
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 104,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
            "movement": -10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "position": 17,
            "movement": -13
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 87
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 29,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 32,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 155,
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
            "country": "MR",
            "name": "Mauritania",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "ID",
            "name": "Indonesia",
            "position": 42,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 185,
            "movement": 13
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 196,
            "movement": -19
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
            "position": 86,
            "movement": null,
            "status": "new"
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
            "country": "BM",
            "name": "Bermuda",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 177,
            "movement": -45
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 181,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": 3
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
            "position": 28,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 75,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -4
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
            "position": 189,
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
            "country": "BB",
            "name": "Barbados",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 182,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
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
    "title": "Found",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-16",
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
            "position": 65,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-17",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-16",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": -4
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
  