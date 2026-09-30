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
  export const liveChartsUpdated = "2026-09-30";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-30T12:39Z";
  
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
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": -7
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 15,
            "movement": 4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": 13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 19,
            "movement": 21
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 20,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 22,
            "movement": 49
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 23,
            "movement": 67
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 25,
            "movement": 12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 26,
            "movement": 8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 26,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 29,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 29,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 30,
            "movement": 50
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 31,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 32,
            "movement": 25
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 32,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 34,
            "movement": 34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 35,
            "movement": 15
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 37,
            "movement": -4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 37,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 39,
            "movement": 24
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 39,
            "movement": 9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 40,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 41,
            "movement": 8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 43,
            "movement": 86
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": 24
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 44,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 45,
            "movement": 13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 48,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 51,
            "movement": 57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 55,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 55,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 60,
            "movement": 18
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 60,
            "movement": 31
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 64,
            "movement": 8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 71,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 72,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 73,
            "movement": -6
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 75,
            "movement": 117
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 77,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 13
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 77,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 85,
            "movement": 48
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 86,
            "movement": -20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 87,
            "movement": -8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 90,
            "movement": 16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 92,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 96,
            "movement": 33
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 102,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -46
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 113,
            "movement": -6
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 113,
            "movement": -103
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 117,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 117,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -23
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 127,
            "movement": -56
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 132,
            "movement": 1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 133,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 136,
            "movement": 7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 141,
            "movement": 36
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 146,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 148,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 150,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -59
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": 11
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 164,
            "movement": -60
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 169,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 174,
            "movement": -33
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 174,
            "movement": -46
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
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
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": 6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 17,
            "movement": 9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 17,
            "movement": 2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 18,
            "movement": 8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 18,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 23,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": 12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 25,
            "movement": 16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": 1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 30,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 33,
            "movement": 14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": 6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 36,
            "movement": 12
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 39,
            "movement": 8
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 40,
            "movement": 26
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 41,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 43,
            "movement": 6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 47,
            "movement": 13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": 17
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 51,
            "movement": 27
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 52,
            "movement": 42
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 52,
            "movement": 16
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 53,
            "movement": 26
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 54,
            "movement": 17
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 58,
            "movement": 12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 58,
            "movement": 6
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 63,
            "movement": 15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 64,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 65,
            "movement": 17
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 66,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 70,
            "movement": 33
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 85,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 89,
            "movement": 23
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 89,
            "movement": 43
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 99,
            "movement": 35
          },
          {
            "country": "IN",
            "name": "India",
            "position": 102,
            "movement": 48
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 103,
            "movement": 17
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 108,
            "movement": 16
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 113,
            "movement": 27
          },
          {
            "country": "CN",
            "name": "China",
            "position": 119,
            "movement": 23
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 125,
            "movement": 29
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 126,
            "movement": 20
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 128,
            "movement": 11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 129,
            "movement": 36
          },
          {
            "country": "FR",
            "name": "France",
            "position": 130,
            "movement": 9
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 133,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": 5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 153,
            "movement": 30
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 156,
            "movement": 35
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 17,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": 19
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 37,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": 13
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 55,
            "movement": 13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 58,
            "movement": 4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 60,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 65,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 68,
            "movement": 12
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
            "position": 71,
            "movement": 17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
            "movement": 19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 73,
            "movement": 29
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 75,
            "movement": 14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 75,
            "movement": 35
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 92,
            "movement": 28
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 98,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 110,
            "movement": 8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 116,
            "movement": 18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 135,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 140,
            "movement": 24
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 184,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 24,
            "movement": -17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 38,
            "movement": -31
          },
          {
            "country": "IN",
            "name": "India",
            "position": 51,
            "movement": -20
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 55,
            "movement": -14
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 91,
            "movement": 90
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 92,
            "movement": -15
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
            "position": 64,
            "movement": -40
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": -27
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 74,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 80,
            "movement": -24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 83,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 17,
            "movement": 14
          },
          {
            "country": "US",
            "name": "United States",
            "position": 17,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 31,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 32,
            "movement": 14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 34,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": 9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 45,
            "movement": 96
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 54,
            "movement": 91
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 55,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 75,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 82,
            "movement": 55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 22
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 98,
            "movement": 35
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 110,
            "movement": 6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 129,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 151,
            "movement": 43
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": 15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": 24
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 195,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "position": 188,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
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
            "position": 106,
            "movement": -28
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 151,
            "movement": 36
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 163,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 17
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -36
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 78,
            "movement": -7
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
            "position": 98,
            "movement": -2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 160,
            "movement": 34
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 162,
            "movement": 19
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
            "position": 120,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 73,
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
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 74
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": -72
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
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
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 57,
            "movement": 46
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": 5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 104,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 150,
            "movement": 6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 172,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": -21
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
            "position": 34,
            "movement": -8
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
            "position": 46,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": 21
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
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
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 1
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
            "position": 169,
            "movement": -13
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
            "country": "BM",
            "name": "Bermuda",
            "position": 133,
            "movement": -63
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 189,
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 149,
            "movement": -110
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 200,
            "movement": -130
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
            "position": 155,
            "movement": -42
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": -8
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
            "position": 115,
            "movement": 11
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 93
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": -57
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
            "country": "OM",
            "name": "Oman",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -25
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 192,
            "movement": null,
            "status": "new"
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
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 116,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 117,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
            "movement": 9
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 171,
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
            "position": 196,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 86,
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
  