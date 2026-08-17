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
  export const liveChartsUpdated = "2026-08-17";
  
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
            "position": 8,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 10,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 19,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 21,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 23,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 24,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 25,
            "movement": 16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 26,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 28,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 29,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 29,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 21
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 36,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 40,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 41,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 43,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 44,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -18
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 45,
            "movement": 33
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 45,
            "movement": 18
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 47,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 48,
            "movement": 44
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 51,
            "movement": 98
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 52,
            "movement": -16
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 52,
            "movement": 22
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 53,
            "movement": -14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 53,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": 8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 64,
            "movement": 38
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 68,
            "movement": -20
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 69,
            "movement": 22
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 73,
            "movement": -18
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 74,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 74,
            "movement": 16
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 74,
            "movement": -34
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 76,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 83,
            "movement": -16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": 46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 89,
            "movement": 23
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 89,
            "movement": 14
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 90,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 90,
            "movement": 39
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 99,
            "movement": 34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 104,
            "movement": 56
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 105,
            "movement": 94
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 108,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 113,
            "movement": 4
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 116,
            "movement": 29
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 117,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 126,
            "movement": 38
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 136,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": -31
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 151,
            "movement": 14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 151,
            "movement": 18
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 154,
            "movement": -73
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 4
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 172,
            "movement": 18
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 187,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
            "movement": -46
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 22,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": 2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 33,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 36,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 44,
            "movement": 18
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 50,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 50,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 62,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 71,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 80,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 87,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 91,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 98,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 99,
            "movement": 2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 100,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 108,
            "movement": -13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 110,
            "movement": -12
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 113,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 127,
            "movement": -14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 127,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 128,
            "movement": -9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 132,
            "movement": 6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 134,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 148,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 149,
            "movement": -7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 149,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 153,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 153,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 154,
            "movement": 19
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 156,
            "movement": -32
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 162,
            "movement": -4
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 167,
            "movement": -28
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 170,
            "movement": -9
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 170,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 173,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -10
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 182,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
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
            "position": 8,
            "movement": 0
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
            "position": 27,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 35,
            "movement": 8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 37,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 41,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 45,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 55,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 59,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": 16
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 67,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 85,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 87,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 93,
            "movement": 13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 95,
            "movement": -15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 97,
            "movement": 9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 103,
            "movement": -8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 113,
            "movement": 25
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 113,
            "movement": 21
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 120,
            "movement": 51
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 132,
            "movement": 17
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 136,
            "movement": 23
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 152,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 193,
            "movement": -33
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 198,
            "movement": -6
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
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 21,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 48,
            "movement": -7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": 181
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 18,
            "movement": -4
          },
          {
            "country": "IN",
            "name": "India",
            "position": 24,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 111,
            "movement": -57
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 172,
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 31
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 92,
            "movement": -51
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 100,
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
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 47
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
            "movement": 39
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 37,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": 9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 53,
            "movement": 27
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 61,
            "movement": 30
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 63,
            "movement": 10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 67,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 26
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": 17
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 100,
            "movement": -46
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 113,
            "movement": 18
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 141,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 28
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": 9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 30,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 75,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": 77
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 142,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -42
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 172,
            "movement": -7
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 178,
            "movement": -126
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 181,
            "movement": 10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 7,
            "movement": -2
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 153,
            "movement": -26
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
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
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 98,
            "movement": 36
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 107,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 136,
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
            "position": 14,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 188,
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
            "position": 29,
            "movement": 0
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
            "country": "ML",
            "name": "Mali",
            "position": 46,
            "movement": 20
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 66,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 122
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 130,
            "movement": 52
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 196,
            "movement": -113
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
            "country": "BM",
            "name": "Bermuda",
            "position": 104,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 150,
            "movement": -8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 151,
            "movement": -77
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": 12
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 138,
            "movement": 39
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
            "position": 10,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -32
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
            "position": 69,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -54
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
            "position": 141,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 37,
            "movement": -1
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
            "position": 160,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
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
            "position": 105,
            "movement": 1
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
            "position": 132,
            "movement": 1
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
  