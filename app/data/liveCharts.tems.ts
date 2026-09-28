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
  export const liveChartsUpdated = "2026-09-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-28T23:19Z";
  
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
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": -2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 10,
            "movement": 63
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 19,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 21,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 26,
            "movement": 5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 29,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 30,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 13
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 33,
            "movement": 13
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 33,
            "movement": 67
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 34,
            "movement": 55
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 34,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 35,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 37,
            "movement": 8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 39,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 40,
            "movement": -23
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 40,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 49,
            "movement": -17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 50,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 51,
            "movement": 2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 55,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 58,
            "movement": 29
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 58,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 139
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 63,
            "movement": 26
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 67,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 68,
            "movement": -21
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 69,
            "movement": -8
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 71,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 71,
            "movement": -22
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 73,
            "movement": 25
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 76,
            "movement": 20
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 78,
            "movement": 14
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": 2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 79,
            "movement": 88
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 80,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 80,
            "movement": 26
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 81,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 81,
            "movement": 13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 90,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 90,
            "movement": -67
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 106
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 91,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -44
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 104,
            "movement": 62
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 106,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 107,
            "movement": 46
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 108,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 115,
            "movement": 23
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 117,
            "movement": -79
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 121,
            "movement": -107
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 124,
            "movement": 7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 128,
            "movement": -15
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 129,
            "movement": -1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 131,
            "movement": -33
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 133,
            "movement": 10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 133,
            "movement": -8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 141,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 143,
            "movement": -33
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 144,
            "movement": 47
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 146,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 169,
            "movement": 12
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 179,
            "movement": -25
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
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
            "country": "MY",
            "name": "Malaysia",
            "position": 15,
            "movement": 6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": 12
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": 9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 24,
            "movement": 6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 28,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 31,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": 5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 35,
            "movement": 11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 37,
            "movement": 124
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 43,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 53,
            "movement": 21
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 56,
            "movement": 12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 61,
            "movement": 8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 65,
            "movement": 6
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 71,
            "movement": 77
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 74,
            "movement": 18
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 76,
            "movement": 9
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 84,
            "movement": 31
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 86,
            "movement": 27
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 86,
            "movement": 102
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 90,
            "movement": 27
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 91,
            "movement": 26
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 94,
            "movement": 42
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 112,
            "movement": 32
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 116,
            "movement": 52
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 120,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 125,
            "movement": 21
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 130,
            "movement": 23
          },
          {
            "country": "CN",
            "name": "China",
            "position": 133,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 142,
            "movement": 47
          },
          {
            "country": "FR",
            "name": "France",
            "position": 143,
            "movement": 31
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 150,
            "movement": 20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
            "movement": 11
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
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
            "position": 11,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 17,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": 10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 38,
            "movement": 20
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": 16
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 52,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 56,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 58,
            "movement": 24
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 62,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 63,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 67,
            "movement": 12
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 68,
            "movement": 18
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 80,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 88,
            "movement": 21
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 88,
            "movement": 23
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 89,
            "movement": 17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 90,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 93,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 102,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 110,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 118,
            "movement": 20
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 120,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 134,
            "movement": 35
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 137,
            "movement": 19
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 164,
            "movement": 20
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 29,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 35,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 47,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -13
          },
          {
            "country": "IN",
            "name": "India",
            "position": 17,
            "movement": 13
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 30,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 79
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": 31
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 68,
            "movement": -19
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 74,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -75
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 180,
            "movement": 16
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
            "position": 44,
            "movement": 51
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 98,
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
            "position": 20,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 23,
            "movement": 30
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 28,
            "movement": 12
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 31,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 41,
            "movement": 70
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 46,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 48,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 17
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 50,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 73,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 61
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 116,
            "movement": -27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 130,
            "movement": 40
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 133,
            "movement": -22
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 137,
            "movement": -25
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 145,
            "movement": 54
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 160,
            "movement": 31
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 193,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -2
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 41,
            "movement": -11
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 63,
            "movement": 5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 96,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 156,
            "movement": 18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 156,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 22,
            "movement": -5
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
            "position": 44,
            "movement": -4
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
            "position": 86,
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
            "position": 13,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 131,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 170,
            "movement": 20
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
            "position": 131,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 78,
            "movement": -14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 157,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 187,
            "movement": -53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 1,
            "movement": 142
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 68,
            "movement": -11
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
            "position": 93,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": 41
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
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
            "position": 82,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": 0
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -77
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
            "position": 156,
            "movement": 4
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
            "position": 163,
            "movement": 19
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
            "country": "BM",
            "name": "Bermuda",
            "position": 70,
            "movement": 10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NP",
            "name": "Nepal",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 70,
            "movement": 48
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 129,
            "movement": -77
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 182,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -56
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
            "position": 126,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 115,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 88,
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
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Try Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -77
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr Rebel",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -83
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d45215beb1417c79c9868de1f58b80eb/500x500-000000-80-0-0.jpg"
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
            "position": 190,
            "movement": null,
            "status": "new"
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
            "position": 86,
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
  