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
  export const liveChartsUpdated = "2026-09-25";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-25T17:49Z";
  
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
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 9,
            "movement": 186
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 38
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 25,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 26,
            "movement": 21
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 26,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 26,
            "movement": -13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 26,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 27,
            "movement": 3
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 30,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 33,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": 2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 38,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 40,
            "movement": 27
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 40,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 42,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 44,
            "movement": -16
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 45,
            "movement": 9
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 46,
            "movement": 130
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 47,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": 8
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 49,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 49,
            "movement": 126
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 52,
            "movement": 19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 57,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 57,
            "movement": -17
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 27
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 65,
            "movement": 60
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 65,
            "movement": -22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 75,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 76,
            "movement": 21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 77,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 86,
            "movement": 11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 88,
            "movement": -8
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 88,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": 13
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 90,
            "movement": 52
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": 49
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 96,
            "movement": -44
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 98,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 103,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 104,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 105,
            "movement": -32
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 105,
            "movement": -16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 106,
            "movement": 22
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 107,
            "movement": -14
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 116,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 116,
            "movement": 44
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 129,
            "movement": -13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 130,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 133,
            "movement": -27
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 133,
            "movement": -5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 136,
            "movement": -68
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 148,
            "movement": -34
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 150,
            "movement": -96
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 164,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -119
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 167,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 169,
            "movement": 6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 174,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 190,
            "movement": -17
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 191,
            "movement": -47
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 192,
            "movement": -39
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 200,
            "movement": 0
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
            "position": 16,
            "movement": 6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 29,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 31,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": 4
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 36,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 36,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 41,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 47,
            "movement": 5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 52,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 54,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 58,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 67,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 73,
            "movement": 11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 76,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 81,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 84,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 100,
            "movement": 1
          },
          {
            "country": "CN",
            "name": "China",
            "position": 112,
            "movement": 9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 112,
            "movement": 6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 115,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 125,
            "movement": 12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 127,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 134,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 142,
            "movement": 7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 144,
            "movement": -14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 164,
            "movement": -7
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 167,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 178,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 186,
            "movement": 1
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
            "position": 12,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 42,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": -11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": -14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 65,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 21
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 74,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": -13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 78,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 84,
            "movement": -29
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 85,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 87,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 106,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 108,
            "movement": -15
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 114,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 151,
            "movement": -17
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 156,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": -33
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 197,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": 83
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 4,
            "movement": 31
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 7,
            "movement": 3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 8,
            "movement": -7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 21,
            "movement": 25
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": 36
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 56,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 87,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 119,
            "movement": -110
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 138,
            "movement": null,
            "status": "new"
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 11,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 33,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -4
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
            "position": 48,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
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
            "position": 17,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 20,
            "movement": 47
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 21,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 22,
            "movement": -3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 34,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 52,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": -49
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 66,
            "movement": 54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -25
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 83,
            "movement": -10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": -23
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 102,
            "movement": -28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 106,
            "movement": 34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": -21
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 129,
            "movement": 40
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 131,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 137,
            "movement": 40
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 138,
            "movement": -13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 141,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 176,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 178,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 185,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "position": 184,
            "movement": -5
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
            "position": 10,
            "movement": 6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 50,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 60,
            "movement": 132
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 83,
            "movement": -19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 104,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
            "movement": -34
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
            "position": 27,
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
            "position": 43,
            "movement": 1
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
            "position": 41,
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
            "position": 12,
            "movement": -2
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 39,
            "movement": -19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 95,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 104,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 198,
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
            "country": "MU",
            "name": "Mauritius",
            "position": 37,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -94
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
            "position": 183,
            "movement": -38
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
            "position": 66,
            "movement": -8
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
            "position": 81,
            "movement": null,
            "status": "new"
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 69,
            "movement": 63
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 129,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 199,
            "movement": -161
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 46,
            "movement": -41
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 97,
            "movement": 71
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 32,
            "movement": 111
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 57,
            "movement": 35
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 159,
            "movement": -88
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
            "position": 9,
            "movement": -3
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 118,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 31
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 159,
            "movement": -29
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 174,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
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
            "position": 150,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -12
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
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 188,
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
            "movement": -1
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
            "position": 34,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 69,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -1
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
            "position": 191,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need - A COLORS SHOW",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 83,
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
            "position": 172,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 200,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 87,
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
  