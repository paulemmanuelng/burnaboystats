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
  export const liveChartsUpdated = "2026-09-17";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-17T17:08Z";
  
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": 6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 10,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 13,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": 6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 20,
            "movement": 32
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 21,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 21,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 21,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 23,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 23,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": 40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 27,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": 45
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 32,
            "movement": 13
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 33,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 33,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 35,
            "movement": 34
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": -3
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 40,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 43,
            "movement": -31
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 44,
            "movement": 30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -23
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 51,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 51,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 53,
            "movement": -34
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 55,
            "movement": 3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 56,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 58,
            "movement": -26
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 62,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 64,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 65,
            "movement": 12
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 73,
            "movement": -21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 74,
            "movement": 5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": -25
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 79,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 79,
            "movement": 7
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 79,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": 20
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 81,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 82,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": 5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 88,
            "movement": 40
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 90,
            "movement": -25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 92,
            "movement": -34
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 92,
            "movement": 39
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 97,
            "movement": 25
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 100,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 105,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -57
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 116,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 134,
            "movement": -64
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 141,
            "movement": -33
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 146,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 147,
            "movement": -100
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 151,
            "movement": -9
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 151,
            "movement": -11
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 156,
            "movement": 28
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 156,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 157,
            "movement": -79
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 166,
            "movement": 34
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 167,
            "movement": 23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 168,
            "movement": -121
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 176,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 177,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 192,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 197,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 199,
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
            "position": 15,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 21,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 25,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 27,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 34,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 38,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": -13
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 52,
            "movement": 15
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 64,
            "movement": -22
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 66,
            "movement": -32
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 67,
            "movement": -22
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 70,
            "movement": -26
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 71,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 72,
            "movement": -39
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 76,
            "movement": -52
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 77,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": 17
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 95,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 97,
            "movement": -14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 99,
            "movement": -13
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 99,
            "movement": -15
          },
          {
            "country": "CN",
            "name": "China",
            "position": 107,
            "movement": 38
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 112,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 116,
            "movement": -23
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 125,
            "movement": -32
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 126,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 135,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 147,
            "movement": -31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 148,
            "movement": -47
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 150,
            "movement": 38
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 151,
            "movement": 48
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 160,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 163,
            "movement": -51
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 172,
            "movement": -28
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 181,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": -28
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 25,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 26,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 29,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 39,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 42,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -13
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 58,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 59,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 69,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 69,
            "movement": -20
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 69,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 70,
            "movement": 10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 77,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 80,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 80,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 86,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 97,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 106,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 108,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 123,
            "movement": 13
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 171,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 174,
            "movement": -11
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 13,
            "movement": -9
          },
          {
            "country": "IN",
            "name": "India",
            "position": 17,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 30,
            "movement": -29
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 32,
            "movement": -21
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 55,
            "movement": -18
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 142,
            "movement": -48
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 144,
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
            "position": 12,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 29,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 37,
            "movement": 30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 37,
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": -9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": 33
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 48,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -14
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 62,
            "movement": -17
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 66,
            "movement": 20
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 70,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 49
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 93,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -27
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 108,
            "movement": -61
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 130,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 134,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 165,
            "movement": -15
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 171,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": -33
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 172,
            "movement": 17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 150,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -12
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
            "position": 167,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 129,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": -13
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 136,
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
            "country": "TD",
            "name": "Chad",
            "position": 155,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 27,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 12
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 156,
            "movement": -74
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 28
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 169,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": -28
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 200,
            "movement": -19
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
            "country": "TD",
            "name": "Chad",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 17,
            "movement": 9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 107,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 116,
            "movement": -52
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 137,
            "movement": -94
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": -68
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 180,
            "movement": 14
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
            "position": 8,
            "movement": -1
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
            "position": 40,
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
            "position": 129,
            "movement": -46
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": -31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 151,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 174,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
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
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 109,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 100,
            "movement": 7
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
            "position": 65,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 13,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 167,
            "movement": -12
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
            "position": 188,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 161,
            "movement": 32
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 195,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": 5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 163,
            "movement": -30
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 181,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VE",
            "name": "Venezuela",
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
            "position": 56,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 10,
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
            "position": 122,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "First",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 139,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 55
          }
        ]
      },
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
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 182,
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
    "title": "Is There A Reason",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
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
    "title": "Mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
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
    "title": "Try Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 24,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 29,
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
    "title": "I'm Not Sure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 30,
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
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 65,
            "movement": 83
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
            "position": 70,
            "movement": 17
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
            "position": 116,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Found",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 179,
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "LY",
            "name": "Libya",
            "position": 184,
            "movement": -142
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 1
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
  