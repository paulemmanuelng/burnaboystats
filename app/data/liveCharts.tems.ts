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
  export const liveChartsUpdated = "2026-10-14";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-14T21:44Z";
  
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
            "position": 10,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 11,
            "movement": 6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 11,
            "movement": 12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": 9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 21,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 21,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 22,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 23,
            "movement": -13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 23,
            "movement": 168
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 26,
            "movement": 8
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 28,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 30,
            "movement": -6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 31,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": 11
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 33,
            "movement": 26
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 34,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 35,
            "movement": 10
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 36,
            "movement": 45
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 37,
            "movement": 13
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 37,
            "movement": -10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": 33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 38,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": 10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": 3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 43,
            "movement": -36
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 44,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 49,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 58,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 60,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 60,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 62,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 64,
            "movement": -12
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 64,
            "movement": -18
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 68,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 77,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -33
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 81,
            "movement": -15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 81,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": 27
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 83,
            "movement": 46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": 36
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 90,
            "movement": 15
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 96,
            "movement": 31
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 97,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 98,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 109,
            "movement": 19
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 115,
            "movement": -32
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 120,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": -42
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 131,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 133,
            "movement": 29
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 135,
            "movement": -19
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 137,
            "movement": -65
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 137,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 141,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 143,
            "movement": -7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 149,
            "movement": -19
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 153,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 158,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 161,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 164,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -37
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 169,
            "movement": -59
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 172,
            "movement": -53
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 179,
            "movement": -69
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 182,
            "movement": -63
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 183,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 184,
            "movement": -108
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 187,
            "movement": -110
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
            "position": 2,
            "movement": -1
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 11,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 11,
            "movement": -3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 17,
            "movement": -4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 17,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 22,
            "movement": -1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 24,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 26,
            "movement": -2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 32,
            "movement": -5
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 33,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 34,
            "movement": -5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 36,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 39,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 41,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 45,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 46,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 49,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 49,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 50,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 52,
            "movement": -20
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 60,
            "movement": -11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 63,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 64,
            "movement": -12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 67,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 71,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 72,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 78,
            "movement": -14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 79,
            "movement": -16
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 79,
            "movement": -13
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 80,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 86,
            "movement": -18
          },
          {
            "country": "CN",
            "name": "China",
            "position": 88,
            "movement": -12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 91,
            "movement": -11
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 93,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 96,
            "movement": 6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 103,
            "movement": 4
          },
          {
            "country": "IN",
            "name": "India",
            "position": 104,
            "movement": -26
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 110,
            "movement": -6
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 119,
            "movement": -25
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 126,
            "movement": -13
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 127,
            "movement": -11
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 129,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 138,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 150,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 49,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": 17
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 58,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 62,
            "movement": -6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 74,
            "movement": -12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 78,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 80,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 82,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 87,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 88,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 89,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": -22
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 99,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 101,
            "movement": -16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 105,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 127,
            "movement": -16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 128,
            "movement": 8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 149,
            "movement": -25
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 151,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 169,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 179,
            "movement": 10
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
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 4,
            "movement": 48
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 78,
            "movement": -24
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 90,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 98,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 17,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 88,
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 19,
            "movement": 25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 33,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": 5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 46,
            "movement": 23
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 48,
            "movement": 28
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 63,
            "movement": -38
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 67,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 73
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 84,
            "movement": -32
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 84,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 85,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 29
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 125,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 140,
            "movement": -17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 140,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 148,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 156,
            "movement": 11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 158,
            "movement": -45
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 159,
            "movement": 21
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -22
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 182,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": 6
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
            "position": 15,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 28,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 36,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": -10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 41,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 48,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 58,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 69,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 86,
            "movement": -9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 93,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 96,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": -25
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 98,
            "movement": -24
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 108,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 123,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 143,
            "movement": -23
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 146,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -34
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 152,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 160,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -35
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
            "position": 53,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
            "position": 28,
            "movement": -15
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 67,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 35
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 113,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 147,
            "movement": -98
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 165,
            "movement": -126
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 193,
            "movement": -84
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
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 55
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 61
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 123,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 20
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
            "position": 149,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
            "movement": -8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 199,
            "movement": -112
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
            "position": 14,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": 55
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 56,
            "movement": 23
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 83,
            "movement": -33
          },
          {
            "country": "US",
            "name": "United States",
            "position": 118,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 151,
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
            "position": 5,
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
            "position": 46,
            "movement": -1
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
            "position": 51,
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
            "movement": 0
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
            "country": "SR",
            "name": "Suriname",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 98,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "position": 61,
            "movement": -13
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 75,
            "movement": -5
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
            "position": 102,
            "movement": 9
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
            "position": 77,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 121,
            "movement": 33
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 47
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 143,
            "movement": 17
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 182,
            "movement": -88
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 192,
            "movement": -5
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
            "position": 156,
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
            "position": 27,
            "movement": 101
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 80,
            "movement": -48
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 112,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 133,
            "movement": -104
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 191,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 41,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
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
            "position": 174,
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
            "position": 184,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 25
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
            "position": 57,
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
    "title": "Interference",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
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
    "title": "Looku Looku",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8bdc17b8c3975562fbbb659adbfb1fac/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": -20
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
            "position": 148,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 54,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
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
  