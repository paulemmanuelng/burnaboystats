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
  export const liveChartsBuiltAt = "2026-10-12T15:32Z";
  
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
            "position": 16,
            "movement": 1
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
            "position": 49,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 65,
            "movement": 8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 66,
            "movement": -21
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 74,
            "movement": 28
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
            "position": 112,
            "movement": 22
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
            "country": "NO",
            "name": "Norway",
            "position": 140,
            "movement": -27
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
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": -4
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 177,
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
            "country": "US",
            "name": "United States",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 7,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": -3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 11,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 13,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 15,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 15,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 19,
            "movement": -5
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 19,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 20,
            "movement": -3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 20,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": -3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 25,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 26,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 27,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 32,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 38,
            "movement": -16
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 39,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 40,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 40,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 47,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 52,
            "movement": -8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 54,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 54,
            "movement": -6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 55,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 55,
            "movement": -7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 56,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 60,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 62,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 63,
            "movement": -17
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 67,
            "movement": -1
          },
          {
            "country": "CN",
            "name": "China",
            "position": 71,
            "movement": -16
          },
          {
            "country": "IN",
            "name": "India",
            "position": 74,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": 1
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 74,
            "movement": -11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 89,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 94,
            "movement": -11
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 99,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 101,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 102,
            "movement": -7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 104,
            "movement": -22
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 111,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 114,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 117,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
            "movement": -4
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
            "country": "PL",
            "name": "Poland",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 26,
            "movement": -13
          },
          {
            "country": "IN",
            "name": "India",
            "position": 27,
            "movement": 19
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 43,
            "movement": -16
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 45,
            "movement": -10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 56,
            "movement": -49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -56
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 64,
            "movement": -48
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 66,
            "movement": -41
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 73,
            "movement": -16
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 78,
            "movement": -12
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 85,
            "movement": -11
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 171,
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
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
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
            "position": 13,
            "movement": -1
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
            "position": 77,
            "movement": -43
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 22,
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
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 7,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 24,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 25,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 32,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 42,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 50,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 51,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 59,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 62,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": -11
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
            "position": 87,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 89,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": -19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 101,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 111,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 134,
            "movement": 16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 143,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -18
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
            "position": 37,
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
            "position": 83,
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
            "movement": -8
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 69,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 112,
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
            "position": 73,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 140,
            "movement": -31
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 185,
            "movement": -43
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 189,
            "movement": -52
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
            "position": 104,
            "movement": -3
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 3,
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
            "position": 41,
            "movement": 0
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 116,
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
            "position": 79,
            "movement": 2
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
            "position": 45,
            "movement": -32
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
            "position": 26,
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
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
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
    "title": "Live Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0971ad6a3336214c0c05c92448b2af65/500x500-000000-80-0-0.jpg"
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
            "position": 77,
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
  