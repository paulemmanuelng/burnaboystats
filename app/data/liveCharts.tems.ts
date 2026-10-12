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
  export const liveChartsUpdated = "2026-10-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-12T06:03Z";
  
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 25,
            "movement": -8
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 25,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 28,
            "movement": -2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 31,
            "movement": -9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 32,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 32,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 36,
            "movement": -19
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 37,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 37,
            "movement": -20
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 38,
            "movement": 20
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 38,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 38,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 39,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 47,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 49,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 51,
            "movement": -7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 52,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 15
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 56,
            "movement": -8
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 56,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 62,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 66,
            "movement": -21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 78,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": 11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 79,
            "movement": 49
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 80,
            "movement": -4
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 82,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 83,
            "movement": -32
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 84,
            "movement": 61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": 13
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 87,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 89,
            "movement": -23
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 89,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": 10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 99,
            "movement": -26
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 100,
            "movement": 25
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 100,
            "movement": 9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 111,
            "movement": -37
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 114,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 121,
            "movement": -40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 127,
            "movement": -23
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 128,
            "movement": -13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 134,
            "movement": -10
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 136,
            "movement": 31
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 136,
            "movement": -86
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 140,
            "movement": -6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 141,
            "movement": 31
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 149,
            "movement": -19
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 150,
            "movement": -53
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 160,
            "movement": -24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 161,
            "movement": -26
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 166,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -51
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 173,
            "movement": -7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 180,
            "movement": -69
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 180,
            "movement": -15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 182,
            "movement": 1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -14
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 197,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 5,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 10,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 11,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 12,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 13,
            "movement": 1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 13,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": -3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 16,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 18,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 21,
            "movement": -3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 22,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 22,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 25,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 26,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 31,
            "movement": -3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 32,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 35,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 39,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 41,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 44,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 46,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 48,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 48,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 48,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 50,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 50,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -6
          },
          {
            "country": "CN",
            "name": "China",
            "position": 55,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 57,
            "movement": -11
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 63,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 66,
            "movement": 11
          },
          {
            "country": "IN",
            "name": "India",
            "position": 68,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 75,
            "movement": -14
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 82,
            "movement": 7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 83,
            "movement": -11
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 89,
            "movement": 3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 90,
            "movement": -6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 95,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 95,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": -17
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 113,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": -35
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 187,
            "movement": -52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 197,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -26
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 17,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 29,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": 7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": 17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 53,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 54,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 69,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 70,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 70,
            "movement": 36
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 71,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 82,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 89,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 93,
            "movement": 10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 93,
            "movement": 5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 96,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 101,
            "movement": 16
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 102,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": 13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 107,
            "movement": -12
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 124,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 134,
            "movement": 26
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 139,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 149,
            "movement": 18
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
            "position": 5,
            "movement": 56
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 9,
            "movement": 9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 21,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 42,
            "movement": -16
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 42,
            "movement": -9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 46,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 50,
            "movement": -48
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 59,
            "movement": -42
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 69,
            "movement": -19
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 78,
            "movement": -15
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 81,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 107,
            "movement": 71
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
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 0
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 4
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
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 4
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
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 20,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 30,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 78,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 85,
            "movement": 13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 89,
            "movement": -31
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 94,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 108,
            "movement": -44
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 117,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": -48
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 132,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 11
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 142,
            "movement": -106
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 153,
            "movement": -40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 168,
            "movement": 2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 172,
            "movement": -45
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 187,
            "movement": -69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "BY",
            "name": "Belarus",
            "position": 74,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 20,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 32,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 41,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 47,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 51,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 63,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 80,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 89,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 90,
            "movement": 14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 105,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 137,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 150,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 199,
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
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": 68
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 108,
            "movement": 70
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 139,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 181,
            "movement": -67
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 194,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 41,
            "movement": -17
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 67,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -10
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
            "position": 68,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 109,
            "movement": -18
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 137,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 142,
            "movement": -22
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
            "position": 185,
            "movement": 12
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
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": -35
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 26
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 134,
            "movement": -68
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 140,
            "movement": -89
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": -31
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 143,
            "movement": -124
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 198,
            "movement": -96
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
            "position": 86,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "movement": 3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 91,
            "movement": -19
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 94,
            "movement": -32
          },
          {
            "country": "US",
            "name": "United States",
            "position": 110,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 197,
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
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 76,
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 2,
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
            "position": 41,
            "movement": 4
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
            "movement": 0
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 137,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -12
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 177,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 186,
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
            "position": 140,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 101,
            "movement": 99
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": 25
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -20
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 185,
            "movement": -60
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 185,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 5
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
            "position": 180,
            "movement": 14
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
            "position": 138,
            "movement": 44
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 55,
            "movement": 117
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 157,
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
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -12
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
            "position": 200,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 135,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 36
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Looku Looku",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8bdc17b8c3975562fbbb659adbfb1fac/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "iTunes",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Live Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0971ad6a3336214c0c05c92448b2af65/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 180,
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
            "position": 84,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
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
  