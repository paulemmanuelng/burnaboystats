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
  export const liveChartsUpdated = "2026-11-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-19T07:31Z";
  
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 11,
            "movement": 68
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 15,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 21,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 23,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 29,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 31,
            "movement": -24
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 32,
            "movement": 20
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 35,
            "movement": 7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 35,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 38
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 38,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 39,
            "movement": -24
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 40,
            "movement": -10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 42,
            "movement": -5
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 42,
            "movement": -11
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 42,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 44,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 44,
            "movement": 14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 45,
            "movement": 19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 46,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 46,
            "movement": -12
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 47,
            "movement": 22
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 49,
            "movement": 116
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 57,
            "movement": 3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 58,
            "movement": 79
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 65,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -10
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 69,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 71,
            "movement": -41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 71,
            "movement": 16
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 71,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 77,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 79,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 79,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 80,
            "movement": -30
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 81,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": -7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 81,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 83,
            "movement": -21
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 85,
            "movement": 14
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 89,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 93,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 94,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 95,
            "movement": 47
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": -57
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": -15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 108,
            "movement": 17
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 109,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 123,
            "movement": -63
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 125,
            "movement": -37
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 126,
            "movement": -46
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 127,
            "movement": -21
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 129,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 131,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 134,
            "movement": -18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 136,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 139,
            "movement": -20
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 141,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 174,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 176,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 185,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 192,
            "movement": -9
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 194,
            "movement": -16
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 197,
            "movement": -43
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 198,
            "movement": -32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 200,
            "movement": -23
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 23,
            "movement": 8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": 30
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 56,
            "movement": 16
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 61,
            "movement": 15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 64,
            "movement": 12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 64,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 13
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 80,
            "movement": 52
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 81,
            "movement": 63
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 91,
            "movement": 29
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 92,
            "movement": 19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 94,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 94,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 107,
            "movement": 25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 114,
            "movement": -14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 124,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 126,
            "movement": 12
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 130,
            "movement": -49
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 158,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 187,
            "movement": 9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 192,
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
            "position": 29,
            "movement": 3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 34,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 43,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 52,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 53,
            "movement": -3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 53,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 54,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 68,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 73,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 74,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 84,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 93,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 96,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 110,
            "movement": 8
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 111,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 119,
            "movement": -15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 128,
            "movement": -10
          },
          {
            "country": "CN",
            "name": "China",
            "position": 143,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 145,
            "movement": 39
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 150,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 167,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 168,
            "movement": -21
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 170,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 171,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 179,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 4,
            "movement": 72
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 12,
            "movement": 15
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": 12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 34,
            "movement": -13
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 40,
            "movement": -16
          },
          {
            "country": "IN",
            "name": "India",
            "position": 45,
            "movement": 141
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 90,
            "movement": -13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 92,
            "movement": -79
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
            "position": 22,
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
            "country": "US",
            "name": "United States",
            "position": 15,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 11
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 32,
            "movement": 46
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 38,
            "movement": 15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 46,
            "movement": 2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 59,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 61,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 65,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": -11
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 72,
            "movement": 97
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 72,
            "movement": 19
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 87,
            "movement": 34
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 91,
            "movement": 44
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 94,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 120,
            "movement": -13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 121,
            "movement": -47
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 124,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 143,
            "movement": -67
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 143,
            "movement": -24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 146,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": 17
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 168,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 177,
            "movement": -110
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -4
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
            "position": 175,
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
            "position": 21,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 57,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 102
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 141,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": 12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 173,
            "movement": -74
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": -25
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -83
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 199,
            "movement": -48
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
            "position": 33,
            "movement": -13
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
            "position": 64,
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
            "position": 17,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 116
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 60,
            "movement": 83
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": 8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 195,
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
            "position": 47,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 114,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 4
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 154,
            "movement": -109
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 167,
            "movement": -43
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
            "position": 50,
            "movement": -6
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
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 1,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 1,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 98,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 122,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
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
            "position": 48,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 176,
            "movement": 9
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
            "position": 170,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 190,
            "movement": -77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 193,
            "movement": 0
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
            "position": 51,
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
            "movement": 12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": -5
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
            "position": 68,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 152,
            "movement": -72
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 174,
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
            "position": 56,
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
    "title": "First",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I'm Not Sure",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos Love",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mine",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Is There A Reason",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 50,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 196,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-17",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
  