// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=tems from kworb's artist page.
  //
  // PLATFORM chart data for Tems: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-08-28";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
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
            "position": 5,
            "movement": 3
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 12,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 13,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 14,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 18,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 23,
            "movement": 18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 28,
            "movement": -12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 28,
            "movement": 14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 29,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 29,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 37,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 41,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 41,
            "movement": -13
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 44,
            "movement": 10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": 4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 46,
            "movement": -34
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 46,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 49,
            "movement": -18
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 51,
            "movement": 25
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 52,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 52,
            "movement": -19
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 58,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 60,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 64,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 65,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 66,
            "movement": 58
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 69,
            "movement": 15
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 69,
            "movement": 12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": -9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 75,
            "movement": 98
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 82,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 85,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 87,
            "movement": 65
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -24
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 88,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": -20
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": -29
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 98,
            "movement": -7
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 100,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 101,
            "movement": -29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 105,
            "movement": -17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 110,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 111,
            "movement": -10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 123,
            "movement": 13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 126,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 135,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 137,
            "movement": -11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 137,
            "movement": 11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 139,
            "movement": -75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 181,
            "movement": -119
          },
          {
            "country": "FR",
            "name": "France",
            "position": 182,
            "movement": -6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 187,
            "movement": 10
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 190,
            "movement": -27
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 193,
            "movement": -5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 195,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 196,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 197,
            "movement": -25
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
            "position": 10,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 14,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 20,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 22,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 23,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 24,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 35,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 37,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 42,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 43,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 46,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 59,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 66,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 82,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 88,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 89,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 90,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 96,
            "movement": 10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 97,
            "movement": 8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 99,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 101,
            "movement": 4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 106,
            "movement": 6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 106,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 109,
            "movement": 6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 115,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 13
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 127,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 130,
            "movement": 15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 150,
            "movement": -23
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 151,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 151,
            "movement": -21
          },
          {
            "country": "IN",
            "name": "India",
            "position": 151,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 161,
            "movement": -16
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 162,
            "movement": 4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 165,
            "movement": 13
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 171,
            "movement": -10
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 177,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 177,
            "movement": -12
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 179,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 193,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 198,
            "movement": -18
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 24,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 59,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 77,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 81,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 87,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 89,
            "movement": 7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 93,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 94,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 100,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 101,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 105,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 106,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 111,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 119,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 131,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 160,
            "movement": -26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 192,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 200,
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
            "position": 14,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 47,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 50,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GR",
            "name": "Greece",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 4,
            "movement": -2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 7,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": -5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 46,
            "movement": -41
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 46,
            "movement": -17
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 81,
            "movement": 97
          },
          {
            "country": "IN",
            "name": "India",
            "position": 130,
            "movement": -24
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
            "position": 30,
            "movement": 6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 92,
            "movement": -82
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
            "country": "BZ",
            "name": "Belize",
            "position": 31,
            "movement": 11
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 33,
            "movement": -14
          },
          {
            "country": "US",
            "name": "United States",
            "position": 35,
            "movement": -13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 51,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 54,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -23
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 67,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -47
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 89,
            "movement": -38
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 96,
            "movement": 10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 98,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": -60
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
            "movement": -24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 122,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 129,
            "movement": -27
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 139,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 178,
            "movement": -114
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 188,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 46,
            "movement": 7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 67,
            "movement": -43
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 163,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 177,
            "movement": -128
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": -11
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
            "position": 5,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 80,
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
            "position": 159,
            "movement": -30
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
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -18
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 77,
            "movement": 46
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": 85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 40
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 108,
            "movement": 91
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": 10
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
            "position": 20,
            "movement": -15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": -15
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 137,
            "movement": -18
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
            "position": 24,
            "movement": -21
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
            "position": 35,
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
            "position": 11,
            "movement": 3
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 85,
            "movement": 5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 95,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 180,
            "movement": -51
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 183,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -68
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 195,
            "movement": -11
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
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": 3
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
            "position": 193,
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
            "position": 143,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 31,
            "movement": 34
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 58,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 181,
            "movement": -60
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 199,
            "movement": -110
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
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -24
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
            "position": 93,
            "movement": 25
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
            "position": 103,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": 21
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 190,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": -82
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bunce Road Blues",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 87,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 85,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 156,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
            "movement": 0
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  